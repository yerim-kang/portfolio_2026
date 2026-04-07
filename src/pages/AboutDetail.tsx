import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutmeImg from '../assets/images/aboutme.jpg';
import figmaImg from '../assets/images/figma.png';
import htmlImg from '../assets/images/html.png';
import cssImg from '../assets/images/css.png';
import javascriptImg from '../assets/images/javascript.png';
import jqueryImg from '../assets/images/jquery.webp';
import sassImg from '../assets/images/sass.png';
import bootstrapImg from '../assets/images/bootstrap.png';
import cursorImg from '../assets/images/cursor.png';
import photoshopImg from '../assets/images/photoshop.png';
import githubImg from '../assets/images/github.png';
import slackImg from '../assets/images/slack.png';
import wordpressImg from '../assets/images/wordpress.png';
import gsapIcon from '../assets/images/gsap.webp';
import swiperImg from '../assets/images/swiper.svg';
import netlifyImg from '../assets/images/netlify.webp';
import midjourneyImg from '../assets/images/midjourney.png';
import geminiImg from '../assets/images/gemini.png';
import chatgptImg from '../assets/images/chatgpt.png';
import notionImg from '../assets/images/notion.png';
import googleAdsenseImg from '../assets/images/google-adsense.png';
import googleSearchConsoleImg from '../assets/images/google-search-console.png';
import naverAnalyticsImg from '../assets/images/naver-analytics.png';
import naverSearchAdvisorImg from '../assets/images/naver-search-advisor.png';
import styles from './AboutDetail.module.css';

gsap.registerPlugin(ScrollTrigger);

const notionUrl = 'https://dog-mandolin-7f7.notion.site/2b94be4a7f1c8045afafcc146230e00a?source=copy_link';

const seoItems = [
  {
    title: 'Google AdSense',
    image: googleAdsenseImg,
    alt: 'Google AdSense',
    description:
      '사이트 정책·콘텐츠 품질을 맞춰 광고 승인을 준비하고, 광고 단위 배치와 수익·클릭 데이터를 보며 콘텐츠·레이아웃을 조정할 수 있습니다.',
  },
  {
    title: 'Google Search Console',
    image: googleSearchConsoleImg,
    alt: 'Google Search Console',
    description:
      '사이트맵 제출·색인 상태 확인, 검색 실적(노출·클릭·쿼리) 분석으로 어떤 페이지가 검색에 잘 노출되는지 파악하고 크롤링·모바일 사용성 이슈를 점검할 수 있습니다.',
  },
  {
    title: 'Naver Analytics',
    image: naverAnalyticsImg,
    alt: 'Naver Analytics',
    description:
      '네이버 유입·체류·이탈·경로 등 방문 행동을 숫자로 확인해 인기 페이지와 개선이 필요한 구간을 찾고, 콘텐츠·내비게이션을 데이터 기반으로 다듬을 수 있습니다.',
  },
  {
    title: 'Naver Search Advisor',
    image: naverSearchAdvisorImg,
    alt: 'Naver Search Advisor',
    description:
      '네이버 검색에 사이트를 등록하고 수집·노출 상태를 확인하며, 사이트 진단으로 검색에 유리한 구조·메타·연동 여부를 간단히 점검할 수 있습니다.',
  },
] as const;

const skillGroups = [
  {
    category: '퍼블리싱 · 마크업',
    items: [
      { name: 'HTML', icon: htmlImg },
      { name: 'CSS', icon: cssImg },
      { name: 'JavaScript', icon: javascriptImg },
      { name: 'jQuery', icon: jqueryImg },
      { name: 'Sass', icon: sassImg },
      { name: 'Bootstrap', icon: bootstrapImg },
      { name: 'WordPress', icon: wordpressImg },
    ],
  },
  {
    category: '인터랙션 · UI',
    items: [
      { name: 'Swiper', icon: swiperImg },
      { name: 'GSAP', icon: gsapIcon },
    ],
  },
  {
    category: '디자인 · 에디터',
    items: [
      { name: 'Figma', icon: figmaImg },
      { name: 'Photoshop', icon: photoshopImg },
      { name: 'Cursor', icon: cursorImg },
    ],
  },
  {
    category: '생성형 AI',
    items: [
      { name: 'ChatGPT', icon: chatgptImg },
      { name: 'Midjourney', icon: midjourneyImg },
      { name: 'Gemini', icon: geminiImg },
    ],
  },
  {
    category: '협업 · 배포 · 문서',
    items: [
      { name: 'GitHub', icon: githubImg },
      { name: 'Slack', icon: slackImg },
      { name: 'Netlify', icon: netlifyImg },
      { name: 'Notion', icon: notionImg },
    ],
  },
] as const;

