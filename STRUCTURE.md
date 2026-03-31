# 프로젝트 구조 상세 설명

## 📁 전체 구조

```
포트폴리오2/
├─ src/
│   ├─ assets/                    # 정적 리소스
│   │   ├─ images/               # 이미지 파일
│   │   ├─ icons/                # 아이콘 파일
│   │   └─ fonts/                # 폰트 파일 (선택)
│   │
│   ├─ components/                # 공통 UI 컴포넌트
│   │   ├─ Button/
│   │   │   ├─ Button.tsx        # 버튼 컴포넌트
│   │   │   ├─ Button.module.css
│   │   │   └─ index.ts
│   │   │
│   │   ├─ Container/
│   │   │   ├─ Container.tsx     # 레이아웃 컨테이너
│   │   │   ├─ Container.module.css
│   │   │   └─ index.ts
│   │   │
│   │   └─ SectionTitle/
│   │       ├─ SectionTitle.tsx  # 섹션 타이틀
│   │       ├─ SectionTitle.module.css
│   │       └─ index.ts
│   │
│   ├─ sections/                  # 페이지 섹션 단위
│   │   ├─ Hero/
│   │   │   ├─ Hero.tsx          # Hero 섹션
│   │   │   ├─ Hero.module.css
│   │   │   └─ index.ts
│   │   │
│   │   ├─ About/                # 추후 추가
│   │   ├─ Works/                # 추후 추가
│   │   ├─ Skills/               # 추후 추가
│   │   └─ Contact/              # 추후 추가
│   │
│   ├─ animations/                # GSAP 애니메이션 로직
│   │   ├─ heroAnimation.ts      # Hero 애니메이션
│   │   └─ scrollAnimation.ts    # 스크롤 애니메이션 (추후)
│   │
│   ├─ hooks/                     # 커스텀 훅
│   │   ├─ useGsap.ts           # GSAP 통합 훅
│   │   └─ useMediaQuery.ts     # 반응형 감지 훅
│   │
│   ├─ styles/                    # 전역 스타일
│   │   ├─ variables.ts         # 디자인 토큰
│   │   ├─ global.css           # 전역 스타일
│   │   └─ reset.css            # CSS 리셋
│   │
│   ├─ pages/
│   │   └─ Home.tsx             # 홈 페이지
│   │
│   ├─ App.tsx                   # 루트 컴포넌트
│   └─ main.tsx                  # 엔트리 포인트
│
├─ public/                        # 정적 파일
├─ index.html                     # HTML 템플릿
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```

## 🎯 각 폴더의 역할

### 1. `/src/components` - 공통 컴포넌트
**목적**: 여러 곳에서 재사용되는 UI 컴포넌트

**특징**:
- 비즈니스 로직이 없는 순수 UI 컴포넌트
- props로 동작을 제어
- CSS Modules로 스타일 격리

**예시**:
```typescript
// Container - 반응형 레이아웃 컨테이너
<Container variant="narrow">
  <SectionTitle size="large">About Me</SectionTitle>
</Container>
```

### 2. `/src/sections` - 섹션 컴포넌트
**목적**: 페이지를 구성하는 큰 단위의 섹션

**특징**:
- Hero, About, Works 등 페이지의 주요 영역
- 섹션별 독립적인 로직과 스타일
- 각 섹션은 자체 완결적 (self-contained)

**구조**:
```
Hero/
├─ Hero.tsx              # 컴포넌트
├─ Hero.module.css       # 스타일
└─ index.ts              # export
```

### 3. `/src/animations` - 애니메이션 로직
**목적**: GSAP 애니메이션 로직을 컴포넌트에서 분리

**이유**:
- 컴포넌트는 UI 구조에만 집중
- 애니메이션 로직 재사용 가능
- 타임라인 관리 및 테스트 용이

**예시**:
```typescript
// heroAnimation.ts
export const createHeroEntranceAnimation = (targets) => {
  const tl = gsap.timeline();
  tl.fromTo(targets.title, { y: 60 }, { y: 0 })
    .fromTo(targets.subtitle, { y: 40 }, { y: 0 }, '-=0.4');
  return tl;
};

// Hero.tsx에서 사용
useGsap(() => {
  createHeroEntranceAnimation(targets);
});
```

### 4. `/src/hooks` - 커스텀 훅
**목적**: 재사용 가능한 로직을 훅으로 추상화

**예시**:

