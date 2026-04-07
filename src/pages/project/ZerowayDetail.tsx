import { useRef, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mockup2Video from '../../assets/images/mockup2.mp4';
import zerowayPlan2Img from '../../assets/images/zeroway_plan2.jpg';
import colorsReferenceImg from '../../assets/images/Colors.jpg';
import styles from './ZerowayDetail.module.css';
import type { ProjectDetailOutletContext } from './projectDetailOutletContext';

gsap.registerPlugin(ScrollTrigger);

export const ZerowayDetail = () => {
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
      {/* Hero Section */}
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
            ZeroWay
            <span className={styles.heroSubtitle}>인천 제로웨이스트샵 플랫폼</span>
          </h1>
        </div>
      </section>

      {/* Hero Visual — 페이지 .container와 동일 폭, 영상은 영역 100% × 100% */}
      <section className={styles.heroVisual}>
        <div className={styles.heroVisualInner}>
          <video
            className={styles.heroVideo}
            src={mockup2Video}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={`${styles.overviewGrid} ${styles.animateUp}`}>
            <div className={styles.overviewLeft}>
              <h2 className={styles.sectionLabel}>Overview</h2>
              <p className={styles.overviewText}>
                인천 지역 제로웨이스트샵 정보를 한눈에 전달하는 팀 프로젝트입니다.
                사용자가 제로웨이스트에 대한 정보를 얻고 쉽게 매장을 찾을 수 있도록 사이트를 만드는 것을 목표로 했습니다.
              </p>
            </div>
            <div className={styles.overviewRight}>
              <dl className={styles.infoList}>
                <div className={styles.infoItem}>
                  <dt>Client</dt>
                  <dd>Team Project</dd>
                </div>
                <div className={styles.infoItem}>
                  <dt>Duration</dt>
                  <dd>2025.10 - 2025.12</dd>
                </div>
                <div className={styles.infoItem}>
                  <dt>Role</dt>
                  <dd className={styles.roleDetail}>
                    기획 30% · 디자인 30% ·{' '}
                    <span className={styles.roleDevHighlight}>개발 80%(하드코딩)</span>
                    {' '}
                    <br />
                    <span className={styles.roleKvHighlight}>
                      (SCSS mixin, 메인 페이지, 지도 페이지, 제보하기 페이지 담당)
                    </span>
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

      {/* Tech Stack — Overview 직후 */}
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
                <h4>Animation</h4>
                <ul className={styles.techList}>
                  <li>GSAP</li>
                  <li>AOS</li>
                  <li>Swiper</li>
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

      {/* Problem & Solution */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.splitContent}>
            <div className={styles.splitLeftSticky}>
              <h2 className={styles.sectionLabel}>Problem</h2>
              <h3 className={styles.sectionTitle}>
                흩어진 정보,<br />
                불편한 탐색
              </h3>
            </div>
            <div className={`${styles.splitRight} ${styles.animateUp}`}>
              <p className={styles.bodyText}>
                인천 지역의 제로웨이스트샵 정보는 블로그, SNS 등에 파편화되어 있어
                사용자가 원하는 매장을 찾기 어려웠습니다. 위치, 영업시간, 취급 품목 등
                핵심 정보를 한 곳에서 확인할 수 없다는 문제가 있었습니다.
              </p>
              <ul className={styles.painPoints}>
                <li>정보가 여러 플랫폼에 흩어져 있음</li>
                <li>최신 정보인지 확인하기 어려움</li>
                <li>지도 기반 탐색 기능 부재</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={`${styles.splitContent} ${styles.animateUp}`}>
            <div className={styles.splitLeft}>
              <h2 className={styles.sectionLabel}>Approach</h2>
              <h3 className={styles.sectionTitle}>
                사용자 흐름 중심의<br />
                정보 구조 설계
              </h3>
            </div>
            <div className={styles.splitRight}>
              <p className={styles.bodyText}>
                목표 사용자와 핵심 이용 시나리오를 먼저 정의하고, 시나리오에 맞는 화면설계서를 설계했습니다. API 대신 이미지 기반 지도를 선택해
                로딩 속도와 유지보수성을 확보했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Color */}
      <section className={styles.brandSection}>
        <div className={styles.container}>
          <div className={`${styles.brandContent} ${styles.animateUp}`}>
            <h2 className={styles.sectionLabel}>Brand Identity</h2>
            <h3 className={styles.sectionTitle}>친환경의 가치를 담은 컬러</h3>
            <p className={styles.bodyText}>
              자연과 지속가능성을 상징하는 그린 계열을 메인 컬러로 선정하고,
              깔끔하고 신뢰감 있는 톤앤매너를 적용했습니다.
            </p>
            <figure className={styles.brandColorsFigure}>
              <img
                src={colorsReferenceImg}
                alt="ZeroWay 브랜드 컬러 팔레트"
                className={styles.brandColorsImage}
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.animateUp}>
            <h2 className={styles.sectionLabel}>Key Features</h2>
            <h3 className={styles.sectionTitle}>핵심 기능</h3>
          </div>
          <div className={`${styles.featuresGrid} ${styles.animateUp}`}>
            <article className={styles.featureCard}>
              <span className={styles.featureNumber}>01</span>
              <h4>ZeroMap</h4>
              <p>이미지 기반 인터랙티브 지도로 인천 지역 제로웨이스트샵 위치를 직관적으로 탐색</p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureNumber}>02</span>
              <h4>매장 상세정보</h4>
              <p>영업시간, 취급 품목, 연락처 등 핵심 정보를 카드 형태로 일목요연하게 제공</p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureNumber}>03</span>
              <h4>제보하기</h4>
              <p>사용자가 새로운 매장 정보를 직접 제보할 수 있는 참여형 기능</p>
            </article>
          </div>
        </div>
      </section>

      {/* Result Image */}
      <section className={styles.resultSection}>
        <div className={styles.container}>
          <div className={`${styles.imageBlock} ${styles.animateUp}`}>
            <span className={styles.imageLabel}>Result</span>
            {/* <img src={zerowayImg} alt="ZeroWay 완성 화면" className={styles.fullImage} /> */}
            <img
              src={zerowayPlan2Img}
              alt="ZeroWay 결과·기획 참고 화면"
              className={styles.fullImage}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={`${styles.ctaContent} ${styles.animateUp}`}>
            <h2 className={styles.ctaTitle}>프로젝트 살펴보기</h2>
            <div className={styles.ctaButtons}>
              <a
                href="https://zeroway.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                사이트 바로가기
              </a>
              <a
                href="https://www.figma.com/design/a9LA8Sb2jt8cBCygKJ1j9p/ZeroWay?node-id=15-95"
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

      {/* Footer Navigation */}
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
