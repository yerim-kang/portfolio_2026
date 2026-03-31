/**
 * Typing Animation
 * 타이핑 효과 애니메이션 (타이핑 후 지워지는 효과)
 * 참고 사이트 스타일
 */

interface TypingOptions {
  text: string;
  element: HTMLElement;
  speed?: number; // 타이핑 속도 (ms)
  deleteSpeed?: number; // 삭제 속도 (ms)
  pauseTime?: number; // 삭제 전 대기 시간 (ms)
  onComplete?: () => void;
}

/**
 * 타이핑 애니메이션 생성
 * - 텍스트를 한 글자씩 타이핑
 * - 완성 후 잠시 대기
 * - 한 글자씩 지워짐
 * - 다시 타이핑 시작 (무한 반복)
 */
export const createTypingAnimation = (options: TypingOptions) => {
  const {
    text,
    element,
    speed = 100,
    deleteSpeed = 50,
    pauseTime = 2000,
    onComplete, // Reserved for future use
  } = options;
  
  // Suppress unused parameter warning
  void onComplete;

  let currentText = '';
  let isDeleting = false;
  let charIndex = 0;
  let timeoutId: ReturnType<typeof setTimeout>;

  const type = () => {
    if (!element) return;

    if (!isDeleting && charIndex < text.length) {
      // 타이핑 중
      currentText = text.substring(0, charIndex + 1);
      element.textContent = currentText;
      charIndex++;
      timeoutId = setTimeout(type, speed);
    } else if (!isDeleting && charIndex === text.length) {
      // 타이핑 완료, 잠시 대기
      isDeleting = true;
      timeoutId = setTimeout(type, pauseTime);
    } else if (isDeleting && currentText.length > 0) {
      // 삭제 중
      currentText = currentText.substring(0, currentText.length - 1);
      element.textContent = currentText;
      timeoutId = setTimeout(type, deleteSpeed);
    } else if (isDeleting && currentText.length === 0) {
      // 삭제 완료, 다시 시작
      isDeleting = false;
      charIndex = 0;
      timeoutId = setTimeout(type, speed);
    }
  };

  // 애니메이션 시작
  type();

  // cleanup 함수 반환
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (element) {
      element.textContent = '';
    }
  };
};

/**
 * GSAP 기반 타이핑 애니메이션 (더 부드러운 효과)
 */
export const createGsapTypingAnimation = (
  element: HTMLElement,
  texts: string[],
  options?: {
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
  }
) => {
  const { typingSpeed = 0.05, deletingSpeed = 0.03, pauseTime = 2 } = options || {};

  let currentTextIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let animationId: number;

  const animate = () => {
    if (!element) return;

    const currentText = texts[currentTextIndex];

    if (!isDeleting && currentCharIndex <= currentText.length) {
      // 타이핑 중
      element.textContent = currentText.substring(0, currentCharIndex);
      currentCharIndex++;
      animationId = requestAnimationFrame(() => {
        setTimeout(animate, typingSpeed * 1000);
      });
    } else if (!isDeleting && currentCharIndex > currentText.length) {
      // 타이핑 완료, 대기
      isDeleting = true;
      animationId = requestAnimationFrame(() => {
        setTimeout(animate, pauseTime * 1000);
      });
    } else if (isDeleting && currentCharIndex > 0) {
      // 삭제 중
      currentCharIndex--;
      element.textContent = currentText.substring(0, currentCharIndex);
      animationId = requestAnimationFrame(() => {
        setTimeout(animate, deletingSpeed * 1000);
      });
    } else if (isDeleting && currentCharIndex === 0) {
      // 삭제 완료, 다음 텍스트로
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      animationId = requestAnimationFrame(() => {
        setTimeout(animate, typingSpeed * 1000);
      });
    }
  };

  animate();

  // cleanup 함수
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    if (element) {
      element.textContent = '';
    }
  };
};

