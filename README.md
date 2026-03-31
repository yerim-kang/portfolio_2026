# Web Publisher Portfolio

실무 기준으로 설계된 웹 퍼블리셔 포트폴리오 사이트

## 🎯 프로젝트 개요

React + TypeScript + Vite 기반의 포트폴리오 웹사이트로,  
컴포넌트 재사용성과 확장성이 높은 구조로 설계되었습니다.

## 🛠 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **GSAP** - 애니메이션 라이브러리
- **Swiper.js** - 슬라이더 컴포넌트
- **CSS Modules** - 스타일 격리

## 🎨 디자인 시스템

### 컬러 팔레트
- Primary: `#0046FF` - 주요 브랜드 컬러
- Accent: `#FF9013` - 강조 컬러
- Background: `#F5F1DC` - 배경 컬러

### 타이포그래피
- Base: Pretendard (본문)
- Display: Playfair Display (제목)

## 📁 폴더 구조

```
src/
├─ assets/              # 정적 리소스
│   ├─ images/
│   ├─ icons/
│   └─ fonts/
│
├─ components/          # 공통 UI 컴포넌트
│   ├─ Button/
│   ├─ Container/       # 레이아웃 컨테이너
│   └─ SectionTitle/    # 섹션 타이틀
│
├─ sections/            # 페이지 섹션 단위
│   ├─ Hero/           ✅ 완료
│   ├─ About/          🚧 예정
│   ├─ Works/          🚧 예정
│   ├─ Skills/         🚧 예정
│   └─ Contact/        🚧 예정
│
├─ animations/          # GSAP 애니메이션 로직
│   ├─ heroAnimation.ts
│   └─ scrollAnimation.ts
│
├─ hooks/               # 커스텀 훅
│   ├─ useGsap.ts      # GSAP 통합 훅
│   └─ useMediaQuery.ts # 반응형 감지 훅
│
├─ styles/              # 전역 스타일
│   ├─ variables.ts    # 디자인 토큰
│   ├─ global.css      # 전역 스타일
│   └─ reset.css       # CSS 리셋
│
├─ pages/
│   └─ Home.tsx
│
├─ App.tsx
└─ main.tsx
```

## 🏗 구조 설계 원칙

### 1. 관심사의 분리 (Separation of Concerns)
- **컴포넌트**: UI 구조에만 집중
- **애니메이션**: 연출 로직을 별도 파일로 분리
- **스타일**: CSS Modules로 격리

### 2. 재사용성 (Reusability)
- `Container`, `SectionTitle` 등 공통 컴포넌트 추출
- props로 확장 가능한 인터페이스 설계

### 3. 타입 안정성 (Type Safety)
- TypeScript로 props, 함수 시그니처 명시
- 컴파일 타임 에러 방지

### 4. 확장성 (Scalability)
- 섹션 단위로 모듈화
- 새로운 섹션 추가 시 기존 코드 수정 최소화

## 🎬 Hero 섹션 구현 상세

### 컴포넌트 구조
```
Hero/
├─ Hero.tsx            # 메인 컴포넌트
├─ Hero.module.css     # 스타일
└─ index.ts            # export
```

### 애니메이션 시퀀스
1. **장식 라인** 등장 (0.8초)
2. **메인 타이틀** 페이드업 (1초)
3. **서브타이틀** 페이드업 (0.8초)
4. **CTA 버튼** 페이드업 (0.6초)
5. **비주얼 요소** 스케일+페이드 (1.2초)

### 인터랙션
- 진입 애니메이션 (GSAP Timeline)
- 스크롤 패럴랙스 (ScrollTrigger)
- 버튼 호버 효과
- 스크롤 인디케이터

## 🚀 실행 방법

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

### 미리보기
```bash
npm run preview
```

## 💡 실무 관점에서의 설계 의도

### 왜 이렇게 구조를 나눴나?

#### 1. 컴포넌트와 애니메이션 분리
```typescript
// ❌ 안 좋은 예: 컴포넌트 내에 애니메이션 로직 혼재
const Hero = () => {
  useEffect(() => {
    gsap.to('.title', { ... });
    gsap.to('.subtitle', { ... });
    // 수십 줄의 애니메이션 코드...
  }, []);
}

// ✅ 좋은 예: 애니메이션 로직 분리
const Hero = () => {
  useGsap(() => {
    createHeroEntranceAnimation(targets);
  });
}
```

**이유:**
- 애니메이션 로직을 다른 섹션에서도 재사용 가능
- 컴포넌트는 구조에만 집중 (Single Responsibility)
- 테스트와 디버깅이 용이

#### 2. CSS Modules 사용
```typescript
// ✅ 스타일 격리 및 충돌 방지
import styles from './Hero.module.css';
<div className={styles.hero}>
```

**이유:**
- 클래스명 충돌 방지
- 컴포넌트별 스타일 스코핑
- 빌드 시 사용하지 않는 CSS 제거 (tree-shaking)

#### 3. 디자인 토큰 (Design Tokens)
```typescript
// variables.ts - 중앙 관리
export const colors = {
  primary: '#0046FF',
  accent: '#FF9013',
};
```

**이유:**
- 디자인 시스템 일관성 유지
- 테마 변경 시 한 곳만 수정
- 디자이너-개발자 간 공통 언어

#### 4. 커스텀 훅 활용
```typescript
// useGsap.ts - GSAP 통합 훅
export const useGsap = (callback, options) => {
  useEffect(() => {
    const ctx = gsap.context(callback);
    return () => ctx.revert(); // 자동 cleanup
  }, options.dependencies);
};
```

**이유:**
- React 생명주기와 GSAP 안전하게 통합
- 메모리 누수 방지 (cleanup)
- 재사용 가능한 로직 추상화

## 📋 다음 단계

- [ ] About 섹션 구현
- [ ] Works 섹션 + 프로젝트 카드 컴포넌트
- [ ] Skills 섹션 + 스킬 바 애니메이션
- [ ] Contact 섹션 + 폼 컴포넌트
- [ ] Header/Navigation 추가
- [ ] 페이지 전환 애니메이션
- [ ] 다크모드 지원

## 📝 면접 대비 설명 포인트

1. **구조 설계**: "관심사의 분리 원칙에 따라 컴포넌트, 애니메이션, 스타일을 분리했습니다"
2. **재사용성**: "공통 컴포넌트를 추출해 중복 코드를 줄였습니다"
3. **확장성**: "새로운 섹션을 추가할 때 기존 코드 수정이 거의 없습니다"
4. **성능**: "CSS Modules로 불필요한 스타일을 제거하고, GSAP Context로 메모리 누수를 방지했습니다"
5. **타입 안정성**: "TypeScript로 런타임 에러를 컴파일 타임에 방지합니다"

## 📄 License

MIT
