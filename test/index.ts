// const Calendar=require('../dist/calendar.min')
// const Calendar=require('../src/calendar')
import Calendar from '../src/calendar'
let calendar = new Calendar({})
console.log(calendar.getLunarCalendar(2020,11,44))
var sObj = new Date('2020-9-1 00:00:01')
var fisrtDay:number = sObj.getDay()
console.log(sObj, '----', fisrtDay);