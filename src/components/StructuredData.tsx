/**
 * StructuredData Component
 * 구조화된 데이터 (JSON-LD) 컴포넌트
 * 검색 엔진 최적화를 위한 스키마 마크업
 */

export const StructuredData = () => {
  // 배포 후 실제 URL로 변경 필요
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const ogImageUrl = siteUrl ? `${siteUrl}/og-image.png` : '';

  // Person 스키마 (개인 정보)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '강예림',
    jobTitle: '웹 퍼블리셔',
    description: '사용자의 니즈를 읽고 구조로 풀어내는 웹 퍼블리셔. HTML, CSS, JavaScript, React, GSAP, Figma 기반 반응형 웹 퍼블리싱과 UI/UX 구현 전문.',
    url: siteUrl,
    image: ogImageUrl,
    sameAs: [
      // 소셜 미디어 링크가 있다면 추가
      // 'https://github.com/yourusername',
      // 'https://www.linkedin.com/in/yourusername',
    ],
    knowsAbout: [
      '웹 퍼블리싱',
      '프론트엔드 개발',
      'UX/UI 디자인',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'GSAP',
      'Figma',
      '반응형 웹 디자인',
    ],
  };

  // WebSite 스키마
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '강예림 포트폴리오',
    description: '웹 퍼블리셔 강예림의 포트폴리오 사이트. UXUI, 프론트엔드, 반응형 웹 퍼블리싱 프로젝트를 소개합니다.',
    url: siteUrl,
    author: {
      '@type': 'Person',
      name: '강예림',
    },
    inLanguage: 'ko-KR',
  };

  // Portfolio 스키마
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${siteUrl}/#portfolio`,
    name: '강예림 포트폴리오',
    description: '웹 퍼블리셔 강예림의 프로젝트 포트폴리오',
    creator: {
      '@type': 'Person',
      name: '강예림',
      jobTitle: '웹 퍼블리셔',
    },
    about: [
      {
        '@type': 'Thing',
        name: '웹 퍼블리싱',
      },
      {
        '@type': 'Thing',
        name: '프론트엔드 개발',
      },
      {
        '@type': 'Thing',
        name: 'UX/UI 디자인',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
};

