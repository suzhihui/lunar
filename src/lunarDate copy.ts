export default class Calendar {
    year:number = 1900
    constructor() {}
    // 获取农历日期
    getLunarCalendar(y:number, m:number, d:number) {
        const nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
        const nStr2 = new Array('初','十','廿','卅','□');
        const cmonthName = new Array('正','二','三','四','五','六','七','八','九','十','十一','腊');
        
        
        const solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"); // 节气
        const sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
        const wFtv:string[] = ["0520 母亲节", "0630 父亲节", "1144 感恩节"]; // 月周节日
        const lFtv:string[] = [
            "0101*春节",
            "0115 元宵节",
            "0202 龙抬头",
            "0505 端午节",
            "0815 中秋节",
            "0909 重阳节",
            "1208 腊八节",
            "1223 小年",
            "0100*除夕"
        ]; // 农历节日

       
        // 当月一日与 1900/1/1 相差天数
        const dayCyclical = Date.UTC(y,m,d,0,0,0,0)/86400000+25567+10;

        const term2 = this.sTerm(y, 2) // 立春日期
        const sDObj = new Date(y,m,1,0,0,0,0);
        const firstWeek = sDObj.getDay();    //公历当月1日星期几
        const week = nStr1[(d+firstWeek)%7] // 星期几
        const lDObj = this.convertLDObj(new Date(y,m,d))
        // function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay)
        const info = {
            sYear          : y,  //公元年4位数字
            sMonth         : m+1, //公元月数字
            sDay           : d,   //公元日数字
            week           : week,    //星期, 1个中文
            //农历
            lYear          : lDObj.year,   //公元年4位数字
            lMonth         : lDObj.month,  //农历月数字
            lDay           : lDObj.day,    //农历日数字
            isLeap         : lDObj.isLeap,  //是否为农历闰月?
            lunarFestival  : '', //农历节日
            solarFestival  : '', //公历节日
            solarTerms     : '', //节气
        }
        return info
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
        
        if(offset==0 && leap>0 && i==leap+1)
            if(isLeap)
                { isLeap = false; }
            else
                { isLeap = true; --i; }
        
        if(offset<0){ offset += temp; --i; }
        
        let month = i;
        let day = offset + 1;
        return {
            year,
            month,
            day,
            isLeap
        }
    }
    // 某年的第n个节气为几日(从0小寒起算)
    sTerm(y:number, n:number) {
        const offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) );
        return offDate.getUTCDate()
    }
    // 返回农历 y年闰月的天数
    lYearDays(y:number) {
        var i, sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
        return (sum + leapDays(y));
    }
    //  返回农历 y年闰哪个月
    leapDays(y:number) {
        if (this.leapMonth(y)) return ((lunarInfo[y - 1899] & 0xf) == 0xf ? 30 : 29);
        else return (0);
    }
    //====================================== 返回农历 y年m月的总天数
    monthDays(y:number, m:number) {
        return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
    }
    //====================================== 返回农历 y年闰哪个月 1-12 , 没闰返回 0
    leapMonth(y) {
        var lm = lunarInfo[y-1900] & 0xf;
        return(lm==0xf?0:lm);
    }
}