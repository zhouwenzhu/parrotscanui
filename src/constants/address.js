
import { SupportedChainId } from './chains';
export const defOrder = {"provider":"","appName":"app1","node_id":0,"remain":2,"remuneration":223,"activateTime":212,"lastSettleTime":1345,"probation":2332433,"duration":23455,"status":1}
export const defProvider = { "addr": "", "name": "provider1", "ip": "192.168.1.1", "domain": "www.provider.com", "port": "21455", "nNode": 0, "uNode": 0, "nMem": 0, "uMem": 0, "nDisk": 0, "uDisk": 0, "nodes": [] }
export const defNode =
{
  "id": 0,
  "cp": "",
  "cpu": { "priceMon": 100000000000000000, "priceSec": 1, "model": "AMD560" },
  "gpu": { "priceMon": 100000000000000000, "priceSec": 1, "model": "N3080" },
  "mem": { "priceMon": 100000000000000000, "priceSec": 1, "num": 1 },
  "disk": { "priceMon": 100000000000000000, "priceSec": 1, "num": 1 },
  "exist": false, "sold": true, "avail": true
}
/*
export const TOKEN_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'',
}
export const Registry_ACCESS = {
  [SupportedChainId.SEPOLIA]:'0x85d8d0786c254e0534120D4FdF4007e5B3667357',
}

export const Registry_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'0xeE84ca2100058E73387E5D72c094c798754deC77',
}
export const Pledge_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'',
}
export const Market_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'0xab3f38fAE911d27A45C23B3C8EE618f6120afEfF',
}
export const GToken_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'',
}
export const Credit_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'0x8763065FAA1437056e49BCdFe675FcF9d0C44bfC',
}
export const Swap_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'',
}


export const TOKEN_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'0x124D12997a9bfb36ED6766EB43BB173A77827705',
}
export const Registry_ACCESS = {
  [SupportedChainId.SEPOLIA]:'0x334f3540CA58D8c60AD6063692d1a4915788E606',
}

export const Registry_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'0xE7159Ff946f76001201cA26e364Df926E7DC981A',
}
export const Pledge_ADDRESS = {
[SupportedChainId.SEPOLIA]:'0x531e58B4c6d4FddBE29C27EBC2CaF3Fd42893D63',
}
export const Market_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'0xA4887Dc89D405b26F05C4A1E50ec41Cc5b9fC985',
}
export const GToken_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'',
}
export const Credit_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'0x7F107eFE96F90B4946eCAe29EaE6ca3830270193',
}
export const Swap_ADDRESS = {
  [SupportedChainId.SEPOLIA]:'0x2Aa6b2037C0AD4AC1c4B356632b539f29c4E26Af',
}


  "Instances": "0x17a27bad3D740b3FA7be5D5E5DCbE78769e972D5",
  "version": "0xB7757d217Ebc153601B8f9bf3AE7365a09B8afb4",
  "utils": "",
  "market": "0x01a6717BF9b2A35EBD212f37dF2d9c2D94cB84Db",
  "access": "0x71D15dfC0B338843ab304428cf9Fe78b2AFb006f",
  "credit": "0xFDe04D1775e2C13435BE25ee99D8fdc6964d34bE",
  "token": "",
  "registry": "0xe80cEDd456543b868673ABB5634d5bc770e44A55",

*/
export const TOKEN_ADDRESS = {
  [SupportedChainId.SEPOLIA]: '0x124D12997a9bfb36ED6766EB43BB173A77827705',
  [SupportedChainId.DEVMEMO]: '',
}
export const Registry_ACCESS = {
  [SupportedChainId.SEPOLIA]: '0x6C1F4574907dD95e1A7727452313EEc7D4D6BFE9',
  [SupportedChainId.DEVMEMO]: '0xB104b8C244c6218d03B55477bD7b75CC97cdBD19',
}

export const Registry_ADDRESS = {
  [SupportedChainId.SEPOLIA]: '0xb535ee6102464b567E165EAf58D13Ad58c716f18',
  [SupportedChainId.DEVMEMO]: '0x0EDbc74128eACB6cDaB5C80834BBE2E9e749cCAD',
}
export const Pledge_ADDRESS = {
  [SupportedChainId.SEPOLIA]: '0x8b746ade7Bf8350e9BA8a33c3B52eA8bFD14424A',
  [SupportedChainId.DEVMEMO]: '0x8b746ade7Bf8350e9BA8a33c3B52eA8bFD14424A',
}
export const Market_ADDRESS = {
  [SupportedChainId.SEPOLIA]: '0xc1C856E466B11B8CbdDF6F7f7ACdF931F2205ECE',
  [SupportedChainId.DEVMEMO]: '0xfC865296074c896cAFf8d1e67C40bd44FeDe36f2',
}
export const GToken_ADDRESS = {
  [SupportedChainId.SEPOLIA]: '',
}
export const Credit_ADDRESS = {
  [SupportedChainId.SEPOLIA]: '0x777C8698F8bd6Ca493A70f6C52156E9225a78664',
  [SupportedChainId.DEVMEMO]: '0x6c6E1Eae1a7F44ABB9Ae13910900a00c55890710'
}
export const Version_ADDRESS = {
  [SupportedChainId.SEPOLIA]: '0x914755A942E623Ab5E76a6F4FCCB87fEae7E37A3',
  [SupportedChainId.DEVMEMO]: '0x52A630Cc232D18DB475a01E2F3eA6F9aEdAE2981'
}

export const Swap_ADDRESS = {
  [SupportedChainId.SEPOLIA]: '0x2Aa6b2037C0AD4AC1c4B356632b539f29c4E26Af',
}
