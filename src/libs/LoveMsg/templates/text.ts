/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

import dayjs, { weekToday } from '../../../utils/dayjs'

export const textTemplate = (data: TextTemplateProps) => {
  const { caiHongpi, sayLove, songLyrics, oneMagazines, netEaseCloud, oneWord, dayEnglish } = data

  let text = '滴滴滴,儿子儿子~\n'

  // 工作日/休息日，需要排除节假日
  const week = weekToday()
  if (['星期六', '星期日'].includes(week)) {
    text += `
今天是${week}，可以不用学习,难得的周末,好好放松。\n`
  }
  else {

text += `
今天可是${week}，不要忘记学习,加油,奥利给~\n代码是个很枯燥的事情 保持耐心。\n`
  }

  // 添加笑话
//   if (caiHongpi) {
//     //     text += `
//     // 彩虹屁：
//     text += `
// ${caiHongpi.content}\n`
//   }

//   if (sayLove) {
//     text += `
// ${sayLove.content}\n`
//   }

  // 诗句
  if (songLyrics) {
    text += `
『${songLyrics.source}』${songLyrics.content}\n`
  }

//   if (oneMagazines) {
//     text += `
// 『ONE杂志』${oneMagazines.word}\n`
//   }

  if (netEaseCloud) {
    text += `
『网易云音乐热评』${netEaseCloud.content}——${netEaseCloud.source}\n`
  }

  // 添加一句一言
//   if (oneWord) {
//     text += `
// 『一言』${oneWord.hitokoto}\n`
//   }

  // 每日英语
  if (dayEnglish) {
    text += `
『每日英语（${dayjs(dayEnglish.date).format('ll')}』${dayEnglish.content}`
  }

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
