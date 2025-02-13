import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Carousel from "@/app/segment/portfolio/component/Carousel"
import SrcDialog from "@/app/segment/portfolio/component/SrcDialog";
import ProjectDialog from "@/app/segment/portfolio/component/ProjectDialog";

export default function Porfolio() {


  return (
    <div className=" h-[100%] w-full flex flex-col justify-center pb-28" id="portfolio">
      <div className=" sm:bg-gray-100 sm:dark:bg-background  md:p-6  overflow-hidden">
        <div className="sm:container">
          <div className='flex flex-row items-center justify-center text-5xl dark:text-white gap-5'
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <FontAwesomeIcon icon={faCode} />
            <p >Portfolio</p>
          </div>
          <Carousel />
          <SrcDialog />
          <ProjectDialog />
        </div>
      </div>
    </div>
  )
}
