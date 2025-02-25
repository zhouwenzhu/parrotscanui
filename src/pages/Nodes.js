

import CommDataList from "../components/ui/CommDataList";

import { Context } from '../contexts/AppState';
import React, { useEffect, useState, useContext } from "react";
import {NodeListParams,NodeListData} from "../data/data.source";
import {getlastrewardslist,getmaxpledgenodelist,getmaxrewardsnodelist,getdayservicelist} from '../utils';

export default function Nodes() {
  const { maxrewardsnodelist } = useContext(Context);

  const { setMaxrewardsnodelist } = useContext(Context);

  useEffect(() => {

    const fun = async () => {

      const tmpmaxrewardsnodelist = await getmaxrewardsnodelist()
      setMaxrewardsnodelist(tmpmaxrewardsnodelist)

    }

    fun();
  }, []);
  return (
    <>
     <CommDataList params={NodeListParams} data={ { datalist: maxrewardsnodelist.slice(0, 10) } || NodeListData} showpage />
    </>
  );
}
