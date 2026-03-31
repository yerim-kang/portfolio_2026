# 프로젝트 파일 트리

```
web-publisher-portfolio/
│
├─── 📄 설정 파일
│    ├─ package.json              # 프로젝트 설정 & 의존성
│    ├─ tsconfig.json             # TypeScript 설정
│    ├─ tsconfig.app.json         # 앱용 TS 설정
│    ├─ tsconfig.node.json        # Node용 TS 설정
│    ├─ vite.config.ts            # Vite 빌드 설정
│    ├─ eslint.config.js          # ESLint 설정
│    └─ .gitignore                # Git 제외 파일
│
├─── 📖 문서
│    ├─ README.md                 # 프로젝트 개요 및 실행 가이드
│    ├─ QUICK_START.md            # 5분 빠른 시작 가이드
│    ├─ STRUCTURE.md              # 폴더 구조 상세 설명
│    ├─ IMPLEMENTATION_SUMMARY.md # 구현 완료 보고서
│    └─ PROJECT_TREE.md           # 이 파일
│
├─── 🌐 public/                   # 정적 파일
│    └─ vite.svg
│
├─── 📄 index.html                # HTML 진입점
│
└─── 📁 src/                      # 소스 코드
     │
     ├─── 🎨 styles/              # 전역 스타일
     │    ├─ variables.ts         # 디자인 토큰 (컬러, 폰트, 간격 등)
     │    ├─ global.css           # 전역 CSS
     │    └─ reset.css            # CSS 리셋
     │
     ├─── 🧩 components/          # 공통 UI 컴포넌트
     │    │
     │    ├─ Container/           # 레이아웃 컨테이너
     │    │  ├─ Container.tsx
     │    │  ├─ Container.module.css
     │    │  └─ index.ts
     │    │
     │    ├─ SectionTitle/        # 섹션 타이틀
     │    │  ├─ SectionTitle.tsx
     │    │  ├─ SectionTitle.module.css
     │    │  └─ index.ts
     │    │
     │    └─ Button/              # 재사용 버튼
     │       ├─ Button.tsx
     │       ├─ Button.module.css
     │       └─ index.ts
     │
     ├─── 📦 sections/            # 페이지 섹션
     │    │
     │    ├─ Hero/ ✅             # Hero 섹션 (완료)
     │    │  ├─ Hero.tsx          # 컴포넌트
     │    │  ├─ Hero.module.css   # 스타일
     │    │  └─ index.ts          # export
     │    │
     │    ├─ About/ 🚧            # About 섹션 (예정)
     │    ├─ Works/ 🚧            # Works 섹션 (예정)
     │    ├─ Skills/ 🚧           # Skills 섹션 (예정)
     │    └─ Contact/ 🚧          # Contact 섹션 (예정)
     │
     ├─── 🎬 animations/          # GSAP 애니메이션 로직
     │    ├─ heroAnimation.ts     # Hero 애니메이션
     │    └─ scrollAnimation.ts   # 스크롤 애니메이션 (예정)
     │
     ├─── 🪝 hooks/               # 커스텀 훅
     │    ├─ useGsap.ts          # GSAP 통합 훅
     │    └─ useMediaQuery.ts    # 반응형 감지 훅
     │
     ├─── 📄 pages/               # 페이지 컴포넌트
     │    └─ Home.tsx            # 홈 페이지
     │
     ├─── 🎨 assets/              # 정적 리소스
     │    ├─ images/             # 이미지
     │    ├─ icons/              # 아이콘
     │    └─ fonts/              # 폰트 (선택)
     │
     ├─ App.tsx                   # 루트 컴포넌트
     └─ main.tsx                  # 애플리케이션 진입점
```

## 📊 파일 통계

### 완성된 파일
```
총 25개 파일

컴포넌트:    9개
  - Hero 섹션:      3개 (tsx, css, index)
  - Container:      3개
  - SectionTitle:   3개
  - Button:         3개 (추가)

애니메이션:  1개
  - heroAnimation.ts

훅:          2개
  - useGsap.ts
  - useMediaQuery.ts

스타일:      3개
  - variables.ts
  - global.css
  - reset.css

페이지:      2개
  - Home.tsx
  - App.tsx

문서:        5개
  - README.md
  - QUICK_START.md
  - STRUCTURE.md
  - IMPLEMENTATION_SUMMARY.md
  - PROJECT_TREE.md

설정:        6개
  - package.json
  - tsconfig.json (3개)
  - vite.config.ts
  - eslint.config.js
```

## 🎯 핵심 파일 설명

### 🔥 자주 수정하게 될 파일

