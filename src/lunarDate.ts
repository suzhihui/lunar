// 计算农历
export default class Calendar {
    private lunarInfo = [0x4bd8,0x4ae0,0xa570,0x54d5,0xd260,0xd950,0x5554,0x56af,0x9ad0,0x55d2,
        0x4ae0,0xa5b6,0xa4d0,0xd250,0xd295,0xb54f,0xd6a0,0xada2,0x95b0,0x4977,
        0x497f,0xa4b0,0xb4b5,0x6a50,0x6d40,0xab54,0x2b6f,0x9570,0x52f2,0x4970,
        0x6566,0xd4a0,0xea50,0x6a95,0x5adf,0x2b60,0x86e3,0x92ef,0xc8d7,0xc95f,
        0xd4a0,0xd8a6,0xb55f,0x56a0,0xa5b4,0x25df,0x92d0,0xd2b2,0xa950,0xb557,
        0x6ca0,0xb550,0x5355,0x4daf,0xa5b0,0x4573,0x52bf,0xa9a8,0xe950,0x6aa0,
        0xaea6,0xab50,0x4b60,0xaae4,0xa570,0x5260,0xf263,0xd950,0x5b57,0x56a0,
        0x96d0,0x4dd5,0x4ad0,0xa4d0,0xd4d4,0xd250,0xd558,0xb540,0xb6a0,0x95a6,
        0x95bf,0x49b0,0xa974,0xa4b0,0xb27a,0x6a50,0x6d40,0xaf46,0xab60,0x9570,
        0x4af5,0x4970,0x64b0,0x74a3,0xea50,0x6b58,0x5ac0,0xab60,0x96d5,0x92e0,
        0xc960,0xd954,0xd4a0,0xda50,0x7552,0x56a0,0xabb7,0x25d0,0x92d0,0xcab5,
        0xa950,0xb4a0,0xbaa4,0xad50,0x55d9,0x4ba0,0xa5b0,0x5176,0x52bf,0xa930,
        0x7954,0x6aa0,0xad50,0x5b52,0x4b60,0xa6e6,0xa4e0,0xd260,0xea65,0xd530,
        0x5aa0,0x76a3,0x96d0,0x4afb,0x4ad0,0xa4d0,0xd0b6,0xd25f,0xd520,0xdd45,
        0xb5a0,0x56d0,0x55b2,0x49b0,0xa577,0xa4b0,0xaa50,0xb255,0x6d2f,0xada0,
        0x4b63,0x937f,0x49f8,0x4970,0x64b0,0x68a6,0xea5f,0x6b20,0xa6c4,0xaaef,
        0x92e0,0xd2e3,0xc960,0xd557,0xd4a0,0xda50,0x5d55,0x56a0,0xa6d0,0x55d4,
        0x52d0,0xa9b8,0xa950,0xb4a0,0xb6a6,0xad50,0x55a0,0xaba4,0xa5b0,0x52b0,
        0xb273,0x6930,0x7337,0x6aa0,0xad50,0x4b55,0x4b6f,0xa570,0x54e4,0xd260,
        0xe968,0xd520,0xdaa0,0x6aa6,0x56df,0x4ae0,0xa9d4,0xa4d0,0xd150,0xf252,
        0xd520]
    private sTermInfo = [ 0, 21208, 43467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758 ];
    private nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
        
