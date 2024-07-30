import { useEffect, useState } from "react";

export default function ThemeController({ className, children }) {
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
        <label className={`swap swap-rotate ${className}`}>
            <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
            {theme === "dark" && <>🌕</>}
            {theme === "light" && <>🌑</>}
            {children}
        </label>
    );
}
