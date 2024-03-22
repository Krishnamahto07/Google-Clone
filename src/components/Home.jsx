import React from 'react'

export const Home = () => {
  return (
    <div className="w-full flex py-5 justify-center flex-col mx-auto items-center sm:px-auto px-3  dark:bg-slate-800
    text-gray-700 dark:text-gray-200 gap-5">
        <h1 className=" text-3xl font-semibold ">Welcome</h1>
        <div className="w-6/12 sm:w-4/12 "><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
        alt="google img" width="full" /></div>
        <p className="text-xl font-semibold ">Type Your Query here !!!</p>

    </div>
  )
}