    // 实例属性
    attrs: any 
    // 年月日
    year:number = -1
    month:number = -1
    day:number = -1
        // 默认参数
    defaults = {
        // 节气
        solarTerm : ["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],
        // 月周节日
        wFtv      : ["0520 母亲节", "0630 父亲节", "1144 感恩节"]
    }
    
    constructor(public options:any = {}) {
        for (var prop in this.defaults) {
            if(typeof options[prop] === 'undefined') {
                options[prop] = this.defaults[prop];
            }
        }
        this.attrs = options
    }
    /**
     * @param {String} y,m,d 年月日
     * @return {Object} Options 返回农历信息
     * @Object {month}
     * @Object {data}
     * @Object {jieqi} // 节气
     * @Object {lunarFestival} // 农历节日
     * @Object {solarFestival} // 公历节日 包括 周节日老外节
     * 
     */
    getLunarCalendar(y:number, m:number, d:number) {
        // 当月一日与 1900/1/1 相差天数
        const dayCyclical = Date.UTC(y,m,d,0,0,0,0)/86400000+25567+10;
        const term2 = this.sTerm(y, 2) // 立春日期
        const sDObj = new Date(y,m,d);
        const weekIndex = sDObj.getDay();
        const week = this.nStr1[weekIndex] // 星期几
        // const lDObj = this.convertLDObj(new Date(y,m,d))
        const lDObj = this.nl(new Date(y,m,d).getTime())
        this.year = y
        this.month = m
        this.day = d
        let res:any = {
            sYear          : y,  //公元年4位数字
            sMonth         : m+1, //公元月数字
            sDay           : d,   //公元日数字
            week           : week,    //星期, 1个中文

            //农历
            // lYear          : lDObj.year,   //公元年4位数字
            // lMonth         : lDObj.month,  //农历月数字
            // lDay           : lDObj.day,    //农历日数字
            // isLeap         : lDObj.isLeap,  //是否为农历闰月?
        }
        return res
    }
    // 計算農曆年月日
    nl(curTime) {
        //星期名
        var weekName = "星期日,星期一,星期二,星期三,星期四,星期五,星期六".split(/,/g);
        //农历日期名
        var dayName = "*,初一,初二,初三,初四,初五,初六,初七,初八,初九,初十,十一,十二,十三,十四,十五,十六,十七,十八,十九,二十,廿一,廿二,廿三,廿四,廿五,廿六,廿七,廿八,廿九,三十".split(/,/g);
        //农历月份名
        var monName = "*,正,二,三,四,五,六,七,八,九,十,十一,腊".split(/,/g);
        //生成当前公历年、月、日 ==> GongliStr
        var curYear = curTime.getFullYear();
        var curMonth = curTime.getMonth() + 1;
        var curDay = curTime.getDate();
        var gongliStr = curYear + "年";

        if (curMonth < 10)
            gongliStr = gongliStr + "0" + curMonth + "月";
        else
            gongliStr = gongliStr + curMonth + "月";
        if (curDay < 10)
            gongliStr = gongliStr + "0" + curDay + "日";
        else
            gongliStr = gongliStr + curDay + "日";

        //生成当前公历星期 ==> WeekdayStr
        var curWeekday = curTime.getDay();
        var weekdayStr = weekName[curWeekday];

        // 计算到初始时间1921年2月8日的天数：1921-2-8(正月初一)
        var theDate = (curYear - 1921) * 365 + Math.floor((curYear - 1921.0) / 4) + curDay + monthAdd[curMonth - 1] - 38;
        if ((curYear % 4) == 0 && curMonth > 2) theDate++;
        //计算农历天干、地支、月、日
        var isEnd = 0;
        var m = 0, k, n;
        while (1) {
        if (n < 0) break;
        //获取NongliData[m]的第n个二进制位的值
        bit = nongliData[m]
        for (var i = 0; i < n; i++)
        bit = Math.floor(bit / 2.0);
        bit = bit % 2;
        if (theDate <= (29 + bit)) {
        isEnd = 1
        break;
        }
        theDate -= 29 + bit;
        n--;
        }
        if (isEnd == 1) break;
        m++;
        }
        curYear = 1921 + m;
        curMonth = k - n + 1;
        curDay = theDate;
        if (k == 12) {
        var mc = (Math.floor(nongliData[m] / 65536.0) + 1);
        if (curMonth == mc)
        curMonth = 1 - curMonth;
        else if (curMonth > mc) //NongliData(m)
        curMonth = curMonth - 1;
        }
        var o = new Object();
        o.year = new Date().getFullYear();
        o.month = new Date().getMonth() + 1;
        o.date = new Date().getDate();
        o.day = new Date().getDay();
        o.dayName = weekName[o.day];
        //o.nYear = tianGang[((curYear - 4) % 60) % 10] + diZhi[((curYear - 4) % 60) % 12] + "年";
        var i, leap=0, temp=0;
        var offset   = (Date.UTC(curTime .getFullYear(),curTime .getMonth(),curTime .getDate()) - Date.UTC(1900,0,31))/86400000;
        for(i=1900; i<2100 && offset>0; i++) { temp=lYearDays(i); offset-=temp; }
        if(offset<0) { offset+=temp; i--; }
        
        //o.nYear = tianGang[((curYear - 4) % 60) % 10] + diZhi[((curYear - 4) % 60) % 12] + "年";
        o.nYear =i;//((curYear - 4) % 60) % 10+ "年";
        
        if (curMonth < 1)
        o.nMonth = "闰" + monName[-1 * curMonth];
        else
        o.nMonth = monName[curMonth];
        o.nMonth += "月";
        o.nDate = dayName[curDay];
        //o.nZodiac = shuXiang[((curYear - 4) % 60) % 12];
        return o;
    }
    //====================================== 返回农历 y年m月的总天数
    monthDays(y:number, m:number) {
        return ((this.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
    }
    //  返回农历 y年闰哪个月
    leapDays(y:number) {
        if (this.leapMonth(y)) return ((this.lunarInfo[y - 1899] & 0xf) == 0xf ? 30 : 29);
        else return (0);
    }
    // 返回农历 y年闰月的天数
    lYearDays(y:number) {
        var i, sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) sum += (this.lunarInfo[y - 1900] & i) ? 1 : 0;
        return (sum + this.leapDays(y));
    }
    // 算出农历
    convertLDObj(objDate:any) {
        let i, leap=0, temp=0;
        var offset   = (Date.UTC(objDate.getFullYear(),objDate.getMonth(),objDate.getDate()) - Date.UTC(1900,0,31))/86400000;
        
        for(i=1900; i<2100 && offset>0; i++) { temp=this.lYearDays(i); offset-=temp; }
        
        if(offset<0) { offset+=temp; i--; }
        
        let year = i;
        
        leap = this.leapMonth(i); //闰哪个月
        let isLeap = false;
        
        for(i=1; i<13 && offset>0; i++) {
            //闰月
            if(leap>0 && i==(leap+1) && isLeap==false)
                { --i; isLeap = true; temp = this.leapDays(this.year); }
            else
                { temp = this.monthDays(this.year, i); }
        
            //解除闰月
            if(isLeap==true && i==(leap+1)) isLeap = false;
        
            offset -= temp;
        }
        
        if(offset==0 && leap>0 && i==leap+1) {
            if(isLeap)
                { isLeap = false; }
            else
                { isLeap = true; --i; }
        
        }
        if(offset<0) { offset += temp; --i; }
        
        let month = i;
        let day = offset + 1;
        return {
            year,
            month,
            day,
            isLeap
        }
    }
    //====================================== 返回农历 y年闰哪个月 1-12 , 没闰返回 0
    leapMonth(y:number) {
        var lm = this.lunarInfo[y-1900] & 0xf;
        return(lm==0xf?0:lm);
    }
    // 某年的第n个节气为几日(从0小寒起算)
    sTerm(y:number, n:number) {
        const offDate = new Date( ( 31556925974.7*(y-1900) + this.sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) );
        return offDate.getUTCDate();
    }
}