import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";
import skillsData from "@/app/segment/skills/value.json";

export default function Skills() {

  return (
    <div className="sm:h-[90%] container  pb-10" id="skills">
      <div
        className="flex flex-row items-center justify-center text-5xl dark:text-white gap-5 p-10"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        <FontAwesomeIcon icon={faToolbox} />
        <p>Skills</p>
      </div>
      <div className="flex flex-col lg:flex-row sm:mt-8 gap-2">
        {Object.entries(skillsData.skills).map(([category, skills], index) => (
          <Card
            key={category}
            className="bg-white dark:bg-[#31363F] flex-grow"
            data-aos="fade-down"
            data-aos-delay={500 + (index * 100)}
            data-aos-duration="600"
          >
            <CardContent>
              <div className="h-full flex flex-col justify-between">
                <h2 className="pt-2 text-2xl dark:text-white text-center ">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>
                <div className="grid grid-cols-4 gap-4 m-auto lg:px-10 px-5 pt-5">
                  {skills.map(skill => (
                    <div key={skill.name} className=" card-mini text-center">
                      <img src={skill.image} className="h-14 mx-auto" alt={skill.name} />
                      <span className="block mt-2">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
