

import CommDataList from "../components/ui/CommDataList";

import { Context } from '../contexts/AppState';
import React, { useEffect, useContext } from "react";
import {PledgeListParams} from "../data/data.source";
import {getmaxpledgenodelist} from '../utils';

export default function Pledges() {
  const { maxpledgenodelist } = useContext(Context);
  const { setMaxpledgenodelist } = useContext(Context);

  useEffect(() => {

    const fun = async () => {
      const tmpmaxpledgenodelist = await getmaxpledgenodelist()
      setMaxpledgenodelist(tmpmaxpledgenodelist)

    }
    
    fun();
  }, []);

  return (
    <>
     <CommDataList params={PledgeListParams} data={ { datalist: maxpledgenodelist }} showpage />
    </>
  );
}