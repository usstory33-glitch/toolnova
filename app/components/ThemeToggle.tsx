"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            setDarkMode(false);
            document.documentElement.classList.add("light");
        } else {
            setDarkMode(true);
            document.documentElement.classList.remove("light");
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="rounded-lg border border-slate-700 px-3 py-2 transition hover:border-cyan-400"
        >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
}