# 문제 해결 가이드

## 화면에 아무것도 보이지 않을 때

### 1. 개발 서버 재시작
```bash
# 터미널에서 Ctrl+C로 중지 후
npm run dev
```

### 2. 브라우저 확인
- **하드 리프레시**: `Ctrl + Shift + R` (Windows) 또는 `Cmd + Shift + R` (Mac)
- **캐시 삭제**: 브라우저 설정에서 캐시 삭제
- **다른 브라우저로 테스트**: Chrome, Firefox, Edge 등

### 3. 브라우저 개발자 도구 확인 (F12)
- **Console 탭**: 에러 메시지 확인
- **Network 탭**: CSS/JS 파일이 로드되는지 확인
- **Elements 탭**: HTML이 렌더링되는지 확인

### 4. 포트 확인
- 개발 서버가 실행 중인 포트 확인 (보통 5173 또는 5174)
- URL이 정확한지 확인: `http://localhost:5173` 또는 `http://localhost:5174`

### 5. 의존성 재설치
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### 6. 빌드 에러 확인
```bash
npm run build
```
에러가 있다면 수정 후 다시 시도

## 일반적인 문제

### CSS가 로드되지 않을 때
- CSS Module 파일이 제대로 import되었는지 확인
- 브라우저 개발자 도구에서 Network 탭 확인

### 애니메이션이 작동하지 않을 때
- GSAP이 제대로 설치되었는지 확인: `npm list gsap`
- 브라우저 콘솔에서 에러 확인

### TypeScript 에러
```bash
npm run build
```
에러 메시지를 확인하고 수정

## 빠른 테스트

### 1. 간단한 컴포넌트 테스트
`src/App.tsx`를 다음과 같이 변경:

```tsx
function App() {
  return (
    <div style={{ padding: '2rem', background: '#F5F1DC', minHeight: '100vh' }}>
      <h1 style={{ color: '#000' }}>테스트 - 화면이 보이나요?</h1>
    </div>
  );
}
```

이것이 보이면 React는 정상 작동 중입니다.

### 2. Hero 섹션만 테스트
`src/pages/Home.tsx`를 다음과 같이 변경:

```tsx
export const Home = () => {
  return (
    <div style={{ padding: '2rem', minHeight: '100vh', background: '#F5F1DC' }}>
      <h1>Hero 섹션 테스트</h1>
      <Hero />
    </div>
  );
};
```

## 여전히 문제가 있다면

1. 브라우저 콘솔의 에러 메시지를 복사해서 공유
2. 개발 서버 터미널의 에러 메시지 확인
3. `package.json`의 의존성 버전 확인

