/**
 * About Section Component
 * 자기소개 섹션
 */

import { useRef } from 'react';
import { Container } from '../../components/Container';
import { useGsap } from '../../hooks/useGsap';
import { createAboutAnimation } from '../../animations/aboutAnimation';
import emojiImg from '../../assets/images/emoji.png';
import styles from './About.module.css';

export const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const contentTextRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // 진입 애니메이션 (ScrollTrigger)
  useGsap(() => {
    const timer = setTimeout(() => {
      if (aboutRef.current) {
        createAboutAnimation({
          container: aboutRef.current,
          image: imageRef.current,
          title: titleRef.current,
          description: descriptionRef.current,
          contentText: contentTextRef.current,
          education: educationRef.current,
          button: buttonRef.current,
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, { dependencies: [] });

  return (
    <section id="about" ref={aboutRef} className={styles.about}>
      <Container>
        <div className={styles.aboutContent}>
          <div className={styles.aboutGrid}>
            {/* 좌측: 이미지 영역 */}
            <div ref={imageRef} className={styles.aboutImage}>
              <div className={styles.imageWrapper}>
                <img 
                  src={emojiImg} 
                  alt="웹 퍼블리셔 강예림 프로필 이미지" 
                  className={styles.profileImg}
                  loading="lazy"
                />
                <div className={styles.imagePlaceholder}>
                  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="200" fill="#E5E5E5"/>
                    <circle cx="200" cy="160" r="60" fill="#C4C4C4"/>
                    <path d="M100 320 Q100 260 200 260 Q300 260 300 320" fill="#C4C4C4"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* 우측: 텍스트 영역 */}
            <div className={styles.aboutText}>
              <h2 ref={titleRef} className={styles.aboutTitle}>
                About Me
              </h2>
              
              <p ref={descriptionRef} className={styles.aboutDescription}>
                사용자의 니즈를 읽고 구조로 풀어내는 퍼블리셔 강예림 입니다
              </p>

              <div ref={contentTextRef} className={styles.aboutContentText}>
                <p>
                  사용자 흐름과 정보 구조를 고려한 화면 설계, 반응형 웹 퍼블리싱, 그리고 유지보수를 고려한 구조화된 코드 작성을 중요하게 생각합니다.
                </p>
                <p>
                  HTML, CSS(SCSS), JavaScript를 기반으로 UI 인터랙션을 구현하며, Figma를 활용한 와이어프레임·프로토타입 제작과 컴포넌트 관리 경험을 보유하고 있습니다.
                </p>
                <p>
                  작업 과정에서는 꼼꼼한 정리와 문서화를 통해 협업 효율을 높이고, 디자인 의도를 정확하게 구현하는 데 집중합니다.
                  사용자와 팀 모두에게 이해하기 쉬운 결과물을 만드는 것을 목표로 성장하고 있습니다.
                </p>
              </div>

              {/* Education 영역 */}
              <div ref={educationRef} className={styles.educationSection}>
                <h3 className={styles.educationTitle}>Education</h3>
                <div className={styles.educationContent}>
                  {/* <div className={styles.educationItem}>
                    <span className={styles.educationPeriod}>2026. 01 - 2026. 03</span>
                    <span className={styles.educationCourse}>
                      인턴 3개월(html,css,javascript) 워드프레스 사이트 제작
                    </span>
                    <span className={styles.educationInstitution}>일리웹</span>
                  </div> */}
                  <div className={styles.educationItem}>
                    <span className={styles.educationPeriod}>2025. 07 - 2025. 12</span>
                    <span className={styles.educationCourse}>UXUI프론트엔드&웹디자인</span>
                    <span className={styles.educationInstitution}>이젠아카데미</span>
                  </div>
                  <div className={styles.educationItem}>
                    <span className={styles.educationPeriod}>2025. 12 - 2026. 01</span>
                    <span className={styles.educationCourse}>생성형AI 기반 마케팅</span>
                    <span className={styles.educationInstitution}>이젠아카데미</span>
                  </div>
                </div>
              </div>

              <a
                ref={buttonRef}
                href="https://dog-mandolin-7f7.notion.site/2b94be4a7f1c8045afafcc146230e00a?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.moreLink}
              >
                노션으로 더 보기
                <span className={styles.arrowIcon}>→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

