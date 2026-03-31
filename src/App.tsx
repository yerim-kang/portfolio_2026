/**
 * App Component
 * 애플리케이션의 루트 컴포넌트
 * 전역 스타일 import 및 페이지 렌더링
 */

import { Home } from './pages/Home';
import { StructuredData } from './components/StructuredData';
import './styles/reset.css';
import './styles/global.css';

function App() {
  return (
    <>
      <StructuredData />
      <div 
        className="App" 
        style={{ 
          minHeight: '100vh', 
          width: '100%',
          margin: 0,
          padding: 0,
          backgroundColor: '#F2F2F2'
        }}
      >
        <Home />
      </div>
    </>
  );
}

export default App;
