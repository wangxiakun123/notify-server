/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

import dayjs, { weekToday } from '../../../utils/dayjs'

export const textTemplatePush = () => {

  let text = '滴滴滴,来自baba的打卡提醒~\n打卡时间快到了哦\n'
  text +=`记得打卡 记得打卡 记得打卡 重要的事情说三遍！`
  // 工作日/休息日，需要排除节假日

  const week = weekToday()

//   if (['星期六', '星期日'].includes(week)) {
//     text += `
// 今天是${week}，可以不用学习,难得的周末,好好放松。\n`
//   }
//   else {
// text += `
// 今天可是${week}，不要忘记学习,加油,奥利给~\n学习是件很枯燥的事情 保持耐心。\n`
//   }

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
