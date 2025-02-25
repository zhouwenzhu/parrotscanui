
import React, { useEffect, useState } from "react";
import { Trans } from "@lingui/macro";

import { readContract } from "@wagmi/core";
import { useWriteContract } from "wagmi";
import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { useConfig } from "wagmi";
import CreditAbi from "../abi/Credit.json";
import AccessAbi from "../abi/Access.json";
import VersionAbi from "../abi/Version.json";
import RegistryAbi from "../abi/Registry.json";
import MarketAbi from "../abi/Market.json";
import PledgeAbi from "../abi/Pledge.json";

import { fromAmount, toAmount, toSpecialAmount } from "../utils/amount";
import { SupportedChainId } from "../constants/chains";
import { Registry_ADDRESS, Version_ADDRESS, Pledge_ADDRESS, Market_ADDRESS, GToken_ADDRESS, Credit_ADDRESS, Swap_ADDRESS } from "../constants/address";
const WriteFunc = async (writeContractAsync, abi, address, functionName, args, setError) => {
  setError && setError("");

  try {
    const res = await writeContractAsync({
      abi,
      address,
      functionName,
      args: args,
    });
    console.log(res);
    return res;
  } catch (error) {
    setError && setError(error && error.message);
    console.error(error);
  }

};


const ReadFunc = async (readContract, config, abi, address, functionName, args, sender, setError) => {
  setError && setError("");

  try {
    const res = await readContract(config, {
      abi,
      address,
      functionName,
      args: args,
      sender: sender
    });
    console.log("res", res);
    return res;
  } catch (error) {
    setError && setError(error.message);
    console.error("error", error);
    return null;
  }

};



