'use client'
import React, { useContext, useState,useEffect } from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
    const {theme,setTheme} = useContext(ThemeContext);
    const [localTheme,setLocalTheme] = useState("light");
    const toggleLocalTheme = ()=>{
        if(localTheme==="light") setLocalTheme("dark");
        else setLocalTheme("light");
    }

    useEffect(()=>{
        toggleLocalTheme();
    },[])
    useEffect(()=>{
        if(theme==="light") setLocalTheme("light");
        else setLocalTheme("dark")
    },[theme])
return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} className={`bg-${localTheme}`} id="local-themed-box">
        {/* Write code below this line */}
        <p className={'txt-'+localTheme} id="local-themed-text-container" >Hiii</p>
        <button className={'btn btn-'+localTheme} onClick={toggleLocalTheme} id="local-theme-toggler">Toggle local theme to {localTheme === "light" ? "dark" : "light"}</button>
    </div>
)
}

export { LocalThemedBox }