import { useRef, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hangyeolVideo from '../../assets/images/Mockup4.mp4';
import hangyeolImg from '../../assets/images/hangyeol.jpg';
import hangyeolBeforeImg from '../../assets/images/hangyeol_before.png';
import styles from './ZerowayDetail.module.css';
import type { ProjectDetailOutletContext } from './projectDetailOutletContext';

gsap.registerPlugin(ScrollTrigger);

const SITE_URL = 'https://mwpdemo64188.mycafe24.com/';

export const HangyeolLandingDetail = () => {
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
            <span className={styles.year}>2026</span>
          </div>
          <h1 className={styles.heroTitle}>
            법무법인 한결
            <span className={styles.heroSubtitle}>전세사기 전문 법률 랜딩페이지</span>
          </h1>
        </div>
      </section>

      <section className={styles.heroVisual}>
        <video
          className={styles.heroVideo}
          src={hangyeolVideo}
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
                전세사기 피해 상담·소송을 전문으로 하는 법무법인을 소개하는 WordPress 기반 랜딩페이지입니다.
                법률 서비스에 필요한 신뢰와 전문성이 먼저 전달되도록 정보 구조와 콘텐츠 흐름을 설계했습니다.
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
                  <dd>2026.01</dd>
                </div>
                <div className={styles.infoItem}>
                  <dt>Role</dt>
                  <dd className={styles.roleDetail}>
                    기획 · 디자인 · 구축{' '}
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
                민감한 사안,
                <br />
                신뢰가 먼저
              </h3>
            </div>
            <div className={`${styles.splitRight} ${styles.animateUp}`}>
              <p className={styles.bodyText}>
                법률·피해 구제 분야는 사용자가 불안과 의심을 동시에 가지기 쉽습니다. 자극적인 카피만 앞세우면
                신뢰가 떨어지고, 반대로 정보만 나열하면 공감과 행동(상담 신청)으로 이어지기 어렵습니다.
                랜딩은 짧은 체류 안에 문제 공감, 전문성, 연락 경로를 명확히 보여줘야 합니다.
              </p>
              <ul className={styles.painPoints}>
                <li>법률 서비스는 ‘왜 이 로펌인가’가 설득의 출발점</li>
                <li>피해 상담 문의는 심리적 문턱이 높아 CTA가 과하지 않으면서도 분명해야 함</li>
                <li>운영 단계에서 콘텐츠 수정이 잦을 수 있어 관리 구조가 중요</li>
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
                공감 → 전문성 →
                <br />
                상담 유도
              </h3>
            </div>
            <div className={styles.splitRight}>
              <p className={styles.bodyText}>
                문제 공감 → 전문성 제시 → 상담 유도 순으로 정보 구조를 기획했습니다. 섹션별 메시지를 먼저
                정리한 뒤 WordPress로 콘텐츠 관리와 반복 수정에 대응할 수 있게 구축했습니다. 제작 과정에서는
                Cursor AI를 보조 도구로 활용해 카피·구조 수정 속도를 높였습니다.
              </p>
            </div>
          </div>
          <div className={`${styles.approachVisual} ${styles.animateUp}`}>
            <figure className={styles.imageBlock}>
              <span className={styles.imageLabel}>Approach</span>
              <img
                src={hangyeolBeforeImg}
                alt="법무법인 한결 랜딩 기획·구조 참고"
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
            <h3 className={styles.sectionTitle}>신뢰와 무게감 있는 톤</h3>
            <p className={styles.bodyText}>
              법률 분야에 맞게 과장 없이 차분한 타이포와 여백, 포인트 컬러로 전문성과 안정감을 동시에
              전달하도록 했습니다. 아래는 랜딩 키비주얼·톤 참고 화면입니다.
            </p>
            <figure className={styles.brandColorsFigure}>
              <img
                src={hangyeolImg}
                alt="법무법인 한결 랜딩 브랜드·키비주얼 참고"
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
                <h4>CMS</h4>
                <ul className={styles.techList}>
                  <li>WordPress</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h4>Assist</h4>
                <ul className={styles.techList}>
                  <li>Cursor AI</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h4>Infra</h4>
                <ul className={styles.techList}>
                  <li>Cafe24 호스팅</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h4>Focus</h4>
                <ul className={styles.techList}>
                  <li>콘텐츠 운영·수정 대응</li>
                </ul>
              </div>
              <div className={styles.techCategory}>
                <h4>Image</h4>
                <ul className={styles.techList}>
                  <li>ImageFX</li>
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
              src={hangyeolImg}
              alt="법무법인 한결 랜딩 완성 화면"
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
              <h4>문제 공감 · Hero</h4>
              <p>전세사기·피해 상담 맥락에서 출발해 방문자의 상황에 먼저 공감하도록 구성</p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureNumber}>02</span>
              <h4>전문성 블록</h4>
              <p>법인 소개·서비스 영역을 스캔하기 쉽게 배치해 신뢰 형성</p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureNumber}>03</span>
              <h4>상담 CTA</h4>
              <p>연락·상담 요청으로 자연스럽게 이어지는 하단 전환 구간</p>
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
