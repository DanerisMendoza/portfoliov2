import { PortfolioStore } from "@/app/segment/portfolio/store";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Keyboard, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useEffect, useState } from "react";
import { DynamicSystemLogo } from "@/app/segment/portfolio/component/DynamicSystemLogo";

export default function () {
    const { project_dialog, set_project_dialog, selected_project, set_selected_project, set_selected_images, selected_images } = PortfolioStore();
    const [systemLogo, setSystemLogo] = useState(DynamicSystemLogo("#000000"));
    const [swiper, setSwiper] = useState(null);
    
    const getImageDimensions = async (blob: any) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve({ width: img.width, height: img.height });
            };
            img.onerror = reject;
            img.src = URL.createObjectURL(blob);
        });
    };

    const fetchImages = async () => {
        try {
            if (selected_project.name !== '') {
                const imagesPathWeb = `${selected_project.images_path}/web`;
                const imagesPathMobile = `${selected_project.images_path}/mobile`;

                const imagePromisesWeb = [];
                for (let index = 0; index < selected_project.images_num_web; index++) {
                    try {
                        const response = await fetch(`${imagesPathWeb}/${index + 1}.png`);
                        if (!response.ok) {
                            throw new Error(`Failed to fetch web image ${index + 1}`);
                        }
                        const blob = await response.blob();
                        const dimensions = await getImageDimensions(blob);
                        imagePromisesWeb.push({ blob, dimensions });
                    } catch (error) {
                        // Handle errors here if needed
                        console.error(error);
                    }
                }
                const imagePromisesMobile = [];
                for (let index = 0; index < selected_project.images_num_mobile!; index++) {
                    try {
                        const response = await fetch(`${imagesPathMobile}/${index + 1}.png`);
                        if (!response.ok) {
                            throw new Error(`Failed to fetch web image ${index + 1}`);
                        }
                        const blob = await response.blob();
                        const dimensions = await getImageDimensions(blob);
                        imagePromisesMobile.push({ blob, dimensions });
                    } catch (error) {
                        // Handle errors here if needed
                        console.error(error);
                    }
                }

                try {
                    const imagesWebWithDimensions = await Promise.all(imagePromisesWeb);
                    const imagesMobileWithDimensions = await Promise.all(imagePromisesMobile);
                    const imagesWebObjects = imagesWebWithDimensions.map(({ blob, dimensions }, index) => ({
                        src: blob,
                        platform: 'img_slide_web',
                        folder: 'web',
                        width: (dimensions as any).width,
                        height: (dimensions as any).height,
                        index: index + 1
                    }));

                    const imagesMobileObjects = imagesMobileWithDimensions.map(({ blob, dimensions }, index) => ({
                        src: blob,
                        platform: 'img_slide_mobile',
                        folder: 'mobile',
                        width: (dimensions as any).width,
                        height: (dimensions as any).height,
                        index: index + 1
                    }));
                    let combinedImages = []
                    if (selected_project.isWebFirst) {
                        combinedImages = [...imagesWebObjects, ...imagesMobileObjects];
                    } else {
                        combinedImages = [...imagesMobileObjects, ...imagesWebObjects];
                    }
                    set_selected_images(combinedImages);
                } catch (error) {
                    console.error(error);
                    // Handle error
                }
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, [selected_project]);

    return (
        <Swiper
            // onSwiper={setSwiper}
            className="w-full"
            pagination={{
                dynamicBullets: true,
                clickable: true
            }}
            keyboard={{
                enabled: true,
            }}
            centeredSlides={true}
            modules={[Keyboard, Navigation, Pagination]}
            navigation
            onSlideChange={(data) => {}}
            onClick={(data) => {
                // dispatch(setActiveIndex(data.activeIndex))
                // dispatch(setIsFullScreen(true))
            }}
        >
            {selected_project && (
                (selected_project.images_num_web && selected_project.images_num_web > 0) ||
                (selected_project.images_num_mobile && selected_project.images_num_mobile > 0)
            ) ? (
                <>
                    {selected_images.length > 0 && selected_images.map((item: any, index:number) => (
                        <SwiperSlide key={`web${index}`}>
                            {selected_images.platform === 'img_slide_web' ? (
                                <img
                                    className='img_slide_web'
                                    src={`${selected_project.images_path}/${item.folder}/${item.index}.png`}
                                    alt='app'
                                />
                            ) : (
                                <img
                                    className='img_slide_mobile'
                                    src={`${selected_project.images_path}/${item.folder}/${item.index}.png`}
                                    alt='app'
                                />
                            )}

                        </SwiperSlide>
                    ))}
                </>
            ) : (
                <SwiperSlide>
                    <div className="flex flex-col items-center text-center ">
                        <img className='imgSlide2 pb-9' src={systemLogo} alt='app'  />
                    </div>
                </SwiperSlide>
            )}
       
        </Swiper>
    )
}