import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar';
import { Router } from './components/Router';
import { Footer } from './components/Footer';
const App = () => {
  const [darkTheme , setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? `dark`:''}>
      <div className='bg-gray-100 dark:bg-gray-800 text-black dark:text-white w-full h-full min-h-[100vh] flex flex-col gap-5 items-center'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <div className=''><Router /></div>
        <Footer />
      </div>
    </div>
  )
}

export default App