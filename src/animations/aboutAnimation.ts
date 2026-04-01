/**
 * About Animation
 * About 섹션 진입 애니메이션 (ScrollTrigger 사용)
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface AboutAnimationTargets {
  container: HTMLElement | null;
  image: HTMLElement | null;
  title: HTMLElement | null;
  description: HTMLElement | null;
  contentText: HTMLElement | null;
  education: HTMLElement | null;
  button: HTMLElement | null;
}

/**
 * About 섹션 진입 애니메이션 (ScrollTrigger)
 */
export const createAboutAnimation = (targets: AboutAnimationTargets) => {
  const { container, image, title, description, contentText, education, button } = targets;

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

  const contentParagraphs = contentText
    ? (Array.from(contentText.querySelectorAll('p')) as HTMLElement[])
    : [];
  const educationItems = education
    ? (Array.from(education.querySelectorAll('[class*="educationItem"]')) as HTMLElement[])
    : [];

  // 초기 상태 설정
  if (image) {
    gsap.set(image, { autoAlpha: 0, x: -50, scale: 0.95 });
  }
  if (title) {
    gsap.set(title, { autoAlpha: 0, y: 30 });
  }
  if (description) {
    gsap.set(description, { autoAlpha: 0, y: 20 });
  }
  if (contentText) {
    gsap.set(contentText, { autoAlpha: 0, y: 20 });
  }
  if (contentParagraphs.length > 0) {
    gsap.set(contentParagraphs, { autoAlpha: 0, y: 14 });
  }
  if (education) {
    gsap.set(education, { autoAlpha: 0, y: 20 });
  }
  if (educationItems.length > 0) {
    gsap.set(educationItems, { autoAlpha: 0, y: 12 });
  }
  if (button) {
    gsap.set(button, { autoAlpha: 0, y: 20 });
  }

  // 애니메이션 시퀀스
  if (image) {
    tl.to(image, {
      autoAlpha: 1,
      x: 0,
      scale: 1,
      duration: 0.6,
    });
    // 텍스트 등장과 겹치도록 이미지의 부유 모션은 별도 트윈으로 실행
    gsap.to(image, {
      y: -6,
      duration: 1.8,
      ease: 'sine.inOut',
      repeat: 1,
      yoyo: true,
      delay: 0.2,
    });
  }

  if (title) {
    tl.to(
      title,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
      },
      '<'
    );
  }

  if (description) {
    tl.to(
      description,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
      },
      '-=0.2'
    );
  }

  if (contentText) {
    tl.to(
      contentText,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.32,
      },
      '-=0.2'
    );
  }
  if (contentParagraphs.length > 0) {
    tl.to(
      contentParagraphs,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.28,
        stagger: 0.09,
      },
      '-=0.05'
    );
  }

  if (education) {
    tl.to(
      education,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.38,
      },
      '-=0.25'
    );
  }
  if (educationItems.length > 0) {
    tl.to(
      educationItems,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.08,
      },
      '-=0.08'
    );
  }

  if (button) {
    tl.to(
      button,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.35,
      },
      '-=0.12'
    );
  }

  return tl;
};

