# 빠른 시작 가이드

## 🚀 5분 안에 실행하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속 (포트는 다를 수 있음)

### 3. 빌드 (배포용)
```bash
npm run build
```

## 🎯 현재 완성된 기능

### ✅ Hero 섹션
- 📍 위치: `src/sections/Hero/`
- 🎨 진입 애니메이션 (GSAP)
- 📱 완벽한 반응형 디자인
- 🖱️ 인터랙티브 요소

### 주요 특징
1. **타임라인 기반 애니메이션**
   - 장식 라인 → 타이틀 → 서브타이틀 → 버튼 → 비주얼
   - 총 소요시간: ~2.5초

2. **스크롤 인터랙션**
   - 패럴랙스 효과
   - 스크롤 인디케이터

3. **반응형 레이아웃**
   - Desktop: 2단 그리드
   - Tablet/Mobile: 1단 스택

## 📁 핵심 파일 위치

```
중요 파일 찾기:

Hero 섹션
└─ src/sections/Hero/
    ├─ Hero.tsx           ← 메인 컴포넌트
    ├─ Hero.module.css    ← 스타일
    └─ index.ts

애니메이션
└─ src/animations/
    └─ heroAnimation.ts   ← GSAP 로직

공통 컴포넌트
└─ src/components/
    ├─ Container/         ← 레이아웃
    ├─ SectionTitle/      ← 타이틀
    └─ Button/            ← 버튼

디자인 시스템
└─ src/styles/
    ├─ variables.ts       ← 컬러, 폰트 등
    ├─ global.css         ← 전역 스타일
    └─ reset.css          ← CSS 리셋
```

## 🎨 컬러 시스템

Hero 섹션에서 사용된 컬러:

```css
Primary:    #0046FF  /* 파란색 - 메인 브랜드 */
Accent:     #FF9013  /* 주황색 - 강조 */
Background: #F5F1DC  /* 베이지 - 배경 */
```

`src/styles/variables.ts`에서 변경 가능

## 🛠 커스터마이징 가이드

### Hero 텍스트 변경
```typescript
// src/sections/Hero/Hero.tsx

<h1 className={styles.heroTitle}>
  Creative                          ← 여기 수정
  <span>Web Publisher</span>        ← 여기 수정
</h1>

<p className={styles.heroSubtitle}>
  아름다운 레이아웃과 인터랙션으로    ← 여기 수정
  사용자 경험을 설계합니다
</p>
```

### 컬러 변경
```typescript
// src/styles/variables.ts

export const colors = {
  primary: '#0046FF',    ← 원하는 컬러로 변경
  accent: '#FF9013',     ← 원하는 컬러로 변경
  background: '#F5F1DC', ← 원하는 컬러로 변경
};
```

### 애니메이션 속도 조절
```typescript
// src/animations/heroAnimation.ts

const tl = gsap.timeline({
  defaults: {
    ease: 'power3.out',
    duration: 1,  ← 이 값을 조절 (초 단위)
  },
});
```

## 📱 반응형 테스트

### Chrome DevTools
1. F12 또는 Ctrl+Shift+I
2. 디바이스 툴바 토글 (Ctrl+Shift+M)
3. 다양한 디바이스 선택

### 브레이크포인트
- 📱 Mobile: 320px - 767px
- 📱 Tablet: 768px - 1023px
- 💻 Desktop: 1024px 이상

## 🎬 애니메이션 확인

### 진입 애니메이션 다시 보기
1. 페이지 새로고침 (Ctrl+R)
2. 또는 브라우저 개발자도구에서:
   ```javascript
   location.reload()
   ```

### 스크롤 애니메이션
- 페이지를 천천히 스크롤하여 패럴랙스 효과 확인

## 🐛 문제 해결

### 애니메이션이 작동하지 않을 때
1. 콘솔 에러 확인 (F12)
2. GSAP 설치 확인:
   ```bash
   npm list gsap
   ```
3. 캐시 클리어 후 재실행:
   ```bash
   npm run dev -- --force
   ```

### 스타일이 적용되지 않을 때
1. CSS Module 확인:
   ```typescript
   // ✅ 올바른 사용
   import styles from './Hero.module.css'
   <div className={styles.hero}>
   
   // ❌ 잘못된 사용
   <div className="hero">
   ```

### 포트 충돌 시
```bash
# 다른 포트로 실행
npm run dev -- --port 3000
```

## 📚 다음에 추가할 섹션

### About 섹션 (예정)
```typescript
// src/sections/About/About.tsx
- 자기소개
- 프로필 이미지
- 경력/학력
```

### Works 섹션 (예정)
```typescript
// src/sections/Works/Works.tsx
- 프로젝트 카드 그리드
- 필터링
- 상세 모달
```

### Skills 섹션 (예정)
```typescript
// src/sections/Skills/Skills.tsx
- 스킬 바 차트
- 카테고리별 분류
- 애니메이션 효과
```

### Contact 섹션 (예정)
```typescript
// src/sections/Contact/Contact.tsx
- 연락처 폼
- 소셜 링크
- 이메일 전송
```

## 🎓 학습 자료

### 프로젝트 구조 이해하기
📖 `STRUCTURE.md` - 폴더 구조 상세 설명

### 구현 상세 보고서
📊 `IMPLEMENTATION_SUMMARY.md` - 완성된 기능 및 설계 원칙

### 전체 개요
📋 `README.md` - 프로젝트 소개 및 실행 가이드

## 💡 팁

### VS Code 추천 확장
- ES7+ React/Redux/React-Native snippets
- CSS Modules
- Error Lens
- Prettier

### 개발 효율 높이기
```bash
# 자동 새로고침 활성화 (기본값)
npm run dev

# 네트워크에 노출 (모바일 테스트)
npm run dev -- --host
```

### Git 커밋 메시지 예시
```bash
git commit -m "feat: Hero 섹션 구현"
git commit -m "style: Hero 반응형 디자인 개선"
git commit -m "refactor: 애니메이션 로직 분리"
```

## 🎉 시작하기

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 브라우저에서 확인
# http://localhost:5173
```

**축하합니다! 이제 포트폴리오 제작을 시작할 준비가 되었습니다! 🚀**

---

궁금한 점이 있다면:
- `README.md` - 전체 개요
- `STRUCTURE.md` - 구조 설명
- `IMPLEMENTATION_SUMMARY.md` - 구현 상세

를 참고하세요!

