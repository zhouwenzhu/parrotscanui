import React, { createContext, useCallback, useEffect, useState } from 'react'



export const Context = createContext({ lastrewardslist: [], maxpledgenodelist: [], maxrewardsnodelist: [], dayservicelist: [] })



const getInitialValue = (key, defvalue) => {
  const savedValue = localStorage.getItem(key);
  return savedValue ? JSON.parse(savedValue) : defvalue;
};

const AppStateContext = ({ children }) => {

  const [lastrewardslist, setLastrewardslist] = useState(getInitialValue("lastrewardslist", []))
  const [maxpledgenodelist, setMaxpledgenodelist] = useState(getInitialValue("maxpledgenodelist", []))
  const [maxrewardsnodelist, setMaxrewardsnodelist] = useState(getInitialValue("maxrewardsnodelist", []))
  const [dayservicelist, setDayservicelist] = useState(getInitialValue("dayservicelist", []))
  const [sumdata, setSumdata] = useState(getInitialValue("sumdata", {}))
  

/*   const [lastrewardslist, setLastrewardslist] = useState([])
  const [maxpledgenodelist, setMaxpledgenodelist] = useState([])
  const [maxrewardsnodelist, setMaxrewardsnodelist] = useState([])
  const [dayservicelist, setDayservicelist] = useState([]) */


 
  useEffect(() => {
    localStorage.setItem('lastrewardslist', JSON.stringify(lastrewardslist, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value));
  }, [lastrewardslist]);

  useEffect(() => {
    localStorage.setItem('maxpledgenodelist', JSON.stringify(maxpledgenodelist, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value));
  }, [maxpledgenodelist]);

  useEffect(() => {
    localStorage.setItem('maxrewardsnodelist', JSON.stringify(maxrewardsnodelist, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value));
  }, [maxrewardsnodelist]);


  useEffect(() => {
    localStorage.setItem('dayservicelist', JSON.stringify(dayservicelist, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value));
  }, [dayservicelist]);

  useEffect(() => {
    localStorage.setItem('sumdata', JSON.stringify(sumdata, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value));
  }, [sumdata]);

  return (
    <Context.Provider value={{ sumdata, setSumdata,lastrewardslist, setLastrewardslist, maxpledgenodelist, setMaxpledgenodelist, maxrewardsnodelist, setMaxrewardsnodelist, dayservicelist, setDayservicelist }}>
      {children}
    </Context.Provider>
  )
}

export default AppStateContext