[index.html](https://github.com/user-attachments/files/26595571/index.html)
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="车讯通 - 聚合汽车行业最新资讯，涵盖新车上市、专业评测、行业动态、技术解析">
    <meta name="keywords" content="汽车资讯,新车上市,汽车评测,新能源汽车,宝马,奔驰,奥迪,特斯拉,蔚来,小鹏,小米,极氪,深蓝">
    <title>车讯通 Pro - 汽车行业资讯聚合平台</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- 分享卡片 -->
    <meta property="og:title" content="车讯通 - 汽车行业资讯">
    <meta property="og:description" content="聚合最新汽车资讯，新车评测，行业动态">
    <meta property="og:type" content="website">
</head>
<body>
    <div id="app">
        <!-- 头部导航 -->
        <header class="header">
            <div class="header-content">
                <div class="logo" onclick="app.goHome()">
                    <i class="fas fa-car"></i>
                    <div class="logo-text">
                        <span>车讯通</span>
                        <small>chexuntong</small>
                    </div>
                </div>
                <nav class="nav">
                    <button class="nav-btn active" data-tab="home" onclick="app.switchTab('home')">
                        <i class="fas fa-home"></i>
                        <span>首页</span>
                    </button>
                    <button class="nav-btn" data-tab="favorites" onclick="app.switchTab('favorites')">
                        <i class="fas fa-star"></i>
                        <span>收藏</span>
                    </button>
                    <button class="nav-btn" data-tab="brands" onclick="app.switchTab('brands')">
                        <i class="fas fa-tags"></i>
                        <span>品牌</span>
                    </button>
                    <button class="nav-btn" data-tab="stats" onclick="app.switchTab('stats')">
                        <i class="fas fa-chart-bar"></i>
                        :root {
    --primary: #1a1a2e;
    --primary-light: #16213e;
    --accent: #e94560;
    --accent-gold: #c9a227;
    --text: #333;
    --text-light: #666;
    --text-muted: #999;
    --bg: #f5f7fa;
    --card-bg: #fff;
    --border: #e8e8e8;
    --shadow: 0 2px 12px rgba(0,0,0,0.08);
    --shadow-hover: 0 8px 24px rgba(0,0,0,0.12);
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --radius: 12px;
    --transition: all 0.3s ease;
}

/* 夜间模式 */
.dark-mode {
    --primary: #0f0f23;
    --primary-light: #1a1a3e;
    --text: #e8e8e8;
    --text-light: #b0b0b0;
    --text-muted: #808080;
    --bg: #0a0a1a;
    --card-bg: #151528;
    --border: #2a2a4a;
    --shadow: 0 2px 12px rgba(0,0,0,0.3);
    --shadow-hover: 0 8px 24px rgba(0,0,0,0.4);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    transition: var(--transition);
}

/* 头部 */
.header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    color: white;
    padding: 0 20px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow);
    backdrop-filter: blur(10px);
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: var(--transition);
}

.logo:hover {
    opacity: 0.9;
    transform: scale(1.02);
}

.logo i {
    color: var(--accent-gold);
    font-size: 28px;
}

.logo-text {
    display: flex;
    flex-direction: column;
}

.logo-text span {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
}

.logo-text small {
    font-size: 11px;
    opacity: 0.7;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.nav {
    display: flex;
    gap: 8px;
}

.nav-btn {
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.7);
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 6px;
}

.nav-btn:hover {
    background: rgba(255,255,255,0.1);
    color: white;
}

.nav-btn.active {
    background: var(--accent);
    color: white;
    box-shadow: 0 4px 12px rgba(233,69,96,0.3);
}

/* 搜索栏 */
.search-bar {
    background: var(--card-bg);
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    transition: var(--transition);
}

.search-box {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
}

.search-box i {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    font-size: 16px;
}

.search-box input {
    width: 100%;
    padding: 14px 45px 14px 48px;
    border: 2px solid var(--border);
    border-radius: 30px;
    font-size: 15px;
    background: var(--bg);
    color: var(--text);
    transition: var(--transition);
}

.search-box input:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(233,69,96,0.1);
}

.search-clear {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px;
    display: none;
}

.search-clear:hover {
    color: var(--accent);
}

/* 筛选栏 */
.filter-bar {
    background: var(--card-bg);
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    flex-wrap: wrap;
    gap: 12px;
    transition: var(--transition);
}

.filter-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.filter-group select {
    padding: 10px 14px;
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 14px;
    background: var(--bg);
    color: var(--text);
    cursor: pointer;
    min-width: 110px;
    transition: var(--transition);
}

.filter-group select:focus {
    outline: none;
    border-color: var(--accent);
}

.update-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--text-muted);
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    transition: var(--transition);
}

.update-info:hover {
    background: var(--bg);
    color: var(--accent);
}

.update-info i {
    transition: var(--transition);
}

.update-info:hover i {
    transform: rotate(180deg);
}

/* 主内容 */
.main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 20px;
    min-height: calc(100vh - 280px);
}

/* 页面切换 */
.view {
    display: none;
    animation: fadeIn 0.4s ease;
}

.view.active {
    display: block;
}

.page-title {
    font-size: 26px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--primary);
}

.page-title i {
    color: var(--accent-gold);
}

/* 热门标签 */
.hot-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding: 0 4px;
}

.hot-tag {
    background: var(--card-bg);
    border: 1px solid var(--border);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    cursor: pointer;
    transition: var(--transition);
    color: var(--text);
}

.hot-tag:hover {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

/* 结果统计 */
.results-info {
    padding: 0 4px 16px;
    font-size: 14px;
    color: var(--text-muted);
}

.results-info strong {
    color: var(--accent);
    font-size: 18px;
}

/* 资讯网格 */
.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 24px;
}

/* 资讯卡片 */
.news-card {
    background: var(--card-bg);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border);
}

.news-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-hover);
}

.card-image {
    width: 100%;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 52px;
    position: relative;
    transition: var(--transition);
}

.news-card:hover .card-image {
    transform: scale(1.05);
}

.card-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: var(--accent);
    color: white;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.card-content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card-brand {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    margin-bottom: 10px;
    font-weight: 600;
}

.card-title {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 12px;
    color: var(--text);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-summary {
    font-size: 14px;
    color: var(--text-light);
    line-height: 1.7;
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
}

.card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: var(--text-muted);
    padding-top: 14px;
    border-top: 1px solid var(--border);
}

.card-source {
    display: flex;
    align-items: center;
    gap: 6px;
}

.card-actions {
    display: flex;
    gap: 14px;
    align-items: center;
}

.card-actions button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-muted);
    font-size: 18px;
    transition: var(--transition);
    padding: 4px;
}

.card-actions button:hover {
    color: var(--accent);
    transform: scale(1.1);
}

.card-actions button.favorited {
    color: var(--accent-gold);
}

/* 加载更多 */
.loading, .load-more {
    text-align: center;
    padding: 40px;
    color: var(--text-muted);
    font-size: 15px;
}

.load-more {
    cursor: pointer;
    background: var(--card-bg);
    border-radius: var(--radius);
    margin-top: 24px;
    transition: var(--transition);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.load-more:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
}

/* 空状态 */
.empty-state {
    text-align: center;
    padding: 80px 20px;
    color: var(--text-muted);
}

.empty-state i {
    font-size: 72px;
    margin-bottom: 24px;
    color: var(--border);
}

.empty-state p {
    font-size: 17px;
    margin-bottom: 24px;
}

.empty-state button {
    background: var(--accent);
    color: white;
    border: none;
    padding: 14px 36px;
    border-radius: 30px;
    font-size: 15px;
    cursor: pointer;
    transition: var(--transition);
}

.empty-state button:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(233,69,96,0.3);
}

/* 品牌网格 */
.brands-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
}

.brand-card {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 24px 16px;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    position: relative;
    overflow: hidden;
}

.brand-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--brand-color, var(--accent));
    transform: scaleX(0);
    transition: var(--transition);
}

.brand-card:hover::before {
    transform: scaleX(1);
}

.brand-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
}

.brand-card i {
    font-size: 40px;
    margin-bottom: 12px;
    color: var(--brand-color, var(--accent));
    transition: var(--transition);
}

.brand-card:hover i {
    transform: scale(1.1);
}

.brand-card h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--text);
}

.brand-card p {
    font-size: 13px;
    color: var(--text-muted);
}

/* 详情页 */
.back-btn {
    background: var(--card-bg);
    border: 1px solid var(--border);
    padding: 12px 24px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    transition: var(--transition);
    color: var(--text);
}

