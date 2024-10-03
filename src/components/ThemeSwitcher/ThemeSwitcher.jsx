import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  // Toggle theme function
  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark"); // Set data-theme to dark
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light"); // Set data-theme to light
    }
  };

  // Effect to read from localStorage and set the initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"; // Default to light if not found
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark"); // Set dark class based on saved theme
    document.documentElement.setAttribute("data-theme", savedTheme); // Set data-theme attribute
  }, []);

  // Effect to save theme to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <label className='cursor-pointer grid place-items-center'>
      <input
        onChange={handleToggle}
        type='checkbox'
        checked={theme === "dark"} // Check if the current theme is dark
        className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
      />
      {/* Sun icon */}
      <svg
        className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='14'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <circle cx='12' cy='12' r='5' />
        <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
      </svg>

      {/* Moon icon */}
      <svg
        className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='14'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
      </svg>
    </label>
  );
};

export default ThemeSwitcher;
