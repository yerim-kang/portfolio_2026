/**
 * Skills Animation
 * 스킬 아이콘 순차 등장 애니메이션 (ScrollTrigger)
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface SkillsAnimationTargets {
  container: HTMLElement | null;
  title: HTMLElement | null;
  swiper: HTMLElement | null;
}

/**
 * Skills 섹션 진입 애니메이션
 */
export const createSkillsAnimation = (targets: SkillsAnimationTargets) => {
  const { container, title, swiper } = targets;

  if (!container) return;

  // Timeline 생성
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
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
  if (swiper) {
    gsap.set(swiper, { autoAlpha: 0, y: 40 });
  }

  // 애니메이션 시퀀스
  if (title) {
    tl.to(title, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
    });
  }

  if (swiper) {
    tl.to(
      swiper,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    );
  }

  return tl;
};

