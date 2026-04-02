import { useRef, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aihealthmateVideo from '../../assets/images/aihealthmate.mp4';
import aihealthmateResultImg from '../../assets/images/aihealthmate_plan3.jpg';
import aihealthmatePlanImg from '../../assets/images/aihealthmate_plan1.jpg';
import aihealthmatePlan2Img from '../../assets/images/aihealthmate_plan2.jpg';
import styles from './ZerowayDetail.module.css';
import type { ProjectDetailOutletContext } from './projectDetailOutletContext';

gsap.registerPlugin(ScrollTrigger);

const SITE_URL = 'https://ai-health-mate-site.netlify.app';
const FIGMA_URL =
  'https://www.figma.com/design/F8RxMvfYR21jC2ypnacq4J/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=711-3971';

export const AIHealthMateDetail = () => {
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
            AI Health Mate
            <span className={styles.heroSubtitle}>AI 맞춤형 건강 솔루션 웹사이트</span>
          </h1>
        </div>
      </section>

      <section className={styles.heroVisual}>
        <video
          className={styles.heroVideo}
          src={aihealthmateVideo}
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
                웨어러블·스마트폰 건강 데이터를 바탕으로 맞춤 건강 솔루션을 소개하는 웹사이트입니다.
                건강 정보를 처음 접하는 사용자도 흐름을 따라가며 서비스를 이해할 수 있도록 구성했습니다.
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
                  <dd>2025.09 - 2025.10</dd>
                </div>
                <div className={styles.infoItem}>
                  <dt>Role</dt>
                  <dd className={styles.roleDetail}>
                    기획 · 디자인 · 퍼블리싱{' '}
                    <span className={styles.roleDevHighlight}>100%</span>
                    {' '}
                    <br />
                    (100% 하드코딩)
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
                복잡한 건강 정보,
                <br />
                높은 이해 비용
              </h3>
            </div>
            <div className={`${styles.splitRight} ${styles.animateUp}`}>
              <p className={styles.bodyText}>
                맞춤 건강·라이프스타일 서비스는 기능이 다양할수록 정보 밀도가 높아지고,
                사용자가 한 번에 파악해야 할 메시지가 많아집니다. 운동·수면·식습관 등 영역별 정보가
                나열되기만 하면 ‘내게 맞는 솔루션’이 무엇인지 전달되기 어렵습니다.
              </p>
              <ul className={styles.painPoints}>
                <li>건강 데이터와 서비스 설명이 한눈에 연결되지 않음</li>
                <li>섹션별 목적과 우선순위가 불분명하면 이탈이 발생</li>
                <li>모바일·데스크톱 모두에서 읽기 쉬운 위계가 필요</li>
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
                사용자 여정에 맞춘
                <br />
                섹션 구조
              </h3>
            </div>
            <div className={styles.splitRight}>
              <p className={styles.bodyText}>
                Hero → 서비스 소개 → 운동·수면·식습관 기능 → 뉴스 → 문의 순으로 사용자 여정을 설계했습니다.
                초기 기획에서 각 섹션의 목적과 메시지를 정의한 뒤, Figma에서 컴포넌트와 반응형 기준을 세워
                정보 밀도를 조절했습니다. 퍼블리싱에서는 SCSS 구조화와 Bootstrap·Flex·Grid를 조합해
                기획 의도에 맞는 화면 흐름을 구현했습니다.
              </p>
            </div>
          </div>
          <div className={`${styles.approachVisual} ${styles.animateUp}`}>
            <figure className={styles.imageBlock}>
              <span className={styles.imageLabel}>Approach</span>
              <img
                src={aihealthmatePlan2Img}
                alt="AI Health Mate 사용자 여정·섹션 구조 기획"
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
            <h3 className={styles.sectionTitle}>신뢰와 케어를 담은 톤</h3>
            <p className={styles.bodyText}>
              건강·의료 계열 서비스에 맞게 차분하고 신뢰감 있는 팔레트와 여백감을 유지하고,
              포인트 컬러로 생동감과 디지털 헬스 이미지를 보완했습니다. 아래는 기획·디자인 단계에서 정리한
              컬러 및 무드 보드입니다.
            </p>
            <figure className={styles.brandColorsFigure}>
              <img
                src={aihealthmatePlanImg}
                alt="AI Health Mate 브랜드·컬러 참고 이미지"
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
                  <li>CSS3 / Sass</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h4>UI Framework</h4>
                <ul className={styles.techList}>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h4>Animation</h4>
                <ul className={styles.techList}>
                  <li>GSAP</li>
                  <li>AOS</li>
                  <li>Swiper</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h4>Design / Deploy</h4>
                <ul className={styles.techList}>
                  <li>Figma</li>
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
              src={aihealthmateResultImg}
              alt="AI Health Mate 결과 화면"
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
              <h4>서비스 인트로 · Hero</h4>
              <p>핵심 가치를 먼저 전달하고, 이후 상세 기능으로 자연스럽게 이어지도록 구성</p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureNumber}>02</span>
              <h4>라이프스타일 기능 블록</h4>
              <p>운동·수면·식습관 등 영역별로 메시지와 시각 요소를 통일해 스캔하기 쉽게 배치</p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureNumber}>03</span>
              <h4>뉴스 · 문의</h4>
              <p>최신 정보와 문의 흐름을 하단에 두어 탐색 마지막에 행동을 유도</p>
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
