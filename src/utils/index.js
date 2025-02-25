export function shortenAddress (address, chars = 4) {
  return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`
}

export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}


//const BASE_URL="http://127.0.0.1:9090"
const BASE_URL="https://testscanapi.parrots.network"

export const getdatalist= async (path,params={},method="POST",headers={})=>{
  const response = await fetch(`${BASE_URL}${path}`, {
    method: method,
    body: JSON.stringify(params),
    headers:headers
  });
  const rows = await response.json();
  return rows
}
export const getlastrewardslist = async (params = {}) => {
  return await getdatalist('/pl/v1/lastrewardslist', {})
}


export const getmaxpledgenodelist = async (params = {}) => {
  return await getdatalist('/pl/v1/maxpledgenodelist', {})
}

export const getmaxrewardsnodelist = async (params = {}) => {
  return await getdatalist('/pl/v1/maxrewardsnodelist', {})
}

export const getdayservicelist = async (params = {}) => {
  return await getdatalist('/pl/v1/dayservicelist', {})
}


export const getsumdata = async (params = {}) => {
  return await getdatalist('/pl/v1/sumdata', {})
}

export const getnodebaseinfo = async (params = {nodeaddr:''}) => {
  return await getdatalist('/node/v1/nodebaseinfo', params)
}

export const getnodeadmininfo = async (params = {nodeaddr:''}) => {
  return await getdatalist('/node/v1/nodeadmininfo', params)
}


export const getdayserviceinfo = async (params = {nodeid:0}) => {
  return await getdatalist('/node/v1/dayserviceinfo', params)
}
export const getserviceinfo = async (params = {nodeid:0}) => {
  return await getdatalist('/node/v1/serviceinfo', params)
}

export const getnoderewardinfo = async (params = {nodeid:0}) => {
  return await getdatalist('/node/v1/noderewardinfo', params)
}

export const getnoderewardlist = async (params = {nodeid:0}) => {
  return await getdatalist('/node/v1/noderewardlist', params)
}

export const getnoderpc = async (params = {nodeaddr:''}) => {
  return await getdatalist('/node/v1/getworkrpc', params)
}

export const getmynodelist = async (params = {nodeAddr:''}) => {
  return await getdatalist('/node/v1/mynodelist', params)
}

export const getuserrewardinfo = async (params = {rewardAddr:''}) => {
  return await getdatalist('/node/v1/userrewardinfo', params)
}





export const  formatNumber = (num) =>{
  if (num >= 1e9) {
    return (num / 1e9).toFixed(0) + 'B+';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(0) + 'M+';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(0) + 'K+';
  } else {
    return num.toString();
  }
}