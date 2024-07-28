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
            {theme === "dark" && <>🌕</>}
            {theme === "light" && <>🌑</>}
        </label>
    );
}
