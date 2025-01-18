import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* <MainNav items={siteConfig.mainNav} /> */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <p className="cursor-pointer"
              data-aos="fade-top"
              data-aos-delay="800"
              data-aos-duration="500">Home</p>
            <p className="cursor-pointer Tab"
              data-aos="fade-top"
              data-aos-delay="900"
              data-aos-duration="500">Porfolio</p>
            <p className="cursor-pointer"
              data-aos="fade-top"
              data-aos-delay="1000"
              data-aos-duration="500">Experience</p>
            <p className="cursor-pointer"
              data-aos="fade-top"
              data-aos-delay="1100"
              data-aos-duration="500">Skills</p>
            <ThemeToggle 
            />
          </nav>
        </div>
      </div>
    </header>
  )
}
