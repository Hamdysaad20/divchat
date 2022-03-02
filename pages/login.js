import React from 'react'
import Image from 'next/Image'
import { Avatar } from '@nextui-org/react'
function login() {
  return (
    <div className=" bglol h-full">
      <header className='  z-120   opacity-1 bg-gray-900 backdrop-blur-md sticky top-0 h-15 flex justify-center items-center font-semibold uppercase'>

<div className=' cursor-pointer select-none duration-300 px-4 rounded-xl py-1'>
  <Image
    src='/ico/divlogo.png'
    alt='navigation'
    height='32'
    width='118'
  />
</div>
</header>


<div className="w-full h-screen flex items-center justify-center">
        <form className="w-full sm:w-2/3 md:w-2/3 lg:w-1/3 backdrop-blur-md	  bg-gray-900/60  rounded-lg">
          <div className="flex font-bold justify-center mt-6">
         
         
            <Avatar
                  className="z-10"
                    src="/divico.png"
                    size='xl'
                    color='gradient'
                    bordered
                    zoomed
                  />
          </div>
          <h2   style={{
                fontFamily: "BalooBhaijaan2",
                fontWeight: "800",
                textShadow:
                  "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              }} className=" text-center text-3xl text-red-500 mb-4 mt-3 select-none ">Connect with Divzoon </h2>
          <div className="px-12 pb-10">
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user" />
                <input   style={{
                fontFamily: "BalooBhaijaan2",
                fontWeight: "500",
                textShadow:
                  "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              }} type="text" placeholder="Username" className="-mx-6    w-full border rounded px-3 py-2 bg-slate-700 text-gray-200 focus:ring-4" />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock" />
                <input   style={{
                fontFamily: "BalooBhaijaan2",
                fontWeight: "500",
                textShadow:
                  "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              }} type="password" placeholder="Password" className="-mx-6  w-full border rounded  px-3 py-2 bg-slate-700 text-gray-200 focus:ring-4" />
              </div>
            </div>
            <a style={{
                fontFamily: "BalooBhaijaan2",
                fontWeight: "500",
                textShadow:
                  "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              }} href="#" className="text-xs text-gray-200 float-right mb-4">Forgot Password?</a>
            <button style={{
                fontFamily: "BalooBhaijaan2",
                fontWeight: "500",
                textShadow:
                  "0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)",
              }} type="submit" className="w-full py-2 backdrop-blur-md	active:ring-4 rounded-full bg-red-600 duration-300 hover:bg-red-600/70 text-gray-100  focus:outline-none">Button</button>
          </div></form>


      </div> 




    </div>
  )
}

export default login