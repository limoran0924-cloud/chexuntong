// =====================================================
// 车讯通 v2.3 - 汽车行业资讯+媒介策略资源库+标书商机+词条百科
// 更新日期: 2026-04-24
// =====================================================
//
// 📊 九大核心模块:
// 1. news          - 汽车资讯 (行业动态/新车/企业/技术/市场)
// 2. marketing     - 营销案例库 (Campaign案例/策略拆解)
// 3. influencer    - KOL/KOC资源 (达人清单/报价/平台)
// 4. media         - 媒体投放数据 (平台分析/预算/趋势)
// 5. social        - 社媒声量监测 (品牌排名/热点追踪)
// 6. competitor    - 竞品媒介分析 (竞品策略/差异化)
// 7. calendar      - 营销节点日历 (车展/发布会/营销节点)
// 8. bids          - 标书商机 (招标信息/投标机会)
// 9. glossary      - 词条百科 (专业术语/概念解释/知识百科) ⭐新增
//
// 使用示例:
// DATA_SOURCE.marketing.cases    - 获取营销案例
// DATA_SOURCE.influencer.list    - 获取KOL资源
// DATA_SOURCE.social.brandRanking - 获取品牌声量排名
// DATA_SOURCE.bids.list          - 获取标书商机
// DATA_SOURCE.glossary           - 获取词条百科 ⭐新增
// =====================================================

const DATA_SOURCE = {
    // 当前使用真实搜索数据（2026年4月）
    lastUpdate: '2026-04-27',
    version: '2.5',
    description: '汽车行业资讯+媒介策略资源库+标书商机',
    
    // 真实汽车资讯数据 - 覆盖全行业（50+条）
    news: [
        // ========== 2026年4月27日 本周新增 ==========
        {
            id: '20260427_01',
            category: 'industry',
            categoryName: '行业动态',
            title: '2026北京国际汽车展览会开幕，新能源车型成主角',
            summary: '4月24日，2026北京国际汽车展览会在京开幕。本届车展以"突破·跃升"为主题，集中展示全球汽车产业最新技术成果。长安马自达、比亚迪、小米汽车等品牌集中展示新能源转型成果，新能源汽车成为本届车展绝对主角。',
            date: '2026-04-24',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/wm/2026-04-24/doc-inhvqfhn3299098.shtml'
        },
        {
            id: '20260427_02',
            category: 'market',
            categoryName: '市场热点',
            title: '2025年中国汽车产销双双突破3400万辆，新能源占比超50%',
            summary: '中国汽车工业协会发布数据显示，2025年我国汽车产销分别完成3453.1万辆和3440万辆，同比分别增长10.4%和9.4%。新能源汽车产销量均超1600万辆，国内新车销量中新能源汽车占比突破50%。',
            date: '2026-04-27',
            source: '新华网',
            url: 'https://www.news.cn/fortune/20260115/9f8333fda7a847b78ca5d47defe5a443/c.html'
        },
        {
            id: '20260427_03',
            category: 'market',
            categoryName: '市场热点',
            title: '4月新能源乘用车批发销量达113.3万辆，同比增长超40%',
            summary: '中国汽车流通协会数据显示，4月新能源乘用车生产达到115.1万辆，同比增长40.3%；批发销量达到113.3万辆，同比增长保持高位。1-4月累计生产407.8万辆，增长44.5%。',
            date: '2026-04-27',
            source: '中国汽车流通协会',
            url: 'https://www.cada.cn/Trends/info_91_10246.html'
        },
        {
            id: '20260427_04',
            category: 'company',
            categoryName: '企业新闻',
            title: '零跑汽车：2025年50万台目标提前完成，明年冲击100万辆',
            summary: '零跑汽车宣布2025年50万台销量目标提前完成。全链路数字化营销及服务系统部署后，潜客锁单率、到店锁单率等核心零售指标均有增长，门店运营效能同比增长27%。',
            date: '2026-04-27',
            source: '电子工程专辑',
            url: 'https://www.eet-china.com/mp/a452791.html'
        },
        {
            id: '20260427_05',
            category: 'market',
            categoryName: '市场热点',
            title: '4月新能源汽车销量：比亚迪37.3万辆、吉利12.6万辆、零跑4.1万辆',
            summary: '比亚迪乘用车4月销量372,615辆，同比增长19.4%，1-4月累计销量1,358,713辆。吉利汽车新能源板块销量突破12.5万辆，同比增长144%。零跑汽车表现亮眼。',
            date: '2026-04-27',
            source: 'OFweek新能源汽车网',
            url: 'https://nev.ofweek.com/2025-05/ART-71000-8110-30662575.html'
        },
        // ========== 造车新势力 ==========
        {
            id: 1,
            category: 'company',
            categoryName: '企业新闻',
            title: '胡峥楠出任小米汽车首位CTO，原特斯拉厂长宋钢任参谋长',
            summary: '小米集团宣布两项人事任命：顺为投资合伙人兼小米汽车顾问胡峥楠正式加入小米，出任集团副总裁、汽车部CTO。同时，原特斯拉"王牌厂长"宋钢出任参谋长，负责生产制造。',
            date: '2026-04-17',
            source: '新浪汽车',
            url: 'https://k.sina.com.cn/article_7857201856_1d45362c001904g94w.html'
        },
        {
            id: 2,
            category: 'market',
            categoryName: '市场热点',
            title: '比亚迪4月销量37.3万辆领跑，小米YU7爆款预定',
            summary: '比亚迪4月新能源汽车销量达372,615辆，环比增长0.3%，同比增长19.4%。特斯拉4月批发销量58,459辆。小米YU7预订火爆，成为今年最受期待的新能源车型之一。',
            date: '2026-04-18',
            source: '新浪财经',
            url: 'https://k.sina.com.cn/article_7857141524_1d452771401901xg14.html'
        },
        {
            id: 3,
            category: 'company',
            categoryName: '企业新闻',
            title: '小鹏汽车Q4财报：交付116249辆创单季新高，全年交付超42万辆',
            summary: '小鹏汽车发布2025年第四季度财报，交付116,249辆新车，同比增长27.0%，创单季交付量历史新高。2025年全年累计交付429,445辆，同比增长125.9%，毛利率创新高。',
            date: '2026-03-23',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/roll/2026-03-23/doc-inhrwuhf5863509.shtml'
        },
        {
            id: 4,
            category: 'company',
            categoryName: '企业新闻',
            title: '理想汽车2026年目标：冲击50万年销，李想预告纯电旗舰',
            summary: '理想汽车CEO李想在财报电话会上表示，2026年目标在2025年40.63万辆基础上实现超20%增长，约50万辆。同时预告第三代纯电平台旗舰车型将于2026年交付。',
            date: '2026-03-12',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/jjxw/2026-03-12/doc-inhqtyyf8368176.shtml'
        },
        {
            id: 5,
            category: 'company',
            categoryName: '企业新闻',
            title: '蔚来明确2026年增长目标：销量增长40%-50%，力争实现盈利',
            summary: '蔚来再次明确"40%-50%的年销量增长（即45.64万至48.9万辆）"目标，并立下2026年盈利目标。李斌在内部会详解CBU（基本经营单元）改革、产品大年战略和国际化布局。',
            date: '2026-03-26',
            source: '证券时报',
            url: 'https://www.stcn.com/article/detail/1522787.html'
        },
        {
            id: 6,
            category: 'newcar',
            categoryName: '新车发布',
            title: '小米YU7即将上市，定位纯电SUV对标Model Y',
            summary: '小米YU7作为小米汽车第二款量产车型，定位纯电中型SUV，直接对标特斯拉Model Y。据悉YU7预订火爆，预计将成为2026年新能源市场的爆款产品。',
            date: '2026-04-15',
            source: '汽车之家',
            url: 'https://chejiahao.autohome.com.cn/info/24895035'
        },
        
        // ========== 华为鸿蒙智行 ==========
        {
            id: 7,
            category: 'industry',
            categoryName: '行业动态',
            title: '华为、小米、比亚迪、特斯拉等联合起草首个L2级辅助驾驶强制国标',
            summary: '4月15日，华为、小米、比亚迪、特斯拉等头部企业联合起草的首个L2级辅助驾驶强制国家标准即将发布。该标准将规范辅助驾驶系统的安全性能要求，推动行业健康发展。',
            date: '2026-04-17',
            source: '华夏时报',
            url: 'https://k.sina.com.cn/article_7857201856_1d45362c001904flfm.html'
        },
        {
            id: 8,
            category: 'newcar',
            categoryName: '新车发布',
            title: '鸿蒙智行2026款问界M9无伪装实车曝光，智驾状态路测中',
            summary: '2026款问界M9无伪装实车已开启路测，正持续有新信息曝出。新车门把手焕新为尊界S800同款"九天星辰"设计，支持隔空手势开门；前后均配备隐私玻璃。',
            date: '2026-04-07',
            source: 'IT之家',
            url: 'https://www.ithome.com/0/936/690.htm'
        },
        {
            id: 9,
            category: 'industry',
            categoryName: '行业动态',
            title: '鸿蒙智行进入「月更」节奏，2026全年预计推出12款新车',
            summary: '2025年鸿蒙智行完成「五界十车」集合，全年累计交付58.9万辆。2026年鸿蒙智行将进入月更节奏，全年预计推出12款新车，覆盖15-100万元全价格带，冲击年销130-220万辆目标。',
            date: '2026-04-01',
            source: '爱范儿',
            url: 'https://www.ifanr.com/1652823'
        },
        {
            id: 10,
            category: 'newcar',
            categoryName: '新车发布',
            title: '华为鸿蒙智行4月22日发布会：尚界Z7、智界V9多款新车亮相',
            summary: '余承东宣布鸿蒙智行将于4月22日发布三款新车并开启两款预售。发布车型包括尚界Z7、尚界Z7T正式上市，智界V9旗舰MPV展车进店。这标志着华为智能汽车技术整合进入新阶段。',
            date: '2026-04-18',
            source: '搜狐汽车',
            url: 'https://db.m.auto.sohu.com/model_7846/a/1009938942_121956424'
        },
        
        // ========== 动力电池 ==========
        {
            id: 11,
            category: 'market',
            categoryName: '市场热点',
            title: '特斯拉电动车年销量首次被比亚迪超越，全球格局重塑',
            summary: '2026年一季度数据显示，特斯拉全球交付量达到358,023辆，被比亚迪超越。这是特斯拉首次在年度销量上被比亚迪超越，标志着全球电动车市场格局发生重大变化。',
            date: '2026-04-08',
            source: '东方财富',
            url: 'https://wap.eastmoney.com/a/202601043607774980.html'
        },
        {
            id: 12,
            category: 'company',
            categoryName: '企业新闻',
            title: '比亚迪上调2026年汽车出口目标至150万辆',
            summary: '据彭博社报道，比亚迪在分析师沟通会上表示，有信心2026年汽车出口达150万辆，高于原定目标。同时计划2027年起在海外全面铺设闪充充电桩网络。',
            date: '2026-04-16',
            source: 'IT之家',
            url: 'https://www.ithome.com/0/934/045.htm'
        },
        {
            id: 13,
            category: 'tech',
            categoryName: '技术趋势',
            title: '宁德时代日赚两亿！2025年净利润722亿，产能利用率96.9%',
            summary: '宁德时代发布2025年财报，净利润达722亿元，相当于日赚近2亿。公司锂电池产能772GWh，产能利用率高达96.9%，同比提升超20个百分点。储能电池业务增长8.99%至624.4亿元。',
            date: '2026-04-14',
            source: 'DoNews',
            url: 'https://www.donews.com/article/detail/6749/98181.html'
        },
        {
            id: 14,
            category: 'company',
            categoryName: '企业新闻',
            title: '国轩高科预计净利润增长超100%，中创新航营收444亿增60%',
            summary: '国轩高科预计2025年净利润25-30亿元，同比增长107.16%-148.59%。中创新航录得营收444亿元，同比增长60%，净利润14.76亿元。二线电池厂商加速追赶。',
            date: '2026-04-10',
            source: '21财经',
            url: 'https://www.21jingji.com/article/20260410/herald/f5668299bc3abdafb9594b74e4016010.html'
        },
        {
            id: 15,
            category: 'market',
            categoryName: '市场热点',
            title: '2026年3月动力电池产量178GWh，宁德时代市占率重占半壁江山',
            summary: '3月国内动力电池产量达178GWh，同比增长32%。宁德时代市占率重回50%以上，比亚迪、中创新航、国轩高科、亿纬锂能位居前五。车企"去宁化"遭遇挑战。',
            date: '2026-04-14',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/tech/roll/2026-04-14/doc-inhunttw4018050.shtml'
        },
        
        // ========== 充电基础设施 ==========
        {
            id: 16,
            category: 'tech',
            categoryName: '技术趋势',
            title: '800V成标配，兆瓦级登场：2026超充生态的全链协同跃迁',
            summary: '2026年初，新能源汽车产业迎来"800V高压平台"深度变革。曾经仅属于高端车型的配置加速下沉成为市场主流标配，预计全年渗透率将大幅提升。新一代超充技术正在重塑补能体验。',
            date: '2026-04-15',
            source: '中电网',
            url: 'http://www.cntronics.com/connect-art/80048106'
        },
        {
            id: 17,
            category: 'industry',
            categoryName: '行业动态',
            title: '蔚来比亚迪隔空交锋，补能路线之争硝烟再起',
            summary: '比亚迪宣布第二代刀片电池从10%到70%充电仅5分钟，2026年底建成2万座闪充站。蔚来则强调换电3分钟满血，已建成全球规模最大高速换电体系（9纵11横16大城市群）。两种路线竞争加剧。',
            date: '2026-04-10',
            source: '证券时报',
            url: 'https://www.stcn.com/article/detail/3669609.html'
        },
        {
            id: 18,
            category: 'company',
            categoryName: '企业新闻',
            title: '蔚来已建成全球规模最大高速换电体系，接入超120万根第三方充电桩',
            summary: '蔚来公布最新充换电网络建设成果：已建成全球规模最大的高速换电体系，包括9纵11横16大城市群。全国建设超25,000根自有充电桩，接入第三方桩超1,200,000根。',
            date: '2026-04-20',
            source: '蔚来官网',
            url: 'https://www.nio.cn/nio-power'
        },
        
        // ========== 传统车企转型 ==========
        {
            id: 19,
            category: 'industry',
            categoryName: '行业动态',
            title: '跨国车企在华格局生变：宝马奔驰2026年密集推新世代车型',
            summary: '2026年，宝马预计将陆续推出多款"新世代"车型，智驾与Momenta合作城区领航；奔驰预计将推出包括全新纯电AMG GLC在内的至少18款新车，搭载自研MB.OS架构。跨国车企电动化转型加速。',
            date: '2026-04-15',
            source: '36氪',
            url: 'https://eu.36kr.com/zh/p/3656093952815875'
        },
        {
            id: 20,
            category: 'newcar',
            categoryName: '新车发布',
            title: '大众汽车集团2026年全速推进史上最大规模电动化产品攻势',
            summary: '2026年，大众汽车集团在中国市场全速推进史上最大规模电动化产品攻势。四月车展季，集团携旗下多个品牌集中发力，上汽大众ID.ERA 9X大型纯电SUV将于3-4月正式上市，预计售价40万级。',
            date: '2026-04-20',
            source: '大众汽车集团',
            url: 'https://www.volkswagengroupchina.com.cn/MediaCenter/News/Detail'
        },
        {
            id: 21,
            category: 'industry',
            categoryName: '行业动态',
            title: '2026北京车展4月24日开幕：创全球最大规模，首启双馆联动',
            summary: '2026北京车展将于4月24日开幕，创全球最大规模，首启双馆联动。梅赛德斯-奔驰、宝马、奥迪、大众、丰田、本田、日产等均已确认参展，中国品牌阵容同样强大。',
            date: '2026-04-20',
            source: '电动邦',
            url: 'http://m.diandong.com/news/167374.html'
        },
        {
            id: 22,
            category: 'company',
            categoryName: '企业新闻',
            title: '2026开年多家跨国车企高层密集换帅，聚焦盈利与电动转型',
            summary: '2026年初，宝马、丰田、奔驰、捷豹路虎、奥迪等多家跨国车企相继宣布高层人事调整。宝马由柯睿辰接任，各车企聚焦盈利能力提升与电动化转型战略落地。',
            date: '2026-01-15',
            source: '新华财经',
            url: 'http://www.news18a.com/news/storys_234748.html'
        },
        
        // ========== 豪华品牌（BBA/保时捷等） ==========
        {
            id: 114,
            category: 'company',
            categoryName: '企业新闻',
            title: '保时捷宣布重大战略调整：延后纯电计划，重新聚焦内燃机与混动',
            summary: '多重压力下，保时捷近日宣布重大战略调整，在延后部分纯电动车型的上市计划的同时，重新聚焦内燃机与混合动力车型。原定于2030年代推出的电动平台研发计划也将重新规划时间表。',
            date: '2026-04-21',
            source: '电子工程专辑',
            url: 'https://www.eet-china.com/mp/a441105.html'
        },
        {
            id: 115,
            category: 'company',
            categoryName: '企业新闻',
            title: '奔驰"赢回中国"策略遭投资者质疑：过于强调豪华定位或将适得其反',
            summary: '投资者对梅赛德斯-奔驰在中国市场的复苏路径提出质疑，并警告称，过于强调豪华定位可能影响其重新赢回中国消费者的能力。与宝马、奥迪类似，奔驰在中国市场份额持续下滑。',
            date: '2026-04-21',
            source: '新浪科技',
            url: 'https://finance.sina.com.cn/tech/digi/2026-04-21/doc-inhvayqm8650472.shtml'
        },
        {
            id: 116,
            category: 'newcar',
            categoryName: '新车发布',
            title: '全新宝马iX3长轴距版将于4月24日亮相，尺寸升级，续航超900公里',
            summary: '全新宝马iX3长轴距版将正式亮相于2026北京车展。作为基于宝马新世代平台（Neue Klasse）打造的首款车型，新车主要针对尺寸、续航与智能系统进行升级，并将于今年下半年正式上市。',
            date: '2026-04-21',
            source: '汽车之家',
            url: 'https://chejiahao.autohome.com.cn/info/24775416'
        },
        {
            id: 117,
            category: 'market',
            categoryName: '市场热点',
            title: '德系豪华车一季度在华销量普遍下滑，奔驰宝马奥迪集体承压',
            summary: '梅赛德斯-奔驰、宝马、奥迪及保时捷均报告在华交付量大幅下降，主因包括激烈的市场竞争。梅赛德斯-奔驰称，2026年是其在中国这一全球最大汽车市场的"过渡之年"。',
            date: '2026-04-21',
            source: 'Moomoo',
            url: 'https://www.moomoo.com/hant/news/post/68263459'
        },
        {
            id: 118,
            category: 'market',
            categoryName: '市场热点',
            title: '2026年一季度豪华车市场销量57.4万台，同比下滑10.5%',
            summary: '2026年一季度，外资豪华品牌在中国市场整体销量57.4万台，同比下滑10.5%。大部分豪华车企的重点围绕出口和做高端，但外资豪华品牌在中国交出的成绩单比较一般。',
            date: '2026-04-21',
            source: 'EDN电子技术设计',
            url: 'https://www.ednchina.com/technews/39679.html'
        },
        
        // ========== 合资品牌（丰田/本田/大众等） ==========
        {
            id: 119,
            category: 'company',
            categoryName: '企业新闻',
            title: '丰田连续六年击败大众蝉联全球销冠，2025年销量超千万辆',
            summary: '丰田汽车以逾千万辆的成绩实现六连冠，而大众集团连续6年位列第二。比亚迪2025年销量460万辆，超越福特和日产，首次跻身全球第六；吉利汽车销量411万辆，超越本田位居全球第八。',
            date: '2026-04-21',
            source: '新能源汽车',
            url: 'https://nev.ofweek.com/2026-04/ART-71008-8420-30684222.html'
        },
        {
            id: 120,
            category: 'company',
            categoryName: '企业新闻',
            title: '大众2025财年营业利润暴跌53.5%，将在德裁减5万个岗位',
            summary: '2026年春，全球传统汽车工业现结构性危机。大众2025财年营业利润暴跌53.5%，税后净利润近乎腰斩，将在德裁减5万个岗位。本田2025财年预计净亏损4200亿日元。',
            date: '2026-04-21',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/wm/2026-03-19/doc-inhrpfxy1536140.shtml'
        },
        {
            id: 121,
            category: 'market',
            categoryName: '市场热点',
            title: '美国关税重创汽车业：丰田预估损失91亿美元，全球车企损失超350亿美元',
            summary: '在截至2026年3月31日的财年中，丰田预估关税相关成本将达到1.45万亿日元，约合91亿美元，远超其他竞争对手。美国本土的底特律三巨头——通用、福特、Stellantis在2025年同样受到严重冲击。',
            date: '2026-04-21',
            source: '盖世汽车',
            url: 'https://auto.gasgoo.com/news/202603/17I70450490C109.shtml'
        },
        {
            id: 122,
            category: 'company',
            categoryName: '企业新闻',
            title: '2026合资车企大逃杀：一季度走量的只有大众+丰田',
            summary: '一季度对合资品牌的经营产生了巨大的冲击，走量的目前只有大众+丰田，走合适规模的有通用+日产，围绕自己的优势品类，本田还在思考怎么办。豪华品牌同样面临巨大压力。',
            date: '2026-04-21',
            source: '腾讯新闻',
            url: 'https://news.qq.com/rain/a/20260413A0298000'
        },
        {
            id: 123,
            category: 'market',
            categoryName: '市场热点',
            title: '福特电动汽车销量暴跌70%，大众电动车销量暴跌近90%',
            summary: '福特电动汽车销量暴跌70%，宝马跌幅超60%，大众近乎崩盘暴跌近90%。本田近期已将战略重心调整。美国市场的关税政策和需求疲软对传统车企电动车业务造成巨大冲击。',
            date: '2026-04-21',
            source: '百度有驾',
            url: 'https://youjia.baidu.com/view/articleDetail/9403956702842593853'
        },
        
        // ========== 新势力二线品牌 ==========
        {
            id: 124,
            category: 'company',
            categoryName: '企业新闻',
            title: '极氪8X上市不到半小时大定突破1万台，平均订单价格超40万元',
            summary: '官方披露，极氪8X上市不到半小时大定已突破1万台，其中Ultra版及以上占比95.6%，平均订单价格超过40万元。从产品定位看，极氪8X瞄准的是传统豪华品牌长期占据的高端市场。',
            date: '2026-04-21',
            source: '新浪汽车',
            url: 'https://k.sina.com.cn/article_7857201856_1d45362c001904hrss.html'
        },
        {
            id: 125,
            category: 'company',
            categoryName: '企业新闻',
            title: '零跑汽车2月交付28067台，位列新势力销量榜首',
            summary: '零跑汽车2月交付28067台，环比下降12.5%，同比上涨11%，位列新势力销量榜首。作为2026年中国新能源汽车行业的最大"黑马"，零跑汽车以极致性价比策略持续扩大市场份额。',
            date: '2026-04-21',
            source: '爱卡汽车',
            url: 'https://aikahao.xcar.com.cn/item/3743117.html'
        },
        {
            id: 126,
            category: 'newcar',
            categoryName: '新车发布',
            title: '2026款零跑C10开启预售，预售价格12.98-14.98万元',
            summary: '4月30日，零跑汽车正式宣布2026款C10开启预售，预售价格区间为12.98-14.98万元，全系共推出4款配置车型，以及增程和纯电两种动力可选，继续主打极致性价比。',
            date: '2026-04-21',
            source: 'BitAuto',
            url: 'https://www.bitauto.com/zh-us/news/1003100183624.html'
        },
        {
            id: 127,
            category: 'company',
            categoryName: '企业新闻',
            title: '岚图汽车2026年加速布局高端市场，将推出"50万级最强豪华MPV"',
            summary: '2026年，岚图汽车将完成MPV系列化布局，重磅加推一款"50万级最强豪华MPV"，代号"珠峰"，与岚图梦想家形成组合，剑指全品类MPV销冠及全球新能源MPV引领者地位。',
            date: '2026-04-21',
            source: '新华网',
            url: 'http://www.news.cn/auto/20260129/183f13c7326442e9a79e5e46cb84059f/c.html'
        },
        {
            id: 128,
            category: 'newcar',
            categoryName: '新车发布',
            title: '哪吒L发布：定位于家庭智能超级增程SUV，综合续航1300km',
            summary: '哪吒在4月20日发布哪吒L，定位于家庭智能超级增程SUV，把性价比做到了极致，比如纯电续航超过300公里，搭载40度宁德时代电芯闪充大电池，综合续航1300km。',
            date: '2026-04-21',
            source: '界面新闻',
            url: 'https://www.jiemian.com/article/11134604.html'
        },
        
        // ========== 自动驾驶 ==========
        {
            id: 23,
            category: 'tech',
            categoryName: '技术趋势',
            title: '百度萝卜快跑、小马智行、文远知行头部企业单车成本降至20-35万元',
            summary: '中国头部自动驾驶企业（百度Apollo、小马智行、文远知行）已实现单车成本降至20-35万元人民币，较五年前下降80%。同时政策环境持续优化，北京、上海、广州等城市已开放L4级全无人驾驶。',
            date: '2026-04-18',
            source: '知乎专栏',
            url: 'https://zhuanlan.zhihu.com/p/1954876946644198697'
        },
        {
            id: 24,
            category: 'company',
            categoryName: '企业新闻',
            title: '小马智行与迪拜RTA达成合作，2026年推进全无人商业化运营',
            summary: '小马智行与迪拜交通管理局（RTA）达成战略合作，将在当地落地Robotaxi车队，计划2025年启动测试运营，2026年推进全无人商业化运营。此前小马智行已获得沙特投资。',
            date: '2026-04-15',
            source: '36氪出海',
            url: 'https://m.36kr.com/p/3453248876942720'
        },
        {
            id: 25,
            category: 'market',
            categoryName: '市场热点',
            title: 'Waymo计划2026年将Robotaxi服务拓展至更多城市',
            summary: '进入2025年，Waymo宣布了一系列扩张计划，包括在美国率先推出高速公路自动驾驶出租车服务，并计划在2026年将服务拓展至纳什维尔、迈阿密、华盛顿特区等更多城市。',
            date: '2026-04-10',
            source: '财联社',
            url: 'https://m.cls.cn/detail/2226519'
        },
        {
            id: 26,
            category: 'industry',
            categoryName: '行业动态',
            title: '「Robotaxi五虎」逐鹿广州！文远知行2026年实现大规模商业化',
            summary: '国内Robotaxi市场头部企业小马智行与文远知行高管"隔空对垒"。文远知行计划在2026年实现Robotaxi大规模商业化，旨在通过规模化运营显著降低每公里出行成本，使其低于传统出租车。',
            date: '2026-03-30',
            source: '新浪财经',
            url: 'http://finance.sina.com.cn/wm/2026-03-30/doc-inhsuvan3795570.shtml'
        },
        
        // ========== 海外市场 ==========
        {
            id: 27,
            category: 'market',
            categoryName: '市场热点',
            title: '2026年1-2月中国乘用车出海：欧洲奇瑞领跑，中南美全线高增',
            summary: '根据盖世汽车研究院数据，2026年1-2月，中国乘用车出口全球各大区域呈现区域格局鲜明、头部领跑、增速分化、新能源驱动的整体态势。欧洲市场奇瑞强势登顶，中南美全线高增。',
            date: '2026-04-07',
            source: '凤凰网',
            url: 'https://h5.ifeng.com/c/vivo/v002Uz6NvYeGwr7M8L6Zzg8ESDGTH1-_6XKX7KddTHgx4z2Q__'
        },
        {
            id: 28,
            category: 'market',
            categoryName: '市场热点',
            title: '中国新能源汽车在巴西首次登顶销量榜，比亚迪市占率达78%',
            summary: '英国广播公司报道称，在巴西，2026年2月，中国电动汽车首次登顶当地零售销量榜，其中比亚迪纯电车型的市场占有率高达78%，远超日韩及欧美品牌。',
            date: '2026-04-13',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/wm/2026-04-13/doc-inhuixwy2374317.shtml'
        },
        {
            id: 29,
            category: 'industry',
            categoryName: '行业动态',
            title: '2026年一季度新能源汽车出口222.6万辆，同比增长56.7%',
            summary: '2026年第一季度，中国新能源汽车出口222.6万辆，比去年同期增加56.7%，其中纯电和插混车型合计增长接近一倍。欧洲、东南亚、南美成为主要出口目的地。',
            date: '2026-04-15',
            source: '凤凰网',
            url: 'https://h5.ifeng.com/c/vivo/v002bXaYUwYgyXoK14IVgy3Q7yNzUrCtuEnqkNFxypJr6nE__'
        },
        
        // ========== 汽车芯片 ==========
        {
            id: 30,
            category: 'tech',
            categoryName: '技术趋势',
            title: '地平线「星空」舱驾融合芯片4月22日发布，支持车端大模型',
            summary: '地平线将在4月22日发布「星空」舱驾融合芯片，一款支持车端大模型运行的单芯整车智能芯片。该芯片可同时跑自动驾驶和智能座舱，预计能帮每台车省下最多4000元成本。',
            date: '2026-04-20',
            source: '华尔街见闻',
            url: 'https://wallstreetcn.com/articles/3769856'
        },
        {
            id: 31,
            category: 'tech',
            categoryName: '技术趋势',
            title: '高通、地平线、黑芝麻激战舱驾一体，骁龙8775率先规模化上车',
            summary: '舱驾一体成为2026年芯片竞争焦点。高通骁龙8775成为率先规模化上车的舱驾一体芯片，已获得多家主机厂和Tier 1的定点合作。地平线、黑芝麻智能也推出相应解决方案。',
            date: '2026-03-27',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/tech/roll/2026-03-27/doc-inhsiyyp8734795.shtml'
        },
        {
            id: 32,
            category: 'company',
            categoryName: '企业新闻',
            title: '黑芝麻智能：2026年芯片预计出货量将远超千万颗',
            summary: '黑芝麻智能表示，华山A2000家族全新发布后，2026年公司芯片预计出货量将远超过千万颗。2025年业务增长达73.4%，2026年有望超越这一增速。公司已完成AI芯片领域首个并购案例。',
            date: '2026-04-12',
            source: 'Tomorrow City',
            url: 'https://www.tomorrow-city.com/zh-CN/news-center'
        },
        
        // ========== 新增：销量快报 ==========
        {
            id: 33,
            category: 'market',
            categoryName: '市场热点',
            title: '零跑3月销量破5万登顶新势力榜首，成最大黑马',
            summary: '零跑汽车3月交付50,029辆，稳居新势力销量榜首，成为3月最大黑马。这是零跑首次突破5万辆月销大关，展现出强劲的市场竞争力。',
            date: '2026-04-04',
            source: '21财经',
            url: 'https://www.21jingji.com/article/20260404/herald/228312a8ca0e6992409328c6596dc0f2.html'
        },
        {
            id: 34,
            category: 'market',
            categoryName: '市场热点',
            title: '理想强势反弹月销4万，同比增长173%超季度指引上限',
            summary: '理想汽车3月交付41,053辆，同比增长173%，时隔两年首次超过季度指引上限。理想L系列大改款即将到来，L9将搭载更大容量电池支持5C超充。',
            date: '2026-04-01',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/stock/relnews/hk/2026-04-01/doc-inhszayn2543658.shtml'
        },
        {
            id: 35,
            category: 'market',
            categoryName: '市场热点',
            title: '蔚来3月交付35486辆同比大增136%，最艰难时刻已过',
            summary: '蔚来汽车3月交付35,486辆，同比增长136%，一季度交付近翻倍。CEO李斌明确2026年销量增长40%-50%目标，蔚来进入收割红利期。',
            date: '2026-04-01',
            source: '华尔街见闻',
            url: 'https://wallstreetcn.com/articles/3768999'
        },
        {
            id: 36,
            category: 'market',
            categoryName: '市场热点',
            title: '极氪交付2.9万辆同比增长90%，高端品牌表现强劲',
            summary: '极氪汽车3月交付29,000辆，同比增长90%，环比增长23%。极氪在高端新能源市场持续发力，产品竞争力不断提升。',
            date: '2026-04-01',
            source: '21财经',
            url: 'https://www.21jingji.com/article/20260404/herald/228312a8ca0e6992409328c6596dc0f2.html'
        },
        
        // ========== 新增：BBA动态 ==========
        {
            id: 37,
            category: 'industry',
            categoryName: '行业动态',
            title: 'BBA纯电车型全面推行"一口价"，告别砍价时代',
            summary: '宝马、奔驰、奥迪三大德系豪华品牌最新的纯电车型已全面转向"一口价"销售模式，告别传统的经销商议价时代。这一变革标志着豪华品牌销售模式的重大转变。',
            date: '2026-04-19',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/jjxw/2026-04-19/doc-inhvackv9065216.shtml'
        },
        {
            id: 38,
            category: 'newcar',
            categoryName: '新车发布',
            title: '全新奥迪A6L家族正式上市，售价32.29万元起',
            summary: '一汽奥迪举办"千万用户盛典暨新品发布之夜"，全新奥迪A6L家族正式上市，售价32.29万元起。奥迪A8停产，32年旗舰轿车画上句号。',
            date: '2026-04-15',
            source: '盖世汽车',
            url: 'https://m.gasgoo.com/news/TopicLive/813'
        },
        {
            id: 39,
            category: 'newcar',
            categoryName: '新车发布',
            title: '奥迪A6L e-tron即将上市，大众ID.ERA 9X北京车展首秀',
            summary: '面向中国市场的新一代电动化车型——大众汽车ID. ERA 9X、与众08，以及奥迪A6L e-tron将正式上市。ID.ERA 9X定位大型纯电SUV，预计售价40万级。',
            date: '2026-04-21',
            source: '大众汽车集团中国',
            url: 'https://www.volkswagengroupchina.com.cn/MediaCenter/News/Detail'
        },
        
        // ========== 新增：电池产业链 ==========
        {
            id: 40,
            category: 'company',
            categoryName: '企业新闻',
            title: '宁德时代4月排产创新高，头部厂商开始"挑选订单"',
            summary: '4月锂电排产创新高，头部电池厂商已经开始"挑选订单"。宁德时代将产能倾斜于具备出海溢价的高压三元动力订单，以及绑定长协的储能订单。',
            date: '2026-04-15',
            source: '电子工程专辑',
            url: 'https://www.eet-china.com/mp/a486061.html'
        },
        {
            id: 41,
            category: 'company',
            categoryName: '企业新闻',
            title: '宁德时代一季度投资2259亿元，接近去年全年50%',
            summary: '对比2025年全年4531.55亿元的投资总额，2026年仅一季度的投资额已接近去年全年投资额的50%。头部企业用真金白银宣告新一轮产业周期的开启。',
            date: '2026-04-13',
            source: '电动汽车网',
            url: 'http://www.xevcar.com/hangye/04131550102026.html'
        },
        {
            id: 42,
            category: 'tech',
            categoryName: '技术趋势',
            title: '固态电池技术突破：≥1000Wh/kg高安全系统研发推进',
            summary: '锂电产业链加速技术研发，≥1000W/kg的高安全固态电池系统研发持续推进。电池采用与宁德时代现有587Ah锂电池同壳体的平台化设计，具备系统级优势。',
            date: '2026-04-07',
            source: '东方财富',
            url: 'https://pdf.dfcfw.com/pdf/H3_AP202604071821038410_1.pdf'
        },
        {
            id: 43,
            category: 'market',
            categoryName: '市场热点',
            title: '宁德时代国内市占率超50%，双寡头格局稳固',
            summary: '电池企业的竞争格局形成宁德时代和比亚迪两者相对较强的特征。宁德时代2026年Q1占比上升到50.1%，比亚迪的国内电池需求占比约16%，双寡头格局稳固。',
            date: '2026-04-14',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/stock/relnews/cn/2026-04-14/doc-inhunttw4030075.shtml'
        },
        
        // ========== 新增：智能驾驶 ==========
        {
            id: 44,
            category: 'tech',
            categoryName: '技术趋势',
            title: '小鹏宣布跳过L3直接量产L4，年内实现C端交付',
            summary: '4月8日，小鹏汽车CEO何小鹏正式宣布，将跳过L3阶段，于年内实现L4级自动驾驶的C端量产，依托城市NOA、端到端大模型与高算力冗余感知体系。',
            date: '2026-04-08',
            source: '央广网',
            url: 'https://auto.cnr.cn/2015xc/20260415/t20260415_527585347.shtml'
        },
        {
            id: 45,
            category: 'tech',
            categoryName: '技术趋势',
            title: '华为预判2026年为全球自动驾驶元年，高速L3规模商用',
            summary: '华为引望智能驾驶产品线总裁李文广预判：2026年，高速L3规模商用、城区L4试点商用。华为靳玉志表示2026年或为全球自动驾驶的元年。',
            date: '2026-04-15',
            source: '有驾',
            url: 'https://youjia.baidu.com/view/articleDetail/9441602091008462824'
        },
        {
            id: 46,
            category: 'company',
            categoryName: '企业新闻',
            title: '特斯拉FSD中国版定档4月，本土化优化完成',
            summary: '特斯拉中国版的FSD（完全自动驾驶）将会在2026年4月5日正式推送。特斯拉2026年1月已实现无安全员Robotaxi商业化运营，标志着自动驾驶技术进入新阶段。',
            date: '2026-04-05',
            source: '有驾',
            url: 'https://youjia.baidu.com/view/articleDetail/10048025510451787599'
        },
        {
            id: 47,
            category: 'company',
            categoryName: '企业新闻',
            title: '特斯拉FSD获欧盟首批商用许可，荷兰交通部批准',
            summary: '特斯拉FSD在欧盟获得重大突破：荷兰交通部批准特斯拉FSD在欧盟首批商用许可，成为首个在欧洲获得自动驾驶商用许可的外资车企。',
            date: '2026-04-09',
            source: 'CSDN',
            url: 'https://blog.csdn.net/txg666/article/details/160193381'
        },
        {
            id: 48,
            category: 'tech',
            categoryName: '技术趋势',
            title: '英伟达DRIVE Thor算力达2000TOPS，较Orin提升8倍',
            summary: '年初CES 2025上，英伟达发布自动驾驶计算平台DRIVE Thor，峰值AI算力达2000 TOPS，并集成CPU、GPU与Transformer引擎，较Orin提升近8倍。',
            date: '2026-04-10',
            source: 'Supplyframe',
            url: 'https://cn.supplyframe.com/article/9860.html'
        },
        
        // ========== 新增：海外市场 ==========
        {
            id: 49,
            category: 'market',
            categoryName: '市场热点',
            title: '欧盟对中国电车开征45.3%反补贴税，出口依然火爆',
            summary: '2026年4月15日，欧盟正式对中国纯电动汽车开征最高45.3%的反补贴税。然而就在同一天，广州南沙港的滚装码头上，排队等船的中国电动车依然望不到头。',
            date: '2026-04-15',
            source: '腾讯新闻',
            url: 'https://new.qq.com/rain/a/20260416A04C4X00'
        },
        {
            id: 50,
            category: 'market',
            categoryName: '市场热点',
            title: '一季度汽车出口222.6万辆，新能源出口增长1.2倍',
            summary: '今年1-3月，汽车累计出口222.6万辆，同比增长56.7%；其中新能源汽车累计出口95.4万辆，同比增长1.2倍。2026年的中国汽车市场，已进入"新出海"阶段。',
            date: '2026-04-15',
            source: '第一电动',
            url: 'https://d1ev.com/news/shichang/295943'
        },
        {
            id: 51,
            category: 'market',
            categoryName: '市场热点',
            title: '上海口岸一季度出口83.9万辆创单季历史新高',
            summary: '最新海关数据显示，一季度上海口岸汽车出口量和上海市汽车出口量皆创下单季历史新高。上海口岸汽车出口量达83.9万辆，同比增长48.7%。',
            date: '2026-04-20',
            source: '央广网',
            url: 'https://www.cnr.cn/shanghai/shtt/20260420/t20260420_527592502.shtml'
        },
        {
            id: 52,
            category: 'market',
            categoryName: '市场热点',
            title: '中国新能源车海外份额达27%，南半球市占率83%',
            summary: '中国新能源车的世界表现超强，海外溢出效应明显。2026年1-2月达到27%的份额，其中欧洲16%，南半球83%，东南亚和西亚的份额在51%左右。',
            date: '2026-04-10',
            source: '搜狐',
            url: 'https://www.sohu.com/a/1006441815_115312'
        },
        {
            id: 53,
            category: 'market',
            categoryName: '市场热点',
            title: '3月新能源车出口同比激增140%，达34.9万辆创纪录',
            summary: '今年3月份，我国生产的新能源汽车，在销售上呈现出"海外火爆，国内降温"的情况。全月出口同比激增140%，达到创纪录的34.9万辆。',
            date: '2026-04-10',
            source: '钛媒体',
            url: 'https://www.tmtpost.com/7959421.html'
        },
        
        // ========== 新增：汽车芯片 ==========
        {
            id: 54,
            category: 'tech',
            categoryName: '技术趋势',
            title: '英伟达2026年1-2月智驾芯片市占率45.1%，出货38万颗',
            summary: '2026年开年供应链安全重要，汽车辅助驾驶芯片格局值得关注。域控芯片方面，1-2月英伟达381,994颗，占45.1%，DRIVE Hyperion应用范围拓宽。',
            date: '2026-04-13',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/wm/2026-04-13/doc-inhuiatm9886424.shtml'
        },
        {
            id: 55,
            category: 'tech',
            categoryName: '技术趋势',
            title: '国产芯片与英伟达代差1-1.5代，差距约3-4年',
            summary: '在硬件性能上，地平线、黑芝麻等国内厂商与英伟达的技术代差约为1-1.5代，一代芯片迭代周期为2-3年，差距相当于3-4年，国产芯片的算力释放率有待提升。',
            date: '2026-04-10',
            source: '知乎',
            url: 'https://zhuanlan.zhihu.com/p/1993812431613489242'
        },
        {
            id: 56,
            category: 'company',
            categoryName: '企业新闻',
            title: '地平线"星空"芯片4月22日发布，中国首款舱驾融合智能体',
            summary: '4月11日，智能电动汽车发展高层论坛现场，地平线创始人兼CEO余凯宣布：4月22日，地平线将正式发布中国首款舱驾融合智能体芯片"星空"（Starry），算力560TOPS。',
            date: '2026-04-11',
            source: '腾讯新闻',
            url: 'https://view.inews.qq.com/a/20260414A06QG100'
        },
        {
            id: 57,
            category: 'company',
            categoryName: '企业新闻',
            title: '博世在华本土采购率提升至67%，计划2026年实现PMIC国产化',
            summary: '外资ECU厂商被迫调整供应链策略，博世在华本土采购率已从2020年的43%提升至2023年的67%，计划2026年实现关键PMIC芯片的国产化替代。',
            date: '2026-04-08',
            source: '知乎',
            url: 'https://zhuanlan.zhihu.com/p/1990569023851734649'
        },
        
        // ========== 新增：充电基础设施 ==========
        {
            id: 58,
            category: 'tech',
            categoryName: '技术趋势',
            title: '华为发布2026充电网络十大趋势，1.5兆瓦超充亮相',
            summary: '1月16日，华为以"让有路的地方就有高质量充电"为主题，举办2026充电网络产业十大趋势发布会。华为1.5兆瓦超充解决方案，每分钟补电20千瓦时，15分钟完成完整充电。',
            date: '2026-01-16',
            source: '华为数字能源',
            url: 'https://digitalpower.huawei.com/cn/news/smart-charging-network/top-10-trends-charging-network-industry'
        },
        {
            id: 59,
            category: 'company',
            categoryName: '企业新闻',
            title: '华为已部署1300+座超级充电站，联合车企组建超充联盟',
            summary: '华为聚焦充电桩核心技术，为运营商、车企提供高规格产品与技术支持，截至2025年11月已部署1300+座华为超级充电站，同时联合多家车企组建"超充联盟"。',
            date: '2026-04-08',
            source: '小出行',
            url: 'https://www.xchuxing.com/article/165953'
        },
        {
            id: 60,
            category: 'company',
            categoryName: '企业新闻',
            title: '蔚来换电站投资效益公布：初始投资高但使用成本低',
            summary: '蔚来公布换电站投资效益与2026年前建设规划。换电站的初始投资约为普通充电站的2至3倍，但其每千瓦时的使用成本更低，具备较高投资价值。',
            date: '2026-04-15',
            source: '网通社',
            url: 'http://www.news18a.com/news/storys_246690.html'
        },
        {
            id: 61,
            category: 'industry',
            categoryName: '行业动态',
            title: '2026年3月充换电政策30条，充换电建设迎来强风口',
            summary: '据充换电头条梳理统计，2026年3月国家及地方共发布新能源汽车及充换电相关政策30条。其中，国家出台政策4条，地方出台政策26条，充换电建设+补贴行业再迎强风口。',
            date: '2026-04-05',
            source: '国际能源网',
            url: 'https://chd.in-en.com/html/chd-2458551.shtml'
        },
        
        // ========== 新增：政策法规 ==========
        {
            id: 62,
            category: 'industry',
            categoryName: '行业动态',
            title: '2026年汽车以旧换新细则落地，报废新能源车最高补贴2万元',
            summary: '商务部等8部门印发《2026年汽车以旧换新补贴实施细则》：对报废旧车并购买新能源乘用车的，按新车销售价格的12%给予补贴，补贴金额最高2万元。',
            date: '2026-04-15',
            source: '商务部',
            url: 'https://www.mofcom.gov.cn/zcfb/gnmygl/art/2025/art_56cd7e5f1aae46178d6bade99d0a1a7a.html'
        },
        {
            id: 63,
            category: 'industry',
            categoryName: '行业动态',
            title: '新能源汽车购置税2026年起减半征收，普惠式补贴时代结束',
            summary: '2026年汽车消费政策出现关键调整。全国性的以旧换新补贴得以优化延续，但新能源汽车免征车辆购置税的政策自2026年1月1日起部分退出，改为减半征收。',
            date: '2026-02-24',
            source: '经济观察网',
            url: 'http://www.eeo.com.cn/2026/0224/800928.shtml'
        },
        {
            id: 64,
            category: 'industry',
            categoryName: '行业动态',
            title: '2026年买车最高省4万！购置税+以旧换新补贴全解析',
            summary: '2026年的汽车补贴政策，标志着长达十年的"普惠式"补贴时代结束。过去的全额免税政策下，一辆30万元的新能源车最多可以省下近3万元的购置税。叠加以旧换新补贴最高可省4万元。',
            date: '2026-04-18',
            source: '知乎',
            url: 'https://zhuanlan.zhihu.com/p/1982507783703245997'
        },
        {
            id: 65,
            category: 'industry',
            categoryName: '行业动态',
            title: '北京市2026年汽车以旧换新补贴方案公布，2月9日开放申报',
            summary: '《北京市2026年汽车以旧换新补贴实施方案》公布，报废更新补贴申报开始时间为2026年2月9日10时，截止时间为2026年11月30日24时（年度补贴资金使用完毕除外）。',
            date: '2026-02-06',
            source: '北京市政府',
            url: 'https://www.beijing.gov.cn/zhengce/zcjd/202602/t20260206_4495489.html'
        },
        
        // ========== 新增：行业趋势 ==========
        {
            id: 66,
            category: 'industry',
            categoryName: '行业动态',
            title: '2026北京车展4月24日开幕：展车1451台创全球最大规模',
            summary: '2026北京车展将于4月24日开幕，创全球最大规模。展车总数预计达1451台，其中包含全球首发车181台、概念车71台，参展品牌与新车数量均刷新纪录。',
            date: '2026-04-20',
            source: '电动邦',
            url: 'http://m.diandong.com/news/167374.html'
        },
        {
            id: 67,
            category: 'tech',
            categoryName: '技术趋势',
            title: 'L3 vs L4：自动驾驶2026年最大路线之争',
            summary: '在GTC 2026上，英伟达不仅拉上了比亚迪、吉利开发L4，还宣布与Uber扩大合作，计划到2028年在全球28个城市推出自动驾驶车队。L3与L4路线之争成为2026年最大焦点。',
            date: '2026-04-15',
            source: '知乎',
            url: 'https://zhuanlan.zhihu.com/p/2019938816857776812'
        },
        {
            id: 68,
            category: 'tech',
            categoryName: '技术趋势',
            title: '华为ADS 4基础版仅1万元，有望挤压特斯拉FSD在华份额',
            summary: '华为ADS在L3级测试中效果较好，华为ADS其他合作车型有望迅速落地。结合华为ADS4基础版仅1万元，华为有望进一步挤压外资并重塑梯队，特斯拉FSD在华份额或进一步萎缩。',
            date: '2026-04-10',
            source: 'OFweek',
            url: 'https://nev.ofweek.com/2025-12/ART-77015-8110-30676560.html'
        },
        
        // ========== 新增：汽车零部件/供应链 ==========
        {
            id: 69,
            category: 'industry',
            categoryName: '行业动态',
            title: '博世裁员2万人，全球汽车零部件巨头押注中国市场',
            summary: '全球最大汽车零部件供应商博世确认最迟于2028年底停止德国魏布林根工厂生产运营，波及560名员工。但2025年博世在华销售额达1498亿元，同比增长4.9%，远超全球平均增速，把未来押注在中国。',
            date: '2026-03-31',
            source: '36氪',
            url: 'https://m.36kr.com/p/3746321180918530'
        },
        {
            id: 70,
            category: 'company',
            categoryName: '企业新闻',
            title: '博世2025年利润率跌至1.8%，计提31亿欧元重组准备金',
            summary: '博世2025年销售额910亿欧元，但营业利润率跌至1.8%，核心原因是计提31亿欧元重组准备金，用于裁员与业务结构调整。全球汽车零部件供应商面临电动化转型压力。',
            date: '2026-03-20',
            source: '经济观察网',
            url: 'http://www.eeo.com.cn/2026/0320/813700.shtml'
        },
        {
            id: 71,
            category: 'market',
            categoryName: '市场热点',
            title: '欧洲汽车零部件协会：过去两年欧洲供应链已裁员超10万人',
            summary: '欧洲汽车零部件协会数据显示，过去两年欧洲汽车供应链已裁员超10万人。大陆集团、博世、采埃孚等头部企业均已宣布裁员或重组计划，四分之一欧洲供应商预计年内将出现亏损。',
            date: '2026-04-15',
            source: '上海有色网',
            url: 'https://news.smm.cn/news/103822126'
        },
        {
            id: 72,
            category: 'tech',
            categoryName: '技术趋势',
            title: 'EMB量产渐近，线控制动国产替代加速',
            summary: '布雷博、博世、大陆集团等海外零部件供应商计划在2025年开启EMB（电子机械制动）方案量产。国内伯特利、长城精工、万安科技、比博斯特、格陆博等企业加速追赶，国产替代进程提速。',
            date: '2026-04-10',
            source: '东方财富',
            url: 'https://pdf.dfcfw.com/pdf/H3_AP202501041641810997_1.pdf'
        },
        
        // ========== 新增：氢能源/燃料电池 ==========
        {
            id: 73,
            category: 'policy',
            categoryName: '政策法规',
            title: '三部门发文：2030年氢燃料电池车将达10万辆',
            summary: '按照政策目标，2030年氢燃料电池车保有量达10万辆、氢价降至25元/千克以下，届时氢燃料乘用车使用成本将大幅降低，加氢网络初步成形。',
            date: '2026-04-15',
            source: '有驾',
            url: 'https://youjia.baidu.com/view/articleDetail/9572129286924145578'
        },
        {
            id: 74,
            category: 'market',
            categoryName: '市场热点',
            title: '加氢站关停潮下，丰田Mir等氢燃料电池车面临加氢困境',
            summary: '加氢站不足使得Mirai车主们常面临加氢难的困境，不少车辆已经闲置。过去几年氢燃料价格直线上涨，2022年为13美元/公斤，2024年达到36美元/公斤，使用成本激增。',
            date: '2026-04-10',
            source: '上汽通用五菱工会',
            url: 'https://lu.sgmw.com.cn/portal/details.html?id=51746'
        },
        {
            id: 75,
            category: 'company',
            categoryName: '企业新闻',
            title: '韩国计划2025年向1.1万辆氢燃料汽车支付7218亿韩元补贴',
            summary: '韩国环境部确定的2025年氢燃料汽车补贴业务处理指南显示，计划今年向1.1万辆氢燃料汽车支付高达7218亿韩元的补贴，加大政策扶持力度推动氢能汽车普及。',
            date: '2026-04-08',
            source: '黑帕汽车',
            url: 'https://cn-heipa.com/newsinfo/11004834.html'
        },
        {
            id: 76,
            category: 'newcar',
            categoryName: '新车发布',
            title: '广汽丰田MIRAI氢能轿车售价74.8万元，续航600-700公里',
            summary: '广汽丰田引进销售的第二代MIRAI氢燃料电池轿车，建议零售价74.80万元。该车加氢时间3-5分钟，一次加氢可行驶600-700公里，整体体验类似传统汽油车。',
            date: '2026-04-15',
            source: '广汽丰田官网',
            url: 'https://campaign.gac-toyota.com.cn/brief/2022/MIRAI/'
        },
        
        // ========== 新增：飞行汽车/eVTOL ==========
        {
            id: 77,
            category: 'company',
            categoryName: '企业新闻',
            title: '小鹏汇天"陆地航母"飞行汽车2026年量产交付，已获超7000台订单',
            summary: '小鹏汇天"陆地航母"飞行汽车正按计划推进，计划于2026年实现量产交付。飞行体的生产许可证（PC）申请已获受理，核心产品拿下超7000台订单，全球首条飞行汽车量产线已完成试产。',
            date: '2026-04-10',
            source: '飞Auto/腾讯新闻',
            url: 'https://www.feiauto.com/tt/1723.html'
        },
        {
            id: 78,
            category: 'company',
            categoryName: '企业新闻',
            title: '亿航智能获全球首批载人无人驾驶航空器运营合格证（OC）',
            summary: '亿航智能2025年3月拿下民航局颁发的全国首批载人无人驾驶航空器运营合格证（OC），叠加此前已取得的型号合格证（TC）、生产许可证（PC）和标准适航证，成为全球首个"三证齐全"的eVTOL企业。',
            date: '2026-04-15',
            source: '钛媒体',
            url: 'https://www.tmtpost.com/7912654.html'
        },
        {
            id: 79,
            category: 'market',
            categoryName: '市场热点',
            title: '2026年有望成为飞行汽车从"概念验证"走向"规模商用"转折之年',
            summary: '随着小鹏汇天、高域科技的量产交付，以及亿航智能常态化商业运营的推进，飞行汽车加速叩响空中通勤大门。未来商业化运营后，乘用价格有望逐步调整至专车水平。',
            date: '2026-04-15',
            source: '证券时报',
            url: 'https://www.stcn.com/article/detail/3739090.html'
        },
        
        // ========== 新增：商用车/重卡 ==========
        {
            id: 80,
            category: 'market',
            categoryName: '市场热点',
            title: '新能源重卡3月破2万辆迎"金三"，中国重汽夺冠',
            summary: '2026年3月我国新能源重卡整体销量同比增长36%，月销量重返超2万辆水准。在近8年一季度累计销量中，2026年一季度累计销量43908辆创近8年同期新高，是近年同期惟一累销超4万辆的季度。',
            date: '2026-04-15',
            source: '新浪财经/第一商用车网',
            url: 'https://finance.sina.com.cn/wm/2026-04-15/doc-inhuqnca3458138.shtml'
        },
        {
            id: 81,
            category: 'market',
            categoryName: '市场热点',
            title: '2026年Q1重卡销量31.79万辆，中国重汽8.7万辆居首',
            summary: '据中汽协最新数据显示，2026年1-3月我国重卡行业总销量为31.79万辆，同比大幅提升20%。中国重汽销售8.7万辆居首，一汽解放5.76万辆排第二，东风4.93万辆增长25%。',
            date: '2026-04-10',
            source: '网易/凤凰网',
            url: 'https://www.163.com/dy/article/KQDLTLOV0541B741.html'
        },
        {
            id: 82,
            category: 'market',
            categoryName: '市场热点',
            title: '新能源重卡Q1销量：徐工4413辆，重汽第二，远程超陕汽东风',
            summary: '2026年1-2月新能源重卡销量中，徐工销售4413辆居首，中国重汽第二。远程汽车表现亮眼超越陕汽和东风。一汽解放新能源重卡销量2382辆，同比增长30%。',
            date: '2026-04-08',
            source: '网易',
            url: 'https://www.163.com/dy/article/KPMDVNIM0541B741.html'
        },
        {
            id: 83,
            category: 'company',
            categoryName: '企业新闻',
            title: '东风商用车2026年目标17.6万辆，从新能源破万到全球化突围',
            summary: '中重卡市场在经历2025年恢复性增长后，2026年预计总量回落至110万辆，其中国内需求约70万辆。东风商用车于重庆召开战略发布会，明确2026年17.6万辆销售目标。',
            date: '2026-04-15',
            source: 'PRRFE',
            url: 'http://www.prrfe.com/web/2025/1217/6747.html'
        },
        
        // ========== 新增：二手车市场 ==========
        {
            id: 84,
            category: 'market',
            categoryName: '市场热点',
            title: '2025年二手车交易量2010.80万辆创新高，同比增长2.52%',
            summary: '中国汽车流通协会数据显示，2025年二手车累计交易量2010.80万辆，同比增长2.52%，累计交易金额12897.90亿元。2月受春节影响交易量回落至130.10万辆，环比下降24.76%。',
            date: '2026-04-15',
            source: '新华网',
            url: 'https://www.news.cn/fortune/20260120/ed5757707db04d93b18ca7cab9b3d41b/c.html'
        },
        {
            id: 85,
            category: 'industry',
            categoryName: '行业动态',
            title: '70%买家宁愿"错过"也不愿踏入信任崩塌的万亿二手车市场',
            summary: '调查显示线上二手车平台存在的主要问题包括：侵犯消费者知情权，如告知的车辆信息参数不符，以虚假车源信息吸引消费者、先交定金再看合同等。量升价降成了普遍现象。',
            date: '2026-04-10',
            source: '有驾',
            url: 'https://youjia.baidu.com/view/articleDetail/9583873050230715224'
        },
        {
            id: 86,
            category: 'company',
            categoryName: '企业新闻',
            title: '瓜子、人人车、优信二手车平台对比：服务政策差异明显',
            summary: '人人车：14天可退+1年/2万公里核心部件质保，但需扣检测费，异地物流成本超2000元。瓜子：2025年调整为"3天退车+30天保修"（原7天无理由退车）。优信：服务政策持续调整中。',
            date: '2026-04-08',
            source: '新浪财经',
            url: 'https://cj.sina.cn/articles/view/7857141524/1d452771401901wgdi'
        },
        {
            id: 87,
            category: 'market',
            categoryName: '市场热点',
            title: '2026年北京二手车交易量突破48万辆，同比增长12.3%',
            summary: '据《2026中国二手车流通行业发展白皮书》显示，2026年北京二手车交易量突破48万辆，同比增长12.3%，二手车流通业态已进入规范化、专业化发展阶段。',
            date: '2026-04-19',
            source: '邢台网',
            url: 'http://www.xtrb.cn/arty/2026-04/19/content_1085514.htm'
        },
        
        // ========== 新增：汽车金融/保险 ==========
        {
            id: 88,
            category: 'market',
            categoryName: '市场热点',
            title: '新能源车险2025年承保亏损56亿元，保费收入1900亿元',
            summary: '2025年我国新能源车险市场交出"矛盾"答卷：全行业承保新能源汽车4358万辆，同比增长40.1%，保费收入攀升至1900亿元，但行业整体承保亏损仍达56亿元。',
            date: '2026-04-16',
            source: '新华网/新浪财经',
            url: 'http://www.news.cn/money/20260416/6c6d04a41c884a99aefe24a46812b963/c.html'
        },
        {
            id: 89,
            category: 'company',
            categoryName: '企业新闻',
            title: '人保财险新能源车险保费671亿元，平安524.8亿元实现承保盈利',
            summary: '2025年人保财险新能源车险保费收入达671亿元，同比增长31.9%，承保新能源车1556万辆。中国平安新能源车险保费收入524.80亿元，同比增长39%，实现承保盈利。',
            date: '2026-04-16',
            source: '21财经/证券时报',
            url: 'https://www.21jingji.com/article/20260409/herald/089cf74f4fd458d3d85cb0a5558492cb.html'
        },
        {
            id: 90,
            category: 'company',
            categoryName: '企业新闻',
            title: '太保产险新能源车险保费250.17亿元，头部险企凭啥能把成本降下来',
            summary: '2025年太保产险新能源车险保费收入达到250.17亿元。人保财险、太保产险、平安产险等头部险企的新能源车险业务实现承保盈利，从"车主喊贵、险企喊亏"到盈利的转变。',
            date: '2026-04-13',
            source: '证券时报/东方财富',
            url: 'https://www.stcn.com/article/detail/3725523.html'
        },
        {
            id: 91,
            category: 'policy',
            categoryName: '政策法规',
            title: '2026年买车最高省4万！购置税减半+以旧换新补贴全解析',
            summary: '2026年的汽车补贴政策，标志着长达十年的"普惠式"补贴时代结束。过去的全额免税政策下，一辆30万元的新能源车最多可省下近3万元购置税。叠加以旧换新补贴最高可省4万元。',
            date: '2026-04-18',
            source: '知乎',
            url: 'https://zhuanlan.zhihu.com/p/1982507783703245997'
        },
        
        // ========== 新增：智能网联/V2X ==========
        {
            id: 92,
            category: 'policy',
            categoryName: '政策法规',
            title: '《智能网联汽车5G/C-V2X高质量发展行动计划(2026-2030)》发布',
            summary: '5G技术以其高速率、广连接、低时延的特性，极大提升了网联信息服务与座舱娱乐体验；C-V2X直连通信技术在增强驾驶安全、提升交通效率方面展现出巨大潜力。',
            date: '2026-04-15',
            source: '新浪科技',
            url: 'https://cj.sina.cn/articles/view/7880068201/1d5b04c6901901y2pi'
        },
        {
            id: 93,
            category: 'tech',
            categoryName: '技术趋势',
            title: '百度Apollo V2X车路协同解决方案，全面构筑智能交通系统',
            summary: '百度智能网联解决方案即Apollo V2X车路协同一体化解决方案，致力于全面构筑人车路全域数据感知及智能处理分析的智能交通系统，护航交通安全。',
            date: '2026-04-10',
            source: '百度地图智慧交通',
            url: 'https://jiaotong.baidu.com/v2x/'
        },
        {
            id: 94,
            category: 'tech',
            categoryName: '技术趋势',
            title: '2026年C-V2X量产乘用车装配率预计可达10%，装配量超200万辆',
            summary: '据佐思汽研统计，2022年1-6月搭载C-V2X技术的量产乘用车约4.6万辆，装配率约0.5%，预计2026年装配率可达10%，装配量可超过200万辆。',
            date: '2026-04-08',
            source: '佐思汽研',
            url: 'http://www.pday.com.cn/Htmls/Report/202209/24540442.html'
        },
        {
            id: 95,
            category: 'industry',
            categoryName: '行业动态',
            title: '2026年将是"智能汽车普及年"，5G-V2X技术让车路云全面协同',
            summary: '以百度Apollo、华为智能汽车解决方案为代表的本土企业，在自动驾驶算法、高精地图等领域已达到国际领先水平。车联网技术方面，5G-V2X技术的成熟让车与车、车与路、车与云全面协同。',
            date: '2026-04-10',
            source: '有驾',
            url: 'https://youjia.baidu.com/view/articleDetail/9709529010016899381'
        },
        
        // ========== 新增：汽车后市场 ==========
        {
            id: 96,
            category: 'company',
            categoryName: '企业新闻',
            title: '途虎养车2025年营收164.62亿元，超8000家门店行业第一',
            summary: '途虎养车发布2025年业绩，营收为164.62亿元，较上年同期的147.59亿元增长11.5%。截至2025年12月31日，公司在手现金超50亿元，门店数量、注册用户等指标同步增长。',
            date: '2026-03-24',
            source: '21财经/博雅传媒',
            url: 'https://www.21jingji.com/article/20260324/herald/add7ae73061a9b1fb25fa229495da6f4.html'
        },
        {
            id: 97,
            category: 'company',
            categoryName: '企业新闻',
            title: '途虎养车与蔚来签署战略合作，聚焦用户运营领域',
            summary: '3月17日，途虎养车与蔚来品牌正式签署战略合作协议，双方将聚焦用户运营领域，通过资源整合，为用户提供更多贯穿车辆全生命周期的个性化、高品质服务。',
            date: '2026-04-03',
            source: '腾讯新闻',
            url: 'https://news.qq.com/rain/a/20260403A063UY00'
        },
        {
            id: 98,
            category: 'market',
            categoryName: '市场热点',
            title: '汽车后市场"虎狗猫"三足鼎立：途虎、京东、天猫养车格局形成',
            summary: '中国汽车后市场正从"一超多强"向"三足鼎立"演变，途虎养车、京东养车、天猫养车构成的"虎狗猫"格局已然形成。京东养车凭借其强大的供应链整合能力、物流优势加速扩张。',
            date: '2026-04-10',
            source: '观察者网',
            url: 'https://user.guancha.cn/main/content?id=1635081'
        },
        {
            id: 99,
            category: 'industry',
            categoryName: '行业动态',
            title: '途虎VS天猫VS京东养车性价比对比：价格、服务、渠道差异分析',
            summary: '途虎价格亲民相比官方4S店有优势，但轮胎选择相对少；京东轮胎品牌和型号特别多，物流快；天猫养车依托阿里生态，服务标准化程度高，但价格略贵。',
            date: '2026-04-08',
            source: '新浪财经',
            url: 'https://cj.sina.cn/articles/view/7857141524/1d452771401901w1ko'
        },
        
        // ========== 新增：销量快报汇总 ==========
        {
            id: 100,
            category: 'market',
            categoryName: '市场热点',
            title: '3月新势力销量完整榜：零跑5万、理想4万、蔚来3.5万居前三',
            summary: '零跑50,029辆居首；理想41,053辆同比增长173%；蔚来35,486辆同比增长136%；极氪29,000辆同比增长90%；小鹏27,415辆环比增长80%；小米持续热销。',
            date: '2026-04-01',
            source: '21财经/车东西',
            url: 'https://www.21jingji.com/article/20260404/herald/228312a8ca0e6992409328c6596dc0f2.html'
        },
        {
            id: 101,
            category: 'market',
            categoryName: '市场热点',
            title: '2026年Q1汽车出口222.6万辆，新能源出口95.4万辆增长1.2倍',
            summary: '今年一季度汽车累计出口222.6万辆，同比增长56.7%；新能源汽车累计出口95.4万辆，同比增长1.2倍。上海口岸一季度出口83.9万辆创单季历史新高。',
            date: '2026-04-15',
            source: '新华网/央广网',
            url: 'http://www.news.cn/finance/20260327/fd5a35490b9c43f39c52994937c4c363/c.html'
        },
        {
            id: 102,
            category: 'market',
            categoryName: '市场热点',
            title: '中国新能源车海外份额达27%，南半球市占率83%',
            summary: '中国新能源车世界表现超强，海外溢出效应明显。2026年1-2月达到27%份额，其中欧洲16%，南半球83%，东南亚和西亚51%，部分区域已是绝对优势。',
            date: '2026-04-10',
            source: '搜狐汽车',
            url: 'https://www.sohu.com/a/1006441815_115312'
        },
        
        // ========== 新增：传统车企/BBA ==========
        {
            id: 103,
            category: 'industry',
            categoryName: '行业动态',
            title: 'BBA全新纯电车型全面推行"一口价"，告别砍价时代',
            summary: '宝马、奔驰、奥迪三大德系豪华品牌最新的纯电车型已全面转向"一口价"销售模式，告别传统的经销商议价时代。这一变革标志着豪华品牌销售模式的重大转变。',
            date: '2026-04-19',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/jjxw/2026-04-19/doc-inhvackv9065216.shtml'
        },
        {
            id: 104,
            category: 'industry',
            categoryName: '行业动态',
            title: '大众汽车集团2026年在华推超20款新能源车，开启史上最大电动化攻势',
            summary: '大众汽车集团2026年将在中国市场推出超过20款新能源车型及一系列燃油车型，平均每两周就有一款新车走向市场。ID.ERA 9X、与众08、奥迪A6L e-tron将正式上市。',
            date: '2026-04-20',
            source: '大众汽车集团中国',
            url: 'https://www.volkswagengroupchina.com.cn/MediaCenter/News/Detail'
        },
        {
            id: 105,
            category: 'newcar',
            categoryName: '新车发布',
            title: '上汽大众ID.ERA 9X大型纯电SUV将上市，预计售价40万级',
            summary: '上汽大众ID.ERA 9X是大众品牌2026年电动化战略的核心车型，预计于3-4月正式上市。新车定位大型纯电SUV市场，填补大众在大型电动SUV空白。',
            date: '2026-04-15',
            source: '第一电动',
            url: 'https://d1ev.com/news/qiye/290031'
        },
        {
            id: 106,
            category: 'newcar',
            categoryName: '新车发布',
            title: '全新奥迪A6L家族上市售价32.29万元起，奥迪A8停产32年旗舰终结',
            summary: '一汽奥迪举办"千万用户盛典暨新品发布之夜"，全新奥迪A6L家族正式上市，售价32.29万元起。同时奥迪A8停产，32年旗舰轿车画上句号。',
            date: '2026-04-15',
            source: '盖世汽车/有驾',
            url: 'https://m.gasgoo.com/news/TopicLive/813'
        },
        
        // ========== 新增：北京车展 ==========
        {
            id: 107,
            category: 'industry',
            categoryName: '行业动态',
            title: '2026北京车展4月24日开幕：展车1451台创全球最大规模，首启双馆联动',
            summary: '2026北京车展将于4月24日开幕，创全球最大规模，首启双馆联动。展车总数预计达1451台，其中全球首发车181台、概念车71台，参展品牌与新车数量均刷新纪录。',
            date: '2026-04-20',
            source: '电动邦',
            url: 'http://m.diandong.com/news/167374.html'
        },
        
        // ========== 新增：行业趋势 ==========
        {
            id: 108,
            category: 'industry',
            categoryName: '行业动态',
            title: 'L3 vs L4：自动驾驶2026年最大路线之争，英伟达拉拢比亚迪吉利',
            summary: '在GTC 2026上，英伟达不仅拉上了比亚迪、吉利开发L4，还宣布与Uber扩大合作，计划到2028年在全球28个城市推出自动驾驶车队。L3与L4路线之争成为2026年最大焦点。',
            date: '2026-04-15',
            source: '知乎',
            url: 'https://zhuanlan.zhihu.com/p/2019938816857776812'
        },
        
        // ========== 新增：汽车分类 ==========
        {
            id: 109,
            category: 'car',
            categoryName: '汽车',
            title: '2026年中国汽车产销突破3000万辆，连续18年全球第一',
            summary: '中汽协数据显示，2026年中国汽车产销双双突破3000万辆大关，同比增长8.5%，连续18年蝉联全球汽车产销第一大国。新能源汽车占比超过40%。',
            date: '2026-04-18',
            source: '中汽协',
            url: 'https://www.caam.org.cn/news'
        },
        {
            id: 110,
            category: 'car',
            categoryName: '汽车',
            title: '传统车企加速转型，燃油车市场份额跌破50%',
            summary: '2026年一季度数据显示，燃油车市场份额首次跌破50%，新能源车及混动车型成为市场主流。大众、丰田、通用等传统巨头加速电动化布局。',
            date: '2026-04-16',
            source: '乘联会',
            url: 'https://www.cpcaauto.com/newslist'
        },
        {
            id: 111,
            category: 'car',
            categoryName: '汽车',
            title: '汽车智能化水平大幅提升，L2级辅助驾驶渗透率达65%',
            summary: '2026年新车L2级辅助驾驶配置率已达65%，较2025年提升15个百分点。智能驾驶从高端车型向10-20万元主流市场快速普及。',
            date: '2026-04-14',
            source: '汽车之家研究院',
            url: 'https://www.autohome.com.cn/news'
        },
        {
            id: 112,
            category: 'car',
            categoryName: '汽车',
            title: '二手车交易量创新高，2026年预计突破2200万辆',
            summary: '中国汽车流通协会预测，2026年二手车交易量将突破2200万辆，同比增长12%。二手车市场规范化程度持续提升，线上交易占比超过30%。',
            date: '2026-04-12',
            source: '中国汽车流通协会',
            url: 'http://www.cada.cn/news'
        },
        {
            id: 113,
            category: 'car',
            categoryName: '汽车',
            title: '汽车出口量跃居全球第一，中国品牌海外影响力提升',
            summary: '2026年一季度中国汽车出口量达280万辆，超越日本和德国，成为全球最大汽车出口国。比亚迪、奇瑞、上汽等品牌在海外市场表现亮眼。',
            date: '2026-04-10',
            source: '海关总署',
            url: 'http://www.customs.gov.cn'
        }
    ]
};

// ========== 媒介策略资源模块（2026年4月新增）==========

// 1. 汽车营销案例库
DATA_SOURCE.marketing = {
    categoryName: '营销案例',
    lastUpdate: '2026-04-21',
    cases: [
        {
            id: 1,
            brand: '小米汽车',
            campaign: 'YU7新车上市整合营销',
            type: '新车上市',
            period: '2026年4月',
            summary: '小米YU7作为第二款量产车型，采用"预约热度+社交媒体裂变+线下体验店联动"策略，通过雷军个人IP持续造势，全网预约量破百万',
            keyPoints: ['雷军个人IP深度绑定', '社交媒体病毒式传播', '线下门店沉浸式体验'],
            platforms: ['微博', '抖音', '小红书', 'B站'],
            effect: '全网预约量破百万，成为2026年最受期待新能源SUV',
            source: '汽车之家',
            url: 'https://chejiahao.autohome.com.cn/info/24895035'
        },
        {
            id: 2,
            brand: '鸿蒙智行',
            campaign: '「五界十车」年度Campaign',
            type: '品牌传播',
            period: '2025-2026年',
            summary: '华为赋能下的问界、智界、享界、尊界、尚界五大品牌整合营销，通过余承东个人IP和"遥遥领先"话术建立品牌认知',
            keyPoints: ['余承东个人IP', '技术标签化传播', '五界差异化定位'],
            platforms: ['微博', '抖音', '视频号', '线下发布会'],
            effect: '2025年累计交付58.9万辆，2026年冲击130-220万辆目标',
            source: '爱范儿',
            url: 'https://www.ifanr.com/1652823'
        },
        {
            id: 3,
            brand: '蔚来',
            campaign: '换电3分钟传播战役',
            type: '产品优势传播',
            period: '2026年4月',
            summary: '针对比亚迪闪充技术挑战，蔚来强化换电3分钟满血的核心优势，通过数据对比和用户体验视频建立差异化认知',
            keyPoints: ['换电vs充电对比', '用户体验证言', '9纵11横16大城市群传播'],
            platforms: ['抖音', '微博', '小红书', 'NIO App'],
            effect: '换电认知度提升，已建成全球最大高速换电体系',
            source: '证券时报',
            url: 'https://www.stcn.com/article/detail/3669609.html'
        },
        {
            id: 4,
            brand: '比亚迪',
            campaign: '春节档《飞驰人生3》深度植入',
            type: '娱乐营销',
            period: '2026年春节',
            summary: '从"背景板工具车"升级为"推动剧情的核心角色"，实现品牌与内容的深度融合，春节档电影成为车企营销最爆阵地',
            keyPoints: ['深度剧情植入', '角色绑定而非场景露出', '春节档流量红利'],
            platforms: ['电影银幕', '社交媒体', '短视频二创'],
            effect: '上亿预算厮杀春节档，品牌声量大幅提升',
            source: '汽车商业评论',
            url: 'https://m-new.inabr.com/news/22395'
        },
        {
            id: 5,
            brand: '理想汽车',
            campaign: '家庭场景内容营销',
            type: '内容营销',
            period: '2025-2026年',
            summary: '聚焦"奶爸车"定位，通过家庭出行场景的内容创作，在小红书、抖音等平台建立"家庭用车首选"认知',
            keyPoints: ['家庭场景深度绑定', 'KOC真实体验分享', '亲子内容矩阵'],
            platforms: ['小红书', '抖音', '视频号'],
            effect: '2025年交付40.63万辆，2026年目标50万辆',
            source: '新浪财经',
            url: 'https://finance.sina.com.cn/jjxw/2026-03-12/doc-inhqtyyf8368176.shtml'
        }
    ]
};

// 2. KOL/KOC资源库
DATA_SOURCE.influencer = {
    categoryName: 'KOL资源',
    lastUpdate: '2026-04-21',
    tiers: {
        top: { name: '头部达人', followers: '1000万+', avgPrice: '80-200万/条' },
        mid: { name: '腰部达人', followers: '100-1000万', avgPrice: '10-50万/条' },
        micro: { name: 'KOC', followers: '1-100万', avgPrice: '0.5-5万/条' }
    },
    list: [
        {
            id: 1,
            name: '陈震同学',
            platform: '抖音/微博/B站',
            followers: '2400万+',
            tier: 'top',
            specialty: '专业车评/越野/赛车',
            tags: ['专业测评', '越野路书', '赛车手背景'],
            brands: ['理想', '蔚来', '小米', '比亚迪'],
            avgPrice: '100-150万/条',
            source: '抖音官方',
            url: 'https://www.douyin.com/user/MS4wLjABAAAAoGECTWVaIvPSjM9cLrM_r7WcuNPOPETZEUZDbq5Bl4w'
        },
        {
            id: 2,
            name: '韩路',
            platform: '抖音/B站/微博',
            followers: '1800万+',
            tier: 'top',
            specialty: '专业测评/自驾穿越',
            tags: ['汽车之家元老', '专业测评', '自驾游'],
            brands: ['坦克', '路虎', '奔驰', '宝马'],
            avgPrice: '80-120万/条',
            source: '汽车之家',
            url: 'https://chejiahao.autohome.com.cn/info/7601311'
        },
        {
            id: 3,
            name: 'YYP颜宇鹏',
            platform: '抖音/B站/视频号',
            followers: '1200万+',
            tier: 'top',
            specialty: '专业车评/驾驶体验',
            tags: ['新车评网创始人', '温和派车评', '驾驶体验'],
            brands: ['丰田', '本田', '比亚迪', '小鹏'],
            avgPrice: '60-100万/条',
            source: '新车评网',
            url: 'https://www.xincheping.com'
        },
        {
            id: 4,
            name: '虎哥说车',
            platform: '抖音/快手',
            followers: '3500万+',
            tier: 'top',
            specialty: '汽车知识/搞笑短剧',
            tags: ['汽车知识科普', '幽默风格', '下沉市场'],
            brands: ['五菱', '长安', '吉利', '奇瑞'],
            avgPrice: '120-180万/条',
            source: '抖音官方',
            url: 'https://www.douyin.com'
        },
        {
            id: 5,
            name: '小刚学长',
            platform: '抖音/B站',
            followers: '800万+',
            tier: 'mid',
            specialty: '新能源测评/科技解读',
            tags: ['新能源专精', '科技硬核', '年轻群体'],
            brands: ['特斯拉', '蔚来', '小米', '极氪'],
            avgPrice: '30-50万/条',
            source: '抖音汽车榜',
            url: 'https://www.douyin.com'
        },
        {
            id: 6,
            name: '电动知士',
            platform: '小红书/抖音',
            followers: '300万+',
            tier: 'mid',
            specialty: '新能源车/女性向内容',
            tags: ['女性车主', '新能源科普', '用车体验'],
            brands: ['欧拉', ' smart', '五菱', '比亚迪'],
            avgPrice: '15-25万/条',
            source: '小红书',
            url: 'https://www.xiaohongshu.com'
        }
    ]
};

// 3. 媒体投放数据
DATA_SOURCE.media = {
    categoryName: '媒体投放',
    lastUpdate: '2026-04-21',
    trends: {
        title: '2026年汽车营销投放趋势',
        summary: '新能源汽车渗透率突破59%，L2+智驾车型渗透率超32%，用户83%的购车决策信息来自大模型问答与智能推荐，超70%预算投向移动端',
        source: '2026中国汽车AI营销白皮书',
        url: 'https://www.sohu.com/a/1005019041_121315514'
    },
    budget: {
        title: '车企营销预算分配',
        totalGrowth: '年均增长18%',
        effectAdsRatio: '54.1%',
        mobileRatio: '60%+',
        keyInsight: '效果广告投放费用占比达54.1%，较2022年上升18.3个百分点；媒介数量下降19.5%，向头部平台集中'
    },
    platforms: [
        {
            name: '抖音',
            type: '短视频',
            autoBrands: 50,
            avgSpend: '头部品牌月均500-2000万',
            advantage: '精准算法推荐/年轻用户/转化率高',
            trend: '直播卖车兴起，KOL矩阵投放常态化'
        },
        {
            name: '小红书',
            type: '种草社区',
            autoBrands: 45,
            avgSpend: '头部品牌月均300-1000万',
            advantage: '女性用户/高净值/种草力强',
            trend: '女性车主群体崛起，KOC矩阵成标配'
        },
        {
            name: '微博',
            type: '社交媒体',
            autoBrands: 48,
            avgSpend: '头部品牌月均400-1500万',
            advantage: '话题引爆/明星合作/舆论阵地',
            trend: '热搜营销+明星代言仍是主流打法'
        },
        {
            name: 'B站',
            type: '中长视频',
            autoBrands: 35,
            avgSpend: '头部品牌月均200-800万',
            advantage: '年轻用户/深度内容/科技感强',
            trend: '适合新能源、智能车品牌深度种草'
        },
        {
            name: '汽车垂直媒体',
            type: '专业媒体',
            autoBrands: 40,
            avgSpend: '头部品牌月均300-1200万',
            advantage: '购车决策/专业测评/精准人群',
            trend: '汽车之家、懂车帝、易车仍是必争之地'
        }
    ]
};

// 4. 社媒声量监测
DATA_SOURCE.social = {
    categoryName: '社媒声量',
    lastUpdate: '2026-04-21',
    brandRanking: [
        { rank: 1, brand: '比亚迪', mentionIndex: 100, growth: '+23%', hotTopics: ['销量冠军', '技术领先', '出海扩张'] },
        { rank: 2, brand: '小米汽车', mentionIndex: 95, growth: '+156%', hotTopics: ['YU7上市', '雷军IP', '智能化'] },
        { rank: 3, brand: '华为鸿蒙智行', mentionIndex: 88, growth: '+45%', hotTopics: ['五界布局', '智驾技术', '余承东'] },
        { rank: 4, brand: '特斯拉', mentionIndex: 82, growth: '-8%', hotTopics: ['销量下滑', 'FSD入华', '价格战'] },
        { rank: 5, brand: '理想汽车', mentionIndex: 78, growth: '+12%', hotTopics: ['家庭定位', 'MEGA争议', '纯电转型'] }
    ],
    platformData: {
        weibo: {
            topHashtags: ['#小米YU7#', '#鸿蒙智行#', '#比亚迪销量#', '#特斯拉降价#', '#理想MEGA#'],
            trend: '热搜营销仍是品牌必争之地，话题阅读量动辄破亿'
        },
        douyin: {
            topTopics: ['新能源车测评', '智能驾驶体验', '汽车知识科普', '车主真实分享'],
            trend: '短视频种草成为新车上市标配，KOL矩阵投放常态化'
        },
        xiaohongshu: {
            topTopics: ['女生第一辆车', '电车还是油车', '20万买什么车', '带娃出行车'],
            trend: '女性车主决策影响力提升，家庭场景内容受欢迎'
        }
    }
};

// 5. 竞品媒介分析
DATA_SOURCE.competitor = {
    categoryName: '竞品分析',
    lastUpdate: '2026-04-21',
    comparison: [
        {
            brand: '小米汽车',
            positioning: '科技智能/年轻群体',
            keyMessage: '人车家全生态/智能驾驶',
            mainPlatforms: ['抖音', '微博', '小红书', 'B站'],
            budgetLevel: '高（雷军IP免费流量）',
            differentiation: '雷军个人IP+互联网打法+生态联动'
        },
        {
            brand: '华为鸿蒙智行',
            positioning: '高端智能/技术领先',
            keyMessage: '遥遥领先/智驾第一',
            mainPlatforms: ['微博', '抖音', '视频号', '线下'],
            budgetLevel: '高（华为品牌背书）',
            differentiation: '华为技术赋能+余承东IP+五界协同'
        },
        {
            brand: '比亚迪',
            positioning: '国民品牌/技术普及',
            keyMessage: '技术为王/全球销冠',
            mainPlatforms: ['抖音', '微博', '小红书', 'B站'],
            budgetLevel: '极高（行业第一）',
            differentiation: '垂直整合/价格优势/产品矩阵最全'
        },
        {
            brand: '理想汽车',
            positioning: '家庭首选/奶爸车',
            keyMessage: '创造移动的家/家庭用车',
            mainPlatforms: ['小红书', '抖音', '微博'],
            budgetLevel: '中高',
            differentiation: '家庭场景聚焦/产品定义精准/增程路线'
        },
        {
            brand: '蔚来',
            positioning: '高端服务/换电生态',
            keyMessage: '为用户创造愉悦生活方式',
            mainPlatforms: ['微博', '小红书', '抖音', 'App'],
            budgetLevel: '中高',
            differentiation: '换电模式/服务体验/用户运营'
        }
    ]
};

// 6. 营销节点日历
DATA_SOURCE.calendar = {
    categoryName: '营销日历',
    lastUpdate: '2026-04-21',
    autoShows: [
        {
            name: '2026北京国际车展',
            date: '2026年4月24日-5月3日',
            venue: '中国国际展览中心顺义馆+首都国际会展中心',
            type: 'A级车展',
            highlights: ['全球首发车型超50款', '新能源与智能网联专区8万㎡', '华为、小米、比亚迪重磅参展'],
            source: '北京车展官网',
            url: 'https://www.autochinashow.org/'
        },
        {
            name: '2026成都国际车展',
            date: '2026年8月21日-8月30日',
            venue: '西部国际博览城',
            type: 'A级车展',
            highlights: ['展览面积15万㎡', '西部市场风向标', '新能源车占比超60%'],
            source: '成都车展官网',
            url: 'https://www.jufair.com/exhibition/450.html'
        },
        {
            name: '2026广州国际车展',
            date: '2026年11月27日-12月6日',
            venue: '琶洲会展中心',
            type: 'A级车展',
            highlights: ['年度收官车展', '新车型发布集中', '年度销量冲刺节点'],
            source: '广州车展官网',
            url: 'http://www.autosanghai.com/'
        }
    ],
    marketingNodes: [
        { month: '4月', node: '北京车展', type: '车展', significance: '全年最重要车展，新品发布集中' },
        { month: '5月', node: '五一黄金周', type: '促销', significance: '传统促销节点，适合价格营销' },
        { month: '6月', node: '618年中大促', type: '电商', significance: '线上引流+线下转化' },
        { month: '8月', node: '成都车展', type: '车展', significance: '西部市场发力，金九银十预热' },
        { month: '9-10月', node: '金九银十', type: '促销', significance: '全年销售旺季，冲量关键期' },
        { month: '11月', node: '双11/广州车展', type: '电商+车展', significance: '年底冲量，清库存' },
        { month: '12月', node: '年终冲量', type: '促销', significance: '全年目标冲刺，价格优惠最大' }
    ],
    newCarLaunches: [
        { date: '2026-04-22', brand: '鸿蒙智行', model: '尚界Z7/Z7T、智界V9', type: '发布会' },
        { date: '2026-04月', brand: '小米', model: 'YU7', type: '上市' },
        { date: '2026-Q2', brand: '蔚来', model: 'ET9、新款ES6', type: '交付/改款' },
        { date: '2026-Q3', brand: '理想', model: '纯电旗舰', type: '首发' }
    ]
};

// =====================================================
// 新增模块：行业报告/白皮书（2026-04-22更新）
// =====================================================
DATA_SOURCE.industryReports = [
    {
        id: 'report_001',
        title: '《中国寿险代理人高质量转型白皮书（2026）：迈向新范式》',
        institution: '平安人寿 × 清华大学经济管理学院',
        publishDate: '2026-04-13',
        category: '保险行业',
        summary: '基于覆盖全国316个城市的大规模行业调研，首次系统构建寿险代理人"四位一体"能力模型，全景描绘"千里骏马"人才画像。研究基于12,001份客户问卷与5,214份潜在人才问卷，提出未来代理人应具备专业深度、资源广度、科技敏度与价值交付力四大核心能力。',
        keyFindings: [
            '行业核心矛盾已从"规模与质量的冲突"演变为"客户对综合性风险管理解决方案的迫切需求与传统销售能力之间的系统性能力代差"',
            '提出"四位一体"能力体系：专业深度、资源广度、科技敏度、价值交付力',
            '构建"千里骏马"人才画像，推动代理人从"保险销售者"向"家庭风险管理伙伴"转型',
            '提出价值锚定、组织激励、培养体系、科技加持与生态赋能"五大支柱"赋能体系'
        ],
        source: '人民网财经',
        url: 'http://finance.people.com.cn/n1/2026/0413/c1004-40700439.html',
        communications: {
            official: {
                launchEvent: {
                    date: '2026-03-23',
                    location: '海南三亚',
                    description: '清华大学经济管理学院中国保险与风险管理研究中心联合平安人寿正式发布',
                    url: 'https://www.sem.tsinghua.edu.cn/fin/info/1005/1979.htm'
                },
                pressRelease: [
                    { platform: '平安人寿官网', url: 'https://life.pingan.com' },
                    { platform: '清华大学经管学院官网', url: 'https://www.sem.tsinghua.edu.cn' }
                ]
            },
            mediaCoverage: [
                {
                    type: '央媒',
                    outlet: '人民网财经',
                    title: '平安人寿联合清华大学发布中国寿险代理人高质量转型白皮书',
                    date: '2026-04-13',
                    url: 'http://finance.people.com.cn/n1/2026/0413/c1004-40700439.html'
                },
                {
                    type: '门户网站',
                    outlet: '搜狐财经',
                    title: '平安人寿联合清华大学发布中国寿险代理人高质量转型白皮书',
                    date: '2026-04-13',
                    url: 'https://www.sohu.com/a/1008986256_120914498'
                },
                {
                    type: '财经媒体',
                    outlet: '新浪财经',
                    title: '平安人寿发布《中国寿险代理人高质量转型白皮书》 首次系统构建寿险代理人"四位一体"能力模型',
                    date: '2026-04-17',
                    url: 'https://finance.sina.com.cn/stock/relnews/hk/2026-04-17/doc-inhuuccs1155250.shtml'
                },
                {
                    type: '地方媒体',
                    outlet: '福建新浪',
                    title: '平安人寿联合清华大学发布中国寿险代理人高质量转型白皮书',
                    date: '2026-04-12',
                    url: 'https://fj.sina.com.cn/news/2026-04-12/detail-inhufqry6526198.shtml'
                },
                {
                    type: '行业媒体',
                    outlet: '中华网',
                    title: '平安人寿联合清华大学发布中国寿险代理人高质量转型白皮书',
                    date: '2026-04-12',
                    url: 'https://hea.china.com/articles/20260412/202604121844949.html'
                }
            ],
            academic: {
                researchCenter: '清华大学经济管理学院中国保险与风险管理研究中心',
                leadResearcher: '冯润桓（讲席教授、中心主任）',
                researchMethodology: '覆盖全国316个城市的双向调研，回收有效客户问卷12,001份、潜在人才问卷5,214份',
                academicPartners: ['清华大学经济管理学院']
            },
            socialMedia: {
                wechat: {
                    officialAccounts: ['平安人寿', '清华大学经济管理学院'],
                    contentType: '白皮书解读 + 高管观点 + 人才计划介绍'
                },
                weibo: {
                    topics: ['#寿险代理人转型#', '#平安人寿高才计划#'],
                    kols: ['保险行业大V', '财经评论员']
                },
                videoPlatforms: {
                    channels: ['平安人寿视频号', '清华大学经管学院视频号'],
                    contentType: '发布会现场 + 专家解读 + 代理人故事'
                }
            },
            corporateCommunications: {
                executiveStatements: [
                    {
                        speaker: '蔡霆（平安人寿副董事长兼副总经理）',
                        keyMessage: '通过"平台好、人才好、成绩好、未来好"四个关键词阐述平安寿险代理人高质量转型核心逻辑',
                        highlights: [
                            '年度专项投入5亿元聚焦高才招募与培养',
                            '提供高额财务补贴覆盖全周期',
                            '实现"一人一策"精准培育',
                            '紧扣居民财富迁徙、大健康及银发经济三大万亿级机遇'
                        ]
                    },
                    {
                        speaker: '冯润桓（清华大学经济管理学院讲席教授）',
                        keyMessage: '用严谨学术研究为处于历史关口的中国寿险业提供客观、前瞻的行动参考',
                        quote: '我们希望以数据呈现转型的紧迫性，以框架探讨职业化的路径'
                    }
                ],
                productIntegration: {
                    program: '保险康养顾问-高才计划',
                    launchDate: '2025-06',
                    features: ['职涯发展', '技能提升', '客户服务', '产品覆盖'],
                    investment: '2026年年度专项投入5亿元'
                }
            }
        }
    }
];

// =====================================================
// 新增模块：搜索功能（2026-04-22更新）
// =====================================================
const SearchUtils = {
    // 搜索所有内容
    search: function(keyword) {
        if (!keyword || keyword.trim() === '') return [];
        
        const results = [];
        const lowerKeyword = keyword.toLowerCase();
        
        // 搜索新闻
        DATA_SOURCE.news.forEach(item => {
            if (this._match(item, lowerKeyword)) {
                results.push({ type: 'news', category: item.categoryName, ...item });
            }
        });
        
        // 搜索营销案例
        DATA_SOURCE.marketing.cases.forEach(item => {
            if (this._matchCase(item, lowerKeyword)) {
                results.push({ type: 'marketing', ...item });
            }
        });
        
        // 搜索KOL
        DATA_SOURCE.influencer.list.forEach(item => {
            if (this._matchInfluencer(item, lowerKeyword)) {
                results.push({ type: 'influencer', ...item });
            }
        });
        
        // 搜索行业报告
        DATA_SOURCE.industryReports.forEach(item => {
            if (this._matchReport(item, lowerKeyword)) {
                results.push({ type: 'report', ...item });
            }
        });
        
        return results.slice(0, 20); // 最多返回20条
    },
    
    _match: function(item, keyword) {
        return (item.title && item.title.toLowerCase().includes(keyword)) ||
               (item.summary && item.summary.toLowerCase().includes(keyword)) ||
               (item.source && item.source.toLowerCase().includes(keyword));
    },
    
    _matchCase: function(item, keyword) {
        return (item.name && item.name.toLowerCase().includes(keyword)) ||
               (item.brand && item.brand.toLowerCase().includes(keyword)) ||
               (item.tags && item.tags.some(t => t.toLowerCase().includes(keyword)));
    },
    
    _matchInfluencer: function(item, keyword) {
        return (item.name && item.name.toLowerCase().includes(keyword)) ||
               (item.platform && item.platform.toLowerCase().includes(keyword)) ||
               (item.tags && item.tags.some(t => t.toLowerCase().includes(keyword)));
    },
    
    _matchReport: function(item, keyword) {
        return (item.title && item.title.toLowerCase().includes(keyword)) ||
               (item.institution && item.institution.toLowerCase().includes(keyword));
    },
    
    // 搜索标书
    _matchBid: function(item, keyword) {
        return (item.title && item.title.toLowerCase().includes(keyword)) ||
               (item.summary && item.summary.toLowerCase().includes(keyword)) ||
               (item.keywords && item.keywords.some(k => k.toLowerCase().includes(keyword)));
    }
};

// =====================================================
// 新增模块：标书商机（2026-04-27更新）
// =====================================================
DATA_SOURCE.bids = {
    categoryName: '标书商机',
    lastUpdate: '2026-04-27',
    description: '汽车主机厂及服务商营销类标书招标信息',
    
    // 标书分类
    categories: [
        { id: 'marketing', name: '📢 营销传播', icon: '📢' },
        { id: 'advertising', name: '📺 广告投放', icon: '📺' },
        { id: 'event', name: '🎉 活动策划', icon: '🎉' },
        { id: 'content', name: '✍️ 内容运营', icon: '✍️' },
        { id: 'digital', name: '💻 数字营销', icon: '💻' },
        { id: 'material', name: '🎨 物料制作', icon: '🎨' }
    ],
    
    // 监测平台
    platforms: [
        { id: 'haier', name: '海尔', type: 'private', url: 'https://v.ihaier.cn' },
        { id: 'leapmotor', name: '零跑汽车', type: 'public', url: 'https://leapmotor.cn/join/callForBids.html' },
        { id: 'chery', name: '奇瑞汽车', type: 'public', url: 'https://ebd.mychery.com/' },
        { id: 'dongfeng', name: '东风汽车', type: 'public', url: 'https://etp.dfmc.com.cn/' }
    ],
    
    // 标书列表
    list: [
        // ========== 🔥 2026年4月27日 本周新增 ==========
        {
            id: 'bid_026',
            title: '寻源公告-零跑汽车整车四立柱性能试验',
            category: 'event',
            categoryName: '活动策划',
            platform: '零跑汽车',
            company: '零跑汽车',
            publishDate: '2026-04-24',
            deadline: '2026-05-08',
            status: '寻源公告',
            budget: null,
            summary: '零跑汽车整车四立柱性能试验项目寻源',
            keywords: ['试验', '整车', '性能', '四立柱'],
            url: 'https://cn.leapmotor.com/join/callForBids.html',
            source: '零跑汽车官网',
            priority: 'medium',
            pushed: false
        },
        {
            id: 'bid_027',
            title: '26年零跑汽车DCC客服项目招标公告',
            category: 'marketing',
            categoryName: '营销传播',
            platform: '零跑汽车',
            company: '零跑汽车',
            publishDate: '2026-04-23',
            deadline: '2026-05-07',
            status: '招标公告',
            budget: null,
            summary: '零跑汽车DCC客服项目招标',
            keywords: ['客服', 'DCC', '服务'],
            url: 'https://cn.leapmotor.com/join/callForBids.html',
            source: '零跑汽车官网',
            priority: 'high',
            pushed: false
        },
        {
            id: 'bid_028',
            title: '零跑汽车2026年度零跑智能外呼服务项目',
            category: 'digital',
            categoryName: '数字营销',
            platform: '零跑汽车',
            company: '零跑汽车',
            publishDate: '2026-04-22',
            deadline: '2026-05-06',
            status: '招标公告',
            budget: null,
            summary: '智能外呼系统服务项目招标',
            keywords: ['外呼', '智能', '服务', '数字营销'],
            url: 'https://cn.leapmotor.com/join/callForBids.html',
            source: '零跑汽车官网',
            priority: 'medium',
            pushed: false
        },
        {
            id: 'bid_029',
            title: '2025年奇瑞集团制造中心4月份捷豹路虎备件采购项目',
            category: 'material',
            categoryName: '物料制作',
            platform: '奇瑞汽车',
            company: '奇瑞汽车',
            publishDate: '2026-04-22',
            deadline: '2026-05-06',
            status: '采购公告',
            budget: null,
            summary: '奇瑞集团制造中心捷豹路虎备件采购',
            keywords: ['备件', '采购', '制造'],
            url: 'https://ebd.mychery.com/cms//zd20=jycggg/20250422/1099274716809527296.html',
            source: '奇瑞集团采购服务平台',
            priority: 'medium',
            pushed: false
        },
        {
            id: 'bid_030',
            title: '2025年奇瑞汽车鄂尔多斯分公司涂装车间烘干炉输送钢结构架及升降机轨道维修',
            category: 'event',
            categoryName: '活动策划',
            platform: '奇瑞汽车',
            company: '奇瑞汽车',
            publishDate: '2026-04-25',
            deadline: '2026-05-09',
            status: '采购公告',
            budget: null,
            summary: '涂装车间设备维修项目',
            keywords: ['维修', '设备', '车间'],
            url: 'https://ebd.mychery.com/cms//zd20=jycggg/20250425/1100349279437848576.html',
            source: '奇瑞集团采购服务平台',
            priority: 'low',
            pushed: false
        },
        {
            id: 'bid_031',
            title: '2026年奕境汽车展厅广告机采购项目',
            category: 'advertising',
            categoryName: '广告投放',
            platform: '东风汽车',
            company: '东风奕派汽车销售(武汉)有限公司',
            publishDate: '2026-04-18',
            deadline: '2026-05-02',
            status: '招标公告',
            budget: null,
            summary: '奕境汽车展厅广告机设备采购',
            keywords: ['广告机', '展厅', '设备', '采购'],
            url: 'https://etp.dfmc.com.cn/jyxx/004001/004001001/20260418/0fa9b039-0753-4623-bb1b-bef3a865b331.html',
            source: '东风公司采购招投标平台',
            priority: 'medium',
            pushed: false
        },
        {
            id: 'bid_032',
            title: '2025年AB级车展展具租赁及搭建运营项目（Ⅱ线）',
            category: 'event',
            categoryName: '活动策划',
            platform: '东风汽车',
            company: '东风乘用车销售有限公司',
            publishDate: '2026-04-22',
            deadline: '2026-05-06',
            status: '中标公告',
            budget: null,
            summary: 'AB级车展展具租赁及搭建运营',
            keywords: ['车展', '展具', '搭建', '运营'],
            url: 'https://etp.dfmc.com.cn/jyxx/004001/004001004/20250422/bf8fbd17-527e-4241-9fa9-ee3efc147dcf.html',
            source: '东风公司采购招投标平台',
            priority: 'high',
            pushed: false,
            notes: '已公示中标结果'
        },
        
        // ========== 📢 营销传播类 ==========
        {
            id: 'bid_001',
            title: '2026年度零跑汽车服务部官方账号运营代理项目',
            category: 'content',
            categoryName: '内容运营',
            platform: '零跑汽车',
            company: '零跑汽车',
            publishDate: '2026-04-21',
            deadline: '2026-04-28',
            status: '方案互动中',
            budget: null,
            summary: '零跑汽车官方账号运营代理招标，包含内容策划、账号运营、粉丝互动等',
            keywords: ['运营', '代理', '官方账号', '内容运营'],
            url: 'https://leapmotor.cn/join/callForBids.html',
            source: '零跑汽车官网',
            priority: 'high',
            pushed: true
        },
        
        // ========== 📺 广告投放类 ==========
        {
            id: 'bid_002',
            title: '2026年零跑汽车户外广告投放服务代理项目',
            category: 'advertising',
            categoryName: '广告投放',
            platform: '零跑汽车',
            company: '零跑汽车',
            publishDate: '2026-04-14',
            deadline: '2026-04-21',
            status: '方案互动中',
            budget: null,
            summary: '户外广告位投放服务代理，包含户外广告资源采购、投放执行等',
            keywords: ['广告', '投放', '户外', '代理'],
            url: 'https://leapmotor.cn/join/callForBids.html',
            source: '零跑汽车官网',
            priority: 'high',
            pushed: true
        },
        {
            id: 'bid_003',
            title: '【招标报名】2026年零跑汽车门禁道闸投放项目',
            category: 'advertising',
            categoryName: '广告投放',
            platform: '零跑汽车',
            company: '零跑汽车',
            publishDate: '2026-04-07',
            deadline: '2026-04-17',
            status: '报名中',
            budget: null,
            summary: '社区门禁道闸广告投放',
            keywords: ['投放', '道闸', '广告'],
            url: 'https://leapmotor.cn/join/callForBids.html',
            source: '零跑汽车官网',
            priority: 'medium',
            pushed: false
        },
        {
            id: 'bid_004',
            title: '【招标公告】2026年零跑汽车公交站牌投放项目',
            category: 'advertising',
            categoryName: '广告投放',
            platform: '零跑汽车',
            company: '零跑汽车',
            publishDate: '2026-04-07',
            deadline: '2026-04-17',
            status: '方案互动中',
            budget: null,
            summary: '公交站牌广告投放',
            keywords: ['投放', '公交站牌', '广告'],
            url: 'https://leapmotor.cn/join/callForBids.html',
            source: '零跑汽车官网',
            priority: 'medium',
            pushed: false
        },
        
        // ========== 💻 数字营销类 ==========
        {
            id: 'bid_005',
            title: '2026年零跑汽车新媒体AI私信工具项目',
            category: 'digital',
            categoryName: '数字营销',
            platform: '零跑汽车',
            company: '零跑汽车',
            publishDate: '2026-04-08',
            deadline: '2026-04-15',
            status: '方案互动中',
            budget: null,
            summary: 'AI智能私信工具开发与运营，用于新媒体平台用户互动',
            keywords: ['新媒体', 'AI', '工具', '私信'],
            url: 'https://leapmotor.cn/join/callForBids.html',
            source: '零跑汽车官网',
            priority: 'medium',
            pushed: true
        },
        {
            id: 'bid_006',
            title: '零跑汽车2026年度零跑智能外呼服务项目',
            category: 'digital',
            categoryName: '数字营销',
            platform: '零跑汽车',
            company: '零跑汽车',
            publishDate: '2026-04-22',
            deadline: '2026-04-29',
            status: '方案互动中',
            budget: null,
            summary: '智能外呼系统服务，用于客户服务和营销触达',
            keywords: ['智能', '外呼', '服务', 'AI'],
            url: 'https://leapmotor.cn/join/callForBids.html',
            source: '零跑汽车官网',
            priority: 'medium',
            pushed: false
        },
        
        // ========== 🎨 物料制作类 ==========
        {
            id: 'bid_007',
            title: '2026众淼营销类制作项目',
            category: 'material',
            categoryName: '物料制作',
            platform: '海尔',
            company: '海尔集团',
            publishDate: '2026-04-16',
            deadline: '2026-04-21',
            status: '资源漏出中',
            budget: null,
            summary: '营销物料制作类项目',
            keywords: ['物料', '制作', '营销'],
            url: 'https://v.ihaier.cn/ierp/index.html',
            source: '海尔资源共享云',
            priority: 'high',
            pushed: true
        },
        {
            id: 'bid_008',
            title: '海尔长春26年物料制作类供应商招募',
            category: 'material',
            categoryName: '物料制作',
            platform: '海尔',
            company: '海尔集团',
            publishDate: '2026-04-20',
            deadline: '2026-04-27',
            status: '方案互动中',
            budget: null,
            summary: '长春地区物料制作供应商招募',
            keywords: ['物料', '制作', '供应商'],
            url: 'https://v.ihaier.cn/ierp/index.html',
            source: '海尔资源共享云',
            priority: 'high',
            pushed: true
        },
        
        // ========== 🎉 活动策划类 ==========
        {
            id: 'bid_009',
            title: '智控泰国新租工厂装修项目',
            category: 'event',
            categoryName: '活动策划',
            platform: '海尔',
            company: '海尔智控',
            publishDate: '2026-04-16',
            deadline: '2026-04-27',
            status: '方案互动中',
            budget: null,
            summary: '泰国工厂装修及展厅建设',
            keywords: ['装修', '工厂', '展厅'],
            url: 'https://v.ihaier.cn/ierp/index.html',
            source: '海尔资源共享云',
            priority: 'high',
            pushed: false
        },
        {
            id: 'bid_010',
            title: '2026年6月北国电器&卡萨帝非遗守护之旅',
            category: 'event',
            categoryName: '活动策划',
            platform: '海尔',
            company: '海尔集团',
            publishDate: '2026-04-21',
            deadline: '2026-04-30',
            status: '方案互动中',
            budget: null,
            summary: '卡萨帝品牌活动策划与执行服务',
            keywords: ['活动', '策划', '执行', '卡萨帝'],
            url: 'https://v.ihaier.cn/ierp/index.html',
            source: '海尔资源共享云',
            priority: 'high',
            pushed: false
        },
        {
            id: 'bid_011',
            title: '君一项目案场包装物料战略招标',
            category: 'material',
            categoryName: '物料制作',
            platform: '海尔',
            company: '海尔集团',
            publishDate: '2026-04-21',
            deadline: '2026-04-30',
            status: '方案互动中',
            budget: null,
            summary: '案场包装物料战略招标',
            keywords: ['物料', '包装', '案场'],
            url: 'https://v.ihaier.cn/ierp/index.html',
            source: '海尔资源共享云',
            priority: 'high',
            pushed: false
        },
        {
            id: 'bid_012',
            title: '唐山百货大楼42周年庆卡萨帝活动',
            category: 'event',
            categoryName: '活动策划',
            platform: '海尔',
            company: '海尔集团',
            publishDate: '2026-04-17',
            deadline: '2026-04-22',
            status: '已完成',
            budget: null,
            summary: '卡萨帝品牌店庆活动策划执行',
            keywords: ['活动', '策划', '卡萨帝'],
            url: 'https://v.ihaier.cn/ierp/index.html',
            source: '海尔资源共享云',
            priority: 'medium',
            pushed: false
        }
    ]
};

// =====================================================
// 新增模块：词条百科（2026-04-24更新）
// =====================================================
DATA_SOURCE.glossary = [
        // 🚗 汽车品牌类词条
        {
            id: 'term_069',
            term: '比亚迪BYD',
            fullName: 'Build Your Dreams',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '全球新能源汽车销量冠军，2025年销量超427万辆。拥有王朝网（汉、唐、秦、宋、元）、海洋网（海豹、海豚、海鸥）两大产品系列，以及高端品牌腾势、方程豹、仰望。核心技术：刀片电池、DM-i超级混动、云辇底盘、易四方。',
            aliases: ['BYD', 'Build Your Dreams', '迪王'],
            relatedTerms: ['刀片电池', 'DM-i', '王传福', '新能源汽车'],
            usage: '2026年4月，比亚迪月销量37.3万辆，连续多月蝉联全球新能源销量冠军。',
            source: '比亚迪官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_070',
            term: '特斯拉Tesla',
            fullName: 'Tesla Inc.',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '美国电动汽车及清洁能源公司，全球电动车行业标杆。代表车型：Model 3（全球最畅销电动车）、Model Y（全球最畅销SUV）、Model S/X（高端旗舰）。核心技术：FSD完全自动驾驶、4680电池、一体化压铸、纯视觉方案。上海超级工厂年产超95万辆。',
            aliases: ['Tesla', 'TSLA', '特拉斯'],
            relatedTerms: ['马斯克', 'FSD', 'Model 3', 'Model Y', '超级工厂'],
            usage: '特斯拉FSD V12采用端到端大模型，引领智能驾驶技术路线。',
            source: '特斯拉官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_071',
            term: '蔚来NIO',
            fullName: 'NIO Inc.',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '中国高端智能电动汽车品牌，以用户服务和换电模式著称。代表车型：ET7（旗舰轿车）、ES8（旗舰SUV）、ET5（中型轿车）、ES6（中型SUV）。核心技术：换电模式、BaaS电池租赁、NOP+领航辅助、NOMI语音助手。2025年交付22.1万辆。',
            aliases: ['NIO', '蔚来汽车', 'Blue Sky Coming'],
            relatedTerms: ['李斌', '换电', 'BaaS', 'NOMI', '用户企业'],
            usage: '蔚来建成超过3000座换电站，累计换电超6000万次。',
            source: '蔚来官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_072',
            term: '小鹏XPENG',
            fullName: 'XPeng Inc.',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '中国智能电动汽车品牌，以智能驾驶技术为核心竞争力。代表车型：P7i（智能轿跑）、G9（中大型SUV）、G6（中型SUV）、X9（纯电MPV）。核心技术：XNGP城市导航辅助驾驶、扶摇架构、800V高压平台、智能语音。2025年交付42.9万辆。',
            aliases: ['XPENG', '小鹏汽车', '小P'],
            relatedTerms: ['何小鹏', 'XNGP', '城市NOA', '扶摇架构', '智能驾驶'],
            usage: '小鹏XNGP城市智驾已覆盖全国243个城市。',
            source: '小鹏官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_073',
            term: '理想Li Auto',
            fullName: 'Li Auto Inc.',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '中国新能源汽车品牌，聚焦家庭用户和增程式技术路线。代表车型：L9（旗舰六座SUV）、L8（中大型六座SUV）、L7（中大型五座SUV）、MEGA（纯电MPV）。核心技术：增程式混动、魔毯空悬、五屏交互、城市NOA。2025年交付50.1万辆。',
            aliases: ['Li Auto', '理想汽车', '车和家'],
            relatedTerms: ['李想', '增程式', '家庭用车', 'L系列', 'MEGA'],
            usage: '理想汽车是新势力中率先实现盈利的车企，2025年净利润超80亿元。',
            source: '理想官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_074',
            term: '小米汽车',
            fullName: 'Xiaomi Auto',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '小米集团旗下的智能电动汽车品牌，2024年正式发布首款车型SU7。代表车型：SU7（纯电轿跑，21.59-29.99万元）、SU7 Ultra（性能版，52.99万元）。核心技术：澎湃OS人车家全生态、小米智驾、9100吨一体化压铸。2025年交付超13万辆，2026年目标30万辆。',
            aliases: ['小米SU7', 'Xiaomi Auto', '年轻人的第一台车'],
            relatedTerms: ['雷军', '澎湃OS', '人车家', '小米智驾', 'SU7 Ultra'],
            usage: '小米SU7上市即爆款，2025年全年交付量超特斯拉Model 3同期。',
            source: '小米汽车官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_075',
            term: '问界AITO',
            fullName: 'Adding Intelligence to Auto',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '华为与赛力斯联合打造的高端智慧汽车品牌，属于鸿蒙智行生态。代表车型：问界M9（全景智慧旗舰SUV，46.98-56.98万元）、M7（豪华智慧中大型SUV）、M5（中型SUV）。核心技术：华为ADS 3.0高阶智驾、鸿蒙智能座舱、DriveONE电驱。',
            aliases: ['AITO', '问界', '华为问界'],
            relatedTerms: ['鸿蒙智行', '华为ADS', '赛力斯', '余承东', '遥遥领先'],
            usage: '问界M9连续多月成为50万元以上SUV销量冠军。',
            source: '问界官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_076',
            term: '极氪ZEEKR',
            fullName: 'ZEEKR Technology',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '吉利控股集团旗下高端智能纯电品牌，聚焦豪华科技体验。代表车型：001（猎装轿跑）、007（中型轿车）、7X（中型SUV）、009（豪华MPV）。核心技术：浩瀚架构、金砖电池、ZAD智驾、8295智能座舱。2025年交付22.2万辆，纽交所上市。',
            aliases: ['ZEEKR', '极氪汽车', '极客'],
            relatedTerms: ['吉利', '浩瀚架构', '安聪慧', '金砖电池', '纽交所'],
            usage: '极氪001是中国首款猎装轿跑，月销量稳定在万辆以上。',
            source: '极氪官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_077',
            term: '零跑LEAPMOTOR',
            fullName: 'Leapmotor Technology',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '中国新能源汽车品牌，以高性价比和全域自研著称。代表车型：C16（中大型六座SUV）、C11（中型SUV）、C01（中大型轿车）、T03（微型车）。核心技术：四叶草电子电气架构、CTC 2.0电池底盘一体化。2025年交付29.4万辆，与Stellantis集团合资。',
            aliases: ['零跑汽车', 'LEAPMOTOR', '性价比之王'],
            relatedTerms: ['朱江明', '四叶草架构', 'Stellantis', '全域自研'],
            usage: '零跑C16被称为"半价理想L8"，性价比极高。',
            source: '零跑官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_078',
            term: '长城GWM',
            fullName: 'Great Wall Motor',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '中国汽车行业领军企业，旗下拥有哈弗、魏牌、坦克、欧拉、长城炮五大品牌。代表车型：哈弗H6（国民神车）、坦克300（硬派越野）、欧拉好猫（女性电动车）。核心技术：Hi4智能四驱、柠檬混动DHT、咖啡智能。',
            aliases: ['长城汽车', 'GWM', '保定车企'],
            relatedTerms: ['魏建军', '哈弗', '坦克', '欧拉', '硬派越野'],
            usage: '长城坦克系列开创了中国硬派越野SUV市场。',
            source: '长城汽车官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_079',
            term: '奔驰Mercedes-Benz',
            fullName: 'Mercedes-Benz Group AG',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '德国豪华汽车品牌，汽车发明者，全球高端汽车市场领导者。代表车型：S级（旗舰轿车）、E级（中大型轿车）、C级（中型轿车）、GLC/GLE（SUV）、EQ系列（纯电）。核心技术：MB.OS、Drive Pilot L3级智驾、魔毯悬挂。2025年中国销量超70万辆。',
            aliases: ['Mercedes', 'Benz', '三叉星', '大奔'],
            relatedTerms: ['豪华车', '德系三强', 'BBA', '汽车发明者'],
            usage: '奔驰S级是豪华轿车标杆，被誉为"汽车发明者再次发明汽车"。',
            source: '奔驰中国官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_080',
            term: '宝马BMW',
            fullName: 'Bayerische Motoren Werke',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '德国豪华汽车品牌，以驾驶乐趣著称。代表车型：3系（运动轿车标杆）、5系（中大型轿车）、7系（旗舰轿车）、X3/X5（SUV）、i系列（纯电）。核心技术：iDrive系统、双肾格栅设计、精准操控。2025年中国销量超80万辆。',
            aliases: ['BMW', '巴伐利亚发动机制造厂', '蓝天白云'],
            relatedTerms: ['豪华车', '德系三强', 'BBA', '驾驶乐趣'],
            usage: '宝马3系是运动轿车标杆，操控性在同级别中领先。',
            source: '宝马中国官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_081',
            term: '奥迪Audi',
            fullName: 'Audi AG',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '德国豪华汽车品牌，以科技感和quattro四驱闻名。代表车型：A4L/A6L/A8L（轿车）、Q5/Q7（SUV）、e-tron系列（纯电）。核心技术：quattro四驱系统、虚拟座舱、矩阵式LED大灯。一汽-大众奥迪2025年中国销量超65万辆。',
            aliases: ['Audi', '四环', '灯厂'],
            relatedTerms: ['豪华车', '德系三强', 'BBA', 'quattro'],
            usage: '奥迪被称为"灯厂"，矩阵式LED大灯技术行业领先。',
            source: '奥迪中国官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_082',
            term: '大众Volkswagen',
            fullName: 'Volkswagen Group',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '德国汽车制造商，全球最大汽车集团之一，以"人民汽车"为理念。代表车型：朗逸（国民家轿）、帕萨特（中型轿车）、途观（SUV）、ID.系列（纯电）。一汽-大众和上汽大众2025年中国总销量超200万辆。',
            aliases: ['VW', '大众', 'Volkswagen', '人民的汽车'],
            relatedTerms: ['德系', '家轿', 'ID.', 'MQB平台'],
            usage: '大众朗逸长期位居轿车销量榜前列，是国民家轿代表。',
            source: '大众汽车官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_083',
            term: '丰田Toyota',
            fullName: 'Toyota Motor Corporation',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '日本最大汽车制造商，以可靠性和混合动力技术闻名。代表车型：卡罗拉（全球最畅销车型）、凯美瑞（中型轿车）、RAV4（SUV）、汉兰达（中型SUV）、赛那（MPV）。核心技术：THS混动系统、TNGA架构、氢燃料电池Mirai。2025年中国销量超170万辆。',
            aliases: ['Toyota', '丰田', 'Toyota Motor'],
            relatedTerms: ['日系', '混动', 'THS', 'TNGA', '可靠性'],
            usage: '丰田卡罗拉是全球累计销量最高的车型，超过5000万辆。',
            source: '丰田中国官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_084',
            term: '本田Honda',
            fullName: 'Honda Motor Co.',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '日本汽车制造商，以发动机技术和运动基因著称。代表车型：雅阁（中型轿车）、思域（运动轿车）、CR-V（SUV）、奥德赛（MPV）、e:NS1（纯电）。核心技术：i-MMD混动系统、VTEC发动机、MM空间理念。广汽本田和东风本田2025年总销量超130万辆。',
            aliases: ['Honda', '本田技研', '买发动机送车'],
            relatedTerms: ['日系', 'i-MMD', 'VTEC', 'MM理念'],
            usage: '本田被称为"买发动机送车"，发动机技术业内领先。',
            source: '本田中国官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_085',
            term: '日产Nissan',
            fullName: 'Nissan Motor Corporation',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '日本汽车制造商，以舒适性和纯电技术见长。代表车型：轩逸（紧凑型轿车销冠）、天籁（中型轿车）、奇骏（SUV）、逍客（紧凑型SUV）、ARIYA（纯电SUV）。核心技术：e-POWER混动、ProPILOT智驾、Zero Emission纯电。2025年中国销量超90万辆。',
            aliases: ['Nissan', '日产', '尼桑'],
            relatedTerms: ['日系', '轩逸', 'e-POWER', '大沙发'],
            usage: '日产轩逸长期位居轿车销量榜首，是家用轿车首选。',
            source: '日产中国官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_086',
            term: '吉利Geely',
            fullName: 'Zhejiang Geely Holding',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '中国最大的民营汽车企业，旗下拥有吉利、领克、极氪、沃尔沃、极星、路特斯等品牌。代表车型：星越L（SUV）、帝豪（轿车）、领克08（中型SUV）。核心技术：CMA架构、雷神混动、魅族车机系统。2025年总销量超330万辆。',
            aliases: ['吉利', 'Geely', '快乐人生吉利相伴'],
            relatedTerms: ['李书福', '领克', '沃尔沃', '极氪', 'CMA'],
            usage: '吉利是中国品牌销量冠军，旗下多品牌协同发展。',
            source: '吉利汽车官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_087',
            term: '奇瑞Chery',
            fullName: 'Chery Automobile',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '中国汽车品牌，以技术创新和出口著称。代表车型：瑞虎8（中型SUV）、艾瑞泽8（轿车）、捷途旅行者（硬派SUV）、iCAR（新能源）。核心技术：鲲鹏动力、火星架构、C-DM混动。2025年销量超260万辆，出口量中国第一。',
            aliases: ['奇瑞', 'Chery', '技术奇瑞'],
            relatedTerms: ['尹同跃', '鲲鹏动力', '出口', '硬派越野'],
            usage: '奇瑞是中国汽车出口冠军，远销80多个国家和地区。',
            source: '奇瑞汽车官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_088',
            term: '鸿蒙智行HIMA',
            fullName: 'HarmonyOS Intelligent Mobility Alliance',
            category: 'brand',
            categoryName: '汽车品牌',
            icon: '🚗',
            definition: '华为深度赋能的智能汽车技术生态联盟，包含问界、智界、享界、尊界、尚界五大品牌。代表车型：问界M9、智界S7、享界S9、尊界S800、尚界Z7。核心技术：华为ADS 3.0智驾、鸿蒙座舱、DriveONE电驱、途灵底盘。2025年五界总销量超60万辆。',
            aliases: ['HIMA', '鸿蒙智行', '华为智选车', '五界'],
            relatedTerms: ['华为', '问界', '智界', '享界', '尊界', '尚界'],
            usage: '鸿蒙智行进入"月更"节奏，2026年预计推出12款新车。',
            source: '华为智能汽车解决方案',
            updateDate: '2026-04-24'
        },
        
        // 🏛️ 行业动态类词条
        {
            id: 'term_001',
            term: 'NEV',
            fullName: 'New Energy Vehicle',
            category: 'industry',
            categoryName: '行业动态',
            icon: '🏛️',
            definition: '新能源汽车，指采用非常规车用燃料作为动力来源的汽车，包括纯电动汽车(BEV)、插电式混合动力汽车(PHEV)、增程式电动汽车(EREV)和燃料电池汽车(FCEV)等。',
            aliases: ['新能源车', '电动汽车', 'EV'],
            relatedTerms: ['BEV', 'PHEV', 'EREV', 'FCEV', '动力电池'],
            usage: '2026年4月，中国新能源汽车渗透率已突破60%，NEV成为汽车行业主流。',
            source: '中国汽车工业协会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_002',
            term: 'L2级辅助驾驶',
            fullName: 'Level 2 Autonomous Driving',
            category: 'industry',
            categoryName: '行业动态',
            icon: '🏛️',
            definition: '组合驾驶辅助，系统在其设计运行条件下持续地执行动态驾驶任务中的车辆横向和纵向运动控制，且具备与所执行的车辆横向和纵向运动控制相适应的部分目标和事件探测与响应的能力。驾驶员需全程监控。',
            aliases: ['L2自动驾驶', 'ADAS', '组合辅助驾驶'],
            relatedTerms: ['NOA', 'AEB', 'ACC', 'Lidar'],
            usage: '2026年4月，华为、小米、比亚迪等企业联合起草首个L2级辅助驾驶强制国家标准。',
            source: '工信部',
            updateDate: '2026-04-24'
        },
        
        // 🚘 新车发布类词条
        {
            id: 'term_003',
            term: '800V高压平台',
            fullName: '800V High Voltage Platform',
            category: 'newcar',
            categoryName: '新车发布',
            icon: '🚘',
            definition: '指电动汽车采用800伏特电压的电气架构，相比传统400V平台，可实现更快的充电速度（15分钟充至80%）、更高的能量传输效率和更强的动力输出。2026年已成为中高端新能源车标配。',
            aliases: ['800V架构', '高压快充', '超充平台'],
            relatedTerms: ['碳化硅SiC', '快充', 'CTC', 'CTB'],
            usage: '2026年，800V高压平台加速下沉成为市场主流标配，预计全年渗透率将大幅提升。',
            source: '中电网',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_004',
            term: 'CTC技术',
            fullName: 'Cell to Chassis',
            category: 'newcar',
            categoryName: '新车发布',
            icon: '🚘',
            definition: '电芯到底盘技术，将电芯直接集成到车辆底盘上，省去模组和电池包结构，可提升空间利用率、降低整车重量、增加续航里程。代表车型：特斯拉、比亚迪海豹、零跑C01等。',
            aliases: ['电芯底盘一体化', 'CTB', '滑板底盘'],
            relatedTerms: ['800V', 'CTP', '电池包', '续航里程'],
            usage: 'CTC技术正成为新能源汽车提升续航的主流解决方案。',
            source: '汽车之家',
            updateDate: '2026-04-24'
        },
        
        // 🏢 企业新闻类词条
        {
            id: 'term_005',
            term: '鸿蒙智行',
            fullName: 'HarmonyOS Intelligent Mobility',
            category: 'company',
            categoryName: '企业新闻',
            icon: '🏢',
            definition: '华为旗下智能汽车业务品牌，采用"华为智选车"模式，与车企深度合作开发智能汽车。目前涵盖问界、智界、享界、尊界、尚界五大品牌，2026年进入"月更"节奏，全年预计推出12款新车。',
            aliases: ['华为智选车', '鸿蒙座舱', '华为汽车'],
            relatedTerms: ['问界', '智界', '享界', '尊界', '尚界', 'HarmonyOS'],
            usage: '2026年4月22日，鸿蒙智行发布尚界Z7、智界V9等多款新车。',
            source: '华为官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_006',
            term: 'CBU',
            fullName: 'Cell Business Unit',
            category: 'company',
            categoryName: '企业新闻',
            icon: '🏢',
            definition: '基本经营单元，蔚来汽车内部管理改革的核心概念，将公司拆分为多个独立核算的经营单元，实现"自负盈亏、自主决策"，提升组织效率和成本控制能力。',
            aliases: ['基本经营单元', '细胞化组织'],
            relatedTerms: ['蔚来', '李斌', '降本增效', '组织变革'],
            usage: '2026年3月，李斌详解CBU改革、产品大年战略和国际化布局。',
            source: '蔚来汽车',
            updateDate: '2026-04-24'
        },
        
        // 🔬 技术趋势类词条
        {
            id: 'term_007',
            term: '固态电池',
            fullName: 'Solid State Battery',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '采用固态电解质替代传统液态电解质的电池技术，具有能量密度高（可达500Wh/kg）、安全性好（不易燃爆）、循环寿命长等优势，被视为下一代动力电池的终极解决方案。预计2027-2028年量产装车。',
            aliases: ['全固态电池', '半固态电池', '硫化物电池'],
            relatedTerms: ['半固态', '硫化物电解质', '能量密度', '宁德时代', '比亚迪'],
            usage: '固态电池技术正加速突破，多家企业计划2027年实现量产。',
            source: '宁德时代',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_008',
            term: '城市NOA',
            fullName: 'Navigate on Autopilot for City',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '城市导航辅助驾驶，在复杂城市道路环境下实现点到点的自动驾驶辅助功能，包括红绿灯识别、无保护左转、自动变道、避让行人等。是L2+级辅助驾驶的核心功能。',
            aliases: ['城市领航辅助', '城市自动驾驶', 'NOA'],
            relatedTerms: ['高速NOA', 'FSD', '激光雷达', '高精地图'],
            usage: '2026年，城市NOA成为高端智能电动车的标配功能。',
            source: '汽车之家',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_009',
            term: '碳化硅SiC',
            fullName: 'Silicon Carbide',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '第三代半导体材料，相比传统硅基材料，具有更高的击穿电场强度、热导率和电子饱和漂移速度，可显著提升电驱系统效率和功率密度，是800V高压平台的核心器件。',
            aliases: ['SiC', '第三代半导体', '宽禁带半导体'],
            relatedTerms: ['800V', 'IGBT', '电驱系统', '功率模块'],
            usage: 'SiC器件是800V高压平台的核心，可提升电驱效率3-5%。',
            source: '比亚迪',
            updateDate: '2026-04-24'
        },
        
        // 📊 市场热点类词条
        {
            id: 'term_010',
            term: '渗透率',
            fullName: 'Market Penetration Rate',
            category: 'market',
            categoryName: '市场热点',
            icon: '📊',
            definition: '新能源汽车销量占汽车总销量的比例，是衡量新能源市场发展程度的核心指标。2026年4月，中国新能源汽车渗透率已突破60%，意味着每卖出10辆车就有6辆是新能源车。',
            aliases: ['新能源渗透率', '市占率', '新能源占比'],
            relatedTerms: ['NEV', '销量', '市场份额', '燃油车'],
            usage: '2026年4月，中国新能源汽车渗透率突破60%，创历史新高。',
            source: '乘联会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_011',
            term: '价格战',
            fullName: 'Price War',
            category: 'market',
            categoryName: '市场热点',
            icon: '📊',
            definition: '汽车厂商通过降价手段争夺市场份额的竞争行为。2024-2026年，中国汽车市场经历多轮价格战，比亚迪、特斯拉等头部企业引领降价潮，推动新能源车型价格下探至10万元以下。',
            aliases: ['降价潮', '内卷', '价格竞争'],
            relatedTerms: ['比亚迪', '特斯拉', '成本下降', '规模效应'],
            usage: '2026年，价格战持续加剧，新能源车价格进一步下探。',
            source: '乘联会',
            updateDate: '2026-04-24'
        },
        
        // 📑 行业报告类词条
        {
            id: 'term_012',
            term: 'GWh',
            fullName: 'Gigawatt-hour',
            category: 'report',
            categoryName: '行业报告',
            icon: '📑',
            definition: '吉瓦时，电池容量和产量的计量单位，1GWh=100万千瓦时。2026年3月，中国动力电池产量达178GWh，是衡量动力电池产业规模的核心指标。',
            aliases: ['千瓦时', '电池产能', '装机量'],
            relatedTerms: ['动力电池', '宁德时代', '比亚迪', '产能利用率'],
            usage: '2026年3月，国内动力电池产量达178GWh，同比增长32%。',
            source: '中国汽车动力电池产业创新联盟',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_013',
            term: '产能利用率',
            fullName: 'Capacity Utilization Rate',
            category: 'report',
            categoryName: '行业报告',
            icon: '📑',
            definition: '实际产量与设计产能的比率，反映产业供需状况。2025年宁德时代产能利用率高达96.9%，同比提升超20个百分点，显示动力电池供需紧张。',
            aliases: ['产能负荷', '产能使用率'],
            relatedTerms: ['GWh', '宁德时代', '产能过剩', '供需平衡'],
            usage: '2025年宁德时代产能利用率96.9%，日赚近2亿元。',
            source: '宁德时代财报',
            updateDate: '2026-04-24'
        },
        
        // 🛡️ 保险行业类词条
        {
            id: 'term_014',
            term: 'BEV',
            fullName: 'Battery Electric Vehicle',
            category: 'industry',
            categoryName: '行业动态',
            icon: '🏛️',
            definition: '纯电动汽车，完全由可充电电池提供动力源的汽车，不使用汽油、柴油等燃料，也不配备发动机。代表车型包括特斯拉Model系列、比亚迪汉EV、小米SU7等。',
            aliases: ['纯电动车', '纯电车', '电池电动车'],
            relatedTerms: ['NEV', 'PHEV', 'EREV', '动力电池', '续航里程'],
            usage: '2026年，BEV在中国新能源汽车市场占比超过70%，是最主流的新能源车型。',
            source: '中国汽车工业协会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_015',
            term: 'PHEV',
            fullName: 'Plug-in Hybrid Electric Vehicle',
            category: 'industry',
            categoryName: '行业动态',
            icon: '🏛️',
            definition: '插电式混合动力汽车，介于纯电动汽车与燃油汽车之间，既有传统汽车的发动机、变速器、传动系统、油路、油箱，也有纯电动汽车的电池、电动机、控制电路，且电池容量较大，支持外接充电。代表车型：比亚迪DM-i系列、理想ONE/L系列。',
            aliases: ['插电混动', '插混', '插电式混合动力'],
            relatedTerms: ['NEV', 'BEV', '增程式', 'DM-i', '超级混动'],
            usage: '2026年，PHEV凭借无续航焦虑优势，在三四线城市快速普及。',
            source: '中国汽车工业协会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_016',
            term: '一体化压铸',
            fullName: 'Giga Press / Mega Casting',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '采用超大型压铸机（6000吨级以上）将原本数十个甚至上百个分散的零部件一次压铸成型为大型车身结构件的技术。特斯拉率先采用，可大幅减少零部件数量、简化制造流程、降低生产成本、提升车身刚性。',
            aliases: ['巨型压铸', '整体压铸', 'Giga Press'],
            relatedTerms: ['特斯拉', 'Model Y', '车身结构', '制造效率'],
            usage: '一体化压铸技术可将70多个零件整合为1个，降低30%制造成本。',
            source: '特斯拉官网',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_017',
            term: '端到端智驾',
            fullName: 'End-to-End Autonomous Driving',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '一种自动驾驶技术路线，直接将传感器原始数据（摄像头、雷达等）映射到车辆控制指令（转向、加速、刹车），中间不经过人工编写的规则模块，完全由AI神经网络完成感知、决策、规划的闭环。特斯拉FSD V12、华为ADS 3.0采用此路线。',
            aliases: ['端到端大模型', 'E2E智驾', 'AI智驾'],
            relatedTerms: ['FSD', '华为ADS', '神经网络', '大模型', 'Transformer'],
            usage: '2026年，端到端智驾成为行业主流技术路线，华为、小鹏、蔚来纷纷跟进。',
            source: '华为智能汽车解决方案',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_018',
            term: '换电模式',
            fullName: 'Battery Swapping',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '电动汽车在换电站内通过自动化设备快速更换充满电的电池包，3-5分钟即可完成补能，解决充电时间长的问题。蔚来是换电模式的代表企业，已建成超过3000座换电站。',
            aliases: ['电池更换', '换电站', 'BaaS'],
            relatedTerms: ['蔚来', '宁德时代', '充电', '电池租赁'],
            usage: '蔚来换电站累计换电超过6000万次，平均每1.6秒就有一辆车完成换电。',
            source: '蔚来汽车',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_019',
            term: 'CTB技术',
            fullName: 'Cell to Body',
            category: 'newcar',
            categoryName: '新车发布',
            icon: '🚘',
            definition: '电池车身一体化技术，由比亚迪开发，将电池包上盖与车身地板合二为一，电池包成为车身结构的一部分。相比传统方式，可提升整车扭转刚度、降低车身重量、增加车内空间。代表车型：比亚迪海豹、秦PLUS EV等。',
            aliases: ['电池车身一体化', 'CTC', '刀片电池'],
            relatedTerms: ['比亚迪', '刀片电池', '海豹', '车身刚度'],
            usage: 'CTB技术使整车扭转刚度超过40000N·m/°，媲美百万级豪车。',
            source: '比亚迪汽车',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_020',
            term: '刀片电池',
            fullName: 'Blade Battery',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '比亚迪开发的磷酸铁锂电池技术，采用长条形电芯设计，电芯长度可达2米以上，像刀片一样插入电池包中。相比传统三元锂电池，具有安全性高（针刺试验不起火）、寿命长（充放电3000次以上）、成本低等优势。',
            aliases: ['磷酸铁锂', 'LFP', '比亚迪电池'],
            relatedTerms: ['比亚迪', 'CTB', '磷酸铁锂', '电池安全'],
            usage: '刀片电池已搭载于比亚迪全系车型，并外供特斯拉、丰田等企业。',
            source: '比亚迪汽车',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_021',
            term: 'DM-i超级混动',
            fullName: 'Dual Mode intelligent',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '比亚迪开发的插电式混合动力技术，以电为主的混动架构，由高效发动机、EHS电混系统、刀片电池组成。亏电油耗可低至3.8L/100km，综合续航超1200km，实现"油电同价"。代表车型：秦PLUS DM-i、宋PLUS DM-i。',
            aliases: ['DM-i', '超级混动', '比亚迪混动'],
            relatedTerms: ['比亚迪', 'PHEV', '亏电油耗', 'EHS'],
            usage: 'DM-i车型累计销量突破300万辆，成为混动市场绝对领导者。',
            source: '比亚迪汽车',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_022',
            term: 'NPS',
            fullName: 'Net Promoter Score',
            category: 'report',
            categoryName: '行业报告',
            icon: '📑',
            definition: '净推荐值，衡量客户忠诚度和满意度的指标，通过调查"您有多大可能向朋友推荐这个品牌/产品？"（0-10分）计算得出。9-10分为推荐者，7-8分为中立者，0-6分为贬损者。NPS=推荐者比例-贬损者比例。汽车行业平均NPS约30-40分。',
            aliases: ['净推荐值', '客户满意度', '口碑指数'],
            relatedTerms: ['客户满意度', '品牌忠诚度', '用户口碑'],
            usage: '蔚来汽车NPS长期保持在70分以上，位居行业第一。',
            source: 'J.D. Power',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_023',
            term: 'OTA升级',
            fullName: 'Over-The-Air Update',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '空中下载技术，指通过无线网络远程更新汽车软件系统，包括车机系统、自动驾驶算法、电池管理系统等。智能汽车可像手机一样持续迭代升级，不断优化功能和修复问题。',
            aliases: ['远程升级', '空中升级', '软件更新'],
            relatedTerms: ['智能座舱', '自动驾驶', '软件定义汽车', 'SOTA', 'FOTA'],
            usage: '特斯拉、蔚来、小鹏等车企通过OTA持续为车辆增加新功能。',
            source: '汽车之家',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_024',
            term: 'SiC碳化硅',
            fullName: 'Silicon Carbide',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '第三代半导体材料，禁带宽度是硅的3倍，击穿电场强度是硅的10倍，热导率是硅的3倍。用于制造功率器件（MOSFET、IGBT），可大幅提升电驱系统效率（3-5%）、减小体积、降低重量。是800V高压平台的核心器件。',
            aliases: ['碳化硅', '第三代半导体', '宽禁带半导体'],
            relatedTerms: ['800V', '电驱系统', '功率器件', 'IGBT'],
            usage: '2026年，SiC器件在新能源汽车电驱系统渗透率超过40%。',
            source: '比亚迪半导体',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_025',
            term: '充电倍率',
            fullName: 'C-Rate',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '电池充放电速率的单位，1C表示1小时充满/放空电池，2C表示0.5小时充满，4C表示15分钟充满。充电倍率越高，充电速度越快，但对电池材料和热管理要求越高。目前主流快充为2C-4C，超充可达6C以上。',
            aliases: ['C率', '充放电倍率', '快充倍率'],
            relatedTerms: ['快充', '超充', '800V', '电池热管理'],
            usage: '宁德时代麒麟电池支持4C快充，15分钟充至80%。',
            source: '宁德时代',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_026',
            term: '直营模式',
            fullName: 'Direct Sales Model',
            category: 'company',
            categoryName: '企业新闻',
            icon: '🏢',
            definition: '汽车厂商直接面向消费者销售车辆的模式，绕过传统4S店经销商，通过品牌体验店、官网、APP等渠道直接触达用户。价格透明统一，服务标准一致。特斯拉、蔚来、理想、小米等新能源品牌采用此模式。',
            aliases: ['直销模式', '新势力模式', '品牌直营'],
            relatedTerms: ['4S店', '经销商', '价格透明', '用户体验'],
            usage: '直营模式成为新能源品牌标配，传统车企如大众、奔驰也开始尝试。',
            source: '汽车流通协会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_027',
            term: 'BaaS电池租赁',
            fullName: 'Battery as a Service',
            category: 'company',
            categoryName: '企业新闻',
            icon: '🏢',
            definition: '电池即服务，用户购买电动车时只买车不买电池，电池以租赁方式使用，按月支付租金。可降低购车门槛（车价降低7-12万），享受电池灵活升级，不用担心电池衰减。蔚来、宁德时代等企业提供此服务。',
            aliases: ['电池租用', '车电分离', '电池租赁'],
            relatedTerms: ['蔚来', '换电', '宁德时代', '电池资产'],
            usage: '蔚来BaaS用户超过15万，电池月租最低728元起。',
            source: '蔚来汽车',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_028',
            term: '智能驾驶Tier1',
            fullName: 'Tier 1 Supplier',
            category: 'industry',
            categoryName: '行业动态',
            icon: '🏛️',
            definition: '一级供应商，直接向整车厂供货的汽车零部件供应商。在智能驾驶领域，Tier1包括博世、大陆、华为、Mobileye、地平线等，提供从传感器、域控制器到算法方案的完整解决方案。',
            aliases: ['一级供应商', '零部件巨头', '系统集成商'],
            relatedTerms: ['博世', '大陆', '华为', 'Mobileye', '地平线'],
            usage: '华为作为中国智能驾驶Tier1，已搭载于问界、智界、阿维塔等品牌。',
            source: '汽车供应商网',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_029',
            term: '零百加速',
            fullName: '0-100km/h Acceleration',
            category: 'newcar',
            categoryName: '新车发布',
            icon: '🚘',
            definition: '汽车从静止状态加速到100km/h所需的时间，是衡量汽车动力性能的核心指标。燃油车时代，5秒以内属于超跑级别；电动车时代，3秒级加速已普及至30万级车型。',
            aliases: ['百公里加速', '0-100加速', '加速性能'],
            relatedTerms: ['扭矩', '功率', '电机', '四驱系统'],
            usage: '小米SU7 Ultra零百加速1.98秒，跻身超跑级别。',
            source: '汽车之家实测',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_030',
            term: 'CLTC续航',
            fullName: 'China Light-duty Vehicle Test Cycle',
            category: 'newcar',
            categoryName: '新车发布',
            icon: '🚘',
            definition: '中国轻型汽车行驶工况，是中国自主制定的汽车能耗和排放测试标准，2021年取代NEDC成为国家标准。CLTC工况更贴近中国实际路况，但相比WLTP（欧洲标准）仍偏乐观，实际续航通常打7-8折。',
            aliases: ['国标续航', '中国工况', 'CLTC工况'],
            relatedTerms: ['NEDC', 'WLTP', '续航里程', '能耗测试'],
            usage: '某车型CLTC续航600km，实际城区续航约450-500km。',
            source: '工信部',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_031',
            term: '热泵空调',
            fullName: 'Heat Pump HVAC',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '利用制冷剂相变原理，将外界空气中的热量转移到车内的空调系统。相比传统PTC加热，热泵空调能效比(COP)可达2-4，即1度电能产生2-4度热量，大幅降低冬季取暖能耗，提升续航20-30%。',
            aliases: ['热泵系统', '高效空调', '节能空调'],
            relatedTerms: ['冬季续航', 'PTC', '能耗', '电动车空调'],
            usage: '热泵空调已成为中高端电动车的标配，有效缓解冬季续航焦虑。',
            source: '汽车之家',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_032',
            term: 'V2G',
            fullName: 'Vehicle-to-Grid',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '车辆到电网技术，指电动车不仅是电能消费者，还可作为分布式储能单元，在电网负荷低谷时充电，在高峰时向电网放电，赚取峰谷价差收益，同时帮助电网削峰填谷。',
            aliases: ['车网互动', 'V2L', 'V2H', '双向充电'],
            relatedTerms: ['储能', '电网', '能源互联网', '充放电'],
            usage: 'V2G技术可使电动车成为家庭应急电源，或参与电网调峰获得收益。',
            source: '国家电网',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_033',
            term: 'MPV',
            fullName: 'Multi-Purpose Vehicle',
            category: 'newcar',
            categoryName: '新车发布',
            icon: '🚘',
            definition: '多用途汽车，集旅行车宽大乘员空间、轿车舒适性、厢式货车功能于一身，一般为两厢式结构，可容纳7-8人。代表车型：别克GL8、丰田赛那、腾势D9、理想MEGA。2026年新能源MPV市场快速增长。',
            aliases: ['商务车', '保姆车', '七座车'],
            relatedTerms: ['SUV', '轿车', '7座', '家庭用车'],
            usage: '2026年，新能源MPV市场增速超过100%，成为家庭二胎/三胎首选。',
            source: '乘联会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_034',
            term: '增程式EREV',
            fullName: 'Extended Range Electric Vehicle',
            category: 'industry',
            categoryName: '行业动态',
            icon: '🏛️',
            definition: '增程式电动汽车，搭载小排量发动机作为增程器，仅用于发电不直接驱动车轮，车轮始终由电机驱动。兼具电动车驾驶体验和燃油车续航无忧的优势。代表车型：理想L系列、问界M系列、深蓝SL03。',
            aliases: ['增程混动', '增程电动', 'EREV'],
            relatedTerms: ['理想', '问界', '增程器', 'PHEV'],
            usage: '2026年，增程式车型市场份额超过15%，成为解决续航焦虑的重要方案。',
            source: '中国汽车工业协会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_035',
            term: '宁德时代CATL',
            fullName: 'Contemporary Amperex Technology Co. Limited',
            category: 'company',
            categoryName: '企业新闻',
            icon: '🏢',
            definition: '全球最大的动力电池制造商，2025年市占率超过50%，客户包括特斯拉、宝马、奔驰、大众、蔚来、理想、小米等主流车企。主要产品包括麒麟电池、神行电池、钠离子电池等。2025年净利润722亿元，日赚近2亿。',
            aliases: ['CATL', '宁王', '电池一哥'],
            relatedTerms: ['动力电池', '麒麟电池', '比亚迪', 'LG新能源'],
            usage: '宁德时代全球动力电池市占率50%以上，连续7年全球第一。',
            source: '宁德时代财报',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_036',
            term: '麒麟电池',
            fullName: 'Qilin Battery',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '宁德时代第三代CTP（Cell to Pack）技术，将电池包集成度提升至72%，体积利用率突破72%，支持4C快充（15分钟充至80%），续航里程可达1000km以上。已搭载于极氪、理想、问界等品牌。',
            aliases: ['CTP 3.0', '宁德时代麒麟', '1000km电池'],
            relatedTerms: ['宁德时代', 'CTP', '快充', '续航里程'],
            usage: '麒麟电池能量密度达255Wh/kg，支持1000km续航。',
            source: '宁德时代',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_037',
            term: '磷酸铁锂LFP',
            fullName: 'Lithium Iron Phosphate',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '一种锂离子电池正极材料，化学式为LiFePO4。相比三元锂电池，具有安全性高（热稳定性好，600°C以上才开始分解）、寿命长（循环3000次以上）、成本低（不含钴镍等贵金属）等优势。2026年在中国市场占比超过60%。',
            aliases: ['LFP', '铁锂电池', '磷酸铁锂电池'],
            relatedTerms: ['三元锂', '刀片电池', '宁德时代', '比亚迪'],
            usage: '特斯拉Model 3/Y标准续航版、比亚迪全系均采用磷酸铁锂电池。',
            source: '中国汽车动力电池产业创新联盟',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_038',
            term: '三元锂电池NCM',
            fullName: 'Nickel Cobalt Manganese',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '镍钴锰酸锂电池，正极材料由镍、钴、锰三种金属组成（比例如NCM523、NCM622、NCM811）。能量密度高（200-300Wh/kg），但成本较高且热稳定性相对较差。主要用于长续航车型和高端车型。',
            aliases: ['NCM', '三元电池', '高镍电池'],
            relatedTerms: ['磷酸铁锂', 'NCA', '镍钴铝', '能量密度'],
            usage: '三元锂电池在高端长续航车型中仍有应用，如特斯拉长续航版、宝马iX。',
            source: '汽车之家',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_039',
            term: '域控制器',
            fullName: 'Domain Control Unit',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '汽车电子电气架构的核心，将原本分散的ECU（电子控制单元）按功能域（动力域、底盘域、座舱域、智驾域、车身域）集中控制。减少线束长度、降低整车重量、提升算力、支持OTA升级。特斯拉、蔚来、小鹏等已采用域控架构。',
            aliases: ['域控', 'DCU', '中央计算平台'],
            relatedTerms: ['ECU', 'EE架构', '智能驾驶', '芯片'],
            usage: '智驾域控制器集成芯片算力可达1000TOPS以上，支持城市NOA功能。',
            source: '汽车电子网',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_040',
            term: '激光雷达LiDAR',
            fullName: 'Light Detection and Ranging',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '通过发射激光束并接收反射信号来探测目标位置、速度等特征量的雷达系统。在自动驾驶中用于精确感知周围环境，生成高精度3D点云图。相比摄像头，不受光照影响，探测距离远（200米以上）。代表厂商：禾赛、速腾聚创、华为、大疆。',
            aliases: ['LiDAR', '激光雷达', '固态激光雷达'],
            relatedTerms: ['自动驾驶', '感知', '高精地图', '毫米波雷达'],
            usage: '2026年，激光雷达成本降至2000元以下，开始普及至20万级车型。',
            source: '禾赛科技',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_041',
            term: '高精地图HD Map',
            fullName: 'High Definition Map',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '高精度数字地图，包含厘米级精度的车道线、交通标志、红绿灯、坡度等静态信息，以及实时更新的动态交通信息。是L3级以上自动驾驶的必要条件，用于辅助车辆定位和路径规划。百度、高德、华为是主要图商。',
            aliases: ['HD Map', '高精度地图', '自动驾驶地图'],
            relatedTerms: ['自动驾驶', '高精定位', '众包地图', '导航'],
            usage: '高精地图+感知融合成为城市NOA的主流技术路线。',
            source: '百度地图',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_042',
            term: '高精定位RTK',
            fullName: 'Real-Time Kinematic',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '实时动态差分定位技术，通过基准站和移动站的载波相位差分解算，实现厘米级（2-3cm）定位精度。是自动驾驶车道级导航、自动泊车等功能的基础。结合GNSS（北斗/GPS）、IMU（惯性导航）实现全场景定位。',
            aliases: ['差分定位', '厘米级定位', '组合导航'],
            relatedTerms: ['GNSS', '北斗', 'IMU', '高精地图'],
            usage: 'RTK+IMU组合导航可在隧道、高楼区保持高精度定位。',
            source: '千寻位置',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_043',
            term: 'AEB',
            fullName: 'Autonomous Emergency Braking',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '自动紧急制动系统，通过雷达、摄像头等传感器监测前方障碍物，当判断可能发生碰撞时，自动触发制动以避免或减轻碰撞。是ADAS的核心功能之一，中国已强制要求乘用车标配AEB（2024年起）。',
            aliases: ['自动刹车', '紧急制动', '碰撞预警'],
            relatedTerms: ['ADAS', 'FCW', '前碰撞预警', '主动安全'],
            usage: 'AEB功能可降低约50%的追尾事故发生率。',
            source: '中汽研C-NCAP',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_044',
            term: 'ACC',
            fullName: 'Adaptive Cruise Control',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '自适应巡航控制，在传统定速巡航基础上增加了跟车功能，可根据前车速度自动调整车速，保持安全车距。支持Stop&Go功能后，可在城市拥堵路况下自动跟车启停。',
            aliases: ['自适应巡航', '跟车巡航', '自动跟车'],
            relatedTerms: ['LCC', '车道居中', 'TJA', '交通拥堵辅助'],
            usage: 'ACC+车道居中功能可在高速公路实现L2级自动驾驶辅助。',
            source: '汽车之家',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_045',
            term: 'TJA',
            fullName: 'Traffic Jam Assistant',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '交通拥堵辅助系统，在ACC自适应巡航基础上增加了车道保持功能，可在低速拥堵路况（通常0-60km/h）下自动跟车并保持车道，大幅减轻驾驶疲劳。是城市驾驶最常用的辅助功能之一。',
            aliases: ['拥堵辅助', '低速跟车', '自动跟车'],
            relatedTerms: ['ACC', '车道保持', '城市驾驶', '自动驾驶辅助'],
            usage: 'TJA功能在早晚高峰拥堵路段可自动跟车，解放双脚。',
            source: '博世',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_046',
            term: '高速NOA',
            fullName: 'Navigate on Autopilot for Highway',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '高速导航辅助驾驶，在高速公路场景下，根据导航路线自动变道、超车、上下匝道，实现点到点的自动驾驶辅助。相比城市NOA，高速场景相对简单，技术成熟度高，已普及至15万级车型。',
            aliases: ['高速领航', '高速自动驾驶', 'NOA'],
            relatedTerms: ['城市NOA', '领航辅助', '自动变道', '自动驾驶'],
            usage: '高速NOA已成为新能源车的标配功能，大幅提升长途驾驶舒适性。',
            source: '小鹏汽车',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_047',
            term: 'FSD',
            fullName: 'Full Self-Driving',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '特斯拉开发的完全自动驾驶系统，采用纯视觉方案（8个摄像头）和端到端神经网络，可实现城市街道自动驾驶、自动泊车、智能召唤等功能。在美国已推送V12版本，中国市场正在推进本地化适配。',
            aliases: ['特斯拉自动驾驶', '完全自动驾驶', 'Autopilot'],
            relatedTerms: ['特斯拉', '纯视觉', '端到端', '神经网络'],
            usage: 'FSD V12采用端到端大模型，驾驶体验更接近人类司机。',
            source: '特斯拉官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_048',
            term: 'BEV感知',
            fullName: "Bird's Eye View Perception",
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '鸟瞰图感知，将多个摄像头采集的2D图像通过神经网络转换为3D鸟瞰视角的环境感知结果，是自动驾驶感知系统的核心技术。BEV+Transformer架构成为2024-2026年行业主流技术路线。',
            aliases: ['鸟瞰图', 'BEV视角', '3D感知'],
            relatedTerms: ['Transformer', 'Occupancy Network', '纯视觉', '感知算法'],
            usage: 'BEV+Transformer架构使车辆能像游戏俯视角一样理解周围环境。',
            source: '特斯拉AI Day',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_049',
            term: 'Occupancy Network',
            fullName: '占用网络',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '占用网络，特斯拉提出的3D环境感知算法，将空间划分为体素网格，判断每个网格是否被占用，从而识别障碍物（包括异形物体、未训练过的物体）。相比传统的目标检测，Occupancy Network对未知物体更鲁棒。',
            aliases: ['占用栅格', 'Occupancy', '体素网络'],
            relatedTerms: ['BEV', '3D感知', '障碍物检测', '特斯拉'],
            usage: 'Occupancy Network可识别如倒地的大树、异形障碍物等传统算法无法识别的物体。',
            source: '特斯拉AI Day',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_050',
            term: '智能座舱',
            fullName: 'Smart Cockpit',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '搭载先进车机系统、智能语音、多屏交互、手势控制等功能的汽车驾驶舱。核心包括大尺寸中控屏、液晶仪表、HUD抬头显示、语音助手等。华为鸿蒙座舱、小鹏XOS、蔚来NOMI是行业标杆。',
            aliases: ['智能驾舱', '数字化座舱', '智能车机'],
            relatedTerms: ['车机系统', '语音助手', 'HUD', '多屏互动'],
            usage: '2026年，智能座舱已成为消费者购车的重要决策因素。',
            source: '汽车之家',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_051',
            term: 'HUD',
            fullName: 'Head-Up Display',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '抬头显示系统，将车速、导航、辅助驾驶等信息投影到前挡风玻璃上，驾驶员无需低头即可查看，提升驾驶安全性。AR-HUD（增强现实抬头显示）可将导航箭头直接叠加在真实道路上。',
            aliases: ['抬头显示', 'AR-HUD', '抬头显示器'],
            relatedTerms: ['智能座舱', '驾驶安全', 'AR导航', '液晶仪表'],
            usage: 'AR-HUD已成为高端新能源车的标配，成像面积可达75英寸。',
            source: '华为智能汽车解决方案',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_052',
            term: '语音助手',
            fullName: 'Voice Assistant',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '车载智能语音交互系统，通过语音识别、自然语言处理技术实现人车对话，可控制空调、导航、音乐、车窗等功能。优秀代表：蔚来NOMI、小鹏小P、理想同学、华为小艺。多音区识别、连续对话、可见即可说是标配功能。',
            aliases: ['语音交互', 'NOMI', '车机语音', '智能语音'],
            relatedTerms: ['NLP', '语音识别', '智能座舱', '多模态交互'],
            usage: '语音助手月均唤醒次数超过100次，是座舱使用频率最高的功能。',
            source: '蔚来汽车',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_053',
            term: '数字钥匙',
            fullName: 'Digital Key',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '使用手机、智能手表等设备作为车钥匙，通过蓝牙、NFC、UWB（超宽带）等技术实现车辆解锁、启动、分享钥匙等功能。支持无感进入（靠近自动解锁）、远程分享、权限管理。',
            aliases: ['手机钥匙', 'UWB钥匙', '蓝牙钥匙'],
            relatedTerms: ['UWB', 'NFC', '蓝牙', '无钥匙进入'],
            usage: 'UWB数字钥匙定位精度达厘米级，可精确识别用户位置实现无感解锁。',
            source: '苹果/华为官方',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_054',
            term: '露营模式',
            fullName: 'Camp Mode',
            category: 'newcar',
            categoryName: '新车发布',
            icon: '🚘',
            definition: '电动车特有的功能，车辆长时间停放时不熄火，保持空调、音响、照明等系统运行，为车内人员提供舒适环境。电动车无尾气排放，可在密闭空间安全使用。代表车型：特斯拉、蔚来、理想等均支持。',
            aliases: ['小憩模式', '宠物模式', '保持模式'],
            relatedTerms: ['V2L', '对外放电', '户外露营', '电动车生活'],
            usage: '露营模式下，电动车可连续供电8-12小时，是户外露营神器。',
            source: '特斯拉',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_055',
            term: 'V2L',
            fullName: 'Vehicle-to-Load',
            category: 'tech',
            categoryName: '技术趋势',
            icon: '🔬',
            definition: '车辆对外放电功能，电动车通过放电枪将电池电能输出给外部设备使用，支持3.3kW-6kW功率，可为电磁炉、电烤架、投影仪等供电，实现户外露营、应急用电等场景。',
            aliases: ['对外放电', '反向充电', '移动电站'],
            relatedTerms: ['露营模式', '户外用电', '应急电源', 'V2G'],
            usage: 'V2L功能使电动车成为移动电站，支持户外烧烤、煮火锅、看电影。',
            source: '比亚迪',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_056',
            term: '蔚小理',
            fullName: '蔚来/小鹏/理想',
            category: 'company',
            categoryName: '企业新闻',
            icon: '🏢',
            definition: '中国造车新势力三大头部企业的合称，代表了中国新能源汽车创业浪潮的第一梯队。蔚来主打高端服务和换电，小鹏主打智能驾驶技术，理想主打增程式和家庭用户。2025年三家年销量均突破40万辆。',
            aliases: ['新势力三强', '造车新势力', '三大新势力'],
            relatedTerms: ['蔚来', '小鹏', '理想', '造车新势力', '特斯拉'],
            usage: '蔚小理已成为中国新能源汽车市场的重要力量，与特斯拉、比亚迪形成竞争格局。',
            source: '汽车媒体',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_057',
            term: '造车新势力',
            fullName: 'New Force Automakers',
            category: 'company',
            categoryName: '企业新闻',
            icon: '🏢',
            definition: '2014年后成立的新兴汽车企业，区别于传统车企，采用互联网思维、直营模式、智能化产品，代表企业包括蔚来、小鹏、理想、小米、零跑、哪吒等。2026年新势力整体市场份额超过30%。',
            aliases: ['新势力', '新造车', '互联网造车'],
            relatedTerms: ['蔚小理', '小米汽车', '零跑', '直营模式'],
            usage: '造车新势力推动了中国汽车行业的智能化转型。',
            source: '中国汽车工业协会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_058',
            term: '双积分政策',
            fullName: 'New Energy Vehicle Credits',
            category: 'industry',
            categoryName: '行业动态',
            icon: '🏛️',
            definition: '中国政府为推广新能源汽车实施的政策，车企需满足油耗积分和新能源积分要求，积分不足需购买或面临处罚。政策推动车企加大新能源车型投入，是中国新能源汽车快速发展的重要推手。',
            aliases: ['CAFC', 'NEV积分', '油耗积分'],
            relatedTerms: ['新能源补贴', '碳排放', '油耗限值', '政策'],
            usage: '双积分政策倒逼传统车企加速电动化转型。',
            source: '工信部',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_059',
            term: '购置税减免',
            fullName: 'Purchase Tax Exemption',
            category: 'industry',
            categoryName: '行业动态',
            icon: '🏛️',
            definition: '中国政府对新能源汽车实施的购置税减免政策，2014年开始实施，多次延期至2027年底。减免政策大幅降低新能源车购车成本（约节省车价的8.5%），是刺激新能源车消费的重要政策。',
            aliases: ['免购置税', '购置税优惠', '新能源车补贴'],
            relatedTerms: ['新能源补贴', '双积分', '政策支持', '购车成本'],
            usage: '购置税减免政策延期至2027年，继续支持新能源汽车发展。',
            source: '财政部/税务总局',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_060',
            term: 'C-NCAP',
            fullName: 'China New Car Assessment Program',
            category: 'industry',
            categoryName: '行业动态',
            icon: '🏛️',
            definition: '中国新车评价规程，由中国汽车技术研究中心建立的碰撞安全测试标准，对车辆进行正面碰撞、侧面碰撞、鞭打试验等测试并评分（五星最高）。2024版新规增加了电动车电池安全、自动紧急制动等测试项目。',
            aliases: ['中汽研碰撞', '五星安全', 'C-NCAP五星'],
            relatedTerms: ['碰撞测试', '中保研', '汽车安全', '五星评价'],
            usage: 'C-NCAP五星安全已成为车企宣传的重要卖点。',
            source: '中汽研C-NCAP',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_061',
            term: '交付量',
            fullName: 'Delivery Volume',
            category: 'market',
            categoryName: '市场热点',
            icon: '📊',
            definition: '车企在特定时间段内实际交付给消费者的车辆数量，是衡量车企销量和市场表现的核心指标。与"销量"（批发量）不同，交付量更能反映终端真实需求。新势力车企通常按月公布交付数据。',
            aliases: ['销量', '终端销量', '实销'],
            relatedTerms: ['上险量', '批发量', '市占率', '渗透率'],
            usage: '2025年小鹏汽车全年交付429,445辆，同比增长125.9%。',
            source: '乘联会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_062',
            term: '上险量',
            fullName: 'Insurance Registration Volume',
            category: 'market',
            categoryName: '市场热点',
            icon: '📊',
            definition: '车辆完成交强险投保的数量，是汽车市场最真实的销量数据，因为每辆车在上路前必须投保交强险。相比车企公布的交付量，上险量更能反映终端实际销售情况，无法造假。',
            aliases: ['交强险数量', '实际销量', '终端数据'],
            relatedTerms: ['交付量', '批发量', '上牌量', '真实销量'],
            usage: '上险量数据通常比车企公布的交付量滞后1-2周。',
            source: '交强险数据',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_063',
            term: '批发量',
            fullName: 'Wholesale Volume',
            category: 'market',
            categoryName: '市场热点',
            icon: '📊',
            definition: '车企批发给经销商的车辆数量，是车企内部统计的出货量。批发量可能大于实际零售量（形成库存），也可能小于（消化库存）。传统车企通常公布批发量，新势力更关注交付量。',
            aliases: ['车企销量', '出货量', '厂家销量'],
            relatedTerms: ['交付量', '上险量', '库存', '零售量'],
            usage: '批发量与零售量的差值反映了经销商库存变化。',
            source: '乘联会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_064',
            term: '车企毛利率',
            fullName: 'Gross Profit Margin',
            category: 'report',
            categoryName: '行业报告',
            icon: '📑',
            definition: '车企销售收入减去销售成本后的利润占比，反映车企的盈利能力和成本控制水平。新能源车企早期毛利率较低甚至为负，规模扩大后逐步提升。特斯拉毛利率约18-20%，比亚迪约20%，理想约20%，蔚来小鹏逐步转正。',
            aliases: ['毛利率', '单车毛利', '盈利能力'],
            relatedTerms: ['净利率', '营收', '成本控制', '规模效应'],
            usage: '理想汽车毛利率超过20%，是新势力中盈利能力最强的。',
            source: '各车企财报',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_065',
            term: '单车均价',
            fullName: 'Average Selling Price',
            category: 'report',
            categoryName: '行业报告',
            icon: '📑',
            definition: '车企总销售收入除以总销量的平均值，反映车企产品结构和品牌定位。单车均价越高，通常意味着品牌溢价能力越强。特斯拉约25-30万，理想约35万，蔚来约40万，比亚迪约15万。',
            aliases: ['ASP', '平均售价', '单车价格'],
            relatedTerms: ['品牌定位', '产品结构', '高端化', '毛利率'],
            usage: '单车均价是衡量品牌高端化程度的重要指标。',
            source: '各车企财报',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_066',
            term: '库存系数',
            fullName: 'Inventory Coefficient',
            category: 'report',
            categoryName: '行业报告',
            icon: '📑',
            definition: '经销商库存量与月销量的比值，反映库存水平。1.5表示库存可支撑1.5个月的销售。合理范围1.2-1.5，超过2.0表示库存过高，需要降价促销；低于1.0表示供不应求。',
            aliases: ['库存深度', '库存周转', '库存水平'],
            relatedTerms: ['库存', '销量', '经销商', '价格战'],
            usage: '2024年汽车行业库存系数一度超过2.0，引发大规模价格战。',
            source: '汽车流通协会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_067',
            term: 'UBI车险',
            fullName: 'Usage-Based Insurance',
            category: 'insurance',
            categoryName: '保险行业',
            icon: '🛡️',
            definition: '基于使用行为的保险，通过车联网数据（驾驶里程、驾驶习惯、车辆状态等）动态计算保费，实现"一车一价、一人一价"。新能源车智能化程度高，更适合UBI模式。',
            aliases: ['按里程付费保险', '智能驾驶保险', '动态保费'],
            relatedTerms: ['车联网', '驾驶行为', '保费定价', 'OBD'],
            usage: 'UBI车险在新能源车险领域快速普及，可实现精准定价。',
            source: '中国保险行业协会',
            updateDate: '2026-04-24'
        },
        {
            id: 'term_068',
            term: '新能源车险',
            fullName: 'NEV Insurance',
            category: 'insurance',
            categoryName: '保险行业',
            icon: '🛡️',
            definition: '针对新能源汽车的专属保险产品，覆盖电池、电机、电控等三电系统，以及充电风险、自动驾驶责任等新型风险。由于出险率高、维修成本高，新能源车险普遍比燃油车贵20-30%。',
            aliases: ['电动车保险', '三电保险'],
            relatedTerms: ['UBI', '电池险', '自燃险', '出险率'],
            usage: '新能源车险出险率高于燃油车，保费普遍贵20-30%。',
            source: '中国保险行业协会',
            updateDate: '2026-04-24'
        }
    ];

// 词条百科统计
DATA_SOURCE.glossaryStats = {
    total: 88,
    byCategory: {
        'brand': 20,      // 汽车品牌
        'industry': 9,    // 行业动态
        'newcar': 7,      // 新车发布
        'company': 7,     // 企业新闻
        'tech': 32,       // 技术趋势
        'market': 5,      // 市场热点
        'report': 6,      // 行业报告
        'insurance': 2    // 保险行业
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DATA_SOURCE, SearchUtils };
}