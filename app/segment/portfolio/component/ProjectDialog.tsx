import { PortfolioStore } from "@/app/segment/portfolio/store";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectVal } from "@/app/segment/portfolio/values";

export default function ProjectDialog() {
    const { project_dialog, set_project_dialog, selected_project, set_selected_project } = PortfolioStore();

    // clear the state on unmount
    useEffect(() => {
        if (!project_dialog) {
            return (set_selected_project(ProjectVal))
        }
    }, [project_dialog])

    useEffect(() => {
        return (console.log(selected_project));
    }, [selected_project])

    return (
        <Dialog open={project_dialog} onOpenChange={set_project_dialog}>
            <DialogContent hideCloseButton={true} noPadding={true} className="min-w-full h-screen bg-gray-100 rounded-md">
                <DialogHeader>
                    <div className="bg-black w-full h-[10%] text-white flex flex-col justify-center p-2 items-start">
                        <div className="cursor-pointer" onClick={()=>{set_project_dialog(false)}}>
                            <FontAwesomeIcon icon={faArrowLeft} size="xl" /> Back
                        </div>
                    </div>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className=' flex flex-col gap-8'>

                </div>
            </DialogContent>
        </Dialog>
    );
}