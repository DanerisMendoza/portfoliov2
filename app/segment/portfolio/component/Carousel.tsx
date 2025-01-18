"use client";
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis, faLink } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slidesData from '@/app/segment/portfolio/values.json';
import { Keyboard, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Badge } from "@/components/ui/badge"
import { GlobalStore } from '@/app/GlobalStore'
import { DynamicSystemLogo } from "@/app/segment/portfolio/component/DynamicSystemLogo";
export default function Carousel() {

  const { is_dark } = GlobalStore();

  useEffect(() => {
    console.log(slidesData)
  }, [])

  const handleClickOpen = (project: any, index: number) => {

  }

  const setMultipleLinks = (project: any) => {

  }
  const [systemLogo, setSystemLogo] = useState(DynamicSystemLogo("#000000"));

  return (
    <Swiper
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-duration="600"
      className='swiper1 '
      slidesPerView={3}
      spaceBetween={30}
      centeredSlides={true}
      // centeredSlidesBounds={true}
      modules={[Keyboard, Navigation, Pagination]}
      navigation
      pagination={{
        dynamicBullets: true,
        clickable: true
      }}
      breakpoints={{
        200: {
          slidesPerView: 1,
        },
        600: { slidesPerView: 2 },
        768: { slidesPerView: 3 }
      }}
      keyboard={{
        enabled: true,
      }}
      initialSlide={0}
    >

      {slidesData.map((project, index) => (
        <SwiperSlide key={project.name} style={{ height: '33rem', display: 'flex', alignItems: 'center', padding: '1rem' }} >
          <Card className='rounded-xl w-full' style={{
            // ff = white && 00 = black
            backgroundColor: is_dark ? '#31363F' : '#ffffff'
          }}>
            <CardContent >
              <div className="flex flex-col justify-start bg-white w-full h-96 p-6  m-center   " style={{
                // ff = white && 00 = black
                backgroundColor: is_dark ? '#31363F' : '#ffffff'
              }}>
                <Badge className="mb-2 self-end  dark:text-black">
                  {project.type}
                </Badge>
                <div className="grow flex flex-col items-center text-center  dark:text-white">
                  <img src={systemLogo} alt='app' />

                  <p className=' text-2xl font-semibold  dark:text-white'>{project.name}</p>
                  <p className=' text-xl text-gray-400  dark:text-white'>{project.description}</p>
                </div>
                <div className="self-center flex flex-row gap-3 items-center">
                  {!Array.isArray(project.source_code) && project.source_code ? (
                    <a href={project.source_code} target="_blank" className="text-blue-500 grow enlarge">
                      <FontAwesomeIcon icon={faGithub} size="2xl" />
                    </a>
                  ) : project.source_code.length > 0 && (
                    <>
                      <FontAwesomeIcon icon={faGithub} size="2xl" className="text-blue-500 grow enlarge" onClick={() => setMultipleLinks(project.source_code)} />
                    </>
                  )}
                  <FontAwesomeIcon onClick={() => handleClickOpen(project, index)} className='enlarge pl-2 pr-2 ' style={{color: is_dark ? '#ffffff' : '#000000', border: is_dark ? '1px solid #ffffff' : '1px solid #000000', borderRadius: '12%'}} icon={faEllipsis} size="2xl" />
                  {project.project_link && (
                    <a href={project.project_link} target="_blank" className="text-blue-500 grow enlarge">
                      <FontAwesomeIcon icon={faLink} size="2xl" />
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
