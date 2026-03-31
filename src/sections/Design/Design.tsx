/**
 * Design Section Component
 * 디자인 섹션 - 카드 형식 그리드 레이아웃
 */

import { useRef } from 'react';
import { Container } from '../../components/Container';
import { SectionTitle } from '../../components/SectionTitle';
import { useGsap } from '../../hooks/useGsap';
import { createDesignAnimation } from '../../animations/designAnimation';
import { ProjectCard } from '../Projects/ProjectCard';
import styles from './Design.module.css';

// 이미지 import
import hamsterImg from '../../assets/images/hamster.png';
import banner1Img from '../../assets/images/banner1.png';
import banner2Img from '../../assets/images/banner2.png';
import banner3Img from '../../assets/images/banner3.png';

// 디자인 데이터
const designs = [
  {
    id: 1,
    title: '이모티콘제작',
    description: 'ImageFx와 Figma를 이용하여 이모티콘 제작 및 OGQ마켓에 등록',
    tags: ['Figma', 'ImageFx'],
    image: hamsterImg,
    detailUrl: 'https://dog-mandolin-7f7.notion.site/AI-2fd4be4a7f1c8153b14de6524d709b60?source=copy_link',
    figmaUrl: 'https://www.figma.com/design/4v52vD7YlFsaFocsoQ8WfT/%EC%98%88%EB%A6%BC_%EC%97%B0%EC%8A%B5?node-id=698-2006',
  },
  {
    id: 2,
    title: '배너 디자인',
    description: 'Figma로 배너 이미지 제작',
    tags: ['Figma'],
    image: banner1Img,
    detailUrl: 'https://dog-mandolin-7f7.notion.site/2fe4be4a7f1c809aae95feae87a58d01?source=copy_link',
    figmaUrl: 'https://www.figma.com/design/4v52vD7YlFsaFocsoQ8WfT/%EC%98%88%EB%A6%BC_%EC%97%B0%EC%8A%B5?node-id=829-2864',
  },
  {
    id: 3,
    title: '배너 디자인',
    description: 'Figma로 배너 이미지 제작',
    tags: ['Figma'],
    image: banner2Img,
    detailUrl: 'https://dog-mandolin-7f7.notion.site/2fe4be4a7f1c80daa258d53865d55052?source=copy_link',
    figmaUrl: 'https://www.figma.com/design/4v52vD7YlFsaFocsoQ8WfT/%EC%98%88%EB%A6%BC_%EC%97%B0%EC%8A%B5?node-id=829-2864',
  },
  {
    id: 4,
    title: '배너 디자인',
    description: 'Figma로 배너 이미지 제작',
    tags: ['Figma'],
    image: banner3Img,
    detailUrl: 'https://dog-mandolin-7f7.notion.site/2fe4be4a7f1c8058a619c7bcb46b7c06?source=copy_link',
    figmaUrl: 'https://www.figma.com/design/4v52vD7YlFsaFocsoQ8WfT/%EC%98%88%EB%A6%BC_%EC%97%B0%EC%8A%B5?node-id=829-2864',
  },
];

export const Design = () => {
  const designRef = useRef<HTMLElement>(null);
  const designGridRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);

  // GSAP 애니메이션
  useGsap(() => {
    const timer = setTimeout(() => {
      if (designRef.current) {
        const validCards = cardRefs.current.filter(Boolean) as HTMLLIElement[];
        createDesignAnimation({
          container: designRef.current,
          title: titleRef.current,
          cards: validCards,
        });
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, { dependencies: [] });

  return (
    <section id="design" ref={designRef} className={styles.design}>
      <Container>
        <div className={styles.designContent}>
          <div ref={titleRef}>
            <SectionTitle
              size="large"
              align="center"
              subtitle="디자인 작업물을 소개합니다"
            >
              Design
            </SectionTitle>
          </div>

          <ul ref={designGridRef} className={styles.designGrid}>
            {designs.map((design, index) => (
              <li
                key={design.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={styles.designCardWrapper}
              >
                <ProjectCard project={design} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

