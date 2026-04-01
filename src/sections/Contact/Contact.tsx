/**
 * Contact Section Component
 * 연락처 섹션 - GSAP 애니메이션 적용
 */

import { useRef } from 'react';
import { Container } from '../../components/Container';
import { SectionTitle } from '../../components/SectionTitle';
import { useGsap } from '../../hooks/useGsap';
import { createContactAnimation } from '../../animations/contactAnimation';
import githubImg from '../../assets/images/github.png';
import notionImg from '../../assets/images/notion.png';
import styles from './Contact.module.css';

export const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);

  // GSAP 애니메이션
  useGsap(() => {
    if (contactRef.current) {
      createContactAnimation({
        container: contactRef.current,
        title: titleRef.current,
        email: emailRef.current,
        text: textRef.current,
        info: null,
        github: socialLinksRef.current,
      });
    }
  }, { dependencies: [] });

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = 'mailto:ruinoa21@gmail.com';
  };

  return (
    <section id="contact" ref={contactRef} className={styles.contact}>
      <Container>
        <div className={styles.contactContent}>
          <div ref={titleRef} className={styles.contactTitleWrapper}>
            <SectionTitle
              size="large"
              align="center"
              subtitle="함께 일할 퍼블리셔를 찾고 계신가요?"
            >
              Get In Touch
            </SectionTitle>
          </div>

          <div className={styles.contactMain}>
            {/* 메일 주소 - 크게 표시 */}
            <div className={styles.emailSection}>
              <a
                ref={emailRef}
                href="mailto:ruinoa21@gmail.com"
                className={styles.emailLink}
                onClick={handleEmailClick}
              >
                ruinoa21@gmail.com
              </a>
            </div>

            {/* 설명 텍스트 */}
            <p ref={textRef} className={styles.contactText}>
              함께 만들고, 함께 고민하고 싶습니다 !
              <br />
              새로운 프로젝트나 협업에 관심이 있으시다면 언제든 연락주세요.
              <br />
              빠른 시일 내에 답변 드리겠습니다.
            </p>

            {/* 소셜 링크 */}
            <div ref={socialLinksRef} className={styles.socialLinks}>
              <a
                href="https://github.com/yerim-kang/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <img src={githubImg} alt="GitHub 프로필로 이동" loading="lazy" />
              </a>
              <a
                href="https://dog-mandolin-7f7.notion.site/2b94be4a7f1c8045afafcc146230e00a?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <img src={notionImg} alt="Notion 포트폴리오로 이동" loading="lazy" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className={styles.copyright}>
            <p>© 2026 All rights reserved</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