#### useGsap
```typescript
// GSAP을 React 생명주기에 안전하게 통합
useGsap(() => {
  gsap.to(element, { x: 100 });
}, { dependencies: [] });
```

#### useMediaQuery
```typescript
// 반응형 디자인
const isMobile = useIsMobile();
const isDesktop = useIsDesktop();
```

### 5. `/src/styles` - 전역 스타일
**목적**: 프로젝트 전체에서 사용하는 스타일 규칙

#### variables.ts - 디자인 토큰
```typescript
export const colors = {
  primary: '#0046FF',
  accent: '#FF9013',
};

export const typography = {
  fontFamily: { base: 'Pretendard', ... },
  fontSize: { base: '1rem', ... },
};
```

**활용**:
- 일관된 디자인 시스템
- 테마 변경 시 한 곳만 수정
- TypeScript 자동완성 지원

#### global.css
```css
:root {
  --color-primary: #0046FF;
  --section-padding: clamp(4rem, 10vw, 8rem);
}
```

### 6. `/src/pages` - 페이지 컴포넌트
**목적**: 섹션들을 조합하여 완성된 페이지 구성

```typescript
// Home.tsx
export const Home = () => (
  <>
    <Hero />
    <About />
    <Works />
    <Skills />
    <Contact />
  </>
);
```

## 🎨 CSS Module 네이밍 컨벤션

```css
/* 컴포넌트명.module.css */

/* 베이스 클래스 */
.hero { }

/* 하위 요소 */
.heroContent { }
.heroTitle { }

/* 변형 (Variant) */
.hero--dark { }
.button--primary { }

/* 상태 (State) */
.button:hover { }
.button:disabled { }
```

## 📦 컴포넌트 작성 패턴

### 기본 구조
```typescript
// 1. imports
import { ReactNode } from 'react';
import styles from './Component.module.css';

// 2. interface
interface ComponentProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

// 3. component
export const Component = ({ 
  children, 
  variant = 'primary' 
}: ComponentProps) => {
  return (
    <div className={styles[`component--${variant}`]}>
      {children}
    </div>
  );
};
```

### index.ts 패턴
```typescript
// 깔끔한 import를 위한 re-export
export { Component } from './Component';
export type { ComponentProps } from './Component';
```

## 🔧 실무 팁

### 1. 컴포넌트 분리 기준
- **작은 컴포넌트**: 재사용 빈도가 높을 때
- **큰 컴포넌트**: 섹션 단위로 독립적일 때
- **중간 컴포넌트**: 특정 섹션 내에서만 사용될 때

### 2. 애니메이션 관리
```typescript
// ❌ 컴포넌트 안에 모든 로직
useEffect(() => {
  gsap.to('.title', { ... });
  gsap.to('.subtitle', { ... });
  // 수십 줄...
}, []);

// ✅ 로직 분리
useGsap(() => {
  createEntranceAnimation(targets);
  createScrollAnimation(container);
}, { dependencies: [] });
```

### 3. 스타일 변수 활용
```css
/* ❌ 하드코딩 */
.title {
  font-size: 48px;
  margin-bottom: 32px;
}

/* ✅ 변수 활용 */
.title {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: var(--spacing-lg);
}
```

### 4. TypeScript 활용
```typescript
// props 타입 명시
interface HeroProps {
  title: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
}

// 함수 시그니처 명시
const createAnimation = (
  element: HTMLElement | null
): gsap.core.Timeline => {
  // ...
};
```

## 🚀 확장 가이드

### 새로운 섹션 추가하기
1. `/src/sections/SectionName` 폴더 생성
2. `SectionName.tsx`, `SectionName.module.css`, `index.ts` 작성
3. 필요시 애니메이션 로직을 `/src/animations`에 분리
4. `/src/pages/Home.tsx`에 섹션 추가

### 새로운 컴포넌트 추가하기
1. `/src/components/ComponentName` 폴더 생성
2. props 인터페이스 정의
3. CSS Module로 스타일 작성
4. 재사용 가능하도록 설계

### 애니메이션 추가하기
1. `/src/animations/animationName.ts` 생성
2. GSAP Timeline으로 시퀀스 작성
3. `useGsap` 훅으로 컴포넌트에 통합

## 📚 참고 자료

- [React 공식 문서](https://react.dev/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [GSAP 공식 문서](https://greensock.com/docs/)
- [CSS Modules](https://github.com/css-modules/css-modules)

