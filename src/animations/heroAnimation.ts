/**
 * Hero Animation
 * GSAP 애니메이션 로직을 별도 파일로 분리
 * 
 * 실무 관점:
 * - 컴포넌트와 애니메이션 로직 분리로 유지보수성 향상
 * - 타임라인 기반 시퀀스 애니메이션
 * - 재사용 가능한 애니메이션 함수
 */

import gsap from 'gsap';

export interface HeroAnimationTargets {
  title: HTMLElement | null;
  subtitle: HTMLElement | null;
  cta: HTMLElement | null;
  decorLine: HTMLElement | null;
  visual: HTMLElement | null;
}

/**
 * Hero 진입 애니메이션
 * - 순차적으로 요소들이 나타나는 시퀀스
 * - 부드러운 fade + slide 효과
 */
export const createHeroEntranceAnimation = (targets: HeroAnimationTargets) => {
  const { title, subtitle, cta, decorLine, visual } = targets;

  // null 체크 - 모든 요소가 존재하는지 확인
  const validTargets = [title, subtitle, cta, decorLine, visual].filter(Boolean);
  
  if (validTargets.length === 0) {
    console.warn('Hero animation: No valid targets found');
    return gsap.timeline();
  }

  // Timeline 생성 - 순차 실행 제어
  const tl = gsap.timeline({
    defaults: {
      ease: 'power3.out',
      duration: 1,
    },
  });

  // 초기 상태 설정 (null이 아닌 요소만)
  const elementsToHide = [title, subtitle, cta, decorLine, visual].filter(Boolean) as HTMLElement[];
  if (elementsToHide.length > 0) {
    gsap.set(elementsToHide, {
      autoAlpha: 0,
    });
  }

  // 애니메이션 시퀀스 (참고 사이트 스타일: 부드러운 페이드인)
  if (title) {
    tl.fromTo(
      title,
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }

  if (subtitle) {
    tl.fromTo(
      subtitle,
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.5'
    );
  }

  if (cta) {
    tl.fromTo(
      cta,
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.4'
    );
  }

  if (visual) {
    tl.fromTo(
      visual,
      {
        scale: 0.95,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.8'
    );
  }

  return tl;
};

/**
 * 스크롤 기반 패럴랙스 효과
 * - Hero 영역이 스크롤 시 자연스럽게 사라지는 효과
 */
export const createHeroScrollAnimation = (
  container: HTMLElement,
  content: HTMLElement
) => {
  return gsap.to(content, {
    yPercent: -30,
    autoAlpha: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
};

/**
 * 텍스트 분할 애니메이션 (고급)
 * - 글자 단위로 순차 등장
 * - 타이틀에 강조 효과를 주고 싶을 때 사용
 */
export const createTextRevealAnimation = (element: HTMLElement) => {
  const text = element.textContent || '';
  element.innerHTML = text
    .split('')
    .map((char) => `<span style="display:inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  const chars = element.querySelectorAll('span');

  return gsap.fromTo(
    chars,
    {
      autoAlpha: 0,
      y: 20,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.03,
      ease: 'power2.out',
    }
  );
};

