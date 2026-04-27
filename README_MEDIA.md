# 车讯通 媒介策略资源模块

**更新日期**: 2026年4月21日  
**版本**: v2.0

---

## 📊 新增6大媒介策略资源模块

### 1️⃣ 汽车营销案例库 `DATA_SOURCE.marketing`
经典Campaign案例深度拆解

| 字段 | 说明 |
|:---|:---|
| `brand` | 品牌名称 |
| `campaign` | Campaign名称 |
| `type` | 案例类型（新车上市/品牌传播/娱乐营销等） |
| `keyPoints` | 核心策略要点 |
| `platforms` | 主要投放平台 |
| `effect` | 传播效果 |

**案例覆盖**: 小米YU7上市、鸿蒙智行五界、蔚来换电战役、比亚迪春节档、理想家庭营销

---

### 2️⃣ KOL/KOC资源库 `DATA_SOURCE.influencer`
汽车垂类达人资源清单

**达人分级**:
- 头部达人: 1000万+粉丝, 80-200万/条
- 腰部达人: 100-1000万粉丝, 10-50万/条
- KOC: 1-100万粉丝, 0.5-5万/条

**收录达人**: 陈震、韩路、YYP、虎哥、小刚学长、电动知士等

---

### 3️⃣ 媒体投放数据 `DATA_SOURCE.media`
平台投放策略与预算参考

**核心数据**:
- 效果广告占比: 54.1% (较2022年+18.3%)
- 移动端预算占比: 60%+
- 媒介数量下降: 19.5% (向头部集中)

**平台覆盖**: 抖音、小红书、微博、B站、汽车垂直媒体

---

### 4️⃣ 社媒声量监测 `DATA_SOURCE.social`
品牌声量排名与热点追踪

**品牌声量TOP5**:
1. 比亚迪 (mentionIndex: 100)
2. 小米汽车 (mentionIndex: 95, +156%增长)
3. 华为鸿蒙智行 (mentionIndex: 88)
4. 特斯拉 (mentionIndex: 82)
5. 理想汽车 (mentionIndex: 78)

**平台热点**: 微博热搜、抖音话题、小红书趋势

---

### 5️⃣ 竞品媒介分析 `DATA_SOURCE.competitor`
主要竞品传播策略对比

**分析维度**:
- 品牌定位
- 核心传播信息
- 主投平台
- 预算级别
- 差异化策略

**覆盖品牌**: 小米、华为鸿蒙智行、比亚迪、理想、蔚来

---

### 6️⃣ 营销节点日历 `DATA_SOURCE.calendar`
全年营销节点与新车发布日历

**A级车展**:
- 北京车展: 4月24日-5月3日
- 成都车展: 8月21日-8月30日
- 广州车展: 11月27日-12月6日

**营销节点**: 五一、618、金九银十、双11、年终冲量

---

## 🎯 使用示例

```javascript
// 引入数据
const DATA_SOURCE = require('./data.js');

// 获取营销案例
const marketingCases = DATA_SOURCE.marketing.cases;

// 获取头部KOL
const topKOLs = DATA_SOURCE.influencer.list.filter(k => k.tier === 'top');

// 获取社媒声量排名
const brandRanking = DATA_SOURCE.social.brandRanking;

// 获取营销日历
const autoShows = DATA_SOURCE.calendar.autoShows;
```

---

## 📈 数据来源

- 营销案例: SocialBeta、数英网、麦迪逊邦、品牌官方
- KOL数据: 新榜、克劳锐、抖音/小红书官方榜单
- 投放数据: QuestMobile、CTR、艾瑞咨询
- 声量数据: 新榜、微博指数、巨量算数
- 车展信息: 各车展官网、车企官微

---

## 🔄 更新计划

- **每周**: 社媒声量排名更新
- **每月**: KOL资源价格更新
- **每季度**: 营销案例库扩充
- **每半年**: 媒介投放趋势更新

---

*专为媒介策略人员打造，助力汽车营销决策*
