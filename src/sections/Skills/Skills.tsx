/**
 * Skills Section Component
 * 스킬 섹션 - Swiper를 이용한 무한 스크롤 캐러셀
 */

import { useRef } from 'react';
import { Container } from '../../components/Container';
import { SectionTitle } from '../../components/SectionTitle';
import { useGsap } from '../../hooks/useGsap';
import { createSkillsAnimation } from '../../animations/skillsAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import styles from './Skills.module.css';

// 이미지 import
import figmaImg from '../../assets/images/figma.png';
import htmlImg from '../../assets/images/html.png';
import cssImg from '../../assets/images/css.png';
import javascriptImg from '../../assets/images/javascript.png';
import jqueryImg from '../../assets/images/jquery.webp';
import sassImg from '../../assets/images/sass.png';
import bootstrapImg from '../../assets/images/bootstrap.png';
import cursorImg from '../../assets/images/cursor.png';
import photoshopImg from '../../assets/images/photoshop.png';
import illustratorImg from '../../assets/images/illustrator.png';

// 스킬 데이터
const skills = [
  { name: 'Figma', icon: figmaImg },
  { name: 'HTML', icon: htmlImg },
  { name: 'CSS', icon: cssImg },
  { name: 'JavaScript', icon: javascriptImg },
  { name: 'jQuery', icon: jqueryImg },
  { name: 'SASS', icon: sassImg },
  { name: 'Bootstrap', icon: bootstrapImg },
  { name: 'Cursor', icon: cursorImg },
  { name: 'Photoshop', icon: photoshopImg },
  { name: 'Illustrator', icon: illustratorImg },
];

export const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const swiperWrapperRef = useRef<HTMLDivElement>(null);

  // GSAP 애니메이션
  useGsap(() => {
    const timer = setTimeout(() => {
      if (skillsRef.current) {
        createSkillsAnimation({
          container: skillsRef.current,
          title: titleRef.current,
          swiper: swiperWrapperRef.current,
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, { dependencies: [] });

  return (
    <section id="skills" ref={skillsRef} className={styles.skills}>
      <Container>
        <div className={styles.skillsContent}>
          <div ref={titleRef}>
            <SectionTitle
              size="large"
              align="center"
              subtitle="웹 퍼블리싱에 필요한 다양한 기술 스택을 보유하고 있습니다"
            >
              Skills & Expertise
            </SectionTitle>
          </div>

          <div ref={swiperWrapperRef} className={styles.skillsSwiperWrapper}>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={2000}
              allowTouchMove={false}
              className={styles.skillsSwiper}
            >
              {/* 첫 번째 세트 */}
              {skills.map((skill, index) => (
                <SwiperSlide key={`first-${index}`} className={styles.skillSlide}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillIcon}>
                      <img
                        src={skill.icon}
                        alt={`${skill.name} 기술 아이콘`}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const placeholder = target.nextElementSibling as HTMLElement;
                          if (placeholder) {
                            placeholder.style.display = 'flex';
                          }
                        }}
                      />
                      <div className={styles.iconPlaceholder}>
                        <span>{skill.name.charAt(0)}</span>
                      </div>
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                </SwiperSlide>
              ))}
              {/* 두 번째 세트 (무한 루프를 위한 복제) */}
              {skills.map((skill, index) => (
                <SwiperSlide key={`second-${index}`} className={styles.skillSlide}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillIcon}>
                      <img
                        src={skill.icon}
                        alt={`${skill.name} 기술 아이콘`}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const placeholder = target.nextElementSibling as HTMLElement;
                          if (placeholder) {
                            placeholder.style.display = 'flex';
                          }
                        }}
                      />
                      <div className={styles.iconPlaceholder}>
                        <span>{skill.name.charAt(0)}</span>
                      </div>
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

