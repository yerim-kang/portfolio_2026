/**
 * Projects Section Component
 * 프로젝트 섹션 - 카드 형식 그리드 레이아웃
 */

import { useRef } from 'react';
import { Container } from '../../components/Container';
import { SectionTitle } from '../../components/SectionTitle';
import { useGsap } from '../../hooks/useGsap';
import { createProjectsAnimation } from '../../animations/projectsAnimation';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

// 이미지 import
import zerowayImg from '../../assets/images/zeroway.jpg';
import aihealthmateImg from '../../assets/images/aihealthmate.png';
import bbangsamImg from '../../assets/images/bbangsam.jpg';
import americayogaImg from '../../assets/images/americayoga.jpg';
import washtowerImg from '../../assets/images/washtower.png';
import openweatherImg from '../../assets/images/openweather.png';
import salarycalculatorImg from '../../assets/images/salarycalculator.png';
import imageeditorImg from '../../assets/images/imageeditor.png';
import lottoImg from '../../assets/images/lotto.png';
import todolistImg from '../../assets/images/todolist.png';
import meowTarotImg from '../../assets/images/meow-tarot.png';
import mykoreahubImg from '../../assets/images/mykorahub.png';
import hangyeolImg from '../../assets/images/hangyeol.jpg';

/** 일반 작업: 제로웨이 → AI Health Mate → 휴대폰 랜딩 → 아메리카 요가 → Todo-List */
const featuredProjects = [
  {
    id: 1,
    title: 'ZeroWay Website',
    description: '인천 제로웨이스트샵 소개 사이트',
    descriptionHighlight: '100% 하드코딩',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Sass', 'GSAP', 'Figma'],
    image: zerowayImg,
    siteUrl: 'https://zeroway.netlify.app/',
    detailUrl: '/project/zeroway',
    figmaUrl: 'https://www.figma.com/design/a9LA8Sb2jt8cBCygKJ1j9p/ZeroWay?node-id=15-95',
  },
  {
    id: 2,
    title: 'AI Health Mate Website',
    description: 'AI 맞춤형 건강솔루션 제공 사이트',
    descriptionHighlight: '100% 하드코딩',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Sass', 'Bootstrap','GSAP', 'Figma'],
    image: aihealthmateImg,
    siteUrl: 'https://ai-health-mate-site.netlify.app',
    detailUrl: '/project/ai-health-mate',
    figmaUrl: 'https://www.figma.com/design/F8RxMvfYR21jC2ypnacq4J/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=711-3971',
  },
  {
    id: 3,
    title: '휴대폰 Landing Page',
    description: '빵삼텔레콤 랜딩페이지 제작',
    descriptionHighlight: '100% 하드코딩',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AOS', 'Figma'],
    image: bbangsamImg,
    siteUrl: 'https://bbangsamlandingpage.netlify.app',
    detailUrl: '/project/bbangsam-landing',
    figmaUrl: 'https://www.figma.com/design/4v52vD7YlFsaFocsoQ8WfT/%EC%98%88%EB%A6%BC_%EC%97%B0%EC%8A%B5?node-id=501-887',
  },
  {
    id: 4,
    title: 'America Yoga Redesign',
    description: '아메리카요가 사이트 리디자인',
    tags: ['Figma'],
    image: americayogaImg,
    detailUrl: '/project/design',
    figmaUrl: 'https://www.figma.com/design/4v52vD7YlFsaFocsoQ8WfT/%EC%98%88%EB%A6%BC_%EC%97%B0%EC%8A%B5?node-id=671-32',
  },
  {
    id: 10,
    title: 'Todo-List 제작',
    description: 'React로 Todolist 제작',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    image: todolistImg,
    siteUrl: 'https://react-todolist00.netlify.app/',
    detailUrl: '/project/todo-list',
    figmaUrl: '',
  },
];

