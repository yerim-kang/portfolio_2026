/**
 * Design Animation
 * 디자인 카드 순차 등장 애니메이션 (ScrollTrigger)
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface DesignAnimationTargets {
  container: HTMLElement | null;
  title: HTMLElement | null;
  cards: HTMLElement[];
}

/**
 * Design 섹션 진입 애니메이션
 */
export const createDesignAnimation = (targets: DesignAnimationTargets) => {
  const { container, title, cards } = targets;

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
  if (cards.length > 0) {
    gsap.set(cards, {
      y: 40,
      scale: 0.95,
      autoAlpha: 0,
    });
  }

  // 애니메이션 시퀀스
  if (title) {
    tl.to(title, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
    });
  }

  if (cards.length > 0) {
    tl.to(
      cards,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
        stagger: {
          amount: 0.6,
          from: 'start',
        },
      },
      '-=0.3'
    );
  }

  return tl;
};

