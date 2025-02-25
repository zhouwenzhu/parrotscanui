import React from 'react';
import { Data } from './data';
//import Feature1 from "@/public/images/Feature-1.svg"
//import Feature2 from "@/public/images/Feature-2.svg"



import { Logo } from "./logo"



const getLang = () => {

    let browserLang
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-underscore-dangle
        browserLang = navigator.language || navigator.userLanguage;
    }
    if (browserLang) {
        const langCode = browserLang.split('-')[0];
        return langCode;
    }
    return 'en';
};
const lng = getLang();
// eslint-disable-next-line no-underscore-dangle
console.log('lng', lng)
const _t = Data.en; //Data[lng] || 

export const NavbarData = {
    ..._t.Navbar,
    logo: Logo,
    startTitle: 'Login',
    startLink: "https://aiapp.parrots.network/",
    navigation: [
        { title: "Home", path: "/" },
        { title: "Nodes", path: "/#/nodes" },
        { title: "Services", path: "/#/services" },
        { title: "Pledges", path: "/#/pledges" },
        { title: "Rewards", path: "/#/rewards" },
    ]
}


export const HomeNodeListParams = {
    title: "Reward Nodes(Top 10)",
    moretitle: "more",
    morelink: "/nodes",
    coltitles: ["Node Address", "Rewards(PRT)"],
    fields: ["nodeAddr", "balance"],
}

export const NodeListParams = {
    title: "Reward Nodes(Top 200)",
    moretitle: "more",
    morelink: "/#/nodes",
    coltitles: ["Node Address","Node Name", "Rewards(PRT)"],
    fields: ["nodeAddr","desc", "balance"],
    showmore: false,
}


export const HomeNodeListData = {
    datalist: [
        {
            "nodeaddr": "0x22334343",
            "desc": "node1",
            "services": 12345556,
            "balance": 345699
        },
        {
            "nodeAddr": "0x22334343",
            "desc": "node1",
            "services": 12345556,
            "balance": 345699
        },
        {
            "nodeAddr": "0x22334343",
            "desc": "node1",
            "services": 12345556,
            "balance": 345699
        },
        {
            "nodeAddr": "0x22334343",
            "desc": "node1",
            "services": 12345556,
            "balance": 345699
        },
        {
            "nodeAddr": "0x22334343",
            "desc": "node1",
            "services": 12345556,
            "balance": 345699
        }
    ]
}
export const NodeListData ={
 ...HomeNodeListData
}
export const HomePledgeListParams = {
    title: " Pledge Nodes(Top 10)",
    moretitle: "more",
    morelink: "/#/pledges",
    coltitles: ["Node Address", "Pledge(PRT)"],
    fields: ["nodeAddr", "pledgeamount"],
}
export const  TranListParams={
...HomePledgeListParams
}
export const PledgeListParams = {
    title: " Pledge Nodes(Top 200)",
    moretitle: "more",
    morelink: "/#/pledge",
    coltitles: ["Node Address","Node Name", "Pledge(PRT)"],
    fields: ["nodeAddr","desc", "pledgeamount"],
    showmore: false,

}
export const HomeTranListData = {
    datalist: [{
        nodeAddr: "0x345e556f33355",
        desc: 12445,
        pledge: 556788
    },
    {
        nodeAddr: "0x345e556f33355",
        desc: 12445,
        pledge: 556788
    }, {
        nodeAddr: "0x345e556f33355",
        desc: 12445,
        pledge: 556788
    }, {
        nodeAddr: "0x345e556f33355",
        desc: 12445,
        pledge: 556788
    }]
}
export const TranListData = {
    ...HomeTranListData
}
export const HomeRewardListParams = {
    title: "Latest Reward Records(Top 10)",
    moretitle: "more",
    morelink: "/#/nodes",
    coltitles: ["Node Address", "Rewards(PRT)"],
    fields: ["nodeAddr", "rewardAmount"],
}
export const RewardListParams = {
    title: "Latest Reward Records(Top 200)",
    moretitle: "more",
    morelink: "/#/nodes",
    coltitles: ["Node Address","Node Name", "Rewards(PRT)"],
    fields: ["nodeAddr","desc", "rewardAmount"],
    showmore: false,

}

