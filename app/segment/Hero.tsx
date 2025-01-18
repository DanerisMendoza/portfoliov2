"use client";
import { Button } from "@/components/ui/button"
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {

    return (
        <div className="container flex flex-col sm:pl-28 pt-2 sm:pt-40 h-full " id="home">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-around w-full">
                <div className="flex flex-col justify-between sm:w-2/3 sm:p-1  text-center sm:text-start items-center sm:items-start">
                    <div className="flex flex-col gap-2 ">
                        <h1
                            className="font-extrabold text-3xl sm:text-6xl   text-black dark:text-white "
                            data-aos="fade-right"
                            data-aos-delay="800"
                            data-aos-duration="500"
                        >
                            Daneris Mendoza
                        </h1>
                        <h2
                            className="text-xl text-gray-500  lg:text-4xl dark:text-white"
                            data-aos="fade-right"
                            data-aos-delay="800"
                            data-aos-duration="500"
                        >
                            I'm a Software Developer
                        </h2>
                        <div className="">
                            <h5
                                className=" text-base text-gray-500 lg:text-2xl sm:max-w-[80%] dark:text-white"
                                data-aos="fade-right"
                                data-aos-delay="800"
                                data-aos-duration="500"
                            >
                                “Committed to delivering quality solutions and focusing on everyday growth”
                            </h5>
                        </div>
                    </div>

                    <div
                        className="mt-4 md:mt-6  flex flex-row items-center gap-2 dark:text-white "
                        data-aos="fade-right"
                        data-aos-delay="800"
                        data-aos-duration="500"
                    >
                        <a className="enlarge_litle" href="mailto:danerismendoza096@gmail.com">
                            <Button
                                className="flex gap-2"
                            >
                                Contact Me
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Button>
                        </a>
                        <a
                            className="enlarge"
                            href="https://github.com/DanerisMendoza"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2xl" />
                        </a>
                        <a
                            className="enlarge"
                            href="https://www.linkedin.com/in/danerismendoza/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                        </a>
                    </div>
                </div>
                <div className="w-2/3 sm:w-1/5 ">
                    <img
                        data-aos="fade-left"
                        data-aos-delay="800"
                        data-aos-duration="500"
                        src="/images/danerisGraduatePic.png"
                        className=" object-cover danerisGraduatePic rounded-lg"
                        alt="DanerisProfilePicture"
                    />
                </div>
            </div>
        </div >
    );
}

export default Hero;