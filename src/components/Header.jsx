import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    return (
        <div className="navbar bg-base-100 flex justify-center items-center border-b border-gray-700">
            <div div className="navbar-start block lg:hidden" >
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <GiHamburgerMenu size={24} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content bg-base-200 z-[1] shadow absolute w-screen -left-3 text-center">
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/about">about me</Link></li>
                        <li><Link to="/portfolio">portfolio</Link></li>
                        <li className="flex justify-center w-full">
                            <ThemeController className="inline w-fit">
                                <span className="ml-2">Tema Değiştir</span>
                            </ThemeController>
                        </li>
                    </ul>
                </div>
            </div>
            <header className="navbar-center gap-x-36  text-xl">
                <Link className="lg:block hidden" to="/">home</Link>
                <Link className="lg:block hidden" to="/about">about me</Link>
                <Link className="logo text-4xl font-black lg:mt-1" to="/">yunusemretopcu</Link>
                <Link className="lg:block hidden" to="/portfolio">portfolio</Link>
                <ThemeController className="lg:block hidden" />
            </header >
        </div >
    )
}