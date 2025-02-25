import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
function isValidEthereumAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  }
export default () => {

    const [inputValue, setInputValue] = useState('');


    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    const navigate = useNavigate();
    const handleButtonClick = (e) => {
        e.preventDefault()
        if (isValidEthereumAddress(inputValue)){
            navigate('/#/nodeinfo/'+inputValue);
        } else{

        }
       
      };

    return (
        <form
            onSubmit={(e) => handleButtonClick(e)} 
            className="max-w-lg  px-0 mx-auto container ml-2">
            <div className="relative ">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                value={inputValue} onChange={handleChange}
                    type="text"
                    placeholder="Input Node Address"
                    className="w-full  py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
              
            </div>
        </form>
    )
}