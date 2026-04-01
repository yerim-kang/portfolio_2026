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
import styles from './AboutDetail.module.css';

gsap.registerPlugin(ScrollTrigger);

const notionUrl = 'https://dog-mandolin-7f7.notion.site/2b94be4a7f1c8045afafcc146230e00a?source=copy_link';

const skills = [
  { name: 'HTML', icon: htmlImg },
  { name: 'CSS', icon: cssImg },
  { name: 'JavaScript', icon: javascriptImg },
  { name: 'jQuery', icon: jqueryImg },
  { name: 'Sass', icon: sassImg },
  { name: 'Bootstrap', icon: bootstrapImg },
  { name: 'Swiper', icon: swiperImg },
  { name: 'GSAP', icon: gsapIcon },
  { name: 'Figma', icon: figmaImg },
  { name: 'Photoshop', icon: photoshopImg },
  { name: 'Cursor', icon: cursorImg },
  { name: 'ChatGPT', icon: chatgptImg },
  { name: 'Midjourney', icon: midjourneyImg },
  { name: 'Gemini', icon: geminiImg },
  { name: 'GitHub', icon: githubImg },
  { name: 'Slack', icon: slackImg },
  { name: 'WordPress', icon: wordpressImg },
  { name: 'Netlify', icon: netlifyImg },
  { name: 'Notion', icon: notionImg },
];

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
              <h1 className={styles.name}>강예림</h1>
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
                <span className={styles.itemPeriod}>2013.03 - 2015.03</span>
                <p className={styles.itemTitle}>숭의여자대학교</p>
                <p className={styles.itemDesc}>비서학과 · 학점 3.8</p>
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

        {/* 스킬 섹션 */}
        <section className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <ul className={styles.skillGrid}>
            {skills.map((skill) => (
              <li key={skill.name} className={styles.skillItem}>
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
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
