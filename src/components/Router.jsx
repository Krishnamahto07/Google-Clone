import React from 'react'
import {Routes , Route , } from 'react-router-dom'
import Results from './Results'
import Home from './Home'
// import Switch from './Switch'
export const Router = () => {
  // const paths = ["/search", "/image", "/video", "/news"];
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<Results/>} />
          <Route path='/imagesearch' element={<Results/>} />
          <Route path='/news' element={<Results/>} />
          <Route path='/latestnews' element={<Results />} />
        {/* {paths.map((path) => (
          <Route key={path} path={path} element={<Results />} />
        ))} */}
      </Routes>
      {/* <Routes>
        <Route exact path='/'>
          <Navigate to='/search'/>
        </Route>
        <Route exact path={['/search','/images','/video','/news']}>
          <Results/>
        </Route>
      </Routes> */}
    </div>
  )
}
