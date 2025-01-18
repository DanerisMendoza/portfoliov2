import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="bg-background  sm:sticky top-0  border-b z-10 pt-1 pb-1">
      <div className="container flex h-full items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* <MainNav items={siteConfig.mainNav} /> */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <Link href="#home" className="cursor-pointer" data-aos="fade-top" data-aos-delay="800" data-aos-duration="500">Home</Link>
            <Link href="#portfolio" className="cursor-pointer Tab" data-aos="fade-top" data-aos-delay="900" data-aos-duration="500">Portfolio</Link>
            <Link href="#experience" className="cursor-pointer" data-aos="fade-top" data-aos-delay="1000" data-aos-duration="500">Experience</Link>
            <Link href="#skills" className="cursor-pointer" data-aos="fade-top" data-aos-delay="1100" data-aos-duration="500">Skills</Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
