/**
 * Skills Section — autoplay marquee 아이콘 레이아웃
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
import wordpressImg from '../../assets/images/wordpress.png';

const skills = [
  { name: 'Figma', icon: figmaImg },
  { name: 'HTML', icon: htmlImg },
  { name: 'CSS', icon: cssImg },
  { name: 'JavaScript', icon: javascriptImg },
  { name: 'jQuery', icon: jqueryImg },
  { name: 'SASS', icon: sassImg },
  { name: 'Bootstrap', icon: bootstrapImg },
  { name: 'WordPress', icon: wordpressImg },
  { name: 'Cursor', icon: cursorImg },
  { name: 'Photoshop', icon: photoshopImg },
];

export const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (skillsRef.current) {
      createSkillsAnimation({
        container: skillsRef.current,
        title: titleRef.current,
        grid: marqueeRef.current,
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

          <div ref={marqueeRef} className={styles.marqueeWrap}>
            <div className={styles.marqueeTrack}>
              {[...skills, ...skills].map((skill, idx) => (
                <div key={`${skill.name}-${idx}`} className={styles.iconItem}>
                  <div className={styles.iconFrame}>
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} loading="lazy" />
                    ) : (
                      <span className={styles.iconFallback} aria-hidden>
                        {skill.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <span className={styles.iconLabel}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
