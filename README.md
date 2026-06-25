# 三界博弈录

打开顺序：

1. 先访问 `login.html`
2. 输入统一密码
3. 验证通过后进入 `index.html`

## 当前结构

- `login.html`：统一密码入口 / 访问说明
- `index.html`：三大板块总览页
- `automotive.html`：汽车行业页
- `fmcg.html`：快消行业页
- `stateowned.html`：央国企行业页
- `detail.html`：资料详情页
- `assets/data.js`：前端动态数据源
- `assets/app.js`：筛选、词云、趋势图、详情页联动逻辑
- `assets/styles.css`：共享样式

## 后续替换真实数据

优先替换 `assets/data.js` 中三块数据：

- `brands`
- `platforms`
- `records`
- `trendSeries`

如果后续接后端接口，可把 `assets/app.js` 中的数据入口替换为接口请求，并继续沿用现有页面结构。

## 每周一更新建议

建议每周一维护一次 `assets/data.js`：

1. 追加当周新资料到对应行业 `records`
2. 保留旧资料，不要覆盖历史记录
3. 更新 `meta.updatedAt`
4. 如需做周度快照，可复制整站为独立归档目录，例如：
   `archive/2026-06-29/`

## 统一公开链接建议

当前站点是纯静态结构，适合直接发布到：

- GitHub Pages
- Cloudflare Pages
- Netlify

发布目录直接使用：

- `outputs/sanjie-boyilu/`

发布后可获得统一公开链接，其他人通过该链接打开登录页并输入统一密码后，即可访问首页、行业页和详情页。
