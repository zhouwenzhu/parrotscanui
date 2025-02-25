
import { useEffect, useState } from "react";
import   CommDataList  from "../CommDataList";
import {NodeListParams,NodeListData,TranListParams,TranListData,MyRewardListParams,ServiceListParams,ServiceListData,StatsData,} from "../../../data/data.source";


const NodeInfo = ({data}) => {
    const [tab, setTab] = useState(2);
    const selectTab = (index) => {
        console.log(index)
        setTab(index);
    }
    return (
        <>
            <div class="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-neutral-700 ">

                <div className="w-full flex justify-start items-center">
                    <div className="mr-5 text-1xl font-bold">NodeId</div><div className="flex-grow text-neutral-600">{data.nodebaseinfo.nodeid}</div>
                </div>

                <div className="w-full flex justify-start items-center">
                    <div className=" mr-2 mr-5 text-1xl font-bold">NodeName</div><div className="flex-grow text-neutral-600">{data.nodebaseinfo.nodename}</div>
                </div>

                <div className="w-full flex justify-start items-center">
                    <div className=" mr-2 mr-5 text-1xl font-bold">AppName</div><div className="flex-grow text-neutral-600">{data.nodebaseinfo.nodeappname}</div>
                </div>

                <div className="w-full flex justify-start items-center">
                    <div className=" mr-2 mr-5 text-1xl font-bold">NodeAddress</div><div className="flex-grow text-neutral-600">{data.nodebaseinfo.nodeAddr}</div>
                </div>

                <div className="w-full flex justify-start items-center">
                    <div className=" mr-2 mr-5 text-1xl font-bold">Services</div><div className="flex-grow text-neutral-600">{data.serviceinfo.servercount}({data.serviceinfo.count})</div>
                </div>
                <div className="w-full flex justify-start items-center">
                    <div className=" mr-2 mr-5 text-1xl font-bold">Pledge</div><div className="flex-grow text-neutral-600">{data.nodebaseinfo.pledge} PRT</div>
                </div>
                <div className="w-full flex justify-start items-center">
                    <div className=" mr-2 mr-5 text-1xl font-bold">AdminAddress</div><div className="flex-grow text-neutral-600">{data.nodeadmininfo.adminAddr}</div>
                </div>
                <div className="w-full flex justify-start items-center">
                    <div className=" mr-2 mr-5 text-1xl font-bold">RewardAddress</div><div className="flex-grow text-neutral-600">{data.nodeadmininfo.rewardAddr}</div>
                </div>
                <div className="w-full flex justify-start items-center">
                    <div className=" mr-2 mr-5 text-1xl font-bold">Rewards</div><div className="flex-grow text-neutral-600">{data.noderewardinfo.allreward} PRT</div>
                    {/* ({data.noderewardinfo.count}) */}
                </div>

            </div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 border-t border-gray-700 ">
            </div>
            <div className="bg-white dark:bg-neutral-700">
                <ul
                    class="mb-1 flex bg-neutral-100 list-none flex-row flex-wrap border-b-0 ps-0"
                >
                    <li role="presentation" class="flex-auto text-center">
                        <a
                            onClick={() => selectTab(2)}
                            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 "
                        >Reward Items</a>
                    </li>


                </ul>

                <div class="mb-6">

                    {tab == 2 &&
                        <div
                            class=" transition-opacity duration-150 ease-linear ">
       
                            <CommDataList  params={MyRewardListParams} data={{datalist:data.noderewardlist}} showpage/>
                        </div>
                    }

                </div>
            </div>
        </>
    )
};
export default NodeInfo;