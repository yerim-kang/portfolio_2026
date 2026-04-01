/**
 * Home Page
 * 메인 페이지 - 모든 섹션을 조합
 * 
 * 실무에서는 페이지 단위로 섹션을 조합하여 관리
 * 향후 About, Works, Skills, Contact 섹션 추가 예정
 */

import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Design } from '../sections/Design';
import { Contact } from '../sections/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Design />
      <Contact />
    </>
  );
};

