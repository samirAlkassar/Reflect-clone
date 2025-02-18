import Link from "next/link"
import { Button } from "../components/Button"
import { HamburgerIcon } from "./icons/HamburgerIcon"
export const Header = () => {
    return (
        <header className="max-w-[1296px] fixed z-50 top-0 left-0 right-0 backdrop-blur-[16px] mx-auto py-11 px-9 flex justify-between items-center after:absolute after:w-full after:h-[1px] after:bg-nav-border after:bottom-0 after:left-0">
            <HeaderLogo />
            <HeaderNav />
            <HeaderButton />
        </header>
    );
};

const HeaderLogo = () =>{
    return (
        <div className="flex items-center">
        <img src="/logo.png" alt="Reflect" width={36} height={36} className="mr-5"/>
        <h1>Reflect</h1>
        </div>
    )
}

const HeaderNav = () =>{
    return (
        <ul className="hidden translate-x-[10%] text-navcolor text-sm hover:[&_a]:text-navhover [&_a]:transform [&_a]:transition-all [&_a]:duration-300 xl:flex py-4 px-5 [&_li]:mx-5 font-xm border border-offwhite rounded-full bg-navbackground">
            <li>
                <Link href="#">Product</Link>
            </li>
            <li>
                <Link href="#">Pricing</Link>
            </li>
            <li>
                <Link href="#">Company</Link>
            </li>
            <li>
                <Link href="#">Blog</Link>
            </li>
            <li>
                <Link href="#">Changelog</Link>
            </li>
        </ul>
    )
}


const HeaderButton = () => {
    return (
        <div className="flex items-center">
            <Link href="#" className="mr-10 text-sm">Login</Link>
            <Button variant="primary" size="medium" href="#">
                <p className="text-sm lg:block hidden">Start free trial</p>
                <p className="text-sm lg:hidden block">Sign up</p>
            </Button>
            <HamburgerIcon className="lg:hidden block p-1 ml-8 w-[30px] h-[24px] cursor-pointer" />
        </div>
    )
}