/** Cursor AI로 진행한 프로젝트 */
const cursorAiProjects = [
  {
    id: 13,
    title: '법무법인한결 Landing Page',
    description: '전세사기 전문 법무법인 랜딩페이지 제작',
    tags: ['Wordpress', 'Cursor AI'],
    image: hangyeolImg,
    siteUrl: 'https://mwpdemo64188.mycafe24.com/',
    detailUrl: '/project/hangyeol-landing',
    figmaUrl: '',
  },
  {
    id: 5,
    title: '세탁기 Landing Page',
    description: 'Cursor AI로 반응형 랜딩페이지 제작',
    tags: ['Cursor AI', 'ImageFX'],
    image: washtowerImg,
    siteUrl: 'https://twinwashtower.netlify.app/',
    detailUrl: '/project/cursor-ai',
    figmaUrl: '',
  },
  {
    id: 6,
    title: '날씨 모바일용 Website',
    description: 'Cursor AI를 활용한 OpenWeather API 웹사이트 제작',
    tags: ['Cursor AI'],
    image: openweatherImg,
    siteUrl: 'https://openweatherai.netlify.app/',
    detailUrl: '/project/cursor-ai',
    figmaUrl: '',
  },
  {
    id: 7,
    title: '직장인 계산기 Website',
    description: 'Cursor AI를 이용한 사이트제작',
    tags: ['Cursor AI'],
    image: salarycalculatorImg,
    siteUrl: 'https://salary-calculator01.netlify.app/',
    detailUrl: '/project/cursor-ai'
  },
  {
    id: 8,
    title: '이미지변환기 Website',
    description: 'Cursor AI를 이용한 사이트 제작',
    tags: ['Cursor AI'],
    image: imageeditorImg,
    siteUrl: 'https://picture-editor01.netlify.app/',
    detailUrl: '/project/cursor-ai',
    figmaUrl: '',
  },
  {
    id: 9,
    title: '로또 번호 추천 Website',
    description: 'Cursor AI를 이용한 사이트제작',
    tags: ['Cursor AI'],
    image: lottoImg,
    siteUrl: 'https://lotto7777.netlify.app/',
    detailUrl: '/project/cursor-ai',
  },
  {
    id: 11,
    title: '타로카드 Website',
    description: 'Cursor AI와 ImageFX로 타로카드 사이트 제작',
    tags: ['Cursor AI', 'ImageFX'],
    image: meowTarotImg,
    siteUrl: 'https://meow-tarot.netlify.app',
    detailUrl: '/project/cursor-ai',
    figmaUrl: '',
  },
  {
    id: 12,
    title: 'My Korea Hub Website',
    description: 'Cursor AI를 이용한 외국인을 위한 한국어 학습 · K-컬처 통합 가이드 플랫폼',
    tags: ['Cursor AI'],
    image: mykoreahubImg,
    siteUrl: 'https://mykoreahub.netlify.app/',
    detailUrl: '/project/cursor-ai',
    figmaUrl: '',
  },
];

export const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);

  // GSAP 애니메이션
  useGsap(() => {
    if (projectsRef.current) {
      const validCards = cardRefs.current.filter(Boolean) as HTMLLIElement[];
      createProjectsAnimation({
        container: projectsRef.current,
        title: titleRef.current,
        cards: validCards,
      });
    }
  }, { dependencies: [] });

  return (
    <section id="projects" ref={projectsRef} className={styles.projects}>
      <Container>
        <div className={styles.projectsContent}>
          <div ref={titleRef}>
            <SectionTitle
              size="large"
              align="center"
              subtitle="그동안 진행한 주요 프로젝트들을 소개합니다"
            >
              Featured Projects
            </SectionTitle>
          </div>

          <ul className={styles.projectsGrid}>
            {featuredProjects.map((project, index) => (
              <li
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={styles.projectCardWrapper}
              >
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>

          <div className={styles.cursorAiBlock}>
            <h3 className={styles.cursorAiHeading}>Cursor AI</h3>
            <p className={styles.cursorAiSub}>
              Cursor AI를 활용해 기획·구현 속도를 높인 프로젝트입니다.
            </p>
            <ul className={`${styles.projectsGrid} ${styles.projectsGridTight}`}>
              {cursorAiProjects.map((project, index) => (
                <li
                  key={project.id}
                  ref={(el) => {
                    cardRefs.current[featuredProjects.length + index] = el;
                  }}
                  className={styles.projectCardWrapper}
                >
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

