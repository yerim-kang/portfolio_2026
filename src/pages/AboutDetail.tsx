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
import styles from './AboutDetail.module.css';

gsap.registerPlugin(ScrollTrigger);

const notionUrl = 'https://dog-mandolin-7f7.notion.site/2b94be4a7f1c8045afafcc146230e00a?source=copy_link';

const skillCategories = [
  {
    title: 'Language',
    items: [
      { name: 'HTML', icon: htmlImg },
      { name: 'CSS', icon: cssImg },
      { name: 'JavaScript', icon: javascriptImg },
    ],
  },
  {
    title: 'Framework & Library',
    items: [
      { name: 'jQuery', icon: jqueryImg },
      { name: 'Sass', icon: sassImg },
      { name: 'Bootstrap', icon: bootstrapImg },
      { name: 'Swiper', icon: swiperImg },
      { name: 'GSAP', icon: gsapIcon },
    ],
  },
  {
    title: 'Design Tool',
    items: [
      { name: 'Figma', icon: figmaImg },
      { name: 'Photoshop', icon: photoshopImg },
    ],
  },
  {
    title: 'AI Tool',
    items: [
      { name: 'Cursor', icon: cursorImg },
      { name: 'Midjourney', icon: midjourneyImg },
      { name: 'Gemini', icon: geminiImg },
      { name: 'ChatGPT', icon: chatgptImg },
    ],
  },
  {
    title: 'Development Tool',
    items: [
      { name: 'GitHub', icon: githubImg },
      { name: 'Slack', icon: slackImg },
      { name: 'WordPress', icon: wordpressImg },
      { name: 'Netlify', icon: netlifyImg },
    ],
  },
];

export const AboutDetail = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rightRef.current) return;

    const blocks = rightRef.current.querySelectorAll(`.${styles.block}`);
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.heroSection}`, {
        y: 30,
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power2.out',
      });

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          x: -40,
          autoAlpha: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
        });
      }

      blocks.forEach((block, i) => {
        gsap.from(block, {
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          delay: 0.15 + i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        });
      });

      gsap.from(`.${styles.actions}`, {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: `.${styles.actions}`,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.aboutDetail} ref={pageRef}>
      <Container>
        <section className={styles.heroSection}>
          <p className={styles.kicker}>About Detail</p>
          <h1 className={styles.title}>웹 퍼블리셔 강예림</h1>
          <p className={styles.lead}>
            안녕하세요. <strong>사용자의 요구를 읽을 줄 아는 디자이너이자 웹퍼블리셔</strong> 강예림 입니다.
            <br />
            <strong>꼼꼼함</strong>과 <strong>커뮤니케이션 능력</strong>을 바탕으로 사용자의 흐름을 이해하고,
            더 나은 사용 경험을 만드는 작업에 집중하고 있습니다.
          </p>
        </section>

        <div className={styles.layout}>
          <aside className={styles.leftCol} ref={imageRef}>
            <div className={styles.imageWrap}>
              <img src={aboutmeImg} alt="웹 퍼블리셔 강예림 프로필" />
            </div>
          </aside>

          <div className={styles.rightCol} ref={rightRef}>
            <article className={styles.block}>
              <h3>연락처</h3>
              <ul className={styles.contactList}>
                <li>T : 010-5243-9283</li>
                <li>A : 인천시 남동구 구월동</li>
                <li>E : ruinoa21@gmail.com</li>
              </ul>
            </article>

            <article className={styles.block}>
              <h3>학력사항</h3>
              <ul className={styles.timelineList}>
                <li>
                  <span className={styles.period}>2013.03 - 2015.03</span>
                  <p>숭의여자대학교 | 비서학과 (학점 3.8)</p>
                </li>
                <li>
                  <span className={styles.period}>2009.03 - 2011.03</span>
                  <p>인천여자고등학교</p>
                </li>
              </ul>
            </article>

            <article className={styles.block}>
              <h3>경력사항</h3>
              <ul className={styles.timelineList}>
                <li>
                  <span className={styles.period}>2015.12 - 2025.05 (9년 5개월)</span>
                  <p>한국연락사무소(SPPC) | 대표님 비서</p>
                  <p>- 상사의 스케줄 관리 및 업무 보좌</p>
                </li>
              </ul>
            </article>

            <article className={styles.block}>
              <h3>자격증</h3>
              <ul className={styles.timelineList}>
                <li>
                  <span className={styles.period}>2025.12</span>
                  <p>웹디자인개발기능사</p>
                </li>
                <li>
                  <span className={styles.period}>2025.08</span>
                  <p>GTQ 1급</p>
                </li>
              </ul>
            </article>

            <article className={styles.block}>
              <h3>스킬</h3>
              <div className={styles.skillCategories}>
                {skillCategories.map((category) => (
                  <section key={category.title} className={styles.skillCategoryBlock}>
                    <h4 className={styles.skillCategoryTitle}>{category.title}</h4>
                    <ul className={styles.skillCategoryGrid}>
                      {category.items.map((skill) => (
                        <li key={skill.name} className={styles.skillCard}>
                          <img src={skill.icon} alt={skill.name} loading="lazy" />
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>

        <section className={styles.actions}>
          <a href={notionUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
            노션 원문 보기
          </a>
          <Link to="/#about" className={styles.secondaryButton}>
            메인으로 돌아가기
          </Link>
        </section>
      </Container>
    </main>
  );
};
