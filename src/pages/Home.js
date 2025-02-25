
import Stats from "../components/ui/Stats";
import CommDataList from "../components/ui/CommDataList";
import { Context } from '../contexts/AppState';
import React, { useEffect, useState, useContext } from "react";

import { HomeNodeListParams, HomeNodeListData, HomePledgeListParams, HomeTranListData, HomeRewardListParams, HomeRewardListData, HomeServiceListParams, HomeServiceListData, StatsData, } from "../data/data.source";

import {formatNumber,getlastrewardslist,getmaxpledgenodelist,getmaxrewardsnodelist,getdayservicelist,getsumdata} from '../utils';

export default function Home() {
  const {sumdata, lastrewardslist, maxpledgenodelist, maxrewardsnodelist, dayservicelist } = useContext(Context);

  const {setSumdata,  setLastrewardslist, setMaxpledgenodelist, setMaxrewardsnodelist, setDayservicelist } = useContext(Context);

  useEffect(() => {

    const fun = async () => {
      const tmplastrewardslist = await getlastrewardslist()
      setLastrewardslist(tmplastrewardslist)
      const tmpmaxpledgenodelist = await getmaxpledgenodelist()
      setMaxpledgenodelist(tmpmaxpledgenodelist)
      const tmpmaxrewardsnodelist = await getmaxrewardsnodelist()
      setMaxrewardsnodelist(tmpmaxrewardsnodelist)

      const tmpdayservicelist = await getdayservicelist()
      setDayservicelist(tmpdayservicelist)

      const tmpsumdata = await getsumdata()
      const nodecount=tmpsumdata.cp+tmpsumdata.wg
      const apistatedata ={
      stats: [
        {
            data: formatNumber(nodecount),
            title: " Nodes"
        },
        {
            data: "40+",
            title: "Services"
        },
        {
            data: formatNumber(tmpsumdata.allreward),
            title: "Rewards"
        },
        {
            data: formatNumber(tmpsumdata.allpledge),
            title: "Staking"
        },
    ]}
      setSumdata(apistatedata)
    }
    console.log("fun2")
    fun();
  }, []);

  return (
    <>
      <Stats data={sumdata || StatsData} />

      <div>
        <div className="mt-2 grid grid-cols-1 items-start  md:grid-cols-2 gap-1">
          <CommDataList params={HomeNodeListParams} data={ { datalist: maxrewardsnodelist.slice(0, 10) } || HomeNodeListData} showmore />
          <CommDataList params={HomeRewardListParams} data={{ datalist: lastrewardslist.slice(0, 10) } || HomeRewardListData} showmore />
        </div>
        <div className="mt-2  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-1">
        <CommDataList params={HomePledgeListParams} data={{ datalist: maxpledgenodelist.slice(0, 10) } || HomeTranListData} showmore />  
        <CommDataList params={HomeServiceListParams} data={{ datalist: dayservicelist.slice(0, 10) } || HomeServiceListData} showmore />
        </div>
      </div>



    </>
  );
}
