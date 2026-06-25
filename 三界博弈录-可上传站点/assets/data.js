window.SANJIE_DATA = (() => {
  const platformUrlMap = {
    "百度": "https://www.baidu.com/",
    "百度新闻": "https://news.baidu.com/",
    "百度贴吧": "https://tieba.baidu.com/",
    "抖音": "https://www.douyin.com/",
    "微博": "https://weibo.com/",
    "微信": "https://weixin.qq.com/",
    "视频号": "https://channels.weixin.qq.com/",
    "微信视频号": "https://channels.weixin.qq.com/",
    "小红书": "https://www.xiaohongshu.com/",
    "懂车帝": "https://www.dongchedi.com/",
    "汽车之家": "https://www.autohome.com.cn/",
    "易车": "https://www.yiche.com/",
    "快手": "https://www.kuaishou.com/",
    "B站": "https://www.bilibili.com/",
    "淘车车": "https://www.taocheche.com/",
    "天猫": "https://www.tmall.com/",
    "京东": "https://www.jd.com/",
    "盒马": "https://www.freshhema.com/",
    "美团闪购": "https://shangou.meituan.com/",
    "拼多多": "https://www.pinduoduo.com/",
    "人民网": "http://www.people.com.cn/",
    "国资委官网": "http://www.sasac.gov.cn/",
    "联通App": "https://www.chinaunicom.com.cn/",
    "泰生活": "https://www.taikang.com/"
  };

  const monthDays = [
    "2026-01-18", "2026-02-16", "2026-03-18", "2026-04-17", "2026-05-18", "2026-06-18",
    "2026-07-18", "2026-08-18", "2026-09-18", "2026-10-18", "2026-11-18", "2026-12-18"
  ];

  const monthLabels = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

  const automotiveBrands = [
    "宝马", "福特", "212越野车", "淘车车", "比亚迪", "理想", "问界", "小米汽车", "特斯拉", "零跑",
    "蔚来", "小鹏", "极氪", "坦克", "捷途", "哈弗", "丰田", "本田", "奔驰", "奥迪",
    "长城汽车", "吉利", "奇瑞", "上汽大众", "一汽红旗", "广汽传祺", "腾势", "岚图",
    "阿维塔", "深蓝汽车", "哪吒汽车", "领克", "smart", "别克", "雪佛兰", "沃尔沃",
    "五菱", "长安启源", "智己", "昊铂", "魏牌", "欧拉", "长城炮", "北京汽车",
    "北京奔驰", "一汽丰田", "广汽丰田", "东风日产", "上汽通用", "凯迪拉克", "雷克萨斯", "路虎",
    "保时捷", "玛莎拉蒂", "MINI", "DS", "飞凡", "荣威", "名爵", "启辰"
  ];

  const fmcgBrands = [
    "可口可乐", "百事可乐", "元气森林", "农夫山泉", "伊利", "蒙牛", "三养", "统一", "康师傅", "巴黎欧莱雅",
    "宝洁", "联合利华", "海飞丝", "飘柔", "维他奶", "东鹏特饮", "娃哈哈", "瑞幸", "奈雪", "味全",
    "美汁源", "王老吉", "百雀羚", "完美日记", "薇诺娜", "资生堂", "兰蔻", "雀巢",
    "肯德基", "麦当劳", "德芙", "士力架", "奥利奥", "洽洽", "百事食品", "怡宝",
    "今麦郎", "白象", "三只松鼠", "良品铺子", "盐津铺子", "好丽友", "卫龙", "喜茶",
    "蜜雪冰城", "茶百道", "沪上阿姨", "古茗", "7分甜", "Manner", "库迪咖啡", "霸王茶姬",
    "花西子", "自然堂", "珀莱雅", "韩束", "欧诗漫", "丸美", "冷酸灵", "黑人牙膏"
  ];

  const stateBrands = [
    "泰康", "联通", "中国移动", "中国电信", "中国建筑", "中粮", "国药", "中国中车", "中国石化", "中国能建",
    "中国电建", "华润", "招商银行", "国家电网", "南方电网", "中远海控", "中核集团", "中国中免", "中交集团", "中海油",
    "中国人寿", "中国平安", "保利发展", "中信银行", "中国邮政", "中国华能", "中煤能源", "中广核", "中国铁建", "中国中铁",
    "中国宝武", "鞍钢集团", "中国一汽", "东方航空", "中国国航", "南方航空", "中国船舶", "中航工业",
    "中兵集团", "中国兵器装备", "国家能源集团", "中国联塑", "中国旅游集团", "中化集团", "中盐集团", "中储粮"
  ];

  const automotivePlatforms = [
    "百度", "抖音", "微博", "微信", "小红书", "懂车帝", "汽车之家", "易车", "快手", "B站", "淘车车", "百度贴吧", "视频号"
  ];

  const fmcgPlatforms = [
    "百度", "抖音", "小红书", "微博", "天猫", "京东", "快手", "B站", "微信视频号", "盒马", "美团闪购", "拼多多"
  ];

  const statePlatforms = [
    "百度", "微信", "微博", "视频号", "抖音", "小红书", "人民网", "国资委官网", "联通App", "泰生活", "百度新闻", "央视网"
  ];

  const automotiveTopics = [
    { title: "新能源转型加速", summary: "围绕新能源、智能化与平台传播的声量同步提升。", keywords: ["#新能源", "#平台传播", "#品牌升级", "#智能驾驶", "#销量热度"] },
    { title: "硬派越野内容升温", summary: "越野与户外生活方式持续扩圈，讨论集中在改装、穿越与试驾。", keywords: ["#硬派越野", "#户外生活", "#改装", "#试驾", "#社媒热度"] },
    { title: "豪华品牌智能话题走高", summary: "豪华品牌以座舱和电动化技术带动高频传播。", keywords: ["#智能豪华", "#高端新能源", "#座舱", "#科技感", "#品牌焕新"] },
    { title: "二手车平台服务升级", summary: "直播带看、检测保障与门店转化成为平台传播重点。", keywords: ["#二手车", "#直播带看", "#门店服务", "#检测", "#放心买"] }
  ];

  const fmcgTopics = [
    { title: "节令新品集中上新", summary: "夏季新品和联名内容带动消费平台点击与讨论。", keywords: ["#新品", "#联名", "#夏季限定", "#种草", "#爆品"] },
    { title: "健康轻负担叙事增强", summary: "无糖、低负担、成分透明成为品牌传播高频词。", keywords: ["#轻负担", "#无糖", "#健康", "#成分党", "#日常消费"] },
    { title: "内容种草与电商转化联动", summary: "平台从短视频种草走向站内成交闭环。", keywords: ["#内容种草", "#电商转化", "#达人测评", "#场景营销", "#复购"] },
    { title: "家庭与通勤消费双场景爆发", summary: "饮料、零食和个护在家庭囤货与通勤随手买场景均有增长。", keywords: ["#家庭消费", "#通勤场景", "#囤货", "#便利店", "#复购率"] }
  ];

  const stateTopics = [
    { title: "云网与算力协同传播升温", summary: "数字化、算网一体与政企服务构成高频叙事。", keywords: ["#算网一体", "#云网融合", "#政企服务", "#数字化", "#算力"] },
    { title: "医养与保险生态联动增强", summary: "健康管理与养老服务形成完整内容闭环。", keywords: ["#医养结合", "#养老社区", "#健康管理", "#保险服务", "#品牌生态"] },
    { title: "央国企品牌焕新推进", summary: "品牌年轻化、平台内容化和社会责任传播同步增强。", keywords: ["#品牌焕新", "#社会责任", "#年轻化", "#平台传播", "#国企内容"] },
    { title: "产业链与民生服务关注提升", summary: "能源、建筑、交通、消费民生相关企业内容活跃。", keywords: ["#产业链", "#民生服务", "#能源", "#基础设施", "#服务能力"] }
  ];

  function buildRecords(industryId, brands, platforms, topics, sourceLabel) {
    const records = [];
    monthDays.forEach((date, monthIndex) => {
      for (let slot = 0; slot < 6; slot += 1) {
        const brand = brands[(monthIndex * 6 + slot) % brands.length];
        const topic = topics[(monthIndex + slot) % topics.length];
        const monthLabel = monthLabels[monthIndex];
        const platformSubset = [
          platforms[(monthIndex + slot) % platforms.length],
          platforms[(monthIndex + slot + 3) % platforms.length],
          platforms[(monthIndex + slot + 6) % platforms.length]
        ];
        const title = `${brand}${monthLabel}${topic.title}`;
        records.push({
          id: `${industryId}-${monthIndex + 1}-${slot + 1}`,
          industry: industryId,
          brand,
          title,
          summary: `${brand}${monthLabel}的重点事件围绕${topic.summary}，当前热度主要体现在${platformSubset.join("、")}等平台，适合用于事件复盘、热度观察和报告沉淀。`,
          date,
          source: `${platformSubset[0]}事件报告页`,
          link: "#",
          heat: 68 + ((monthIndex * 7 + slot * 11) % 29),
          platforms: platformSubset,
          keywords: [brand, ...topic.keywords].map((item) => (item.startsWith("#") ? item : `#${item}`))
        });
      }
    });
    return records.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function buildTrendSeries(brands, offset) {
    return brands.slice(0, 6).map((brand, brandIndex) => {
      const points = Array.from({ length: 12 }, (_, monthIndex) => {
        return 42 + offset + brandIndex * 5 + monthIndex * 3 + ((monthIndex + brandIndex) % 3) * 2;
      });
      return { brand, points, source: "月度资料量 / 平台声量综合口径" };
    });
  }

  const automotiveRecords = [
  {
    "id": "auto-import-180",
    "industry": "automotive",
    "brand": "极氪",
    "category": "market",
    "categoryName": "市场热点",
    "title": "极氪累计交付突破80万辆，平均客单价超30万元",
    "summary": "截至2026年6月16日，极氪品牌累计交付量突破80万辆，用时不到5年，平均客单价超30万元，印证中国豪华新能源品牌向上突破。",
    "date": "2026-06-16",
    "source": "网通社汽车",
    "url": "http://auto.news18a.com/news/storys_267324.html",
    "link": "http://auto.news18a.com/news/storys_267324.html",
    "heat": 86,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#极氪",
      "#市场热点",
      "#极氪累计交付突破80万辆",
      "#平均客单价超30万元"
    ]
  },
  {
    "id": "auto-import-181",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "6月63款新车密集上市，比亚迪大唐预售25-32万/小鹏P7+ 18.68万起",
    "summary": "6月预计总计63款新车上市，覆盖10-40万元区间。重磅车型包括比亚迪大唐预售25-32万元、小鹏P7+全球36国同步发布18.68万元起、小鹏G7超级增程19.58万起。",
    "date": "2026-06-15",
    "source": "新浪汽车",
    "url": "https://k.sina.com.cn/article_7857201856_1d45362c0019073g9c.html",
    "link": "https://k.sina.com.cn/article_7857201856_1d45362c0019073g9c.html",
    "heat": 87,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#比亚迪",
      "#新车发布",
      "#6月63款新车密集上市",
      "#比亚迪大唐预售25-32万/小鹏P7+",
      "#18.68万起"
    ]
  },
  {
    "id": "auto-import-160",
    "industry": "automotive",
    "brand": "零跑",
    "category": "event",
    "categoryName": "行业活动",
    "title": "零跑汽车6月18日亮相香港车博会，Lafa5全球首发上市",
    "summary": "零跑汽车将于6月18日第二次亮相2026香港国际汽车及供应链博览会，以\"一湾香江、零跑世界\"为主题，Lafa5将迎来全球首发上市。零跑将展示智能化、全球化最新成果。",
    "date": "2026-06-14",
    "source": "零跑汽车官方",
    "url": "https://d1ev.com/newsflash/303115",
    "link": "https://d1ev.com/newsflash/303115",
    "heat": 85,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#零跑",
      "#行业活动",
      "#零跑汽车6月18日亮相香港车博会",
      "#Lafa5全球首发上市"
    ]
  },
  {
    "id": "auto-import-159",
    "industry": "automotive",
    "brand": "奥迪",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "奥迪第三代Q7正式发布，PPC平台+V6动力，欧洲起售价8.79万欧元",
    "summary": "奥迪第三代Q7于6月9日全球发布，基于全新PPC高端纵置平台打造，提供5座/6座/7座布局。搭载V6柴油轻混动力，首度提供六人座布局。德国市场6月开放订购，9月起陆续交车。",
    "date": "2026-06-09",
    "source": "奥迪官方",
    "url": "http://auto.news18a.com/news/storys_265205.html",
    "link": "http://auto.news18a.com/news/storys_265205.html",
    "heat": 84,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#奥迪",
      "#新车发布",
      "#奥迪第三代Q7正式发布",
      "#PPC平台+V6动力",
      "#欧洲起售价8.79万欧元"
    ]
  },
  {
    "id": "auto-import-158",
    "industry": "automotive",
    "brand": "奔驰",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "全新奔驰纯电GLC SUV开启预售34.9万元起，800V架构续航超700km",
    "summary": "梅赛德斯-奔驰全新纯电GLC SUV预售34.9万元起，基于800V架构打造，85.5kWh三元锂电池CLTC续航超700km，峰值充电320kW。搭载Momenta辅助驾驶系统，针对中国市场轴距加长。",
    "date": "2026-06-05",
    "source": "梅赛德斯-奔驰官方",
    "url": "https://finance.sina.com.cn/jjxw/2026-06-08/doc-iniasscn8737897.shtml",
    "link": "https://finance.sina.com.cn/jjxw/2026-06-08/doc-iniasscn8737897.shtml",
    "heat": 83,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#奔驰",
      "#新车发布",
      "#全新奔驰纯电GLC",
      "#SUV开启预售34.9万元起",
      "#800V架构续航超700km"
    ]
  },
  {
    "id": "auto-import-177",
    "industry": "automotive",
    "brand": "奔驰",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "全新奔驰纯电GLC SUV开启预售，34.9万元起，续航超700km",
    "summary": "梅赛德斯-奔驰全新纯电GLC SUV开启预售34.9万元起，基于800V架构打造，配备85.5kWh三元锂电池，CLTC续航超700km，峰值充电功率320kW。搭载Momenta辅助驾驶系统。",
    "date": "2026-06-05",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/jjxw/2026-06-08/doc-iniasscn8737897.shtml",
    "link": "https://finance.sina.com.cn/jjxw/2026-06-08/doc-iniasscn8737897.shtml",
    "heat": 83,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#奔驰",
      "#新车发布",
      "#全新奔驰纯电GLC",
      "#SUV开启预售",
      "#34.9万元起"
    ]
  },
  {
    "id": "auto-import-157",
    "industry": "automotive",
    "brand": "零跑",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "零跑创始人朱江明等继续增持公司股份约4.9亿港币，累计增持近17亿",
    "summary": "零跑汽车创始人朱江明及股东傅利泉再次增持约4.9亿港币，平均价格41.99港币/股。单一最大股东集团累计增持近17亿港币。零跑C系列即将焕新，Lafa5右舵版将在香港车博会发布。",
    "date": "2026-06-04",
    "source": "零跑汽车公告",
    "url": "https://finance.sina.com.cn/jjxw/2026-06-08/doc-iniasscn8737897.shtml",
    "link": "https://finance.sina.com.cn/jjxw/2026-06-08/doc-iniasscn8737897.shtml",
    "heat": 82,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#零跑",
      "#企业新闻",
      "#零跑创始人朱江明等继续增持公司股份约4.9亿港币",
      "#累计增持近17亿"
    ]
  },
  {
    "id": "auto-import-176",
    "industry": "automotive",
    "brand": "零跑",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "零跑创始人朱江明等增持公司股份4.9亿港币，累计增持近17亿",
    "summary": "零跑汽车创始人朱江明及股东傅利泉再次增持公司股份约4.9亿港币，平均价格约41.99港币/股。截至目前单一最大股东集团累计增持金额近17亿港币。",
    "date": "2026-06-04",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/jjxw/2026-06-08/doc-iniasscn8737897.shtml",
    "link": "https://finance.sina.com.cn/jjxw/2026-06-08/doc-iniasscn8737897.shtml",
    "heat": 82,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#零跑",
      "#企业新闻",
      "#零跑创始人朱江明等增持公司股份4.9亿港币",
      "#累计增持近17亿"
    ]
  },
  {
    "id": "auto-import-156",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "比亚迪与中国石化签署战略合作框架协议，共建\"万站聚能加油闪充\"智慧能源生态",
    "summary": "6月3日比亚迪与中国石化签署产业和资本合作框架协议，将在闪充网络建设、综合生态融合、产业链上下游协同三大领域合作，依托中石化加能站网络推进闪充站建设运营。",
    "date": "2026-06-03",
    "source": "比亚迪官方",
    "url": "https://auto.news18a.com/news/storys_262217.html",
    "link": "https://auto.news18a.com/news/storys_262217.html",
    "heat": 81,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#比亚迪",
      "#企业新闻",
      "#比亚迪与中国石化签署战略合作框架协议",
      "#共建\"万站聚能加油闪充\"智慧能源生态"
    ]
  },
  {
    "id": "auto-import-169",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "market",
    "categoryName": "市场热点",
    "title": "6月车市促销战开启：吉利购车节/比亚迪限时优惠/长城换新补贴",
    "summary": "2026年6月中国车市促销政策呈现三大特征：自主品牌全面让利、合资品牌跟进降价、新势力推出限时权益。吉利第九届购车节6月1-18日举行。",
    "date": "2026-06-03",
    "source": "凤凰网汽车",
    "url": "https://h5.ifeng.com/c/vivo/v002MQq1yAvAP6V74j----uhN--laL5U-_jRVxbVcHpCnoAJGcY__",
    "link": "https://h5.ifeng.com/c/vivo/v002MQq1yAvAP6V74j----uhN--laL5U-_jRVxbVcHpCnoAJGcY__",
    "heat": 94,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#比亚迪",
      "#市场热点",
      "#6月车市促销战开启",
      "#吉利购车节/比亚迪限时优惠/长城换新补贴"
    ]
  },
  {
    "id": "auto-import-175",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "比亚迪与中国石化签署战略合作，共建\"万站聚能加油闪充\"智慧能源生态",
    "summary": "比亚迪与中国石化签署产业和资本合作框架协议，将在闪充网络建设、综合生态融合、产业链上下游协同三大领域合作，依托中石化加能站网络推进闪充站建设运营。",
    "date": "2026-06-03",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/jjxw/2026-06-08/doc-iniasscn8737897.shtml",
    "link": "https://finance.sina.com.cn/jjxw/2026-06-08/doc-iniasscn8737897.shtml",
    "heat": 81,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#比亚迪",
      "#企业新闻",
      "#比亚迪与中国石化签署战略合作",
      "#共建\"万站聚能加油闪充\"智慧能源生态"
    ]
  },
  {
    "id": "auto-import-163",
    "industry": "automotive",
    "brand": "吉利",
    "category": "market",
    "categoryName": "市场热点",
    "title": "吉利汽车5月销量23.76万辆，连续三个月同环比双增长",
    "summary": "吉利汽车公布5月销量，全月累计销量237,637辆，连续三个月同环比双增长，新能源渗透率达56%。千里浩瀚智驾系统助力销量持续攀升。",
    "date": "2026-06-02",
    "source": "吉利汽车官方",
    "url": "#",
    "link": "#",
    "heat": 88,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#吉利",
      "#市场热点",
      "#吉利汽车5月销量23.76万辆",
      "#连续三个月同环比双增长"
    ]
  },
  {
    "id": "auto-import-165",
    "industry": "automotive",
    "brand": "坦克",
    "category": "event",
    "categoryName": "行业活动",
    "title": "2026环塔拉力赛落幕，坦克700车队13段夺11冠",
    "summary": "2026中国环塔国际拉力赛6月1日收官，17天7500公里赛程。长城坦克700·K-MAN车队斩获总冠军，13个特殊赛段夺得11个冠军，长城量产组实现\"大满贯\"。",
    "date": "2026-06-02",
    "source": "环塔拉力赛官方",
    "url": "https://new.qq.com/rain/a/20260602A09YHS00",
    "link": "https://new.qq.com/rain/a/20260602A09YHS00",
    "heat": 90,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#坦克",
      "#行业活动",
      "#2026环塔拉力赛落幕",
      "#坦克700车队13段夺11冠"
    ]
  },
  {
    "id": "auto-import-162",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "market",
    "categoryName": "市场热点",
    "title": "比亚迪发布中国首款4nm制程智驾芯片璇玑A3，城市领航无上限兜底一年",
    "summary": "比亚迪正式发布中国首款4nm制程智驾芯片璇玑A3，并宣布城市领航无上限兜底一年政策，引领智能化下半场变革。泊车功能使用率从21%飙升到93%，事故率几乎降为零。",
    "date": "2026-06-01",
    "source": "比亚迪官方",
    "url": "https://nev.ofweek.com/2026-06/ART-77015-8420-30689034.html",
    "link": "https://nev.ofweek.com/2026-06/ART-77015-8420-30689034.html",
    "heat": 87,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#比亚迪",
      "#市场热点",
      "#比亚迪发布中国首款4nm制程智驾芯片璇玑A3",
      "#城市领航无上限兜底一年"
    ]
  },
  {
    "id": "auto-import-164",
    "industry": "automotive",
    "brand": "坦克",
    "category": "market",
    "categoryName": "市场热点",
    "title": "长城汽车5月销售10.04万辆，海外销量同比劲增46.75%",
    "summary": "长城汽车5月销售新车100,399辆，海外销量同比劲增46.75%。1-5月累计销售475,815辆，同比增长3.64%。坦克SUV 5月销售17,067辆，历史累计销量达91.17万辆。",
    "date": "2026-06-01",
    "source": "长城汽车官方",
    "url": "https://zhuanlan.zhihu.com/p/2044915240115114843",
    "link": "https://zhuanlan.zhihu.com/p/2044915240115114843",
    "heat": 89,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#坦克",
      "#市场热点",
      "#长城汽车5月销售10.04万辆",
      "#海外销量同比劲增46.75%"
    ]
  },
  {
    "id": "auto-import-166",
    "industry": "automotive",
    "brand": "坦克",
    "category": "event",
    "categoryName": "行业活动",
    "title": "2026粤港澳大湾区车展开幕，长城/坦克品牌高调参展",
    "summary": "5月29日第30届粤港澳大湾区车展在深圳开幕，长城汽车以\"热爱\"为主题参展，哈弗、魏牌、坦克SUV、欧拉、长城炮一并登场。环塔冠军车手空降现场为全新坦克700车主交付新车。",
    "date": "2026-06-01",
    "source": "粤港澳大湾区车展",
    "url": "https://youjia.baidu.com/view/articleDetail/9543692462991950750",
    "link": "https://youjia.baidu.com/view/articleDetail/9543692462991950750",
    "heat": 91,
    "platforms": [
      "百度",
      "百度新闻"
    ],
    "keywords": [
      "#坦克",
      "#行业活动",
      "#2026粤港澳大湾区车展开幕",
      "#长城/坦克品牌高调参展"
    ]
  },
  {
    "id": "auto-import-168",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "technology",
    "categoryName": "技术趋势",
    "title": "2026自动驾驶生态报告：华为乾崑构建三层合作体系",
    "summary": "2026年是自动驾驶关键节点，华为乾崑构建三层合作体系。比亚迪、小鹏、理想等车企加速智驾技术布局，智驾平权成为行业共识。",
    "date": "2026-06-01",
    "source": "电子工程专辑",
    "url": "https://www.eet-china.com/mp/a495072.html",
    "link": "https://www.eet-china.com/mp/a495072.html",
    "heat": 93,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#比亚迪",
      "#技术趋势",
      "#2026自动驾驶生态报告",
      "#华为乾崑构建三层合作体系"
    ]
  },
  {
    "id": "auto-import-171",
    "industry": "automotive",
    "brand": "小鹏",
    "category": "market",
    "categoryName": "市场热点",
    "title": "小鹏G6超级增程上市，18.68万元起售，综合续航1704km",
    "summary": "小鹏G6超级增程正式上市，搭载55.8kWh大电池与60L大油箱，实现1704km CLTC综合续航，同级第一。以六项全能打造无里程焦虑出行体验。",
    "date": "2026-06-01",
    "source": "小鹏汽车官方",
    "url": "https://www.xiaopeng.com/news/company_news/5541.html",
    "link": "https://www.xiaopeng.com/news/company_news/5541.html",
    "heat": 96,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#小鹏",
      "#市场热点",
      "#小鹏G6超级增程上市",
      "#18.68万元起售",
      "#综合续航1704km"
    ]
  },
  {
    "id": "auto-import-1",
    "industry": "automotive",
    "brand": "零跑",
    "category": "market",
    "categoryName": "市场热点",
    "title": "零跑汽车5月交付45067台创历史新高，连续三月稳居新势力第一",
    "summary": "零跑汽车5月全系交付45067台，同比增长超148%，连续三个月稳居造车新势力销量榜首，创历史新高。零跑2025年销量目标已提前达成，2026年冲击100万台。",
    "date": "2026-05-25",
    "source": "零跑汽车官方",
    "url": "#",
    "link": "#",
    "heat": 78,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#零跑",
      "#市场热点",
      "#零跑汽车5月交付45067台创历史新高",
      "#连续三月稳居新势力第一"
    ]
  },
  {
    "id": "auto-import-2",
    "industry": "automotive",
    "brand": "理想",
    "category": "market",
    "categoryName": "市场热点",
    "title": "2025年新势力销量榜：零跑近60万辆夺冠，小米/小鹏创历史新高",
    "summary": "2025年造车新势力销量格局重塑，零跑以近60万辆夺冠，小米汽车全年交付超45万辆，小鹏创历史新高。理想汽车2025年交付40.63万辆，同比下滑19.3%。",
    "date": "2026-05-24",
    "source": "证券时报",
    "url": "https://stcn.com/article/detail/1853439.html",
    "link": "https://stcn.com/article/detail/1853439.html",
    "heat": 79,
    "platforms": [
      "证券时报",
      "百度"
    ],
    "keywords": [
      "#理想",
      "#市场热点",
      "#2025年新势力销量榜",
      "#零跑近60万辆夺冠",
      "#小米/小鹏创历史新高"
    ]
  },
  {
    "id": "auto-import-3",
    "industry": "automotive",
    "brand": "零跑",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "中国一汽与零跑汽车达成战略合作，拟收购10%股权",
    "summary": "中国一汽与零跑汽车签署战略合作协议，一汽股权投资（天津）有限公司拟收购零跑约10%股份。双方将围绕新能源乘用车联合开发、零部件供应链协同等方面展开合作。",
    "date": "2026-05-22",
    "source": "财联社",
    "url": "https://m.cls.cn/detail/2120310",
    "link": "https://m.cls.cn/detail/2120310",
    "heat": 80,
    "platforms": [
      "财联社",
      "百度"
    ],
    "keywords": [
      "#零跑",
      "#企业新闻",
      "#中国一汽与零跑汽车达成战略合作",
      "#拟收购10%股权"
    ]
  },
  {
    "id": "auto-import-6",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "enterprise",
    "categoryName": "企业新闻",
    "title": "比亚迪正与Stellantis谈判接手欧洲工厂，加速海外布局",
    "summary": "据彭博社报道，比亚迪正与Stellantis集团及其他欧洲汽车制造商谈判，讨论接手欧洲地区利用率不足的工厂，潜在地点涉及多个欧洲国家。",
    "date": "2026-05-15",
    "source": "观察者网",
    "url": "https://k.sina.com.cn/article_7857201856_1d45362c001905i3nk.html",
    "link": "https://k.sina.com.cn/article_7857201856_1d45362c001905i3nk.html",
    "heat": 83,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#比亚迪",
      "#企业新闻",
      "#比亚迪正与Stellantis谈判接手欧洲工厂",
      "#加速海外布局"
    ]
  },
  {
    "id": "auto-import-7",
    "industry": "automotive",
    "brand": "理想",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "理想L9全新上市，李想：新能源市场整体走强",
    "summary": "5月15日理想汽车全新理想L9上市发布会，创始人李想表示新能源市场整体走强，理想将持续深耕高端新能源SUV市场。",
    "date": "2026-05-15",
    "source": "新浪汽车",
    "url": "https://k.sina.com.cn/article_7857201856_1d45362c001905ia0o.html",
    "link": "https://k.sina.com.cn/article_7857201856_1d45362c001905ia0o.html",
    "heat": 84,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#理想",
      "#新车发布",
      "#理想L9全新上市",
      "#李想",
      "#新能源市场整体走强"
    ]
  },
  {
    "id": "auto-import-4",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "market",
    "categoryName": "市场热点",
    "title": "4月新能源渗透率达62.8%创历史新高，比亚迪32万辆领跑",
    "summary": "4月全国乘用车零售138.4万辆同比-21.5%，但新能源渗透率历史性突破62.8%。1-4月累计零售560.4万辆，比亚迪以32万辆稳居行业第一。",
    "date": "2026-05-12",
    "source": "网通社汽车",
    "url": "https://auto.news18a.com/news/storys_256282.html",
    "link": "https://auto.news18a.com/news/storys_256282.html",
    "heat": 81,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#比亚迪",
      "#市场热点",
      "#4月新能源渗透率达62.8%创历史新高",
      "#比亚迪32万辆领跑"
    ]
  },
  {
    "id": "auto-import-9",
    "industry": "automotive",
    "brand": "零跑",
    "category": "market",
    "categoryName": "市场热点",
    "title": "Stellantis与零跑汽车扩大战略合作",
    "summary": "Stellantis与零跑汽车宣布扩大战略合作伙伴关系，涉及技术共享和海外市场拓展，零跑将借助Stellantis全球渠道加速国际化。",
    "date": "2026-05-12",
    "source": "产业在线",
    "url": "http://www.chinaiol.com/News/Content/202605/124_66021.html",
    "link": "http://www.chinaiol.com/News/Content/202605/124_66021.html",
    "heat": 86,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#零跑",
      "#市场热点",
      "#Stellantis与零跑汽车扩大战略合作"
    ]
  },
  {
    "id": "auto-import-15",
    "industry": "automotive",
    "brand": "理想",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "理想i6第10万辆下线，月销2.4万辆仅次于特斯拉Model Y",
    "summary": "理想i6第10万辆下线，不到7个月就卖爆。这款24.98万起的纯电SUV，月销2.4万辆，仅次于特斯拉Model Y，成为家庭用户的新宠。",
    "date": "2026-05-08",
    "source": "百度有驾",
    "url": "https://youjia.baidu.com/view/articleDetail/9097535688236369078",
    "link": "https://youjia.baidu.com/view/articleDetail/9097535688236369078",
    "heat": 92,
    "platforms": [
      "百度",
      "百度新闻"
    ],
    "keywords": [
      "#理想",
      "#企业新闻",
      "#理想i6第10万辆下线",
      "#月销2.4万辆仅次于特斯拉Model",
      "#Y"
    ]
  },
  {
    "id": "auto-import-14",
    "industry": "automotive",
    "brand": "理想",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "4月造车新势力大洗牌：零跑首超7万，小米、理想、小鹏均超3万",
    "summary": "2026年开年这4个月对于所有车企而言都是较冷的4个月。1-4月份，国内汽车销量表现下滑约20%。但零跑汽车4月销量首次突破7万辆，成为新势力销冠。小米、理想、小鹏均超3万辆。",
    "date": "2026-05-07",
    "source": "OFweek新能源汽车网",
    "url": "https://nev.ofweek.com/2026-05/ART-77013-8420-30686555.html",
    "link": "https://nev.ofweek.com/2026-05/ART-77013-8420-30686555.html",
    "heat": 91,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#理想",
      "#企业新闻",
      "#4月造车新势力大洗牌",
      "#零跑首超7万",
      "#小米"
    ]
  },
  {
    "id": "auto-import-22",
    "industry": "automotive",
    "brand": "零跑",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "零跑汽车：2025年50万台目标提前完成，明年冲击100万辆",
    "summary": "零跑汽车宣布2025年50万台销量目标提前完成。全链路数字化营销及服务系统部署后，潜客锁单率、到店锁单率等核心零售指标均有增长，门店运营效能同比增长27%。",
    "date": "2026-04-27",
    "source": "电子工程专辑",
    "url": "https://www.eet-china.com/mp/a452791.html",
    "link": "https://www.eet-china.com/mp/a452791.html",
    "heat": 80,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#零跑",
      "#企业新闻",
      "#零跑汽车",
      "#2025年50万台目标提前完成",
      "#明年冲击100万辆"
    ]
  },
  {
    "id": "auto-import-23",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "market",
    "categoryName": "市场热点",
    "title": "4月新能源汽车销量：比亚迪37.3万辆、吉利12.6万辆、零跑4.1万辆",
    "summary": "比亚迪乘用车4月销量372,615辆，同比增长19.4%，1-4月累计销量1,358,713辆。吉利汽车新能源板块销量突破12.5万辆，同比增长144%。零跑汽车表现亮眼。",
    "date": "2026-04-27",
    "source": "OFweek新能源汽车网",
    "url": "https://nev.ofweek.com/2025-05/ART-71000-8110-30662575.html",
    "link": "https://nev.ofweek.com/2025-05/ART-71000-8110-30662575.html",
    "heat": 81,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#比亚迪",
      "#市场热点",
      "#4月新能源汽车销量",
      "#比亚迪37.3万辆",
      "#吉利12.6万辆"
    ]
  },
  {
    "id": "auto-import-19",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "industry",
    "categoryName": "行业动态",
    "title": "2026北京国际汽车展览会开幕，新能源车型成主角",
    "summary": "4月24日，2026北京国际汽车展览会在京开幕。本届车展以\"突破·跃升\"为主题，集中展示全球汽车产业最新技术成果。长安马自达、比亚迪、小米汽车等品牌集中展示新能源转型成果，新能源汽车成为本届车展绝对主角。",
    "date": "2026-04-24",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/wm/2026-04-24/doc-inhvqfhn3299098.shtml",
    "link": "https://finance.sina.com.cn/wm/2026-04-24/doc-inhvqfhn3299098.shtml",
    "heat": 96,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#比亚迪",
      "#行业动态",
      "#2026北京国际汽车展览会开幕",
      "#新能源车型成主角"
    ]
  },
  {
    "id": "auto-import-47",
    "industry": "automotive",
    "brand": "宝马",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "奔驰\"赢回中国\"策略遭投资者质疑：过于强调豪华定位或将适得其反",
    "summary": "投资者对梅赛德斯-奔驰在中国市场的复苏路径提出质疑，并警告称，过于强调豪华定位可能影响其重新赢回中国消费者的能力。与宝马、奥迪类似，奔驰在中国市场份额持续下滑。",
    "date": "2026-04-21",
    "source": "新浪科技",
    "url": "https://finance.sina.com.cn/tech/digi/2026-04-21/doc-inhvayqm8650472.shtml",
    "link": "https://finance.sina.com.cn/tech/digi/2026-04-21/doc-inhvayqm8650472.shtml",
    "heat": 86,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#宝马",
      "#企业新闻",
      "#奔驰\"赢回中国\"策略遭投资者质疑",
      "#过于强调豪华定位或将适得其反"
    ]
  },
  {
    "id": "auto-import-48",
    "industry": "automotive",
    "brand": "宝马",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "全新宝马iX3长轴距版将于4月24日亮相，尺寸升级，续航超900公里",
    "summary": "全新宝马iX3长轴距版将正式亮相于2026北京车展。作为基于宝马新世代平台（Neue Klasse）打造的首款车型，新车主要针对尺寸、续航与智能系统进行升级，并将于今年下半年正式上市。",
    "date": "2026-04-21",
    "source": "汽车之家",
    "url": "https://chejiahao.autohome.com.cn/info/24775416",
    "link": "https://chejiahao.autohome.com.cn/info/24775416",
    "heat": 87,
    "platforms": [
      "汽车之家",
      "百度"
    ],
    "keywords": [
      "#宝马",
      "#新车发布",
      "#全新宝马iX3长轴距版将于4月24日亮相",
      "#尺寸升级",
      "#续航超900公里"
    ]
  },
  {
    "id": "auto-import-49",
    "industry": "automotive",
    "brand": "宝马",
    "category": "market",
    "categoryName": "市场热点",
    "title": "德系豪华车一季度在华销量普遍下滑，奔驰宝马奥迪集体承压",
    "summary": "梅赛德斯-奔驰、宝马、奥迪及保时捷均报告在华交付量大幅下降，主因包括激烈的市场竞争。梅赛德斯-奔驰称，2026年是其在中国这一全球最大汽车市场的\"过渡之年\"。",
    "date": "2026-04-21",
    "source": "Moomoo",
    "url": "https://www.moomoo.com/hant/news/post/68263459",
    "link": "https://www.moomoo.com/hant/news/post/68263459",
    "heat": 88,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#宝马",
      "#市场热点",
      "#德系豪华车一季度在华销量普遍下滑",
      "#奔驰宝马奥迪集体承压"
    ]
  },
  {
    "id": "auto-import-51",
    "industry": "automotive",
    "brand": "福特",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "丰田连续六年击败大众蝉联全球销冠，2025年销量超千万辆",
    "summary": "丰田汽车以逾千万辆的成绩实现六连冠，而大众集团连续6年位列第二。比亚迪2025年销量460万辆，超越福特和日产，首次跻身全球第六；吉利汽车销量411万辆，超越本田位居全球第八。",
    "date": "2026-04-21",
    "source": "新能源汽车",
    "url": "https://nev.ofweek.com/2026-04/ART-71008-8420-30684222.html",
    "link": "https://nev.ofweek.com/2026-04/ART-71008-8420-30684222.html",
    "heat": 90,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#福特",
      "#企业新闻",
      "#丰田连续六年击败大众蝉联全球销冠",
      "#2025年销量超千万辆"
    ]
  },
  {
    "id": "auto-import-52",
    "industry": "automotive",
    "brand": "本田",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "大众2025财年营业利润暴跌53.5%，将在德裁减5万个岗位",
    "summary": "2026年春，全球传统汽车工业现结构性危机。大众2025财年营业利润暴跌53.5%，税后净利润近乎腰斩，将在德裁减5万个岗位。本田2025财年预计净亏损4200亿日元。",
    "date": "2026-04-21",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/wm/2026-03-19/doc-inhrpfxy1536140.shtml",
    "link": "https://finance.sina.com.cn/wm/2026-03-19/doc-inhrpfxy1536140.shtml",
    "heat": 91,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#本田",
      "#企业新闻",
      "#大众2025财年营业利润暴跌53.5%",
      "#将在德裁减5万个岗位"
    ]
  },
  {
    "id": "auto-import-53",
    "industry": "automotive",
    "brand": "福特",
    "category": "market",
    "categoryName": "市场热点",
    "title": "美国关税重创汽车业：丰田预估损失91亿美元，全球车企损失超350亿美元",
    "summary": "在截至2026年3月31日的财年中，丰田预估关税相关成本将达到1.45万亿日元，约合91亿美元，远超其他竞争对手。美国本土的底特律三巨头——通用、福特、Stellantis在2025年同样受到严重冲击。",
    "date": "2026-04-21",
    "source": "盖世汽车",
    "url": "https://auto.gasgoo.com/news/202603/17I70450490C109.shtml",
    "link": "https://auto.gasgoo.com/news/202603/17I70450490C109.shtml",
    "heat": 92,
    "platforms": [
      "盖世汽车",
      "百度"
    ],
    "keywords": [
      "#福特",
      "#市场热点",
      "#美国关税重创汽车业",
      "#丰田预估损失91亿美元",
      "#全球车企损失超350亿美元"
    ]
  },
  {
    "id": "auto-import-54",
    "industry": "automotive",
    "brand": "丰田",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "2026合资车企大逃杀：一季度走量的只有大众+丰田",
    "summary": "一季度对合资品牌的经营产生了巨大的冲击，走量的目前只有大众+丰田，走合适规模的有通用+日产，围绕自己的优势品类，本田还在思考怎么办。豪华品牌同样面临巨大压力。",
    "date": "2026-04-21",
    "source": "腾讯新闻",
    "url": "https://news.qq.com/rain/a/20260413A0298000",
    "link": "https://news.qq.com/rain/a/20260413A0298000",
    "heat": 93,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#丰田",
      "#企业新闻",
      "#2026合资车企大逃杀",
      "#一季度走量的只有大众+丰田"
    ]
  },
  {
    "id": "auto-import-55",
    "industry": "automotive",
    "brand": "宝马",
    "category": "market",
    "categoryName": "市场热点",
    "title": "福特电动汽车销量暴跌70%，大众电动车销量暴跌近90%",
    "summary": "福特电动汽车销量暴跌70%，宝马跌幅超60%，大众近乎崩盘暴跌近90%。本田近期已将战略重心调整。美国市场的关税政策和需求疲软对传统车企电动车业务造成巨大冲击。",
    "date": "2026-04-21",
    "source": "百度有驾",
    "url": "https://youjia.baidu.com/view/articleDetail/9403956702842593853",
    "link": "https://youjia.baidu.com/view/articleDetail/9403956702842593853",
    "heat": 94,
    "platforms": [
      "百度",
      "百度新闻"
    ],
    "keywords": [
      "#宝马",
      "#市场热点",
      "#福特电动汽车销量暴跌70%",
      "#大众电动车销量暴跌近90%"
    ]
  },
  {
    "id": "auto-import-56",
    "industry": "automotive",
    "brand": "极氪",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "极氪8X上市不到半小时大定突破1万台，平均订单价格超40万元",
    "summary": "官方披露，极氪8X上市不到半小时大定已突破1万台，其中Ultra版及以上占比95.6%，平均订单价格超过40万元。从产品定位看，极氪8X瞄准的是传统豪华品牌长期占据的高端市场。",
    "date": "2026-04-21",
    "source": "新浪汽车",
    "url": "https://k.sina.com.cn/article_7857201856_1d45362c001904hrss.html",
    "link": "https://k.sina.com.cn/article_7857201856_1d45362c001904hrss.html",
    "heat": 95,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#极氪",
      "#企业新闻",
      "#极氪8X上市不到半小时大定突破1万台",
      "#平均订单价格超40万元"
    ]
  },
  {
    "id": "auto-import-57",
    "industry": "automotive",
    "brand": "零跑",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "零跑汽车2月交付28067台，位列新势力销量榜首",
    "summary": "零跑汽车2月交付28067台，环比下降12.5%，同比上涨11%，位列新势力销量榜首。作为2026年中国新能源汽车行业的最大\"黑马\"，零跑汽车以极致性价比策略持续扩大市场份额。",
    "date": "2026-04-21",
    "source": "爱卡汽车",
    "url": "https://aikahao.xcar.com.cn/item/3743117.html",
    "link": "https://aikahao.xcar.com.cn/item/3743117.html",
    "heat": 96,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#零跑",
      "#企业新闻",
      "#零跑汽车2月交付28067台",
      "#位列新势力销量榜首"
    ]
  },
  {
    "id": "auto-import-58",
    "industry": "automotive",
    "brand": "零跑",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "2026款零跑C10开启预售，预售价格12.98-14.98万元",
    "summary": "4月30日，零跑汽车正式宣布2026款C10开启预售，预售价格区间为12.98-14.98万元，全系共推出4款配置车型，以及增程和纯电两种动力可选，继续主打极致性价比。",
    "date": "2026-04-21",
    "source": "BitAuto",
    "url": "https://www.bitauto.com/zh-us/news/1003100183624.html",
    "link": "https://www.bitauto.com/zh-us/news/1003100183624.html",
    "heat": 78,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#零跑",
      "#新车发布",
      "#2026款零跑C10开启预售",
      "#预售价格12.98-14.98万元"
    ]
  },
  {
    "id": "auto-import-59",
    "industry": "automotive",
    "brand": "岚图",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "岚图汽车2026年加速布局高端市场，将推出\"50万级最强豪华MPV\"",
    "summary": "2026年，岚图汽车将完成MPV系列化布局，重磅加推一款\"50万级最强豪华MPV\"，代号\"珠峰\"，与岚图梦想家形成组合，剑指全品类MPV销冠及全球新能源MPV引领者地位。",
    "date": "2026-04-21",
    "source": "新华网",
    "url": "http://www.news.cn/auto/20260129/183f13c7326442e9a79e5e46cb84059f/c.html",
    "link": "http://www.news.cn/auto/20260129/183f13c7326442e9a79e5e46cb84059f/c.html",
    "heat": 79,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#岚图",
      "#企业新闻",
      "#岚图汽车2026年加速布局高端市场",
      "#将推出\"50万级最强豪华MPV\""
    ]
  },
  {
    "id": "auto-import-60",
    "industry": "automotive",
    "brand": "哪吒汽车",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "哪吒L发布：定位于家庭智能超级增程SUV，综合续航1300km",
    "summary": "哪吒在4月20日发布哪吒L，定位于家庭智能超级增程SUV，把性价比做到了极致，比如纯电续航超过300公里，搭载40度宁德时代电芯闪充大电池，综合续航1300km。",
    "date": "2026-04-21",
    "source": "界面新闻",
    "url": "https://www.jiemian.com/article/11134604.html",
    "link": "https://www.jiemian.com/article/11134604.html",
    "heat": 80,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#哪吒汽车",
      "#新车发布",
      "#哪吒L发布",
      "#定位于家庭智能超级增程SUV",
      "#综合续航1300km"
    ]
  },
  {
    "id": "auto-import-77",
    "industry": "automotive",
    "brand": "奥迪",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "奥迪A6L e-tron即将上市，大众ID.ERA 9X北京车展首秀",
    "summary": "面向中国市场的新一代电动化车型——大众汽车ID. ERA 9X、与众08，以及奥迪A6L e-tron将正式上市。ID.ERA 9X定位大型纯电SUV，预计售价40万级。",
    "date": "2026-04-21",
    "source": "大众汽车集团中国",
    "url": "https://www.volkswagengroupchina.com.cn/MediaCenter/News/Detail",
    "link": "https://www.volkswagengroupchina.com.cn/MediaCenter/News/Detail",
    "heat": 78,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#奥迪",
      "#新车发布",
      "#奥迪A6L",
      "#e-tron即将上市",
      "#大众ID.ERA"
    ]
  },
  {
    "id": "auto-import-41",
    "industry": "automotive",
    "brand": "蔚来",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "蔚来已建成全球规模最大高速换电体系，接入超120万根第三方充电桩",
    "summary": "蔚来公布最新充换电网络建设成果：已建成全球规模最大的高速换电体系，包括9纵11横16大城市群。全国建设超25,000根自有充电桩，接入第三方桩超1,200,000根。",
    "date": "2026-04-20",
    "source": "蔚来官网",
    "url": "https://www.nio.cn/nio-power",
    "link": "https://www.nio.cn/nio-power",
    "heat": 80,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#蔚来",
      "#企业新闻",
      "#蔚来已建成全球规模最大高速换电体系",
      "#接入超120万根第三方充电桩"
    ]
  },
  {
    "id": "auto-import-43",
    "industry": "automotive",
    "brand": "上汽大众",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "大众汽车集团2026年全速推进史上最大规模电动化产品攻势",
    "summary": "2026年，大众汽车集团在中国市场全速推进史上最大规模电动化产品攻势。四月车展季，集团携旗下多个品牌集中发力，上汽大众ID.ERA 9X大型纯电SUV将于3-4月正式上市，预计售价40万级。",
    "date": "2026-04-20",
    "source": "大众汽车集团",
    "url": "https://www.volkswagengroupchina.com.cn/MediaCenter/News/Detail",
    "link": "https://www.volkswagengroupchina.com.cn/MediaCenter/News/Detail",
    "heat": 82,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#上汽大众",
      "#新车发布",
      "#大众汽车集团2026年全速推进史上最大规模电动化产品攻势"
    ]
  },
  {
    "id": "auto-import-44",
    "industry": "automotive",
    "brand": "宝马",
    "category": "industry",
    "categoryName": "行业动态",
    "title": "2026北京车展4月24日开幕：创全球最大规模，首启双馆联动",
    "summary": "2026北京车展将于4月24日开幕，创全球最大规模，首启双馆联动。梅赛德斯-奔驰、宝马、奥迪、大众、丰田、本田、日产等均已确认参展，中国品牌阵容同样强大。",
    "date": "2026-04-20",
    "source": "电动邦",
    "url": "http://m.diandong.com/news/167374.html",
    "link": "http://m.diandong.com/news/167374.html",
    "heat": 83,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#宝马",
      "#行业动态",
      "#2026北京车展4月24日开幕",
      "#创全球最大规模",
      "#首启双馆联动"
    ]
  },
  {
    "id": "auto-import-142",
    "industry": "automotive",
    "brand": "奥迪",
    "category": "industry",
    "categoryName": "行业动态",
    "title": "大众汽车集团2026年在华推超20款新能源车，开启史上最大电动化攻势",
    "summary": "大众汽车集团2026年将在中国市场推出超过20款新能源车型及一系列燃油车型，平均每两周就有一款新车走向市场。ID.ERA 9X、与众08、奥迪A6L e-tron将正式上市。",
    "date": "2026-04-20",
    "source": "大众汽车集团中国",
    "url": "https://www.volkswagengroupchina.com.cn/MediaCenter/News/Detail",
    "link": "https://www.volkswagengroupchina.com.cn/MediaCenter/News/Detail",
    "heat": 86,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#奥迪",
      "#行业动态",
      "#大众汽车集团2026年在华推超20款新能源车",
      "#开启史上最大电动化攻势"
    ]
  },
  {
    "id": "auto-import-75",
    "industry": "automotive",
    "brand": "宝马",
    "category": "industry",
    "categoryName": "行业动态",
    "title": "BBA纯电车型全面推行\"一口价\"，告别砍价时代",
    "summary": "宝马、奔驰、奥迪三大德系豪华品牌最新的纯电车型已全面转向\"一口价\"销售模式，告别传统的经销商议价时代。这一变革标志着豪华品牌销售模式的重大转变。",
    "date": "2026-04-19",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/jjxw/2026-04-19/doc-inhvackv9065216.shtml",
    "link": "https://finance.sina.com.cn/jjxw/2026-04-19/doc-inhvackv9065216.shtml",
    "heat": 95,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#宝马",
      "#行业动态",
      "#BBA纯电车型全面推行\"一口价\"",
      "#告别砍价时代"
    ]
  },
  {
    "id": "auto-import-141",
    "industry": "automotive",
    "brand": "宝马",
    "category": "industry",
    "categoryName": "行业动态",
    "title": "BBA全新纯电车型全面推行\"一口价\"，告别砍价时代",
    "summary": "宝马、奔驰、奥迪三大德系豪华品牌最新的纯电车型已全面转向\"一口价\"销售模式，告别传统的经销商议价时代。这一变革标志着豪华品牌销售模式的重大转变。",
    "date": "2026-04-19",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/jjxw/2026-04-19/doc-inhvackv9065216.shtml",
    "link": "https://finance.sina.com.cn/jjxw/2026-04-19/doc-inhvackv9065216.shtml",
    "heat": 85,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#宝马",
      "#行业动态",
      "#BBA全新纯电车型全面推行\"一口价\"",
      "#告别砍价时代"
    ]
  },
  {
    "id": "auto-import-25",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "market",
    "categoryName": "市场热点",
    "title": "比亚迪4月销量37.3万辆领跑，小米YU7爆款预定",
    "summary": "比亚迪4月新能源汽车销量达372,615辆，环比增长0.3%，同比增长19.4%。特斯拉4月批发销量58,459辆。小米YU7预订火爆，成为今年最受期待的新能源车型之一。",
    "date": "2026-04-18",
    "source": "新浪财经",
    "url": "https://k.sina.com.cn/article_7857141524_1d452771401901xg14.html",
    "link": "https://k.sina.com.cn/article_7857141524_1d452771401901xg14.html",
    "heat": 83,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#比亚迪",
      "#市场热点",
      "#比亚迪4月销量37.3万辆领跑",
      "#小米YU7爆款预定"
    ]
  },
  {
    "id": "auto-import-24",
    "industry": "automotive",
    "brand": "小米汽车",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "胡峥楠出任小米汽车首位CTO，原特斯拉厂长宋钢任参谋长",
    "summary": "小米集团宣布两项人事任命：顺为投资合伙人兼小米汽车顾问胡峥楠正式加入小米，出任集团副总裁、汽车部CTO。同时，原特斯拉\"王牌厂长\"宋钢出任参谋长，负责生产制造。",
    "date": "2026-04-17",
    "source": "新浪汽车",
    "url": "https://k.sina.com.cn/article_7857201856_1d45362c001904g94w.html",
    "link": "https://k.sina.com.cn/article_7857201856_1d45362c001904g94w.html",
    "heat": 82,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#小米汽车",
      "#企业新闻",
      "#胡峥楠出任小米汽车首位CTO",
      "#原特斯拉厂长宋钢任参谋长"
    ]
  },
  {
    "id": "auto-import-30",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "industry",
    "categoryName": "行业动态",
    "title": "华为、小米、比亚迪、特斯拉等联合起草首个L2级辅助驾驶强制国标",
    "summary": "4月15日，华为、小米、比亚迪、特斯拉等头部企业联合起草的首个L2级辅助驾驶强制国家标准即将发布。该标准将规范辅助驾驶系统的安全性能要求，推动行业健康发展。",
    "date": "2026-04-17",
    "source": "华夏时报",
    "url": "https://k.sina.com.cn/article_7857201856_1d45362c001904flfm.html",
    "link": "https://k.sina.com.cn/article_7857201856_1d45362c001904flfm.html",
    "heat": 88,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#比亚迪",
      "#行业动态",
      "#华为",
      "#小米"
    ]
  },
  {
    "id": "auto-import-35",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "比亚迪上调2026年汽车出口目标至150万辆",
    "summary": "据彭博社报道，比亚迪在分析师沟通会上表示，有信心2026年汽车出口达150万辆，高于原定目标。同时计划2027年起在海外全面铺设闪充充电桩网络。",
    "date": "2026-04-16",
    "source": "IT之家",
    "url": "https://www.ithome.com/0/934/045.htm",
    "link": "https://www.ithome.com/0/934/045.htm",
    "heat": 93,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#比亚迪",
      "#企业新闻",
      "#比亚迪上调2026年汽车出口目标至150万辆"
    ]
  },
  {
    "id": "auto-import-148",
    "industry": "automotive",
    "brand": "丰田",
    "category": "car",
    "categoryName": "汽车",
    "title": "传统车企加速转型，燃油车市场份额跌破50%",
    "summary": "2026年一季度数据显示，燃油车市场份额首次跌破50%，新能源车及混动车型成为市场主流。大众、丰田、通用等传统巨头加速电动化布局。",
    "date": "2026-04-16",
    "source": "乘联会",
    "url": "https://www.cpcaauto.com/newslist",
    "link": "https://www.cpcaauto.com/newslist",
    "heat": 92,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#丰田",
      "#汽车",
      "#传统车企加速转型",
      "#燃油车市场份额跌破50%"
    ]
  },
  {
    "id": "auto-import-29",
    "industry": "automotive",
    "brand": "小米汽车",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "小米YU7即将上市，定位纯电SUV对标Model Y",
    "summary": "小米YU7作为小米汽车第二款量产车型，定位纯电中型SUV，直接对标特斯拉Model Y。据悉YU7预订火爆，预计将成为2026年新能源市场的爆款产品。",
    "date": "2026-04-15",
    "source": "汽车之家",
    "url": "https://chejiahao.autohome.com.cn/info/24895035",
    "link": "https://chejiahao.autohome.com.cn/info/24895035",
    "heat": 87,
    "platforms": [
      "汽车之家",
      "百度"
    ],
    "keywords": [
      "#小米汽车",
      "#新车发布",
      "#小米YU7即将上市",
      "#定位纯电SUV对标Model",
      "#Y"
    ]
  },
  {
    "id": "auto-import-42",
    "industry": "automotive",
    "brand": "宝马",
    "category": "industry",
    "categoryName": "行业动态",
    "title": "跨国车企在华格局生变：宝马奔驰2026年密集推新世代车型",
    "summary": "2026年，宝马预计将陆续推出多款\"新世代\"车型，智驾与Momenta合作城区领航；奔驰预计将推出包括全新纯电AMG GLC在内的至少18款新车，搭载自研MB.OS架构。跨国车企电动化转型加速。",
    "date": "2026-04-15",
    "source": "36氪",
    "url": "https://eu.36kr.com/zh/p/3656093952815875",
    "link": "https://eu.36kr.com/zh/p/3656093952815875",
    "heat": 81,
    "platforms": [
      "36氪",
      "百度"
    ],
    "keywords": [
      "#宝马",
      "#行业动态",
      "#跨国车企在华格局生变",
      "#宝马奔驰2026年密集推新世代车型"
    ]
  },
  {
    "id": "auto-import-76",
    "industry": "automotive",
    "brand": "奥迪",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "全新奥迪A6L家族正式上市，售价32.29万元起",
    "summary": "一汽奥迪举办\"千万用户盛典暨新品发布之夜\"，全新奥迪A6L家族正式上市，售价32.29万元起。奥迪A8停产，32年旗舰轿车画上句号。",
    "date": "2026-04-15",
    "source": "盖世汽车",
    "url": "https://m.gasgoo.com/news/TopicLive/813",
    "link": "https://m.gasgoo.com/news/TopicLive/813",
    "heat": 96,
    "platforms": [
      "盖世汽车",
      "百度"
    ],
    "keywords": [
      "#奥迪",
      "#新车发布",
      "#全新奥迪A6L家族正式上市",
      "#售价32.29万元起"
    ]
  },
  {
    "id": "auto-import-98",
    "industry": "automotive",
    "brand": "蔚来",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "蔚来换电站投资效益公布：初始投资高但使用成本低",
    "summary": "蔚来公布换电站投资效益与2026年前建设规划。换电站的初始投资约为普通充电站的2至3倍，但其每千瓦时的使用成本更低，具备较高投资价值。",
    "date": "2026-04-15",
    "source": "网通社",
    "url": "http://www.news18a.com/news/storys_246690.html",
    "link": "http://www.news18a.com/news/storys_246690.html",
    "heat": 80,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#蔚来",
      "#企业新闻",
      "#蔚来换电站投资效益公布",
      "#初始投资高但使用成本低"
    ]
  },
  {
    "id": "auto-import-105",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "tech",
    "categoryName": "技术趋势",
    "title": "L3 vs L4：自动驾驶2026年最大路线之争",
    "summary": "在GTC 2026上，英伟达不仅拉上了比亚迪、吉利开发L4，还宣布与Uber扩大合作，计划到2028年在全球28个城市推出自动驾驶车队。L3与L4路线之争成为2026年最大焦点。",
    "date": "2026-04-15",
    "source": "知乎",
    "url": "https://zhuanlan.zhihu.com/p/2019938816857776812",
    "link": "https://zhuanlan.zhihu.com/p/2019938816857776812",
    "heat": 87,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#比亚迪",
      "#技术趋势",
      "#L3",
      "#vs",
      "#L4"
    ]
  },
  {
    "id": "auto-import-114",
    "industry": "automotive",
    "brand": "丰田",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "广汽丰田MIRAI氢能轿车售价74.8万元，续航600-700公里",
    "summary": "广汽丰田引进销售的第二代MIRAI氢燃料电池轿车，建议零售价74.80万元。该车加氢时间3-5分钟，一次加氢可行驶600-700公里，整体体验类似传统汽油车。",
    "date": "2026-04-15",
    "source": "广汽丰田官网",
    "url": "https://campaign.gac-toyota.com.cn/brief/2022/MIRAI/",
    "link": "https://campaign.gac-toyota.com.cn/brief/2022/MIRAI/",
    "heat": 96,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#丰田",
      "#新车发布",
      "#广汽丰田MIRAI氢能轿车售价74.8万元",
      "#续航600-700公里"
    ]
  },
  {
    "id": "auto-import-117",
    "industry": "automotive",
    "brand": "小鹏",
    "category": "market",
    "categoryName": "市场热点",
    "title": "2026年有望成为飞行汽车从\"概念验证\"走向\"规模商用\"转折之年",
    "summary": "随着小鹏汇天、高域科技的量产交付，以及亿航智能常态化商业运营的推进，飞行汽车加速叩响空中通勤大门。未来商业化运营后，乘用价格有望逐步调整至专车水平。",
    "date": "2026-04-15",
    "source": "证券时报",
    "url": "https://www.stcn.com/article/detail/3739090.html",
    "link": "https://www.stcn.com/article/detail/3739090.html",
    "heat": 80,
    "platforms": [
      "证券时报",
      "百度"
    ],
    "keywords": [
      "#小鹏",
      "#市场热点",
      "#2026年有望成为飞行汽车从\"概念验证\"走向\"规模商用\"转折之年"
    ]
  },
  {
    "id": "auto-import-143",
    "industry": "automotive",
    "brand": "上汽大众",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "上汽大众ID.ERA 9X大型纯电SUV将上市，预计售价40万级",
    "summary": "上汽大众ID.ERA 9X是大众品牌2026年电动化战略的核心车型，预计于3-4月正式上市。新车定位大型纯电SUV市场，填补大众在大型电动SUV空白。",
    "date": "2026-04-15",
    "source": "第一电动",
    "url": "https://d1ev.com/news/qiye/290031",
    "link": "https://d1ev.com/news/qiye/290031",
    "heat": 87,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#上汽大众",
      "#新车发布",
      "#上汽大众ID.ERA",
      "#9X大型纯电SUV将上市",
      "#预计售价40万级"
    ]
  },
  {
    "id": "auto-import-144",
    "industry": "automotive",
    "brand": "奥迪",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "全新奥迪A6L家族上市售价32.29万元起，奥迪A8停产32年旗舰终结",
    "summary": "一汽奥迪举办\"千万用户盛典暨新品发布之夜\"，全新奥迪A6L家族正式上市，售价32.29万元起。同时奥迪A8停产，32年旗舰轿车画上句号。",
    "date": "2026-04-15",
    "source": "盖世汽车/有驾",
    "url": "https://m.gasgoo.com/news/TopicLive/813",
    "link": "https://m.gasgoo.com/news/TopicLive/813",
    "heat": 88,
    "platforms": [
      "盖世汽车",
      "百度"
    ],
    "keywords": [
      "#奥迪",
      "#新车发布",
      "#全新奥迪A6L家族上市售价32.29万元起",
      "#奥迪A8停产32年旗舰终结"
    ]
  },
  {
    "id": "auto-import-146",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "industry",
    "categoryName": "行业动态",
    "title": "L3 vs L4：自动驾驶2026年最大路线之争，英伟达拉拢比亚迪吉利",
    "summary": "在GTC 2026上，英伟达不仅拉上了比亚迪、吉利开发L4，还宣布与Uber扩大合作，计划到2028年在全球28个城市推出自动驾驶车队。L3与L4路线之争成为2026年最大焦点。",
    "date": "2026-04-15",
    "source": "知乎",
    "url": "https://zhuanlan.zhihu.com/p/2019938816857776812",
    "link": "https://zhuanlan.zhihu.com/p/2019938816857776812",
    "heat": 90,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#比亚迪",
      "#行业动态",
      "#L3",
      "#vs",
      "#L4"
    ]
  },
  {
    "id": "auto-import-38",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "market",
    "categoryName": "市场热点",
    "title": "2026年3月动力电池产量178GWh，宁德时代市占率重占半壁江山",
    "summary": "3月国内动力电池产量达178GWh，同比增长32%。宁德时代市占率重回50%以上，比亚迪、中创新航、国轩高科、亿纬锂能位居前五。车企\"去宁化\"遭遇挑战。",
    "date": "2026-04-14",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/tech/roll/2026-04-14/doc-inhunttw4018050.shtml",
    "link": "https://finance.sina.com.cn/tech/roll/2026-04-14/doc-inhunttw4018050.shtml",
    "heat": 96,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#比亚迪",
      "#市场热点",
      "#2026年3月动力电池产量178GWh",
      "#宁德时代市占率重占半壁江山"
    ]
  },
  {
    "id": "auto-import-81",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "market",
    "categoryName": "市场热点",
    "title": "宁德时代国内市占率超50%，双寡头格局稳固",
    "summary": "电池企业的竞争格局形成宁德时代和比亚迪两者相对较强的特征。宁德时代2026年Q1占比上升到50.1%，比亚迪的国内电池需求占比约16%，双寡头格局稳固。",
    "date": "2026-04-14",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/stock/relnews/cn/2026-04-14/doc-inhunttw4030075.shtml",
    "link": "https://finance.sina.com.cn/stock/relnews/cn/2026-04-14/doc-inhunttw4030075.shtml",
    "heat": 82,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#比亚迪",
      "#市场热点",
      "#宁德时代国内市占率超50%",
      "#双寡头格局稳固"
    ]
  },
  {
    "id": "auto-import-66",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "market",
    "categoryName": "市场热点",
    "title": "中国新能源汽车在巴西首次登顶销量榜，比亚迪市占率达78%",
    "summary": "英国广播公司报道称，在巴西，2026年2月，中国电动汽车首次登顶当地零售销量榜，其中比亚迪纯电车型的市场占有率高达78%，远超日韩及欧美品牌。",
    "date": "2026-04-13",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/wm/2026-04-13/doc-inhuixwy2374317.shtml",
    "link": "https://finance.sina.com.cn/wm/2026-04-13/doc-inhuixwy2374317.shtml",
    "heat": 86,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#比亚迪",
      "#市场热点",
      "#中国新能源汽车在巴西首次登顶销量榜",
      "#比亚迪市占率达78%"
    ]
  },
  {
    "id": "auto-import-40",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "industry",
    "categoryName": "行业动态",
    "title": "蔚来比亚迪隔空交锋，补能路线之争硝烟再起",
    "summary": "比亚迪宣布第二代刀片电池从10%到70%充电仅5分钟，2026年底建成2万座闪充站。蔚来则强调换电3分钟满血，已建成全球规模最大高速换电体系（9纵11横16大城市群）。两种路线竞争加剧。",
    "date": "2026-04-10",
    "source": "证券时报",
    "url": "https://www.stcn.com/article/detail/3669609.html",
    "link": "https://www.stcn.com/article/detail/3669609.html",
    "heat": 79,
    "platforms": [
      "证券时报",
      "百度"
    ],
    "keywords": [
      "#比亚迪",
      "#行业动态",
      "#蔚来比亚迪隔空交锋",
      "#补能路线之争硝烟再起"
    ]
  },
  {
    "id": "auto-import-106",
    "industry": "automotive",
    "brand": "特斯拉",
    "category": "tech",
    "categoryName": "技术趋势",
    "title": "华为ADS 4基础版仅1万元，有望挤压特斯拉FSD在华份额",
    "summary": "华为ADS在L3级测试中效果较好，华为ADS其他合作车型有望迅速落地。结合华为ADS4基础版仅1万元，华为有望进一步挤压外资并重塑梯队，特斯拉FSD在华份额或进一步萎缩。",
    "date": "2026-04-10",
    "source": "OFweek",
    "url": "https://nev.ofweek.com/2025-12/ART-77015-8110-30676560.html",
    "link": "https://nev.ofweek.com/2025-12/ART-77015-8110-30676560.html",
    "heat": 88,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#特斯拉",
      "#技术趋势",
      "#华为ADS",
      "#4基础版仅1万元",
      "#有望挤压特斯拉FSD在华份额"
    ]
  },
  {
    "id": "auto-import-110",
    "industry": "automotive",
    "brand": "长城汽车",
    "category": "tech",
    "categoryName": "技术趋势",
    "title": "EMB量产渐近，线控制动国产替代加速",
    "summary": "布雷博、博世、大陆集团等海外零部件供应商计划在2025年开启EMB（电子机械制动）方案量产。国内伯特利、长城精工、万安科技、比博斯特、格陆博等企业加速追赶，国产替代进程提速。",
    "date": "2026-04-10",
    "source": "东方财富",
    "url": "https://pdf.dfcfw.com/pdf/H3_AP202501041641810997_1.pdf",
    "link": "https://pdf.dfcfw.com/pdf/H3_AP202501041641810997_1.pdf",
    "heat": 92,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#长城汽车",
      "#技术趋势",
      "#EMB量产渐近",
      "#线控制动国产替代加速"
    ]
  },
  {
    "id": "auto-import-112",
    "industry": "automotive",
    "brand": "丰田",
    "category": "market",
    "categoryName": "市场热点",
    "title": "加氢站关停潮下，丰田Mir等氢燃料电池车面临加氢困境",
    "summary": "加氢站不足使得Mirai车主们常面临加氢难的困境，不少车辆已经闲置。过去几年氢燃料价格直线上涨，2022年为13美元/公斤，2024年达到36美元/公斤，使用成本激增。",
    "date": "2026-04-10",
    "source": "上汽通用五菱工会",
    "url": "https://lu.sgmw.com.cn/portal/details.html?id=51746",
    "link": "https://lu.sgmw.com.cn/portal/details.html?id=51746",
    "heat": 94,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#丰田",
      "#市场热点",
      "#加氢站关停潮下",
      "#丰田Mir等氢燃料电池车面临加氢困境"
    ]
  },
  {
    "id": "auto-import-115",
    "industry": "automotive",
    "brand": "小鹏",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "小鹏汇天\"陆地航母\"飞行汽车2026年量产交付，已获超7000台订单",
    "summary": "小鹏汇天\"陆地航母\"飞行汽车正按计划推进，计划于2026年实现量产交付。飞行体的生产许可证（PC）申请已获受理，核心产品拿下超7000台订单，全球首条飞行汽车量产线已完成试产。",
    "date": "2026-04-10",
    "source": "飞Auto/腾讯新闻",
    "url": "https://www.feiauto.com/tt/1723.html",
    "link": "https://www.feiauto.com/tt/1723.html",
    "heat": 78,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#小鹏",
      "#企业新闻",
      "#小鹏汇天\"陆地航母\"飞行汽车2026年量产交付",
      "#已获超7000台订单"
    ]
  },
  {
    "id": "auto-import-151",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "car",
    "categoryName": "汽车",
    "title": "汽车出口量跃居全球第一，中国品牌海外影响力提升",
    "summary": "2026年一季度中国汽车出口量达280万辆，超越日本和德国，成为全球最大汽车出口国。比亚迪、奇瑞、上汽等品牌在海外市场表现亮眼。",
    "date": "2026-04-10",
    "source": "海关总署",
    "url": "#",
    "link": "#",
    "heat": 95,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#比亚迪",
      "#汽车",
      "#汽车出口量跃居全球第一",
      "#中国品牌海外影响力提升"
    ]
  },
  {
    "id": "auto-import-85",
    "industry": "automotive",
    "brand": "特斯拉",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "特斯拉FSD获欧盟首批商用许可，荷兰交通部批准",
    "summary": "特斯拉FSD在欧盟获得重大突破：荷兰交通部批准特斯拉FSD在欧盟首批商用许可，成为首个在欧洲获得自动驾驶商用许可的外资车企。",
    "date": "2026-04-09",
    "source": "CSDN",
    "url": "https://blog.csdn.net/txg666/article/details/160193381",
    "link": "https://blog.csdn.net/txg666/article/details/160193381",
    "heat": 86,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#特斯拉",
      "#企业新闻",
      "#特斯拉FSD获欧盟首批商用许可",
      "#荷兰交通部批准"
    ]
  },
  {
    "id": "auto-import-34",
    "industry": "automotive",
    "brand": "比亚迪",
    "category": "market",
    "categoryName": "市场热点",
    "title": "特斯拉电动车年销量首次被比亚迪超越，全球格局重塑",
    "summary": "2026年一季度数据显示，特斯拉全球交付量达到358,023辆，被比亚迪超越。这是特斯拉首次在年度销量上被比亚迪超越，标志着全球电动车市场格局发生重大变化。",
    "date": "2026-04-08",
    "source": "东方财富",
    "url": "https://wap.eastmoney.com/a/202601043607774980.html",
    "link": "https://wap.eastmoney.com/a/202601043607774980.html",
    "heat": 92,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#比亚迪",
      "#市场热点",
      "#特斯拉电动车年销量首次被比亚迪超越",
      "#全球格局重塑"
    ]
  },
  {
    "id": "auto-import-82",
    "industry": "automotive",
    "brand": "小鹏",
    "category": "tech",
    "categoryName": "技术趋势",
    "title": "小鹏宣布跳过L3直接量产L4，年内实现C端交付",
    "summary": "4月8日，小鹏汽车CEO何小鹏正式宣布，将跳过L3阶段，于年内实现L4级自动驾驶的C端量产，依托城市NOA、端到端大模型与高算力冗余感知体系。",
    "date": "2026-04-08",
    "source": "央广网",
    "url": "https://auto.cnr.cn/2015xc/20260415/t20260415_527585347.shtml",
    "link": "https://auto.cnr.cn/2015xc/20260415/t20260415_527585347.shtml",
    "heat": 83,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#小鹏",
      "#技术趋势",
      "#小鹏宣布跳过L3直接量产L4",
      "#年内实现C端交付"
    ]
  },
  {
    "id": "auto-import-31",
    "industry": "automotive",
    "brand": "问界",
    "category": "newcar",
    "categoryName": "新车发布",
    "title": "鸿蒙智行2026款问界M9无伪装实车曝光，智驾状态路测中",
    "summary": "2026款问界M9无伪装实车已开启路测，正持续有新信息曝出。新车门把手焕新为尊界S800同款\"九天星辰\"设计，支持隔空手势开门；前后均配备隐私玻璃。",
    "date": "2026-04-07",
    "source": "IT之家",
    "url": "https://www.ithome.com/0/936/690.htm",
    "link": "https://www.ithome.com/0/936/690.htm",
    "heat": 89,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#问界",
      "#新车发布",
      "#鸿蒙智行2026款问界M9无伪装实车曝光",
      "#智驾状态路测中"
    ]
  },
  {
    "id": "auto-import-65",
    "industry": "automotive",
    "brand": "奇瑞",
    "category": "market",
    "categoryName": "市场热点",
    "title": "2026年1-2月中国乘用车出海：欧洲奇瑞领跑，中南美全线高增",
    "summary": "根据盖世汽车研究院数据，2026年1-2月，中国乘用车出口全球各大区域呈现区域格局鲜明、头部领跑、增速分化、新能源驱动的整体态势。欧洲市场奇瑞强势登顶，中南美全线高增。",
    "date": "2026-04-07",
    "source": "凤凰网",
    "url": "https://h5.ifeng.com/c/vivo/v002Uz6NvYeGwr7M8L6Zzg8ESDGTH1-_6XKX7KddTHgx4z2Q__",
    "link": "https://h5.ifeng.com/c/vivo/v002Uz6NvYeGwr7M8L6Zzg8ESDGTH1-_6XKX7KddTHgx4z2Q__",
    "heat": 85,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#奇瑞",
      "#市场热点",
      "#2026年1-2月中国乘用车出海",
      "#欧洲奇瑞领跑",
      "#中南美全线高增"
    ]
  },
  {
    "id": "auto-import-84",
    "industry": "automotive",
    "brand": "特斯拉",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "特斯拉FSD中国版定档4月，本土化优化完成",
    "summary": "特斯拉中国版的FSD（完全自动驾驶）将会在2026年4月5日正式推送。特斯拉2026年1月已实现无安全员Robotaxi商业化运营，标志着自动驾驶技术进入新阶段。",
    "date": "2026-04-05",
    "source": "有驾",
    "url": "https://youjia.baidu.com/view/articleDetail/10048025510451787599",
    "link": "https://youjia.baidu.com/view/articleDetail/10048025510451787599",
    "heat": 85,
    "platforms": [
      "百度",
      "百度新闻"
    ],
    "keywords": [
      "#特斯拉",
      "#企业新闻",
      "#特斯拉FSD中国版定档4月",
      "#本土化优化完成"
    ]
  },
  {
    "id": "auto-import-71",
    "industry": "automotive",
    "brand": "零跑",
    "category": "market",
    "categoryName": "市场热点",
    "title": "零跑3月销量破5万登顶新势力榜首，成最大黑马",
    "summary": "零跑汽车3月交付50,029辆，稳居新势力销量榜首，成为3月最大黑马。这是零跑首次突破5万辆月销大关，展现出强劲的市场竞争力。",
    "date": "2026-04-04",
    "source": "21财经",
    "url": "https://www.21jingji.com/article/20260404/herald/228312a8ca0e6992409328c6596dc0f2.html",
    "link": "https://www.21jingji.com/article/20260404/herald/228312a8ca0e6992409328c6596dc0f2.html",
    "heat": 91,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#零跑",
      "#市场热点",
      "#零跑3月销量破5万登顶新势力榜首",
      "#成最大黑马"
    ]
  },
  {
    "id": "auto-import-135",
    "industry": "automotive",
    "brand": "蔚来",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "途虎养车与蔚来签署战略合作，聚焦用户运营领域",
    "summary": "3月17日，途虎养车与蔚来品牌正式签署战略合作协议，双方将聚焦用户运营领域，通过资源整合，为用户提供更多贯穿车辆全生命周期的个性化、高品质服务。",
    "date": "2026-04-03",
    "source": "腾讯新闻",
    "url": "https://news.qq.com/rain/a/20260403A063UY00",
    "link": "https://news.qq.com/rain/a/20260403A063UY00",
    "heat": 79,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#蔚来",
      "#企业新闻",
      "#途虎养车与蔚来签署战略合作",
      "#聚焦用户运营领域"
    ]
  },
  {
    "id": "auto-import-72",
    "industry": "automotive",
    "brand": "理想",
    "category": "market",
    "categoryName": "市场热点",
    "title": "理想强势反弹月销4万，同比增长173%超季度指引上限",
    "summary": "理想汽车3月交付41,053辆，同比增长173%，时隔两年首次超过季度指引上限。理想L系列大改款即将到来，L9将搭载更大容量电池支持5C超充。",
    "date": "2026-04-01",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/stock/relnews/hk/2026-04-01/doc-inhszayn2543658.shtml",
    "link": "https://finance.sina.com.cn/stock/relnews/hk/2026-04-01/doc-inhszayn2543658.shtml",
    "heat": 92,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#理想",
      "#市场热点",
      "#理想强势反弹月销4万",
      "#同比增长173%超季度指引上限"
    ]
  },
  {
    "id": "auto-import-73",
    "industry": "automotive",
    "brand": "蔚来",
    "category": "market",
    "categoryName": "市场热点",
    "title": "蔚来3月交付35486辆同比大增136%，最艰难时刻已过",
    "summary": "蔚来汽车3月交付35,486辆，同比增长136%，一季度交付近翻倍。CEO李斌明确2026年销量增长40%-50%目标，蔚来进入收割红利期。",
    "date": "2026-04-01",
    "source": "华尔街见闻",
    "url": "https://wallstreetcn.com/articles/3768999",
    "link": "https://wallstreetcn.com/articles/3768999",
    "heat": 93,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#蔚来",
      "#市场热点",
      "#蔚来3月交付35486辆同比大增136%",
      "#最艰难时刻已过"
    ]
  },
  {
    "id": "auto-import-74",
    "industry": "automotive",
    "brand": "极氪",
    "category": "market",
    "categoryName": "市场热点",
    "title": "极氪交付2.9万辆同比增长90%，高端品牌表现强劲",
    "summary": "极氪汽车3月交付29,000辆，同比增长90%，环比增长23%。极氪在高端新能源市场持续发力，产品竞争力不断提升。",
    "date": "2026-04-01",
    "source": "21财经",
    "url": "https://www.21jingji.com/article/20260404/herald/228312a8ca0e6992409328c6596dc0f2.html",
    "link": "https://www.21jingji.com/article/20260404/herald/228312a8ca0e6992409328c6596dc0f2.html",
    "heat": 94,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#极氪",
      "#市场热点",
      "#极氪交付2.9万辆同比增长90%",
      "#高端品牌表现强劲"
    ]
  },
  {
    "id": "auto-import-138",
    "industry": "automotive",
    "brand": "理想",
    "category": "market",
    "categoryName": "市场热点",
    "title": "3月新势力销量完整榜：零跑5万、理想4万、蔚来3.5万居前三",
    "summary": "零跑50,029辆居首；理想41,053辆同比增长173%；蔚来35,486辆同比增长136%；极氪29,000辆同比增长90%；小鹏27,415辆环比增长80%；小米持续热销。",
    "date": "2026-04-01",
    "source": "21财经/车东西",
    "url": "https://www.21jingji.com/article/20260404/herald/228312a8ca0e6992409328c6596dc0f2.html",
    "link": "https://www.21jingji.com/article/20260404/herald/228312a8ca0e6992409328c6596dc0f2.html",
    "heat": 82,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#理想",
      "#市场热点",
      "#3月新势力销量完整榜",
      "#零跑5万",
      "#理想4万"
    ]
  },
  {
    "id": "auto-import-28",
    "industry": "automotive",
    "brand": "蔚来",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "蔚来明确2026年增长目标：销量增长40%-50%，力争实现盈利",
    "summary": "蔚来再次明确\"40%-50%的年销量增长（即45.64万至48.9万辆）\"目标，并立下2026年盈利目标。李斌在内部会详解CBU（基本经营单元）改革、产品大年战略和国际化布局。",
    "date": "2026-03-26",
    "source": "证券时报",
    "url": "https://www.stcn.com/article/detail/1522787.html",
    "link": "https://www.stcn.com/article/detail/1522787.html",
    "heat": 86,
    "platforms": [
      "证券时报",
      "百度"
    ],
    "keywords": [
      "#蔚来",
      "#企业新闻",
      "#蔚来明确2026年增长目标",
      "#销量增长40%-50%",
      "#力争实现盈利"
    ]
  },
  {
    "id": "auto-import-26",
    "industry": "automotive",
    "brand": "小鹏",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "小鹏汽车Q4财报：交付116249辆创单季新高，全年交付超42万辆",
    "summary": "小鹏汽车发布2025年第四季度财报，交付116,249辆新车，同比增长27.0%，创单季交付量历史新高。2025年全年累计交付429,445辆，同比增长125.9%，毛利率创新高。",
    "date": "2026-03-23",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/roll/2026-03-23/doc-inhrwuhf5863509.shtml",
    "link": "https://finance.sina.com.cn/roll/2026-03-23/doc-inhrwuhf5863509.shtml",
    "heat": 84,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#小鹏",
      "#企业新闻",
      "#小鹏汽车Q4财报",
      "#交付116249辆创单季新高",
      "#全年交付超42万辆"
    ]
  },
  {
    "id": "auto-import-27",
    "industry": "automotive",
    "brand": "理想",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "理想汽车2026年目标：冲击50万年销，李想预告纯电旗舰",
    "summary": "理想汽车CEO李想在财报电话会上表示，2026年目标在2025年40.63万辆基础上实现超20%增长，约50万辆。同时预告第三代纯电平台旗舰车型将于2026年交付。",
    "date": "2026-03-12",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/jjxw/2026-03-12/doc-inhqtyyf8368176.shtml",
    "link": "https://finance.sina.com.cn/jjxw/2026-03-12/doc-inhqtyyf8368176.shtml",
    "heat": 85,
    "platforms": [
      "新浪财经",
      "百度"
    ],
    "keywords": [
      "#理想",
      "#企业新闻",
      "#理想汽车2026年目标",
      "#冲击50万年销",
      "#李想预告纯电旗舰"
    ]
  },
  {
    "id": "auto-import-45",
    "industry": "automotive",
    "brand": "宝马",
    "category": "company",
    "categoryName": "企业新闻",
    "title": "2026开年多家跨国车企高层密集换帅，聚焦盈利与电动转型",
    "summary": "2026年初，宝马、丰田、奔驰、捷豹路虎、奥迪等多家跨国车企相继宣布高层人事调整。宝马由柯睿辰接任，各车企聚焦盈利能力提升与电动化转型战略落地。",
    "date": "2026-01-15",
    "source": "新华财经",
    "url": "http://www.news18a.com/news/storys_234748.html",
    "link": "http://www.news18a.com/news/storys_234748.html",
    "heat": 84,
    "platforms": [
      "百度",
      "微博"
    ],
    "keywords": [
      "#宝马",
      "#企业新闻",
      "#2026开年多家跨国车企高层密集换帅",
      "#聚焦盈利与电动转型"
    ]
  }
];
  const fmcgRecords = buildRecords("fmcg", fmcgBrands, fmcgPlatforms, fmcgTopics, "快消板块");
  const stateRecords = buildRecords("stateowned", stateBrands, statePlatforms, stateTopics, "央国企板块");

  const fmcgRealRecords = [
    {
      id: "fmcg-real-001",
      industry: "fmcg",
      brand: "可口可乐",
      category: "company",
      categoryName: "企业新闻",
      title: "可口可乐公司2026Q1全球单箱销量增长3%，受中国等市场驱动",
      summary: "可口可乐中国披露 2026 年一季度业绩与中国市场动作，提到春节场景营销、益生元汽水、雪碧+茶、美汁源新品以及珠海新厂启用等关键事件。",
      date: "2026-04-28",
      source: "可口可乐中国",
      url: "https://www.coca-cola.com/cn/zh/media-center/2026Q1-financial-report",
      link: "https://www.coca-cola.com/cn/zh/media-center/2026Q1-financial-report",
      heat: 95,
      platforms: ["百度", "微博", "微信"],
      keywords: ["#可口可乐", "#Q1财报", "#益生元汽水", "#雪碧加茶", "#珠海新厂"]
    },
    {
      id: "fmcg-real-002",
      industry: "fmcg",
      brand: "可口可乐",
      category: "csr",
      categoryName: "品牌事件",
      title: "十五载“净水”再升级：可口可乐中国加码助力乡村校园饮水安全",
      summary: "可口可乐中国联合中粮可口可乐与太古可口可乐宣布 2026 年新增捐赠 15 台净水设备，总价值逾 50 万元，并继续推进“净水计划”公益项目。",
      date: "2026-04-15",
      source: "可口可乐中国",
      url: "https://www.coca-cola.com/cn/zh/media-center/2026_drinking_water_safety",
      link: "https://www.coca-cola.com/cn/zh/media-center/2026_drinking_water_safety",
      heat: 88,
      platforms: ["百度", "微信", "微博"],
      keywords: ["#可口可乐", "#净水计划", "#公益项目", "#乡村校园", "#品牌事件"]
    },
    {
      id: "fmcg-real-003",
      industry: "fmcg",
      brand: "可口可乐",
      category: "investment",
      categoryName: "企业新闻",
      title: "可口可乐加码在华投资，西部中原沿海布局升级",
      summary: "可口可乐中国系统披露陕西、河南新厂投产与大湾区智能绿色生产基地建设进展，重点强调本土投资、数智制造与绿色供应链升级。",
      date: "2025-10-17",
      source: "可口可乐中国",
      url: "https://www.coca-cola.com/cn/zh/media-center/1017News",
      link: "https://www.coca-cola.com/cn/zh/media-center/1017News",
      heat: 83,
      platforms: ["百度", "微信", "微博"],
      keywords: ["#可口可乐", "#在华投资", "#绿色供应链", "#智能制造", "#企业新闻"]
    }
  ];

  const stateRealRecords = [
    {
      id: "state-real-001",
      industry: "stateowned",
      brand: "泰康",
      category: "brand",
      categoryName: "品牌事件",
      title: "泰康资产蝉联全球资管500强，排名上升至全球第50位",
      summary: "泰康官方披露泰康资产在全球资管 500 强中的最新排名，成为 2026 年品牌影响力与资管实力的重要事件节点。",
      date: "2026-06-17",
      source: "泰康官网新闻",
      url: "https://www.taikang.com/news/groupnews/2026/06/18/4617.html",
      link: "https://www.taikang.com/news/groupnews/2026/06/18/4617.html",
      heat: 96,
      platforms: ["百度", "微信", "微博"],
      keywords: ["#泰康", "#资管500强", "#全球排名", "#资管实力", "#品牌事件"]
    },
    {
      id: "state-real-002",
      industry: "stateowned",
      brand: "泰康",
      category: "medical",
      categoryName: "企业新闻",
      title: "全国第30家！泰康之家·蓉园正式开业",
      summary: "泰康在成都落地第 30 家养老社区，联动四川泰康医院推进医养融合 3.0，体现其 2026 年医养业务扩张与城市养联体布局。",
      date: "2026-05-29",
      source: "泰康官网新闻",
      url: "https://www.taikang.com/news/groupnews/2026/06/01/4611.html",
      link: "https://www.taikang.com/news/groupnews/2026/06/01/4611.html",
      heat: 92,
      platforms: ["百度", "微信", "视频号"],
      keywords: ["#泰康", "#泰康之家", "#蓉园", "#医养融合", "#养老社区"]
    },
    {
      id: "state-real-003",
      industry: "stateowned",
      brand: "泰康",
      category: "csr",
      categoryName: "品牌事件",
      title: "第500家！泰康“溢彩千家”新里程，溢彩康养人暖心发布",
      summary: "泰康溢彩公益基金会推进“溢彩千家”第 500 家落地，并发布康养人才公益项目升级计划，反映 2026 年养老公益与康养人才布局。",
      date: "2026-05-21",
      source: "泰康官网新闻",
      url: "https://www.taikang.com/news/groupnews/2026/05/25/4600.html",
      link: "https://www.taikang.com/news/groupnews/2026/05/25/4600.html",
      heat: 89,
      platforms: ["百度", "微信", "微博"],
      keywords: ["#泰康", "#溢彩千家", "#康养人才", "#公益项目", "#品牌事件"]
    },
    {
      id: "state-real-004",
      industry: "stateowned",
      brand: "泰康",
      category: "medical",
      categoryName: "企业新闻",
      title: "泰康同济（武汉）医院三甲正式揭牌！开启长寿医疗体系建设新篇章",
      summary: "泰康同济（武汉）医院完成三甲揭牌，成为泰康医疗体系建设和长寿医疗叙事的重要 2026 年节点事件。",
      date: "2026-05-11",
      source: "泰康官网新闻",
      url: "https://www.taikang.com/news/groupnews/2026/05/12/4597.html",
      link: "https://www.taikang.com/news/groupnews/2026/05/12/4597.html",
      heat: 90,
      platforms: ["百度", "微信", "微博"],
      keywords: ["#泰康", "#同济医院", "#三甲医院", "#长寿医疗", "#企业新闻"]
    },
    {
      id: "state-real-005",
      industry: "stateowned",
      brand: "泰康",
      category: "risk",
      categoryName: "风险提示",
      title: "关于防范“人伤黄牛”非法中介的风险提示",
      summary: "泰康官网 2026 年公告类正文页，对外发布保险服务相关风险提示，属于品牌在公众沟通与合规层面的真实事件资料。",
      date: "2026-03-27",
      source: "泰康官网公告",
      url: "https://www.taikang.com/news/risk/2026/03/27/4540.html",
      link: "https://www.taikang.com/news/risk/2026/03/27/4540.html",
      heat: 78,
      platforms: ["百度", "微信"],
      keywords: ["#泰康", "#风险提示", "#保险服务", "#合规沟通", "#公告"]
    }
  ];

  const automotiveSupplementRecords = [
    {
      id: "auto-supp-001",
      industry: "automotive",
      brand: "212越野车",
      category: "brand",
      categoryName: "品牌事件",
      title: "212越野车2026年持续承接硬派越野与品牌焕新讨论",
      summary: "212越野车围绕品牌焕新、经典越野文化、车展曝光和圈层传播持续获得关注，当前先收录品牌事件卡，便于后续继续补入单篇正文页。",
      date: "2026-06-24",
      source: "212越野车资料整理",
      url: "#",
      link: "#",
      heat: 84,
      platforms: ["百度", "懂车帝", "微博"],
      keywords: ["#212越野车", "#品牌焕新", "#硬派越野", "#经典车型", "#品牌事件"]
    },
    {
      id: "auto-supp-002",
      industry: "automotive",
      brand: "淘车车",
      category: "service",
      categoryName: "平台服务",
      title: "淘车车2026年围绕二手车检测、门店服务与用户交易持续扩圈",
      summary: "淘车车在二手车检测、门店服务、直播带看和交易保障等场景持续形成讨论热度，当前收录平台服务卡，后续继续补正文级案例页。",
      date: "2026-06-24",
      source: "淘车车资料整理",
      url: "#",
      link: "#",
      heat: 85,
      platforms: ["百度", "抖音", "微信"],
      keywords: ["#淘车车", "#二手车", "#检测服务", "#门店转化", "#平台服务"]
    },
    {
      id: "auto-supp-003",
      industry: "automotive",
      brand: "捷途",
      category: "market",
      categoryName: "市场热点",
      title: "捷途2026年围绕旅行+越野场景持续释放品牌热度",
      summary: "捷途品牌在旅行越野、家庭出行和轻改装场景持续活跃，形成稳定的车型内容与社媒讨论，是 2026 年汽车内容的重要观察对象。",
      date: "2026-06-20",
      source: "捷途资料整理",
      url: "#",
      link: "#",
      heat: 80,
      platforms: ["百度", "抖音", "小红书"],
      keywords: ["#捷途", "#旅行越野", "#家庭出行", "#轻改装", "#市场热点"]
    },
    {
      id: "auto-supp-004",
      industry: "automotive",
      brand: "哈弗",
      category: "market",
      categoryName: "市场热点",
      title: "哈弗2026年围绕SUV主力车型与家庭出行话题保持活跃",
      summary: "哈弗在 SUV 主力车型、家庭出行和价格带竞争中持续被提及，适合作为全年市场热度与车型传播的重要跟踪品牌。",
      date: "2026-06-19",
      source: "哈弗资料整理",
      url: "#",
      link: "#",
      heat: 79,
      platforms: ["百度", "懂车帝", "微博"],
      keywords: ["#哈弗", "#SUV", "#家庭出行", "#车型传播", "#市场热点"]
    },
    {
      id: "auto-supp-005",
      industry: "automotive",
      brand: "一汽红旗",
      category: "brand",
      categoryName: "品牌事件",
      title: "一汽红旗2026年围绕新能源焕新与高端国车叙事持续升温",
      summary: "红旗品牌在高端新能源、国车形象和品牌焕新传播上保持较强存在感，当前收录品牌事件卡以承接全年资料补充。",
      date: "2026-06-18",
      source: "红旗资料整理",
      url: "#",
      link: "#",
      heat: 82,
      platforms: ["百度", "微博", "微信"],
      keywords: ["#一汽红旗", "#高端新能源", "#国车形象", "#品牌焕新", "#品牌事件"]
    },
    {
      id: "auto-supp-006",
      industry: "automotive",
      brand: "广汽传祺",
      category: "market",
      categoryName: "市场热点",
      title: "广汽传祺2026年在家用SUV与新能源转型中保持持续曝光",
      summary: "广汽传祺围绕家用 SUV、MPV 和新能源转型保持较高内容活跃度，是主流自主品牌传播中的重要组成部分。",
      date: "2026-06-17",
      source: "广汽传祺资料整理",
      url: "#",
      link: "#",
      heat: 78,
      platforms: ["百度", "抖音", "微博"],
      keywords: ["#广汽传祺", "#家用SUV", "#MPV", "#新能源转型", "#市场热点"]
    },
    {
      id: "auto-supp-007",
      industry: "automotive",
      brand: "腾势",
      category: "brand",
      categoryName: "品牌事件",
      title: "腾势2026年持续强化高端新能源与豪华科技形象",
      summary: "腾势围绕高端新能源、智能豪华和旗舰车型传播持续提升声量，当前先收录品牌事件卡，便于后续补充具体正文报道。",
      date: "2026-06-16",
      source: "腾势资料整理",
      url: "#",
      link: "#",
      heat: 81,
      platforms: ["百度", "微博", "小红书"],
      keywords: ["#腾势", "#高端新能源", "#智能豪华", "#旗舰车型", "#品牌事件"]
    },
    {
      id: "auto-supp-008",
      industry: "automotive",
      brand: "阿维塔",
      category: "brand",
      categoryName: "品牌事件",
      title: "阿维塔2026年围绕智能豪华、电动旗舰与生态合作持续发声",
      summary: "阿维塔在智能豪华、电动旗舰和生态合作叙事上维持较强传播热度，是高端智能新能源阵营中值得持续观察的品牌。",
      date: "2026-06-15",
      source: "阿维塔资料整理",
      url: "#",
      link: "#",
      heat: 80,
      platforms: ["百度", "微博", "抖音"],
      keywords: ["#阿维塔", "#智能豪华", "#电动旗舰", "#生态合作", "#品牌事件"]
    },
    {
      id: "auto-supp-009",
      industry: "automotive",
      brand: "深蓝汽车",
      category: "market",
      categoryName: "市场热点",
      title: "深蓝汽车2026年围绕年轻化新能源与主流价格带竞争持续加热",
      summary: "深蓝汽车在年轻用户、新能源车型和主流价格带竞争中保持较高活跃度，适合作为全年品牌走势跟踪对象。",
      date: "2026-06-14",
      source: "深蓝汽车资料整理",
      url: "#",
      link: "#",
      heat: 79,
      platforms: ["百度", "抖音", "小红书"],
      keywords: ["#深蓝汽车", "#年轻化", "#新能源", "#主流价格带", "#市场热点"]
    },
    {
      id: "auto-supp-010",
      industry: "automotive",
      brand: "领克",
      category: "brand",
      categoryName: "品牌事件",
      title: "领克2026年持续强化性能、年轻化与新能源品牌调性",
      summary: "领克品牌围绕性能、年轻化和新能源产品持续进行内容布局，在圈层传播与品牌认知上保持稳定声量。",
      date: "2026-06-13",
      source: "领克资料整理",
      url: "#",
      link: "#",
      heat: 78,
      platforms: ["百度", "微博", "B站"],
      keywords: ["#领克", "#性能", "#年轻化", "#新能源品牌", "#品牌事件"]
    },
    {
      id: "auto-supp-011",
      industry: "automotive",
      brand: "smart",
      category: "brand",
      categoryName: "品牌事件",
      title: "smart 2026年围绕精品纯电与都市出行场景持续积累内容热度",
      summary: "smart 在精品纯电、都市通勤和设计感表达方面持续形成差异化讨论，是细分电动车品牌中的重点观察对象。",
      date: "2026-06-12",
      source: "smart资料整理",
      url: "#",
      link: "#",
      heat: 77,
      platforms: ["百度", "小红书", "微博"],
      keywords: ["#smart", "#精品纯电", "#都市出行", "#设计感", "#品牌事件"]
    },
    {
      id: "auto-supp-012",
      industry: "automotive",
      brand: "别克",
      category: "market",
      categoryName: "市场热点",
      title: "别克2026年在合资品牌竞争与新能源转型中保持稳定讨论度",
      summary: "别克围绕合资品牌价格竞争、车型更新和新能源转型持续被提及，是合资阵营传播中不可忽略的长期品牌。",
      date: "2026-06-11",
      source: "别克资料整理",
      url: "#",
      link: "#",
      heat: 76,
      platforms: ["百度", "懂车帝", "微博"],
      keywords: ["#别克", "#合资品牌", "#价格竞争", "#新能源转型", "#市场热点"]
    },
    {
      id: "auto-supp-013",
      industry: "automotive",
      brand: "雪佛兰",
      category: "market",
      categoryName: "市场热点",
      title: "雪佛兰2026年围绕产品更新与品牌声量修复保持阶段性曝光",
      summary: "雪佛兰在产品更新、合资品牌竞争和市场声量修复方向持续获得阶段性关注，当前先纳入品牌资料池。",
      date: "2026-06-10",
      source: "雪佛兰资料整理",
      url: "#",
      link: "#",
      heat: 75,
      platforms: ["百度", "微博", "抖音"],
      keywords: ["#雪佛兰", "#产品更新", "#合资品牌", "#声量修复", "#市场热点"]
    },
    {
      id: "auto-supp-014",
      industry: "automotive",
      brand: "沃尔沃",
      category: "brand",
      categoryName: "品牌事件",
      title: "沃尔沃2026年围绕安全科技与豪华新能源转型保持持续传播",
      summary: "沃尔沃持续围绕安全科技、北欧豪华和新能源转型进行品牌传播，是豪华品牌内容竞争中的稳定参与者。",
      date: "2026-06-09",
      source: "沃尔沃资料整理",
      url: "#",
      link: "#",
      heat: 79,
      platforms: ["百度", "微博", "微信"],
      keywords: ["#沃尔沃", "#安全科技", "#豪华新能源", "#品牌传播", "#品牌事件"]
    },
    {
      id: "auto-supp-015",
      industry: "automotive",
      brand: "五菱",
      category: "market",
      categoryName: "市场热点",
      title: "五菱2026年围绕国民出行与新能源小车市场持续保持高曝光",
      summary: "五菱在国民代步、新能源小车和多场景出行赛道保持稳定声量，属于全国范围关注度较高的主流汽车品牌。",
      date: "2026-06-08",
      source: "五菱资料整理",
      url: "#",
      link: "#",
      heat: 81,
      platforms: ["百度", "抖音", "微博"],
      keywords: ["#五菱", "#新能源小车", "#国民出行", "#多场景用车", "#市场热点"]
    },
    {
      id: "auto-supp-016",
      industry: "automotive",
      brand: "长安启源",
      category: "brand",
      categoryName: "品牌事件",
      title: "长安启源2026年持续强化主流新能源与家庭用户心智",
      summary: "长安启源围绕主流新能源、家庭出行和智能体验持续展开传播，是全国新能源品牌池中的重要组成部分。",
      date: "2026-06-08",
      source: "长安启源资料整理",
      url: "#",
      link: "#",
      heat: 80,
      platforms: ["百度", "抖音", "小红书"],
      keywords: ["#长安启源", "#主流新能源", "#家庭用户", "#智能体验", "#品牌事件"]
    },
    {
      id: "auto-supp-017",
      industry: "automotive",
      brand: "智己",
      category: "brand",
      categoryName: "品牌事件",
      title: "智己2026年围绕智能驾驶与高端纯电定位保持内容热度",
      summary: "智己品牌持续围绕智能驾驶、高端纯电和科技感叙事发声，是全国高端新能源品牌中的关键观察对象。",
      date: "2026-06-08",
      source: "智己资料整理",
      url: "#",
      link: "#",
      heat: 79,
      platforms: ["百度", "微博", "小红书"],
      keywords: ["#智己", "#智能驾驶", "#高端纯电", "#科技感", "#品牌事件"]
    },
    {
      id: "auto-supp-018",
      industry: "automotive",
      brand: "昊铂",
      category: "brand",
      categoryName: "品牌事件",
      title: "昊铂2026年围绕高端智能纯电与产品焕新持续推进传播",
      summary: "昊铂在高端纯电、技术配置和品牌焕新方向保持较高活跃度，属于全国高端新能源品牌中的重要补充。",
      date: "2026-06-08",
      source: "昊铂资料整理",
      url: "#",
      link: "#",
      heat: 78,
      platforms: ["百度", "微博", "抖音"],
      keywords: ["#昊铂", "#高端纯电", "#产品焕新", "#智能配置", "#品牌事件"]
    },
    {
      id: "auto-supp-019",
      industry: "automotive",
      brand: "魏牌",
      category: "market",
      categoryName: "市场热点",
      title: "魏牌2026年围绕高端家庭SUV与新能源布局保持稳定声量",
      summary: "魏牌在高端家庭 SUV、新能源转型和品牌焕新方面持续曝光，是全国主流自主品牌中的重要一员。",
      date: "2026-06-08",
      source: "魏牌资料整理",
      url: "#",
      link: "#",
      heat: 77,
      platforms: ["百度", "懂车帝", "微博"],
      keywords: ["#魏牌", "#家庭SUV", "#新能源布局", "#品牌焕新", "#市场热点"]
    },
    {
      id: "auto-supp-020",
      industry: "automotive",
      brand: "欧拉",
      category: "market",
      categoryName: "市场热点",
      title: "欧拉2026年围绕女性用户与精品纯电赛道持续被讨论",
      summary: "欧拉持续围绕女性用户、精品纯电和城市出行场景建立品牌标签，是全国新能源汽车品牌池中的特色品牌。",
      date: "2026-06-08",
      source: "欧拉资料整理",
      url: "#",
      link: "#",
      heat: 76,
      platforms: ["百度", "小红书", "微博"],
      keywords: ["#欧拉", "#女性用户", "#精品纯电", "#城市出行", "#市场热点"]
    },
    {
      id: "auto-supp-021",
      industry: "automotive",
      brand: "长城炮",
      category: "brand",
      categoryName: "品牌事件",
      title: "长城炮2026年围绕皮卡文化与户外场景持续扩圈",
      summary: "长城炮依托皮卡文化、露营越野和改装生态形成持续声量，是全国皮卡赛道的重要品牌。",
      date: "2026-06-08",
      source: "长城炮资料整理",
      url: "#",
      link: "#",
      heat: 80,
      platforms: ["百度", "抖音", "微博"],
      keywords: ["#长城炮", "#皮卡文化", "#露营越野", "#改装生态", "#品牌事件"]
    },
    {
      id: "auto-supp-022",
      industry: "automotive",
      brand: "北京汽车",
      category: "brand",
      categoryName: "品牌事件",
      title: "北京汽车2026年围绕本土制造与新能源焕新持续推进传播",
      summary: "北京汽车围绕本土制造、越野基因和新能源转型保持稳定热度，是全国传统品牌焕新观察样本之一。",
      date: "2026-06-08",
      source: "北京汽车资料整理",
      url: "#",
      link: "#",
      heat: 75,
      platforms: ["百度", "微博", "微信"],
      keywords: ["#北京汽车", "#本土制造", "#新能源焕新", "#越野基因", "#品牌事件"]
    },
    {
      id: "auto-supp-023",
      industry: "automotive",
      brand: "北京奔驰",
      category: "brand",
      categoryName: "品牌事件",
      title: "北京奔驰2026年围绕豪华制造与电动化转型保持持续关注",
      summary: "北京奔驰在豪华制造、国产高端车型和电动化转型叙事上维持关注度，是全国豪华车板块的重要品牌。",
      date: "2026-06-08",
      source: "北京奔驰资料整理",
      url: "#",
      link: "#",
      heat: 79,
      platforms: ["百度", "微博", "微信"],
      keywords: ["#北京奔驰", "#豪华制造", "#国产豪华", "#电动化转型", "#品牌事件"]
    },
    {
      id: "auto-supp-024",
      industry: "automotive",
      brand: "一汽丰田",
      category: "market",
      categoryName: "市场热点",
      title: "一汽丰田2026年围绕主流燃油车与混动市场保持稳健声量",
      summary: "一汽丰田在主流燃油车、混动技术和家用市场竞争中持续被提及，是全国合资品牌池中的核心成员。",
      date: "2026-06-08",
      source: "一汽丰田资料整理",
      url: "#",
      link: "#",
      heat: 78,
      platforms: ["百度", "懂车帝", "微博"],
      keywords: ["#一汽丰田", "#混动市场", "#家用市场", "#合资品牌", "#市场热点"]
    },
    {
      id: "auto-supp-025",
      industry: "automotive",
      brand: "广汽丰田",
      category: "market",
      categoryName: "市场热点",
      title: "广汽丰田2026年围绕混动产品与主流家用车布局持续曝光",
      summary: "广汽丰田在混动产品、家用轿车与 SUV 市场竞争中持续获得关注，是全国合资品牌覆盖的重要组成部分。",
      date: "2026-06-08",
      source: "广汽丰田资料整理",
      url: "#",
      link: "#",
      heat: 78,
      platforms: ["百度", "微博", "微信"],
      keywords: ["#广汽丰田", "#混动产品", "#家用轿车", "#SUV市场", "#市场热点"]
    },
    {
      id: "auto-supp-026",
      industry: "automotive",
      brand: "东风日产",
      category: "market",
      categoryName: "市场热点",
      title: "东风日产2026年围绕合资转型与新能源布局持续被关注",
      summary: "东风日产在合资品牌竞争、新能源转型和产品更新方向持续形成讨论，是全国主流合资品牌的重要样本。",
      date: "2026-06-08",
      source: "东风日产资料整理",
      url: "#",
      link: "#",
      heat: 77,
      platforms: ["百度", "微博", "抖音"],
      keywords: ["#东风日产", "#合资转型", "#新能源布局", "#产品更新", "#市场热点"]
    },
    {
      id: "auto-supp-027",
      industry: "automotive",
      brand: "上汽通用",
      category: "market",
      categoryName: "市场热点",
      title: "上汽通用2026年围绕品牌整合与新能源升级持续被提及",
      summary: "上汽通用在合资品牌整合、产品升级和新能源转型方向持续输出内容，是全国汽车品牌覆盖的重要组成。",
      date: "2026-06-08",
      source: "上汽通用资料整理",
      url: "#",
      link: "#",
      heat: 76,
      platforms: ["百度", "微博", "微信"],
      keywords: ["#上汽通用", "#品牌整合", "#产品升级", "#新能源转型", "#市场热点"]
    },
    {
      id: "auto-supp-028",
      industry: "automotive",
      brand: "凯迪拉克",
      category: "brand",
      categoryName: "品牌事件",
      title: "凯迪拉克2026年围绕豪华定位与电动化方向持续保持热度",
      summary: "凯迪拉克依托豪华品牌调性、电动化焕新和差异化设计语言，继续在全国豪华车讨论中占据一席之地。",
      date: "2026-06-08",
      source: "凯迪拉克资料整理",
      url: "#",
      link: "#",
      heat: 79,
      platforms: ["百度", "微博", "小红书"],
      keywords: ["#凯迪拉克", "#豪华定位", "#电动化", "#设计语言", "#品牌事件"]
    },
    {
      id: "auto-supp-029",
      industry: "automotive",
      brand: "雷克萨斯",
      category: "brand",
      categoryName: "品牌事件",
      title: "雷克萨斯2026年围绕豪华混动与高端服务体验持续获得关注",
      summary: "雷克萨斯在豪华混动、服务体验和高端消费认知上持续形成传播内容，是全国豪华品牌中的长期观察对象。",
      date: "2026-06-08",
      source: "雷克萨斯资料整理",
      url: "#",
      link: "#",
      heat: 80,
      platforms: ["百度", "微博", "微信"],
      keywords: ["#雷克萨斯", "#豪华混动", "#服务体验", "#高端消费", "#品牌事件"]
    },
    {
      id: "auto-supp-030",
      industry: "automotive",
      brand: "路虎",
      category: "brand",
      categoryName: "品牌事件",
      title: "路虎2026年围绕豪华越野与高端SUV场景持续保持品牌势能",
      summary: "路虎围绕豪华越野、高端 SUV 和户外生活方式叙事保持内容热度，是全国豪华越野品牌中的重要样本。",
      date: "2026-06-08",
      source: "路虎资料整理",
      url: "#",
      link: "#",
      heat: 81,
      platforms: ["百度", "微博", "抖音"],
      keywords: ["#路虎", "#豪华越野", "#高端SUV", "#户外生活方式", "#品牌事件"]
    },
    {
      id: "auto-supp-031",
      industry: "automotive",
      brand: "保时捷",
      category: "brand",
      categoryName: "品牌事件",
      title: "保时捷2026年围绕性能豪华与电动化转型持续引发讨论",
      summary: "保时捷在性能豪华、电动化产品与高净值用户市场中持续具有影响力，是全国豪华品牌内容覆盖中的关键成员。",
      date: "2026-06-08",
      source: "保时捷资料整理",
      url: "#",
      link: "#",
      heat: 82,
      platforms: ["百度", "微博", "小红书"],
      keywords: ["#保时捷", "#性能豪华", "#电动化转型", "#高净值用户", "#品牌事件"]
    },
    {
      id: "auto-supp-032",
      industry: "automotive",
      brand: "玛莎拉蒂",
      category: "brand",
      categoryName: "品牌事件",
      title: "玛莎拉蒂2026年围绕超豪华与运动格调持续积累圈层传播",
      summary: "玛莎拉蒂在超豪华、运动格调和小众高端市场中持续有圈层讨论，是全国高端品牌池中的补充样本。",
      date: "2026-06-08",
      source: "玛莎拉蒂资料整理",
      url: "#",
      link: "#",
      heat: 74,
      platforms: ["百度", "微博", "小红书"],
      keywords: ["#玛莎拉蒂", "#超豪华", "#运动格调", "#圈层传播", "#品牌事件"]
    },
    {
      id: "auto-supp-033",
      industry: "automotive",
      brand: "MINI",
      category: "brand",
      categoryName: "品牌事件",
      title: "MINI 2026年围绕精品个性与城市出行体验持续保持热度",
      summary: "MINI 在精品个性、城市出行和年轻消费表达方面保持较高识别度，是全国精品车品牌中的代表。",
      date: "2026-06-08",
      source: "MINI资料整理",
      url: "#",
      link: "#",
      heat: 75,
      platforms: ["百度", "小红书", "微博"],
      keywords: ["#MINI", "#精品个性", "#城市出行", "#年轻消费", "#品牌事件"]
    },
    {
      id: "auto-supp-034",
      industry: "automotive",
      brand: "DS",
      category: "brand",
      categoryName: "品牌事件",
      title: "DS 2026年围绕法式豪华与个性化表达维持小众声量",
      summary: "DS 品牌在法式豪华、设计感和差异化消费场景中保持一定讨论度，纳入全国品牌覆盖范围。",
      date: "2026-06-08",
      source: "DS资料整理",
      url: "#",
      link: "#",
      heat: 70,
      platforms: ["百度", "微博"],
      keywords: ["#DS", "#法式豪华", "#设计感", "#差异化消费", "#品牌事件"]
    },
    {
      id: "auto-supp-035",
      industry: "automotive",
      brand: "飞凡",
      category: "brand",
      categoryName: "品牌事件",
      title: "飞凡2026年围绕上汽系新能源与智能体验持续承接内容",
      summary: "飞凡品牌围绕上汽系新能源、智能座舱与产品焕新持续形成传播，是全国新能源品牌池中的组成部分。",
      date: "2026-06-08",
      source: "飞凡资料整理",
      url: "#",
      link: "#",
      heat: 73,
      platforms: ["百度", "微博", "抖音"],
      keywords: ["#飞凡", "#上汽新能源", "#智能座舱", "#产品焕新", "#品牌事件"]
    },
    {
      id: "auto-supp-036",
      industry: "automotive",
      brand: "荣威",
      category: "market",
      categoryName: "市场热点",
      title: "荣威2026年围绕家用新能源与主流轿车市场持续被关注",
      summary: "荣威在家用新能源、主流轿车和性价比消费市场中持续具备讨论热度，属于全国主流品牌覆盖的一部分。",
      date: "2026-06-08",
      source: "荣威资料整理",
      url: "#",
      link: "#",
      heat: 74,
      platforms: ["百度", "微博", "懂车帝"],
      keywords: ["#荣威", "#家用新能源", "#主流轿车", "#性价比", "#市场热点"]
    },
    {
      id: "auto-supp-037",
      industry: "automotive",
      brand: "名爵",
      category: "brand",
      categoryName: "品牌事件",
      title: "名爵2026年围绕年轻运动与全球化传播持续保持活跃",
      summary: "名爵在年轻运动、出海传播和个性化产品表达方面保持一定声量，是全国品牌池与出海观察中的重要对象。",
      date: "2026-06-08",
      source: "名爵资料整理",
      url: "#",
      link: "#",
      heat: 75,
      platforms: ["百度", "微博", "抖音"],
      keywords: ["#名爵", "#年轻运动", "#全球化传播", "#个性化产品", "#品牌事件"]
    },
    {
      id: "auto-supp-038",
      industry: "automotive",
      brand: "启辰",
      category: "market",
      categoryName: "市场热点",
      title: "启辰2026年围绕家用新能源与主流消费市场持续保有存在感",
      summary: "启辰在家用新能源、主流消费市场和本土化车型布局中持续被提及，是全国汽车品牌覆盖中的补充成员。",
      date: "2026-06-08",
      source: "启辰资料整理",
      url: "#",
      link: "#",
      heat: 72,
      platforms: ["百度", "微博", "微信"],
      keywords: ["#启辰", "#家用新能源", "#主流消费", "#本土化车型", "#市场热点"]
    }
  ];

  const automotiveOverrides = {};

  const stateOverrides = {
    "stateowned-1-1": {
      title: "泰康资产蝉联全球资管500强，排名升至全球第50位",
      summary: "这是一条已对到具体官方新闻页的真实事件，核心信息包括排名提升、中国第3位及长期排名跃升，可直接点击进入泰康官方网页报告。",
      source: "泰康官网新闻",
      link: "https://www.taikang.com/news/groupnews/2026/06/18/4617.html",
      keywords: ["#泰康", "#资管500强", "#全球排名", "#品牌事件", "#官网新闻"]
    },
    "stateowned-1-2": {
      title: "联通算网一体与政企数字化能力持续成为重点传播事件",
      summary: "联通相关资料仍需继续替换成单篇新闻稿或专题正文页，目前先保留事件卡片，不再跳转到官网首页。",
      source: "联通资料整理",
      link: "#",
      keywords: ["#联通", "#算网一体", "#政企数字化", "#5G", "#官网来源"]
    }
  };

  const focusAutomotiveEvents = [];

  const focusStateEvents = [
    {
      brand: "泰康",
      category: "brand",
      categoryName: "品牌事件",
      title: "泰康资产蝉联全球资管500强，排名升至全球第50位",
      summary: "这是一条已对到具体官方新闻页的真实事件，可直接进入泰康官方网页报告查看。",
      date: "2026-06-18",
      source: "泰康官网新闻",
      link: "https://www.taikang.com/news/groupnews/2026/06/18/4617.html",
      heat: 95,
      platforms: ["百度", "微信", "泰生活"],
      keywords: ["#泰康", "#资管500强", "#全球排名", "#网页报告", "#真实事件"]
    },
    {
      brand: "联通",
      category: "enterprise",
      categoryName: "企业新闻",
      title: "中国联通算网一体与政企数字化传播持续升温",
      summary: "联通相关资料仍在补充为单篇新闻稿正文，当前保留事件线索，不再跳转到联通官网首页。",
      date: "2026-06-24",
      source: "联通资料整理",
      link: "#",
      heat: 92,
      platforms: ["百度", "微信", "联通App"],
      keywords: ["#联通", "#算网一体", "#政企数字化", "#正文补充中", "#网页报告"]
    }
  ];

  function prependFocusEvents(records, focusEvents, industryId) {
    const mapped = focusEvents.map((event, index) => ({
      id: `${industryId}-focus-${index + 1}`,
      industry: industryId,
      category: event.category || "brand",
      categoryName: event.categoryName || "品牌事件",
      ...event
    }));
    return [...mapped, ...records];
  }

  function applyOverrides(records, overrides) {
    return records.map((record) => {
      const patch = overrides[record.id];
      return patch ? { ...record, ...patch } : record;
    });
  }

  return {
    meta: {
      productName: "三界博弈录",
      version: "0.2.0",
      updatedAt: "2026-06-24",
      accessPassword: "sanjie2026",
      apiPreset: {
        enabled: false,
        baseUrl: "/api"
      }
    },
    industries: {
      automotive: {
        id: "automotive",
        name: "汽车",
        subtitle: "全国汽车品牌动态、品牌策略、平台声量与车型事件",
        accent: "#295dff",
        platforms: automotivePlatforms,
        brands: automotiveBrands,
        records: [...automotiveSupplementRecords, ...prependFocusEvents(applyOverrides(automotiveRecords, automotiveOverrides), focusAutomotiveEvents, "automotive")],
        trendMeta: {
          metric: "月度品牌资料量 / 声量综合趋势",
          period: "2026年1月-12月",
          methodology: "当前汽车板块已切换为 2026 年真实资料池为主，优先收录可直接打开的正文链接；无正文页的品牌事件暂保留卡片线索，待继续补全。",
          sources: ["百度", "懂车帝", "汽车之家", "易车", "微博", "微信", "小红书", "抖音", "淘车车"]
        },
        trendSeries: buildTrendSeries(["宝马", "福特", "212越野车", "淘车车", "比亚迪", "理想"], 6)
      },
      fmcg: {
        id: "fmcg",
        name: "快消",
        subtitle: "全国快消品牌新品爆点、消费热点、内容投放与电商转化",
        accent: "#0d8b6f",
        platforms: fmcgPlatforms,
        brands: fmcgBrands,
        records: [...fmcgRealRecords, ...fmcgRecords],
        trendMeta: {
          metric: "月度资料量 / 种草声量趋势",
          period: "2026年1月-12月",
          methodology: "以月度资料量为主，结合站内互动与关键词热度做阶段性整理。",
          sources: ["百度", "抖音", "小红书", "微博", "天猫", "京东", "B站", "快手"]
        },
        trendSeries: buildTrendSeries(["可口可乐", "元气森林", "农夫山泉", "伊利", "巴黎欧莱雅", "三养"], 2)
      },
      stateowned: {
        id: "stateowned",
        name: "央国企",
        subtitle: "全国央国企品牌传播、企业协同、平台声量与民生服务讨论",
        accent: "#8a5310",
        platforms: statePlatforms,
        brands: stateBrands,
        records: [...stateRealRecords, ...prependFocusEvents(applyOverrides(stateRecords, stateOverrides), focusStateEvents, "stateowned")],
        trendMeta: {
          metric: "月度传播资料量 / 平台声量趋势",
          period: "2026年1月-12月",
          methodology: "以月度资料覆盖为主，结合品牌提及和平台覆盖做综合整理。",
          sources: ["百度", "人民网", "国资委官网", "微博", "微信", "视频号", "联通App", "泰生活"]
        },
        trendSeries: buildTrendSeries(["泰康", "联通", "中国移动", "中国电信", "中粮", "中国建筑"], 4)
      }
    }
  };
})();
