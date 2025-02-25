

import CommDataList from "../components/ui/CommDataList";

import { Context } from '../contexts/AppState';
import React, { useEffect, useContext } from "react";
import {RewardListParams,RewardListData} from "../data/data.source";
import {getlastrewardslist} from '../utils';

export default function Rewards() {
  const { lastrewardslist } = useContext(Context);
  const { setLastrewardslist } = useContext(Context);

  useEffect(() => {

    const fun = async () => {
      const tmplastrewardslist = await getlastrewardslist()
      setLastrewardslist(tmplastrewardslist)

    }
    console.log("fun2")
    fun();
  }, [setLastrewardslist]);
  return (
    <>
    
     <CommDataList params={RewardListParams} data={{ datalist: lastrewardslist } || RewardListData} showpage/>
    </>
  );
}
