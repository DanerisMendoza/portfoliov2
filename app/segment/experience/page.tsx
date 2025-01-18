import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimeline } from "@fortawesome/free-solid-svg-icons";
import Timeline from "@/app/segment/experience/component/timeline";
import events from '@/app/segment/experience/value.json';

export default function Experience() {

  useEffect(() => {
    console.log(events)
  }, [])

  return (
    <div className="container pb-28 pt-8" id="experience">
      <div className='flex flex-row items-center justify-center text-5xl dark:text-white gap-5'
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        <FontAwesomeIcon icon={faTimeline} />
        <p >Experience</p>
      </div>
      <Timeline events={events} />
    </div >
  )
}
