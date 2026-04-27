// =====================================================
// 车讯通 v2.2 - 标书商机监测模块（新增）
// 更新日期: 2026-04-23
// =====================================================
// 
// 🔍 多平台标书监测:
// 1. 零跑汽车招标平台 - 公开访问
// 2. 奇瑞汽车电子招标平台 - 公开访问  
// 3. 东风汽车采购平台 - 公开访问
// 4. 中国政府采购网 - 公开访问
// 5. 中国招标网 - 公开访问
// 6. 必联网 - 公开访问
// 7. 海尔标书（原有）- 需登录
//
// 📊 监测范围:
// - 营销类: 广告宣传、活动策划、物料制作、数字营销
// - 服务类: 车展服务、试驾活动、内容运营、社媒传播
// - 技术类: 软件开发、数据分析、AI应用
//
// 🎯 关键词匹配:
// 广告/营销/宣传/推广/活动/物料/制作/策划/传播/社媒/新媒体/内容/运营/数字/智能/AI/车展/试驾/体验/展厅/门店
// =====================================================

const BID_MONITOR_CONFIG = {
    version: '2.2',
    lastUpdate: '2026-04-23',
    enabled: true,
    
    // 推送配置
    pushConfig: {
        token: 'b0e724a50fd949628d713b58fd8c3ca7',
        topic: '1234567890',
        enabled: true
    },
    
    // 监测平台列表
    // 注意：只有海尔标书推送到微信(pushToWechat=true)，其他平台只记录不推送
    platforms: [
        {
            id: 'leapmotor',
            name: '零跑汽车招标平台',
            url: 'https://leapmotor.cn/join/callForBids.html',
            type: 'public',
            enabled: true,
            pushToWechat: false, // 只记录，不推送微信
            checkInterval: 30,
            keywords: ['营销', '广告', '宣传', '推广', '活动', '物料', '制作', '策划', '传播', '社媒', '新媒体', '内容', '运营', '数字', '智能'],
            lastCheck: null,
            lastNewBid: null
        },
        {
            id: 'chery',
            name: '奇瑞汽车电子招标平台',
            url: 'https://ebd.mychery.com/',
            type: 'public',
            enabled: true,
            pushToWechat: false, // 只记录，不推送微信
            checkInterval: 30,
            keywords: ['营销', '广告', '宣传', '推广', '活动', '物料', '制作', '策划', '传播', '社媒', '新媒体', '内容', '运营', '数字', '智能', 'IP', '口碑'],
            lastCheck: null,
            lastNewBid: null
        },
        {
            id: 'dongfeng',
            name: '东风汽车采购招投标平台',
            url: 'https://etp.dfmc.com.cn/',
            type: 'public',
            enabled: true,
            pushToWechat: false, // 只记录，不推送微信
            checkInterval: 30,
            keywords: ['营销', '广告', '宣传', '推广', '活动', '物料', '制作', '策划', '传播', '社媒', '新媒体', '内容', '运营'],
            lastCheck: null,
            lastNewBid: null
        },
        {
            id: 'ccgp',
            name: '中国政府采购网',
            url: 'http://www.ccgp.gov.cn/',
            type: 'public',
            enabled: true,
            pushToWechat: false, // 只记录，不推送微信
            checkInterval: 60,
            keywords: ['汽车', '营销', '广告', '宣传', '推广', '活动', '物料', '制作', '策划', '传播', '新媒体', '内容', '运营', '数字'],
            lastCheck: null,
            lastNewBid: null
        },
        {
            id: 'chinabidding',
            name: '中国招标网',
            url: 'https://www.chinabidding.org.cn/',
            type: 'public',
            enabled: true,
            pushToWechat: false, // 只记录，不推送微信
            checkInterval: 60,
            keywords: ['汽车', '营销', '广告', '宣传', '推广', '活动', '物料', '制作', '策划', '传播', '新媒体', '内容', '运营', '数字'],
            lastCheck: null,
            lastNewBid: null
        },
        {
            id: 'ebnew',
            name: '必联网',
            url: 'https://ss.ebnew.com/',
            type: 'public',
            enabled: true,
            pushToWechat: false, // 只记录，不推送微信
            checkInterval: 60,
            keywords: ['汽车', '营销', '广告', '宣传', '推广', '活动', '物料', '制作', '策划', '传播', '新媒体', '内容', '运营'],
            lastCheck: null,
            lastNewBid: null
        },
        {
            id: 'qianlima',
            name: '千里马招标网',
            url: 'https://zb.yfb.qianlima.com/',
            type: 'public',
            enabled: true,
            pushToWechat: false, // 只记录，不推送微信
            checkInterval: 60,
            keywords: ['汽车', '奇瑞', '营销', '广告', '宣传', '推广', '活动', '物料', '制作', '策划', '传播', '社媒', '新媒体', '内容', '运营'],
            lastCheck: null,
            lastNewBid: null
        },
        {
            id: 'haier',
            name: '海尔资源共享云',
            url: 'https://v.ihaier.cn/ierp/index.html',
            type: 'private',
            enabled: true,
            pushToWechat: true, // ✅ 唯一推送微信的平台
            checkInterval: 30,
            keywords: ['广告', '营销', '宣传', '物料', '制作', '活动', '策划', '传播', '内容', '运营', '数字', '媒体', '推广'],
            lastCheck: null,
            lastNewBid: null
        }
    ],
    
    // 监测历史记录
    history: {
        totalChecks: 0,
        totalNewBids: 0,
        lastCheckTime: null,
        recentBids: [] // 最近发现的标书
    }
};

// 标书数据存储结构
const BID_DATA_SCHEMA = {
    id: 'string', // 唯一标识
    platform: 'string', // 来源平台
    title: 'string', // 标书标题
    company: 'string', // 招标单位
    publishDate: 'string', // 发布时间
    deadline: 'string', // 截止时间
    category: 'string', // 类别（营销/服务/技术）
    budget: 'string', // 预算金额（如有）
    url: 'string', // 链接
    status: 'string', // 状态（新发现/已推送/已报名/已忽略）
    keywords: 'array', // 匹配到的关键词
    createTime: 'string', // 记录创建时间
    pushTime: 'string', // 推送时间
    notes: 'string' // 备注
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BID_MONITOR_CONFIG, BID_DATA_SCHEMA };
}