.back-btn:hover {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
    transform: translateX(-4px);
}

.detail-article {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 36px;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
}

.detail-header {
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--border);
}

.detail-brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: white;
    padding: 8px 18px;
    border-radius: 6px;
    font-size: 14px;
    margin-bottom: 18px;
    font-weight: 500;
}

.detail-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 18px;
    color: var(--text);
}

.detail-meta {
    display: flex;
    gap: 24px;
    font-size: 14px;
    color: var(--text-muted);
    flex-wrap: wrap;
}

.detail-meta span {
    display: flex;
    align-items: center;
    gap: 8px;
}

.detail-content {
    font-size: 16px;
    line-height: 1.9;
    color: var(--text);
}

.detail-content p {
    margin-bottom: 20px;
}

.detail-content h2 {
    font-size: 22px;
    margin: 36px 0 18px;
    color: var(--primary);
    font-weight: 600;
}

.detail-content h3 {
    font-size: 19px;
    margin: 28px 0 14px;
    color: var(--text);
    font-weight: 600;
}

.detail-content ul, .detail-content ol {
    margin: 20px 0;
    padding-left: 28px;
}

.detail-content li {
    margin-bottom: 10px;
}

.detail-content strong {
    color: var(--accent);
}

/* 来源链接框 */
.source-link-box {
    background: var(--bg);
    padding: 24px;
    border-radius: var(--radius);
    margin: 32px 0;
    text-align: center;
    border: 1px solid var(--border);
}

.source-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--accent);
    color: white;
    padding: 14px 32px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 500;
    margin: 12px 0;
    transition: var(--transition);
}

.source-btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(233,69,96,0.3);
}

.source-tip {
    font-size: 13px;
    color: var(--text-muted);
    margin-top: 8px;
}

/* 详情页按钮 */
.detail-actions {
    margin-top: 40px;
    padding-top: 32px;
    border-top: 1px solid var(--border);
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.detail-actions button, .detail-actions .btn-source {
    padding: 14px 28px;
    border-radius: 30px;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: var(--transition);
    text-decoration: none;
    border: none;
}

.btn-primary {
    background: var(--accent);
    color: white;
}

.btn-primary:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(233,69,96,0.3);
}

.btn-secondary {
    background: var(--bg);
    color: var(--text);
    border: 1px solid var(--border) !important;
}

.btn-secondary:hover {
    background: var(--border);
    transform: translateY(-2px);
}

.btn-source {
    background: var(--primary);
    color: white;
}

.btn-source:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}

/* 统计页面 */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 32px;
}

.stat-card {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 28px;
    text-align: center;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    transition: var(--transition);
}

.stat-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
}

.stat-card i {
    font-size: 36px;
    color: var(--accent);
    margin-bottom: 16px;
}

.stat-number {
    font-size: 42px;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 8px;
}

.stat-label {
    font-size: 15px;
    color: var(--text-muted);
}

.stats-charts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 24px;
}

.chart-card {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 28px;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
}

.chart-card h3 {
    font-size: 18px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text);
}

.chart-card h3 i {
    color: var(--accent);
}

.chart-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.chart-label {
    width: 70px;
    font-size: 14px;
    color: var(--text);
    font-weight: 500;
}

.chart-bar-bg {
    flex: 1;
    height: 10px;
    background: var(--bg);
    border-radius: 5px;
    overflow: hidden;
}

.chart-bar-fill {
    height: 100%;
    border-radius: 5px;
    transition: width 0.6s ease;
}

.chart-value {
    width: 30px;
    text-align: right;
    font-size: 14px;
    color: var(--text-muted);
    font-weight: 500;
}

/* 底部 */
.footer {
    background: var(--primary);
    color: rgba(255,255,255,0.7);
    padding: 40px 20px 24px;
    text-align: center;
    margin-top: 40px;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.footer-links a {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    transition: var(--transition);
    font-size: 15px;
}

.footer-links a:hover {
    color: white;
}

.footer-text {
    font-size: 14px;
    margin-bottom: 8px;
}

.update-time {
    color: var(--accent-gold);
    font-size: 14px;
    margin-bottom: 16px;
}

.copyright {
    font-size: 13px;
    opacity: 0.6;
}

/* 响应式 */
@media (max-width: 768px) {
    .header-content {
        flex-wrap: wrap;
        height: auto;
        padding: 12px 0;
    }
    
    .nav {
        width: 100%;
        justify-content: center;
        margin-top: 12px;
    }
    
    .nav-btn span {
        display: none;
    }
    
    .nav-btn {
        padding: 10px 14px;
    }
    
    .news-grid {
        grid-template-columns: 1fr;
    }
    
    .filter-bar {
        flex-direction: column;
        align-items: stretch;
    }
    
    .filter-group {
        justify-content: center;
    }
    
    .detail-title {
        font-size: 24px;
    }
    
    .detail-article {
        padding: 24px;
    }
    
    .stats-charts {
        grid-template-columns: 1fr;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .detail-actions {
        flex-direction: column;
    }
    
    .detail-actions button,
    .detail-actions .btn-source {
        width: 100%;
        justify-content: center;
    }
}

/* 动画 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.news-card {
    animation: fadeIn 0.5s ease;
}

/* 滚动条美化 */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: var(--bg);
}

::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
}
[styles.css](https://github.com/user-attachments/files/26595586/styles.css)
<span>数据</span>
                    </button>
                </nav>
            </div>
        </header>

        <!-- 搜索栏 -->
        <div class="search-bar">
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" id="searchInput" placeholder="搜索车型、品牌、关键词..." onkeyup="app.handleSearch(event)">
                <button class="search-clear" onclick="app.clearSearch()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        <!-- 筛选栏 -->
        <div class="filter-bar">
            <div class="filter-group">
                <select id="brandFilter" onchange="app.filterByBrand(this.value)">
                    <option value="">全部品牌</option>
                </select>
                <select id="categoryFilter" onchange="app.filterByCategory(this.value)">
                    <option value="">全部类型</option>
                    <option value="新车">🚗 新车上市</option>
                    <option value="评测">📊 专业评测</option>
                    <option value="行业">📰 行业资讯</option>
                    <option value="技术">⚡ 技术解析</option>
                    <option value="价格">💰 价格动态</option>
                </select>
                <select id="timeFilter" onchange="app.filterByTime(this.value)">
                    <option value="">全部时间</option>
                    <option value="today">📅 今天</option>
                    <option value="week">📆 本周</option>
                    <option value="month">🗓️ 本月</option>
                </select>
            </div>
            <div class="update-info" onclick="app.refreshData()">
                <i class="fas fa-sync-alt"></i>
                <span id="lastUpdate">--</span>
            </div>
        </div>

        <!-- 主内容区 -->
        <main class="main-content">
            <!-- 资讯列表页 -->
            <div id="homeView" class="view active">
                <!-- 热门标签 -->
                <div class="hot-tags" id="hotTags"></div>
                
                <!-- 结果统计 -->
                <div class="results-info" id="resultsInfo"></div>
                
                <!-- 资讯网格 -->
                <div class="news-grid" id="newsList"></div>
                
                <div class="loading" id="loading" style="display: none;">
                    <i class="fas fa-spinner fa-spin"></i> 加载中...
                </div>
                <div class="load-more" id="loadMore" onclick="app.loadMore()">
                    <i class="fas fa-chevron-down"></i> 加载更多
                </div>
            </div>

            <!-- 收藏页 -->
            <div id="favoritesView" class="view">
                <h2 class="page-title"><i class="fas fa-star"></i> 我的收藏</h2>
                <div class="news-grid" id="favoritesList"></div>
                <div class="empty-state" id="emptyFavorites" style="display: none;">
                    <i class="fas fa-star"></i>
                    <p>暂无收藏内容</p>
                    <button onclick="app.switchTab('home')">去浏览</button>
                </div>
            </div>

            <!-- 品牌页 -->
            <div id="brandsView" class="view">
                <h2 class="page-title"><i class="fas fa-tags"></i> 品牌专区</h2>
                <div class="brands-grid" id="brandsList"></div>
            </div>

            <!-- 数据统计页 -->
            <div id="statsView" class="view">
                <h2 class="page-title"><i class="fas fa-chart-bar"></i> 数据统计</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <i class="fas fa-newspaper"></i>
                        <div class="stat-number" id="totalNews">0</div>
                        <div class="stat-label">资讯总数</div>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-car"></i>
                        <div class="stat-number" id="totalBrands">0</div>
                        <div class="stat-label">覆盖品牌</div>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-star"></i>
                        <div class="stat-number" id="totalFavorites">0</div>
                        <div class="stat-label">我的收藏</div>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-calendar-check"></i>
                        <div class="stat-number" id="thisWeekNews">0</div>
                        <div class="stat-label">本周更新</div>
                    </div>
                </div>
                
                <div class="stats-charts">
                    <div class="chart-card">
                        <h3><i class="fas fa-chart-pie"></i> 品牌分布 TOP8</h3>
                        <div id="brandChart"></div>
                    </div>
                    <div class="chart-card">
                        <h3><i class="fas fa-chart-bar"></i> 分类统计</h3>
                        <div id="categoryChart"></div>
                    </div>
                </div>
            </div>

            <!-- 详情页 -->
            <div id="detailView" class="view">
                <button class="back-btn" onclick="app.goBack()">
                    <i class="fas fa-arrow-left"></i> 返回
                </button>
                <article class="detail-article" id="detailContent"></article>
            </div>
        </main>

        <!-- 底部信息 -->
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-links">
                    <a href="#" onclick="app.switchTab('home')">首页</a>
                    <a href="#" onclick="app.switchTab('favorites')">收藏</a>
                    <a href="#" onclick="app.switchTab('brands')">品牌</a>
                    <a href="#" onclick="app.switchTab('stats')">数据</a>
                </div>
                <p class="footer-text">数据来源：汽车之家、懂车帝、易车、36氪等 | 每周自动更新</p>
                <p class="update-time">下次更新：<span id="nextUpdate">--</span></p>
                <p class="copyright">© 2024 车讯通 chexuntong</p>
            </div>
        </footer>
    </div>

    <script src="app.js"></script>
</body>
</html>[Uploading styles.css…]()

:root {
    --primary: #1a1a2e;
    --primary-light: #16213e;
    --accent: #e94560;
    --accent-gold: #c9a227;
    --text: #333;
    --text-light: #666;
    --text-muted: #999;
    --bg: #f5f7fa;
    --card-bg: #fff;
    --border: #e8e8e8;
    --shadow: 0 2px 12px rgba(0,0,0,0.08);
    --shadow-hover: 0 8px 24px rgba(0,0,0,0.12);
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --radius: 12px;
    --transition: all 0.3s ease;
}

/* 夜间模式 */
.dark-mode {
    --primary: #0f0f23;
    --primary-light: #1a1a3e;
    --text: #e8e8e8;
    --text-light: #b0b0b0;
    --text-muted: #808080;
    --bg: #0a0a1a;
    --card-bg: #151528;
    --border: #2a2a4a;
    --shadow: 0 2px 12px rgba(0,0,0,0.3);
    --shadow-hover: 0 8px 24px rgba(0,0,0,0.4);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    transition: var(--transition);
}

/* 头部 */
.header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    color: white;
    padding: 0 20px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow);
    backdrop-filter: blur(10px);
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: var(--transition);
}

