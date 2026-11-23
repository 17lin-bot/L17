import { Project, SoftwareTool, Milestone, FaqItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'prj-01',
    code: '#PRJ-01',
    title: 'NEO-TOKYO 2099: HOLOGRAPHIC BRANDING',
    category: '2d',
    categoryLabel: '2D Design',
    subCategory: 'EXPERIMENTAL BRAND IDENTITY',
    year: '2024',
    description: '賽博龐克風格跨媒體品牌識別與全像海報排版實驗。融合激進版面設計與高彩度光學全像介面。',
    tools: ['Illustrator', 'Photoshop', 'Glyphs'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9xG8cqHbT4o0sda3n5DfNdKBQv9XAivwBp67OF8KYjfbvYKIijadhiub9mKXTmBiV_GwLTo_B2Udv8vy2X7uQeLn-nMpQ1LhHlo1ltuWERMWwnQvSGip4CCue3zENL6dcDQCou0hmPm_0EXrmswedE1okBJ3Vt2kSYhXshvnNPMPhaZX_U2J7cxig45bc0xsIixNoBOJz1usIPIApYAp-9abFrey6-tSPWY2JMck',
    details: 'Comprehensive typography specimen combining Japanese kanji and monospace typography in dynamic layouts.'
  },
  {
    id: 'prj-02',
    code: '#PRJ-02',
    title: 'CHRONOS METALLIC: KINETIC TIMEPIECE',
    category: '3d',
    categoryLabel: '3D Art',
    subCategory: 'HARD-SURFACE 3D ENGINEERING',
    year: '2024',
    description: '奢華機械腕錶高精細度建模、程式化程序金屬材質與電影級燈光渲染。微米級齒輪連動仿真模擬。',
    tools: ['Blender', 'Cinema 4D', 'Octane'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATg1afVWtN0O5ccBpJ1FH5_Ct9NufHNJVYCcnLDKOC9yozFODkSikoE1XIIBe7oVrXBkeUhd-NHgecJm0Ycx9njrNkBRv2tVsB6nOoy7JJ1zqVbNHhPh2cZqvwBh9E-Prv6HMVe8yxK2PZkI-CyrnNIvxA-OBLX1mgHbPJgh9nWxVXi01EC-M9W466jzCzB8W-Cybi7eUdStbWSVOw__6ohJ6J0qMVfEmIBRuB2fc',
    details: 'Virtual haute horlogerie with 3,400 assembled pieces, Grade-5 titanium materials, and sub-micron laser engraving.'
  },
  {
    id: 'prj-03',
    code: '#PRJ-03',
    title: 'SYNAPSE ECHOES: PROCEDURAL FLUID',
    category: 'digital',
    categoryLabel: 'Digital Art',
    subCategory: 'PROCEDURAL SENSORY SYSTEM',
    year: '2023',
    description: '模擬神經元感知與流體共鳴之生成式數位藝術裝置。利用即時著色器計算數百萬粒子波動。',
    tools: ['TouchDesigner', 'GLSL', 'Houdini'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5h__jWUM9du95e6pq3uBqMSpTGh5w7mC6TC14zkQztu_vBHGy4zaN5JrDBGzfwd7I9zvxsUaiLpOzKh3zEWAZKazHegS6QfYBdjv5G1TkY41ROvk-DCMO3YyO3ZxSZc0WMejmxvttObkaRGQTDWR6h0C9Sk_OvSrd9rJqsoixbS0SgfLtQyDbateV_kV2xN24Mn2RyxWjvGgEWK3G-TB7OaMaCFavNvAtq2QNw_U',
    details: 'Real-time interactive sensory canvas synthesizing neural pulses and bioluminescent wave dynamics.'
  },
  {
    id: 'prj-04',
    code: '#PRJ-04',
    title: 'AETHERIA VOID: SCI-FI WORLD BUILDING',
    category: '3d',
    categoryLabel: '3D Art',
    subCategory: 'SPATIAL ENVIRONMENT CONCEPT',
    year: '2023',
    description: '龐大深空遺跡場景配置與次世代即時光影渲染。探索巨型結構主義與未知虛空之哲學張力。',
    tools: ['Unreal Engine 5', 'ZBrush', 'Nanite'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIx1zusZ1tvC0XYtcc3IyPAo8WdQ4VcM0j-66LrQk6uzKRY-CJWtFY6vlDCZDPBaGb7ErutCZ4e9iNJnurGttaJx8E4QSFM3ZnPCYR-AHYTir_OEMaz-RPYZAB7KjLNULL4QWIkNY9eSeuE8OgfI0zjeIOrIcRFS2HyHclarfMnMWcvEgOhVAE7QPcn7ST0g87fVpFcqb9tDFlXHTmyPbZ7ENdkZF25Taf5GwQ9rI',
    details: 'Infinite geometry rendering using UE5 Lumen and Nanite systems, colossal brutalist architectural sci-fi ruins.'
  },
  {
    id: 'prj-05',
    code: '#PRJ-05',
    title: 'KINETIC TYPE BEATS: TITLE SEQUENCE',
    category: 'motion',
    categoryLabel: 'Motion Design',
    subCategory: 'AUDIO-REACTIVE SEQUENCING',
    year: '2024',
    description: '實驗音樂祭動態片頭設計，聲波驅動之動態字體與視覺特效。高幀率動態節奏編排。',
    tools: ['After Effects', 'Cinema 4D', 'Sound Reactive'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC9_0ND_t6SR6HWrk4oScTPW8g-ULT71WUOl6IyzQjPYsk41clbFE60FAK0UP4KMB4yFOHpStu5DqKBuajdeQ8X8XvwMkE03fDagdt6K0cmcvN9-Q9ZYchQp_CZ0aMdzDLDSVWepZXzjsbvXETOLl2hHAlV3P5hCwAQZA1WjiAY9_u-rW2htbRzenuJU4itY-htZSqiKYyCtJlbFSwMVzO2ySKjG0wIz4GiAEn1A8',
    details: 'Audio-reactive kinetic typography reacting to frequencies with chromatic aberration and laser typography.'
  },
  {
    id: 'prj-06',
    code: '#PRJ-06',
    title: 'ORGANIC REFRACTION: SPECULATIVE ARTIFACTS',
    category: '2d',
    categoryLabel: '2D & 3D',
    subCategory: 'CAUSTIC DISPERSION & UI',
    year: '2024',
    description: '有機玻璃折射美學與前衛幾何介面實驗。探索實體材質光學透鏡在數位視平線上的失真重組。',
    tools: ['Blender', 'Photoshop', 'Figma'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwCYuwGHXonOPQTWlVJ2Ktk6jy5lWqXXskyWyDSFT4f28qzTN_r4A18psWbqzBUUbD0MQozim8l2POdmSeIzx7OZwxsivkqFhZw9gygwM2lgrkF4NCnME2kPQBBj0-v1Rtt2iISGQPDK2Ur8LxHzUycnYQKkI_Kvx2dfJfsbvFmsiH0FuPsgt4u_9wO4Biquf_2mhD63SvJkOBiH-9EZ7hQg2mtODfbxUQzXOwHs0',
    details: 'Optical glass prism forms distorting typography, prismatic rainbow caustic dispersion, and acrylic textures.'
  }
];

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  {
    id: 'blender',
    name: 'Blender 3D',
    badge: 'PRIMARY',
    badgeType: 'primary',
    versionSubtitle: 'Cycles · EEVEE · Geometry Nodes',
    description: 'Hard-surface modeling, procedural geometry node systems, and real-time photorealistic visualization.',
    tags: ['Geo Nodes', 'Cycles X'],
    icon: 'token'
  },
  {
    id: 'c4d',
    name: 'Cinema 4D',
    badge: 'MOTION DCC',
    badgeType: 'secondary',
    versionSubtitle: 'MoGraph · Fields · Pyro Dynamics',
    description: 'Broadcast motion graphics, complex parametric cloner setups, and commercial brand identity animations.',
    tags: ['MoGraph', 'Field Forces'],
    icon: 'hub'
  },
  {
    id: 'octane',
    name: 'Octane / Redshift',
    badge: 'RAYTRACER',
    badgeType: 'primary',
    versionSubtitle: 'Spectral Path · GPU Production',
    description: 'Unbiased spectral renderers handling multi-bounce caustics, SSS, and complex thin-film dielectric nodes.',
    tags: ['Spectral Path', 'Cryptomatte'],
    icon: 'flare'
  },
  {
    id: 'ue5',
    name: 'Unreal Engine 5',
    badge: 'REALTIME',
    badgeType: 'secondary',
    versionSubtitle: 'Lumen · Nanite · Niagara VFX',
    description: 'Infinite polygon microgeometry, dynamic global illumination, and cinematic virtual production sequencing.',
    tags: ['Lumen GI', 'Sequencer'],
    icon: 'sports_esports'
  },
  {
    id: 'substance',
    name: 'Substance 3D',
    badge: 'TEXTURING',
    badgeType: 'primary',
    versionSubtitle: 'PBR · Smart Masks · Curvature',
    description: 'Hyper-realistic weathered surfaces, edge wear, organic dirt distribution, and displacement generation.',
    tags: ['Multi-Tile UV', 'Smart Materials'],
    icon: 'palette'
  },
  {
    id: 'ae',
    name: 'After Effects',
    badge: 'MOTION · VFX',
    badgeType: 'secondary',
    versionSubtitle: 'Expressions · Compositing · Tracking',
    description: 'Algorithmic motion math expressions, planar camera tracking, chromatic grading, and title design suites.',
    tags: ['Expressions', 'Color Pass EXR'],
    icon: 'animation'
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    badge: 'RASTER · MATTE',
    badgeType: 'primary',
    versionSubtitle: 'Matte Painting · 32-bit Tonemap',
    description: 'Cinema-grade photomontage, custom frequency separation retouching, and concept keyframe painting.',
    tags: ['Frequency Sep', '32-Bit HDR'],
    icon: 'photo_library'
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    badge: 'VECTOR',
    badgeType: 'secondary',
    versionSubtitle: 'Precision Bezier · Type Foundry',
    description: 'Mathematical vector bezier architecture, custom logotypes, iconography matrices, and packaging dyes.',
    tags: ['Geometric Logic', 'CMYK Separation'],
    icon: 'draw'
  },
  {
    id: 'figma',
    name: 'Figma',
    badge: 'SYSTEMS',
    badgeType: 'primary',
    versionSubtitle: 'Design Tokens · Responsive Layout',
    description: 'Component variant architectures, interactive state prototyping, and engineering token handoff.',
    tags: ['Auto Layout', 'Design Tokens'],
    icon: 'grid_view'
  },
  {
    id: 'premiere',
    name: 'Premiere Pro',
    badge: 'NLE EDIT',
    badgeType: 'secondary',
    versionSubtitle: 'Pacing · Conforming · Sound Mix',
    description: 'Narrative editing, audio synchronization, EDL/XML assembly, and ProRes/DNxHR master delivery.',
    tags: ['ProRes Master', 'Audio Timing'],
    icon: 'movie_edit'
  }
];

export const MILESTONES: Milestone[] = [
  {
    period: '2021 — CURRENT',
    isCurrent: true,
    role: 'Founder & Principal Creative Director',
    company: 'Kaizen Studio / 2D & 3D Visual Atelier',
    description: 'Directing multidisciplinary spatial identities, real-time procedural animations, and luxury commercial visuals for global fashion brands and tech enterprises.',
    location: 'TAIPEI / REMOTE'
  },
  {
    period: '2018 — 2021',
    role: 'Lead 3D Motion & Interactive Artist',
    company: 'Apex Interactive Lab',
    description: 'Spearheaded procedural 3D environments, generative particle simulations, and projection-mapping software suites for large-scale immersive stage experiences.',
    location: 'SHANGHAI'
  },
  {
    period: '2016 — 2018',
    role: 'Senior Visual Designer',
    company: 'Forma Studio Design Co.',
    description: 'Crafted high-fidelity brand identities, editorial publications, and bilingual web systems spanning contemporary typography and conceptual imagery.',
    location: 'TAIPEI'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    num: '01',
    question: 'What are typical production timelines? / 專案製作時程通常需要多久？',
    answerEn: 'Depending on scope, standalone 3D Key Visuals generally require 1.5 to 3 weeks from initial concept moodboard to final 8K render passes. Full-scale CGI animations (15–60 seconds) or interactive WebGL environments require 4 to 8 weeks, partitioned into Milestone Checkpoints: Styleframe Approval → Greybox Animation → Lighting & Shader Refinement → Final Mastering.',
    answerZh: '單張高解析度靜態主視覺通常需要 1.5 至 3 週；完整的商業動態影像或 3D WebGL 沉浸式網站則為 4 至 8 週，包含嚴格的階段審核確認。'
  },
  {
    id: 'faq-2',
    num: '02',
    question: 'Budget structures & fee expectations / 專案報價結構與預算規範？',
    answerEn: 'We operate on fixed-fee project retainers customized to geometry complexity, lighting fidelity, and commercial usage rights. Minimum commission retainers start at $2,500 USD for single concept visuals. Comprehensive commercial brand packages and interactive digital spaces are scoped upon receiving your brief. 50% deposit upon milestone contract signoff, 50% upon final master bundle delivery.',
    answerZh: '費用依幾何複雜度、著色精細度與商業授權範疇訂定。單一概念美術專案門檻自 2,500 美元起；品牌整案規劃將在檢視 Brief 後提供詳細工時與里程碑報價單。'
  },
  {
    id: 'faq-3',
    num: '03',
    question: 'What file deliverables do you supply? / 最終交付的檔案格式有哪些？',
    answerEn: 'We provide industry-standard production packages tailored to your engineering and broadcasting pipeline:',
    answerZh: '',
    deliverables: [
      {
        category: '3D Realtime & Assets',
        items: 'GLTF, GLB, USDZ, FBX, OBJ (PBR 4K/8K UDIM Maps)',
        type: 'primary'
      },
      {
        category: 'Motion & Video',
        items: 'Apple ProRes 4444 XQ, 4K Master MP4, Alpha Channel',
        type: 'secondary'
      },
      {
        category: 'Static Prints',
        items: '32-bit OpenEXR, 16-bit TIFF, CMYK Print Ready',
        type: 'neutral'
      }
    ]
  },
  {
    id: 'faq-4',
    num: '04',
    question: 'Can we sign an NDA before project briefing? / 是否可在專案諮詢前簽署保密協議？',
    answerEn: 'Absolutely. Over 60% of our enterprise hardware and unreleased intellectual property projects operate under strict Non-Disclosure Agreements. You can indicate NDA requirement directly inside the form or email us your mutual NDA template prior to sending confidential IP materials.',
    answerZh: '完全沒問題。我們經常參與未公開旗艦產品或前瞻 IP 研發，歡迎隨時透過電子郵件或表單附註提供貴公司的雙向 NDA 模板。'
  }
];
