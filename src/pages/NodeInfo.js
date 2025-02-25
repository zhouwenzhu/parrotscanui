

import NodeInfoCp from "../components/ui/NodeInfoCp";


import {
  useParams,
} from 'react-router-dom';

import React, { createContext, useCallback, useEffect, useState } from 'react'

import {PriceData,HeroData,FAQsData,Hero2Data,StatsData,Hero1Data,VFeaturesData,FeaturesData,membersData} from "../data/data.source";
import {getnodebaseinfo,getnodeadmininfo,getdayserviceinfo,getserviceinfo,getnoderewardinfo,getnoderewardlist,getnoderpc,getmynodelist} from '../utils';


export default function NodeInfo() {
  const { id } = useParams();
  const [nodebaseinfo, setNodebaseinfo] = useState({})
  const [nodeadmininfo, setNodeadmininfo] = useState({})
  const [dayserviceinfo, setDayserviceinfo] = useState({})
  const [serviceinfo, setServiceinfo] = useState({})
  const [noderewardinfo, setNoderewardinfo] = useState({})
  const [noderewardlist, setNoderewardlist] = useState([])

  const [noderpc, setNoderpc] = useState({})
  const [mynodelist, setMynodelist] = useState([])

  useEffect(() => {

    const fun = async () => {

      const tmpnodebaseinfo = await getnodebaseinfo({"nodeaddr": id || "0x5780C6b74c6Fb1292742885AfD661d44bcc27bCd"})
      setNodebaseinfo(tmpnodebaseinfo)

      const tmpsetNodeadmininfo = await getnodeadmininfo({"nodeaddr": id || "0x5780C6b74c6Fb1292742885AfD661d44bcc27bCd"})
      setNodeadmininfo(tmpsetNodeadmininfo)

      const tmpdayserviceinfo = await getdayserviceinfo({nodeid:tmpnodebaseinfo.nodeid})
      setDayserviceinfo(tmpdayserviceinfo)

      const tmpserviceinfo = await getserviceinfo({nodeid:tmpnodebaseinfo.nodeid})
      setServiceinfo(tmpserviceinfo)

      const tmpnoderewardinfo = await getnoderewardinfo({nodeid:tmpnodebaseinfo.nodeid})
      setNoderewardinfo(tmpnoderewardinfo)

      const tmpnoderewardlist = await getnoderewardlist({nodeid:tmpnodebaseinfo.nodeid})
      setNoderewardlist(tmpnoderewardlist)

/*       const tmpnoderpc = await getnoderpc({nodeid:tmpnodebaseinfo.nodeid})
      setNoderpc(tmpnoderpc) */

      const tmpmynodelist = await getmynodelist({"nodeAddr": "0x5780C6b74c6Fb1292742885AfD661d44bcc27bCd"})
      setMynodelist(tmpmynodelist)

      

    }

    fun();
  }, []);


  return (
    <>
     <NodeInfoCp data= {{nodebaseinfo,nodeadmininfo,dayserviceinfo,serviceinfo,noderewardinfo,noderewardlist,noderpc,mynodelist}}/>
    </>
  );
}
