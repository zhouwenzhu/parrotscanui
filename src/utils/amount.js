import Big from 'big.js'

export function toAmount (value, decimals = 18) {
  return new Big(value || 0).div(new Big(10).pow(decimals))
}

export function toSpecialAmount (value, decimals = 18, showDecimals = 4) {
  const b = toAmount(value, decimals)

  if (b.gt(1)) {
    return b.toFixed(2, 0)
  } else if (b.lte(0)) {
    return b.toFixed(0)
  }
  return b.toFixed(showDecimals)
}

export function fromAmount (value, decimals = 18) {
  return (new Big(value|| 0)).times(new Big(10).pow(decimals)).toFixed(0)
}


export function SecondsToTime(secd) {
  const date = new Date(secd * 1000); // 将秒数转换为毫秒，并创建一个新的 Date 对象

  const year = date.getFullYear(); // 获取年份
  const month = `0${date.getMonth() + 1}`.slice(-2); // 获取月份，注意月份从 0 开始，需要加 1，并补零
  const day = `0${date.getDate()}`.slice(-2); // 获取日期，并补零

  const hours = `0${date.getHours()}`.slice(-2); // 获取小时，并补零
  const minutes = `0${date.getMinutes()}`.slice(-2); // 获取分钟，并补零
  const seconds = `0${date.getSeconds()}`.slice(-2); // 获取秒数，并补零

  const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} `; // 格式化时间字符串

  return formattedTime;
}