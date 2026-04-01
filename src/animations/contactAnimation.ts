/**
 * Contact Animation
 * Contact 섹션 진입 애니메이션 (ScrollTrigger)
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ContactAnimationTargets {
  container: HTMLElement | null;
  title: HTMLElement | null;
  email: HTMLElement | null;
  text: HTMLElement | null;
  info: HTMLElement | null;
  github: HTMLElement | null; // 소셜 링크 컨테이너
}

/**
 * Contact 섹션 진입 애니메이션
 */
export const createContactAnimation = (targets: ContactAnimationTargets) => {
  const { container, title, email, text, info, github } = targets;

  if (!container) return;

  // Timeline 생성
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 92%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
    defaults: {
      ease: 'power3.out',
    },
  });

  // 초기 상태 설정
  if (title) {
    gsap.set(title, { autoAlpha: 0, y: 30 });
  }
  if (email) {
    gsap.set(email, { autoAlpha: 0, scale: 0.9, y: 20 });
  }
  if (text) {
    gsap.set(text, { autoAlpha: 0, y: 20 });
  }
  if (info) {
    gsap.set(info, { autoAlpha: 0, y: 20 });
  }
  if (github) {
    gsap.set(github, { autoAlpha: 0, y: 20 });
  }

  // 애니메이션 시퀀스
  if (title) {
    tl.to(title, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
    });
  }

  if (email) {
    tl.to(
      email,
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
      },
      '-=0.4'
    );
  }

  if (text) {
    tl.to(
      text,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
      },
      '-=0.3'
    );
  }

  if (info) {
    tl.to(
      info,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
      },
      '-=0.3'
    );
  }

  if (github) {
    tl.to(
      github,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
      },
      '-=0.3'
    );
  }

  return tl;
};

