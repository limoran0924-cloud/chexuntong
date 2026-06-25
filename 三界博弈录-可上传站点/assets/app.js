(function () {
  const DATA = window.SANJIE_DATA;
  if (!DATA) return;

  const route = document.body.dataset.page;
  const industryId = document.body.dataset.industry || null;
  const ACCESS_KEY = "sanjie_boyilu_access";

  function hasAccess() {
    return window.localStorage.getItem(ACCESS_KEY) === "granted";
  }

  function gatePage() {
    if (route !== "login" && !hasAccess()) {
      window.location.href = "./login.html";
    }
  }

  function logout() {
    window.localStorage.removeItem(ACCESS_KEY);
    window.location.href = "./login.html";
  }

  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function formatDate(date) {
    const target = new Date(date);
    const y = target.getFullYear();
    const m = String(target.getMonth() + 1).padStart(2, "0");
    const d = String(target.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function trendDelta(points) {
    if (points.length < 2) return 0;
    return points[points.length - 1] - points[points.length - 2];
  }

  function getHostname(url) {
    if (!url || url === "#") return "待补正文";
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return "来源待校验";
    }
  }

  function hasRealLink(record) {
    const detailLink = record.url || record.link || "#";
    return detailLink && detailLink !== "#";
  }

  function getCoverageStats(records) {
    const real = records.filter(hasRealLink).length;
    return {
      total: records.length,
      real,
      pending: records.length - real
    };
  }

  function getVisibleRecords(records) {
    return records.filter(hasRealLink);
  }

  function findRecordById(recordId) {
    for (const industry of Object.values(DATA.industries)) {
      const found = industry.records.find((record) => record.id === recordId);
      if (found) {
        return { industry, record: found };
      }
    }
    return null;
  }

  function buildDetailUrl(record) {
    return `./detail.html?industry=${encodeURIComponent(record.industry)}&id=${encodeURIComponent(record.id)}`;
  }

  function createWordStats(records, limit) {
    const map = new Map();
    records.forEach((record) => {
      record.keywords.forEach((keyword, index) => {
        const clean = keyword.trim();
        const weight = Math.max(1, 8 - index);
        map.set(clean, (map.get(clean) || 0) + weight);
      });
    });
    return [...map.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([label, value]) => ({ label, value }));
  }

  function fillWordCloud(container, entries) {
    container.innerHTML = "";
    if (!entries.length) return;

    const containerWidth = Math.max(container.clientWidth, 320);
    const containerHeight = Math.max(container.clientHeight, 260);
    const maxValue = entries[0] ? entries[0].value : 1;
    const minValue = entries[entries.length - 1] ? entries[entries.length - 1].value : 1;
    const placed = [];

    function intersects(box) {
      return placed.some((item) => {
        return !(
          box.right < item.left ||
          box.left > item.right ||
          box.bottom < item.top ||
          box.top > item.bottom
        );
      });
    }

    entries.forEach((entry, index) => {
      const node = document.createElement("span");
      const ratio = maxValue === minValue
        ? 1
        : (entry.value - minValue) / (maxValue - minValue);
      const fontSize = Math.round(15 + ratio * 26);
      const colorValue = Math.round(226 - ratio * 120);

      node.textContent = entry.label;
      node.style.left = "0";
      node.style.top = "0";
      node.style.visibility = "hidden";
      node.style.transform = "translate3d(0, 0, 0)";
      node.style.fontSize = `${fontSize}px`;
      node.style.lineHeight = "1";
      node.style.whiteSpace = "nowrap";
      node.style.color = `rgb(${Math.max(colorValue - 18, 70)}, ${Math.max(colorValue - 24, 66)}, 255)`;
      node.style.opacity = String(0.42 + ratio * 0.48);
      container.appendChild(node);

      const width = node.offsetWidth;
      const height = node.offsetHeight;
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      let finalX = Math.max(10, centerX - width / 2);
      let finalY = Math.max(10, centerY - height / 2);
      let found = false;

      for (let step = 0; step < 240; step += 1) {
        const angle = step * 0.53 + index * 0.8;
        const radius = 4 + step * 2.4;
        const x = centerX + Math.cos(angle) * radius - width / 2;
        const y = centerY + Math.sin(angle) * radius * 0.72 - height / 2;
        const left = Math.min(Math.max(10, x), containerWidth - width - 10);
        const top = Math.min(Math.max(10, y), containerHeight - height - 10);
        const box = {
          left,
          top,
          right: left + width,
          bottom: top + height
        };

        if (!intersects(box)) {
          finalX = left;
          finalY = top;
          placed.push(box);
          found = true;
          break;
        }
      }

      if (!found) {
        placed.push({
          left: finalX,
          top: finalY,
          right: finalX + width,
          bottom: finalY + height
        });
      }

      node.style.left = `${finalX}px`;
      node.style.top = `${finalY}px`;
      node.style.visibility = "visible";
      node.style.zIndex = String(100 - index);
    });
  }

  function renderTrendChart(target, series, accent) {
    const width = 640;
    const height = 300;
    const padding = { top: 24, right: 18, bottom: 28, left: 30 };
    const values = series.flatMap((item) => item.points);
    const min = Math.min(...values) - 6;
    const max = Math.max(...values) + 6;
    const axisBottom = height - padding.bottom;
    const axisLeft = padding.left;
    const plotWidth = width - padding.left - padding.right;
    const plotHeight = height - padding.top - padding.bottom;
    const palette = [accent, "#6a7dff", "#87a0ff", "#0d8b6f", "#b77018"];

    const gridLines = [0, 0.25, 0.5, 0.75, 1].map((ratio) => {
      const y = padding.top + plotHeight * ratio;
      return `<line x1="${axisLeft}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="rgba(104,120,160,0.14)" stroke-width="1" />`;
    }).join("");

    const labels = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    const xLabels = labels.map((label, index) => {
      const x = axisLeft + (plotWidth / (labels.length - 1)) * index;
      return `<text x="${x}" y="${height - 10}" text-anchor="middle" fill="#7a849c" font-size="12">${label}</text>`;
    }).join("");

    const lines = series.map((item, seriesIndex) => {
      const points = item.points.map((point, index) => {
        const x = axisLeft + (plotWidth / (item.points.length - 1)) * index;
        const y = padding.top + (max - point) / (max - min) * plotHeight;
        return [x, y];
      });
      const d = points.map((point, index) => `${index === 0 ? "M" : "L"}${point[0]},${point[1]}`).join(" ");
      const circles = points.map((point) => `<circle cx="${point[0]}" cy="${point[1]}" r="3.5" fill="${palette[seriesIndex % palette.length]}" />`).join("");
      return `<path d="${d}" fill="none" stroke="${palette[seriesIndex % palette.length]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />${circles}`;
    }).join("");

    target.innerHTML = `
      <svg class="trend-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="品牌周期趋势图">
        ${gridLines}
        <line x1="${axisLeft}" y1="${axisBottom}" x2="${width - padding.right}" y2="${axisBottom}" stroke="rgba(104,120,160,0.24)" stroke-width="1.2" />
        <line x1="${axisLeft}" y1="${padding.top}" x2="${axisLeft}" y2="${axisBottom}" stroke="rgba(104,120,160,0.24)" stroke-width="1.2" />
        ${xLabels}
        ${lines}
      </svg>
    `;
  }

  function buildRecordCard(record) {
    const detailLink = record.url || record.link || "#";
    const hasDetailLink = hasRealLink(record);
    const sourceHost = getHostname(detailLink);
    const detailPageUrl = buildDetailUrl(record);
    const titleHtml = hasDetailLink
      ? `<a class="record-title-link" href="${detailPageUrl}">${escapeHtml(record.title)}</a>`
      : `<a class="record-title-link" href="${detailPageUrl}">${escapeHtml(record.title)}</a>`;
    const sourceAction = `<a class="record-link" href="${detailPageUrl}">查看详情</a>`;
    return `
      <article class="record-item is-clickable ${hasDetailLink ? "is-verified" : "is-pending"}">
        <h4>${titleHtml}</h4>
        <div class="record-meta">
          <span class="chip">${escapeHtml(record.categoryName || "事件")}</span>
          <span class="chip">${escapeHtml(record.brand)}</span>
          <span class="chip">${escapeHtml(record.date)}</span>
          <span class="chip">事件热度 ${record.heat}</span>
          <span class="chip ${hasDetailLink ? "chip-verified" : "chip-pending"}">${hasDetailLink ? "真实正文" : "品牌线索"}</span>
        </div>
        <p>${escapeHtml(record.summary)}</p>
        <div class="tag-list" style="margin-top: 14px;">
          ${record.keywords.map((keyword) => `<span class="tag">${escapeHtml(keyword)}</span>`).join("")}
        </div>
        <div class="record-footer">
          <span>报告来源：${escapeHtml(record.source)}</span>
          <span>来源域名：${escapeHtml(sourceHost)}</span>
          <span>平台：${record.platforms.join(" / ")}</span>
          ${sourceAction}
        </div>
      </article>
    `;
  }

  function defaultStart(records) {
    const sorted = [...records].sort((a, b) => new Date(a.date) - new Date(b.date));
    return formatDate(new Date(sorted[0].date));
  }

  function renderLoginPage() {
    const productNameEls = document.querySelectorAll("[data-product-name]");
    productNameEls.forEach((el) => {
      el.textContent = DATA.meta.productName;
    });
    const form = document.querySelector("#login-form");
    const passwordInput = document.querySelector("#password");
    const errorEl = document.querySelector("#login-error");
    if (!form || !passwordInput || !errorEl) return;
    if (hasAccess()) {
      window.location.href = "./index.html";
      return;
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const typed = passwordInput.value.trim();
      if (typed === DATA.meta.accessPassword) {
        window.localStorage.setItem(ACCESS_KEY, "granted");
        window.location.href = "./index.html";
        return;
      }
      errorEl.textContent = "密码不正确，请重试。";
    });
  }

  function renderHomePage() {
    gatePage();
    const productNameEls = document.querySelectorAll("[data-product-name]");
    productNameEls.forEach((el) => {
      el.textContent = DATA.meta.productName;
    });
    const industryGrid = document.querySelector("#industry-grid");
    const overviewChips = document.querySelector("#overview-chips");
    const totalRecords = Object.values(DATA.industries).reduce((sum, item) => sum + getVisibleRecords(item.records).length, 0);
    const totalBrands = new Set(Object.values(DATA.industries).flatMap((item) => getVisibleRecords(item.records).map((record) => record.brand))).size;
    document.querySelector("#total-records").textContent = String(totalRecords);
    document.querySelector("#total-brands").textContent = String(totalBrands);
    document.querySelector("#last-update").textContent = DATA.meta.updatedAt;
    document.querySelector("#logout-btn")?.addEventListener("click", logout);

    overviewChips.innerHTML = Object.values(DATA.industries)
      .map((item) => {
        const visibleRecords = getVisibleRecords(item.records);
        return `<span class="chip">${item.name} · ${item.platforms.length}个平台 · 已展示 ${visibleRecords.length} 条正文</span>`;
      })
      .join("");

    industryGrid.innerHTML = Object.values(DATA.industries).map((item) => {
      const visibleRecords = getVisibleRecords(item.records);
      const hot = createWordStats(visibleRecords.slice(0, 4), 3).map((entry) => entry.label).join(" / ");
      const latestCount = visibleRecords.filter((record) => new Date(record.date) >= new Date(defaultStart(visibleRecords))).length;
      const visibleBrands = new Set(visibleRecords.map((record) => record.brand));
      return `
        <article class="card industry-card" style="background: linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,255,255,0.68));">
          <h3>${item.name}</h3>
          <p>${item.subtitle}</p>
          <div class="meta">
            <div><span>资料数</span><strong>${visibleRecords.length}</strong></div>
            <div><span>可见品牌</span><strong>${visibleBrands.size}</strong></div>
            <div><span>近周新增</span><strong>${latestCount}</strong></div>
          </div>
          <p style="margin-top: 14px;"><strong>展示口径：</strong>当前前台仅展示已补齐正文链接的资料。</p>
          <p style="margin-top: 16px;"><strong>热词概览：</strong>${hot}</p>
          <div class="chip-row" style="margin-top: 16px;">
            ${[...visibleBrands].slice(0, 5).map((brand) => `<span class="chip">${brand}</span>`).join("")}
          </div>
          <div class="actions" style="margin-top: 20px;">
            <a class="button" href="./${item.id}.html">进入${item.name}板块</a>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderIndustryPage() {
    gatePage();
    const industry = DATA.industries[industryId];
    if (!industry) return;
    const visibleRecords = getVisibleRecords(industry.records);
    const visibleBrands = [...new Set(visibleRecords.map((record) => record.brand))];

    document.querySelector("#product-name").textContent = DATA.meta.productName;
    document.querySelector("#industry-name").textContent = industry.name;
    document.querySelector("#industry-subtitle").textContent = industry.subtitle;
    document.querySelector("#brand-count").textContent = String(visibleBrands.length);
    document.querySelector("#platform-count").textContent = String(industry.platforms.length);
    document.querySelector("#record-count").textContent = String(visibleRecords.length);
    document.querySelector("#logout-btn")?.addEventListener("click", logout);

    const brandSelect = document.querySelector("#brand-select");
    const keywordInput = document.querySelector("#keyword-input");
    const startInput = document.querySelector("#start-input");
    const endInput = document.querySelector("#end-input");
    const realOnlyToggle = document.querySelector("#real-only-toggle");
    const resetBtn = document.querySelector("#reset-filters");
    const wordCloudToday = document.querySelector("#wordcloud-today");
    const wordCloudAll = document.querySelector("#wordcloud-all");
    const recordList = document.querySelector("#record-list");
    const coverageTags = document.querySelector("#coverage-tags");
    const platformList = document.querySelector("#platform-list");
    const trendLegend = document.querySelector("#trend-legend");
    const trendDetail = document.querySelector("#trend-detail");
    const coverage = getCoverageStats(industry.records);

    if (realOnlyToggle) {
      realOnlyToggle.value = "real";
      realOnlyToggle.closest(".field")?.remove();
    }

    brandSelect.innerHTML = `<option value="">全部品牌</option>${visibleBrands.map((brand) => `<option value="${brand}">${brand}</option>`).join("")}`;
    startInput.value = defaultStart(visibleRecords);
    endInput.value = formatDate(new Date(Math.max(...visibleRecords.map((item) => new Date(item.date).getTime()))));

    coverageTags.innerHTML = visibleBrands.map((brand) => `<span class="chip">${brand}</span>`).join("");
    platformList.innerHTML = industry.platforms.map((platform) => `<span class="platform-pill">${platform}</span>`).join("");

    const series = industry.trendSeries;
    trendLegend.innerHTML = series.map((item, index) => {
      const colors = [industry.accent, "#6a7dff", "#87a0ff", "#0d8b6f", "#b77018"];
      const delta = trendDelta(item.points);
      const trendText = delta >= 0 ? `较上月 +${delta}` : `较上月 ${delta}`;
      return `<div class="legend-item"><span class="legend-dot" style="background:${colors[index % colors.length]};"></span>${item.brand} ${trendText}</div>`;
    }).join("");
    renderTrendChart(document.querySelector("#trend-chart"), series, industry.accent);
    trendDetail.innerHTML = `
      <p>
        <strong>${industry.trendMeta.metric}</strong>，统计周期：${industry.trendMeta.period}。
        ${industry.trendMeta.methodology}
      </p>
      <p style="margin-top: 10px;">
        当前资料状态：历史共收录 <strong>${coverage.total}</strong> 条资料，其中 <strong>${coverage.real}</strong> 条已补齐真实正文直链，前台当前仅展示这部分内容。
      </p>
      <p style="margin-top: 10px;">
        尚未补齐原文的品牌线索卡已从前台隐藏，待补齐正文后会重新进入展示列表。
      </p>
      <div class="trend-data-list">
        ${series.map((item) => `
          <div class="trend-data-item">
            <span><strong>${item.brand}</strong>：${item.points.join(" / ")}</span>
            <span>来源：${item.source}</span>
          </div>
        `).join("")}
      </div>
      <p style="margin-top: 12px;">
        数据来源：${industry.trendMeta.sources.join("、")}
      </p>
    `;

    function applyFilters() {
      const keyword = keywordInput.value.trim().toLowerCase();
      const brand = brandSelect.value;
      const start = startInput.value ? new Date(startInput.value) : null;
      const end = endInput.value ? new Date(endInput.value) : null;
      const filtered = visibleRecords.filter((record) => {
        const date = new Date(record.date);
        const inStart = start ? date >= start : true;
        const inEnd = end ? date <= end : true;
        const inBrand = brand ? record.brand === brand : true;
        const searchText = `${record.title} ${record.summary} ${record.keywords.join(" ")} ${record.brand}`.toLowerCase();
        const inKeyword = keyword ? searchText.includes(keyword) : true;
        return inStart && inEnd && inBrand && inKeyword;
      });

      document.querySelector("#result-total").textContent = String(filtered.length);
      recordList.innerHTML = filtered.length
        ? filtered.map(buildRecordCard).join("")
        : `<div class="record-item"><h4>暂无匹配内容</h4><p>可以放宽时间范围、清空品牌或修改关键词后重试。</p></div>`;

      fillWordCloud(wordCloudToday, createWordStats(filtered.slice(0, 4), 18));
      fillWordCloud(wordCloudAll, createWordStats(visibleRecords, 20));
    }

    [brandSelect, keywordInput, startInput, endInput].filter(Boolean).forEach((node) => {
      node.addEventListener("input", applyFilters);
      node.addEventListener("change", applyFilters);
    });

    resetBtn.addEventListener("click", () => {
      brandSelect.value = "";
      keywordInput.value = "";
      startInput.value = defaultStart(visibleRecords);
      endInput.value = formatDate(new Date(Math.max(...visibleRecords.map((item) => new Date(item.date).getTime()))));
      applyFilters();
    });

    applyFilters();
  }

  function renderDetailPage() {
    gatePage();
    const params = new URLSearchParams(window.location.search);
    const recordId = params.get("id");
    const payload = recordId ? findRecordById(recordId) : null;
    const root = document.querySelector("#detail-root");

    if (!root) return;

    if (!payload) {
      root.innerHTML = `
        <section class="card detail-card">
          <h2>资料不存在</h2>
          <p>当前资料未找到，可能是链接参数失效或资料尚未同步。</p>
          <div class="actions" style="margin-top: 18px;">
            <a class="ghost-button" href="./index.html">返回首页</a>
          </div>
        </section>
      `;
      return;
    }

    const { industry, record } = payload;
    const realLink = hasRealLink(record);
    const sourceHost = getHostname(record.url || record.link || "#");
    const originalAction = realLink
      ? `<a class="button" href="${record.url || record.link}" target="_blank" rel="noreferrer">查看原文</a>`
      : `<span class="ghost-button detail-disabled">原文待补</span>`;

    root.innerHTML = `
      <section class="card detail-card ${realLink ? "is-verified" : "is-pending"}">
        <div class="detail-topbar">
          <div class="brand-copy">
            <h2>${escapeHtml(record.title)}</h2>
            <p>${escapeHtml(industry.name)}板块资料详情</p>
          </div>
          <div class="actions">
            <a class="ghost-button" href="./${industry.id}.html">返回${escapeHtml(industry.name)}板块</a>
            <a class="ghost-button" href="./index.html">返回首页</a>
          </div>
        </div>
        <div class="record-meta" style="margin-top: 18px;">
          <span class="chip">${escapeHtml(record.categoryName || "事件")}</span>
          <span class="chip">${escapeHtml(record.brand)}</span>
          <span class="chip">${escapeHtml(record.date)}</span>
          <span class="chip">事件热度 ${record.heat}</span>
          <span class="chip ${realLink ? "chip-verified" : "chip-pending"}">${realLink ? "真实正文" : "品牌线索"}</span>
        </div>
        <p class="detail-summary">${escapeHtml(record.summary)}</p>
        <div class="tag-list" style="margin-top: 18px;">
          ${record.keywords.map((keyword) => `<span class="tag">${escapeHtml(keyword)}</span>`).join("")}
        </div>
        <div class="detail-grid">
          <div class="detail-block">
            <h3>资料信息</h3>
            <p><strong>报告来源：</strong>${escapeHtml(record.source)}</p>
            <p><strong>来源域名：</strong>${escapeHtml(sourceHost)}</p>
            <p><strong>覆盖平台：</strong>${escapeHtml(record.platforms.join(" / "))}</p>
          </div>
          <div class="detail-block">
            <h3>链接状态</h3>
            <p>${realLink ? "当前资料已补齐原文直链，可直接进入外部正文页面。" : "当前资料已补齐站内详情页，外部原文链接仍在继续补充。"}</p>
            <div class="actions" style="margin-top: 16px;">
              ${originalAction}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  if (route === "login") {
    renderLoginPage();
  }

  if (route === "home") {
    renderHomePage();
  }

  if (route === "industry") {
    renderIndustryPage();
  }

  if (route === "detail") {
    renderDetailPage();
  }
})();
