# 🎯 시작하기 전에 꼭 읽어보세요!

## 환영합니다! 👋

이 프로젝트는 **17년차 실무 기준**으로 설계된 웹 퍼블리셔 포트폴리오 사이트입니다.

현재 **Hero 섹션**이 완성되었으며, 나머지 섹션을 순차적으로 추가할 수 있는 구조로 설계되어 있습니다.

---

## ⚡ 빠른 실행 (30초)

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 브라우저에서 http://localhost:5173 접속
```

**그게 다입니다!** 이제 Hero 섹션을 확인할 수 있습니다.

---

## 📚 문서 읽는 순서

### 1️⃣ 처음 시작하시나요?
👉 **QUICK_START.md** - 5분 빠른 시작 가이드

### 2️⃣ 프로젝트 구조가 궁금하신가요?
👉 **PROJECT_TREE.md** - 파일 트리 시각화

### 3️⃣ 폴더별 역할을 이해하고 싶으신가요?
👉 **STRUCTURE.md** - 폴더 구조 상세 설명

### 4️⃣ 무엇이 완성되었고 왜 이렇게 만들었나요?
👉 **IMPLEMENTATION_SUMMARY.md** - 구현 보고서

### 5️⃣ 전체 개요를 보고 싶으신가요?
👉 **README.md** - 프로젝트 소개 및 가이드

---

## 🎨 현재 완성된 기능

### ✅ Hero 섹션
- **위치**: `src/sections/Hero/`
- **기능**:
  - ✨ GSAP 진입 애니메이션
  - 📱 완벽한 반응형 (Mobile/Tablet/Desktop)
  - 🎭 스크롤 패럴랙스
  - 🖱️ 인터랙티브 요소

### ✅ 공통 컴포넌트
- `Container` - 레이아웃 컨테이너
- `SectionTitle` - 섹션 타이틀
- `Button` - 재사용 버튼

### ✅ 디자인 시스템
- 디자인 토큰 (`variables.ts`)
- 전역 스타일 (`global.css`)
- CSS 리셋 (`reset.css`)

### ✅ 커스텀 훅
- `useGsap` - GSAP 통합
- `useMediaQuery` - 반응형 감지

---

## 🎯 핵심 특징

### 1. 실무 중심 구조
```
✓ 관심사의 분리 (컴포넌트/애니메이션/스타일)
✓ 재사용 가능한 컴포넌트
✓ 타입 안정성 (TypeScript)
✓ 확장 가능한 아키텍처
```

### 2. 최신 기술 스택
```
✓ React 18
✓ TypeScript
✓ Vite (빠른 빌드)
✓ GSAP (고품질 애니메이션)
✓ CSS Modules (스타일 격리)
```

### 3. 상세한 문서화
```
✓ 5개의 가이드 문서
✓ 모든 파일에 주석
✓ 면접 대비 설명
✓ 확장 가이드
```

---

## 🛠 주요 파일 위치

### 수정이 잦은 파일

1. **Hero 섹션 내용**
   ```
   📁 src/sections/Hero/Hero.tsx
   ```

2. **컬러/폰트 설정**
   ```
   📁 src/styles/variables.ts
   ```

3. **애니메이션 조정**
   ```
   📁 src/animations/heroAnimation.ts
   ```

### 확장 시 참고할 파일

4. **새 섹션 추가**
   ```
   📁 src/sections/Hero/ (참고)
   → 동일한 구조로 About, Works 등 추가
   ```

5. **새 컴포넌트 추가**
   ```
   📁 src/components/Button/ (참고)
   → 동일한 패턴으로 작성
   ```

---

## 🎨 커스터마이징

### 컬러 변경
```typescript
// src/styles/variables.ts

export const colors = {
  primary: '#0046FF',    ← 여기 수정
  accent: '#FF9013',     ← 여기 수정
  background: '#F5F1DC', ← 여기 수정
};
```

### 텍스트 변경
```typescript
// src/sections/Hero/Hero.tsx

<h1>
  Creative                   ← 여기 수정
  <span>Web Publisher</span> ← 여기 수정
</h1>
```

### 애니메이션 속도
```typescript
// src/animations/heroAnimation.ts

defaults: {
  duration: 1,  ← 이 값을 조절 (초)
}
```

---

## 📱 반응형 확인

### Chrome DevTools
1. `F12` 또는 `Ctrl+Shift+I`
2. `Ctrl+Shift+M` (디바이스 툴바)
3. 다양한 디바이스 선택

### 브레이크포인트
- 📱 Mobile: 320px - 767px
- 📱 Tablet: 768px - 1023px
- 💻 Desktop: 1024px 이상

---

## 🐛 문제 해결

### 개발 서버가 실행되지 않을 때
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### 애니메이션이 보이지 않을 때
```bash
# GSAP 설치 확인
npm list gsap

# 없으면 재설치
npm install gsap
```

### 스타일이 적용되지 않을 때
```bash
# 캐시 클리어 후 재시작
npm run dev -- --force
```

---

## 📈 다음 단계

### 추천 작업 순서

1. **Hero 섹션 커스터마이징**
   - 본인의 텍스트로 변경
   - 컬러 조정
   - 이미지 추가

2. **About 섹션 추가**
   - `src/sections/About/` 폴더 생성
   - Hero 구조 참고하여 작성

3. **Works 섹션 추가**
   - 프로젝트 카드 컴포넌트
   - 그리드 레이아웃
   - 호버 효과

4. **Header/Navigation 추가**
   - 고정 헤더
   - 스크롤 시 투명도 변경
   - 스무스 스크롤

5. **고급 기능**
   - 다크모드
   - 페이지 전환 애니메이션
   - 이메일 폼

---

## 💡 학습 팁

### 코드 읽는 순서
```
1. src/pages/Home.tsx         (전체 구조 파악)
2. src/sections/Hero/Hero.tsx (섹션 구조)
3. src/animations/heroAnimation.ts (애니메이션 로직)
4. src/components/ (재사용 컴포넌트)
5. src/styles/variables.ts (디자인 시스템)
```

### 실습 아이디어
1. Hero 텍스트를 본인 정보로 변경
2. 컬러 스킴을 자신의 브랜드 컬러로 변경
3. 새로운 버튼 variant 추가 (예: ghost)
4. About 섹션 추가해보기

---

## 🎓 면접 대비

이 프로젝트는 **면접에서 설명 가능한 구조**로 설계되었습니다.

### 예상 질문과 답변
📖 **IMPLEMENTATION_SUMMARY.md**의 "면접 대비" 섹션 참고

### 핵심 키워드
- 관심사의 분리
- 컴포넌트 재사용성
- 타입 안정성
- 확장 가능한 아키텍처
- 성능 최적화

---

## 🚀 바로 시작하기

```bash
# 1단계: 설치
npm install

# 2단계: 실행
npm run dev

# 3단계: 확인
# http://localhost:5173 접속
```

**이제 준비 완료! 멋진 포트폴리오를 만들어보세요! 🎉**

---

## 📞 다음에 읽을 문서

| 목적 | 문서 |
|------|------|
| 빠르게 시작 | `QUICK_START.md` |
| 파일 구조 | `PROJECT_TREE.md` |
| 폴더 역할 | `STRUCTURE.md` |
| 구현 상세 | `IMPLEMENTATION_SUMMARY.md` |
| 전체 개요 | `README.md` |

---

**Happy Coding! 💻✨**

