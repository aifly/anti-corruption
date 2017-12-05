 var viewW = document.documentElement.clientWidth,
   viewH = document.documentElement.clientHeight;


 var ZmitiGameUtil = {

   data: function() {

     return [

       {
         title: '中国民航局副局长夏兴华严重违纪开除党籍处分',
         name: '夏兴华',
         date: '2017-01-03',
         headimg: './src/assets/images/xxh.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1451391&isview=1&homeshow=1'
       }, {
         title: '天津市原市委代理书记、市长黄兴国严重违纪被开除',
         name: '黄兴国',
         date: '2017-01-04',
         headimg: './src/assets/images/hxg.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1455091&isview=1&homeshow=1'
       }, {
         title: '西安市委原常委、组织部部长钟健能被开除党籍',
         name: '钟健能',
         date: '2017-01-06',
         headimg: './src/assets/images/zjn.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1463070&isview=1&homeshow=1'
       }, {
         title: '甘肃副省长虞海燕涉嫌严重违纪接受组织调查',
         name: '虞海燕',
         date: '2017-01-11',
         headimg: './src/assets/images/yhy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1479157&isview=1&homeshow=1'
       }, {
         title: '沈阳原副市长祁鸣被双开',
         name: '祁鸣',
         date: '2017-01-14',
         headimg: './src/assets/images/qm.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1488860&isview=1&homeshow=1'
       }, {
         title: '铁岭市委原书记吴野松被双开',
         name: '吴野松',
         date: '2017-01-14',
         headimg: './src/assets/images/wsy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1488860&isview=1&homeshow=1'
       }, {
         title: '天津市政府原党组成员、副市长尹海林因严重违纪受到开除党籍处分',
         name: '尹海林',
         date: '2017-01-20',
         headimg: './src/assets/images/yhl.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1511451&isview=1&homeshow=1'
       }, {
         title: '苏荣受贿、滥用职权、巨额财产来源不明案一审宣判',
         name: '苏荣',
         date: '2017-01-23',
         headimg: './src/assets/images/sr.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1520507&isview=1&homeshow=1'
       }, {
         title: '河南省委原常委、政法委书记吴天君严重违纪被"双开"',
         name: '吴天君',
         date: '2017-01-23',
         headimg: './src/assets/images/wtj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1520842&isview=1&homeshow=1'
       }, {
         title: '最高人民检察院依法决定对马建立案侦查',
         name: '马建',
         date: '2017-02-06',
         headimg: './src/assets/images/mj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1547859&isview=1&homeshow=1'
       }, {
         title: '民政部原部长李立国降为副局级 留党察看2年',
         name: '李立国',
         date: '2017-02-08',
         headimg: './src/assets/images/llg.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1555335&isview=1&homeshow=1'
       }, {
         title: '“百名红通人员”王诚建回国投案自首',
         name: '王诚建',
         date: '2017-02-10',
         headimg: './src/assets/images/wcj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1563038&isview=1&homeshow=1'
       }, {
         title: '河北省委原书记周本顺受贿案一审宣判 获刑15年',
         name: '周本顺',
         date: '2017-02-15',
         headimg: './src/assets/images/zbs.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1575690&isview=1&homeshow=1'
       }, {
         title: '江西省工信委原党组书记冷新生接受组织调查',
         name: '冷新生',
         date: '2017-02-20',
         headimg: './src/assets/images/lxs.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1592585&isview=1&homeshow=1'
       }, {
         title: '人保集团副董事长、总裁王银成接受组织审查',
         name: '王银成',
         date: '2017-02-23',
         headimg: './src/assets/images/wyc.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1604181&isview=1&homeshow=1'
       }, {
         title: '交通银行党委委员、首席风险官杨东平严重违纪被"双开"',
         name: '杨东平',
         date: '2017-02-24',
         headimg: './src/assets/images/ydp.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1608137&isview=1&homeshow=1'
       }, {
         title: '湖南省委原宣传部部长张文雄严重违纪被双开',
         name: '张文雄',
         date: '2017-02-27',
         headimg: './src/assets/images/zwx.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1614810&isview=1&homeshow=1'
       }, {
         title: '上海市人民检察院原检察长陈旭涉嫌严重违纪接受组织审查',
         name: '陈旭',
         date: '2017/3/1',
         headimg: './src/assets/images/cx.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1623445&isview=1&homeshow=1'
       }, {
         title: '全国政协港澳台侨委员会主任孙怀山接受组织审查',
         name: '孙怀山',
         date: '2017/3/2',
         headimg: './src/assets/images/shs.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1626581&isview=1&homeshow=1'
       }, {
         title: '广东省委原常委、珠海市委原书记李嘉被开除党籍和公职',
         name: '李嘉',
         date: '2017-03-08',
         headimg: './src/assets/images/lj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1643195&isview=1&homeshow=1'
       }, {
         title: '最高人民检察院依法决定对李嘉立案侦查',
         name: '李嘉',
         date: '2017-03-17',
         headimg: './src/assets/images/xxh.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1667821&isview=1&homeshow=1'
       }, {
         title: '"百名红通人员"王佳哲投案自首 "百名红通"已追回39人',
         name: '王佳哲',
         date: '2017-03-09',
         headimg: './src/assets/images/wjz.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1645739&isview=1&homeshow=1'
       }, {
         title: '新疆阿勒泰地委书记邓章武接受组织审查',
         name: '邓章武',
         date: '2017-03-19',
         headimg: './src/assets/images/dzw.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1672737&isview=1&homeshow=1'
       }, {
         title: '新疆林业厅原厅长尼加提•马合木提被审查',
         name: '尼加提•马合木提',
         date: '2017-03-19',
         headimg: './src/assets/images/njt.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1672738&isview=1&homeshow=1'
       }, {
         title: '长沙市委原常委、市委宣传部原部长张湘涛接受审查',
         name: '张湘涛',
         date: '2017-03-27',
         headimg: './src/assets/images/zxt.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1694742&isview=1&homeshow=1'
       }, {
         title: '新疆生产建设兵团党委原常委王世江等2人接受组织审查',
         name: '王世江',
         date: '2017-04-06',
         headimg: './src/assets/images/wsj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1725507&isview=1&homeshow=1'
       }, {
         title: '江苏省原省委常委、常务副省长李云峰严重违纪被“双开”',
         name: '李云峰',
         date: '2017-04-07',
         headimg: './src/assets/images/lyf.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1727763&isview=1&homeshow=1'
       }, {
         title: '中国保险监督管理委员会主席项俊波接受组织审查',
         name: '项俊波',
         date: '2017-04-09',
         headimg: './src/assets/images/xjb.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1731546&isview=1&homeshow=1'
       }, {
         title: '河北省人大常委会党组书记、副主任杨崇勇接受组织审查',
         name: '杨崇勇',
         date: '2017-04-11',
         headimg: './src/assets/images/ycy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1738360&isview=1&homeshow=1'
       }, {
         title: '黑龙江省人大常委会原副主任盖如垠受贿案一审宣判',
         name: '盖如垠',
         date: '2017-04-13',
         headimg: './src/assets/images/gry.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1745447&isview=1&homeshow=1'
       }, {
         title: '甘肃省林业厅党组书记、厅长马光明接受组织审查',
         name: '夏兴华',
         date: '2017-04-14',
         headimg: './src/assets/images/mgm.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1748760&isview=1&homeshow=1'
       }, {
         title: '中央巡视组原副部级巡视专员张化为接受组织审查',
         name: '夏兴华',
         date: '2017-04-17',
         headimg: './src/assets/images/zhw.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1754289&isview=1&homeshow=1'
       }, {
         title: '“百名红通人员”李世乔回国投案自首 系第40名到案人员',
         name: '李世乔',
         date: '2017-04-17',
         headimg: './src/assets/images/lsq.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1755246&isview=1&homeshow=1'
       }, {
         title: '内蒙古自治区原副主席潘逸阳受贿行贿案一审获刑20年',
         name: '潘逸阳',
         date: '2017-04-18',
         headimg: './src/assets/images/pyy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1759104&isview=1&homeshow=1'
       }, {
         title: '安徽省质量技术监督局党组书记、局长朱琳接受组织审查',
         name: '朱琳',
         date: '2017-04-19',
         headimg: './src/assets/images/zl.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1761650&isview=1&homeshow=1'
       }, {
         title: '民政部原党组成员、中国老龄协会原会长陈传书被问责并降',
         name: '陈传书',
         date: '2017-04-23',
         headimg: './src/assets/images/ccs.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1773211&isview=1&homeshow=1'
       }, {
         title: '安徽省副省长周春雨涉嫌严重违纪接受组织审查',
         name: '周春雨',
         date: '2017-04-26',
         headimg: './src/assets/images/zcy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1781220&isview=1&homeshow=1'
       }, {
         title: '让"丁义珍"们无处遁形!22名外逃分子海外"藏身处"曝光!',
         name: '丁义珍',
         date: '2017-04-27',
         headimg: './src/assets/images/dyz.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1784698&isview=1&homeshow=1'
       }, {
         title: '安徽原副省长陈树隆被双开:政治上攀附、道德上败坏…',
         name: '陈树隆',
         date: '2017-05-02',
         headimg: './src/assets/images/csl.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1793437&isview=1&homeshow=1'
       }, {
         title: '天津市政协原常委舒长云被开除党籍和公职',
         name: '舒长云',
         date: '2017-05-03',
         headimg: './src/assets/images/scy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1796080&isview=1&homeshow=1'
       }, {
         title: '辽宁省人大常委会原党组成员李文科被双开:大肆卖官鬻爵',
         name: '李文科',
         date: '2017-05-10',
         headimg: './src/assets/images/lwk.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1816007&isview=1&homeshow=1'
       }, {
         title: '有人判无期有人免起诉 "百名红通"归案40人为何处置不同',
         name: '夏兴华',
         date: '2017-05-10',
         headimg: './src/assets/images/xxh.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1816959&isview=1&homeshow=1'
       }, {
         title: '国家统计局原党组书记、局长王保安受贿案一审开庭',
         name: '王保安',
         date: '2017-05-11',
         headimg: './src/assets/images/wba.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1819816&isview=1&homeshow=1'
       }, {
         title: '陕西省人大常委会党组副书记、副主任魏民洲接受组织审查',
         name: '魏民洲',
         date: '2017-05-22',
         headimg: './src/assets/images/wmz.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1857033&isview=1&homeshow=1'
       }, {
         title: '黑龙江省政府副秘书长梁成军接受组织审查',
         name: '梁成军',
         date: '2017-05-23',
         headimg: './src/assets/images/lcj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1861074&isview=1&homeshow=1'
       }, {
         title: '银监会党委委员、主席助理杨家才涉嫌严重违纪接受组织审查',
         name: '杨家才',
         date: '2017-05-23',
         headimg: './src/assets/images/yjc.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1862300&isview=1&homeshow=1'
       }, {
         title: '新疆生产建设兵团原司令员刘新齐被开除党籍 降为正处级',
         name: '刘新齐',
         date: '2017-05-24',
         headimg: './src/assets/images/lxq.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1864713&isview=1&homeshow=1'
       }, {
         title: '司法部原党组成员卢恩光严重违纪被双开 年龄学历全面造假',
         name: '卢恩光',
         date: '2017-05-25',
         headimg: './src/assets/images/leg.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1870431&isview=1&homeshow=1'
       }, {
         title: '内蒙古自治区政协原副主席赵黎平被核准死刑',
         name: '赵黎平',
         date: '2017-05-26',
         headimg: './src/assets/images/zlp.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1877104&isview=1&homeshow=1'
       }, {
         title: '天津市公安局原局长武长顺一审被判死缓',
         name: '武长顺',
         date: '2017-05-27',
         headimg: './src/assets/images/wcs.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1882942&isview=1&homeshow=1'
       }, {
         title: '云南省委副秘书长赵壮天接受组织审查',
         name: '赵壮天',
         date: '2017-05-27',
         headimg: './src/assets/images/zzt.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1883415&isview=1&homeshow=1'
       }, {
         title: '检察机关依法决定对陈旭以涉嫌受贿罪立案侦查',
         name: '陈旭以',
         date: '2017-06-01',
         headimg: './src/assets/images/cxy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1896422&isview=1&homeshow=1'
       }, {
         title: '全国政协原常委、港澳台侨委员会原主任孙怀山严重违纪被开除党籍和公职。',
         name: '孙怀山',
         date: '2017-06-02',
         headimg: './src/assets/images/shs.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1900612&isview=1&homeshow=1'
       }, {
         title: '最高人民检察院依法决定对卢恩光立案侦查',
         name: '卢恩光',
         date: '2017-06-02',
         headimg: './src/assets/images/leg.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1902120&isview=1&homeshow=1'
       }, {
         title: '甘肃省原省委常委、副省长虞海燕严重违纪被开除党籍和公职',
         name: '虞海燕',
         date: '2017-06-04',
         headimg: './src/assets/images/yhy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1905486&isview=1&homeshow=1'
       }, {
         title: '吉林省政府党组成员、秘书长刘喜杰接受组织审查',
         name: '刘喜杰',
         date: '2017-06-12',
         headimg: './src/assets/images/lxj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1929839&isview=1&homeshow=1'
       }, {
         title: '湖北省政协副主席刘善桥涉嫌严重违纪接受组织审查',
         name: '刘善桥',
         date: '2017-06-26',
         headimg: './src/assets/images/lsq.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1981223&isview=1&homeshow=1'
       }, {
         title: '河北省人大常委会原党组书记、副主任杨崇勇严重违纪被开除党籍和公职',
         name: '杨崇勇',
         date: '2017-07-04',
         headimg: './src/assets/images/ycy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2014011&isview=1&homeshow=1'
       }, {
         title: '安徽省政府原党组成员、副省长周春雨严重违纪被开除党籍和公职',
         name: '周春雨',
         date: '2017-07-05',
         headimg: './src/assets/images/zcy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2015695&isview=1&homeshow=1'
       }, {
         title: '中国人保原党委副书记、副董事长、总裁王银成严重违纪被"双开"',
         name: '王银成',
         date: '2017-07-05',
         headimg: './src/assets/images/wyc.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2015698&isview=1&homeshow=1'
       }, {
         title: '中化集团公司原总经理中石化股份公司原高级副总裁蔡希有被"双开"',
         name: '蔡希有',
         date: '2017-07-06',
         headimg: './src/assets/images/cxy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2021221&isview=1&homeshow=1'
       }, {
         title: '天津市委原常委、统战部部长王宏江因严重违纪受到留党察看一年、行政撤职处分',
         name: '王宏江',
         date: '2017-07-10',
         headimg: './src/assets/images/whj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2037215&isview=1&homeshow=1'
       }, {
         title: '十二届全国人大教育科学文化卫生委员会副主任委员王三运涉嫌严重违纪接受组织审查',
         name: '王三运',
         date: '2017-07-11',
         headimg: './src/assets/images/wsy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2042581&isview=1&homeshow=1'
       }, {
         title: '中国电信集团公司原副总经理真才基接受组织审查',
         name: '真才基',
         date: '2017-07-14',
         headimg: './src/assets/images/zcj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2056829&isview=1&homeshow=1'
       }, {
         title: '中国证券监督管理委员会原党委委员、副主席姚刚严重违纪被开除党籍和公职',
         name: '姚刚',
         date: '2017-07-20',
         headimg: './src/assets/images/yg.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2080867&isview=1&homeshow=1'
       }, {
         title: '新疆生产建设兵团党委原常委王世江等人被开除党籍',
         name: '夏兴华',
         date: '2017-07-21',
         headimg: './src/assets/images/wsj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2083683&isview=1&homeshow=1'
       }, {
         title: '中国证券监督管理委员会原党委委员、主席助理张育军严重违纪被开除党籍和公职',
         name: '张育军',
         date: '2017-07-21',
         headimg: './src/assets/images/zyj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2085729&isview=1&homeshow=1'
       }, {
         title: '江苏省高级人民法院原党组书记、院长许前飞因严重违纪受到撤销党内职务处分',
         name: '许前飞',
         date: '2017-07-24',
         headimg: './src/assets/images/xqf.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2092561&isview=1&homeshow=1'
       }, {
         title: '中共中央决定对孙政才同志涉嫌严重违纪问题立案审查',
         name: '孙政才',
         date: '2017-07-24',
         headimg: './src/assets/images/szc.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2095345&isview=1&homeshow=1'
       }, {
         title: '陕西省人大常委会原党组副书记、副主任魏民洲严重违纪被开除党籍和公职',
         name: '魏民洲',
         date: '2017-08-03',
         headimg: './src/assets/images/wmz.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2133838&isview=1&homeshow=1'
       }, {
         title: '最高人民检察院依法决定对魏民洲立案侦查',
         name: '魏民洲',
         date: '2017-08-08',
         headimg: './src/assets/images/wmz.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2153494&isview=1&homeshow=1'
       }, {
         title: '新疆生产建设兵团工商联原党组副书记、主席屈开平被审查',
         name: '屈开平',
         date: '2017-08-17',
         headimg: './src/assets/images/qkp.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2188724&isview=1&homeshow=1'
       }, {
         title: '湖南省委统战部副部长、省工商联原党组书记汤新华被查',
         name: '汤新华',
         date: '2017-08-18',
         headimg: './src/assets/images/txh.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2193107&isview=1&homeshow=1'
       }, {
         title: '中国民生银行首席信息官林晓轩接受组织审查',
         name: '林晓轩',
         date: '2017-08-22',
         headimg: './src/assets/images/lxx.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2211063&isview=1&homeshow=1'
       }, {
         title: '中央纪委驻财政部纪检组组长、财政部党组成员莫建成接受组织审查',
         name: '莫建成',
         date: '2017-08-27',
         headimg: './src/assets/images/mjc.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2228751&isview=1&homeshow=1'
       }, {
         title: '中国福利彩票发行管理中心原主任鲍学全、 原副主任王云戈被双开',
         name: '鲍学全',
         date: '2017-08-27',
         headimg: './src/assets/images/bxq.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2229353&isview=1&homeshow=1'
       }, {
         title: '中共中央决定给予孙政才开除党籍开除公职处分',
         name: '孙政才',
         date: '2017-09-29',
         headimg: './src/assets/images/szc.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2362533&isview=1&homeshow=1'
       }, {
         title: '最高人民检察院依法决定对项俊波立案侦',
         name: '项俊波',
         date: '2017-09-29',
         headimg: './src/assets/images/xjb.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2361618&isview=1&homeshow=1'
       }, {
         title: '天津原市长黄兴国一审被判有期徒刑十二年',
         name: '黄兴国',
         date: '2017-09-25',
         headimg: './src/assets/images/hxg.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2342928&isview=1&homeshow=1'
       }, {
         title: '“百名红通人员”徐雪伟回国投案',
         name: '徐雪伟',
         date: '2017-09-25',
         headimg: './src/assets/images/xxw.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2341221&isview=1&homeshow=1'
       }, {
         title: '中央纪委驻财政部纪检组原组长、财政部原党组成员莫建成严重违纪被开除党籍和公职',
         name: '莫建成',
         date: '2017-09-23',
         headimg: './src/assets/images/mjc.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2335619&isview=1&homeshow=1'
       }, {
         title: '中国保险监督管理委员会原党委书记、主席项俊波严重违纪被开除党籍和公职',
         name: '项俊波',
         date: '2017-09-23',
         headimg: './src/assets/images/xjb.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2335616&isview=1&homeshow=1'
       }, {
         title: '中国中煤能源股份有限公司原总裁高建军被开除党籍',
         name: '高建军',
         date: '2017-09-22',
         headimg: './src/assets/images/gjj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2333949&isview=1&homeshow=1'
       }, {
         title: '王三运严重违纪被开除党籍和公职',
         name: '王三运',
         date: '2017-09-22',
         headimg: './src/assets/images/wsy.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2331457&isview=1&homeshow=1'
       }, {
         title: '湖北省政协原党组成员、副主席刘善桥严重违纪被开除党籍和公职',
         name: '刘善桥',
         date: '2017-09-18',
         headimg: './src/assets/images/lsq.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2314843&isview=1&homeshow=1'
       }, {
         title: '广东省珠海市委副书记、市长李泽中涉嫌严重违纪接受组织审查',
         name: '李泽中',
         date: '2017-09-02',
         headimg: './src/assets/images/lzz.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2252593&isview=1&homeshow=1'
       }, {
         title: '辽宁省发展改革委副主任王延东接受组织审查',
         name: '王延东',
         date: '2017-10-31',
         headimg: './src/assets/images/wyd.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2465735&isview=1&homeshow=1'
       }, {
         title: '“百名红通人员”孔广生归案',
         name: '孔广生',
         date: '2017-10-12',
         headimg: './src/assets/images/kgs.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2399670&isview=1&homeshow=1'
       }, {
         title: '内蒙古呼伦贝尔市市委原书记李世镕等人被"双开"',
         name: '李世镕',
         date: '2017-10-10',
         headimg: './src/assets/images/lsr.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2392090&isview=1&homeshow=1'
       }, {
         title: '“百名红通人员”郭欣回国投案',
         name: '郭欣',
         date: '2017-10-08',
         headimg: './src/assets/images/gx.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2383528&isview=1&homeshow=1'
       }, {
         title: '辽宁省副省长刘强涉嫌严重违纪接受组织审查',
         name: '刘强',
         date: '2017-11-23',
         headimg: './src/assets/images/lq.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2587177&isview=1&homeshow=1'
       }, {
         title: '中共中央宣传部原副部长鲁炜涉嫌严重违纪接受组织审查',
         name: '鲁炜',
         date: '2017-11-21',
         headimg: './src/assets/images/lw.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2572323&isview=1&homeshow=1'
       }, {
         title: '黑龙江省政府原副秘书长梁成军严重违纪被开除党籍',
         name: '梁成军',
         date: '2017-11-21',
         headimg: './src/assets/images/lcj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2564723&isview=1&homeshow=1'
       }, {
         title: '天津市政协党组成员、秘书长李金亮接受组织审查',
         name: '李金亮',
         date: '2017-11-15',
         headimg: './src/assets/images/ljl.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2523437&isview=1&homeshow=1'
       }, {
         title: '“百名红通人员”贺俭回国投案',
         name: '贺俭',
         date: '2017-11-07',
         headimg: './src/assets/images/hj.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2493102&isview=1&homeshow=1'
       }, {
         title: '天津市人民政府副秘书长、办公厅党组成员杜强接受组织审查',
         name: '杜强',
         date: '2017-11-06',
         headimg: './src/assets/images/dq.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2489866&isview=1&homeshow=1'
       }, {
         title: '孙政才的第十二届全国人大代表资格终止',
         name: '孙政才',
         date: '2017-11-04',
         headimg: './src/assets/images/szc.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2482741&isview=1&homeshow=1'
       }, {
         title: '湖南省纪委正厅级干部李政科接受组织审查',
         name: '李政科',
         date: '2017-11-02',
         headimg: './src/assets/images/lzk.jpg',
         href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2473550&isview=1&homeshow=1'
       }
     ]

   },

   init: function() {
     var game = new Phaser.Game(viewW, viewH, Phaser.CANVAS, 'zmiti-stage');
     this.game = game;
     var self = this;

     function loadingState() {
       this.init = function() {}
       this.preload = function() {
         game.load.image('jump', './src/assets/images/jump.png');
         game.load.image('bg', './src/assets/images/bg.jpg');
         game.load.spritesheet('person', './src/assets/images/person.png', 203, 152);

         game.load.image('energy', './src/assets/images/energy.png');

         game.load.spritesheet('tigger', './src/assets/images/tigger.png', 135, 200)

         game.load.image('tigger-die', './src/assets/images/tigger-die.png');

         game.load.spritesheet('fly', './src/assets/images/fly.png', 81, 82)

         game.load.image('fly-die', './src/assets/images/fly-die.png');

         game.load.image('blood', './src/assets/images/blood.png');

         game.load.onFileComplete.add(function() {
           console.log(game.load.progress);
         });
         game.load.onLoadComplete.add(function() {
           game.state.start('gameState');
         })
       }
     }
     this.game.state.add('loadingState', loadingState);
     this.game.state.add('gameState', gameState)
     this.game.state.start('loadingState');


     function gameState() {
       this.init = function() {}
       var sprite,
         animation,
         bg,
         energy,
         energy1,
         jumper,
         tiggerSprite,
         tiggerAnimation,
         flySprite,
         flyAnimaiton,
         personStand,
         startX = 62,
         defaultY = viewH + 100,
         tiggerSpeed = -100,
         flySpeed = -50,
         energySpeed = -80,
         dieTigger,
         dieFly,
         currentBlood = 20,
         allBlood = 20;;
       this.create = function() {

         var s = this;



         //game.world.setBounds(0,0,viewW,2004*viewW/750);
         bg = game.add.tileSprite(0, 0, game.width * 2, game.height * 2, 'bg');
         // bg.autoScroll(0,-140);

         ///game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
         bg.scale.set(.6, .6)
           ///console.log(bg,game.height);

         //行走的人物
         sprite = game.add.sprite(startX, 100, 'person');
         sprite.scale.set(.3, .3)
           //sprite.exists = false;
         animation = sprite.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
         sprite.animations.play('run', 25, true);

         var blood = game.add.image(game.width - 50, 10, 'blood');
         blood.scale.set(.7, .7);


         /*  personStand = game.add.sprite(startX, 100, 'person')
           personStand.scale.set(.3, .3);
           personStand.animations.add('stand', [1]);
           personStand.animations.play('stand')*/



         //行走的老虎
         tiggerSprite = game.add.sprite(startX, defaultY, 'tigger');
         tiggerAnimation = tiggerSprite.animations.add('tiggerrun', [0, 1, 2]);
         tiggerSprite.scale.set(.4, .4)
         tiggerSprite.animations.play('tiggerrun', 5, true);
         self.tiggerSprite = tiggerSprite;

         //飞行的苍蝇
         flySprite = game.add.sprite(viewW / 2, defaultY, 'fly');
         flyAnimaiton = flySprite.animations.add('flyfly', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
         flySprite.scale.set(.5, .5);
         flySprite.animations.play('flyfly', 15, true);


         jumper = game.add.sprite(startX, 100, 'jump')
         jumper.scale.set(.3, .3);
         jumper.exists = false;


         energy = game.add.sprite(viewW / 2, game.height, 'energy');
         energy1 = game.add.sprite(viewW / 2 + 10, game.height, 'energy');



         /* var tween = game.add.tween(jumper);
          tween.to({x:120},700,Phaser.Easing.Power1,false,0,0,true);*/

         var isMove = false;

         game.input.onTap.add(function() {
           if (isMove || jumper.isDown) return;
           jumper.isDown = true;
           sprite.exists = false;
           jumper.exists = true;

           /*tween.start();
           tween.onComplete.add(function(){
             sprite.exists = true;
             jumper.exists = false;                    
           })*/

           //personStand.exists = false;
           //s.speed = 100;
           jumper.body.velocity = new Phaser.Point(viewW / 2.5, 0);

           jumper.body.acceleration = new Phaser.Point(-viewW / 2.5, 0)

         });



         var touch = new Phaser.Touch(game);

         touch.onTouchStart = function(e) {
           e.preventDefault()
           this.startY = e.changedTouches[0].pageY;
           this.startTime = new Date().getTime();
         };

         touch.onTouchMove = function(e) {
           e.preventDefault()
           isMove = true; //禁用点击事件tap
         };



         //开启物理引擎
         game.physics.startSystem(Phaser.Physics.ARCADE);


         game.physics.enable(energy, Phaser.Physics.ARCADE);
         game.physics.enable(energy1, Phaser.Physics.ARCADE);
         game.physics.enable(sprite, Phaser.Physics.ARCADE);


         game.physics.enable(jumper, Phaser.Physics.ARCADE);

         game.physics.enable(tiggerSprite, Phaser.Physics.ARCADE);

         game.physics.enable(flySprite, Phaser.Physics.ARCADE);


         energy.body.velocity = new Phaser.Point(0, energySpeed)

         energy1.body.velocity = new Phaser.Point(0, energySpeed + 20)

         //energy.body.acceleration = new Phaser.Point(0, -10)


         tiggerSprite.body.velocity = new Phaser.Point(0, tiggerSpeed)

         flySprite.body.velocity = new Phaser.Point(0, flySpeed)



         this.speed = 0;

         touch.onTouchEnd = function(e) {
           isMove = false;
           this.endY = e.changedTouches[0].pageY;
           var disY = Math.abs(this.startY - this.endY);
           this.endTime = new Date().getTime();

           if (disY > 50) {
             var disTime = this.endTime - this.startTime;
             s.speed += 20;
             if (s.speed >= 112) {
               s.speed = 111;
             }


           }

         };
         touch.start();

         //self.initEmitters();

       }
       this.update = function() {


         this.speed -= 1;

         if (this.speed <= 0) {
           this.speed = 0;
           //personStand.exists = true;
           ///animation = sprite.animations.add('run',[1]);
         } else {


           //animation = sprite.animations.add('run',[0,1,2]);
         }



         if (tiggerSprite.y < -100) {
           tiggerSprite.y = defaultY;
         }

         if (flySprite.y < -100) {
           flySprite.y = defaultY;
         }

         if (energy.y < -100) {
           energy.y = defaultY;
         }

         if (energy1.y < -100) {
           energy1.y = defaultY;
         }

         bg.autoScroll(0, !this.speed ? -50 : (this.speed * 3 + 200) * -1);

         if (jumper.x < startX) {
           jumper.x = startX;
           jumper.body.velocity = new Phaser.Point(0, 0)
           sprite.exists = true;
           jumper.exists = false;
           jumper.isDown = false;

         } else {
           //sprite.exists = false;
         }

         animation.speed = this.speed / 3 < 10 ? 10 : this.speed / 3;
         animation.speed = animation.speed > 25 ? 25 : animation.speed;
         if (dieTigger) {
           dieTigger.y -= 2;;
         }
         if (dieFly) {
           dieFly.x -= 2;
         }
         energy.body.velocity = new Phaser.Point(0, energySpeed - animation.speed)
         energy1.body.velocity = new Phaser.Point(0, energySpeed + 30 - animation.speed)
         flySprite.body.velocity = new Phaser.Point(0, flySpeed - animation.speed)
         tiggerSprite.body.velocity = new Phaser.Point(0, tiggerSpeed - animation.speed)

         ///document.title = this.speed;



         game.physics.arcade.overlap(jumper, energy, function() {

           currentBlood += 2;
           if (currentBlood > allBlood) {
             currentBlood = allBlood;
           }
           self.computeBlood(currentBlood, allBlood)
             //energy.exists = false;
           energy.y = defaultY;
         })

         game.physics.arcade.overlap(jumper, energy1, function() {
           //energy.exists = false;
           currentBlood += 4;
           if (currentBlood > allBlood) {
             currentBlood = allBlood;
           }
           self.computeBlood(currentBlood, allBlood)

           energy1.y = defaultY;
         })


         game.physics.arcade.overlap(sprite, tiggerSprite, function() {
           //console.log(tiggerSprite.x, tiggerSprite.y)



           dieTigger = game.add.image(tiggerSprite.x, tiggerSprite.y, 'tigger-die');
           dieTigger.scale.set(.3, .3);
           //console.log(game.world.children)
           game.world.setChildIndex(dieTigger, 1);
           currentBlood -= 4;
           if (currentBlood < 0) {
             currentBlood = 0;
           }
           self.computeBlood(currentBlood, allBlood)
           setTimeout(function() {

             dieTigger.kill()
             dieTigger = null;

           }, 1000)

           //tiggerSprite.exists = false; //
           tiggerSprite.y = defaultY;

         })

         game.physics.arcade.overlap(jumper, flySprite, function() {
           dieFly = game.add.image(flySprite.x, flySprite.y, 'fly-die');
           dieFly.scale.set(.5, .5);
           game.world.setChildIndex(dieFly, 1);
           currentBlood -= 2;
           if (currentBlood < 0) {
             currentBlood = 0;

           }
           self.computeBlood(currentBlood, allBlood)

           setTimeout(function() {

             dieFly.kill()
             dieFly = null;
           }, 3000)

           flySprite.y = defaultY;
         })

       }

     }


   },
   computeBlood: function(currentBlood, allBlood) {

     this.span = this.span || $('#zmiti-blood-C span');
     var currentBlood = currentBlood,
       allBlood = allBlood;
     if (currentBlood > allBlood) {
       currentBlood = allBlood;
     }
     this.span.css({
       WebkitTransform: 'scale(1,' + currentBlood / allBlood + ')',
       transform: 'scale(1,' + currentBlood / allBlood + ')',
     })
   }

 }


 window.onload = function() {
   ZmitiGameUtil.init();
 }