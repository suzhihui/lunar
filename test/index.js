const Calendar = require('../dist/calendar.min')

let calendar = new Calendar({})
console.log(calendar.getLunarCalendar(2013,2,10))