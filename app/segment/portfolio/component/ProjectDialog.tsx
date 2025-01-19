import { PortfolioStore } from "@/app/segment/portfolio/store";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectVal } from "@/app/segment/portfolio/values";
import NestedCarousel from "@/app/segment/portfolio/component/NestedCarousel";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import slidesData from '@/app/segment/portfolio/values/project_values.json';

export default function ProjectDialog() {
    const { project_dialog, set_project_dialog, selected_project, set_selected_project, set_selected_project_index, selected_project_index } = PortfolioStore();
    const projects: ProjectType[] = slidesData;
    // clear the state on unmount
    useEffect(() => {
        if (!project_dialog) {
            return (set_selected_project(ProjectVal))
        }
    }, [project_dialog])

    useEffect(() => {
        return (console.log(selected_project.images_path));
    }, [selected_project])


    const header = () => {
        return (
            <div className="bg-black w-full h-[7%] sm:h-[5%] text-white flex flex-col justify-center p-2 sm:p-2 items-start">
                <div className="flex justify-between  w-full p-2">
                    <div className="cursor-pointer" onClick={() => { set_project_dialog(false) }}>
                        {/* <FontAwesomeIcon icon={faArrowLeft} size="xl" /> */}
                        Back
                    </div>
                    {guide()}
                </div>
            </div>
        )
    }

    const guide = () => {
        return (
            <div className="flex gap-2">
                <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer" size="xl" onClick={() => {
                    set_selected_project(projects[selected_project_index - 1])
                }} />
                <div>{selected_project.name}</div>
                <FontAwesomeIcon icon={faArrowRight} className="cursor-pointer" size="xl" onClick={() => {
                    set_selected_project(projects[selected_project_index + 1])
                }} />
            </div>
        )
    }

    return (
        <Dialog open={project_dialog} onOpenChange={set_project_dialog}>
            <DialogContent hideCloseButton={true} fullscreen={true} className="min-w-full min-h-screen h-screen w-screen bg-gray-100 rounded-md flex flex-col dark:bg-[#18191a]">
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
                {header()}

                <div className='flex flex-col sm:flex-row w-full m-2 h-full'>

                    <div className="bg-gray-200 h-[50%] w-[95%]  sm:w-[70%] sm:h-full flex flex-col justify-center sm:pb-36 dark:bg-[#242526] rounded-2xl">
                        <NestedCarousel />
                    </div>


                    <div className="bg-white w-[95%] sm:w-[30%] sm:h-full p-4 flex flex-col gap-2  dark:text-white dark:bg-[#31363F] rounded-2xl">

                        <div className='flex flex-row  flex-wrap gap-1 items-center' >
                            <div>Technology Used:&nbsp;</div>
                            {selected_project && selected_project.technology && selected_project.technology.map((item, index) => (
                                <Badge key={index}  >{item}</Badge>
                            ))}
                        </div>

                        <div className='flex flex-row gap-1 items-center'>
                            <div>Project Type:&nbsp;</div>
                            <Badge>{selected_project.type}</Badge>
                        </div>

                        <div className='flex flex-row gap-1 items-center'>
                            <div>Platform:&nbsp;</div>
                            {selected_project && selected_project.platform && selected_project.platform.map((item, index) => (
                                <Badge key={index} >{item}</Badge>
                            ))}
                        </div>

                        <div className='flex flex-row flex-wrap gap-1 items-center' >
                            <div>Status:&nbsp;</div>
                            {selected_project && selected_project.status && selected_project.status.map((item, index) => (
                                <Badge key={index}>{item}</Badge>
                            ))}
                        </div>


                        <div className='flex flex-row gap-1 items-center'>
                            <div>Role:&nbsp;</div>
                            {selected_project && selected_project.role && selected_project.role.map((item, index) => (
                                <Badge key={index}>{item}</Badge>
                            ))}
                        </div>


                        <div className='flex flex-col '>
                            <div className='pr-6'>{selected_project.long_description}</div>
                        </div>

                        {selected_project && selected_project.higlights && (
                            <>
                                <div className='flex flex-col flex-wrap gap-1  '>
                                    {selected_project.higlights.map((item, index) => (
                                        <p key={index}>• {item}.</p>
                                    ))}
                                </div>
                            </>
                        )}

                        {selected_project && selected_project.demo_accounts && (
                            <>
                                <div className='flex flex-col  text-sm overflow-y-auto '>
                                    <div>Demo Accounts:&nbsp;</div>
                                    <Accordion type="single" collapsible >
                                        {selected_project.demo_accounts.map((item, index) => (
                                            <AccordionItem key={`role${item.role}${index}`} value={`role${item.role}${index}`}>
                                                <AccordionTrigger>{item.role}</AccordionTrigger>
                                                <AccordionContent className="pl-20">
                                                    <Accordion type="single" collapsible className="">
                                                        <div className="p-2">Username: {item.username}</div>
                                                        <div className="p-2 pb-8">Password: {item.password}</div>
                                                    </Accordion>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </>
                        )}


                    </div>


                </div>

            </DialogContent>
        </Dialog>
    );
}