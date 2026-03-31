/**
 * useGsap Hook
 * GSAP 애니메이션을 React 생명주기에 안전하게 통합
 * - cleanup 자동 처리
 * - ref 기반 요소 타겟팅
 */

import { useEffect } from 'react';
import type { MutableRefObject } from 'react';
import gsap from 'gsap';

type GsapCallback = () => void | (() => void);

interface UseGsapOptions {
  dependencies?: any[];
  scope?: MutableRefObject<HTMLElement | null>;
}

export const useGsap = (
  callback: GsapCallback,
  options: UseGsapOptions = {}
) => {
  const { dependencies = [], scope } = options;

  useEffect(() => {
    // GSAP Context API 사용 - React와의 통합을 위한 권장 방식
    const ctx = gsap.context(() => {
      callback();
    }, scope?.current || undefined);

    // cleanup - 컴포넌트 언마운트 시 애니메이션 정리
    return () => ctx.revert();
  }, dependencies);
};

/**
 * GSAP 인스턴스 반환 (선택적)
 */
export const useGsapInstance = () => {
  return gsap;
};

