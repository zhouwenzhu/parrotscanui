
import { useEffect, useRef, useState } from 'react'

import Search from '../Search'


const Navbar = ({ data }) => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Features", path: "javascript:void(0)" },
        { title: "Integrations", path: "javascript:void(0)" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Pricing", path: "javascript:void(0)" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])


    const Brand = () => (
        <div className="flex flex-1 items-center justify-between py-5 md:block">
            <div className='flex flex-row items-left text-gray-200 hover:text-gray-100'>
                <a href="javascript:void(0)" >
                    <img
                        src={data.logo}
                        width={60}
                        height={60}
                        alt="Parrot Logo"
                    />

                </a>
                <div className="text-2xl inline-block">Parrot</div>
                <div className="text-1xl inline-block">Test </div>
                <Search className="flex-3"/>
            </div>

            <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    )

    return (

        <header>
            <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                <Brand />
            </div>
            <nav className={`pb-5 md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                    <Brand  />
                    <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                        <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                data.navigation && data.navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="text-gray-300 hover:text-gray-400">
                                            <a href={item.path} className="block">
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })
                            }
{/*                             <li>
                                <a href={data.startLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center  gap-x-1 py-2 px-4 text-green-600 hover:text-green-100 font-medium duration-150 active:bg-gray-100 border border-green-700 rounded-lg md:inline-flex" >
                                    {data.startTitle}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar