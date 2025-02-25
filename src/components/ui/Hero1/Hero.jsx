import { useState } from "react"
import Image from "next/image"
const Hero1 = ({data}) => {


    
      return (
          <div id="hero1" className="bg-gray-900">
              <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                  <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                      <h1 className="text-white font-bold text-4xl xl:text-5xl">
                          {data.title}
                           { data.title2 && <span className="text-indigo-400">{data.title2}</span>}
                      </h1>
                      <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                      {data.subTitle}
                          
                      </p>
                      <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                          <a href={data.buttonLink} target="_blank" rel="noopener noreferrer" className="px-7 py-3 w-full rounded-lg  font-semibold text-sm duration-150 text-white bg-green-700 hover:bg-green-600 active:bg-green-800 text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                              {data.button}
                          </a>
                         {data.button2 && <a href={data.button2Link} target="_blank" rel="noopener noreferrer" className="px-7 py-3 w-full bg-green-700 text-green-200 text-center rounded-md block sm:w-auto">
                               {data.button2}
                          </a>}
                      </div>
                  </div>
                  <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                      <Image src={data.img} alt="" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                  </div>
              </section>
          </div>
      )
  }
  

export default Hero1