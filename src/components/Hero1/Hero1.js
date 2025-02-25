import { useState } from "react"

const Hero1 = ({data,imgleft}) => {
    if (imgleft) {
        
      return (
        <div id="hero1" className="">
            <section className="mt-1 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex lg:flex-row-reverse md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
                        {data.title}
                         
                    </h1>
                    { data.title2 && <p className="text-blue-400 font-bold text-2xl ">{data.title2}</p>}
                    <p className="text-gray-800 text-lg max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    {data.subTitle}
                        
                    </p>
                    { data.items && <p className="text-blue-400 font-bold text-2xl ">{data.items[0]}</p>}

                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                    { data.button && <a href={data.buttonLink} target="_blank" rel="noopener noreferrer" className="px-7 py-3 w-full rounded-lg  font-semibold text-sm duration-150 text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                            {data.button}
                        </a>}
                       {data.button2 && <a href={data.button2Link} target="_blank" rel="noopener noreferrer" className="px-7 py-3 w-full bg-blue-700 text-blue-200 text-center rounded-md block sm:w-auto">
                             {data.button2}
                        </a>}
                    </div>
                </div>
                <div className=" flex-1 text-center mt-7 lg:mt-0 lg:mr-3">
                    <img src={data.img} alt="" className="w-8/12 mx-auto" />
                </div>
            </section>
        </div>
    )

    } else {
        
      return (
        <div id="hero1" className="">
            <section className="mt-1 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex  md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
                        {data.title}
                         { data.title2 && <span className="text-indigo-400">{data.title2}</span>}
                    </h1>
                    <p className="text-gray-800 max-w-xl text-lg leading-relaxed sm:mx-auto lg:ml-0">
                    {data.subTitle}
                        
                    </p>
                    <ul  className="grid  grid-cols-2 list-disc list-inside">
                     {
                        data.items && data.items.map((item, idx) => (<li className=" text-gray-900  text-lg ">{item}</li>))
                        }
                    </ul >
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        { data.button && <a href={data.buttonLink} target="_blank" rel="noopener noreferrer" className="px-7 py-3 w-full rounded-lg  font-semibold text-sm duration-150 text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                            {data.button}
                        </a> }
                       {data.button2 && <a href={data.button2Link} target="_blank" rel="noopener noreferrer" className="px-7 py-3 w-full bg-blue-700 text-blue-200 text-center rounded-md block sm:w-auto">
                             {data.button2}
                        </a>}
                    </div>
                </div>
                <div className=" flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src={data.img} alt="" className="w-8/12 mx-auto" />
                </div>
            </section>
        </div>
    )

    }

  }
  

export default Hero1