define(function () { 'use strict';

  var Calendar = /** @class */ (function () {
      function Calendar(options) {
          this.options = options;
          this.defaults = {
              //中文格式内容
              monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
              dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
              dayLongNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
              holiday: {
                  "1-1": "元旦",
                  "2-2": "湿地日",
                  "2-14": "情人节",
                  "3-8": "妇女节",
                  "3-12": "植树节",
                  "3-15": "消费者权益日",
                  "4-1": "愚人节",
                  "4-22": "地球日",
                  "5-1": "劳动节",
                  "5-4": "青年节",
                  "5-12": "护士节",
                  "5-18": "博物馆日",
                  "6-1": "儿童节",
                  "6-5": "环境日",
                  "6-23": "奥林匹克日",
                  "6-24": "骨质疏松日",
                  "7-1": "建党节",
                  "8-1": "建军节",
                  "9-3": "抗战胜利日",
                  "9-10": "教师节",
                  "10-1": "国庆节",
                  "11-17": "学生日",
                  "12-1": "艾滋病日",
                  "12-24": "平安夜",
                  "12-25": "圣诞节"
              },
              firstDay: 1,
              weekendDays: [0, 6],
              dateFormat: 'yyyy-mm-dd',
          };
          //参数调整
          options = options || {};
          for (var prop in this.defaults) {
              if (typeof options[prop] === 'undefined') {
                  options[prop] = this.defaults[prop];
              }
          }
          this.attrs = options;
      }
      // 获取农历日期
      Calendar.prototype.getLunarCalendar = function (year, month, day) {
          var monthName = ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "腊月"];
          var dateName = ["十", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
          var datePrefixName = ["初", "十", "廿", "三"];
          var solarTermName = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "露水", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
          var festivalName = {
              "0101": "春节",
              "0115": "元宵节",
              "0202": "龙头节",
              "0505": "端午",
              "0707": "七夕",
              "0715": "中元节",
              "0815": "中秋",
              "0909": "重阳节",
              "1001": "寒衣节",
              "1015": "下元节",
              "1208": "腊八节",
              "1223": "小年",
              "1230": "除夕"
          };
          var differenceYear = year - 1900;
          var solarTermSerialNumber = month * 2 - 1;
          var lunarCalendarMonth = (month - 1 + 12) % 12;
          var solarTerm = '';
          var festivalNumber = '';
          var accumulateDate = this._gregorianCalendarToAccumulateDate(year, month, day);
          var lunarDate = this._getLunarDate(accumulateDate);
          var curSTLD = this._getLunarDate(this._getSolarTermAccumulateDate(differenceYear, solarTermSerialNumber));
          var nextSTLD = this._getLunarDate(this._getSolarTermAccumulateDate(differenceYear, solarTermSerialNumber + 2));
          var curSTAD = this._getSolarTermAccumulateDate(differenceYear, solarTermSerialNumber);
          var nextSTAD = this._getSolarTermAccumulateDate(differenceYear, solarTermSerialNumber + 2);
          var halfPrevSTAD = this._getSolarTermAccumulateDate(differenceYear, solarTermSerialNumber - 1);
          var halfNextSTAD = this._getSolarTermAccumulateDate(differenceYear, solarTermSerialNumber + 1);
          // 调整月份
          if (accumulateDate < curSTAD && lunarDate + curSTAD - accumulateDate !== curSTLD)
              lunarCalendarMonth--;
          else if (accumulateDate > curSTAD && lunarDate - (accumulateDate - curSTAD) !== curSTLD && lunarDate + nextSTLD - accumulateDate === nextSTAD)
              lunarCalendarMonth++;
          // 是否有节气
          if (curSTAD === accumulateDate)
              solarTerm = solarTermName[solarTermSerialNumber];
          else if (halfPrevSTAD === accumulateDate)
              solarTerm = solarTermName[solarTermSerialNumber - 1];
          else if (halfNextSTAD === accumulateDate)
              solarTerm = solarTermName[solarTermSerialNumber + 1];
          // 是否有节日
          var monNum = lunarCalendarMonth == 0 ? 1 : lunarCalendarMonth;
          if (monNum < 10)
              festivalNumber = "0" + monNum;
          else
              festivalNumber = monNum + '';
          if (lunarDate < 10)
              festivalNumber += "0" + lunarDate;
          else
              festivalNumber += lunarDate;
          console.log(festivalNumber, '**', lunarCalendarMonth, '---', lunarDate);
          var festivalString = festivalName[festivalNumber];
          // console.log(festivalNumber, '--', 'monNum', monNum, '---', festivalName, '$$$$ festivalString', festivalString)
          // 是否有农历名称
          var monString = monthName[(monNum + 11) % 12];
          var prefix = Math.floor((lunarDate - 1) / 10);
          var dataString = (lunarDate === 20 || lunarDate === 30) ? datePrefixName[prefix + 1] : datePrefixName[prefix];
          dataString += dateName[lunarDate % 10];
          // 是否有公历节日：圣诞节 情人节之类的
          var holiday = this.attrs.holiday["" + ((month) + '-' + day)];
          return {
              month: monString,
              data: dataString,
              solarTerm: solarTerm,
              festival: festivalString,
              holiday: holiday
          };
      };
      // 计算某年某个节气日
      Calendar.prototype._getSolarTermAccumulateDate = function (differenceYear, solarTermSerialNumber) {
          return Math.floor(365.242 * differenceYear + 6.2 + 15.22 * solarTermSerialNumber - 1.9 * Math.sin(0.262 * solarTermSerialNumber));
      };
      // 公历转化为积日
      Calendar.prototype._gregorianCalendarToAccumulateDate = function (year, month, day) {
          var accumulateDate = 0;
          accumulateDate += (year - 1900) * 365;
          accumulateDate += Math.floor((year - 1901) / 4);
          for (var eMon = month - 1; eMon > 0; eMon--) {
              accumulateDate += (new Date(year, eMon, 0)).getDate();
          }
          accumulateDate += day;
          return accumulateDate;
      };
      // 计算积日的农历日期
      Calendar.prototype._getLunarDate = function (accumulateDate) {
          var reverseCalends = Math.floor((accumulateDate - 1.6) / 29.5306);
          var calends = reverseCalends - 1;
          var solarTermDate = 0;
          do {
              calends++;
              var calendsAccumulateDate = Math.floor(1.6 + 29.5306 * calends + 0.4 * Math.sin(1 - 0.45058 * calends));
              solarTermDate = accumulateDate - calendsAccumulateDate + 1;
          } while (solarTermDate >= 30);
          return solarTermDate === 0 ? 30 : solarTermDate;
      };
      return Calendar;
  }());

  return Calendar;

});
