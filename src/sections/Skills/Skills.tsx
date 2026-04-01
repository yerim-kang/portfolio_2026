/**
 * Skills Section — 아이콘 중심 심플 레이아웃
 */

import { useRef } from 'react';
import { Container } from '../../components/Container';
import { SectionTitle } from '../../components/SectionTitle';
import { useGsap } from '../../hooks/useGsap';
import { createSkillsAnimation } from '../../animations/skillsAnimation';
import styles from './Skills.module.css';

import figmaImg from '../../assets/images/figma.png';
import htmlImg from '../../assets/images/html.png';
import cssImg from '../../assets/images/css.png';
import javascriptImg from '../../assets/images/javascript.png';
import jqueryImg from '../../assets/images/jquery.webp';
import sassImg from '../../assets/images/sass.png';
import bootstrapImg from '../../assets/images/bootstrap.png';
import cursorImg from '../../assets/images/cursor.png';
import photoshopImg from '../../assets/images/photoshop.png';
import githubImg from '../../assets/images/github.png';
import slackImg from '../../assets/images/slack.png';
import wordpressImg from '../../assets/images/wordpress.png';
import gsapImg from '../../assets/images/gsap.webp';
import swiperImg from '../../assets/images/swiper.svg';
import netlifyImg from '../../assets/images/netlify.webp';
import midjourneyImg from '../../assets/images/midjourney.png';
import geminiImg from '../../assets/images/gemini.png';
import chatgptImg from '../../assets/images/chatgpt.png';

interface SkillCategory {
  title: string;
  items: { name: string; icon: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Language',
    items: [
      { name: 'HTML', icon: htmlImg },
      { name: 'CSS', icon: cssImg },
      { name: 'JavaScript', icon: javascriptImg },
    ],
  },
  {
    title: 'Framework & Library',
    items: [
      { name: 'jQuery', icon: jqueryImg },
      { name: 'SASS', icon: sassImg },
      { name: 'Bootstrap', icon: bootstrapImg },
      { name: 'Swiper', icon: swiperImg },
      { name: 'GSAP', icon: gsapImg },
    ],
  },
  {
    title: 'Design Tool',
    items: [
      { name: 'Figma', icon: figmaImg },
      { name: 'Photoshop', icon: photoshopImg },
    ],
  },
  {
    title: 'AI Tool',
    items: [
      { name: 'Cursor', icon: cursorImg },
      { name: 'Midjourney', icon: midjourneyImg },
      { name: 'Gemini', icon: geminiImg },
      { name: 'ChatGPT', icon: chatgptImg },
    ],
  },
  {
    title: 'Development Tool',
    items: [
      { name: 'GitHub', icon: githubImg },
      { name: 'Slack', icon: slackImg },
      { name: 'WordPress', icon: wordpressImg },
      { name: 'Netlify', icon: netlifyImg },
    ],
  },
];

export const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (skillsRef.current) {
      createSkillsAnimation({
        container: skillsRef.current,
        title: titleRef.current,
        grid: categoriesRef.current,
      });
    }
  }, { dependencies: [] });

  return (
    <section id="skills" ref={skillsRef} className={styles.skills}>
      <Container>
        <div className={styles.skillsContent}>
          <div ref={titleRef}>
            <SectionTitle
              size="large"
              align="center"
              subtitle="퍼블리싱·디자인 작업에 사용하는 주요 도구입니다"
            >
              Skills & Tools
            </SectionTitle>
          </div>

          <div ref={categoriesRef} className={styles.categories}>
            {skillCategories.map((category) => (
              <div key={category.title} className={styles.categoryBlock}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <ul className={styles.iconGrid}>
                  {category.items.map((skill) => (
                    <li key={skill.name} className={styles.iconItem}>
                      <div className={styles.iconFrame}>
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const ph = target.nextElementSibling as HTMLElement | null;
                            if (ph) ph.style.display = 'flex';
                          }}
                        />
                        <span className={styles.iconFallback} aria-hidden>
                          {skill.name.charAt(0)}
                        </span>
                      </div>
                      <span className={styles.iconLabel}>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