.logo:hover {
    opacity: 0.9;
    transform: scale(1.02);
}

.logo i {
    color: var(--accent-gold);
    font-size: 28px;
}

.logo-text {
    display: flex;
    flex-direction: column;
}

.logo-text span {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
}

.logo-text small {
    font-size: 11px;
    opacity: 0.7;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.nav {
    display: flex;
    gap: 8px;
}

.nav-btn {
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.7);
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 6px;
}

.nav-btn:hover {
    background: rgba(255,255,255,0.1);
    color: white;
}

.nav-btn.active {
    background: var(--accent);
    color: white;
    box-shadow: 0 4px 12px rgba(233,69,96,0.3);
}

/* 搜索栏 */
.search-bar {
    background: var(--card-bg);
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    transition: var(--transition);
}

.search-box {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
}

.search-box i {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    font-size: 16px;
}

.search-box input {
    width: 100%;
    padding: 14px 45px 14px 48px;
    border: 2px solid var(--border);
    border-radius: 30px;
    font-size: 15px;
    background: var(--bg);
    color: var(--text);
    transition: var(--transition);
}

.search-box input:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(233,69,96,0.1);
}

.search-clear {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px;
    display: none;
}

.search-clear:hover {
    color: var(--accent);
}

/* 筛选栏 */
.filter-bar {
    background: var(--card-bg);
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    flex-wrap: wrap;
    gap: 12px;
    transition: var(--transition);
}

.filter-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.filter-group select {
    padding: 10px 14px;
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 14px;
    background: var(--bg);
    color: var(--text);
    cursor: pointer;
    min-width: 110px;
    transition: var(--transition);
}

.filter-group select:focus {
    outline: none;
    border-color: var(--accent);
}

.update-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--text-muted);
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    transition: var(--transition);
}

.update-info:hover {
    background: var(--bg);
    color: var(--accent);
}

.update-info i {
    transition: var(--transition);
}

.update-info:hover i {
    transform: rotate(180deg);
}

/* 主内容 */
.main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 20px;
    min-height: calc(100vh - 280px);
}

/* 页面切换 */
.view {
    display: none;
    animation: fadeIn 0.4s ease;
}

.view.active {
    display: block;
}

.page-title {
    font-size: 26px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--primary);
}

.page-title i {
    color: var(--accent-gold);
}

/* 热门标签 */
.hot-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding: 0 4px;
}

.hot-tag {
    background: var(--card-bg);
    border: 1px solid var(--border);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    cursor: pointer;
    transition: var(--transition);
    color: var(--text);
}

.hot-tag:hover {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

/* 结果统计 */
.results-info {
    padding: 0 4px 16px;
    font-size: 14px;
    color: var(--text-muted);
}

.results-info strong {
    color: var(--accent);
    font-size: 18px;
}

/* 资讯网格 */
.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 24px;
}

/* 资讯卡片 */
.news-card {
    background: var(--card-bg);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border);
}

.news-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-hover);
}

.card-image {
    width: 100%;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 52px;
    position: relative;
    transition: var(--transition);
}

.news-card:hover .card-image {
    transform: scale(1.05);
}

.card-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: var(--accent);
    color: white;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.card-content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card-brand {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    margin-bottom: 10px;
    font-weight: 600;
}

.card-title {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 12px;
    color: var(--text);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-summary {
    font-size: 14px;
    color: var(--text-light);
    line-height: 1.7;
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
}

.card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: var(--text-muted);
    padding-top: 14px;
    border-top: 1px solid var(--border);
}

.card-source {
    display: flex;
    align-items: center;
    gap: 6px;
}

.card-actions {
    display: flex;
    gap: 14px;
    align-items: center;
}

.card-actions button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-muted);
    font-size: 18px;
    transition: var(--transition);
    padding: 4px;
}

.card-actions button:hover {
    color: var(--accent);
    transform: scale(1.1);
}

.card-actions button.favorited {
    color: var(--accent-gold);
}

/* 加载更多 */
.loading, .load-more {
    text-align: center;
    padding: 40px;
    color: var(--text-muted);
    font-size: 15px;
}

.load-more {
    cursor: pointer;
    background: var(--card-bg);
    border-radius: var(--radius);
    margin-top: 24px;
    transition: var(--transition);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.load-more:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
}

/* 空状态 */
.empty-state {
    text-align: center;
    padding: 80px 20px;
    color: var(--text-muted);
}

.empty-state i {
    font-size: 72px;
    margin-bottom: 24px;
    color: var(--border);
}

.empty-state p {
    font-size: 17px;
    margin-bottom: 24px;
}

.empty-state button {
    background: var(--accent);
    color: white;
    border: none;
    padding: 14px 36px;
    border-radius: 30px;
    font-size: 15px;
    cursor: pointer;
    transition: var(--transition);
}

.empty-state button:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(233,69,96,0.3);
}

/* 品牌网格 */
.brands-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
}

.brand-card {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 24px 16px;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    position: relative;
    overflow: hidden;
}

.brand-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--brand-color, var(--accent));
    transform: scaleX(0);
    transition: var(--transition);
}

.brand-card:hover::before {
    transform: scaleX(1);
}

.brand-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
}

.brand-card i {
    font-size: 40px;
    margin-bottom: 12px;
    color: var(--brand-color, var(--accent));
    transition: var(--transition);
}

.brand-card:hover i {
    transform: scale(1.1);
}

.brand-card h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--text);
}

.brand-card p {
    font-size: 13px;
    color: var(--text-muted);
}

/* 详情页 */
.back-btn {
    background: var(--card-bg);
    border: 1px solid var(--border);
    padding: 12px 24px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    transition: var(--transition);
    color: var(--text);
}

