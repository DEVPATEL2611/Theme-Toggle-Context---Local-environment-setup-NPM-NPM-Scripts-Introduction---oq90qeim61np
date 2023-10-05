'use client'
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () => {
    const {theme,setTheme} = useContext(ThemeContext);
    const handleClick = ()=>{
        theme === "light" ? setTheme("dark") : setTheme("light")
    }
    console.log(theme)
    return (
       <>
        <button id="global-theme-toggler" className={`btn btn-${theme} txt-${theme}`} onClick={handleClick}>
        Switch to {theme === "light" ? "dark" : "light"} theme
        </button>
       </>
    )

}
export {ThemeToggleButton}