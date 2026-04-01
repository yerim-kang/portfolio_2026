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
  grid: HTMLElement | null;
}

/**
 * Skills 섹션 진입 애니메이션
 */
export const createSkillsAnimation = (targets: SkillsAnimationTargets) => {
  const { container, title, grid } = targets;

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

  const categoryBlocks = grid
    ? (Array.from(grid.children) as HTMLElement[])
    : [];

  // 초기 상태 설정
  if (title) {
    gsap.set(title, { autoAlpha: 0, y: 30 });
  }
  if (grid) {
    gsap.set(grid, { autoAlpha: 1, y: 0 });
  }
  if (categoryBlocks.length > 0) {
    gsap.set(categoryBlocks, {
      autoAlpha: 0,
      y: 26,
      scale: 0.98,
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

  if (categoryBlocks.length > 0) {
    tl.to(
      categoryBlocks,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.52,
        ease: 'power3.out',
        stagger: {
          amount: 0.45,
          from: 'start',
        },
      },
      '-=0.25'
    );
  }

  return tl;
};