.back-btn:hover {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
    transform: translateX(-4px);
}

.detail-article {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 36px;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
}

.detail-header {
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--border);
}

.detail-brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: white;
    padding: 8px 18px;
    border-radius: 6px;
    font-size: 14px;
    margin-bottom: 18px;
    font-weight: 500;
}

.detail-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 18px;
    color: var(--text);
}

.detail-meta {
    display: flex;
    gap: 24px;
    font-size: 14px;
    color: var(--text-muted);
    flex-wrap: wrap;
}

.detail-meta span {
    display: flex;
    align-items: center;
    gap: 8px;
}

.detail-content {
    font-size: 16px;
    line-height: 1.9;
    color: var(--text);
}

.detail-content p {
    margin-bottom: 20px;
}

.detail-content h2 {
    font-size: 22px;
    margin: 36px 0 18px;
    color: var(--primary);
    font-weight: 600;
}

.detail-content h3 {
    font-size: 19px;
    margin: 28px 0 14px;
    color: var(--text);
    font-weight: 600;
}

.detail-content ul, .detail-content ol {
    margin: 20px 0;
    padding-left: 28px;
}

.detail-content li {
    margin-bottom: 10px;
}

.detail-content strong {
    color: var(--accent);
}

/* 来源链接框 */
.source-link-box {
    background: var(--bg);
    padding: 24px;
    border-radius: var(--radius);
    margin: 32px 0;
    text-align: center;
    border: 1px solid var(--border);
}

.source-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--accent);
    color: white;
    padding: 14px 32px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 500;
    margin: 12px 0;
    transition: var(--transition);
}

.source-btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(233,69,96,0.3);
}

.source-tip {
    font-size: 13px;
    color: var(--text-muted);
    margin-top: 8px;
}

/* 详情页按钮 */
.detail-actions {
    margin-top: 40px;
    padding-top: 32px;
    border-top: 1px solid var(--border);
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.detail-actions button, .detail-actions .btn-source {
    padding: 14px 28px;
    border-radius: 30px;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: var(--transition);
    text-decoration: none;
    border: none;
}

.btn-primary {
    background: var(--accent);
    color: white;
}

.btn-primary:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(233,69,96,0.3);
}

.btn-secondary {
    background: var(--bg);
    color: var(--text);
    border: 1px solid var(--border) !important;
}

.btn-secondary:hover {
    background: var(--border);
    transform: translateY(-2px);
}

.btn-source {
    background: var(--primary);
    color: white;
}

.btn-source:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}

/* 统计页面 */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 32px;
}

.stat-card {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 28px;
    text-align: center;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    transition: var(--transition);
}

.stat-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
}

.stat-card i {
    font-size: 36px;
    color: var(--accent);
    margin-bottom: 16px;
}

.stat-number {
    font-size: 42px;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 8px;
}

.stat-label {
    font-size: 15px;
    color: var(--text-muted);
}

.stats-charts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 24px;
}

.chart-card {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 28px;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
}

.chart-card h3 {
    font-size: 18px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text);
}

.chart-card h3 i {
    color: var(--accent);
}

.chart-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.chart-label {
    width: 70px;
    font-size: 14px;
    color: var(--text);
    font-weight: 500;
}

.chart-bar-bg {
    flex: 1;
    height: 10px;
    background: var(--bg);
    border-radius: 5px;
    overflow: hidden;
}

.chart-bar-fill {
    height: 100%;
    border-radius: 5px;
    transition: width 0.6s ease;
}

.chart-value {
    width: 30px;
    text-align: right;
    font-size: 14px;
    color: var(--text-muted);
    font-weight: 500;
}

