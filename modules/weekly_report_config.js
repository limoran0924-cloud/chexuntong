// =====================================================
// 车讯通 v2.2 - 周报自动生成模块（新增）
// 更新日期: 2026-04-23
// =====================================================
//
// 📊 功能说明:
// 1. 每周一上午9点自动生成周报
// 2. 包含：行业资讯汇总、标书监测报告、营销热点
// 3. 输出格式：Markdown + 可视化图表建议
// 4. 推送方式：微信群PushPlus + 保存到本地文件
//
// =====================================================

const WEEKLY_REPORT_CONFIG = {
    version: '2.2',
    enabled: true,
    generateTime: '每周一 09:00',
    sections: [
        {
            id: 'summary',
            title: '📋 本周概览',
            content: '统计数字：新增资讯数量、新发现标书数量、重点事件'
        },
        {
            id: 'industry_news',
            title: '🚗 行业热点资讯（TOP 10）',
            source: 'DATA_SOURCE.news',
            filter: '过去7天',
            limit: 10,
            categories: ['新车发布', '企业新闻', '市场热点', '技术趋势']
        },
        {
            id: 'bid_report',
            title: '🎯 标书监测报告',
            source: 'bid_monitor_log.json',
            filter: '过去7天',
            highlight: '营销类标书优先'
        },
        {
            id: 'marketing_trends',
            title: '📈 营销趋势观察',
            source: 'DATA_SOURCE.social',
            content: '品牌声量变化、热门话题、竞品动态'
        },
        {
            id: 'calendar',
            title: '📅 下周重要节点',
            source: 'DATA_SOURCE.calendar',
            filter: '未来7天',
            content: '车展、发布会、营销节点提醒'
        },
        {
            id: 'action_items',
            title: '✅ 行动建议',
            content: '基于数据的策略建议'
        }
    ],
    
    // 推送配置
    push: {
        enabled: true,
        token: 'b0e724a50fd949628d713b58fd8c3ca7',
        topic: '1234567890',
        format: 'markdown'
    },
    
    // 文件保存
    file: {
        enabled: true,
        path: '/Users/dongyanwei/.openclaw/workspace/车讯通/weekly/',
        naming: '车讯通周报_YYYYMMDD.md'
    }
};

// 周报生成模板
const WEEKLY_REPORT_TEMPLATE = `# 车讯通周报 - {{weekDate}}
> 生成时间：{{generateTime}}
> 数据周期：{{dataStart}} 至 {{dataEnd}}

---

## 📋 本周概览

| 指标 | 数值 | 环比 |
|:---|:---:|:---:|
| 新增行业资讯 | {{newsCount}} 条 | {{newsTrend}} |
| 新发现标书 | {{bidCount}} 条 | {{bidTrend}} |
| 重点营销事件 | {{eventCount}} 个 | - |

---

## 🚗 行业热点资讯（TOP 10）

{{industryNews}}

---

## 🎯 标书监测报告

{{bidReport}}

---

## 📈 营销趋势观察

{{marketingTrends}}

---

## 📅 下周重要节点

{{calendar}}

---

## ✅ 行动建议

{{actionItems}}

---

*本报告由车讯通v2.2自动生成*
*数据来源：公开渠道采集，仅供参考*`;

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WEEKLY_REPORT_CONFIG, WEEKLY_REPORT_TEMPLATE };
}