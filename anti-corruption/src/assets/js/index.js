 var viewW = document.documentElement.clientWidth,
     viewH = document.documentElement.clientHeight;


 var ZmitiGameUtil = {

     data: function() {

         return [

             {
                 title: '严重违纪开除党籍处分',
                 name: '夏兴华',
                 date: '2017/01/03',
                 headimg: './src/assets/images/xxh.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1451391&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除',
                 name: '黄兴国',
                 date: '2017/01/04',
                 headimg: './src/assets/images/hxg.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1455091&isview=1&homeshow=1'
             }, {
                 title: '被开除党籍',
                 name: '钟健能',
                 date: '2017/01/06',
                 headimg: './src/assets/images/zjn.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1463070&isview=1&homeshow=1'
             }, {
                 title: '涉嫌严重违纪接受组织调查',
                 name: '虞海燕',
                 date: '2017/01/11',
                 headimg: './src/assets/images/yhy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1479157&isview=1&homeshow=1'
             }, {
                 title: '沈阳原副市长祁鸣被双开',
                 name: '祁鸣',
                 date: '2017/01/14',
                 headimg: './src/assets/images/qm.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1488860&isview=1&homeshow=1'
             }, {
                 title: '铁岭市委原书记吴野松被双开',
                 name: '吴野松',
                 date: '2017/01/14',
                 headimg: './src/assets/images/wsy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1488860&isview=1&homeshow=1'
             }, {
                 title: '因严重违纪受到开除党籍处分',
                 name: '尹海林',
                 date: '2017/01/20',
                 headimg: './src/assets/images/yhl.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1511451&isview=1&homeshow=1'
             }, {
                 title: '受贿、滥用职权、巨额财产来源不明案一审宣判',
                 name: '苏荣',
                 date: '2017/01/23',
                 headimg: './src/assets/images/sr.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1520507&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被"双开"',
                 name: '吴天君',
                 date: '2017/01/23',
                 headimg: './src/assets/images/wtj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1520842&isview=1&homeshow=1'
             }, {
                 title: '被立案侦查',
                 name: '马建',
                 date: '2017/02/06',
                 headimg: './src/assets/images/mj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1547859&isview=1&homeshow=1'
             }, {
                 title: '降为副局级 留党察看2年',
                 name: '李立国',
                 date: '2017/02/08',
                 headimg: './src/assets/images/llg.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1555335&isview=1&homeshow=1'
             }, {
                 title: '回国投案自首',
                 name: '王诚建',
                 date: '2017/02/10',
                 headimg: './src/assets/images/wcj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1563038&isview=1&homeshow=1'
             }, {
                 title: '受贿案一审宣判 获刑15年',
                 name: '周本顺',
                 date: '2017/02/15',
                 headimg: './src/assets/images/zbs.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1575690&isview=1&homeshow=1'
             }, {
                 title: '接受组织调查',
                 name: '冷新生',
                 date: '2017/02/20',
                 headimg: './src/assets/images/lxs.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1592585&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '王银成',
                 date: '2017/02/23',
                 headimg: './src/assets/images/wyc.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1604181&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被"双开"',
                 name: '杨东平',
                 date: '2017/02/24',
                 headimg: './src/assets/images/ydp.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1608137&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被双开',
                 name: '张文雄',
                 date: '2017/02/27',
                 headimg: './src/assets/images/zwx.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1614810&isview=1&homeshow=1'
             }, {
                 title: '涉嫌严重违纪接受组织审查',
                 name: '陈旭',
                 date: '20/7///1',
                 headimg: './src/assets/images/cx.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1623445&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '孙怀山',
                 date: '20/7///2',
                 headimg: './src/assets/images/shs.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1626581&isview=1&homeshow=1'
             }, {
                 title: '被开除党籍和公职',
                 name: '李嘉',
                 date: '2017/03/08',
                 headimg: './src/assets/images/lj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1643195&isview=1&homeshow=1'
             }, {
                 title: '被立案侦查',
                 name: '李嘉',
                 date: '2017/03/17',
                 headimg: './src/assets/images/xxh.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1667821&isview=1&homeshow=1'
             }, {
                 title: '投案自首',
                 name: '王佳哲',
                 date: '2017/03/09',
                 headimg: './src/assets/images/wjz.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1645739&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '邓章武',
                 date: '2017/03/19',
                 headimg: './src/assets/images/dzw.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1672737&isview=1&homeshow=1'
             }, {
                 title: '被审查',
                 name: '尼加提•马合木提',
                 date: '2017/03/19',
                 headimg: './src/assets/images/njt.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1672738&isview=1&homeshow=1'
             }, {
                 title: '接受审查',
                 name: '张湘涛',
                 date: '2017/03/27',
                 headimg: './src/assets/images/zxt.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1694742&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '王世江',
                 date: '2017/04/06',
                 headimg: './src/assets/images/wsj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1725507&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被“双开”',
                 name: '李云峰',
                 date: '2017/04/07',
                 headimg: './src/assets/images/lyf.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1727763&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '项俊波',
                 date: '2017/04/09',
                 headimg: './src/assets/images/xjb.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1731546&isview=1&homeshow=1'
             }, {
                 title: '杨崇勇接受组织审查',
                 name: '杨崇勇',
                 date: '2017/04/11',
                 headimg: './src/assets/images/ycy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1738360&isview=1&homeshow=1'
             }, {
                 title: '受贿案一审宣判',
                 name: '盖如垠',
                 date: '2017/04/13',
                 headimg: './src/assets/images/gry.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1745447&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '夏兴华',
                 date: '2017/04/14',
                 headimg: './src/assets/images/mgm.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1748760&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '夏兴华',
                 date: '2017/04/17',
                 headimg: './src/assets/images/zhw.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1754289&isview=1&homeshow=1'
             }, {
                 title: '回国投案自首',
                 name: '李世乔',
                 date: '2017/04/17',
                 headimg: './src/assets/images/lsq.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1755246&isview=1&homeshow=1'
             }, {
                 title: '受贿行贿案一审获刑20年',
                 name: '潘逸阳',
                 date: '2017/04/18',
                 headimg: './src/assets/images/pyy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1759104&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '朱琳',
                 date: '2017/04/19',
                 headimg: './src/assets/images/zl.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1761650&isview=1&homeshow=1'
             }, {
                 title: '被问责并降',
                 name: '陈传书',
                 date: '2017/04/23',
                 headimg: './src/assets/images/ccs.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1773211&isview=1&homeshow=1'
             }, {
                 title: '涉嫌严重违纪接受组织审查',
                 name: '周春雨',
                 date: '2017/04/26',
                 headimg: './src/assets/images/zcy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1781220&isview=1&homeshow=1'
             }, {
                 title: '被双开:政治上攀附、道德上败坏…',
                 name: '陈树隆',
                 date: '2017/05/02',
                 headimg: './src/assets/images/csl.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1793437&isview=1&homeshow=1'
             }, {
                 title: '被开除党籍和公职',
                 name: '舒长云',
                 date: '2017/05/03',
                 headimg: './src/assets/images/scy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1796080&isview=1&homeshow=1'
             }, {
                 title: '被双开:大肆卖官鬻爵',
                 name: '李文科',
                 date: '2017/05/10',
                 headimg: './src/assets/images/lwk.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1816007&isview=1&homeshow=1'
             }, {
                 title: '受贿案一审开庭',
                 name: '王保安',
                 date: '2017/05/11',
                 headimg: './src/assets/images/wba.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1819816&isview=1&homeshow=1'
             }, {
                 title: '魏民洲接受组织审查',
                 name: '魏民洲',
                 date: '2017/05/22',
                 headimg: './src/assets/images/wmz.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1857033&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '梁成军',
                 date: '2017/05/23',
                 headimg: './src/assets/images/lcj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1861074&isview=1&homeshow=1'
             }, {
                 title: '涉嫌严重违纪接受组织审查',
                 name: '杨家才',
                 date: '2017/05/23',
                 headimg: './src/assets/images/yjc.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1862300&isview=1&homeshow=1'
             }, {
                 title: '被开除党籍 降为正处级',
                 name: '刘新齐',
                 date: '2017/05/24',
                 headimg: './src/assets/images/lxq.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1864713&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被双开 年龄学历全面造假',
                 name: '卢恩光',
                 date: '2017/05/25',
                 headimg: './src/assets/images/leg.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1870431&isview=1&homeshow=1'
             }, {
                 title: '赵黎平被核准死刑',
                 name: '赵黎平',
                 date: '2017/05/26',
                 headimg: './src/assets/images/zlp.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1877104&isview=1&homeshow=1'
             }, {
                 title: '一审被判死缓',
                 name: '武长顺',
                 date: '2017/05/27',
                 headimg: './src/assets/images/wcs.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1882942&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '赵壮天',
                 date: '2017/05/27',
                 headimg: './src/assets/images/zzt.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1883415&isview=1&homeshow=1'
             }, {
                 title: '以涉嫌受贿罪立案侦查',
                 name: '陈旭以',
                 date: '2017/06/01',
                 headimg: './src/assets/images/cxy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1896422&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除党籍和公职。',
                 name: '孙怀山',
                 date: '2017/06/02',
                 headimg: './src/assets/images/shs.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1900612&isview=1&homeshow=1'
             }, {
                 title: '立被案侦查',
                 name: '卢恩光',
                 date: '2017/06/02',
                 headimg: './src/assets/images/leg.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1902120&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除党籍和公职',
                 name: '虞海燕',
                 date: '2017/06/04',
                 headimg: './src/assets/images/yhy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1905486&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '刘喜杰',
                 date: '2017/06/12',
                 headimg: './src/assets/images/lxj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1929839&isview=1&homeshow=1'
             }, {
                 title: '涉嫌严重违纪接受组织审查',
                 name: '刘善桥',
                 date: '2017/06/26',
                 headimg: './src/assets/images/lsq.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=1981223&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除党籍和公职',
                 name: '杨崇勇',
                 date: '2017/07/04',
                 headimg: './src/assets/images/ycy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2014011&isview=1&homeshow=1'
             }, {
                 title: '被"双开"',
                 name: '蔡希有',
                 date: '2017/07/06',
                 headimg: './src/assets/images/cxy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2021221&isview=1&homeshow=1'
             }, {
                 title: '因严重违纪受到留党察看一年、行政撤职处分',
                 name: '王宏江',
                 date: '2017/07/10',
                 headimg: './src/assets/images/whj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2037215&isview=1&homeshow=1'
             }, {
                 title: '涉嫌严重违纪接受组织审查',
                 name: '王三运',
                 date: '2017/07/11',
                 headimg: './src/assets/images/wsy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2042581&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '真才基',
                 date: '2017/07/14',
                 headimg: './src/assets/images/zcj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2056829&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除党籍和公职',
                 name: '姚刚',
                 date: '2017/07/20',
                 headimg: './src/assets/images/yg.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2080867&isview=1&homeshow=1'
             }, {
                 title: '被开除党籍',
                 name: '夏兴华',
                 date: '2017/07/21',
                 headimg: './src/assets/images/wsj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2083683&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除党籍和公职',
                 name: '张育军',
                 date: '2017/07/21',
                 headimg: './src/assets/images/zyj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2085729&isview=1&homeshow=1'
             }, {
                 title: '因严重违纪受到撤销党内职务处分',
                 name: '许前飞',
                 date: '2017/07/24',
                 headimg: './src/assets/images/xqf.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2092561&isview=1&homeshow=1'
             }, {
                 title: '涉嫌严重违纪问题立案审查',
                 name: '孙政才',
                 date: '2017/07/24',
                 headimg: './src/assets/images/szc.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2095345&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除党籍和公职',
                 name: '魏民洲',
                 date: '2017/08/03',
                 headimg: './src/assets/images/wmz.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2133838&isview=1&homeshow=1'
             }, {
                 title: '立被案侦查',
                 name: '魏民洲',
                 date: '2017/08/08',
                 headimg: './src/assets/images/wmz.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2153494&isview=1&homeshow=1'
             }, {
                 title: '被审查',
                 name: '屈开平',
                 date: '2017/08/17',
                 headimg: './src/assets/images/qkp.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2188724&isview=1&homeshow=1'
             }, {
                 title: '被查',
                 name: '汤新华',
                 date: '2017/08/18',
                 headimg: './src/assets/images/txh.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2193107&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '林晓轩',
                 date: '2017/08/22',
                 headimg: './src/assets/images/lxx.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2211063&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '莫建成',
                 date: '2017/08/27',
                 headimg: './src/assets/images/mjc.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2228751&isview=1&homeshow=1'
             }, {
                 title: '被双开',
                 name: '鲍学全',
                 date: '2017/08/27',
                 headimg: './src/assets/images/bxq.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2229353&isview=1&homeshow=1'
             }, {
                 title: '被开除党籍开除公职处分',
                 name: '孙政才',
                 date: '2017/09/29',
                 headimg: './src/assets/images/szc.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2362533&isview=1&homeshow=1'
             }, {
                 title: '被立案侦查',
                 name: '项俊波',
                 date: '2017/09/29',
                 headimg: './src/assets/images/xjb.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2361618&isview=1&homeshow=1'
             }, {
                 title: '一审被判有期徒刑十二年',
                 name: '黄兴国',
                 date: '2017/09/25',
                 headimg: './src/assets/images/hxg.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2342928&isview=1&homeshow=1'
             }, {
                 title: '回国投案',
                 name: '徐雪伟',
                 date: '2017/09/25',
                 headimg: './src/assets/images/xxw.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2341221&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除党籍和公职',
                 name: '莫建成',
                 date: '2017/09/23',
                 headimg: './src/assets/images/mjc.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2335619&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除党籍和公职',
                 name: '项俊波',
                 date: '2017/09/23',
                 headimg: './src/assets/images/xjb.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2335616&isview=1&homeshow=1'
             }, {
                 title: '被开除党籍',
                 name: '高建军',
                 date: '2017/09/22',
                 headimg: './src/assets/images/gjj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2333949&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除党籍和公职',
                 name: '王三运',
                 date: '2017/09/22',
                 headimg: './src/assets/images/wsy.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2331457&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除党籍和公职',
                 name: '刘善桥',
                 date: '2017/09/18',
                 headimg: './src/assets/images/lsq.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2314843&isview=1&homeshow=1'
             }, {
                 title: '涉嫌严重违纪接受组织审查',
                 name: '李泽中',
                 date: '2017/09/02',
                 headimg: './src/assets/images/lzz.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2252593&isview=1&homeshow=1'
             }, {
                 title: '王延东接受组织审查',
                 name: '王延东',
                 date: '2017/10/31',
                 headimg: './src/assets/images/wyd.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2465735&isview=1&homeshow=1'
             }, {
                 title: '归案',
                 name: '孔广生',
                 date: '2017/10/12',
                 headimg: './src/assets/images/kgs.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2399670&isview=1&homeshow=1'
             }, {
                 title: '被"双开"',
                 name: '李世镕',
                 date: '2017/10/10',
                 headimg: './src/assets/images/lsr.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2392090&isview=1&homeshow=1'
             }, {
                 title: '回国投案',
                 name: '郭欣',
                 date: '2017/10/08',
                 headimg: './src/assets/images/gx.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2383528&isview=1&homeshow=1'
             }, {
                 title: '涉嫌严重违纪接受组织审查',
                 name: '刘强',
                 date: '2017/11/23',
                 headimg: './src/assets/images/lq.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2587177&isview=1&homeshow=1'
             }, {
                 title: '涉嫌严重违纪接受组织审查',
                 name: '鲁炜',
                 date: '2017/11/21',
                 headimg: './src/assets/images/lw.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2572323&isview=1&homeshow=1'
             }, {
                 title: '严重违纪被开除党籍',
                 name: '梁成军',
                 date: '2017/11/21',
                 headimg: './src/assets/images/lcj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2564723&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '李金亮',
                 date: '2017/11/15',
                 headimg: './src/assets/images/ljl.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2523437&isview=1&homeshow=1'
             }, {
                 title: '回国投案',
                 name: '贺俭',
                 date: '2017/11/07',
                 headimg: './src/assets/images/hj.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2493102&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '杜强',
                 date: '2017/11/06',
                 headimg: './src/assets/images/dq.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2489866&isview=1&homeshow=1'
             }, {
                 title: '第十二届全国人大代表资格终止',
                 name: '孙政才',
                 date: '2017/11/04',
                 headimg: './src/assets/images/szc.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2482741&isview=1&homeshow=1'
             }, {
                 title: '接受组织审查',
                 name: '李政科',
                 date: '2017/11/02',
                 headimg: './src/assets/images/lzk.jpg',
                 href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2473550&isview=1&homeshow=1'
             }
         ]

     },


     loadingState: {
         preload: function() {
             window.game = this.game;
             var game = this.game;
             this.game = game;
             game.load.image('jump', './src/assets/images/jump.png');
             game.load.image('background', './src/assets/images/background.jpg');
             game.load.image('clip-bg', './src/assets/images/clip-bg.jpg');
             game.load.image('bg', './src/assets/images/bg.jpg');
             game.load.spritesheet('person', './src/assets/images/person.png', 203, 152);
             game.load.image('energy', './src/assets/images/energy.png');
             game.load.spritesheet('tigger', './src/assets/images/tigger.png', 135, 200)
             game.load.image('tigger-die', './src/assets/images/tigger-die.png');
             game.load.image('person-die', './src/assets/images/person-die.png');
             game.load.spritesheet('fly', './src/assets/images/fly.png', 81, 82)
             game.load.image('fly-die', './src/assets/images/fly-die.png');
             game.load.image('title', './src/assets/images/title.png');
             game.load.image('begin-btn', './src/assets/images/begin-btn.png');
             game.load.image('blood', './src/assets/images/blood.png');
             game.load.image('person-top', './src/assets/images/person-top.png');
             game.load.spritesheet('over-sprite', './src/assets/images/over.png', 116, 376);
             game.load.spritesheet('wind', './src/assets/images/wind.png', 123, 105);
             game.load.image('result1', './src/assets/images/result1.png');
             game.load.image('result2', './src/assets/images/result2.png');
             game.load.image('result3', './src/assets/images/result3.png');
             game.load.image('restart-btn', './src/assets/images/restart-btn.png');
             game.load.image('share-btn', './src/assets/images/share-btn.png');
             game.load.image('saveimg-btn', './src/assets/images/saveimg-btn.png');
             //game.load.image('qrcode', './src/assets/images/qrcode.png');
             game.load.image('tips1', './src/assets/images/tips1.gif');
             game.load.image('tips2', './src/assets/images/tips2.gif');
             game.load.spritesheet('tiggerKill', './src/assets/images/tigger-kill.png', 152, 296);

             //game.load.image('screen', './src/assets/images/screen.png');
             game.load.image('loading', './src/assets/images/loading.jpg');

             game.load.audio('gamestart', './src/assets/music/gamestart.mp3');
             game.load.audio('gaming', './src/assets/music/gaming.mp3');
             game.load.audio('die', './src/assets/music/die.mp3');
             game.load.audio('fast', './src/assets/music/fast.mp3');
             game.load.audio('add-energy', './src/assets/music/add-energy.mp3');
             game.load.audio('tigger-die-audio', './src/assets/music/tigger-die.mp3');
             game.load.audio('wait-audio', './src/assets/music/wait.mp3');
             game.load.audio('photo-audio', './src/assets/music/photo.mp3');


             var s = this;
             game.load.onFileComplete.add(function() {
                 this.text = this.text || $('#zmiti-loading-text');
                 this.text.html(game.load.progress + '%');
                 if(game.load.progress>96){
                    game.state.start('gameBeforeStartState');
                    $('#zmiti-loading-C').remove();   
                 }
             });

             game.load.onLoadComplete.add(function() {
                 

             })
         },
         create: function() {



         }
     },

     gameBeforeStartState: {
         init: function() {

         },
         create: function() {
             var game = this.game;


             var gameStartAudio = game.add.audio('gamestart');
             gameStartAudio.onDecoded.add(function() {
                 gameStartAudio.fadeIn(1000);
             });



             // this.audioAutoPlay(gameStartAudio);

            /// gameStartAudio.play();
             document.addEventListener("WeixinJSBridgeReady", function() {
                 gameStartAudio.play();
             }, false);
             document.addEventListener('YixinJSBridgeReady', function() {
                 gameStartAudio.play();
             }, false);
             //this.gameStartAudio = gameStartAudio;

             var bg = game.add.tileSprite(0, 0, game.width * 2, game.height * 2, 'bg');
             // bg.autoScroll(0,-140);

             ///game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
             bg.scale.set(.6, .6)
             bg.autoScroll(0, -50);

             var title = game.add.image(game.width - 30, game.world.centerY, 'title');
             title.scale.set(viewW / 320 * .35, viewW / 320 * .35)
             title.anchor.setTo(1, .5);
             this.title = title;

             var titleTween = game.add.tween(title);
             titleTween.to({
                 x: title.x - 10
             }, 100, Phaser.Easing.Back.Out, false, false, true);

             this.titleTween = titleTween;


             var desc = game.add.text(viewW / 2 - 20, viewH / 2, ' “打虎拍蝇”最新讯息一端掌握。2017年，新华社客户端\n推送百余条反腐首发弹窗，岁末之际，快来点点看你还\n记得哪些贪官落马。', {
                 fill: '#fff',
                 font: '48px'
             });
             desc.rotation = Math.PI / 2;
             desc.alpha = 0;
             desc.scale.set(.3, .3);
             desc.anchor.setTo(.5, .5);
             var descTween = game.add.tween(desc);
             this.descTween = descTween;
             descTween.to({
                 alpha: 1
             }, 1000, Phaser.Easing.Linear.None)



             var s = this;
             var beginBtn = game.add.button(game.world.centerX / 2, game.world.centerY, 'begin-btn', function() {

                 s.game.state.start('gameState');

                 $('#zmiti-blood-C').css({
                     display: 'block'
                 });
                 var iNow = 0;
                 $('.zmiti-tip').css({
                     display: 'block'
                 }).on('touchstart', function() {
                     iNow++;
                     $(this).find('img').attr('src', './src/assets/images/tips2.gif')
                     if (iNow === 2) {
                         iNow = 0;
                         $(this).hide();
                     }
                 });

                 setTimeout(function(){
                    $('.zmiti-tip').trigger('touchstart');
                    setTimeout(function(){
                        $('.zmiti-tip').trigger('touchstart');  
                    },2000)
                 },3000)
             });
             beginBtn.scale.set(.5, .5);
             beginBtn.anchor.setTo(.5, .5);
             beginBtn.exists = false;
             this.beginBtn = beginBtn;

             var startX = 62;
             var sprite = game.add.sprite(startX, -100, 'person');
             this.sprite = sprite;
             sprite.scale.set(.3, .3)
                 //sprite.exists = false;
             animation = sprite.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
             sprite.animations.play('run', 25, true);

             var y = (viewH - title.height) / 2 - 24;
             var personTop = game.add.image(title.x - 1.5 * 32, y, 'person-top');
             personTop.scale.set(.5, .5);
             personTop.exists = false;
             this.personTop = personTop;



             var jumper = game.add.sprite(startX, 100, 'jump')

             this.jumper = jumper;
             jumper.scale.set(.3, .3);
             jumper.exists = false;

         },
         update: function() {
             var personTop = this.personTop;
             if (this.sprite) {
                 if (this.sprite.y > 100) {
                     this.sprite.y = 100;
                     this.jumper.exists = true;
                     this.sprite.kill();
                     this.sprite.exists = false;
                     this.sprite = null;
                     var tween = this.game.add.tween(this.jumper);
                     tween.to({
                         x: personTop.x,
                         y: personTop.y
                     }, 2000, Phaser.Easing.Back.Out);
                     tween.start();
                     tween.onComplete.add(function() {
                         personTop.exists = true;
                         this.jumper.exists = false;
                         this.titleTween.start();
                         this.descTween.start();
                         setTimeout(function() {
                             this.beginBtn.exists = true;
                         }.bind(this), 1000)
                     }.bind(this))
                 } else {
                     this.sprite.y++;
                 }
             }


         }

     },
     init: function() {
         var game = new Phaser.Game(viewW, viewH, Phaser.CANVAS, 'zmiti-stage');
         this.game = game;

         var self = this;

         this.bindEvent();


         this.game.state.add('loadingState', this.loadingState);
         this.game.state.add('gameState', gameState);
         this.game.state.add('gameBeforeStartState', this.gameBeforeStartState)
         this.game.state.start('loadingState');

         this.flyCount = 0; //打死的老虎的数量
         this.tiggerCount = 0; //打死的苍蝇的数量


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
                 currentBlood = 21,
                 allBlood = 21,
                 fastAudio,
                 addEnergy,
                 tiggerDieAudio,
                 gamingAuido,
                 waitAudio,
                 energyText,
                 windSprite,
                 windAnimation,
                 tiggerKill,
                 text;

             self.currentBlood = currentBlood;

             this.create = function() {



                 var s = this;
                 ///gamingAuido = new Phaser.Sound(game, 'gaming', .2);
                 gamingAuido = game.add.audio('gaming');
                 gamingAuido.play();



                 fastAudio = new Phaser.Sound(game, 'fast', .2);


                 waitAudio = new Phaser.Sound(game, 'wait-audio', .6);

                 addEnergy = new Phaser.Sound(game, 'add-energy');

                 tiggerDieAudio = new Phaser.Sound(game, 'tigger-die-audio');
                 //fastAudio.allowMultiple = true;



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


                 windSprite = game.add.sprite(startX + 30, 50, 'wind');
                 windAnimation = windSprite.animations.add('windrun', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                 windSprite.animations.play('windrun', 20, true);
                 windSprite.exists = false;
                 windSprite.scale.set(.5, .5)


                 var blood = game.add.image(game.width - 50, 10, 'blood');
                 blood.scale.set(.7, .7);

                 /* var qrcode = game.add.image(game.width - 110, game.height - 110, 'qrcode');
                  qrcode.scale.set(.35, .35);
                  qrcode.exists = false;
                  self.qrcode = qrcode;*/

                 var counts = 60;

                 self.allSeconds = counts;



                 text = game.add.text(game.width - 30, game.height / 2.2, self.allSeconds + 's', {
                     fill: '#fff',
                     font: "18px Arial"
                 });
                 text.anchor.setTo(.5, .5);
                 text.rotation = Math.PI / 2;

                 var tween = game.add.tween(text);
                 tween.to({
                     alpha: 0
                 }, 100, Phaser.Easing.Linear.None, false, 0, true, true)

                 self.Texttween = tween;

                 var event = game.time.events.loop(Phaser.Timer.SECOND, function() {
                     self.allSeconds--;

                     self.counts = 60 - self.allSeconds;
                     if (self.allSeconds < 0) {
                         //game over
                         event.timer.stop(); //时间到。游戏结束
                         self.gameover();

                     } else {
                         text.setText('' + self.allSeconds + ' s');
                     }


                 }, this);

                 self.timerEvent = event;



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
                 flySprite = game.add.sprite(viewW / 2.5, defaultY, 'fly');
                 flyAnimaiton = flySprite.animations.add('flyfly', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
                 flySprite.scale.set(.5, .5);
                 flySprite.animations.play('flyfly', 15, true);

                 //跳跃的人物
                 jumper = game.add.sprite(startX, 100, 'jump')
                 jumper.scale.set(.3, .3);
                 jumper.exists = false;

                 //能量
                 energy = game.add.sprite(viewW / 2 - 30, game.height, 'energy');
                 energy1 = game.add.sprite(viewW / 2 - 30, game.height, 'energy');


                 energyText = game.add.text(viewW - 18, 60, '21 / 21', {
                     fill: '#fff',
                     font: '28px'
                 });
                 energyText.scale.set(.5, .5);

                 energyText.rotation = Math.PI / 2;

                 self.energyText = energyText

                 var isMove = false;

                 game.input.onTap.add(function() {
                     if (self.gameisover) {
                         return;
                     }
                     if (isMove || jumper.isDown) return;
                     jumper.isDown = true;
                     sprite.exists = false;
                     jumper.exists = true;

                     jumper.body.velocity = new Phaser.Point(viewW / 2.5, 0);

                     jumper.body.acceleration = new Phaser.Point(-viewW / 2, 0)

                 });


                 tiggerKill = game.add.sprite(startX, 130, 'tiggerKill');

                 var tiggerKillAnimation = tiggerKill.animations.add('run', [0, 1]);
                 tiggerKill.animations.play('run', 20, true);
                 tiggerKill.scale.set(2 / 3 * .5, 2 / 3 * .5);
                 tiggerKill.exists = false;



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
                     if (self.gameisover) {
                         return;
                     }
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
                         this.timer && clearTimeout(this.timer);
                         if(!self.gameisover && !game.paused){
                                 this.timer = setTimeout(function() {
                                 !self.gameisover && waitAudio.play();
                                 !self.gameisover && !game.paused && $('.zmiti-tip').css({
                                     display: 'block'
                                 }).off('touchstart').on('touchstart', function() {
                                     $(this).hide()
                                 }).find('img').attr('src', './src/assets/images/tips1.gif')
                             }, 5000)
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

                 if (self.counts > 40) {
                     //self.textTweenStart = true;
                     text.setStyle({
                         fill: '#f00'
                     })
                     self.Texttween.start();
                 }

                 //fastAudio.stop();

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

                 if (animation.speed > 17) {
                     windSprite.exists = true;
                     if (!fastAudio.isPlaying) {
                         fastAudio.play();
                         gamingAuido.pause();
                     }
                 } else {
                     windSprite.exists = false;
                     if (!gamingAuido.isPlaying) {
                         fastAudio.pause();
                         gamingAuido.resume();
                     }
                 }


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

                     self.currentBlood += 2;
                     if (self.currentBlood > allBlood) {
                         self.currentBlood = allBlood;
                     }
                     addEnergy.play();
                     self.computeBlood(self.currentBlood, allBlood)
                         //energy.exists = false;
                     energy.y = defaultY;
                 })

                 game.physics.arcade.overlap(jumper, energy1, function() {
                     //energy.exists = false;
                     self.currentBlood += 4;

                     addEnergy.play();


                     if (self.currentBlood > allBlood) {
                         self.currentBlood = allBlood;
                     }
                     self.computeBlood(self.currentBlood, allBlood)

                     energy1.y = defaultY;
                 })

                 if (self.overSprite && !self.gameisover) {

                     self.overSprite.y--;
                     if (self.overSprite.y < -200) {
                         self.overSprite.kill();
                         self.overSprite = null;
                         self.game.paused = true;
                     }
                 }

                 if (self.personDie) {
                     self.personDie.y--;
                 }

                 var overSprite = null;

                 game.physics.arcade.overlap(sprite, tiggerSprite, function() {
                         //console.log(tiggerSprite.x, tiggerSprite.y)

                         self.currentBlood -= 4;
                         self.computeBlood(Math.max(self.currentBlood, 0), allBlood)


                         if (self.currentBlood < 0) {
                             self.currentBlood = 0;

                             overSprite = game.add.sprite(startX, 70, 'over-sprite');
                             self.overSprite = overSprite;
                             var ani = overSprite.animations.add('run', [0, 1, 2, 3]);

                             overSprite.scale.set(.4, .4);
                             overSprite.exists = false;

                             sprite.exists = false;

                             var personDie = game.add.image(startX, 100, 'person-die');
                             self.personDie = personDie;
                             personDie.scale.set(.4, .4);
                             jumper.exists = false;
                             jumper.kill();


                             /*  dieTigger = game.add.image(tiggerSprite.x, tiggerSprite.y, 'tigger-die');
                               dieTigger.scale.set(.3, .3);*/
                             self.gameisover = true;
                             setTimeout(function() {
                                 overSprite.exists = true;
                                 self.gameover(overSprite);
                                 tiggerSprite.kill();
                                 flySprite.kill();
                                 personDie.kill();
                                 dieTigger.kill();
                             }, 1000)
                             game.world.setChildIndex(tiggerSprite, 10);
                         } else {
                             self.tiggerCount++;
                             tiggerKill.exists = true;
                             tiggerKill.y = tiggerSprite.y
                             setTimeout(function() {
                                 tiggerKill.exists = false;
                             }, 350)
                             dieTigger = game.add.image(tiggerSprite.x, tiggerSprite.y, 'tigger-die');
                             dieTigger.scale.set(.3, .3);
                             game.world.setChildIndex(dieTigger, 1);
                             //console.log(game.world.children)
                             tiggerDieAudio.play()
                             tiggerSprite.y = defaultY;
                             self.fillDialog();
                         }



                         //tiggerSprite.exists = false; //


                     })
                     //和苍蝇碰撞上了。
                 game.physics.arcade.overlap(jumper, flySprite, function() {
                     self.currentBlood -= 2;
                     self.computeBlood(self.currentBlood, allBlood)


                     if (self.currentBlood < 0) {
                         self.currentBlood = 0;

                     } else {
                         self.fillDialog();
                         self.flyCount++;
                         dieFly = game.add.image(flySprite.x, flySprite.y, 'fly-die');
                         dieFly.scale.set(.5, .5);
                         game.world.setChildIndex(dieFly, 1);

                         setTimeout(function() {

                             dieFly.kill()
                             dieFly = null;
                         }, 3000)

                         flySprite.y = defaultY;
                     }


                 })

             }

         }
         this.wxConfig('看我0秒打虎记录', '打虎还未成功，同志还需加油')
     },

     bindEvent: function() {
         this.iframeC = this.iframeC || $('#iframe');
         $("#zmiti-back").on('click', function() {

             setTimeout(function() {
                 this.iframeC.hide();
                 this.iframeC.find('iframe').attr('src', 'about:blank');
                 this.game.paused = false;
             }.bind(this), 10);
         }.bind(this));
         var game = this.game;
         var self = this;
         $('#zmiti-btn-groups div').on('click', function() {
             var _this = $(this);
             var index = _this.index();
             switch (index) {
                 case 0:
                     game.paused = false;
                     game.state.start('gameState');
                     self.gameisover = false;
                     self.group.exists = false;
                     self.allSeconds = 60;
                     self.counts = 0;
                     self.clipBg.kill();
                     self.timerEvent.timer.start();
                     _this.parent().hide();
                     self.flyCount = 0;
                     self.tiggerCount = 0; //
                     self.currentBlood = 21; //恢复血量
                     // self.qrcode.exists = false;
                     self.computeBlood(21, 21);
                     break;
                 case 1:
                     $('#zmiti-mask').css({
                         display: 'block'
                     }).off('click').on('click', function() {
                         $(this).hide();
                     });
                     break;
                 case 2: //截图。

                     var photoAudio = new Phaser.Sound(game, 'photo-audio')
                     photoAudio.play();
                     $('#zmiti-blood-C').css({
                         display: 'none'
                     });
                     game.paused = true;
                     $.ajax({
                         url: 'http://api.zmiti.com/v2/share/base64_image/',
                         type: 'post',
                         data: {
                             setcontents: $('canvas')[0].toDataURL(),
                             setimage_w: viewW,
                             setimage_h: viewH
                         },
                         success: function(data) {

                             if (data.getret === 0) {
                                 var src = data.getimageurl;
                                 var _this = $('.zmiti-clip-img').css({
                                     display: 'block'
                                 }).attr('src', src);

                                 setTimeout(function() {
                                     _this.addClass('active');
                                     $('canvas').css({
                                         opacity: 0
                                     });
                                 }, 1000)


                             }

                         }
                     })

                     break;
             }
         })
     },

     gameover: function(overSprite) {
         this.gameisover = true;

         // this.qrcode.exists = true;
         this.timerEvent.timer.stop();

         this.bloodC.css({
             display: 'none'
         })


         var clipBg = this.game.add.image(0, 0, 'clip-bg');

         this.clipBg = clipBg;

         clipBg.scale.set(viewH / clipBg.height, viewH / clipBg.height)

         var group = this.game.add.group();

         var rem = viewW / 10;
         this.group = this.group || group;
         $('#zmiti-btn-groups').css({
             display: 'block'
         });

         var result = this.flyCount + this.tiggerCount;

         if (result <= 5) {
             this.wxConfig('我参加了打虎行动，仅仅是参加', '打虎路上，我成功以' + this.tiggerCount + '只老虎，' + this.flyCount + '只苍蝇的成绩成为参与者')
         } else if (result > 5 && result <= 15) {
             this.wxConfig(this.tiggerCount + '只老虎，' + this.flyCount + '只苍蝇,看我72绝技', '反腐路上，我将继续前进')
         } else {
             this.wxConfig(this.tiggerCount + '只老虎，' + this.flyCount + '只苍蝇,我是反腐英雄', '反腐路上，我将继续前进')
         }

         if (result <= 5) {
             var result1 = this.game.add.image(this.game.world.centerX + 20, this.game.world.centerY, 'result1');
             var seconds = this.game.add.text(this.game.world.centerX + viewW / 10 * 2.5, this.game.world.centerY - .3 * viewW / 10, this.counts < 10 ? '0' + this.counts : this.counts, {
                 fill: '#fde957',
                 font: viewW / 10 + 'px'
             });
             seconds.rotation = Math.PI / 2;
             result1.scale.set(viewW / result1.width / 1.8, viewW / result1.width / 1.8);
             result1.anchor.setTo(.5, .5);

             group.add(result1)
             group.add(seconds)
         } else if (result > 5 && result <= 15) {

             var result3 = this.game.add.image(this.game.world.centerX + 20, this.game.world.centerY, 'result3');


             /* */

             var seconds = this.game.add.text(this.game.world.centerX - 1.3 * rem, this.game.world.centerY - 1.5 * viewW / 10, this.flyCount, {
                 fill: '#fff',
                 font: rem * 1 + 'px'
             });
             seconds.rotation = Math.PI / 2;

             var seconds1 = this.game.add.text(this.game.world.centerX - .6 * rem, this.game.world.centerY + rem * 2.8, this.tiggerCount, {
                 fill: '#fff',
                 font: rem * 1 + 'px'
             });

             seconds.scale.set(.5, .5)
             seconds1.scale.set(.5, .5)
             seconds1.rotation = Math.PI / 2;
             result3.scale.set(viewW / result3.width / 1.8, viewW / result3.width / 1.8);
             result3.anchor.setTo(.5, .5);

             group.add(seconds1);
             group.add(seconds);
             group.add(result3);

         } else {
             var result2 = this.game.add.image(this.game.world.centerX + 20, this.game.world.centerY, 'result2');

             var seconds = this.game.add.text(this.game.world.centerX + rem * 2.4, this.game.world.centerY - .3 * viewW / 10, this.flyCount, {
                 fill: '#fde957',
                 font: 1.5 * rem + 'px'
             });
             seconds.rotation = Math.PI / 2;

             var seconds1 = this.game.add.text(this.game.world.centerX + rem * 2.4, result2.y - result2.height / 2 * .4 + 10, this.tiggerCount, {
                 fill: '#fde957',
                 font: 1.5 * rem + 'px'
             });
             seconds1.rotation = Math.PI / 2;
             result2.scale.set(viewW / result2.width / 1.8, viewW / result2.width / 1.8);
             result2.anchor.setTo(.5, .5);
             seconds1.scale.set(.7, .7)
             seconds.scale.set(.7, .7)
             group.add(seconds1);
             group.add(seconds);
             group.add(result2);


         }

         this.group = group;



         //result1.rotation = Math.PI/2;

         overSprite && overSprite.animations.play('run', 10, true);
     },
     audioAutoPlay: function(audio) {

         audio.fadeIn(1000);
         document.addEventListener("WeixinJSBridgeReady", function() {
             audio.fadeIn(1000);
         }, false);
         document.addEventListener('YixinJSBridgeReady', function() {
             audio.fadeIn(1000);
         }, false);
     },
     computeBlood: function(currentBlood, allBlood) {

         this.span = this.span || $('#zmiti-blood-C span');
         this.bloodC = this.bloodC || $('#zmiti-blood-C')
         var currentBlood = currentBlood,
             allBlood = allBlood;


         var colorArr = ["#e60012", "#e60012", "#e60012", "#e60012", '#f39800', '#f39800', '#f39800', '#11cc03', '#11cc03', '#11cc03', '#11cc03'];
         if (currentBlood > allBlood) {
             currentBlood = allBlood;
         }



         this.energyText.setText(currentBlood + ' / ' + allBlood)
         var scale = (currentBlood / allBlood).toFixed(1) * 1;
         this.bloodC[(scale * 10 <= 4 && currentBlood > 0) ? 'addClass' : 'removeClass']('danger')
         this.span.css({
             WebkitTransform: 'scale(1,' + scale + ')',
             transform: 'scale(1,' + scale + ')',
             background: colorArr[scale * 10]
         })
         this.bloodC.css({
             borderColor: '#fff'
         })
     },
     fillDialog: function(date, headimg, title, name) {

         var self = this;
         this.defaultData = this.defaultData || this.data().concat([]);

         var data = this.defaultData;
         if (data.length <= 0) {
             //游戏结束
             return;
         }

         var index = Math.random() * data.length | 0;


         var d = data.splice(index, 1)[0];

         var html = $('<div class="zmiti-dialog-C" style="-webkit-transform:rotate(90deg) translate(' + -(viewH - 100 - 7 * 32) + 'px, 5rem) scale(.2)">\
        <header>\
           <div>\
             <div><img src="./src/assets/images/logo.png"/></div>\
             <div></div>\
             <div>' + d.date + '</div>\
           </div>\
        </header>\
        <div class="zmiti-dialog-content">\
          <div>\
             <img src=' + d.headimg + '/>\
          </div>\
          <div></div>\
          <div>\
            <h3 >' + d.name + '</h3>\
            <div class="zmiti-text-overflow" >' + d.title + '</div>\
          </div>\
        </div>');

         $('.zmiti-dialog-C').addClass('hide');
         setTimeout(function() {
             $('.zmiti-dialog-C.hide').eq(0).remove();
         }, 500)
         $('#zmiti-stage').append(html);


         setTimeout(function() {
             html.addClass('show');
         }, 100);

         setTimeout(function() {
             $('.zmiti-dialog-C.show').addClass('hide').removeClass('show');
         }, 3000)
         html.on('click', function() {
             var href = d.href;

             self.iframeC = self.iframeC || $('#iframe');
             self.iframeC.css({
                 display: 'block'
             });
             self.game.paused = true;
             self.iframeC.find('iframe').attr('src', href);

         })

     },
     wxConfig(title, desc) {

         var img = 'http://h5.zmiti.com/public/anti-corruption/src/assets/images/300.jpg';

         var appId = 'wxfacf4a639d9e3bcc'
         var durl = location.href.split('#')[0]; //window.location;
         var code_durl = encodeURIComponent(durl);

         var s = this;

         $.ajax({
             type: 'get',
             url: "http://api.zmiti.com/weixin/jssdk.php?type=signature&durl=" + code_durl,
             dataType: 'jsonp',
             jsonp: "callback",
             jsonpCallback: "jsonFlickrFeed",

             success: function(data) {
                 wx.config({
                     debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                     appId: appId, // 必填，公众号的唯一标识
                     timestamp: '1488558145', // 必填，生成签名的时间戳
                     nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
                     signature: data.signature, // 必填，签名，见附录1
                     jsApiList: ['checkJsApi',
                             'onMenuShareTimeline',
                             'onMenuShareAppMessage',
                             'onMenuShareQQ',
                             'onMenuShareWeibo',
                             'hideMenuItems',
                             'showMenuItems',
                             'hideAllNonBaseMenuItem',
                             'showAllNonBaseMenuItem'
                         ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                 });

                 wx.ready(function() {


                     //朋友圈
                     wx.onMenuShareTimeline({
                         title: title, // 分享标题
                         link: durl, // 分享链接
                         imgUrl: img, // 分享图标
                         desc: desc,
                         success: function() {},
                         cancel: function() {}
                     });
                     //朋友
                     wx.onMenuShareAppMessage({
                         title: title, // 分享标题
                         link: durl, // 分享链接
                         imgUrl: img, // 分享图标
                         type: "link",
                         dataUrl: "",
                         desc: desc,
                         success: function() {},
                         cancel: function() {}
                     });
                     //qq
                     wx.onMenuShareQQ({
                         title: title, // 分享标题
                         link: durl, // 分享链接
                         imgUrl: img, // 分享图标
                         desc: desc,
                         success: function() {},
                         cancel: function() {}
                     });
                 });
             }
         });

     }

 }


 window.onload = function() {
     ZmitiGameUtil.init();
 }