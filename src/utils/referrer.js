import { ZERO_ADDRESS } from './ethereum'

const key = '__referrer'

export const getReferrerFromLocal = () => {
  const local = localStorage.getItem(key)
  return local ? local : ZERO_ADDRESS
}

export const setReferrerToLocal = (val) => {
  localStorage.setItem(key, val)
}
