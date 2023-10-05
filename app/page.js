'use client'
import React, { useState } from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import { ThemeToggleButton } from './components/ThemeToggleButton'
import { Main } from './Main'

function Home() {
  const [theme,setTheme] = useState("light");
  return (
    <div id='main'>
      <ThemeProvider value={{theme:theme,setTheme:setTheme}}>
      <Main/>
      <ThemeToggleButton/>
      </ThemeProvider>
    </div>
  )
}

export default Home
