/**
 * useMediaQuery Hook
 * 반응형 디자인을 위한 미디어쿼리 감지 훅
 * 실무에서는 breakpoint별 UI 변경 시 필수적으로 사용
 */

import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // 초기값 설정
    setMatches(mediaQuery.matches);

    // 변경 감지 리스너
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // 구형 브라우저 호환
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
};

// 자주 사용하는 breakpoint 훅
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');

