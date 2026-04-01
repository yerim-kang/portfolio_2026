import { useRef, useEffect } from 'react';
import { Container } from '../../components/Container';
import { useGsap } from '../../hooks/useGsap';
import { createHeroEntranceAnimation } from '../../animations/heroAnimation';
import styles from './Hero.module.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const ctaSecondaryRef = useRef<HTMLAnchorElement>(null);

  // 진입 애니메이션
  useGsap(() => {
    const timer = setTimeout(() => {
      if (subtitleRef.current && ctaRef.current) {
        const targets = {
          title: titleRef.current,
          subtitle: subtitleRef.current,
          cta: ctaRef.current,
          decorLine: null,
          visual: null,
        };

        const tl = createHeroEntranceAnimation(targets);

        if (badgeRef.current) {
          gsap.set(badgeRef.current, { autoAlpha: 0, y: 10 });
          tl.fromTo(
            badgeRef.current,
            { y: 10, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power2.out' },
            0
          );
        }

        if (tagsRef.current) {
          gsap.set(tagsRef.current, { autoAlpha: 0, y: 15 });
          tl.fromTo(
            tagsRef.current,
            { y: 15, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power2.out' },
            '-=0.3'
          );
        }

        if (ctaSecondaryRef.current) {
          gsap.set(ctaSecondaryRef.current, { autoAlpha: 0, y: 20 });
          tl.fromTo(
            ctaSecondaryRef.current,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power2.out' },
            '<'
          );
        }
      }
    }, 50);

    return () => clearTimeout(timer);
  }, { dependencies: [] });

  // 스크롤 패럴랙스
  useEffect(() => {
    if (!heroRef.current) return;
    if (typeof ScrollTrigger === 'undefined') return;

    const content = heroRef.current.querySelector(`.${styles.heroContent}`);
    if (!content) return;

    const scrollTrigger = gsap.to(content, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      if (scrollTrigger?.scrollTrigger) scrollTrigger.scrollTrigger.kill();
    };
  }, []);

  const handleContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'GSAP', 'Figma'];

  return (
    <section id="home" ref={heroRef} className={styles.hero}>
      <div className={styles.heroWatercolor} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blob1}`} />
        <span className={`${styles.blob} ${styles.blob2}`} />
        <span className={`${styles.blob} ${styles.blob3}`} />
      </div>

      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.bubbleHeader} aria-hidden>
                <span className={`${styles.bubbleDot} ${styles.dotClose}`} />
                <span className={`${styles.bubbleDot} ${styles.dotMin}`} />
                <span className={`${styles.bubbleDot} ${styles.dotMax}`} />
              </div>

              <div ref={badgeRef} className={styles.heroBadge}>
                Web Publisher
              </div>

              <h1
                ref={titleRef}
                className={styles.heroTitle}
                style={{ opacity: 1, visibility: 'visible' }}
              >
                <span className={styles.heroName}>Yerim&apos;s portfolio</span>
              </h1>

              <p
                ref={subtitleRef}
                className={styles.heroSubtitle}
                style={{ opacity: 1, visibility: 'visible' }}
              >
                사용자 경험을 중시하며, 섬세한 UI 구현과
                <br />
                최적화된 코드로 완성도 높은 웹사이트를 만듭니다.
              </p>

              <div ref={tagsRef} className={styles.heroTags}>
                {skills.map((skill) => (
                  <span key={skill} className={styles.heroTag}>{`#${skill}`}</span>
                ))}
              </div>

              <div className={styles.ctaGroup}>
                <a
                  ref={ctaRef}
                  href="#projects"
                  className={styles.heroCta}
                  style={{ opacity: 1, visibility: 'visible' }}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector('#projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  프로젝트 보기
                </a>
                <a
                  ref={ctaSecondaryRef}
                  href="#contact"
                  className={styles.heroCtaSecondary}
                  onClick={(e) => {
                    e.preventDefault();
                    handleContact();
                  }}
                >
                  연락하기
                </a>
              </div>
            </div>

          </div>
        </div>
      </Container>

      <div className={styles.heroAccent} />

      <div
        className={styles.scrollIndicator}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <span className={styles.scrollText}>Scroll Down</span>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </section>
  );
};
