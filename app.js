/**
 * 车讯通 - 前端独立版
 * 无需后端，纯前端运行
 */

const app = {
    data: {
        news: [],
        favorites: JSON.parse(localStorage.getItem('autoNewsFavorites') || '[]'),
        currentTab: 'home',
        filters: { brand: '', category: '', time: '', search: '' },
        page: 1,
        pageSize: 12
    },

    brands: [
        { name: '宝马', nameEn: 'BMW', icon: 'fa-car' },
        { name: '奔驰', nameEn: 'Mercedes', icon: 'fa-car' },
        { name: '奥迪', nameEn: 'Audi', icon: 'fa-car' },
        { name: '特斯拉', nameEn: 'Tesla', icon: 'fa-bolt' },
        { name: '蔚来', nameEn: 'NIO', icon: 'fa-charging-station' },
        { name: '小鹏', nameEn: 'XPeng', icon: 'fa-plane' },
        { name: '理想', nameEn: 'Li Auto', icon: 'fa-home' },
        { name: '问界', nameEn: 'AITO', icon: 'fa-mobile-alt' },
        { name: '比亚迪', nameEn: 'BYD', icon: 'fa-leaf' },
        { name: '保时捷', nameEn: 'Porsche', icon: 'fa-tachometer-alt' },
        { name: '路虎', nameEn: 'Land Rover', icon: 'fa-mountain' },
        { name: '雷克萨斯', nameEn: 'Lexus', icon: 'fa-gem' }
    ],

    init() {
        this.loadData();
        this.initBrandFilter();
        this.renderBrands();
        this.updateTimeInfo();
    },

    loadData() {
        // 生成更丰富的模拟数据
        const mockData = [
            // 宝马
            { id: '1', title: '宝马新世代iX3更多细节曝光，续航突破900公里', brand: '宝马', category: '新车', source: '汽车之家', date: this.getRecentDate(0), summary: '近日，宝马官方发布了新世代iX3的更多细节信息，新车将搭载108kWh电池组，CLTC续航达到900公里。', content: this.generateDetailContent('宝马', '新世代iX3', '新车'), views: 52340 },
            { id: '2', title: '宝马5系2024款正式上市，售价43.99万元起', brand: '宝马', category: '新车', source: '懂车帝', date: this.getRecentDate(1), summary: '全新宝马5系正式上市，提供燃油版和纯电版两种动力选择，起售价43.99万元。', content: this.generateDetailContent('宝马', '5系', '新车'), views: 42100 },
            { id: '3', title: '宝马iX3深度评测：豪华电动车的标杆之作', brand: '宝马', category: '评测', source: '易车', date: this.getRecentDate(2), summary: '经过一周的深入体验，这台宝马iX3给我们留下了深刻印象，无论是续航表现还是驾驶质感都堪称一流。', content: this.generateDetailContent('宝马', 'iX3', '评测'), views: 38500 },
            
            // 问界
            { id: '4', title: '问界M8正式上市，售价35.98万元起', brand: '问界', category: '新车', source: '汽车之家', date: this.getRecentDate(0), summary: '问界M8正式上市，定位中大型SUV，搭载华为最新智驾系统，售价35.98-45.98万元。', content: this.generateDetailContent('问界', 'M8', '新车'), views: 89200 },
            { id: '5', title: '问界M9大定破10万，华为赋能效应显现', brand: '问界', category: '行业', source: '36氪', date: this.getRecentDate(1), summary: '问界M9累计大定订单突破10万台，华为在智能汽车领域的影响力持续扩大。', content: this.generateDetailContent('问界', 'M9', '行业'), views: 76500 },
            { id: '6', title: '问界M7车主真实体验：智能座舱表现如何？', brand: '问界', category: '评测', source: '懂车帝', date: this.getRecentDate(3), summary: '提车3个月后，这位问界M7车主分享了他的用车体验，智能座舱是最大亮点。', content: this.generateDetailContent('问界', 'M7', '评测'), views: 45200 },
            
            // 特斯拉
            { id: '7', title: '特斯拉Model Y改款谍照曝光，预计Q3上市', brand: '特斯拉', category: '新车', source: '汽车之家', date: this.getRecentDate(2), summary: '海外媒体曝光了一组新款Model Y的测试谍照，新车在外观和内饰上都有明显升级。', content: this.generateDetailContent('特斯拉', 'Model Y', '新车'), views: 67800 },
            { id: '8', title: '特斯拉FSD国内测试：表现如何？', brand: '特斯拉', category: '技术', source: '虎嗅', date: this.getRecentDate(4), summary: '特斯拉FSD（完全自动驾驶）在国内开始小范围测试，实际表现引发热议。', content: this.generateDetailContent('特斯拉', 'FSD', '技术'), views: 82300 },
            
            // 蔚来
            { id: '9', title: '蔚来ET7车主真实体验：一年行驶3万公里报告', brand: '蔚来', category: '评测', source: '懂车帝', date: this.getRecentDate(5), summary: '提车一年行驶3万公里，这位蔚来ET7车主分享了真实用车成本和体验。', content: this.generateDetailContent('蔚来', 'ET7', '评测'), views: 35600 },
            { id: '10', title: '蔚来换电站突破2300座，覆盖范围持续扩大', brand: '蔚来', category: '行业', source: '36氪', date: this.getRecentDate(1), summary: '蔚来汽车宣布全国换电站数量突破2300座，提前完成年度目标。', content: this.generateDetailContent('蔚来', '换电站', '行业'), views: 41200 },
            
            // 小鹏
            { id: '11', title: '小鹏G9降价2万，能否提振销量？', brand: '小鹏', category: '价格', source: '汽车之家', date: this.getRecentDate(0), summary: '小鹏G9全系降价2万元，起售价降至24.39万元，同时赠送多项权益。', content: this.generateDetailContent('小鹏', 'G9', '价格'), views: 52300 },
            { id: '12', title: '小鹏XNGP智驾系统升级，新增无图城市导航', brand: '小鹏', category: '技术', source: '懂车帝', date: this.getRecentDate(3), summary: '小鹏XNGP智能驾驶系统迎来重大升级，无图城市导航辅助功能正式推送。', content: this.generateDetailContent('小鹏', 'XNGP', '技术'), views: 38900 },
            
            // 理想
            { id: '13', title: '理想MEGA交付量突破5000台', brand: '理想', category: '行业', source: '36氪', date: this.getRecentDate(2), summary: '理想MEGA首批交付量突破5000台，市场表现超出预期。', content: this.generateDetailContent('理想', 'MEGA', '行业'), views: 44500 },
            { id: '14', title: '理想L7试驾报告：家庭用户的首选？', brand: '理想', category: '评测', source: '易车', date: this.getRecentDate(4), summary: '经过一周的试驾体验，理想L7在空间、舒适性和智能化方面表现出色。', content: this.generateDetailContent('理想', 'L7', '评测'), views: 37800 },
            
            // 比亚迪
            { id: '15', title: '2024年新能源汽车销量排行：比亚迪继续领跑', brand: '比亚迪', category: '行业', source: '汽车之家', date: this.getRecentDate(1), summary: '3月份销量数据显示，比亚迪继续领跑新能源汽车市场，市场份额超过35%。', content: this.generateDetailContent('比亚迪', '销量', '行业'), views: 92300 },
            { id: '16', title: '比亚迪海豹DM-i上市，售价16.98万元起', brand: '比亚迪', category: '新车', source: '懂车帝', date: this.getRecentDate(0), summary: '比亚迪海豹DM-i正式上市，搭载第五代DM技术，综合续航超过1300公里。', content: this.generateDetailContent('比亚迪', '海豹', '新车'), views: 68700 },
            
            // 奔驰
            { id: '17', title: '奔驰EQS深度评测：豪华电动车的标杆之作', brand: '奔驰', category: '评测', source: '易车', date: this.getRecentDate(3), summary: '作为奔驰电动化的旗舰产品，EQS在豪华感和科技感上都达到了新高度。', content: this.generateDetailContent('奔驰', 'EQS', '评测'), views: 41200 },
            { id: '18', title: '奔驰C级纯电版谍照曝光，预计明年上市', brand: '奔驰', category: '新车', source: '汽车之家', date: this.getRecentDate(5), summary: '奔驰C级纯电动版车型谍照首次曝光，新车将基于全新纯电平台打造。', content: this.generateDetailContent('奔驰', 'C级', '新车'), views: 35600 },
            
            // 奥迪
            { id: '19', title: '奥迪Q6 e-tron全球首发，国产版明年上市', brand: '奥迪', category: '新车', source: '懂车帝', date: this.getRecentDate(2), summary: '奥迪Q6 e-tron正式全球首发，基于PPE平台打造，国产版将于明年上市。', content: this.generateDetailContent('奥迪', 'Q6 e-tron', '新车'), views: 48900 },
            { id: '20', title: '奥迪A6 e-tron续航测试：实际表现如何？', brand: '奥迪', category: '评测', source: '易车', date: this.getRecentDate(4), summary: '我们对奥迪A6 e-tron进行了续航实测，来看看它的真实表现如何。', content: this.generateDetailContent('奥迪', 'A6 e-tron', '评测'), views: 32300 },
            
            // 保时捷
            { id: '21', title: '保时捷Macan纯电版国内路试谍照', brand: '保时捷', category: '新车', source: '汽车之家', date: this.getRecentDate(3), summary: '保时捷Macan纯电动版车型在国内进行路试，预计将于下半年正式上市。', content: this.generateDetailContent('保时捷', 'Macan', '新车'), views: 45600 },
            
            // 小米汽车
            { id: '22', title: '小米SU7创始版车主访谈：为什么选择它？', brand: '行业', category: '评测', source: '36氪', date: this.getRecentDate(6), summary: '我们采访了几位小米SU7创始版车主，听听他们选择这款车的理由。', content: this.generateDetailContent('小米', 'SU7', '评测'), views: 115000 },
            
            // 行业资讯
            { id: '23', title: '3月汽车销量出炉：传统燃油车份额持续下降', brand: '行业', category: '行业', source: '汽车之家', date: this.getRecentDate(0), summary: '3月份国内汽车市场销量数据出炉，新能源汽车渗透率超过45%。', content: this.generateDetailContent('行业', '销量', '行业'), views: 72300 },
            { id: '24', title: '800V高压平台技术解析：为什么充电更快？', brand: '行业', category: '技术', source: '虎嗅', date: this.getRecentDate(4), summary: '800V高压平台正在成为高端电动车的标配，它能带来哪些优势？', content: this.generateDetailContent('行业', '800V', '技术'), views: 56700 },
        ];
        
        this.data.news = mockData;
        this.renderNews();
    },

    getRecentDate(daysAgo) {
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        return date.toISOString().split('T')[0];
    },

    generateDetailContent(brand, model, category) {
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

            <p><strong>总结：</strong>${brand}${model}是一款值得关注的产品，无论是从产品力还是市场前景来看，都具有较强的竞争力。</p>
        `;
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
            <div class="brand-card" onclick="app.filterByBrand('${brand.name}')">
                <i class="fas ${brand.icon}"></i>
                <h3>${brand.name}</h3>
                <p>${counts[brand.name] || 0} 条资讯</p>
            </div>
        `).join('');
    },

    renderNews(newsList = null) {
        const container = document.getElementById('newsList');
        const list = newsList || this.getFilteredNews();
        
        if (list.length === 0) {
            container.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;"><i class="fas fa-inbox"></i><p>暂无相关资讯</p></div>`;
            return;
        }

        const start = 0;
        const end = this.data.page * this.data.pageSize;
        const displayList = list.slice(start, end);

        container.innerHTML = displayList.map(news => `
            <div class="news-card" onclick="app.showDetail('${news.id}')">
                <div class="card-image">
                    <span class="card-badge">${news.category}</span>
                    <i class="fas fa-car"></i>
                </div>
                <div class="card-content">
                    <span class="card-brand"><i class="fas fa-tag"></i> ${news.brand}</span>
                    <h3 class="card-title">${news.title}</h3>
                    <p class="card-summary">${news.summary}</p>
                    <div class="card-meta">
                        <span class="card-source"><i class="fas fa-newspaper"></i> ${news.source}</span>
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

        document.getElementById('loadMore').style.display = end >= list.length ? 'none' : 'block';
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
        document.getElementById('brandFilter').value = brand;
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
        this.data.page = 1;
        this.renderNews();
    },

    loadMore() {
        this.data.page++;
        this.renderNews();
    },

    switchTab(tab) {
        this.data.currentTab = tab;
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tab));
        document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
        
        if (tab === 'home') {
            document.getElementById('homeView').classList.add('active');
            this.renderNews();
        } else if (tab === 'favorites') {
            document.getElementById('favoritesView').classList.add('active');
            this.renderFavorites();
        } else if (tab === 'brands') {
            document.getElementById('brandsView').classList.add('active');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    renderFavorites() {
        const container = document.getElementById('favoritesList');
        const emptyState = document.getElementById('emptyFavorites');
        
        if (this.data.favorites.length === 0) {
            container.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';
        const favoriteNews = this.data.news.filter(n => this.data.favorites.includes(n.id));

        container.innerHTML = favoriteNews.map(news => `
            <div class="news-card" onclick="app.showDetail('${news.id}')">
                <div class="card-image">
                    <span class="card-badge">${news.category}</span>
                    <i class="fas fa-car"></i>
                </div>
                <div class="card-content">
                    <span class="card-brand"><i class="fas fa-tag"></i> ${news.brand}</span>
                    <h3 class="card-title">${news.title}</h3>
                    <p class="card-summary">${news.summary}</p>
                    <div class="card-meta">
                        <span class="card-source"><i class="fas fa-newspaper"></i> ${news.source}</span>
                        <div class="card-actions" onclick="event.stopPropagation()">
                            <span>${news.date}</span>
                            <button onclick="app.toggleFavorite('${news.id}', event)" class="favorited" title="取消收藏"><i class="fas fa-star"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
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
        localStorage.setItem('autoNewsFavorites', JSON.stringify(this.data.favorites));
        if (this.data.currentTab === 'home') this.renderNews();
        else if (this.data.currentTab === 'favorites') this.renderFavorites();
    },

    showDetail(id) {
        const news = this.data.news.find(n => n.id === id);
        if (!news) return;

        document.getElementById('detailContent').innerHTML = `
            <div class="detail-header">
                <span class="detail-brand"><i class="fas fa-tag"></i> ${news.brand} · ${news.category}</span>
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
                <button class="btn-secondary" onclick="app.shareNews('${news.id}')">
                    <i class="fas fa-share-alt"></i> 分享
                </button>
            </div>
        `;

        document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
        document.getElementById('detailView').classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    goBack() {
        this.switchTab(this.data.currentTab);
    },

    goHome() {
        this.switchTab('home');
    },

    shareNews(id) {
        const news = this.data.news.find(n => n.id === id);
        if (navigator.share) {
            navigator.share({ title: news.title, text: news.summary, url: window.location.href });
        } else {
            navigator.clipboard.writeText(`${news.title} - ${window.location.href}`);
            this.showToast('链接已复制');
        }
    },

    showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.8);color:white;padding:12px 24px;border-radius:25px;font-size:14px;z-index:1000;animation:fadeIn 0.3s;';
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    },

    updateTimeInfo() {
        document.getElementById('lastUpdate').textContent = '本周已更新';
        const nextMonday = new Date();
        nextMonday.setDate(nextMonday.getDate() + (8 - nextMonday.getDay()) % 7);
        document.getElementById('nextUpdate').textContent = nextMonday.toLocaleDateString('zh-CN') + ' 09:00';
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
