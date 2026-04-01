/**
 * App Component
 * 애플리케이션의 루트 컴포넌트
 * 전역 스타일 import 및 페이지 렌더링
 */

import { Home } from './pages/Home';
import { StructuredData } from './components/StructuredData';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import {
  ZerowayDetail,
  AIHealthMateDetail,
  BbangsamLandingDetail,
  HangyeolLandingDetail,
  CursorAIDetail,
  DesignDetail,
  TodoListDetail,
} from './pages/project';
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
          backgroundColor: '#F6F8F1'
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/zeroway" element={<ZerowayDetail />} />
          <Route path="/project/ai-health-mate" element={<AIHealthMateDetail />} />
          <Route path="/project/bbangsam-landing" element={<BbangsamLandingDetail />} />
          <Route path="/project/hangyeol-landing" element={<HangyeolLandingDetail />} />
          <Route path="/project/cursor-ai" element={<CursorAIDetail />} />
          <Route path="/project/design" element={<DesignDetail />} />
          <Route path="/project/todo-list" element={<TodoListDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
