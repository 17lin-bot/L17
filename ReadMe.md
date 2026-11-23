# Kaizen Studio — 2D & 3D Visual Atelier

Kaizen Studio 是專注於 2D 平面設計、前衛動態視覺與次世代 3D 空間藝術的創作者個人官方展示網站。本專案以 **React 18**、**TypeScript** 與 **Tailwind CSS** 為核心，完全忠實復原並模組化重構 **Stitch (Obsidian Lumina)** 設計系統與視覺規格。

---

## 視覺與設計系統規範 (Obsidian Lumina)

- **設計美學風格**：暗物質極簡主義 (Dark Matter Minimalism)、夜光擬物玻璃態 (Luminescent Glassmorphism) 與高彩度光學對比 (Electric Precision)。
- **色彩規劃**：
  - 底層畫布：`#0e0e10` / `#131315` (Obsidian Canvas)
  - 容器階層：`#1c1b1d` (Elevation 1) / `#201f21` (Elevation 2) / `#2a2a2c` / `#353437`
  - 核心霓光：`#00f0ff` (Primary Cyan Beam 光束)
  - 氛圍紫外光：`#7701d0` / `#dcb8ff` (Secondary Ultraviolet Aura)
  - 文字層次：`#e5e1e4` (高對比白金) / `#b9cacb` (次級白金)
- **字型組合**：
  - 標題與雕塑型大字：`Syne` (600 / 700 / 800)
  - 內文與工程數據標註：`Space Grotesk` (400 / 500 / 600)
  - 圖示庫：Google `Material Symbols Outlined`

---

## 模組化架構與專案結構

```
c:/Users/user/Desktop/41248417/
├── dist/                             # 生產建置打包成果
├── docs/                             # 規格文件存放區
├── references/                       # Stitch 原始匯出設計素材與程式碼
│   └── stitch/
│       ├── about_creative_director/
│       ├── case_studies_detail/
│       ├── contact_inquiries/
│       ├── obsidian_lumina/
│       ├── skills_software_stack/
│       └── work_hero_portfolio/
├── src/
│   ├── components/                   # 模組化互動元件
│   │   ├── Navbar.tsx                # 固定頂部導覽列、發光狀態、響應式抽屜選單
│   │   ├── Footer.tsx                # Atelier 品牌版權與社群連結
│   │   ├── HeroThreeScene.tsx        # Three.js 實時立體二十面體核心與粒子雙環視差
│   │   ├── ProjectModal.tsx          # 專案燈箱彈窗 (ESC/遮罩點擊關閉)
│   │   ├── ComparisonSlider.tsx      # Wireframe Clay vs. Octane 渲染即時水平對比滑塊
│   │   ├── Turntable3D.tsx           # GLB/GLTF 3D 視圖模擬 (自動公轉/線框/縮放/FPS)
│   │   ├── ContactForm.tsx           # 委託諮詢表單 (即時驗證/字數計算/防機器人/發送動態)
│   │   └── FaqAccordion.tsx          # 常見諮詢手風琴摺疊 (含交付格式規格表)
│   ├── data/
│   │   └── portfolioData.ts          # 專案列表、軟體技術堆疊、經歷與 FAQ 結構化資料
│   ├── views/                        # 5 大核心獨立頁面視圖
│   │   ├── WorkView.tsx              # 精選作品：Hero 3D 雕塑、分類篩選晶片、作品矩陣
│   │   ├── CaseStudiesView.tsx       # 深入案例解析：Chronos Metallic 奢華時計全流程解構
│   │   ├── AboutView.tsx             # 關於主理人：Cyber Halo、Bento 哲學、經歷里程碑、硬體規格
│   │   ├── SkillsView.tsx            # 專業技能體系：4 大專業領域視圖切換、10 款 DCC 軟體工作棧
│   │   └── ContactView.tsx           # 委託諮詢：一鍵複製 Email、社群管道、表單、FAQ
│   ├── types.ts                      # TypeScript 介面與型別定義
│   ├── vite-env.d.ts                 # Vite 與靜態資源 (*.css, *.svg, 圖片等) 全域型別宣告
│   ├── App.tsx                       # 單頁路由狀態管理與 URL Hash 同步
│   ├── index.css                     # 全域 CSS 與 Tailwind 載入
│   └── main.tsx                      # React 應用程式掛載入口
├── index.html                        # HTML5 模板 (預先連線 Google Fonts)
├── package.json                      # 套件與腳本設定
├── postcss.config.js                 # PostCSS 插件設定
├── tailwind.config.js                # Tailwind CSS 設計系統擴充設定
├── tsconfig.json                     # TypeScript 編譯器選項
├── vite.config.ts                    # Vite 伺服器與建置設定 (Port 3000)
├── .gitignore                        # Git 忽略清單 (排除 node_modules, dist)
└── ReadMe.md                         # 本說明文件
```

---

## 實際安裝與依賴套件版本

| 套件名稱 | 實際安裝版本 | 用途說明 |
| :--- | :--- | :--- |
| `react` | `^18.3.1` | 前端元件核心庫 |
| `react-dom` | `^18.3.1` | React DOM 渲染引擎 |
| `three` | `^0.160.1` | 3D WebGL 即時渲染 (用於 Hero 核心互動雕塑) |
| `tailwindcss` | `^3.4.19` | 原子化樣式庫 (符合 Obsidian Lumina 規格) |
| `typescript` | `^5.9.3` | 型別安全與靜態檢查 |
| `vite` | `^5.4.21` | 極速前端開發伺服器與 Rollup 生產打包 |
| `@vitejs/plugin-react` | `^4.7.0` | Vite 的 React Fast Refresh 支援 |
| `postcss` | `^8.5.33` | CSS 後處理轉換 |
| `autoprefixer` | `^10.7.0` | CSS 前綴自動補齊 |
| `@types/react` | `^18.3.31` | React TypeScript 型別定義 |
| `@types/react-dom` | `^18.3.7` | React-DOM TypeScript 型別定義 |
| `@types/three` | `^0.160.0` | Three.js TypeScript 型別定義 |

