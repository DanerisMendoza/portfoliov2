import { PortfolioStore } from "@/app/segment/portfolio/store";
import { useEffect } from "react";

export default function SrcDialog() {
    const { multiple_link } = PortfolioStore();

    useEffect(()=>{
        console.log(multiple_link)
    },[multiple_link])

    return (
        <div>

        </div>
    );
}