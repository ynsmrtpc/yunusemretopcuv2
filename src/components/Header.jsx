import React from 'react';
import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";
import { GiHamburgerMenu } from "react-icons/gi";
import data from '@/data/header.json';

export default function Header() {
    const linksLeft = data.links.slice(0, 2);
    const linksRight = data.links.slice(2);
    return (
        <div className="navbar bg-base-100 flex justify-center items-center border-gray-700">
            <div className="navbar-start block lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <GiHamburgerMenu size={24} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content bg-base-200 z-[1] shadow absolute w-screen -left-3 text-center">
                        {data.links.map((link, index) => (
                            <li key={index}><Link to={link.path}>{link.label.toUpperCase()}</Link></li>
                        ))}
                        <li className="flex justify-center w-full">
                            <ThemeController className="inline w-fit">
                                <span className="ml-2">{data.theme_toggle.label}</span>
                            </ThemeController>
                        </li>
                    </ul>
                </div>
            </div>
            <header className="navbar-center gap-x-36 text-xl flex items-center justify-center">
                {linksLeft.map((link, index) => (
                    <Link key={index} className="lg:block hidden" to={link.path}>{link.label}</Link>
                ))}
                <Link className="logo text-4xl font-black lg:mt-1" to={data.logo.path}>{data.logo.label}</Link>
                {linksRight.map((link, index) => (
                    <Link key={index} className="lg:block hidden" to={link.path}>{link.label}</Link>
                ))}
                <ThemeController className="lg:block hidden" />
            </header>
        </div>
    );
}
