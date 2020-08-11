/*
    Geovin Du 塗聚文 20130608修改
toString()：把数组转换成一个字符串
toLocaleString()：把数组转换成一个字符串
join()：把数组转换成一个用符号连接的字符串
shift()：将数组头部的一个元素移出
unshift()：在数组的头部插入一个元素
pop()：从数组尾部删除一个元素
push()：把一个元素添加到数组的尾部
concat()：给数组添加元素
slice()：返回数组的部分
reverse()：将数组反向排序
sort()：对数组进行排序操作
splice()：插入、删除或者替换一个数组元素    */

/*****************************************************************************
                                   日期资料
*****************************************************************************/

var lunarInfo=new Array(
    0x4bd8,0x4ae0,0xa570,0x54d5,0xd260,0xd950,0x5554,0x56af,0x9ad0,0x55d2,
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
    0xd520);
    
    var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    var Gan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
    var Zhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
    var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
    var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
    var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
    var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
    var nStr2 = new Array('初','十','廿','卅','□');
    var monthName = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");
    var cmonthName = new Array('正','二','三','四','五','六','七','八','九','十','十一','腊');
    
    
    var nos=new Date();
    var ye=nos.getFullYear();//現在年份
    var ym=nos.getMonth();//現在月份
    var ydye=ye-386;
    var dsye=ye-2000;
    var tujuwen=ye-1977;
    var by=2011;
    var birthday=ye-by;
    var deadday=1981;//
    //var a=document.getElementById("cal_year").innerHTML.toString(); //document.getElementById("cal_year").innerHTML;
     var s="";
    
    
    //公历节日 *表示放假日
    
    /*公历一月*/
    var sFtv = new Array(
    "0101 元旦节(New Year's Day)[今年"+ydye+"周年]",//晋恭帝司马德文（386年－421年）
    "0114 日记情人节(Diary Day)",//
    "0314 白色情人节(White Day)",//
    "0414 黑色情人节(Black Day)",//
    "0514 玫瑰情人节(Yellow &Rose Day)",//
    "0614 亲亲情人节(Kiss Day)",//
    "0714 银色情人节(silver Day)",//
    "0814 绿色情人节(Green Day)",//
    "0914 相片情人节(Music &Photo Day)",//
    "1014 葡萄酒情人节(Wine Day)",
    "1114 电影情人节(Orange&Movie Day)",//
    "1214 拥抱情人节(Hug Day)",//
    
    "0408 伞兵节",//
    "0413 潑水節",//Water-Splashing Festival 700年的历史
    "0414 復活節",
    "0715 傣族关门节",//在每年傣历的9月15日(公历7月15日)
    "0929 圣米迦勒与诸天使日",
    "1015 傣族开门节",
    "1031 万圣节(All Hallow's Day)",
    "1120 彝族年",//
    "1224 平安夜",//
    "1225 圣诞节",//
    "1229 藏族驱鬼节");
    
    
    
    //計算周年,並且在現在時間之後顯示
    by=1985;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0105 哈尔滨国际冰雪节[今年"+birthday+"周年]");//1985
    }
    by=2005;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0106 中国13亿人口日[今年"+birthday+"周年]");//2005
    }
    by=1976;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0108 周恩来逝世纪念日[今年"+birthday+"周年]");//1976
    }
    by=1986;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0110 中国110宣传日[今年"+birthday+"周年]");//1986
    }
    
    by=2011;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0111 單身節[今年"+birthday+"周年]");//
    }
    by=1943;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0111 司法节[今年"+birthday+"周年]");//司法节始于1943年1月11日，中国与美国和英国等国联订平等新约，废除治外法权后，中国司法才得完全独立，所以政府就定1月11日为司法节
    
    }
    
    by=1444;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0115 谚文日(한글날)[今年"+birthday+"周年]");//0115 谚文日（한글날），又称“韩文日”、“谚文日”、“朝鲜语字母日”或“韩国语字母日”，是朝鲜民族纪念训民正音发明的纪念日。韩国订于10月9日，称为韩字日（한글날，Hangullal）；朝鲜则订于1月15日，称为朝鲜字日（조선글날／朝鮮글날，Chosŭn'gŭllal）。朝鲜的庆祝日朝鲜文字日在1月15日，以纪念据说是“训民正音”在1444年正式颁布的日期
    }
    by=1788;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0126 澳洲日[今年"+birthday+"周年]");//0126 1月26日是澳洲日 Australia Day 在1788年1月26日
    }
    by=1984;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0126 国际海关日[今年"+birthday+"周年]");//1984
    }
    by=2008;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0128 数据隐私日(Data Privacy Day)[今年"+birthday+"周年]");//2008 每年的1月28日是美国的“数据隐私日(Data Privacy Day)”。该节日由美国国家网络安全联盟(National Cyber Security Alliance)于2008年制定
    }
    
    /*公历二月*/
    
    
    by=1971;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0202 世界湿地日[今年"+birthday+"周年]");//2月2日是世界湿地日，由国际湿地公约常委会于1996年10月确立，以便开展各种活动来提高公众对湿地的认识，促进湿地保护1971年2月2日，在伊朗的拉姆萨尔签署了全球性政府间的保护公约《关于特别是作为水禽栖息地的国际重要湿地公约》，简称《湿地公约》。
    }
    by=30;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0202 圣烛节[今年"+birthday+"周年]");//圣烛节（Kyndelmisse），又称“圣母行洁净礼日”或“献主节”等，是在2月2日，即圣母玛利亚产后40天带着耶稣往耶路撒冷去祈祷的纪念日。 耶稣（前4年－30年或前5年－29年）
    }
    by=2000;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0204 世界癌症日[今年"+birthday+"周年]");//世界癌症日是UICC于2000年发起，活动时间定于每年的2月4日
    }
    by=1947;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0206 怀唐伊日[今年"+birthday+"周年]");//怀唐伊日 1947
    }
    by=1991;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0210 国际气象节[今年"+birthday+"周年]");//每年的2月10日是国际气象节。国际气象节的发起人是一个法国人。1991年的2月10日，在Issy－Les－Moulineaux(依西·雷莫里诺) 的地点举办了第一个国际气象节
    }
    by=270;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0214 情人节[今年"+birthday+"周年]");//Valentine's Day 公元270年2月14日，他被处死刑，后来，基督教徒为了纪念瓦伦丁为正义、为纯洁的爱而牺牲自己，将临刑的这一天定为“圣瓦伦节”，后人又改成“情人节”
    }
    by=1977;
    birthday=ye-by;
    if(birthday>=0)
    {
         sFtv=sFtv.concat("0214 涂聚文生日[今年"+birthday+"周年]");//
    }
    
    by=2000;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0221 国际母语日[今年"+birthday+"周年]");//定为每年的2月21日，由联合国教科文组织于1999年提出倡议，从2000年起
    }
    
    /*公历三月*/
    //“世界戏剧日”是国际戏剧协会（International Theatre Institute, ITI）于1961创立的一个纪念日 3月27日为世界戏剧日
    //2001年，国际精神卫生和神经科学基金会主办的全球睡眠和健康计划发起了一项全球性的活动，将每年初春的第一天—3月21日定为“世界睡眠日”(World Sleep Day)
    //经国际肾脏病学会(International Society of Nephrology, ISN)与国际肾脏基金联盟(International Federation of Kidney Foundation, IFKF)联合提议，决定从2006年起将每年3月份的第二个星期四确定为世界肾脏日（World Kidney Day）
    
    by=1983;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0301 国际海豹日[今年"+birthday+"周年]");//拯救海豹基金会在1983年决定每年的3月1日为国际海豹日
    }
    by=1998;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0303 全国爱耳日[今年"+birthday+"周年]");//1998年3月
    }
    by=1963;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0305 中国学雷锋纪念日[今年"+birthday+"周年]");//1963年3月5日,毛主席“向雷锋同志学习”的题词发表,之后,每年的3月5日被定为学雷锋日,到现在已经48个年头了
    }
    by=2008;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0306 世界青光眼日[今年"+birthday+"周年]");//世界青光眼协会和世界青光眼患者协会在2008年共同发起将3月6日定为世界青光眼日
    }
    by=1986;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0307 女生节[今年"+birthday+"周年]");//女生节，起源于20世纪90年代初 1986年3月7日在山东大学东校区科学会堂举行
    }
    by=1911;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0308 妇女节[今年"+birthday+"周年]");//1909年3月8日妇女争取男女平等 1911年的3月8日为第一个国际劳动妇女节
    }
    by=2002;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0309 中国保护母亲河日[今年"+birthday+"周年]");//“保护母亲河日”是由全国保护母亲河行动领导小组于2002年设立
    }
    by=1928;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0312 中国植树节[今年"+birthday+"周年]");//1925年3月12日，孙中山先生逝世。1928年，为纪念孙中山逝世三周年，国民政府举行了植树式。以后为了纪念孙中山先生，把他逝世的那天，即3月12日定为植树节。
    }
    by=1925;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0312 孙中山逝世纪念日[今年"+birthday+"周年]");//孙中山(1866.11.12—1925.03.12)1925年3月12日9时30分,孙中山因原发胆管腺癌转移到肝部逝于北京协和医院,享年59岁
    }
    by=2004;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0314 国际警察日[今年"+birthday+"周年]");//我国的“警察日”是公安部在2004年确定的3月14日是国际警察日
    }
    by=1983;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0315 消费者权益日[今年"+birthday+"周年]");//(International Day for Protecting Consumers' Rights) 定于每年的3月15日，最先由国际消费者联盟组织于1983年确定，目的在于扩大消费者权益保护的宣传
    }
    by=1929;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0317 中国国医节[今年"+birthday+"周年]");//“中国国医节”源于中国上海。大约在1929年，国民党政府卫生机构的主管俞云岫要求取消“旧医药”，遭到中医药界人士的强烈反对和抗争。为纪念此次抗争的日子，为了保护和弘扬中医药学，医学界人士将3月17日定为“中国国医节”
    }
    by=1977;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0317 国际航海日[今年"+birthday+"周年]");//1977年11月的国际海事组织第十届大会通过决议，决定今后每年3月17日
    }
    by=1971;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0321 世界森林日[今年"+birthday+"周年]");//世界森林日(WorldForestDay)在每年公历的3月21日,是1971年在欧洲农业联盟的特内里弗岛大会上,由西班牙提出倡议并得到一致通过
    }
    
    //"0321 世界林业节",//
    by=1966;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0321 消除种族歧视国际日[今年"+birthday+"周年]");//1966年11月9日，第21届联合国大会通过一项决议，把每年3月21日定为“国际消除种族歧视日” (International Day for the Elimination of Racial Discrimination) 。这是为了纪念1960年3月21日南非沙佩维尔惨案、反对种族歧视而确定的。
    
    }
    by=1976;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0321 世界儿歌日[今年"+birthday+"周年]");//1976年，在比利时克诺克两年一度的国际诗歌会上创立了世界儿歌日
    }
    //sFtv=sFtv.concat("0321 世界森林日 世界林业节 消除种族歧视国际日 世界儿歌日",//
    by=1993;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0322 世界水日[今年"+birthday+"周年]");//1993年1月18日，第四十七届联合国大会作出决议，确定每年的3月22日为“世界水日”World Water Da
    }
    by=1950;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0323 世界气象日[今年"+birthday+"周年]");//生效日（1950年3月23日）而设立的 WorldMeteorologicalDay
    }
    by=1995;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0324 世界防治结核病日[今年"+birthday+"周年]");//1995年底世界卫生组织（WHO）将每年3月24日作为世界防治结核病日（WorldTuberculosisDay），是为了纪念1882年德国微生物学家罗伯特·科霍向一群德国柏林医生发表他对结核病病原菌的发现
    
    }
    by=1600;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0325 英国母亲节[今年"+birthday+"周年]");//十七世纪英格兰,为表达对英国母亲们的敬意,乃订四旬斋的第四个星期日为「Mothering Sunday」
    }
    by=1976;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0330 巴勒斯坦国土日[今年"+birthday+"周年]");//3月30日是巴勒斯坦的“国土日”，这个日子是为了纪念在1976年的一系列抗议活动中，被以色列士兵屠杀的6名阿拉伯人而设立的
    }
    
    /*公历四月*/
    //2007年12月联合国大会通过决议：从2008年起，将每年的4月2日定为“世界自闭症日”
    
    
    
    
    //"0401 愚人节 全国爱国卫生运动月(四月) 中国税收宣传月(四月)",//
    by=1564;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0401 愚人节[今年"+birthday+"周年]");//"0401 愚人节",//愚人节起源于法国。 1564年,法国首先采用新改革的纪年法
    }
    by=1957;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0401 全国爱国卫生运动月(四月)[今年"+birthday+"周年]");//"0401 全国爱国卫生运动月(四月)",//1957年9月20日
    }
    by=1992;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0401 中国税收宣传月(四月)[今年"+birthday+"周年]");//"0401 税收宣传月(四月)",//税收宣传月从1992年开始
    }
    by=1967;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0402 国际儿童图书日[今年"+birthday+"周年]");//1967年4月2日，国际儿童读物联盟把安徒生诞生的日子确定为“国际儿童图书日”
    }
    by=-770;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0404 寒食节[今年"+birthday+"周年]");//寒食节在每年冬至(二十四节气之一)后的105天 春秋时期，指的是从公元前770年到公元前476年，基本上是东周的前半期
    }
    by=1954;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0404 香港兒童節[今年"+birthday+"周年]");//香港兒童節 1954年12月14日，联合国教科文组织宣布每年11月20日为国际儿童节
    }
    
    //"0407 世界卫生日,世界健康日,反思卢旺达大屠杀国际日",//
    by=1950;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0407 世界卫生日,世界健康日[今年"+birthday+"周年]");//World Health Day  自1950年以来，每年于4月7日庆祝世界卫生日
    }
    by=1994;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0407 反思卢旺达大屠杀国际日[今年"+birthday+"周年]");//1994年4月6日  联合国大会于2003年12月23日宣布将每年的4月7日定为“反思卢旺达大屠杀国际日”
    }
    
    by=2009;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0414 中國防災減災日[今年"+birthday+"周年]");//经中华人民共和国国务院批准，自2009年起，每年5月12日为全国“防灾减灾日”引
    }
    by=1958;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0415 非洲自由日[今年"+birthday+"周年]");//1958年4月16日一22日，在加纳首都阿克拉举行第一次非洲独立国家会议。会议闭幕时发表了宣言
    }
    by=1940;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0416 丹麦国庆日[今年"+birthday+"周年]");//女王生于1940年4月16日,因而这一天被定为国庆日
    }
    
    //"0417 世界血友病日,叙利亚国庆节",//
    by=1989;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0417 世界血友病日[今年"+birthday+"周年]");//自1989年起，特别订定他的生日作为“世界血友病日” World Haemophilia Day
    }
    by=1946;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0417 叙利亚国庆节[今年"+birthday+"周年]");//叙利亚的国庆日：1946年4月17日
    }
    
    //"0418 津巴布韦共和国成立纪念日,爱尔兰独立日",
    by=1980;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0418 津巴布韦共和国成立纪念日[今年"+birthday+"周年]");//1980年4月18日津巴布韦共和国宣布独立
    }
    by=1921;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0418 爱尔兰独立日[今年"+birthday+"周年]");//1921年12月6日
    }
    by=2008;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0419 中国汶川地震哀挨哀悼日[今年"+birthday+"周年]");//2008
    }
    by=1976;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0422 耶穌受難節");//是復活節前一个星期五
    }
    by=1970;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0422 世界地球日[今年"+birthday+"周年]");//World Earth Day 最初在1970年的美国由盖洛德·尼尔森和丹尼斯·海斯发起
    }
    by=1995;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0423 世界图书和版权日 世界閱讀日[今年"+birthday+"周年]");//1995年正式确定每年4月23日为“世界图书与版权日” 1995年，联合国教科文组织宣布4月23日为“世界读书日”
    }
    by=1963;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0424 亚非新闻工作者日[今年"+birthday+"周年]");////节日由来1963年4月24日至30日，中国，日本，埃及等47个亚非国家和地区的新闻工作者在雅加达举行亚非新闻工作者会议
    }
    by=1976;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0424 復活節星期天 24小時幽默日 實驗室小動物日");//
    }
    
    
    //
    //"0426 世界知識產權日 切爾諾貝利核電站事故紀念日",//
    by=2001;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0426 世界知識產權日[今年"+birthday+"周年]");//根据中华人民共和国和阿尔及利亚在1999年的提案，世界知识产权组织在2000年召开的第三十五届成员大会上通过决议，决定从2001年起，将每年的4月26日定为“世界知识产权日”
    }
    by=1986;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0426 切爾諾貝利核電站事故紀念日[今年"+birthday+"周年]");//1986年4月26日，核电站的第4号核反应堆在进行半烘烤实验中突然发生失火，引起爆炸
    }
    by=1982;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0429 世界舞蹈日[今年"+birthday+"周年]");//由联合国教科文组织下的国际舞蹈议会(CID)推广,1982年国际舞蹈委员会最先提出这日。这个日期是为了纪念现代芭蕾舞之父Jean-Georges Noverre
    }
    
    
    /*公历五月*/
    //1999年，第二十一届国际计量大会把每年的5月20日确定为“世界计量日”
    
    
    by=1890;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0501 国际劳动节[今年"+birthday+"周年]");//International Workers' Day1889年7月，由恩格斯领导的第二国际在巴黎举行代表大会。会议通过决议，规定1890年5月1日国际劳动者举行游行，并决定把5月1日这一天定为国际劳动节
    
    }
    by=1994;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0503 世界新闻自由日[今年"+birthday+"周年]");//1994
    }
    by=1919;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0504 中国青年节 中国五四運動紀念日[今年"+birthday+"周年]");////是为纪念1919年5月4日中国学生爱国运动而设立的
    }
    
    
    by=1996;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0504 中国科技傳播日[今年"+birthday+"周年]");//1996年为了贯彻全国科普工作会议精神，实施“科教兴国”战略，迎接中国科协“五大”的召开，继续推动面向青少年的科普工作，中国科协决定，组织各省、区、市科协和所属全国性学会、协会、研究会于5月4日青年节开展“五四科技传播日”活动
    }
    by=1912;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0504  北京大學校慶日[今年"+birthday+"周年]");//1912年5月京师大学堂改名为北京大学
    }
    by=1993;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0505 碘缺乏病防治日[今年"+birthday+"周年]");//1993年9月国务院召开“中国2000年消除碘缺乏病动员会”，会议并提出：5月5日为全国碘缺乏病防治日
    }
    by=1818;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0505 马克思诞辰纪念日[今年"+birthday+"周年]");//马克思诞辰纪念日（1818）
    }
    
    //"0508 世界红十字日 第二次世界大戰歐戰勝利紀念日 世界微笑日",//
    by=1948;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0508 世界红十字日[今年"+birthday+"周年]");//1948年，经国际联合会执行委员会同意，红十字创始人亨利·杜南的生日5月8日被定为红十字日
    }
    by=1945;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0508 第二次世界大戰歐戰勝利紀念日[今年"+birthday+"周年]");//1945年5月8日纳粹德国在柏林正式签订投降书
    }
    by=1948;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0508 世界微笑日[今年"+birthday+"周年]");//世界微笑日，是唯一一个庆祝人类行为表情的节日，从1948年起世界精神卫生组织将每年的5月8日确定为世界微笑日
    }
    by=2005;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0509 聯合國紀念與和解日[今年"+birthday+"周年]");//2005 5月9日，第59届联合国大会在纽约联合国总部举行特别会议，纪念二战胜利60周年。联大去年通过决议，将每年的5月8日和9日定为“纪念与和解日”
    }
    by=1912;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0512 国际护士节[今年"+birthday+"周年]");//该节是为纪念现代护理学科的创始人—弗劳伦斯·南丁格尔，于1912年设立的
    }
    by=1994;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    
        sFtv=sFtv.concat("0515 国际家庭日(International Day of Families)[今年"+birthday+"周年]");//1989年12月8日，第44届联合国大会通过一项决议，宣布1994年为国际家庭年，1993年纽约特别会议提出从1994年起每年5月15日定为国际家庭日（InternationalDayofFamilies）
    
    }
    by=2005;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0517 国际不再恐同日[今年"+birthday+"周年]");//
    }
    
    //国际不再恐同日IDAHO (International Day Against Homophobia)为每年的5月17日，由Louis-George Tin先生于2005年倡议，并得到国际同性恋组织ILGA (International Lesbian and Gay Association) 支持
    
    by=1969;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0517 国际电信日(World Telecommunications Day),世界信息社会日,世界电信和信息社会日(World Information Society Day)[今年"+birthday+"周年]");//世界电信日（WorldTelecommunicationsDay），1969年5月17日，国际电信联盟第二十四届行政理事会正式通过决议，决定把国际电信联盟的成立日
    //世界信息社会日是在2005年下半年的信息社会世界峰会第二阶段会议的预备会议上提出来的。设立世界信息社会日并定在每年5月17日举行庆祝的建议
    //每年的5月17日是世界電信和信息社會日（英語：World Information Society Day），為原世界電信日和世界信息社會日於2006年11月合併而成。
    //1968年國際電信聯盟第23屆行政理事會上決定，為紀念國際電信聯盟建立，強調電信在國民經濟發展和大眾生活中的作用，特將該組織成立日5月17日定為世界電信日
    }
    
    //"0518 国际博物馆日 海峽兩岸經貿交易會",//
    by=1977;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0518 国际博物馆日[今年"+birthday+"周年]");//每年的5月18日是国际博物馆日。国际博物馆日是由国际博物馆协会(ICOM)发起并创立的。1977年国际博物馆协会为促进全球博物馆事业的健康发展，吸引全社会公众对博物馆事业的了解、参与和关注，向全世界宣告1977年5月18日为第一个国际博物馆日
    }
    by=1999;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0518 海峽兩岸經貿交易會[今年"+birthday+"周年]");//1999年第一届海交会
    }
    by=2001;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0519 中国旅游日[今年"+birthday+"周年]");//节日起源于2001年5月19日
    }
    by=1990;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0520 全国学生营养日[今年"+birthday+"周年]");//1990
    }
    by=1990;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0520 全国母乳喂养宣传日[今年"+birthday+"周年]");//2001年5月，教育部、卫生部以（卫疾控发【2001】120号）文联合颁布文件将“中国学生营养日”法定下来。全国母乳喂养宣传日（1990）、中国学生营养日（1990）
    }
    by=2008;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0520 网络情人节[今年"+birthday+"周年]");//Network Valentine's Day 2008
    }
    by=1994;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0522 国际生物多样性日[今年"+birthday+"周年]");//1994年12月，联合国大会通过决议，将每年的12月29日定为“国际生物多样性日”，以提高人们对保护生物多样性重要性的认识。2001年将每年12月29日改为5月22日
    }
    by=2000;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0523 国际牛奶日[今年"+birthday+"周年]");//2000年，中国乳制品工业协会向联合国粮农组织建议，经征求其他国家的意见，联合国粮农组织（FAO）倡导，将每年的6月1日定为“世界牛奶日"  World Milk Day （International Milk Day）
    //1961年5月，国际牛奶业联合会在德国举行了第一个庆祝“牛奶日”活动，并决定将每年5月的第三个星期二定为“国际牛奶日”
    }
    
    //"0525 非洲解放日 、阿根廷革命纪念日、苏丹革命节、世界预防中风日、 国际失踪儿童日",//
    by=1963;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0525 非洲解放日[今年"+birthday+"周年]");//1963年的5月25日，非洲独立国家首脑会议在埃塞俄比亚首都亚的斯亚贝巴通过了《非洲统一组织宪章》，决定成立非洲统一组织，定5月25日为“非洲解放
    }
    by=1810;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0525 阿根廷革命纪念日[今年"+birthday+"周年]");//阿根廷5月革命纪念日是1810年5月25日在布宜诺斯艾利斯成立了政务会,推翻了西班牙在南美洲的殖民地拉普拉塔总督
    }
    by=1989;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0525 苏丹革命节[今年"+birthday+"周年]");//1989年6月30日。苏丹政府规定救国革命日放假1天
    }
    by=2004;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0525 世界预防中风日[今年"+birthday+"周年]");//世界预防中风日是在2004年6月24日在加拿大温哥华举行的第五届“世界中风研讨会”，订立每年5月25日为世界预防中风日
    }
    by=1983;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0525 国际失踪儿童日[今年"+birthday+"周年]");//1983年，美国政府将5月25日定为儿童失踪日
    }
    
    //"0526 世界向人體條件挑戰日 國家道歉日",//
    by=1993;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0526 世界向人體條件挑戰日)[今年"+birthday+"周年]");//1993
    }
    by=1998;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0526 國家道歉日[今年"+birthday+"周年]");//国家道歉日（英文：National Sorry Day）是自1998年起，每年5月26日在澳洲举行的纪念日
    }
    by=1949;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0527 上海解放日(1949)[今年"+birthday+"周年]");
    }
    by=2002;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0529 聯合國維持和平人員國際日[今年"+birthday+"周年]");//2002年12月11日，联合国大会57/129号决议通过每年5月29日为联合国维持和平人员国际日
    }
    
    //"0530 克罗地亚国庆日、美国阵亡战士的纪念日",
    by=1925;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0530 五卅反对帝国主义运动纪念日[今年"+birthday+"周年]");//5月30日：“五卅”反对帝国主义运动纪念日（1925）
    }
    by=1991;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0530 克罗地亚国庆日[今年"+birthday+"周年]");//克罗地亚在1991年从南斯拉夫社会主义联邦共和国宣布独立，首都为萨格勒布
    }
    by=1868;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0530 美国阵亡战士的纪念日[今年"+birthday+"周年]");//阵亡将士纪念日（英文：Remembrance Day）订立于每年的11月11日，为一个纪念在第一次世界大战、第二次世界大战和其他战争中牺牲的军人与平民的纪念节日。第一个国殇日于1919年在整个英联邦举行，原称“停战日”(Armistice Day)
    //1868年的时候，就正式确定了5月30日为美国的“阵亡将士纪念日”，纪念所有内战中阵亡的将士
    }
    by=1988;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0531 世界无烟日[今年"+birthday+"周年]"); ////5月31日：世界无烟日（1988）
    }
    
    /*公历六月*/
    //1974年6月20日，非洲大陆通过了一项关于非洲难民问题的公约，并决定将每年的这一天定为“非洲难民日”。为了引起国际社会对难民问题更广泛的关注
    
    
    by=1949;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0601 国际儿童节[今年"+birthday+"周年]");//International Children's Day 1949年11月，国际民主妇女联合会在莫斯科举行理事会议，中国和各国代表愤怒地揭露了帝国主义分子和各国反动派残杀、毒害儿童的罪行。会议决定以每年的6月1日为国际儿童节
    }
    by=1970;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0604 汤加王国独立日[今年"+birthday+"周年]");//1970年6月4日汤加才正式宣布独立
    }
    by=1972;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0605 世界环境保护日[今年"+birthday+"周年]");//1972年6月5日联合国在瑞典首都斯德哥尔摩召开了联合国人类环境会议，会议通过了《人类环境宣言》，并提出将每年的6月5日定为“世界环境日”。同年10月，第27届联合国大会通过决议接受了该建议。世界环境日（World Environment Day）
    }
    by=1992;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0606 中国全国爱眼日[今年"+birthday+"周年]");//1992年，天津医科大学眼科教授王延华与流行病学教授耿贯一首次向全国倡议设立爱眼日
    }
    by=2009;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0608 世界海洋日(World Oceana Day)[今年"+birthday+"周年]");//2008年12月5日第63届联合国大会通过第111号决议，决定自2009年起，每年的6月8日为“世界海洋日”
    }
    by=1977;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0610 葡萄牙日、贾梅士日暨葡侨日[今年"+birthday+"周年]");//1977年，葡国政府为了凝聚散居在世界各地的葡侨的向心力，正式将这一天定名为“葡国日、贾梅士日暨葡侨日”。
    }
    
    //"0612 巴西情人节,世界无童工日(The World Day Against Child Labor),俄罗斯联邦国庆日",//
    by=1950;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0612 巴西情人节[今年"+birthday+"周年]");//巴西情人节的由来巴西情人节始于1950年//2002年6月，在日内瓦召开的第90届国际劳工大会决定每年的6月12日定为“世界无童工日
    }
    
    by=1990;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0612 俄罗斯联邦国庆日[今年"+birthday+"周年]");//俄罗斯日”的起源要追溯到1990年6月12日,当天俄罗斯联邦举行第一次人民代表大会,发表《俄罗斯联邦国家主权宣言》,宣布俄罗斯独立
    }
    by=2002;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0612 世界无童工日(The World Day Against Child Labor)[今年"+birthday+"周年]");//2002年6月，在日内瓦召开的第90届国际劳工大会决定每年的6月12日定为“世界无童工日（the World Day Against Child Labor）
    }
    by=2004;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0614 世界献血者日[今年"+birthday+"周年]");//    //世界卫生组织、红十字会与红新月会国际联合会、国际献血组织联合会、国际输血协会将2004年6月14日定为第一个世界献血者日（World Blood Donor Day, WBDD）。
    }
    by=1994;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0617 防治荒漠化和干旱日[今年"+birthday+"周年]");//世界防治荒漠化和干旱日（WorldDaytocombatdesertification），1994年12月19日第49届联合国大会根据联大第二委员会（经济和财政）的建议，通过了49/115号决议，从1995年起把每年的6月17日定为
    }
    by=1894;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0623 国际奥林匹克日[今年"+birthday+"周年]");//奥林匹克日于1948年设立，旨在纪念1894年6月23日在巴黎索邦诞生的现代奥林匹克运动会
    }
    by=1997;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0624 世界骨質疏鬆日[今年"+birthday+"周年]");//世界骨质疏松日在1996年由英国国家骨质疏松学会创立，从1997年由国际骨质疏松基金会(IOF)赞助和支持，当时定于每年6月24日为世界骨质疏松日
    }
    by=1991;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0625 中国全国土地日[今年"+birthday+"周年]");//1991年5月24日国务院第83次常务会议决定，从1991年起，把每年的6月25日
    }
    by=1987;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0626 国际禁毒日[今年"+birthday+"周年]");//1987年6月12日至26日，联合国在维也纳召开有138个国家的3000多名代表参加的麻醉品滥用和非法贩运问题部长级会议。会议提出了“爱生命，不吸毒”的口号
    }
    by=1947;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0630 世界青年联欢节[今年"+birthday+"周年]");//1947年7月 捷克斯洛伐克布拉格，第1届世界青年联欢节
    }
    
    
    /*公历七月*/
    //“人类月球日”是每年的7月20日，为了纪念人类第一次登月成功 1969年7月20日，美国“阿波罗”11号飞船安全着陆月球
    
    
    
    //"0701 香港回归纪念日 中共诞辰 世界建筑日,加拿大国庆节",//
    by=1997;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0701 香港回归纪念日[今年"+birthday+"周年]");//1997年7月1日，中华人民共和国主席在香港向全世界郑重宣告：中华人民共和国香港特别行政区政府成立
    }
    by=1921;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0701 中共诞辰[今年"+birthday+"周年]");// 把7月1日作为党的诞生纪念日,是主席于1938年5月提出来的  1921
    }
    by=1996;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0701 世界建筑日[今年"+birthday+"周年]");//“世界建筑日”确定为每年10月的第一个星期一（1996年前是7月1日）
    }
    by=1867;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0701 加拿大国庆节[今年"+birthday+"周年]");//庆祝1867年7月1日加拿大自治
    }
    by=1995;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0702 国际体育记者日[今年"+birthday+"周年]");//国际体育记者协会1995年在加拿大举行代表大会，确定每年7月2日为“国际体育记者日”
    }
    by=1991;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0703 白俄罗斯独立纪念日[今年"+birthday+"周年]");//1991年8月25日独立，12月19日改为白俄罗斯共和国，简称白俄罗斯
    }
    by=1776;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0704 美国独立纪念日[今年"+birthday+"周年]");//以纪念1776年7月4日大陆会议通过《独立宣言》
    }
    by=1962;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0705 阿尔及利亚的独立纪念日[今年"+birthday+"周年]");//阿尔及利亚于1962年独立
    }
    by=1991;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0706 国际接吻日(International Kissing Day)[今年"+birthday+"周年]");//1991年得到联合国的承认
    }
    by=1945;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0707 中国抗日战争纪念日[今年"+birthday+"周年]");//,系在1945年9月2日日本政府签字于投降条约以后。故抗日战争胜利纪念日应改定为9月3日
    }
    by=2005;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0711 中國航海節[今年"+birthday+"周年]");//2005年7月11日，是中国伟大航海家郑和下西洋600周年纪念日。2005年4月25日，经国务院批准，将每年的7月11日确立为中国“航海日”
    }
    by=1990;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0711 世界人口日(World Population Day)[今年"+birthday+"周年]");//1990年7月11日遂成为第一个“世界人口日”。
    }
    
    
    by=1795;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0716 国际冰壶日[今年"+birthday+"周年]");//冰壶1795年，第一个冰上溜石俱乐部在苏格兰创立
    }
    by=1830;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0721 比利时国庆节[今年"+birthday+"周年]");//1830年，比利时爆发比利时独立运动
    }
    by=1947;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0725 藏族赛马节");//每年历六月举行，为期五至十五天不等
    }
    by=2004;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0728 世界肝炎日[今年"+birthday+"周年]");//第一届世界肝炎认知日(WorldHepatitisAwarenessDay)。第一届世界肝炎认知日宣传活动定于2004年10月1日在比利时布鲁塞尔举行，其主题是“与你同行(YouHaveCompany)”
    }
    by=1962;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0730 非洲妇女日[今年"+birthday+"周年]");//1962年7月，全非妇女第一次代表大会在达累斯萨拉姆召开，成立了“全非妇女会议”（今名“泛非妇女组织”），确定每年的7月30日为“非洲妇女日
    }
    
    /*公历八月*/
    //１９９０年第４５届联合国大会通过决议，将１９９３年定为“世界土著人国际年”（又称“国际土著人年”，International Decade of the Indigenous People）
    //１２月２１日，第４８届联大将每年的８月９日定为“世界土著人民国际日” (International Day of the Indigenous People)
    
    
    //"0801 中国建军节,瑞士国庆日,以色列国庆日",//,嘉兴大屠杀纪念日
    by=1927;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0801 中国建军节[今年"+birthday+"周年]");//1927年8月1日凌晨2时，以周恩来为首的前敌委员会和贺龙、叶挺、朱德、刘伯承等领导的北伐部队2万人 1933年6月30日，中央革命军事委员会决定：每年8月1日为中国工农红军纪念日
    }
    by=1891;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0801 瑞士国庆日[今年"+birthday+"周年]");//1891年在瑞士联邦成立600周年以后，这一天被定为国庆日，为纪念联邦的成立。
    }
    by=1948;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0801 以色列国庆日[今年"+birthday+"周年]");//国庆日为5月14日（1948年）。以色列于1948年5月14日宣布独立
    }
    
    by=1932;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0806 威尼斯国际电影节[今年"+birthday+"周年]");//(international film festival)世界上第一个国际电影节是1932年在意大利威尼斯市举行的威尼斯国际电影节
    }
    by=1945;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0808 中国男子节(爸爸节)[今年"+birthday+"周年]");//每年的8月8日为中国男子节，也有爸爸节之称。是在1945年8月8日，由上海的部分爱国人士发起的
    }
    by=2009;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0808 全民健身日[今年"+birthday+"周年]");//为了纪念北京奥运会成功举办，国务院日前批准，从2009年起，每年8月8日为“全民健身日”
    }
    by=1965;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0809 新加坡国庆日[今年"+birthday+"周年]");//8月9日是新加坡的国庆日（National Day），这是纪念1965年新加坡独立的日子。
    }
    by=1975;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0813 国际左撇子日[今年"+birthday+"周年]");//1975年8月13日，美国堪萨斯州托佩卡市的一群“左撇子”建立了一个名叫“左撇子国际”的组织，也将8月13日确定为“国际左撇子日”
    }
    by=1947;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0815 圣母玛利亚节");//
    }
    
    by=1945;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0815 抗日战争胜利纪念(Victory over Japan Day),二次世界大战日本正式宣布无条件投降日[今年"+birthday+"周年]");//1945年8月14日，日本政府照会美、中、英、苏四国政府，表示无条件接受《波茨坦公告》。8月15日早晨7时（重庆时间），中、美、英、苏四国政府同时宣布
    }
    by=1945;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0817 印尼国庆日[今年"+birthday+"周年]");//1945年日本投降,同年爆发了8月革命, 并于8月17日宣布独立,成立了印度尼西亚共和国
    }
    by=1948;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0831 马来西亚国庆日[今年"+birthday+"周年]");//1948年成立马来亚联合邦 马来亚联合邦终于在1957年8月31日宣布独立
    }
    
    
    /*公历九月*/
    by=1933;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0901 中国台湾记者节[今年"+birthday+"周年]");//1933年9月1日，国民政府颁布《保护新闻工作人员及维护舆论机关》命令。后来这个日期就成为国民政府设定的“记者节”，一直沿用到今天的台湾
    }
    by=1955;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0901 中国台湾军人节[今年"+birthday+"周年]");//1955年，国防部为了统一各军种节日，因此选择对日抗战胜利日作为三军的军人节，该日各军种均有庆祝活动
    }
    by=1965;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0908 国际扫盲日(International Anti-illiteracy Day)[今年"+birthday+"周年]");////国际扫盲日（InternationalLiteracyDay）是联合国教科文组织在1965年11月17日所召开的第14届代表大会上所设立的。日期为每年的9月8日
    }
    by=1947;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0908 童贞女圣马利亚日");//
    }
    
    
    
    by=1958;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0908 世界新闻记者日[今年"+birthday+"周年]");//“国际新闻工作者协会秘书处于1958年6月26日会议,确定每年9月8日为“国际新闻工作者(团结)日”简称为“世界新闻记者日”。 确定9月8日为“国际新闻工作者
    }
    
    //"0909 主席逝世纪念",//1976
    by=1976;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("0909 主席逝世纪念[今年"+birthday+"周年]");//1976
    }
    by=1985;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0910 中国教师节[今年"+birthday+"周年]"); ////从1985年起建立。教师被誉为人类灵魂的工程师，尊师重教是中国历来的优良传统
    }
    
    
    by=2003;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0910 世界预防自杀日[今年"+birthday+"周年]");//2003年9月10日被世界卫生组织定为首个“世界预防自杀日”
    }
    by=2002;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0913 程序员节[今年"+birthday+"周年]");//程序员节在每年公历的第256天 也就是平年的9月13日或闰年的9月12日 2002年，他收集签名向俄罗斯联邦政府请愿，请求将这一天定为程序员节 俄语：Деньпрограммиста
    }
    by=1987;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0914 世界清洁地球日[今年"+birthday+"周年]");////1987年，澳大利亚人伊恩基南先生驾单人帆船环绕地球时，看到漂浮在海上的垃圾，深深觉世界清洁地球日得要做一些事。回到悉尼后，他在朋友的帮助下发起了“清洁悉尼港日”（1989）
    }
    
    
    by=2009;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0914 中国网民文化节[今年"+birthday+"周年]");//2009年1月16 日上午在首届中国网民文化节上正式宣布确立的,9月14日中国网民
    }
    
    by=1995;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0916 国际臭氧层保护日[今年"+birthday+"周年]");//1995年1月23日联合国大会决定，每年的9月16日为国际保护臭氧层日
    }
    by=1931;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0918 九·一八事变纪念日[今年"+birthday+"周年]");//1931年9月18日,日本帝国主义对我国沈阳北大营的中国驻军发动武装进攻,
    }
    by=1983;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0919 圣基茨和尼维斯独立日[今年"+birthday+"周年]");//圣基茨和尼维斯独立日是1983年9月19日
    }
    by=1989;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0920 全国爱牙日[今年"+birthday+"周年]");//1989年，由卫生部、教委等部委联合签署，确定每年的9月20日为“全国爱牙日”
    }
    by=2001;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0921 国际和平日[今年"+birthday+"周年]");//2001年9月7日，联合国大会通过55/282号决议，决定自2002年起，国际和平日为9月21日
    }
    by=2002;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0921 圣马太日[今年"+birthday+"周年]");//2001年9月7日，联合国大会通过55/282号决议，决定自2002年起，国际和平日为9月21日
    }
    
    by=2007;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0922 中国城市无车日[今年"+birthday+"周年]");//中国城市无车日活动自2007年开展以来
    }
    by=2002;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0922 中国国际熊猫节[今年"+birthday+"周年]");//中国·四川国际熊猫节于2002年首次在九寨沟举办
    }
    by=1973;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0924 几内亚比绍国庆日[今年"+birthday+"周年]");//几内亚比绍的国庆日：1973年9月24日
    }
    by=1957;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0925 国际聋人日[今年"+birthday+"周年]");//1957年，世界聋人联合会根据欧洲各国聋人组织的倡议，决定1958年9月28日为第一个国际聋人节
    }
    by=2007;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0926 世界避孕日[今年"+birthday+"周年]");//在2007年，全球世界避孕日正式诞生并定于每年9月26日为世界避孕日
    }
    by=1979;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0927 世界旅游日[今年"+birthday+"周年]");//World Tourism Day 1979年9月，世界旅游组织第三次代表大会正式将9月27日定为世界旅游日
    }
    by=-551;
    birthday=ye-by;
    if(birthday>=0)
    {
    
        sFtv=sFtv.concat("0928 孔子诞辰[今年"+birthday+"周年]");//孔子(公元前551年——前479年)名丘，字仲尼，春秋末期鲁国(今曲阜)人，是儒学学派创始人
    }
    
    /*公历十月*/
    
    //"1001 中国国庆节 世界音乐日 国际老人节",//
    by=1949;
    birthday=ye-by;
    if(birthday>=0)
    {
    sFtv=sFtv.concat("1001 中国国庆节[今年"+birthday+"周年]");//1949
    }
    by=1979;
    birthday=ye-by;
    if(birthday>=0)
    {
    sFtv=sFtv.concat("1001 世界音乐日[今年"+birthday+"周年]");
    //WorldMusicDay 1979后10月在澳大利亚墨乐本举行的国际音理会第18届全体大会上通过了确定每年10月1日为“国际音乐日”(简称IMD)并成立了“国际音乐日”组织
    }
    by=1991;
    birthday=ye-by;
    if(birthday>=0)
    {
    sFtv=sFtv.concat("1001 国际老人节[今年"+birthday+"周年]");//1990年第45届联合国大会通过决议，从1991年开始，每年10月1日为“国际老年人日”
    }
    by=1949;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1002 国际和平与民主自由斗争日[今年"+birthday+"周年]");//The international peace (with democratic freedom) struggles the date 1949年4月，第一届世界和平大会在法国巴黎召开，72个国家代表出席大会。大会决定设立世界拥护和平大会常设委员会，经常性领导世界各地的和平运动。为进一步集中统一各国人民的和平力量，使斗争的目标更明确。7月29日，世界和平大会常设委员会把10月2日定为国际和平和民主自由斗争日
    }
    //"1003 国庆节假日",//
    by=1931;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1004 世界动物日[今年"+birthday+"周年]");//World Animal Day 1931年，一群生态学家在意大利佛罗伦萨召开会议，正式提议设立“世界动物日”
    }
    by=1994;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1005 国际教师节[今年"+birthday+"周年]");//为纪念1966年国际劳工组织（ILO）和联合国教科文组织（UNESCO）联合颁《关于教师地位的建议案》，联合国教科文组织于1994年将每年的10月5日定为世界教师节。
    }
    
    //"1006 老人节",//
    by=1998;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1008 全国高血压日 世界视觉日[今年"+birthday+"周年]");////每年的10月8日即为高血压日，是在1998年，卫生部为提高广大群众对高血压危害的认识、动员全社会都来参与高血压预防和控制工作、普及高血压防治知识而设立的
    
    }
    by=2000;
    birthday=ye-by;
    if(birthday>=0)
    {
    sFtv=sFtv.concat("1008 世界视觉日[今年"+birthday+"周年]");//世界卫生组织和国际防盲组织自2000年起，联同世界超过百多个国际志愿团体、非政府机构及民间医疗组织，把每年的10月第2个星期四定为“世界视觉日”
    }
    
    //"1009 世界邮政日 万国邮联日,韩语字母表日",//
    by=1969;
    birthday=ye-by;
    if(birthday>=0)
    {
    sFtv=sFtv.concat("1009 世界邮政日 万国邮联日[今年"+birthday+"周年]");
    //万国邮政联盟在1969年召开的第16届代表大会上通过决议，将每年10月9日定为“万国邮联日”
    //在1984年召开的万国邮政联盟第19届代表大会上，又通过决议，将“万国邮联日”更名为“世界邮政日”
    }
    by=2005;
    birthday=ye-by;
    if(birthday>=0)
    {
    sFtv=sFtv.concat("1009 韩语字母表日[今年"+birthday+"周年]");
    //韩国订于10月9日，称为韩字日（한글날，Hangullal） 韩国政府在2005年12月29日决定将每年的10月9日定为韩语字母表日（谚文日）
    }
    by=1992;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1010 世界精神卫生日[今年"+birthday+"周年]");//“世界精神卫生日”是由世界精神病学协会（WorldPsychiatricAssociationWPA）在1992年发起的，时间是每年的10月10日
    }
    by=1911;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1010 中国辛亥革命纪念日[今年"+birthday+"周年]");//起源辛亥革命指的是1911年（农历辛亥年）爆发的中国资产阶级民主革命
    }
    by=1492;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1012 西班牙国庆日[今年"+birthday+"周年]");//西班牙国庆节,是每年的十月十二日 1492年10月12日,是世界历史上重要的一天
    }
    by=1946;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1013 世界保健日[今年"+birthday+"周年]");//1946年2月，联合国经社理事会决定召开卫生方面的国际会议
    }
    by=1946;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1014 世界标准日(World Standards Day)[今年"+birthday+"周年]");//10月14日这一天被选定为世界标准日的原因是，在1946年的这一天，来自25个国家的代表会聚伦敦开会并决定创建一个“旨在促进工业标准的国际间协调和统一”新的国际组织--ISO
    }
    by=1984;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1015 国际盲人节(白手杖节)[今年"+birthday+"周年]");//每年傣历的12月15日(公历10月15日)//1984年，在沙特阿拉伯首都利雅德召开的世界盲人联盟成立大会上，确定每年的10月15日为“国际盲人节（WhiteCaneSafetyDay）
    }
    
    by=1979;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1016 世界粮食日(World Food Day)[今年"+birthday+"周年]");//1979年，联合国粮农组织第２０届大会决定从１９８１年起，把每年的１０月１６日（粮农组织创建纪念日）定为世界粮食日
    }
    by=1992;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1017 世界消除贫困日[今年"+birthday+"周年]");//国际消除贫困日（InternationalDayfortheEradicationofPoverty）亦称国际灭贫日或国际消贫日是联合国组织在1992年12月22日会议上通过47/196决议
    }
    by=1952;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1021 中国台湾華僑節[今年"+birthday+"周年]");//在1952年10月21日，台湾将这一天（10月21日）定为“华侨节
    }
    by=1991;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1022 世界传统医药日[今年"+birthday+"周年]");//每年的10月22日为世界传统医药日。1991年12月12日，42个国家和地区的代表在北京召开的国际传统医药大会上，一致决定将大会的开幕日定为每年的世界传统医药日
    }
    by=1942;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1024 联合国日[今年"+birthday+"周年]");//联合国日（UnitedNationsDay）1942年1月1日，正在对德、意、日法西斯作战的中、美、英、苏等26国代表在华盛顿发表了《联合国宣言》
    }
    by=1923;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1029 土耳其国庆日[今年"+birthday+"周年]");//土耳其的国庆日：1923年10月29日
    }
    by=1924;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1031 世界勤俭日[今年"+birthday+"周年]");//10月31日世界勤俭日（WorldThriftDay）最早是在1924年举办的第一届国际储蓄银行大会上由意大利教授FilippoRavizza提出并最终于2006年由联合国确立的
    }
    
    
    /*公历十一月*/
    
    
    //"1101 單身節",//
    by=1917;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1107 十月社会主义革命纪念日[今年"+birthday+"周年]");//1917年11月7日俄国十月革命爆发，1917年11月7日取得了十月社会主义革命的伟大胜利
    }
    by=1999;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1108 中国记者日[今年"+birthday+"周年]");//1999年9月18日，时任国务院总理的朱镕基签发了新的《全国年节及纪念日放假办法》，规定以1937年在上海成立的中国青年记者协会（中华全国新闻工作者协会的前身）成立日11月8日为记者节，是不放假的工作节日
    }
    by=1992;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1109 全国消防安全宣传教育日 中国消防节[今年"+birthday+"周年]");//1992年发起，将每年的11月9日定为全国的“消防宣传日”
    }
    by=1984;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1110 世界青年节(World Youth Day)[今年"+birthday+"周年]");//是天主教会为青年族群举办的国际节日活动，由前教宗若望保禄二世于1984年发起
    }
    by=1988;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1111 国际科学与和平周(本日所属的一周)[今年"+birthday+"周年]");//
    }
    
    //“国际科学与和平周”指每年11月11日所属的那一周，1988年由联合国大会决议通过
    by=1990;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1111 光棍节[今年"+birthday+"周年]");//源于1990年代南京高校的校园趣味文化,西方国家 单身者留意日（英语：Singles Awareness Day）,韩国 黑色情人节（朝鲜语：블랙데이）是一个单身人士的非正式节日
    }
    by=1944;
    birthday=ye-by;
    if(birthday>=0)
    {
    sFtv=sFtv.concat("1111 波兰国庆节[今年"+birthday+"周年]");
    //1944年7月21日，波兰工人党和波兰社会党等建立的人民代表会议成立了波兰第一个工农政府——波兰民族解放委员会 7月22日被定为波兰国庆日(国家复兴日)
    }
    by=1866;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1112 孙中山诞辰纪念日[今年"+birthday+"周年]");//孙中山(1866.11.12~1925.3.12)
    }
    by=1991;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1114 世界糖尿病日[今年"+birthday+"周年]");//世界糖尿病日（WorldDiabetesDay'WDD），由世界卫生组织和国际糖尿病联盟于1991年共同发起
    }
    by=1946;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1117 国际大学生节 世界学生节[今年"+birthday+"周年]");//1946年，世界各国学生代表于布拉格召开全世界学生大会，宣布把每年的11月17日定为“世界大学生节”，以加强全世界大学生的团结和友谊。
    }
    
    by=1973;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1121 世界问候日[今年"+birthday+"周年]");//
    }
    
    //1973年11月21日，为了促进埃及和以色列之间的和平共处，澳大利亚姆可马克与米切尔兄弟两人，自费印刷了大量有关问候的宣传材料寄给世界各国政府首脑及世界知名人士，向他们阐述设立世界问候信的重要意义，扩大世界问候日的影响，第一个世界问候日诞生了
    by=1996;
    birthday=ye-by;
    if(birthday>=0)
    {
    sFtv=sFtv.concat("1121 世界电视日[今年"+birthday+"周年]");
    //1996年，第51届联大通过第51/205号决议，宣布11月21日为世界电视日
    }
    //
    //"1122 彝族年",///
    by=1893;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1129 国际声援巴勒斯坦人民国际日[今年"+birthday+"周年]");//联合国大会1977年12月2日作出一项决议
    }
    by=1986;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1130 菲律宾的革命英雄日[今年"+birthday+"周年]");//1986年2月22日，菲律宾爆发二月革命
    }
    
    
    
    /*公历十二月*/
    
    by=1988;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1201 世界艾滋病日[今年"+birthday+"周年]");//世界卫生组织于1988年1月将每年的12月1日定为世界艾滋病日
    }
    by=1986;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1202 废除奴隶制国际日(International Day for the Abolition of Slavery)[今年"+birthday+"周年]");//每年的12月2日是废除奴隶制国际日（International Day for the Abolition of Slavery），这是从1986年开始的。
    }
    by=1992;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1203 世界残疾人日(International Day of Disabled Persons)[今年"+birthday+"周年]");//World Disabled Day 是1992年10月14日,在第47届联合国大会通过决议
    }
    by=2001;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1204 全国法制宣传日[今年"+birthday+"周年]");//2001年，中共中央、国务院决定将我国现行宪法实施日12月4日，作为每年的全国法制宣传日
    }
    by=1985;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1205 国际经济和社会发展志愿人员日(International Volunteer Day for Social and Economic Development)[今年"+birthday+"周年]");//1985年12月17日，第四十届联合国大会通过决议，从1986年起，每年的12月5日为“国际促进经济和社会发展志愿人员日”（InternationalVolunteerDayforSocialandEconomicDevelopment简称：国际志愿人员日）
    }
    by=1994;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1207 国际民航日(International Civil Aviation Day)[今年"+birthday+"周年]");//2010
    //1992年9月召开的国际民航组织第29届大会作出决议，自芝加哥公约签署50周年的1994年起，将每年的12月7日定为“国际民航日”
    }
    
    //"1208 国际儿童电视日",//International Children's Day of Broadcasting  国际儿童电视广播日的时间是每年12月的第二个星期日
    by=2003;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1209 国际反腐败日[今年"+birthday+"周年]");//。2003年10月31日，第58届联合国大会通过决议，正式采纳历时两年多拟定的《联合国反腐败公约》，并决定于当年12月9日至11日在墨西哥梅里达举行高级别签署会议。这项决议还将每年的12月9日确定为国际反腐败日
    }
    by=1978;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1209 世界足球日[今年"+birthday+"周年]");//联合国于1978年召开会议，经国际足联同意，把12月9日定为世界足球日（WorldFootballDay）
    }
    by=1948;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1210 世界人权日[今年"+birthday+"周年]");//世界人权日，为纪念1948年12月10日联合国大会通过《世界人权宣言》而设立的纪念日
    }
    by=1936;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1212 西安事变纪念日[今年"+birthday+"周年]");//1936年12月12日
    }
    by=1937;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1213 南京大屠杀(1937年)纪念日！紧记血泪史！[今年"+birthday+"周年]");//
    }
    by=1893;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    
    sFtv=sFtv.concat("1215 柴诞节[今年"+birthday+"周年]");//1859年12月15日生于波兰 拉扎罗·路德维克·柴门霍夫(Lazaro Ludoviko Zamenhof)
    }
    by=1988;
    birthday=ye-by;
    if(birthday>=0)
    {
    sFtv=sFtv.concat("1215 世界强化免疫日(World Strengthened immunity Day)[今年"+birthday+"周年]");
    //世界强化免疫日是1988年第41届世界卫生组织大会确定并实行的
    }
    by=2006;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1216 冰雪风情节[今年"+birthday+"周年]");//
    }
    by=2003;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1219 聯合國南南合作日[今年"+birthday+"周年]");//合国在2003年12月23日通过的58/220决议中，大会决定每年12月19日为南南合作日
    }
    by=2010;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1218 瓦屋山国际冰雪节[今年"+birthday+"周年]");//2010
    }
    by=2000;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1218 国际移徙者日[今年"+birthday+"周年]");//2000年12月18日，联合国大会考虑到世界上移徙者众多，而且数目日益增加，决定宣布12月18日为国际移徙者日(决议55/93)
    }
    by=1999;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1220 澳门回归纪念[今年"+birthday+"周年]");//1999年12月20日零时
    }
    by=1891;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1221 国际篮球日[今年"+birthday+"周年]");//篮球是1891年由美国J·奈史密斯博士创造的,在1891年的12月21日,举行了首次世界篮球比赛,后来篮球界就将此日定为国际篮球日
    }
    //"1226 毛诞辰纪念",//1893
    by=1994;
    birthday=ye-by;
    if(birthday>=0)
    {
    
    sFtv=sFtv.concat("1229 国际生物多样性日[今年"+birthday+"周年]");////1994年12月，联合国大会通过决议，将每年的12月29日定为“国际生物多样性日”
    }
    
    
    
    
    
    
    by=1893;
    birthday=ye-by;
    if(birthday>=0)
    {
        sFtv=sFtv.concat("1226 主席诞辰纪念[今年"+birthday+"周年]");//1893
    }
    
    
    
    
    
    
    //某月的第几个星期几。 5,6,7,8 表示到数第 1,2,3,4 个星期几
    var wFtv = new Array(
    "0110 黑人日(Martin Luther King, Jr. Day)",//1986年起美国政府将每年1月的第三个星期一定为马丁路德金全国纪念日Martin Luther King, Jr. Day
    "0150 世界麻风日", //一月的最后一个星期日（月倒数第一个星期日）1966 //2005年1月30日将是第52届国际麻风节.1987年11月27日中国麻风防治协会决定:自1988年起"国际麻风节"也作为"中国麻风节".1996年卫生部下文称之为"世界防治麻风病日",
    "0121 日本成人节",//1月第二个星期一 //天武天皇十一年（公元683年）
    "0121 國際戀物日",//1月的第三个星期五
    "0140 世界防治麻风病日",//每年1月的最后一个星期日
    
    "0231 总统日",//每年二月的第三个星期一
    
    
    "0341 全国中小学生安全教育日",//3月最后一个星期一是中華人民共和國的全国中小学生安全教育日
    
    
    "0420 复活节(Easter Sunday)",//在每年春分月圆之后第一个星期日 耶穌受難節是復活節前一个星期五
    "0430 世界兒童日",//4月的第三個星期日
    "0443 秘書節",//4月最後一個星期三
    
    
    "0520 母亲节,法國聖女貞德", //每年5月的第二个星期日
    "0530 全國助殘日", //1991 5月的第三個星期日
    "0531 胜利日", //
    "0532 國際牛奶節", //5月的第三個星期二
    //5月第二周的星期二：世界哮喘日（1998）
     //5月第二个星期日：母亲节（1914）
    //5月第三个星期二：国际 牛奶日（1961）
    // 5月第三个星期日：全国助残日（1990）
    
    "0630 父亲节", //每年公历6月的第三个星期日
    
    
    "0741 英國春天銀行假期",//5月的最後的星期一
    "0745 系统管理员感谢日",//7月的最后一个星期五
    "0716 国际合作节(International Day of Cooperatives)", //每年7月的第一个星期六 1922年，国际合作社联盟决定将每年7月的第一个星期六确定为“合作者的节日”(International Day of Cooperatives) 。1992年联合国大会通过决议，宣布1995年7月的第一个星期六为联合国国际合作社日，以纪念国际合作社联盟建立100周年，并决定考虑将来每年都将此日定为联合国国际合作社日
    "0730 被奴役国家周", //
    
    "0911 西方劳动节", //加拿大与美国是在每年9月的第一个星期一
    "0932 国际和平日",//9月第三个星期二
    "0936 全民国防教育 世界古蹟日", //9月第三个星期六 //9月第3個星期六、星期日為世界古蹟日
    "0930 世界清潔日 世界古蹟日",//9月的第三個週末
    "0940 国际聋人节 世界心脏日 世界海事日",//9月第四个星期日是国际聋人节  9月最后一个星期日是世界心脏日和世界海事日
    "0950 世界心脏日 世界海事日",//9月最后一个星期日是世界心脏日和世界海事日
    
    
    "1011 世界住房日(世界人居日)", //每年10月的第一个星期一
    "1021 美国哥伦布纪念日(Columbus Day)", //10月的第二个星期一
    "1023 国际减轻自然灾害日",//10月第二个星期三是国际减轻自然灾害日（国际减灾日）
    "1020 香港祖父母節",//10月第二个星期日是香港地區的祖父母節
    "1024 世界视觉日",//10月第二个星期四是世界视觉日
    
    "1144 感恩节",//1月的第四个星期四庆祝感恩节
    
    "1211 雪泪节",//公历12月的第一个星期一
    "1220 国际儿童广播电视日(International Children's Day of Broadcasting(简称：ICDB))"//在每年12月的第二个星期日 1977年12月14日为 联合国儿童基金（UNICEF）订定
    );//
    
    
    
    by=1985;
    birthday=ye-by;
    if(birthday>=0)
    {
        wFtv=wFtv.concat("1011 世界住房日(世界人居日)[今年"+birthday+"周年]");
    }
    
    
    var curTime=new Date();
    var sy = nl(curTime);    //当月一日日期y,m,i+1
    var tujuwenn=0;
    var nlyear=sy.nYear;
    var nlmonth=sy.nMonth;
    var dd=nlyear+'-'+'12'+'-'+'27';
    var gd = new Date(dd);
    var gy=gd.getFullYear();
    if(curTime.getMonth-nlmonth>2)
    {
        tujuwenn=nlyear-1976;
    }
    else
    {
        tujuwenn=nlyear-1976-1;
    }
    
    
    //农历节日
    var lFtv = new Array(
    /*"0101*春节",
    "0115 元宵节",
    "0202 龙抬头节",
    "0323 妈祖生辰 (天上圣母诞辰)",
    "0505 端午节",
    "0707 七七中国情人节",
    "0815 中秋节",
    "0909 重阳节",
    "1208 腊八节",
    "1223 小年",
    "0100*除夕"*/
    "0101 春节；农历新年",
    "0102 回娘家",
    "0105 过破五，接财神",
    "0107 傈僳族刀竿节、汉族人日",
    "0109 天公生，玉皇上帝圣诞",
    "0117 苗族芒哥节",
    "0201 中和节",
    "0202 龙抬头，头牙",
    "0212 为花朝节，百花生日",
    "0215 释迦牟尼出家纪念日",
    "0303 上巳节",
    "0315 苗族姐妹节",
    "0323 天后娘娘（即妈祖）诞辰",
    "0404 文殊菩萨诞辰",
    "0408 苗族的亚努节、跳花节；壮族的牛魂节、又称脱轭；畲族的牛歇节；侗族的牛王节；布依族的牧童节、牛王节、开秧节;仫佬族的牛王诞；藏族的浴佛节等",
    "0408 释迦牟尼诞辰",
    "0428 药王菩萨诞辰",
    "0506 鉴真诞辰",
    "0513 城隍爷诞辰",
    "0516 是天地之气交合之日，男女不可同房",
    "0529 瑶族夕九节",
    "0604 哈尼族姑娘节",
    "0606 天贶节，请姑姑，大禹生日，龙王爷晒鳞日",
    "0613 鲁班先师诞",
    "0614 藏族花儿会",
    "0619 观音菩萨成道日",
    "0624 彝族火把节",
    "0625 白族火把节",
    "0707 七夕，中国情人节",
    "0715 中元节",
    "0719 太岁星君圣诞",
    "0720 义民节",
    "0730 地藏王菩萨圣诞",
    "0818 塘江观潮节",
    "0820 燃灯古佛诞辰",
    "0827 孔子诞辰",
    "0909 重阳节，老年节",
    "0909 中坛太子元帅圣诞",
    "0915 吴府千岁圣诞",
    "0919 观音菩萨出家日",
    "1001 寒衣节，羌族年",
    "1005 达摩诞辰",
    "1013 满族颁金节",
    "1013 瑶族歌堂节",
    "1016 瑶族倒稿节",
    "1112 摩梭人小年",
    "1117 南无阿弥陀佛诞辰",
    "1216 尾牙"
    );
    
    /*农历一月*/
    
    by=-156;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("0101*春节[今年"+birthday+"周年]");//Spring Festival 汉武帝太初元年始
    
    }
    
    
    
    by=-202;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("0115 元宵节[今年"+birthday+"周年]");//Lantern Festival 汉文帝刘恒（前202年—前157年）
    }
    
    
    /*农历二月*/
    
    
    by=-7724;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("0202 龙抬头节[今年"+birthday+"周年]");//伏羲(风姓)时期(公元前7724-5008年) The dragon saves spring (the dragon raises head)
    }
    
    /*农历三月*/
    by=1156;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("0323 妈祖生辰 (天上圣母诞辰)[今年"+birthday+"周年]");//1156 妈祖林默1050岁的生日。从宋高宗绍兴二十六年（1156年）起至清朝
    }
    
    /*农历四月*/
    
    
    /*农历五月*/
    by=-278;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("0505 端午节[今年"+birthday+"周年]");//Dragon Boat Festival或Double Fifth Festival 战国时代指公元前475年－公元前221年 屈原(约公元前340-前278)
    }
    
    /*农历六月*/
    
    
    
    /*农历七月*/
    by=-220;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("0707 七七中国情人节[今年"+birthday+"周年]");//七夕节 汉代
    }
    
    /*农历八月*/
    
    by=-1046;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("0815 中秋节[今年"+birthday+"周年]");//西周（前1046年―前771年）the Mid-autumn Festival
    }
    
    /*农历九月*/
    by=-475;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("0909 重阳节[今年"+birthday+"周年]");//Double Ninth Festival 战国时期
    }
    
    
    
    /*农历十月*/
    
    
    
    /*农历十一月*/
    
    
    
    
    /*农历十二月*/
    by=-221;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("1208 腊八节[今年"+birthday+"周年]");//（公元前21世纪—公元前221年）先秦
    
    }
    by=1127;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("1223 小年[今年"+birthday+"周年]");//祭灶节、灶王节 南宋（1127－1279年）
    }
    by=-221;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("0100*除夕[今年"+birthday+"周年]");//Chinese New Year's Eve，又称Lunar New Year's Eve 公元前221年
    }
    
    
    
    
    /*生日*/
    
    by=1978;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0826 赵金红生日(78)酉[今年"+birthday+"周歲]");
    }
    by=1976;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("1227 涂聚文生日(76)子[今年"+birthday+"周歲]");
    }
    by=1964;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0830 有生生日(64年)辰[今年"+birthday+"周歲]");
    }
    by=1966;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("1221 美秀生日(66年)酉[今年"+birthday+"周歲]");
    }
    by=1968;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0828 保秀生日(68年)壬[今年"+birthday+"周歲]");
    }
    by=1970;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0915 定秀生日(70年)午[今年"+birthday+"周歲]");
    }
    by=1972;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("1009 福生生日(72年)申[今年"+birthday+"周歲]");
    }
    by=1974;
    birthday=nlyear-by;
    deadday=nlyear-1981;//已故計算
    if(birthday>=0)
    {
        lFtv =lFtv.concat("1227 连秀生日(74年)辰[今年"+birthday+"周歲] 已故["+deadday+"周年]");
    }
    by=1979;
    birthday=nlyear-by;
    deadday=nlyear-1994;//已故計算
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0704 秋生生日(79年)辰[今年"+birthday+"周歲]");
    }
    by=1942;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0228 爸爸生日(42年)酉[今年"+birthday+"周歲]");
    }
    by=1947;
    birthday=nlyear-by;
    deadday=nlyear-1989;//已故計算
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0428 妈妈生日(47年)故[今年"+birthday+"周歲]");
    }
    by=1948;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0225 爸爸生日(48年)子[今年"+birthday+"周歲]");
    }
    by=1957;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("1204 妈妈生日(57年)已[今年"+birthday+"周歲]");
    }
    by=1981;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0210 弟弟生日(81年)已[今年"+birthday+"周歲]");
    }
    by=1972;
    birthday=nlyear-by;
    deadday=nlyear-2002;//已故計算
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0907 爸爸先逝(02年)["+deadday+"周歲]");
    }
    by=1961;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0528 叔叔生日(61年)午[今年"+birthday+"周歲]");
    }
    by=2005;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0608 惟生日(05年)[今年"+birthday+"周歲]");
    }
    by=1995;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0908 宏生日(95年)[今年"+birthday+"周歲]");
    }
    by=1986;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0830 青燕生日(86年)[今年"+birthday+"周歲]");
    }
    by=1990;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0720 青云生日(90年)[今年"+birthday+"周歲]");
    }
    by=1964;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0730 大嫂生日(64年)[今年"+birthday+"周歲]");
    }
    by=1974;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0316 二嫂生日(74年)[今年"+birthday+"周歲]");
    }
    by=1970;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("0121 二姐夫生日(70年)[今年"+birthday+"周歲]");
    }
    by=1993;
    birthday=nlyear-by;
    if(birthday>=0)
    {
    
        lFtv =lFtv.concat("0325 海欧生日(93年)[今年"+birthday+"周歲]");
    }
    by=1992;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0215 海红生日(92年)[今年"+birthday+"周歲]");
    }
    by=1970;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("1001 大姐夫生日(70年)[今年"+birthday+"周歲]");
    }
    by=1990;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0821 婷婷生日(90年)[今年"+birthday+"周歲]");
    }
    by=2004;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("0828 浩睿生日(04年)[今年"+birthday+"周歲]");
    }
    by=2007;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("1028 斯博生日(07年)[今年"+birthday+"周歲]");
    }
    by=2011;
    birthday=nlyear-by;
    //添加一組
    if(birthday>=0) //如果現在日期大於出生年份才顯示相關的數據
    {
        lFtv =lFtv.concat("0210 金昕逸(11年)生日[今年"+birthday+"周歲]");//2011.2.20 3:01
    }
    by=2012;
    birthday=nlyear-by;
    if(birthday>=0)
    {
        lFtv =lFtv.concat("1016 金昕妤(12年)生日[今年"+birthday+"周歲]");///2012.10.16 6:50
    }
    
    
    
    
    /*****************************************************************************
                                          日期计算
    *****************************************************************************/
    
    //====================================== 返回农历 y年的总天数
    function lYearDays(y) {
     var i, sum = 348;
     for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0;
     return(sum+leapDays(y));
    }
    
    //====================================== 返回农历 y年闰月的天数
    function leapDays(y) {
     if(leapMonth(y)) return( (lunarInfo[y-1899]&0xf)==0xf? 30: 29);
     else return(0);
    }
    
    //====================================== 返回农历 y年闰哪个月 1-12 , 没闰返回 0
    function leapMonth(y) {
     var lm = lunarInfo[y-1900] & 0xf;
     return(lm==0xf?0:lm);
    }
    
    //====================================== 返回农历 y年m月的总天数
    function monthDays(y,m) {
     return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
    }
    
    
    //計算農曆年月日
    //
    function nl(curTime ) {
    //获取当前系统时间
    //var curTime = new Date();
    //星期名
    var weekName = "星期日,星期一,星期二,星期三,星期四,星期五,星期六".split(/,/g);
    //天干名称
    //var tianGang = "甲,乙,丙,丁,戊,己,庚,辛,壬,癸".split(/,/g);
    //地支名称
    //var diZhi = "子,丑,寅,卯,辰,巳,午,未,申,酉,戌,亥".split(/,/g);
    //属相名称
    //var shuXiang = "鼠,牛,虎,兔,龙,蛇,马,羊,猴,鸡,狗,猪".split(/,/g);
    //农历日期名
    var dayName = "*,初一,初二,初三,初四,初五,初六,初七,初八,初九,初十,十一,十二,十三,十四,十五,十六,十七,十八,十九,二十,廿一,廿二,廿三,廿四,廿五,廿六,廿七,廿八,廿九,三十".split(/,/g);
    //农历月份名
    var monName = "*,正,二,三,四,五,六,七,八,九,十,十一,腊".split(/,/g);
    //公历每月前面的天数
    var monthAdd = new Array(0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334);
    //农历数据
    var nongliData = new Array(2635, 333387, 1701, 1748, 267701, 694, 2391, 133423, 1175, 396438, 3402, 3749, 331177, 1453, 694, 201326, 2350, 465197, 3221, 3402, 400202, 2901, 1386, 267611, 605, 2349, 137515, 2709, 464533, 1738, 2901, 330421, 1242, 2651, 199255, 1323, 529706, 3733, 1706, 398762, 2741, 1206, 267438, 2647, 1318, 204070, 3477, 461653, 1386, 2413, 330077, 1197, 2637, 268877, 3365, 531109, 2900, 2922, 398042, 2395, 1179, 267415, 2635, 661067, 1701, 1748, 398772, 2742, 2391, 330031, 1175, 1611, 200010, 3749, 527717, 1452, 2742, 332397, 2350, 3222, 268949, 3402, 3493, 133973, 1386, 464219, 605, 2349, 334123, 2709, 2890, 267946, 2773, 592565, 1210, 2651, 395863, 1323, 2707, 265877);
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
    //计算到初始时间1921年2月8日的天数：1921-2-8(正月初一)
    var theDate = (curYear - 1921) * 365 + Math.floor((curYear - 1921.0) / 4) + curDay + monthAdd[curMonth - 1] - 38;
    if ((curYear % 4) == 0 && curMonth > 2)
    theDate++;
    //计算农历天干、地支、月、日
    var isEnd = 0;
    var m = 0, k, n;
    while (1) {
    if (nongliData[m] < 4095) k = 11;
    else k = 12;
    n = k;
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
    
    //====================================== 算出农历, 传入日期控件, 返回农历日期控件
    //                                       该控件属性有 .year .month .day .isLeap
    function Lunar(objDate) {
    
       var i, leap=0, temp=0;
       var offset   = (Date.UTC(objDate.getFullYear(),objDate.getMonth(),objDate.getDate()) - Date.UTC(1900,0,31))/86400000;
    
       for(i=1900; i<2100 && offset>0; i++) { temp=lYearDays(i); offset-=temp; }
    
       if(offset<0) { offset+=temp; i--; }
    
       this.year = i;
    
       leap = leapMonth(i); //闰哪个月
       this.isLeap = false;
    
       for(i=1; i<13 && offset>0; i++) {
          //闰月
          if(leap>0 && i==(leap+1) && this.isLeap==false)
             { --i; this.isLeap = true; temp = leapDays(this.year); }
          else
             { temp = monthDays(this.year, i); }
    
          //解除闰月
          if(this.isLeap==true && i==(leap+1)) this.isLeap = false;
    
          offset -= temp;
       }
    
       if(offset==0 && leap>0 && i==leap+1)
          if(this.isLeap)
             { this.isLeap = false; }
          else
             { this.isLeap = true; --i; }
    
       if(offset<0){ offset += temp; --i; }
    
       this.month = i;
       this.day = offset + 1;
    }
    //
    function getSolarDate(lyear, lmonth, lday, isLeap) {
      var offset = 0;
    
      // increment year
      for(var i = 1900; i < lyear; i++) {
        offset += lYearDays(i);
      }
    
      // increment month
      // add days in all months up to the current month
      for (var i = 1; i < lmonth; i++) {
        // add extra days for leap month
        if (i == leapMonth(lyear)) {
          offset += leapDays(lyear);
        }
        offset += monthDays(lyear, i);
      }
      // if current month is leap month, add days in normal month
      if (isLeap) {
        offset += monthDays(lyear, i);
      }
    
      // increment
      offset += parseInt(lday) - 1;
    
      var baseDate = new Date(1900,0,31);
      var solarDate = new Date(baseDate.valueOf() + offset * 86400000);
      return solarDate;
    }
    
    
    //==============================返回公历 y年某m+1月的天数
    function solarDays(y,m) {
       if(m==1)
          return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28);
       else
          return(solarMonth[m]);
    }
    
    //============================== 传入 offset 返回干支, 0=甲子
    function cyclical(num) {
       return(Gan[num%10]+Zhi[num%12]);
    }
    
    
    //============================== 阴历属性
    function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {
    
          this.isToday    = false;
          //瓣句
          this.sYear      = sYear;   //公元年4位数字
          this.sMonth     = sMonth;  //公元月数字
          this.sDay       = sDay;    //公元日数字
          this.week       = week;    //星期, 1个中文
          //农历
          this.lYear      = lYear;   //公元年4位数字
          this.lMonth     = lMonth;  //农历月数字
          this.lDay       = lDay;    //农历日数字
          this.isLeap     = isLeap;  //是否为农历闰月?
          //八字
          this.cYear      = cYear;   //年柱, 2个中文
          this.cMonth     = cMonth;  //月柱, 2个中文
          this.cDay       = cDay;    //日柱, 2个中文
    
          this.color      = '';
    
          this.lunarFestival = ''; //农历节日
          this.solarFestival = ''; //公历节日
          this.solarTerms    = ''; //节气
    }
    
    //===== 某年的第n个节气为几日(从0小寒起算)
    function sTerm(y,n) {
       var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) );
       return(offDate.getUTCDate());
    }
    
    
    
    
    
    //============================== 返回阴历控件 (y年,m+1月)
    /*
    功能说明: 返回整个月的日期资料控件
    
    使用方式: OBJ = new calendar(年,零起算月);
    
      OBJ.length      返回当月最大日
      OBJ.firstWeek   返回当月一日星期
    
      由 OBJ[日期].属性名称 即可取得各项值
    
      OBJ[日期].isToday  返回是否为今日 true 或 false
    
      其他 OBJ[日期] 属性参见 calElement() 中的注解
    */
    function calendar(y,m) {
    
       var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2, tmp3;
       var cY, cM, cD; //年柱,月柱,日柱
       var lDPOS = new Array(3);
       var n = 0;
       var firstLM = 0;
    
       sDObj = new Date(y,m,1,0,0,0,0);    //当月一日日期
    
       this.length    = solarDays(y,m);    //公历当月天数
       this.firstWeek = sDObj.getDay();    //公历当月1日星期几
    
       ////////年柱 1900年立春后为庚子年(60进制36)
       if(m<2) cY=cyclical(y-1900+36-1);
       else cY=cyclical(y-1900+36);
       var term2=sTerm(y,2); //立春日期
    
       ////////月柱 1900年1月小寒以前为 丙子月(60进制12)
       var firstNode = sTerm(y,m*2) //返回当月「节」为几日开始
       cM = cyclical((y-1900)*12+m+12);
    
       //当月一日与 1900/1/1 相差天数
       //1900/1/1与 1970/1/1 相差25567日, 1900/1/1 日柱为甲戌日(60进制10)
       var dayCyclical = Date.UTC(y,m,1,0,0,0,0)/86400000+25567+10;
    
       for(var i=0;i<this.length;i++) {
    
          if(lD>lX) {
             sDObj = new Date(y,m,i+1);    //当月一日日期
             lDObj = new Lunar(sDObj);     //农历
             lY    = lDObj.year;           //农历年
             lM    = lDObj.month;          //农历月
             lD    = lDObj.day;            //农历日
             lL    = lDObj.isLeap;         //农历是否闰月
             lX    = lL? leapDays(lY): monthDays(lY,lM); //农历当月最后一天
    
             if(n==0) firstLM = lM;
             lDPOS[n++] = i-lD+1;
          }
    
          //依节气调整二月分的年柱, 以立春为界
          if(m==1 && (i+1)==term2) cY=cyclical(y-1900+36);
          //依节气月柱, 以「节」为界
          if((i+1)==firstNode) cM = cyclical((y-1900)*12+m+13);
          //日柱
          cD = cyclical(dayCyclical+i);
    
          //sYear,sMonth,sDay,week,
          //lYear,lMonth,lDay,isLeap,
          //cYear,cMonth,cDay
          this[i] = new calElement(y, m+1, i+1, nStr1[(i+this.firstWeek)%7],
                                   lY, lM, lD++, lL,
                                   cY ,cM, cD );
       }
    
       //节气
       tmp1=sTerm(y,m*2  )-1;
       tmp2=sTerm(y,m*2+1)-1;
       this[tmp1].solarTerms = solarTerm[m*2];
       this[tmp2].solarTerms = solarTerm[m*2+1];
       //if(m==3) this[tmp1].color = 'red'; //清明颜色
    
       //公历节日
       for(i in sFtv)
          if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
             if(Number(RegExp.$1)==(m+1)) {
                this[Number(RegExp.$2)-1].solarFestival += RegExp.$4 + ' ';
                if(RegExp.$3=='*') this[Number(RegExp.$2)-1].color = 'red';
             }
    
       //月周节日
       for(i in wFtv)
          if(wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
             if(Number(RegExp.$1)==(m+1)) {
                tmp1=Number(RegExp.$2);
                tmp2=Number(RegExp.$3);
                if(tmp1<5)
                   this[((this.firstWeek>tmp2)?7:0) + 7*(tmp1-1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' ';
                else {
                   tmp1 -= 5;
                   tmp3 = (this.firstWeek+this.length-1)%7; //当月最后一天星期?
                   this[this.length - tmp3 - 7*tmp1 + tmp2 - (tmp2>tmp3?7:0) - 1 ].solarFestival += RegExp.$5 + ' ';
                }
             }
    
       //农历节日
       for(i in lFtv)
          if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
             tmp1=Number(RegExp.$1)-firstLM;
             if(tmp1==-11) tmp1=1;
             if(tmp1 >=0 && tmp1<n) {
                tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1;
                if( tmp2 >= 0 && tmp2<this.length && this[tmp2].isLeap!=true) {
                   this[tmp2].lunarFestival += RegExp.$4 + ' ';
                   if(RegExp.$3=='*') this[tmp2].color = 'red';
                }
             }
          }
    
    
       //复活节只出现在3或4月
       if(m==2 || m==3) {
          var estDay = new easter(y);
          if(m == estDay.m)
             this[estDay.d-1].solarFestival = this[estDay.d-1].solarFestival+' 复活节 Easter Sunday';
       }
    
       //黑色星期五
       if((this.firstWeek+12)%7==5)
          this[12].solarFestival += '黑色星期五';
    
       //今日
       //if(y==g_tY && m==g_tM) {this[g_tD-1].isToday = true;}
    
    }
    
    
    
    
    //======================================= 返回该年的复活节(春分后第一次满月周后的第一主日)
    function easter(y) {
    
       var term2=sTerm(y,5); //取得春分日期
       var dayTerm2 = new Date(Date.UTC(y,2,term2,0,0,0,0)); //取得春分的公历日期控件(春分一定出现在3月)
       var lDayTerm2 = new Lunar(dayTerm2); //取得取得春分农历
    
       if(lDayTerm2.day<15) //取得下个月圆的相差天数
          var lMlen= 15-lDayTerm2.day;
       else
          var lMlen= (lDayTerm2.isLeap? leapDays(y): monthDays(y,lDayTerm2.month)) - lDayTerm2.day + 15;
    
       //一天等于 1000*60*60*24 = 86400000 毫秒
       var l15 = new Date(dayTerm2.getTime() + 86400000*lMlen ); //求出第一次月圆为公历几日
       var dayEaster = new Date(l15.getTime() + 86400000*( 7-l15.getUTCDay() ) ); //求出下个周日
    
       this.m = dayEaster.getUTCMonth();
       this.d = dayEaster.getUTCDate();
    
    }
    
    //====================== 中文日期
    function cDay(d){
       var s;
    
       switch (d) {
          case 10:
             s = '初十'; break;
          case 20:
             s = '二十'; break;
             break;
          case 30:
             s = '三十'; break;
             break;
          default :
             s = nStr2[Math.floor(d/10)];
             s += nStr1[d%10];
       }
       return(s);
    }