export const AboutDetail = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.profileSection}`, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from(`.${styles.infoSection}`, {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out',
      });

      gsap.from(`.${styles.skillsSection}`, {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: `.${styles.skillsSection}`,
          start: 'top 85%',
        },
      });

      gsap.from(`.${styles.seoSection}`, {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: `.${styles.seoSection}`,
          start: 'top 85%',
        },
      });

      gsap.from(`.${styles.actions}`, {
        y: 20,
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: `.${styles.actions}`,
          start: 'top 92%',
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.aboutDetail} ref={pageRef}>
      <Container>
        {/* 프로필 상단 영역 */}
        <section className={styles.profileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <img src={aboutmeImg} alt="강예림 프로필" />
            </div>
            <div className={styles.profileInfo}>
              <span className={styles.badge}>Web Publisher</span>
              <h1 className={styles.name}>
                <span className="mona12-kr mona12-bold">강예림</span>
              </h1>
              <p className={styles.intro}>
                사용자의 요구를 읽을 줄 아는 디자이너이자 웹퍼블리셔입니다.
                <br />
                꼼꼼함과 커뮤니케이션 능력을 바탕으로 더 나은 사용 경험을 만듭니다.
              </p>
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactIcon}>📧</span>
                  ruinoa21@gmail.com
                </li>
                <li>
                  <span className={styles.contactIcon}>📱</span>
                  010-5243-9283
                </li>
                <li>
                  <span className={styles.contactIcon}>📍</span>
                  인천시 남동구 구월동
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 정보 섹션 */}
        <section className={styles.infoSection}>
          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <h3>경력</h3>
              <div className={styles.infoItem}>
                <span className={styles.itemPeriod}>2015.12 - 2025.05</span>
                <p className={styles.itemTitle}>한국연락사무소(SPPC)</p>
                <p className={styles.itemDesc}>대표님 비서 · 9년 5개월</p>
              </div>
            </article>

            <article className={styles.infoCard}>
              <h3>학력</h3>
              <div className={styles.infoItem}>
                <span className={styles.itemPeriod}>2013.03 - 2015.02</span>
                <p className={styles.itemTitle}>숭의여자대학교</p>
                <p className={styles.itemDesc}>비서행정과 · 학점 3.8</p>
              </div>
            </article>

            <article className={styles.infoCard}>
              <h3>자격증</h3>
              <div className={styles.certList}>
                <div className={styles.certItem}>
                  <span className={styles.certYear}>2025</span>
                  <span>웹디자인개발기능사</span>
                </div>
                <div className={styles.certItem}>
                  <span className={styles.certYear}>2025</span>
                  <span>GTQ 1급</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 스킬 섹션 — 메인과 같이 종류별 구분 */}
        <section className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Skills &amp; Tools</h2>
          <p className={styles.skillsLead}>퍼블리싱·디자인 작업에 사용하는 주요 도구입니다.</p>
          <div className={styles.skillGroups}>
            {skillGroups.map((group) => (
              <div key={group.category} className={styles.skillGroup}>
                <h3 className={styles.skillGroupTitle}>{group.category}</h3>
                <ul className={styles.skillGrid}>
                  {group.items.map((skill) => (
                    <li key={skill.name} className={styles.skillItem}>
                      <img src={skill.icon} alt={skill.name} width={22} height={22} />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SEO */}
        <section className={styles.seoSection} aria-labelledby="about-seo-heading">
          <h2 id="about-seo-heading" className={styles.sectionTitle}>
            SEO · 검색 최적화
          </h2>
          <p className={styles.seoLead}>
            메타 태그·시맨틱 마크업·사이트맵 등 기본 SEO를 바탕으로, 구글·네이버 각각의 웹마스터·통계
            도구에 사이트를 연동하면 색인·검색 성과·유입 데이터를 확인하며 지속적으로 개선할 수 있습니다.
            아래는 실제로 제가 연동하여 분석한 결과를 확인할 수 있습니다.
          </p>
          <ul className={styles.seoGrid}>
            {seoItems.map((item) => (
              <li key={item.title} className={styles.seoCard}>
                <div className={styles.seoCardImageWrap}>
                  <img src={item.image} alt={item.alt} className={styles.seoCardImage} loading="lazy" />
                </div>
                <h3 className={styles.seoCardTitle}>{item.title}</h3>
                <p className={styles.seoCardDesc}>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 하단 버튼 */}
        <section className={styles.actions}>
          <a
            href={notionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            노션에서 더 보기
          </a>
          <Link to="/" className={styles.secondaryButton}>
            메인으로
          </Link>
        </section>
      </Container>
    </main>
  );
};
