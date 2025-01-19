import { PortfolioStore } from "@/app/segment/portfolio/store";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SrcDialog() {
    const { multiple_link, set_multiple_links, multiple_link_dialog, set_multiple_link_dialog } = PortfolioStore();

    // clear the state on unmount
    useEffect(() => {
        return (set_multiple_links(multiple_link_dialog ? multiple_link : []));
    }, [multiple_link_dialog])

    return (
        <Dialog open={multiple_link_dialog} onOpenChange={set_multiple_link_dialog}>
            <DialogContent className="w-[97%] rounded-md">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <div className=' flex flex-col gap-8'>
                    {multiple_link.map((link, index) => (
                        <div key={index}>
                            {Object.entries(link).map(([key, value]) => (
                                <div key={key} className='flex flex-col lg:flex-row gap-1 justify-center items-center'>
                                    <a href={value} target="_blank" className=" enlarge_litle text-center text-wrap ">
                                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                                        <p>{key} </p>
                                        <p className=' text-blue-500 text-xs'>{value}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}