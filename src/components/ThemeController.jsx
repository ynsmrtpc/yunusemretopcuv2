import { PiMoonStarsFill } from "react-icons/pi";
import { ImSun } from "react-icons/im";
import { useEffect, useState } from "react";

export default function ThemeController() {
    const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme ? savedTheme : "dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
            {theme === "dark" && <ImSun className='swap-on h-10 w-10 fill-current' />}
            {theme === "light" && <PiMoonStarsFill className='swap-off h-10 w-10 fill-current' />}
        </label>
    );
}
