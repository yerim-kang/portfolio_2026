/**
 * App Component
 * 애플리케이션의 루트 컴포넌트
 * 전역 스타일 import 및 페이지 렌더링
 */

import { Home } from './pages/Home';
import { AboutDetail } from './pages/AboutDetail';
import { StructuredData } from './components/StructuredData';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import {
  ProjectDetailShell,
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
      <ScrollToTop />
      <StructuredData />
      <div 
        className="App" 
        style={{ 
          minHeight: '100vh', 
          width: '100%',
          margin: 0,
          padding: 0,
          backgroundColor: '#fff'
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutDetail />} />
          <Route path="/project" element={<ProjectDetailShell />}>
            <Route path="zeroway" element={<ZerowayDetail />} />
            <Route path="ai-health-mate" element={<AIHealthMateDetail />} />
            <Route path="bbangsam-landing" element={<BbangsamLandingDetail />} />
            <Route path="hangyeol-landing" element={<HangyeolLandingDetail />} />
            <Route path="cursor-ai" element={<CursorAIDetail />} />
            <Route path="design" element={<DesignDetail />} />
            <Route path="todo-list" element={<TodoListDetail />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
