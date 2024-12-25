import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"
  
const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="allign-middle"><Image src="/assets/icons/menu.svg" width={24} height={24} alt="menu"/></SheetTrigger>
            <SheetContent className="flex flex-col bg-white gap-6 md:hidden">
                <Image src='/assets/images/logo.svg' width={128} height={38} alt="logo"/>
                <Separator className="border border-gray-50"/>
                <NavItems/>
            </SheetContent>
        </Sheet>

    </nav>
  )
}

export default MobileNav