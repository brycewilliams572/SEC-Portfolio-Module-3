const themeKey = "portfolio-theme";
const savedTheme = localStorage.getItem(themeKey);
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

document.documentElement.dataset.theme = savedTheme || preferredTheme;

document.addEventListener("DOMContentLoaded", function (){
    const themeToggle = document.querySelector("#theme-toggle");

    function updateButton(){
        const isDark = document.documentElement.dataset.theme === "dark";

        themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
        themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode": "Switch to dark mode");
    }

    themeToggle.addEventListener("click", function(){
        const currentTheme = document.documentElement.dataset.theme;
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem(themeKey, newTheme);
        updateButton();
    });

updateButton(); 
});