function useGridApi() {
  const { writeContractAsync } = useWriteContract();
  const config = useConfig();
  const { address, chainId } = useAccount();
  const account = useAccount();


  const Access_CurrentVer = async (setError) => {
    return await ReadFunc(readContract, config, VersionAbi, Version_ADDRESS[chainId], "CurrentVer", [], address, setError)
  }

  // register(string memory ip, string memory domain, string memory port, uint64 cpu,  uint64 gpu,  uint64 mem,  uint64 disk)
  const Registry_register = async (info, setError) => {
    return await WriteFunc(writeContractAsync, RegistryAbi, Registry_ADDRESS[chainId], "register", [info], setError)
  }


  const Registry_revise = async (info, setError) => {
    return await WriteFunc(writeContractAsync, RegistryAbi, Registry_ADDRESS[chainId], "revise", [info], setError)
  }

  const Registry_update = async (info, setError) => {
    return await WriteFunc(writeContractAsync, RegistryAbi, Registry_ADDRESS[chainId], "updatecp", [info], setError)
  }

  const Registry_add_node = async (node, setError) => {
    return await WriteFunc(writeContractAsync, RegistryAbi, Registry_ADDRESS[chainId], "add_node", [node], setError)
  }

  const Registry_update_node = async (node, setError) => {
    return await WriteFunc(writeContractAsync, RegistryAbi, Registry_ADDRESS[chainId], "updatenode", [node], setError)
  }
  const Registry_del_node = async ( cp,  id, setError) => {
    return await WriteFunc(writeContractAsync, RegistryAbi, Registry_ADDRESS[chainId], "del_node", [cp, id], setError)
  }

  const Registry_set_sold = async (provider, id, sold, setError) => {
    return await WriteFunc(writeContractAsync, RegistryAbi, Registry_ADDRESS[chainId], "set_sold", [provider, id, sold], setError)
  }

  const Registry_set_avail = async (provider, id, avail, setError) => {
    return await WriteFunc(writeContractAsync, RegistryAbi, Registry_ADDRESS[chainId], "set_avail", [provider, id, avail], setError)
  }

  const Registry_get = async (addr, setError) => {
    return await ReadFunc(readContract, config, RegistryAbi, Registry_ADDRESS[chainId], "get", [addr], address, setError)
  }

  const Registry_get_node = async (cp, id, setError) => {
    return await ReadFunc(readContract, config, RegistryAbi, Registry_ADDRESS[chainId], "get_node", [cp, id], address, setError)
  }

  const Registry_list_node = async (cp, setError) => {
    return await ReadFunc(readContract, config, RegistryAbi, Registry_ADDRESS[chainId], "list_node", [cp], address, setError)
  }


  const Registry_getList = async (start, num, setError) => {
    return await ReadFunc(readContract, config, RegistryAbi, Registry_ADDRESS[chainId], "getList", [start, num], address, setError)
  }
  const Registry_getKeys = async (setError) => {
    return await ReadFunc(readContract, config, RegistryAbi, Registry_ADDRESS[chainId], "getKeys", [], address, setError)
  }

  const Registry_gInfo = async (setError) => {
    return await ReadFunc(readContract, config, RegistryAbi, Registry_ADDRESS[chainId], "gInfo", [], address, setError)
  }

  const Registry_listCP = async (start, num, setError) => {
    return await ReadFunc(readContract, config, RegistryAbi, Registry_ADDRESS[chainId], "listCP", [start, num], address, setError)
  }


  const Pledge_getList = async (start, num, setError) => {
    return await ReadFunc(readContract, config, PledgeAbi, Pledge_ADDRESS[chainId], "getList", [start, num], address, setError)
  }

  const Pledge_getPledge = async (a, setError) => {
    return await ReadFunc(readContract, config, PledgeAbi, Pledge_ADDRESS[chainId], "getPledge", [a], address, setError)
  }


    // createOrder(address provider, Order memory order)
  const Pledge_pledge = async (tokenAddr, amount, setError) => {
    return await WriteFunc(writeContractAsync, PledgeAbi, Pledge_ADDRESS[chainId], "pledge", [tokenAddr, amount], setError)
  }

  const Pledge_unpledge = async (tokenAddr, amount, setError) => {
    return await WriteFunc(writeContractAsync, PledgeAbi, Pledge_ADDRESS[chainId], "unpledge", [tokenAddr, amount], setError)
  }


  // createOrder(address provider, Order memory order)
  const Market_createOrder = async ( order, setError) => {
    return await WriteFunc(writeContractAsync, MarketAbi, Market_ADDRESS[chainId], "createOrder", [ order], setError)
  }
  //(address provider)
  const Market_getOrder = async (id, setError) => {
    return await ReadFunc(readContract, config, MarketAbi, Market_ADDRESS[chainId], "getOrder", [id], address, setError)
  }
  //(address provider)
  const Market_getOrders = async (user, setError) => {
    return await ReadFunc(readContract, config, MarketAbi, Market_ADDRESS[chainId], "getList", [user], address, setError)
  }
  // getKeys() 
  const Market_getKeys = async (setError) => {
    return await ReadFunc(readContract, config, MarketAbi, Market_ADDRESS[chainId], "getKeys", [], address, setError)
  }

  // activate(address user) 
  const Market_getProList = async (user, setError) => {
    return await ReadFunc(readContract, config, MarketAbi, Market_ADDRESS[chainId], "getProList", [user], setError)
  }

  // userCancel(address creditAddr, address provider)
  const Market_fee = async (user, provider, setError) => {
    return await ReadFunc(readContract, config, MarketAbi, Market_ADDRESS[chainId], "fee", [user, provider], setError)
  }

    // userCancel(address creditAddr, address provider)
    const Market_feeOrder = async (order, setError) => {
      return await ReadFunc(readContract, config, MarketAbi, Market_ADDRESS[chainId], "feeOrder", [order ], setError)
    }


  const Market_proSettle = async (user, setError) => {
    return await WriteFunc(writeContractAsync, MarketAbi, Market_ADDRESS[chainId], "proSettle", [user], setError)
  }

  const Market_setApp = async (user, app, setError) => {
    return await WriteFunc(writeContractAsync, MarketAbi, Market_ADDRESS[chainId], "setApp", [user, app], setError)
  }
  const Market_extend = async (id, dur, setError) => {
    return await WriteFunc(writeContractAsync, MarketAbi, Market_ADDRESS[chainId], "extend", [id, dur], setError)
  }

  // proWithdraw(address creditAddr, address user, uint256 amount)
  const Market_proWithdraw = async (creditAddr, user, amount, setError) => {
    return await WriteFunc(writeContractAsync, MarketAbi, Market_ADDRESS[chainId], "proWithdraw", [creditAddr, user, amount], setError)
  }

  //balanceOf(address account)
  const Credit_balanceOf = async (account, setError) => {
    return await ReadFunc(readContract, config, CreditAbi, Credit_ADDRESS[chainId], "balanceOf", [account], address, setError)
  }
  // approve(address spender, uint256 amount)
  const Credit_approve = async (spender, amount, setError) => {
    return await WriteFunc(writeContractAsync, CreditAbi, Credit_ADDRESS[chainId], "approve", [spender, amount], setError)
  }
  // transfer(address to, uint256 amount) 
  const Credit_transfer = async (to, amount, setError) => {
    return await WriteFunc(writeContractAsync, CreditAbi, Credit_ADDRESS[chainId], "transfer", [to, amount], setError)
  }
  // transferFrom(address from,address to,uint256 amount)
  const Credit_transferFrom = async (from, to, amount, setError) => {
    return await WriteFunc(writeContractAsync, CreditAbi, Credit_ADDRESS[chainId], "transferFrom", [from, to, amount], setError)
  }
  // allowance(address owner, address spender) 
  const Credit_allowance = async (owner, spender, setError) => {
    return await ReadFunc(readContract, config, CreditAbi, Credit_ADDRESS[chainId], "allowance", [owner, spender], address, setError)
  }
  return {
    Access_CurrentVer, Registry_register, Registry_revise,Registry_del_node,Registry_update_node, Registry_add_node, Registry_get_node, Registry_list_node, Registry_getList, Registry_update, Registry_get, Registry_getKeys, Pledge_getList,Pledge_getPledge,Pledge_pledge,Pledge_unpledge,
    Registry_gInfo, Registry_set_sold, Registry_set_avail, Registry_listCP, Market_createOrder,Market_feeOrder, Market_getOrder, Market_getKeys, Market_proWithdraw,Market_getOrders,Market_getProList,Market_fee,Market_proSettle,Market_setApp,Market_extend,
    Credit_balanceOf, Credit_approve, Credit_transfer, Credit_transferFrom, Credit_allowance
  }
}

