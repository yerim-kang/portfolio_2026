import { useRef, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bbangsamVideo from '../../assets/images/bbangsam.mp4';
import bbangsamImg from '../../assets/images/bbangsam.jpg';
import bbangsamPlan1Img from '../../assets/images/bbangsam_plan1.jpg';
import bbangsamPlan2Img from '../../assets/images/bbangsam_plan2.jpg';
import styles from './ZerowayDetail.module.css';
import type { ProjectDetailOutletContext } from './projectDetailOutletContext';

gsap.registerPlugin(ScrollTrigger);

const SITE_URL = 'https://bbangsamlandingpage.netlify.app';
const FIGMA_URL =
  'https://www.figma.com/design/4v52vD7YlFsaFocsoQ8WfT/%EC%98%88%EB%A6%BC_%EC%97%B0%EC%8A%B5?node-id=501-887';

export const BbangsamLandingDetail = () => {
  const { projectTabs } = useOutletContext<ProjectDetailOutletContext>() ?? {};
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(`.${styles.animateUp}`).forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`${styles.portfolioPage} ${projectTabs ? styles.portfolioPageTabbed : ''}`}
      ref={pageRef}
    >
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Link to="/" className={styles.backLink}>
            ← Back to Portfolio
          </Link>
          <div className={styles.heroMeta}>
            <span className={styles.category}>Web</span>
            <span className={styles.year}>2025</span>
          </div>
          <h1 className={styles.heroTitle}>
            휴대폰 Landing
            <span className={styles.heroSubtitle}>빵삼텔레콤 프로모션 랜딩페이지</span>
          </h1>
        </div>
      </section>

      <section className={styles.heroVisual}>
        <video
          className={styles.heroVideo}
          src={bbangsamVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={`${styles.overviewGrid} ${styles.animateUp}`}>
            <div className={styles.overviewLeft}>
              <h2 className={styles.sectionLabel}>Overview</h2>
              <p className={styles.overviewText}>
                스마트폰 구매·문의 전환을 목표로 한 단일 페이지 랜딩입니다.
                혜택과 제품 정보가 한 흐름으로 읽히도록 정보 구조를 잡고, 모바일 우선으로 반응형 퍼블리싱을
                진행했습니다.
              </p>
            </div>
            <div className={styles.overviewRight}>
              <dl className={styles.infoList}>
                <div className={styles.infoItem}>
                  <dt>Client</dt>
                  <dd>Personal Project</dd>
                </div>
                <div className={styles.infoItem}>
                  <dt>Duration</dt>
                  <dd>2025.08</dd>
                </div>
                <div className={styles.infoItem}>
                  <dt>Role</dt>
                  <dd className={styles.roleDetail}>
                    기획 · 디자인 · 퍼블리싱{' '}
                    <span className={styles.roleDevHighlight}>100%</span>
                    {' '}
                    <br />
                    (단독 수행)
                  </dd>
                </div>
                <div className={styles.infoItem}>
                  <dt>Category</dt>
                  <dd>Web</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.splitContent}>
            <div className={styles.splitLeftSticky}>
              <h2 className={styles.sectionLabel}>Problem</h2>
              <h3 className={styles.sectionTitle}>
                짧은 체류 시간 안에
                <br />
                전달해야 할 메시지
              </h3>
            </div>
            <div className={`${styles.splitRight} ${styles.animateUp}`}>
              <p className={styles.bodyText}>
                랜딩페이지는 광고·검색 유입 후 이탈이 빠른 환경에서 설득과 행동(문의·구매)을 동시에
                이끌어야 합니다. 혜택·가격·후기·문의가 뒤섞이면 시선이 분산되고, CTA가 늦게 노출되면
                전환 기회를 놓칠 수 있습니다.
              </p>
              <ul className={styles.painPoints}>
                <li>핵심 혜택이 한눈에 들어오지 않으면 이탈이 증가</li>
                <li>모바일에서 스크롤·터치 동선이 길어지면 전환까지 도달하기 어려움</li>
                <li>섹션 순서가 전략과 맞지 않으면 신뢰·구매 의사 형성이 약해짐</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={`${styles.splitContent} ${styles.animateUp}`}>
            <div className={styles.splitLeft}>
              <h2 className={styles.sectionLabel}>Approach</h2>
              <h3 className={styles.sectionTitle}>
                전환 흐름에 맞춘
                <br />
                섹션 순서
              </h3>
            </div>
            <div className={styles.splitRight}>
              <p className={styles.bodyText}>
                목표를 구매·문의 전환으로 두고, 시선이 혜택 → 제품·요금 → 후기 → 문의 순으로 자연스럽게
                이동하도록 구조를 설계했습니다. 핵심 메시지와 CTA 위치를 초기에 고정한 뒤, Figma에서
                반응형 와이어를 바탕으로 콘텐츠 밀도와 시각 위계를 조정했습니다. 구현에서는 jQuery
                인터랙션과 Swiper·AOS로 스크롤 경험을 다듬어 전환 흐름이 끊기지 않도록 했습니다.
              </p>
            </div>
          </div>
          <div className={`${styles.approachVisual} ${styles.animateUp}`}>
            <figure className={styles.imageBlock}>
              <span className={styles.imageLabel}>Approach</span>
              <img
                src={bbangsamPlan2Img}
                alt="휴대폰 랜딩 정보 구조·전환 흐름 참고"
                className={styles.fullImage}
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.brandSection}>
        <div className={styles.container}>
          <div className={`${styles.brandContent} ${styles.animateUp}`}>
            <h2 className={styles.sectionLabel}>Brand Identity</h2>
            <h3 className={styles.sectionTitle}>프로모션에 맞는 비주얼 톤</h3>
            <p className={styles.bodyText}>
              통신·단말 프로모션에 어울리도록 가독성 높은 타이포와 대비감을 유지하고,
              혜택 강조 영역에 시선이 머무르도록 포인트 컬러와 여백 균형을 맞췄습니다. 아래는 랜딩 키비주얼과
              톤앤매너를 정리한 참고 화면입니다.
            </p>
            <figure className={styles.brandColorsFigure}>
              <img
                src={bbangsamPlan1Img}
                alt="빵삼텔레콤 랜딩 브랜드·키비주얼 참고"
                className={styles.brandColorsImage}
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.techSection}>
        <div className={styles.container}>
          <div className={`${styles.techContent} ${styles.animateUp}`}>
            <h2 className={styles.sectionLabel}>Tech Stack</h2>
            <div className={styles.techGrid}>
              <div className={styles.techCategory}>
                <h4>Frontend</h4>
                <ul className={styles.techList}>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h4>Interaction</h4>
                <ul className={styles.techList}>
                  <li>Swiper</li>
                  <li>AOS</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h4>Design</h4>
                <ul className={styles.techList}>
                  <li>Figma</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h4>Deploy</h4>
                <ul className={styles.techList}>
                  <li>Netlify</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.resultSection}>
        <div className={styles.container}>
          <div className={`${styles.imageBlock} ${styles.animateUp}`}>
            <span className={styles.imageLabel}>Result</span>
            <img
              src={bbangsamImg}
              alt="휴대폰 랜딩 완성 화면"
              className={styles.fullImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.animateUp}>
            <h2 className={styles.sectionLabel}>Key Features</h2>
            <h3 className={styles.sectionTitle}>핵심 구성</h3>
          </div>
          <div className={`${styles.featuresGrid} ${styles.animateUp}`}>
            <article className={styles.featureCard}>
              <span className={styles.featureNumber}>01</span>
              <h4>혜택 · Hero</h4>
              <p>첫 화면에서 프로모션 혜택과 핵심 카피를 명확히 전달해 관심을 끌도록 구성</p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureNumber}>02</span>
              <h4>제품 · 요금 블록</h4>
              <p>단말·요금 정보를 스캔하기 쉬운 카드·리스트 형태로 배치</p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureNumber}>03</span>
              <h4>후기 · 문의 CTA</h4>
              <p>신뢰 요소 후 문의·신청으로 이어지는 하단 전환 구간 마감</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={`${styles.ctaContent} ${styles.animateUp}`}>
            <h2 className={styles.ctaTitle}>프로젝트 살펴보기</h2>
            <div className={styles.ctaButtons}>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                사이트 바로가기
              </a>
              <a
                href={FIGMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                Figma 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <Link to="/" className={styles.footerLink}>
            ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
};