#### 1. Hero 섹션
```
src/sections/Hero/Hero.tsx
→ 텍스트 내용, 구조 변경
```

#### 2. 컬러/디자인
```
src/styles/variables.ts
→ 브랜드 컬러, 폰트, 간격 조정
```

#### 3. 애니메이션
```
src/animations/heroAnimation.ts
→ 타이밍, 이징, 시퀀스 조정
```

### 🛠 확장 시 추가할 파일

#### About 섹션 추가 시
```
src/sections/About/
├─ About.tsx
├─ About.module.css
└─ index.ts
```

#### Works 섹션 + 프로젝트 카드
```
src/sections/Works/
├─ Works.tsx
├─ Works.module.css
├─ ProjectCard.tsx
├─ ProjectCard.module.css
└─ index.ts
```

#### 네비게이션 추가 시
```
src/components/Header/
├─ Header.tsx
├─ Header.module.css
├─ Navigation.tsx
├─ Navigation.module.css
└─ index.ts
```

## 📂 폴더별 역할 요약

| 폴더 | 역할 | 예시 |
|------|------|------|
| `components/` | 재사용 가능한 UI | Button, Container |
| `sections/` | 페이지 섹션 단위 | Hero, About, Works |
| `animations/` | GSAP 애니메이션 로직 | heroAnimation.ts |
| `hooks/` | 커스텀 훅 | useGsap, useMediaQuery |
| `styles/` | 전역 스타일 & 토큰 | variables, global.css |
| `pages/` | 페이지 조합 | Home.tsx |
| `assets/` | 이미지, 아이콘, 폰트 | logo.png, icon.svg |

## 🔍 파일 찾기 가이드

### Q: "Hero 섹션 텍스트를 바꾸고 싶어요"
```
📁 src/sections/Hero/Hero.tsx
→ <h1>, <p> 태그 내용 수정
```

### Q: "버튼 색상을 바꾸고 싶어요"
```
📁 src/styles/variables.ts
→ colors.primary 값 변경

또는

📁 src/components/Button/Button.module.css
→ .button--primary 스타일 수정
```

### Q: "애니메이션 속도를 조절하고 싶어요"
```
📁 src/animations/heroAnimation.ts
→ duration 값 수정
```

### Q: "반응형 브레이크포인트를 바꾸고 싶어요"
```
📁 src/styles/variables.ts
→ breakpoints 값 수정

📁 src/sections/Hero/Hero.module.css
→ @media 쿼리 수정
```

### Q: "폰트를 바꾸고 싶어요"
```
📁 src/styles/global.css
→ @import url(...) 수정

📁 src/styles/variables.ts
→ typography.fontFamily 수정
```

## 🎨 디자인 토큰 위치

모든 디자인 토큰은 한 곳에서 관리:

```typescript
📁 src/styles/variables.ts

export const colors = { ... }        // 컬러
export const typography = { ... }    // 폰트
export const spacing = { ... }       // 간격
export const breakpoints = { ... }   // 반응형
export const animations = { ... }    // 애니메이션 속성
export const zIndex = { ... }        // z-index
```

## 🧪 테스트 파일 구조 (예정)

```
src/
├─ components/
│  └─ Button/
│     ├─ Button.tsx
│     ├─ Button.module.css
│     ├─ Button.test.tsx        ← 단위 테스트
│     └─ index.ts
│
└─ __tests__/
   ├─ integration/               ← 통합 테스트
   └─ e2e/                       ← E2E 테스트
```

## 📈 성장 로드맵

### Phase 1: Hero 섹션 ✅
```
✅ 컴포넌트 구조
✅ 애니메이션
✅ 반응형 디자인
```

### Phase 2: About 섹션 🚧
```
🚧 자기소개 컴포넌트
🚧 프로필 이미지
🚧 타임라인
```

### Phase 3: Works 섹션 🚧
```
🚧 프로젝트 카드 그리드
🚧 필터링
🚧 상세 모달
```

### Phase 4: 고급 기능 🔮
```
🔮 네비게이션
🔮 페이지 전환
🔮 다크모드
🔮 다국어
```

## 💡 명명 규칙

### 컴포넌트 파일
```
PascalCase: Button.tsx, Hero.tsx
```

### CSS Module
```
camelCase: .heroSection, .buttonPrimary
```

### 훅
```
camelCase + use prefix: useGsap.ts, useMediaQuery.ts
```

### 애니메이션
```
camelCase + Animation suffix: heroAnimation.ts
```

### 상수
```
camelCase: colors, typography, breakpoints
```

---

**이 트리 구조를 참고하여 프로젝트를 탐색하세요!** 🗺️