export default useGridApi

const testorder = {
  user: '',
  provider: '',
  p: {
    pCPU: 1,
    pGPU: 1,
    pMEM: 1,
    pDISK: 1
  },
  r: {
    nCPU: 1,
    nGPU: 2,
    nMEM: 2,
    nDISK: 1
  },
  totalValue: '100000000000',
  remain: '100000000000',
  remuneration: '100000000000',
  userConfirm: false,
  providerConfirm: false,
  activateTime: '100000000000',
  lastSettleTime: '100000000000',
  probation: '100000000000',
  duration: '100000000000',
  status: 1,
}
/*

    struct PricePerHour{
        uint64 pCPU;
        uint64 pGPU;
        uint64 pMEM;
        uint64 pDISK;
    }

    // record the number of each resource type
    struct Resources{
        uint64 nCPU;
        uint64 nGPU;
        uint64 nMEM;
        uint64 nDISK;
    }

Order{
    address user;
    address provider;

    PricePerHour p;
    Resources r;

    // the total value user paid for this order
    uint256 totalValue;

    // the remained value in this order
    uint256 remain;
    // the current profit for provider
    uint256 remuneration;

    // confirmation from user or provider
    bool userConfirm;
    bool providerConfirm;

    // activate timestamp
    uint256 activateTime;
    // the last time settle timestamp
    uint256 lastSettleTime;

    // the time for trying out
    uint256 probation;

    // the time for order's service
    uint256 duration;

    // order status: 0-unactive 1-active 2-cancelled 3-completed
    uint8 status;
}
*/