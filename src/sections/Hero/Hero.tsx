/**
 * Hero Section Component
 * 
 * 실무 구조 설명:
 * 1. ref를 사용해 DOM 요소를 직접 제어 (GSAP 요구사항)
 * 2. useGsap 훅으로 애니메이션 생명주기 관리
 * 3. 애니메이션 로직은 별도 파일로 분리 (heroAnimation.ts)
 * 4. CSS Module로 스타일 격리
 * 5. 반응형 디자인 적용
 * 
 * 이렇게 분리하는 이유:
 * - 컴포넌트는 "UI 구조"에만 집중
 * - 애니메이션은 "연출 로직"으로 분리
 * - 테스트와 유지보수가 용이
 * - 다른 섹션에서도 애니메이션 재사용 가능
 */

import { useRef, useEffect } from 'react';
import { Container } from '../../components/Container';
import { useGsap } from '../../hooks/useGsap';
import { createHeroEntranceAnimation } from '../../animations/heroAnimation';
import styles from './Hero.module.css';

// ScrollTrigger는 별도로 등록 필요
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  // DOM 요소에 대한 ref
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const ctaSecondaryRef = useRef<HTMLAnchorElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const mouseFollowerRef = useRef<HTMLDivElement>(null);

  // 마우스 위치 추적 (부드러운 팔로우 효과)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseFollowerRef.current) {
        mouseFollowerRef.current.style.left = `${e.clientX}px`;
        mouseFollowerRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 타이핑 애니메이션 (세 문구 순환)
  useEffect(() => {
    if (!typingTextRef.current) return;

    const texts = [
      '웹 퍼블리셔입니다',
      'UXUI 디자이너입니다',
      '프론트엔드 개발자입니다',
    ];

    // 가장 긴 텍스트의 너비를 계산하여 공간 확보
    const tempSpan = document.createElement('span');
    tempSpan.className = styles.typingText;
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.whiteSpace = 'nowrap';
    document.body.appendChild(tempSpan);
    
    // 가장 긴 텍스트 찾기
    const longestText = texts.reduce((a, b) => a.length > b.length ? a : b);
    tempSpan.textContent = longestText;
    const maxWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);
    
    // 타이핑 텍스트 영역에 최소 너비 설정
    if (typingTextRef.current) {
      typingTextRef.current.style.minWidth = `${maxWidth}px`;
      typingTextRef.current.style.display = 'inline-block';
    }

    // 초기 텍스트 비우기
    typingTextRef.current.textContent = '';

    let currentIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      if (!typingTextRef.current) return;

      const fullText = texts[currentIndex];

      if (!isDeleting && charIndex < fullText.length) {
        // 타이핑 중
        currentText = fullText.substring(0, charIndex + 1);
        typingTextRef.current.textContent = currentText;
        charIndex++;
        timeoutId = setTimeout(type, 100);
      } else if (!isDeleting && charIndex === fullText.length) {
        // 타이핑 완료, 잠시 대기
        isDeleting = true;
        timeoutId = setTimeout(type, 2000);
      } else if (isDeleting && currentText.length > 0) {
        // 삭제 중
        currentText = currentText.substring(0, currentText.length - 1);
        typingTextRef.current.textContent = currentText;
        timeoutId = setTimeout(type, 50);
      } else if (isDeleting && currentText.length === 0) {
        // 삭제 완료, 다음 텍스트로
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        charIndex = 0;
        timeoutId = setTimeout(type, 100);
      }
    };

    // 약간의 지연 후 타이핑 시작
    const startTimer = setTimeout(() => {
      type();
    }, 500);

    return () => {
      clearTimeout(startTimer);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (typingTextRef.current) {
        typingTextRef.current.textContent = '';
      }
    };
  }, []);

  // 진입 애니메이션
  useGsap(() => {
    // ref가 모두 준비될 때까지 약간의 지연
    const timer = setTimeout(() => {
      if (subtitleRef.current && ctaRef.current && visualRef.current) {
        const targets = {
          title: titleRef.current,
          subtitle: subtitleRef.current,
          cta: ctaRef.current,
          decorLine: null,
          visual: visualRef.current,
        };

        // 타이틀은 타이핑 애니메이션이므로 제외
        const tl = createHeroEntranceAnimation(targets);

        // 연락하기 버튼도 동일한 애니메이션 적용 (프로젝트 보기 버튼과 정확히 동시에 등장)
        if (ctaSecondaryRef.current) {
          // 초기 상태 설정
          gsap.set(ctaSecondaryRef.current, {
            autoAlpha: 0,
            y: 20,
          });

          // 프로젝트 보기 버튼과 정확히 같은 시점에 시작하도록 '<' 사용
          tl.fromTo(
            ctaSecondaryRef.current,
            {
              y: 20,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: 'power2.out',
            },
            '<' // 프로젝트 보기 버튼과 정확히 동시에 시작
          );
        }
      }
    }, 50);

    // cleanup
    return () => {
      clearTimeout(timer);
    };
  }, { dependencies: [] });

  // 스크롤 패럴랙스 효과 (선택사항)
  useEffect(() => {
    if (!heroRef.current) return;

    // ScrollTrigger가 등록되었는지 확인
    if (typeof ScrollTrigger === 'undefined') {
      return;
    }

    const elements = heroRef.current.querySelectorAll(`.${styles.heroText}, .${styles.heroVisual}`);
    
    if (elements.length === 0) return;

    const scrollTrigger = gsap.to(elements, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // cleanup
    return () => {
      if (scrollTrigger && scrollTrigger.scrollTrigger) {
        scrollTrigger.scrollTrigger.kill();
      }
    };
  }, []);


  const handleContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 코드 라인 데이터
  const codeLines = [
    '<div class="portfolio">',
    '  const skills = ["HTML", "CSS", "JS"];',
    '  @keyframes fadeIn { from { opacity: 0; } }',
    '  display: grid; gap: 2rem;',
    '  transform: translateY(-50%);',
    '  useEffect(() => { animate(); }, []);',
  ];

  // 기술 파티클 데이터
  const techParticles = ['HTML', 'CSS', 'JS', 'React', 'GSAP', 'Git'];

  return (
    <section 
      id="home"
      ref={heroRef} 
      className={styles.hero}
    >
      {/* 마우스 팔로워 효과 */}
      <div ref={mouseFollowerRef} className={styles.mouseFollower} />

      {/* 배경 효과들 */}
      <div className={styles.heroBackground}>
        {/* 그리드 라인 */}
        <span className={styles.gridLines} />

        {/* 플로팅 코드 라인 */}
        <span className={styles.codeLines}>
          {codeLines.map((code, i) => (
            <div key={i} className={styles.codeLine}>{code}</div>
          ))}
        </span>

        {/* 플로팅 도형 */}
        <ul className={styles.floatingShapes}>
          <li className={`${styles.shape} ${styles.shape1}`} />
          <li className={`${styles.shape} ${styles.shape2}`} />
          <li className={`${styles.shape} ${styles.shape3}`} />
        </ul>

        {/* 기술 파티클 */}
        <div className={styles.techParticles}>
          {techParticles.map((tech, i) => (
            <div key={i} className={styles.particle}>{tech}</div>
          ))}
        </div>

        {/* 스캔라인 효과 */}
        <span className={styles.scanline} />

        {/* 글리치 오버레이 */}
        <span className={styles.glitchOverlay} />
      </div>

      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroGrid}>
            {/* 좌측: 텍스트 콘텐츠 */}
            <div className={styles.heroText}>
              <h1 
                ref={titleRef} 
                className={styles.heroTitle}
                style={{ opacity: 1, visibility: 'visible' }}
              >
                안녕하세요, 저는
                <br />
                <span ref={typingTextRef} className={styles.typingText}></span>
              </h1>

              <p 
                ref={subtitleRef} 
                className={styles.heroSubtitle}
                style={{ opacity: 1, visibility: 'visible' }}
              >
                사용자 경험을 중시하는 웹 퍼블리셔로서,<br />
                섬세한 UI 구현과 최적화된 코드로<br />
                완성도 높은 웹사이트를 만들어갑니다.
              </p>

              <div className={styles.ctaGroup}>
                <a
                  ref={ctaRef}
                  href="#projects"
                  className={styles.heroCta}
                  style={{ opacity: 1, visibility: 'visible' }}
                  onClick={(e) => {
                    e.preventDefault();
                    const projectsSection = document.querySelector('#projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
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

            {/* 우측: 코드 에디터 스타일 비주얼 */}
            <div 
              ref={visualRef} 
              className={styles.heroVisual}
              style={{ opacity: 1, visibility: 'visible' }}
            >
              <div className={styles.codeEditor}>
                <ul className={styles.editorHeader}>
                  <li className={styles.editorDot} />
                  <li className={styles.editorDot} />
                  <li className={styles.editorDot} />
                  <span className={styles.editorTitle}>portfolio.tsx</span>
                </ul>
                <div className={styles.editorBody}>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>1</span>
                    <span className={styles.lineContent}>
                      <span className={styles.codeKeyword}>const</span>{' '}
                      <span className={styles.codeFunction}>Developer</span>{' '}
                      <span className={styles.codeBracket}>=</span>{' '}
                      <span className={styles.codeBracket}>{'{'}</span>
                    </span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>2</span>
                    <span className={styles.lineContent}>
                      {'  '}<span className={styles.codeProperty}>name</span>:{' '}
                      <span className={styles.codeString}>"웹 퍼블리셔"</span>,
                    </span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>3</span>
                    <span className={styles.lineContent}>
                      {'  '}<span className={styles.codeProperty}>skills</span>:{' '}
                      <span className={styles.codeBracket}>[</span>
                      <span className={styles.codeString}>"HTML"</span>,{' '}
                      <span className={styles.codeString}>"CSS"</span>,{' '}
                      <span className={styles.codeString}>"JS"</span>
                      <span className={styles.codeBracket}>]</span>,
                    </span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>4</span>
                    <span className={styles.lineContent}>
                      {'  '}<span className={styles.codeProperty}>passion</span>:{' '}
                      <span className={styles.codeNumber}>100</span>,
                    </span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>5</span>
                    <span className={styles.lineContent}>
                      {'  '}<span className={styles.codeProperty}>creative</span>:{' '}
                      <span className={styles.codeKeyword}>true</span>,
                    </span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>6</span>
                    <span className={styles.lineContent}>
                      <span className={styles.codeBracket}>{'}'}</span>;
                    </span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>7</span>
                    <span className={styles.lineContent}>&nbsp;</span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNumber}>8</span>
                    <span className={styles.lineContent}>
                      <span className={styles.codeComment}>// 함께 멋진 웹을 만들어요 ✨</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 스크롤 인디케이터 */}
      <div 
        className={styles.scrollIndicator}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <span className={styles.scrollText}>Scroll Down</span>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </section>
  );
};

