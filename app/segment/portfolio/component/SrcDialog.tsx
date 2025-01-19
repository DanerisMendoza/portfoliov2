import { PortfolioStore } from "@/app/segment/portfolio/store";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SrcDialog() {
    const { multiple_link, set_multiple_links } = PortfolioStore();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (multiple_link.length > 0) {
            setOpen(true)
        }
    }, [multiple_link])

    useEffect(() => {
        if (multiple_link.length > 0 && open === false) {
            set_multiple_links([])
        }
    }, [open])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
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