---

## 啟動方式與本機網址

1. **安裝依賴套件** (如首次使用)：
   ```powershell
   npm install
   ```

2. **啟動開發伺服器**：
   ```powershell
   npm run dev
   ```

3. **本機網址**：
   - 本機存取：`http://localhost:3000`
   - 區域網路存取：`http://[本機IP]:3000`

4. **生產環境建置與預覽**：
   ```powershell
   npm run build
   npm run preview
   ```

---

## 核心功能特色與元件設計

1. **Work / 精選作品 (`#work`)**：
   - **Hero 3D 視差雕塑**：使用 Three.js 在 Canvas 實時繪製 Icosahedron 幾何網格與旋轉粒子環，並支援滑鼠座標視差平滑阻尼與響應式重縮放。
   - **動態分類晶片**：支援 `All`, `2D Design`, `3D Art`, `Digital Art`, `Motion Design` 即時篩選。
   - **全螢幕燈箱**：點擊專案右上方放大圖示即可彈出 Lightbox 檢視高畫質規格與進入 Case Study。
2. **Case Studies / 案例解析 (`#case-studies`)**：
   - **Chronos Metallic 深入解析**：奢華機械腕錶從草稿、四邊面拓撲 (Stage 1)、3,400 零組件裝配 (Stage 2)、42 組 8K UDIM 材質 (Stage 3) 到 Octane 16,000 SPP 光譜渲染 (Stage 4)。
   - **互動式水平對比滑塊 (ComparisonSlider)**：支援拖曳分割線即時對比「Wireframe Clay 素模網格」與「Octane X 終端光線追蹤渲染」。
   - **3D 空間檢驗台 (Turntable3D)**：支援自動公轉切換 (Auto-Orbit)、線框濾鏡 (Wireframe)、放大/縮小、視角重置與滑鼠拖曳手動旋轉，配備實時 60.0 FPS 抖動數據儀表。
3. **About / 關於 (`#about`)**：
   - 主理人肖像與雙色 Cyber 霓虹光暈、即時遙測膠囊。
   - 不對稱 Bento Grid 核心思維 (嚴謹工藝、維度敘事、極簡生成)。
   - 歷年里程碑時間軸與國際參展認證 (Ars Electronica, Tokyo Digital Art Salon, Awwwards)。
   - 創作硬體環境：Threadripper PRO 64 執行緒工作站、雙 RTX 4090 (48GB VRAM)、Wacom Cintiq Pro 27 吋 99% Adobe RGB 繪圖螢幕與 120TB NAS。
4. **Skills / 技能體系 (`#skills`)**：
   - 頂部工程指標列 (10+ DCCs, 8K/32bpc, Path-Traced, 60-120 FPS)。
   - 黏著式 (Sticky) 領域導覽按鈕，支援切換各領域詳細子項目與視覺作品預覽。
   - 10 款實戰數位武器工作棧卡片 (Blender, Cinema 4D, Octane, UE5, Substance 3D, AE, PS, AI, Figma, PR)，捨棄虛構百分比，強調實戰核心專長。
   - 4 階段整合管線方法論 (Discovery → Blockout → LookDev → Master)。
5. **Contact / 聯絡諮詢 (`#contact`)**：
   - 1 鍵複製 Email 互動按鈕 (具備 Clipboard API 與 Fallback 機制，複製成功浮現 Toast)。
   - 實時欄位格式檢驗 (包含 RFC-5322 電子郵件正規表達式驗證、字數即時計算上限 1200 字)。
   - 蜜罐技術 (Honeypot) 與防重複提交 (雙擊鎖定 + 載入旋轉動態)。
   - 4 大常見合作 FAQ 手風琴 (包含時程、預算門檻、交付格式矩陣與 NDA 保密協議)。

---

## 驗證結果與完成度說明

### 驗證結果
- **TypeScript 型別檢查**：`tsc --noEmit` 通過，無任何錯誤。
- **Vite 生產建置打包**：`npm run build` 通過，成功產出最佳化之 HTML / CSS / JS 產物。
- **響應式排版檢驗**：支援 Mobile (320px+)、Tablet (768px+)、Desktop (1024px+) 與寬螢幕 (1280px+)。
- **元件互動檢驗**：
  - 頁面切換與 URL Hash 同步正常。
  - Three.js 互動雕塑旋轉與滑鼠視差正常。
  - 對比滑塊拖曳遮罩渲染正常。
  - 3D 轉盤旋轉、縮放與線框反相濾鏡正常。
  - 表單驗證阻擋與成功通知正常。

### 尚未完成或預留擴充部分
1. **後端資料庫與實際郵件 SMTP API 對接**：
   - 目前表單已具備完整的前端資料驗證、防防機器人 Honeypot 與類比非同步網路傳輸延遲 (1.2 秒)，如需真實發送郵件，可對接 SendGrid / Resend 或伺服器端 Node.js API 端點。
2. **WebGL 原生 .GLB 檔案載入器**：
   - 目前 3D Turntable 檢驗台採用 high-fidelity 轉盤與互動控制系統；若日後需要載入真實大型 `.glb` / `.gltf` 3D 模型檔案，可直接利用已安裝的 Three.js `GLTFLoader` 進行替換擴充。