export const MyRewardListParams = {
    title: "Latest Reward Records(Top 200)",

    coltitles: ["DayNo", "Rewards(PRT)"],
    fields: ["dayNo", "rewardAmount"],
    showmore: false,

}

export const HomeRewardListData = {
    datalist: [
        {
            "nodeAddr": "0x22334343",
            "desc": "node1",
            "rewardAmount": 345699
        },
        {
            "nodeAddr": "0x22334343",
            "desc": "node1",
            "rewardAmount": 345699
        },
        {
            "nodeAddr": "0x22334343",
            "desc": "node4",
            "rewardAmount": 23435
        },
        {
            "nodeAddr": "0x22334343",
            "desc": "node6",
            "rewardAmount": 345699
        },
        {
            "nodeAddr": "0x22334343",
            "desc": "node2",
            "rewardAmount": 345699
        },
    ]
}
export const RewardListData ={
 ...HomeRewardListData
}
export const HomeServiceListParams = {
    title: "Daily Service (Top 10)",
    moretitle: "more",
    morelink: "/#/nodes",
    coltitles: ["DayNo", "ServiceCount", "servicePoints"],
    fields: ["dayNo", "count", "servercount"],
}
export const ServiceListParams = {
    title: "Daily Service (Top 200)",
    moretitle: "more",
    morelink: "/#/nodes",
    coltitles: ["dayNo", "ServiceCount",, "Errors", "servicePoints"],
    fields: ["dayNo", "count","errors", "servercount"],
    showmore: false,

}
export const HomeServiceListData = {
    datalist: [
        {
            "dayNo": 25,
            "serviceCount": 123,
            "servicePoints": 235556
        },
        {
            "dayNo": 21,
            "serviceCount": "compute",
            "servicePoints": 235556
        },
        {
            "dayNo": 20,
            "serviceCount": "compute",
            "servicePoints": 235556
        }
    ]
}

export const ServiceListData ={
    ...HomeServiceListData
}

export const HeroData = {
    ..._t.Hero,
    title: _t.Hero.title,
    subTitle: _t.Hero.subTitle,
    buttonTitle: " Get started",
    buttonLink: "https://docs.parrots.network/category/nodes"
}

export const StatsData = {
    ..._t.Stats,
    title: _t.Stats.title,
    subTitle: ' ',
    stats: [
        {
            data: "35K",
            title: " Nodes"
        },
        {
            data: "40+",
            title: "Services"
        },
        {
            data: "200+",
            title: "Rewards"
        },
        {
            data: "100K+",
            title: "Staking"
        },
    ]
}







export const FAQsData = {
    ..._t.FAQs,
}
export const FooterData = {
    ..._t.Footer,
    emailTitle: '',
    button: 'Subscribe',
    items: [
        {
            label: "Contact Us",
            items: [
                {
                    href: 'mailto:web3admin@parrots.network',
                    name: 'contact(web3admin@parrots.network)'
                },
                {
                    href: 'mailto:admin@parrots.network',
                    name: 'Support(admin@parrots.network)'
                },
            ]
        },
        {
            label: "Resources",
            items: [

                {
                    href: 'https://docs.parrots.network/',
                    name: 'Documentation'
                },
                {
                    href: 'https://scan.parrots.network',
                    name: 'Scan'
                },
                {
                    href: 'javascript:void()',
                    name: 'github'
                },
            ],
        },

        {
            label: "Dapp",
            items: [
                {
                    href: 'https://aiapp.parrots.network',
                    name: 'aiChat'
                },

                {
                    href: 'javascript:void()',
                    name: 'Airdrop'
                },
                {
                    href: 'https://ainode.parrots.network',
                    name: 'Node'
                },
            ]
        },
        {
            label: "Social",
            items: [
                {
                    href: 'https://x.com/parrotai',
                    name: 'X (Twitter)'
                },
                {
                    href: 'https://discord.com/invite/',
                    name: 'Discord'
                },
                {
                    href: 'https://t.me/parrotai',
                    name: 'Telegram'
                },
            ],
        }
    ]
}