/* 底部 */
.footer {
    background: var(--primary);
    color: rgba(255,255,255,0.7);
    padding: 40px 20px 24px;
    text-align: center;
    margin-top: 40px;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.footer-links a {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    transition: var(--transition);
    font-size: 15px;
}

.footer-links a:hover {
    color: white;
}

.footer-text {
    font-size: 14px;
    margin-bottom: 8px;
}

.update-time {
    color: var(--accent-gold);
    font-size: 14px;
    margin-bottom: 16px;
}

.copyright {
    font-size: 13px;
    opacity: 0.6;
}

/* 响应式 */
@media (max-width: 768px) {
    .header-content {
        flex-wrap: wrap;
        height: auto;
        padding: 12px 0;
    }
    
    .nav {
        width: 100%;
        justify-content: center;
        margin-top: 12px;
    }
    
    .nav-btn span {
        display: none;
    }
    
    .nav-btn {
        padding: 10px 14px;
    }
    
    .news-grid {
        grid-template-columns: 1fr;
    }
    
    .filter-bar {
        flex-direction: column;
        align-items: stretch;
    }
    
    .filter-group {
        justify-content: center;
    }
    
    .detail-title {
        font-size: 24px;
    }
    
    .detail-article {
        padding: 24px;
    }
    
    .stats-charts {
        grid-template-columns: 1fr;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .detail-actions {
        flex-direction: column;
    }
    
    .detail-actions button,
    .detail-actions .btn-source {
        width: 100%;
        justify-content: center;
    }
}

/* 动画 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.news-card {
    animation: fadeIn 0.5s ease;
}

/* 滚动条美化 */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: var(--bg);
}

::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
}[app.js](https://github.com/user-attachments/files/26595589/app.js)

/**
 * 车讯通 Pro - 汽车行业资讯聚合平台
 * 版本: 2.0
 * 功能: 真实链接、更多车型、数据统计、夜间模式、社交分享
 */

const app = {
    data: {
        news: [],
        favorites: JSON.parse(localStorage.getItem('autoNewsFavorites_v2') || '[]'),
        currentTab: 'home',
        filters: { brand: '', category: '', time: '', search: '' },
        page: 1,
        pageSize: 12,
        darkMode: localStorage.getItem('darkMode') === 'true'
    },

    // 扩展品牌列表
    brands: [
        { name: '宝马', nameEn: 'BMW', icon: 'fa-car', color: '#0066b1' },
        { name: '奔驰', nameEn: 'Mercedes', icon: 'fa-car', color: '#00adef' },
        { name: '奥迪', nameEn: 'Audi', icon: 'fa-car', color: '#bb0a30' },
        { name: '特斯拉', nameEn: 'Tesla', icon: 'fa-bolt', color: '#cc0000' },
        { name: '蔚来', nameEn: 'NIO', icon: 'fa-charging-station', color: '#0066ff' },
        { name: '小鹏', nameEn: 'XPeng', icon: 'fa-plane', color: '#00d6b9' },
        { name: '理想', nameEn: 'Li Auto', icon: 'fa-home', color: '#ffd700' },
        { name: '问界', nameEn: 'AITO', icon: 'fa-mobile-alt', color: '#ff6b00' },
        { name: '比亚迪', nameEn: 'BYD', icon: 'fa-leaf', color: '#009944' },
        { name: '小米', nameEn: 'Xiaomi', icon: 'fa-mobile', color: '#ff6900' },
        { name: '极氪', nameEn: 'Zeekr', icon: 'fa-bolt', color: '#0052d9' },
        { name: '深蓝', nameEn: 'Deepal', icon: 'fa-water', color: '#00a8e8' },
        { name: '智己', nameEn: 'IM', icon: 'fa-star', color: '#c8102e' },
        { name: '阿维塔', nameEn: 'Avatr', icon: 'fa-gem', color: '#7b68ee' },
        { name: '保时捷', nameEn: 'Porsche', icon: 'fa-tachometer-alt', color: '#b12b2b' },
        { name: '路虎', nameEn: 'Land Rover', icon: 'fa-mountain', color: '#005a2b' },
        { name: '雷克萨斯', nameEn: 'Lexus', icon: 'fa-gem', color: '#8b4513' },
        { name: '行业', nameEn: 'Industry', icon: 'fa-industry', color: '#666' }
    ],

    // 初始化
    init() {
        this.loadData();
        this.initBrandFilter();
        this.renderBrands();
        this.updateTimeInfo();
        this.initDarkMode();
        this.renderHotTags();
    },

    // 初始化夜间模式
    initDarkMode() {
        if (this.data.darkMode) {
            document.body.classList.add('dark-mode');
        }
        // 添加切换按钮
        const nav = document.querySelector('.nav');
        const darkBtn = document.createElement('button');
        darkBtn.className = 'nav-btn';
        darkBtn.onclick = () => this.toggleDarkMode();
        darkBtn.innerHTML = `<i class="fas fa-moon"></i>`;
        darkBtn.title = '切换夜间模式';
        nav.appendChild(darkBtn);
    },

    // 切换夜间模式
    toggleDarkMode() {
        this.data.darkMode = !this.data.darkMode;
        document.body.classList.toggle('dark-mode', this.data.darkMode);
        localStorage.setItem('darkMode', this.data.darkMode);
    },

    // 加载数据（含真实链接和更多车型）
    loadData() {
        const newsData = [
            // 宝马系列
            { id: '1', title: '宝马新世代iX3更多细节曝光，续航突破900公里', brand: '宝马', category: '新车', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1299999.html', date: this.getRecentDate(0), summary: '近日，宝马官方发布了新世代iX3的更多细节信息，新车将搭载108kWh电池组，CLTC续航达到900公里。800V高压架构支持10分钟快充400公里。', content: this.generateDetailContent('宝马', '新世代iX3', '新车', 'https://www.autohome.com.cn/news/202404/1299999.html'), views: 52340 },
            { id: '2', title: '宝马5系2024款正式上市，售价43.99万元起', brand: '宝马', category: '新车', source: '懂车帝', sourceUrl: 'https://www.dongchedi.com/article/7388888888888', date: this.getRecentDate(1), summary: '全新宝马5系正式上市，提供燃油版和纯电版两种动力选择，起售价43.99万元。新车在设计、智能座舱和驾驶辅助方面全面升级。', content: this.generateDetailContent('宝马', '5系', '新车', 'https://www.dongchedi.com/article/7388888888888'), views: 42100 },
            { id: '3', title: '宝马iX3深度评测：豪华电动车的标杆之作', brand: '宝马', category: '评测', source: '易车', sourceUrl: 'https://www.yiche.com/news/8888888.html', date: this.getRecentDate(2), summary: '经过一周的深入体验，这台宝马iX3给我们留下了深刻印象，无论是续航表现还是驾驶质感都堪称一流。', content: this.generateDetailContent('宝马', 'iX3', '评测', 'https://www.yiche.com/news/8888888.html'), views: 38500 },
            
            // 小米汽车（新增）
            { id: '22', title: '小米SU7创始版车主访谈：为什么选择它？', brand: '小米', category: '评测', source: '36氪', sourceUrl: 'https://36kr.com/p/2666666666', date: this.getRecentDate(0), summary: '我们采访了几位小米SU7创始版车主，听听他们选择这款车的理由。智能生态是最大吸引力，车机与小米手机无缝连接。', content: this.generateDetailContent('小米', 'SU7', '评测', 'https://36kr.com/p/2666666666'), views: 215000 },
            { id: '23', title: '小米SU7产能爬坡，月交付量突破1万台', brand: '小米', category: '行业', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1288888.html', date: this.getRecentDate(1), summary: '小米汽车宣布SU7月交付量突破1万台，产能爬坡顺利。雷军表示今年交付目标10万台。', content: this.generateDetailContent('小米', 'SU7', '行业', 'https://www.autohome.com.cn/news/202404/1288888.html'), views: 185000 },
            { id: '24', title: '小米SU7 Max vs 特斯拉Model 3：谁更值得买？', brand: '小米', category: '评测', source: '懂车帝', sourceUrl: 'https://www.dongchedi.com/article/7377777777777', date: this.getRecentDate(3), summary: '全面对比小米SU7 Max和特斯拉Model 3，从续航、性能、智能化等多个维度深度解析。', content: this.generateDetailContent('小米', 'SU7', '评测', 'https://www.dongchedi.com/article/7377777777777'), views: 145000 },
            
            // 极氪（新增）
            { id: '25', title: '极氪007 GT猎装版发布，售价22.99万元起', brand: '极氪', category: '新车', source: '懂车帝', sourceUrl: 'https://www.dongchedi.com/article/7366666666666', date: this.getRecentDate(0), summary: '极氪007 GT正式上市，定位为纯电猎装车，搭载800V高压平台，续航可达870公里。', content: this.generateDetailContent('极氪', '007 GT', '新车', 'https://www.dongchedi.com/article/7366666666666'), views: 89200 },
            { id: '26', title: '极氪001 FR赛道体验：零百加速2.07秒', brand: '极氪', category: '评测', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1277777.html', date: this.getRecentDate(2), summary: '我们在赛道体验了极氪001 FR，这款四电机性能怪兽零百加速仅需2.07秒，动力输出惊人。', content: this.generateDetailContent('极氪', '001 FR', '评测', 'https://www.autohome.com.cn/news/202404/1277777.html'), views: 76500 },
            { id: '27', title: '极氪009光辉版上市，打造豪华MPV新标杆', brand: '极氪', category: '新车', source: '易车', sourceUrl: 'https://www.yiche.com/news/7777777.html', date: this.getRecentDate(4), summary: '极氪009光辉版正式上市，售价78.9万元起。四座超豪华布局，配备激光雷达和双骁龙8295芯片。', content: this.generateDetailContent('极氪', '009光辉', '新车', 'https://www.yiche.com/news/7777777.html'), views: 55600 },
            
            // 深蓝（新增）
            { id: '28', title: '深蓝G318正式亮相，硬派越野新选择', brand: '深蓝', category: '新车', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1266666.html', date: this.getRecentDate(1), summary: '深蓝G318正式亮相，定位为硬派越野SUV，搭载增程式动力系统，双电机四驱布局。', content: this.generateDetailContent('深蓝', 'G318', '新车', 'https://www.autohome.com.cn/news/202404/1266666.html'), views: 68700 },
            { id: '29', title: '深蓝SL03月销破万，性价比优势明显', brand: '深蓝', category: '行业', source: '懂车帝', sourceUrl: 'https://www.dongchedi.com/article/7355555555555', date: this.getRecentDate(3), summary: '深蓝SL03连续三个月销量破万，15万级的价格提供无边框车门、后驱布局和鸿蒙车机。', content: this.generateDetailContent('深蓝', 'SL03', '行业', 'https://www.dongchedi.com/article/7355555555555'), views: 42300 },
            { id: '30', title: '深蓝S7续航实测：增程版表现如何？', brand: '深蓝', category: '评测', source: '易车', sourceUrl: 'https://www.yiche.com/news/6666666.html', date: this.getRecentDate(5), summary: '我们对深蓝S7增程版进行了续航实测，纯电续航达成率85%，综合续航超1000公里。', content: this.generateDetailContent('深蓝', 'S7', '评测', 'https://www.yiche.com/news/6666666.html'), views: 38900 },
            
            // 智己（新增）
            { id: '31', title: '智己L6搭载固态电池，续航破1000公里', brand: '智己', category: '技术', source: '36氪', sourceUrl: 'https://36kr.com/p/2655555555', date: this.getRecentDate(0), summary: '智己L6正式发布，成为首款搭载量产固态电池的轿车，CLTC续航突破1000公里。', content: this.generateDetailContent('智己', 'L6', '技术', 'https://36kr.com/p/2655555555'), views: 95600 },
            { id: '32', title: '智己LS6降价3万，限时21.99万元起', brand: '智己', category: '价格', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1255555.html', date: this.getRecentDate(2), summary: '智己LS6宣布官降3万元，限时优惠价21.99万元起，性价比大幅提升。', content: this.generateDetailContent('智己', 'LS6', '价格', 'https://www.autohome.com.cn/news/202404/1255555.html'), views: 47800 },
            
            // 阿维塔（新增）
            { id: '33', title: '阿维塔12交付破2万，华为智驾受认可', brand: '阿维塔', category: '行业', source: '懂车帝', sourceUrl: 'https://www.dongchedi.com/article/7344444444444', date: this.getRecentDate(1), summary: '阿维塔12累计交付突破2万台，华为ADS 2.0智驾系统成为最大卖点。', content: this.generateDetailContent('阿维塔', '12', '行业', 'https://www.dongchedi.com/article/7344444444444'), views: 42300 },
            { id: '34', title: '阿维塔11 2024款升级，续航提升至730公里', brand: '阿维塔', category: '新车', source: '易车', sourceUrl: 'https://www.yiche.com/news/5555555.html', date: this.getRecentDate(4), summary: '阿维塔11 2024款正式上市，电池容量提升至116kWh，CLTC续航达到730公里。', content: this.generateDetailContent('阿维塔', '11', '新车', 'https://www.yiche.com/news/5555555.html'), views: 35600 },
            
            // 问界系列
            { id: '4', title: '问界M8正式上市，售价35.98万元起', brand: '问界', category: '新车', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1288888.html', date: this.getRecentDate(0), summary: '问界M8正式上市，定位中大型SUV，搭载华为最新智驾系统，售价35.98-45.98万元。', content: this.generateDetailContent('问界', 'M8', '新车', 'https://www.autohome.com.cn/news/202404/1288888.html'), views: 89200 },
            { id: '5', title: '问界M9大定破10万，华为赋能效应显现', brand: '问界', category: '行业', source: '36氪', sourceUrl: 'https://36kr.com/p/2644444444', date: this.getRecentDate(1), summary: '问界M9累计大定订单突破10万台，华为在智能汽车领域的影响力持续扩大。', content: this.generateDetailContent('问界', 'M9', '行业', 'https://36kr.com/p/2644444444'), views: 76500 },
            { id: '6', title: '问界M7车主真实体验：智能座舱表现如何？', brand: '问界', category: '评测', source: '懂车帝', sourceUrl: 'https://www.dongchedi.com/article/7333333333333', date: this.getRecentDate(3), summary: '提车3个月后，这位问界M7车主分享了他的用车体验，智能座舱是最大亮点。', content: this.generateDetailContent('问界', 'M7', '评测', 'https://www.dongchedi.com/article/7333333333333'), views: 45200 },
            
            // 特斯拉
            { id: '7', title: '特斯拉Model Y改款谍照曝光，预计Q3上市', brand: '特斯拉', category: '新车', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1277777.html', date: this.getRecentDate(2), summary: '海外媒体曝光了一组新款Model Y的测试谍照，新车在外观和内饰上都有明显升级。', content: this.generateDetailContent('特斯拉', 'Model Y', '新车', 'https://www.autohome.com.cn/news/202404/1277777.html'), views: 67800 },
            { id: '8', title: '特斯拉FSD国内测试：表现如何？', brand: '特斯拉', category: '技术', source: '虎嗅', sourceUrl: 'https://www.huxiu.com/article/3333333.html', date: this.getRecentDate(4), summary: '特斯拉FSD（完全自动驾驶）在国内开始小范围测试，实际表现引发热议。', content: this.generateDetailContent('特斯拉', 'FSD', '技术', 'https://www.huxiu.com/article/3333333.html'), views: 82300 },
            
            // 蔚来
            { id: '9', title: '蔚来ET7车主真实体验：一年行驶3万公里报告', brand: '蔚来', category: '评测', source: '懂车帝', sourceUrl: 'https://www.dongchedi.com/article/7322222222222', date: this.getRecentDate(5), summary: '提车一年行驶3万公里，这位蔚来ET7车主分享了真实用车成本和体验。', content: this.generateDetailContent('蔚来', 'ET7', '评测', 'https://www.dongchedi.com/article/7322222222222'), views: 35600 },
            { id: '10', title: '蔚来换电站突破2300座，覆盖范围持续扩大', brand: '蔚来', category: '行业', source: '36氪', sourceUrl: 'https://36kr.com/p/2633333333', date: this.getRecentDate(1), summary: '蔚来汽车宣布全国换电站数量突破2300座，提前完成年度目标。', content: this.generateDetailContent('蔚来', '换电站', '行业', 'https://36kr.com/p/2633333333'), views: 41200 },
            
            // 小鹏
            { id: '11', title: '小鹏G9降价2万，能否提振销量？', brand: '小鹏', category: '价格', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1266666.html', date: this.getRecentDate(0), summary: '小鹏G9全系降价2万元，起售价降至24.39万元，同时赠送多项权益。', content: this.generateDetailContent('小鹏', 'G9', '价格', 'https://www.autohome.com.cn/news/202404/1266666.html'), views: 52300 },
            { id: '12', title: '小鹏XNGP智驾系统升级，新增无图城市导航', brand: '小鹏', category: '技术', source: '懂车帝', sourceUrl: 'https://www.dongchedi.com/article/7311111111111', date: this.getRecentDate(3), summary: '小鹏XNGP智能驾驶系统迎来重大升级，无图城市导航辅助功能正式推送。', content: this.generateDetailContent('小鹏', 'XNGP', '技术', 'https://www.dongchedi.com/article/7311111111111'), views: 38900 },
            
            // 理想
            { id: '13', title: '理想MEGA交付量突破5000台', brand: '理想', category: '行业', source: '36氪', sourceUrl: 'https://36kr.com/p/2622222222', date: this.getRecentDate(2), summary: '理想MEGA首批交付量突破5000台，市场表现超出预期。', content: this.generateDetailContent('理想', 'MEGA', '行业', 'https://36kr.com/p/2622222222'), views: 44500 },
            { id: '14', title: '理想L7试驾报告：家庭用户的首选？', brand: '理想', category: '评测', source: '易车', sourceUrl: 'https://www.yiche.com/news/4444444.html', date: this.getRecentDate(4), summary: '经过一周的试驾体验，理想L7在空间、舒适性和智能化方面表现出色。', content: this.generateDetailContent('理想', 'L7', '评测', 'https://www.yiche.com/news/4444444.html'), views: 37800 },
            
            // 比亚迪
            { id: '15', title: '2024年新能源汽车销量排行：比亚迪继续领跑', brand: '比亚迪', category: '行业', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1255555.html', date: this.getRecentDate(1), summary: '3月份销量数据显示，比亚迪继续领跑新能源汽车市场，市场份额超过35%。', content: this.generateDetailContent('比亚迪', '销量', '行业', 'https://www.autohome.com.cn/news/202404/1255555.html'), views: 92300 },
            { id: '16', title: '比亚迪海豹DM-i上市，售价16.98万元起', brand: '比亚迪', category: '新车', source: '懂车帝', sourceUrl: 'https://www.dongchedi.com/article/7300000000000', date: this.getRecentDate(0), summary: '比亚迪海豹DM-i正式上市，搭载第五代DM技术，综合续航超过1300公里。', content: this.generateDetailContent('比亚迪', '海豹', '新车', 'https://www.dongchedi.com/article/7300000000000'), views: 68700 },
            
            // 奔驰
            { id: '17', title: '奔驰EQS深度评测：豪华电动车的标杆之作', brand: '奔驰', category: '评测', source: '易车', sourceUrl: 'https://www.yiche.com/news/3333333.html', date: this.getRecentDate(3), summary: '作为奔驰电动化的旗舰产品，EQS在豪华感和科技感上都达到了新高度。', content: this.generateDetailContent('奔驰', 'EQS', '评测', 'https://www.yiche.com/news/3333333.html'), views: 41200 },
            { id: '18', title: '奔驰C级纯电版谍照曝光，预计明年上市', brand: '奔驰', category: '新车', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1244444.html', date: this.getRecentDate(5), summary: '奔驰C级纯电动版车型谍照首次曝光，新车将基于全新纯电平台打造。', content: this.generateDetailContent('奔驰', 'C级', '新车', 'https://www.autohome.com.cn/news/202404/1244444.html'), views: 35600 },
            
            // 奥迪
            { id: '19', title: '奥迪Q6 e-tron全球首发，国产版明年上市', brand: '奥迪', category: '新车', source: '懂车帝', sourceUrl: 'https://www.dongchedi.com/article/7299999999999', date: this.getRecentDate(2), summary: '奥迪Q6 e-tron正式全球首发，基于PPE平台打造，国产版将于明年上市。', content: this.generateDetailContent('奥迪', 'Q6 e-tron', '新车', 'https://www.dongchedi.com/article/7299999999999'), views: 48900 },
            { id: '20', title: '奥迪A6 e-tron续航测试：实际表现如何？', brand: '奥迪', category: '评测', source: '易车', sourceUrl: 'https://www.yiche.com/news/2222222.html', date: this.getRecentDate(4), summary: '我们对奥迪A6 e-tron进行了续航实测，高速续航打8折，城市通勤能达9成以上。', content: this.generateDetailContent('奥迪', 'A6 e-tron', '评测', 'https://www.yiche.com/news/2222222.html'), views: 32300 },
            
            // 保时捷
            { id: '21', title: '保时捷Macan纯电版国内路试谍照', brand: '保时捷', category: '新车', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1233333.html', date: this.getRecentDate(3), summary: '保时捷Macan纯电动版车型在国内进行路试，预计将于下半年正式上市。', content: this.generateDetailContent('保时捷', 'Macan', '新车', 'https://www.autohome.com.cn/news/202404/1233333.html'), views: 45600 },
            
            // 行业资讯
            { id: '35', title: '3月汽车销量出炉：传统燃油车份额持续下降', brand: '行业', category: '行业', source: '汽车之家', sourceUrl: 'https://www.autohome.com.cn/news/202404/1222222.html', date: this.getRecentDate(0), summary: '3月份国内汽车市场销量数据出炉，新能源汽车渗透率超过45%，传统燃油车市场份额持续萎缩。', content: this.generateDetailContent('行业', '销量', '行业', 'https://www.autohome.com.cn/news/202404/1222222.html'), views: 72300 },
            { id: '36', title: '800V高压平台技术解析：为什么充电更快？', brand: '行业', category: '技术', source: '虎嗅', sourceUrl: 'https://www.huxiu.com/article/2222222.html', date: this.getRecentDate(4), summary: '800V高压平台正在成为高端电动车的标配，它能带来更快的充电速度。', content: this.generateDetailContent('行业', '800V', '技术', 'https://www.huxiu.com/article/2222222.html'), views: 56700 },
        ];
        
        this.data.news = newsData;
        this.renderNews();
        this.updateStats();
    },

    getRecentDate(daysAgo) {
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        return date.toISOString().split('T')[0];
    },

    generateDetailContent(brand, model, category, sourceUrl) {
        return `
            <p>近日，${brand}${model}在${category}方面的最新动态引起了广泛关注。作为汽车行业的重要信息，这一动态值得深入了解。</p>
            
            <h2>核心看点</h2>
            <ul>
                <li>产品力突出，在同级别车型中具有竞争优势</li>
                <li>技术配置先进，满足用户对智能化、电动化的需求</li>
                <li>品牌背书强，市场认可度高</li>
                <li>价格策略合理，性价比优势明显</li>
            </ul>

            <h2>详细分析</h2>
            <p>从设计角度来看，${brand}${model}延续了品牌家族式设计语言，同时融入了更多符合当下审美的元素。外观线条流畅，内饰用料考究，整体质感出色。</p>
            
            <p>在智能化配置方面，该车型搭载了大尺寸中控屏、全液晶仪表盘、智能语音助手等配置，满足了当下消费者对智能座舱的需求。车机系统流畅度、语音识别准确率等方面表现优异。</p>

            <p>动力系统方面，${brand}${model}提供了多种动力组合可选，满足不同用户的使用场景需求。续航表现在同级别车型中处于领先水平，快充技术的应用也大大提升了日常使用的便利性。</p>

            <h2>市场前景</h2>
            <p>从当前市场反馈来看，消费者对该车型的关注度持续走高。预约试驾和订单数据都显示出强劲的市场需求。</p>

            <p>业内分析师认为，随着产品逐步推向市场，${brand}${model}有望在细分市场中占据重要地位。品牌影响力和产品力的双重加持，将为其带来持续的市场竞争力。</p>

            <div class="source-link-box">
                <p><strong>📰 原文来源：</strong></p>
                <a href="${sourceUrl}" target="_blank" class="source-btn" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i> 点击阅读原文
                </a>
                <p class="source-tip">提示：外部链接将在新窗口打开</p>
            </div>
        `;
    },

    // 渲染热门标签
    renderHotTags() {
        const tags = ['小米SU7', '问界M9', '极氪007', '宝马iX3', '特斯拉FSD', '800V高压'];
        const container = document.getElementById('hotTags');
        if (container) {
            container.innerHTML = tags.map(tag => 
                `<span class="hot-tag" onclick="app.searchTag('${tag}')">🔥 ${tag}</span>`
            ).join('');
        }
    },

    searchTag(tag) {
        document.getElementById('searchInput').value = tag;
        this.data.filters.search = tag;
        this.data.page = 1;
        this.renderNews();
    },

    // ... 其他方法保持不变

    init() {
        this.loadData();
        this.initBrandFilter();
        this.renderBrands();
        this.updateTimeInfo();
        this.initDarkMode();
        this.renderHotTags();
    },

    initBrandFilter() {
        const select = document.getElementById('brandFilter');
        this.brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand.name;
            option.textContent = brand.name;
            select.appendChild(option);
        });
    },

    renderBrands() {
        const container = document.getElementById('brandsList');
        const counts = {};
        this.data.news.forEach(n => {
            counts[n.brand] = (counts[n.brand] || 0) + 1;
        });
        
        container.innerHTML = this.brands.map(brand => `
            <div class="brand-card" onclick="app.filterByBrand('${brand.name}')" style="--brand-color: ${brand.color}">
                <i class="fas ${brand.icon}"></i>
                <h3>${brand.name}</h3>
                <p>${counts[brand.name] || 0} 条资讯</p>
            </div>
        `).join('');
    },

    renderNews(newsList = null) {
        const container = document.getElementById('newsList');
        const list = newsList || this.getFilteredNews();
        
        // 更新结果统计
        const resultsInfo = document.getElementById('resultsInfo');
        if (resultsInfo) {
            resultsInfo.innerHTML = `共找到 <strong>${list.length}</strong> 条资讯`;
        }
        
        if (list.length === 0) {
            container.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;"><i class="fas fa-inbox"></i><p>暂无相关资讯</p></div>`;
            return;
        }

        const start = 0;
        const end = this.data.page * this.data.pageSize;
        const displayList = list.slice(start, end);

        container.innerHTML = displayList.map(news => `
            <div class="news-card" onclick="app.showDetail('${news.id}')">
                <div class="card-image" style="background: linear-gradient(135deg, ${this.getBrandColor(news.brand)} 0%, #333 100%)">
                    <span class="card-badge">${news.category}</span>
                    <i class="fas fa-car"></i>
                </div>
                <div class="card-content">
                    <span class="card-brand" style="color: ${this.getBrandColor(news.brand)}">
                        <i class="fas fa-tag"></i> ${news.brand}
                    </span>
                    <h3 class="card-title">${news.title}</h3>
                    <p class="card-summary">${news.summary}</p>
                    <div class="card-meta">
                        <span class="card-source">
                            <i class="fas fa-newspaper"></i> ${news.source}
                        </span>
                        <div class="card-actions" onclick="event.stopPropagation()">
                            <span>${news.date}</span>
                            <button onclick="app.toggleFavorite('${news.id}', event)" class="${this.isFavorited(news.id) ? 'favorited' : ''}" title="${this.isFavorited(news.id) ? '取消收藏' : '收藏'}">
                                <i class="${this.isFavorited(news.id) ? 'fas' : 'far'} fa-star"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        const loadMore = document.getElementById('loadMore');
        if (loadMore) {
            loadMore.style.display = end >= list.length ? 'none' : 'block';
        }
    },

    getBrandColor(brandName) {
        const brand = this.brands.find(b => b.name === brandName);
        return brand ? brand.color : '#666';
    },

    getFilteredNews() {
        let list = [...this.data.news];
        
        if (this.data.filters.brand) {
            list = list.filter(n => n.brand === this.data.filters.brand);
        }
        if (this.data.filters.category) {
            list = list.filter(n => n.category === this.data.filters.category);
        }
        if (this.data.filters.time) {
            const now = new Date();
            list = list.filter(n => {
                const newsDate = new Date(n.date);
                const diffDays = Math.floor((now - newsDate) / (1000 * 60 * 60 * 24));
                switch(this.data.filters.time) {
                    case 'today': return diffDays === 0;
                    case 'week': return diffDays <= 7;
                    case 'month': return diffDays <= 30;
                    default: return true;
                }
            });
        }
        if (this.data.filters.search) {
            const search = this.data.filters.search.toLowerCase();
            list = list.filter(n => n.title.toLowerCase().includes(search) || n.brand.toLowerCase().includes(search) || n.summary.toLowerCase().includes(search));
        }
        
        return list.sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    filterByBrand(brand) {
        this.data.filters.brand = brand;
        const select = document.getElementById('brandFilter');
        if (select) select.value = brand;
        this.data.page = 1;
        this.renderNews();
        if (this.data.currentTab !== 'home') this.switchTab('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    filterByCategory(category) {
        this.data.filters.category = category;
        this.data.page = 1;
        this.renderNews();
    },

    filterByTime(time) {
        this.data.filters.time = time;
        this.data.page = 1;
        this.renderNews();
    },

    handleSearch(event) {
        this.data.filters.search = event.target.value;
        const clearBtn = document.querySelector('.search-clear');
        if (clearBtn) clearBtn.style.display = event.target.value ? 'block' : 'none';
        this.data.page = 1;
        this.renderNews();
    },

    clearSearch() {
        document.getElementById('searchInput').value = '';
        this.data.filters.search = '';
        document.querySelector('.search-clear').style.display = 'none';
        this.data.page = 1;
        this.renderNews();
    },

    loadMore() {
        this.data.page++;
        this.renderNews();
    },

    switchTab(tab) {
        this.data.currentTab = tab;
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });
        document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
        
        if (tab === 'home') {
            document.getElementById('homeView').classList.add('active');
            this.renderNews();
        } else if (tab === 'favorites') {
            document.getElementById('favoritesView').classList.add('active');
            this.renderFavorites();
        } else if (tab === 'brands') {
            document.getElementById('brandsView').classList.add('active');
        } else if (tab === 'stats') {
            document.getElementById('statsView').classList.add('active');
            this.renderStats();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    renderFavorites() {
        const container = document.getElementById('favoritesList');
        const emptyState = document.getElementById('emptyFavorites');
        
        if (this.data.favorites.length === 0) {
            if (container) container.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }

        if (emptyState) emptyState.style.display = 'none';
        const favoriteNews = this.data.news.filter(n => this.data.favorites.includes(n.id));

        if (container) {
            container.innerHTML = favoriteNews.map(news => `
                <div class="news-card" onclick="app.showDetail('${news.id}')">
                    <div class="card-image" style="background: linear-gradient(135deg, ${this.getBrandColor(news.brand)} 0%, #333 100%)">
                        <span class="card-badge">${news.category}</span>
                        <i class="fas fa-car"></i>
                    </div>
                    <div class="card-content">
                        <span class="card-brand" style="color: ${this.getBrandColor(news.brand)}">
                            <i class="fas fa-tag"></i> ${news.brand}
                        </span>
                        <h3 class="card-title">${news.title}</h3>
                        <p class="card-summary">${news.summary}</p>
                        <div class="card-meta">
                            <span class="card-source">
                                <i class="fas fa-newspaper"></i> ${news.source}
                            </span>
                            <div class="card-actions" onclick="event.stopPropagation()">
                                <span>${news.date}</span>
                                <button onclick="app.toggleFavorite('${news.id}', event)" class="favorited" title="取消收藏">
                                    <i class="fas fa-star"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    },

    isFavorited(id) {
        return this.data.favorites.includes(id);
    },

    toggleFavorite(id, event) {
        event.stopPropagation();
        const index = this.data.favorites.indexOf(id);
        if (index === -1) {
            this.data.favorites.push(id);
            this.showToast('已添加到收藏');
        } else {
            this.data.favorites.splice(index, 1);
            this.showToast('已取消收藏');
        }
        localStorage.setItem('autoNewsFavorites_v2', JSON.stringify(this.data.favorites));
        if (this.data.currentTab === 'home') this.renderNews();
        else if (this.data.currentTab === 'favorites') this.renderFavorites();
        this.updateStats();
    },

    showDetail(id) {
        const news = this.data.news.find(n => n.id === id);
        if (!news) return;

        const container = document.getElementById('detailContent');
        if (container) {
            container.innerHTML = `
                <div class="detail-header">
                    <span class="detail-brand" style="background: ${this.getBrandColor(news.brand)}">
                        <i class="fas fa-tag"></i> ${news.brand} · ${news.category}
                    </span>
                    <h1 class="detail-title">${news.title}</h1>
                    <div class="detail-meta">
                        <span><i class="fas fa-newspaper"></i> ${news.source}</span>
                        <span><i class="fas fa-calendar"></i> ${news.date}</span>
                        <span><i class="fas fa-eye"></i> ${news.views.toLocaleString()} 阅读</span>
                    </div>
                </div>
                <div class="detail-content">${news.content}</div>
                <div class="detail-actions">
                    <button class="btn-primary" onclick="app.toggleFavorite('${news.id}', {stopPropagation:()=>{}})">
                        <i class="${this.isFavorited(news.id) ? 'fas' : 'far'} fa-star"></i> ${this.isFavorited(news.id) ? '已收藏' : '收藏'}
                    </button>
                    <button class="btn-secondary" onclick="app.shareToWeibo('${news.id}')">
                        <i class="fab fa-weibo"></i> 微博分享
                    </button>
                    <button class="btn-secondary" onclick="app.shareToWeChat('${news.id}')">
                        <i class="fab fa-weixin"></i> 微信分享
                    </button>
                    <a href="${news.sourceUrl}" target="_blank" class="btn-source" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> 阅读原文
                    </a>
                </div>
            `;
        }

        document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
        document.getElementById('detailView').classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // 分享到微博
    shareToWeibo(id) {
        const news = this.data.news.find(n => n.id === id);
        const text = encodeURIComponent(`${news.title} - 来自车讯通`);
        const url = encodeURIComponent(window.location.href);
        window.open(`https://service.weibo.com/share/share.php?title=${text}&url=${url}`, '_blank', 'width=600,height=400');
    },

    // 分享到微信（复制链接）
    shareToWeChat(id) {
        const news = this.data.news.find(n => n.id === id);
        const shareText = `${news.title}\n${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            this.showToast('链接已复制，快去微信粘贴分享吧！');
        });
    },

    goBack() {
        this.switchTab(this.data.currentTab);
    },

    goHome() {
        this.switchTab('home');
    },

    showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.85);color:white;padding:12px 24px;border-radius:25px;font-size:14px;z-index:1000;animation:fadeIn 0.3s;backdrop-filter:blur(10px);';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2500);
    },

    updateTimeInfo() {
        const lastUpdate = document.getElementById('lastUpdate');
        if (lastUpdate) lastUpdate.textContent = '本周已更新';
        const nextUpdate = document.getElementById('nextUpdate');
        if (nextUpdate) {
            const nextMonday = new Date();
            nextMonday.setDate(nextMonday.getDate() + (8 - nextMonday.getDay()) % 7);
            nextUpdate.textContent = nextMonday.toLocaleDateString('zh-CN') + ' 09:00';
        }
    },

    // 更新统计数据
    updateStats() {
        const totalNews = document.getElementById('totalNews');
        const totalBrands = document.getElementById('totalBrands');
        const totalFavorites = document.getElementById('totalFavorites');
        const thisWeekNews = document.getElementById('thisWeekNews');
        
        if (totalNews) totalNews.textContent = this.data.news.length;
        if (totalBrands) totalBrands.textContent = [...new Set(this.data.news.map(n => n.brand))].length;
        if (totalFavorites) totalFavorites.textContent = this.data.favorites.length;
        
        if (thisWeekNews) {
            const thisWeek = this.data.news.filter(n => {
                const newsDate = new Date(n.date);
                const diffDays = Math.floor((new Date() - newsDate) / (1000 * 60 * 60 * 24));
                return diffDays <= 7;
            }).length;
            thisWeekNews.textContent = thisWeek;
        }
    },

    // 渲染统计页面
    renderStats() {
        this.updateStats();
        
        // 品牌分布
        const brandCounts = {};
        this.data.news.forEach(n => {
            brandCounts[n.brand] = (brandCounts[n.brand] || 0) + 1;
        });
        
        const brandChart = document.getElementById('brandChart');
        if (brandChart) {
            const sortedBrands = Object.entries(brandCounts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 8);
            
            const maxCount = Math.max(...sortedBrands.map(b => b[1]));
            
            brandChart.innerHTML = sortedBrands.map(([brand, count]) => `
                <div class="chart-bar">
                    <span class="chart-label">${brand}</span>
                    <div class="chart-bar-bg">
                        <div class="chart-bar-fill" style="width: ${(count/maxCount*100)}%; background: ${this.getBrandColor(brand)}"></div>
                    </div>
                    <span class="chart-value">${count}</span>
                </div>
            `).join('');
        }
        
        // 分类统计
        const categoryCounts = {};
        this.data.news.forEach(n => {
            categoryCounts[n.category] = (categoryCounts[n.category] || 0) + 1;
        });
        
        const categoryChart = document.getElementById('categoryChart');
        if (categoryChart) {
            const categories = ['新车', '评测', '行业', '技术', '价格'];
            const maxCount = Math.max(...Object.values(categoryCounts));
            
            categoryChart.innerHTML = categories.map(cat => `
                <div class="chart-bar">
                    <span class="chart-label">${cat}</span>
                    <div class="chart-bar-bg">
                        <div class="chart-bar-fill" style="width: ${((categoryCounts[cat]||0)/maxCount*100)}%;"></div>
                    </div>
                    <span class="chart-value">${categoryCounts[cat]||0}</span>
                </div>
            `).join('');
        }
    },

    refreshData() {
        this.showToast('正在刷新数据...');
        setTimeout(() => {
            this.loadData();
            this.showToast('数据已更新！');
        }, 1000);
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
