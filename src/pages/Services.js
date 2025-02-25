

import CommDataList from "../components/ui/CommDataList";

import { Context } from '../contexts/AppState';
import React, { useEffect, useContext } from "react";
import {ServiceListParams} from "../data/data.source";
import {getdayservicelist} from '../utils';

export default function Services() {


  const { dayservicelist, setDayservicelist } = useContext(Context);

  useEffect(() => {

    const fun = async () => {

      const tmpdayservicelist = await getdayservicelist()
      setDayservicelist(tmpdayservicelist)
    }
    console.log("fun2")
    fun();
  }, [setDayservicelist]);
  return (
    <>
    <CommDataList params={ServiceListParams} data={{ datalist: dayservicelist }} showpage/>
     
    </>
  );
}
