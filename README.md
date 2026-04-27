# 🚗 车讯通 - 汽车行业资讯与媒介资源库

[![Version](https://img.shields.io/badge/version-2.5-blue.svg)](./CHANGELOG.md)
[![Update](https://img.shields.io/badge/last%20update-2026--04--27-green.svg)](./data.js)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](./LICENSE)

> 一站式汽车行业数据平台，涵盖新闻资讯、媒介资源、标书商机、词条百科等核心模块

## 📊 九大核心模块

| 模块 | 描述 | 数据量 |
|:---|:---|:---|
| 📰 **news** | 汽车资讯（行业动态/新车/企业/技术/市场） | 80+ 条 |
| 📢 **marketing** | 营销案例库（Campaign案例/策略拆解） | 6 个经典案例 |
| 👥 **influencer** | KOL/KOC资源（达人清单/报价/平台） | 6 位头部达人 |
| 📺 **media** | 媒体投放数据（平台分析/预算/趋势） | 5 大平台 |
| 📈 **social** | 社媒声量监测（品牌排名/热点追踪） | TOP5 品牌 |
| 🔍 **competitor** | 竞品媒介分析（竞品策略/差异化） | 5 大品牌对比 |
| 📅 **calendar** | 营销节点日历（车展/发布会/营销节点） | 全年节点 |
| 📋 **bids** | 标书商机（招标信息/投标机会） | 30+ 条 |
| 📚 **glossary** | 词条百科（专业术语/概念解释） | 88 个词条 |

## 🚀 快速开始

```javascript
// 引入数据
const DATA_SOURCE = require('./data.js');

// 获取最新汽车资讯
const latestNews = DATA_SOURCE.news.slice(0, 10);

// 获取KOL资源
const influencers = DATA_SOURCE.influencer.list;

// 获取标书商机
const bids = DATA_SOURCE.bids.list;

// 搜索功能
const results = SearchUtils.search('新能源');
```

## 📁 文件结构

```
车讯通/
├── data.js              # 主数据文件（核心）
├── bid_monitor_log.json # 标书监测日志
├── weekly/              # 周报生成目录
└── README.md            # 本文件
```

## 🔄 更新频率

- **汽车资讯**：每周一自动更新
- **标书监测**：每周一随车讯通更新
- **营销数据**：每月更新
- **版本迭代**：持续迭代中

## 📈 数据覆盖

### 资讯来源
- 汽车之家、易车网、懂车帝
- 盖世汽车、乘联会、中汽协
- 36氪汽车、亿欧汽车
- 车企官方渠道

### 标书平台监测
- 零跑汽车招标平台
- 奇瑞集团采购服务平台
- 东风公司采购招投标平台
- 海尔资源共享云
- 中国政府采购网

## 🛠️ 技术栈

- **数据格式**：JavaScript Object / JSON
- **版本控制**：Git
- **更新机制**：Cron定时任务

## 📮 联系方式

如有问题或建议，欢迎通过以下方式联系：

- 项目维护：董艳伟
- 邮箱：dongyanwei@example.com

## 📄 许可证

[MIT License](./LICENSE)

---

> 💡 **提示**：本项目数据仅供学习和研究使用，商业使用请注明出处。
