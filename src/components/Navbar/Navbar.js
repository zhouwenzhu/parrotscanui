
import React, { useEffect, useRef, useState } from 'react'
// import { isMobile } from 'react-device-detect';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';


const MenuItem = ({ data }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (

        <li className="z-50 relative text-gray-100 hover:text-gray-50"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
           
        >
            <span className="ml-0 [&>svg]:w-5 w-2 inline">
                <span className='inline'>{data.title}</span>
                <svg className='inline'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>

            {isDropdownOpen && (
                <ul
                    className="absolute left-0 mt-0 w-36 bg-white text-black shadow-lg"
                    onMouseEnter={() => setIsDropdownOpen(true)}

                >
                    {data.items && data.items.map((item, idx) => {
                        return (
                            <a className="px-4 py-2 hover:bg-gray-200 block" href={item.path} target={item.target?item.target:'_self'}>
                                {item.title}
                            </a>

                        )
                    })}


                </ul>
            )}
        </li>
    );
};



const Navbar = ({ data }) => {
    const [state, setState] = useState(false)
    const location = useLocation();

    const [scrolled, setScrolled] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    const checkMobile = () => {
        setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    useEffect(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);


/*     useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 120) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); */

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
                        alt="Logo"
                    />

                </a>

            </div>

            <div className="md:hidden">
                <button className="menu-btn text-gray-200 hover:text-gray-100"
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

        <header className='bg-blue-600'>
            <div className={`md:hidden ${state ? "mx-2 pb-2" : "hidden"}`}>
                <Brand />
            </div>
            <nav className={`pb-1 fixed text-lg  md:text-sm   z-20 top-0 inset-x-0 bg-blue-600 rounded-xl md:rounded-none   md:mx-0 md:mt-0 ${scrolled?'':'md:bg-transparent'} `}>
                <div className="gap-x-14  items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                    <Brand />
                    <div className={`flex-2  items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                        <ul className="flex-2 justify-end items-center space-y-5  md:flex md:space-x-5 md:space-y-0">
                            {
                                data.navigation && data.navigation.map((item, idx) => {
                                    return (<>
                                        {(!item.items) && <li key={idx} className="text-gray-100 hover:text-gray-50">
                                            <a href={item.path} target={item.target?item.target:'_self'} className="block">
                                                {item.title}
                                            </a>
                                           
                                        </li>}
                                        {item.items && (!isMobile) && <MenuItem data={item} />}
                                        { isMobile && item.items && item.items.map((subitem, subidx) => {
                                            return (<li key={subidx} className="text-gray-100 hover:text-gray-50">
                                        <a href={subitem.path} target={subitem.target?subitem.target:'_self'} className="block">
                                            {subitem.title}
                                        </a>
                                       
                                    </li>)
                                         }
                                         )
                                        }
                                    </>)
                                })
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar