// 车讯通 - 真实数据源配置
const DATA_SOURCE = {
    // 当前使用真实搜索数据（2026年4月）
    lastUpdate: '2026-04-20',
    
    // 真实汽车资讯数据 - 覆盖全行业（50+条）
    news: [
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
        }
    ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_SOURCE;
}