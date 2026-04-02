import { useEffect, useState } from 'react';
import { Link, useOutletContext, useSearchParams } from 'react-router-dom';
import detailStyles from './ProjectDetail.module.css';
import tabStyles from './CursorAIDetail.module.css';
import type { ProjectDetailOutletContext } from './projectDetailOutletContext';

import americayogaImg from '../../assets/images/americayoga.jpg';
import americayogaBeforeImg from '../../assets/images/americayoga-before.png';
import americayogaAfterImg from '../../assets/images/americayoga-after.jpg';
import emoji1Img from '../../assets/images/emoji-1.png';
import banner1Img from '../../assets/images/banner1.png';
import banner2Img from '../../assets/images/banner2.png';
import banner3Img from '../../assets/images/banner3.png';

const TAB_QUERY = 'tab';

type DesignTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  period: string;
  contribution: string;
  tags: string[];
  image: string;
  siteUrl?: string;
  notionUrl?: string;
  figmaUrl?: string;
  beforeImage?: string;
  afterImage?: string;
  galleryImages?: string[];
  sections: Array<{ title: string; text: string }>;
};

const tabs: DesignTab[] = [
  {
    id: 'america-yoga',
    label: 'America Yoga',
    title: 'America Yoga 사이트 리디자인',
    description:
      'America Yoga 웹사이트 리디자인 프로젝트입니다. 기존 운영 사이트를 분석해 정보 분산·가독성 문제를 도출하고, 프로그램·지점·게시판 중심으로 IA를 재정리했습니다.',
    period: '2026.01.05 ~ 2026.01.23',
    contribution: '100%',
    tags: ['Figma'],
    image: americayogaImg,
    beforeImage: americayogaBeforeImg,
    afterImage: americayogaAfterImg,
    siteUrl: 'https://americayoga.co.kr/home/index.php',
    figmaUrl:
      'https://www.figma.com/design/4v52vD7YlFsaFocsoQ8WfT/%EC%98%88%EB%A6%BC_%EC%97%B0%EC%8A%B5?node-id=671-32',
    sections: [
      { title: '기획 단계', text: '기존 사이트의 정보 분산과 가독성 문제를 먼저 진단하고, 사용자 주요 동선을 프로그램·지점·게시판 중심으로 재설계했습니다. IA를 재정리한 뒤 섹션별 메시지 우선순위를 정의하고, 모바일 사용 환경까지 고려한 반응형 구조로 와이어를 구성했습니다.' },
    ],
  },
  {
    id: 'emoticon',
    label: '이모티콘',
    title: '이모티콘 제작',
    description:
      'ImageFX와 Figma를 활용해 캐릭터 이모티콘을 제작하고, OGQ 마켓 등록까지 진행한 프로젝트입니다.',
    period: '2026.01',
    contribution: '100%',
    tags: ['Figma', 'ImageFX'],
    image: emoji1Img,
    notionUrl:
      'https://dog-mandolin-7f7.notion.site/AI-2fd4be4a7f1c8153b14de6524d709b60?source=copy_link',
    figmaUrl:
      'https://www.figma.com/design/4v52vD7YlFsaFocsoQ8WfT/%EC%98%88%EB%A6%BC_%EC%97%B0%EC%8A%B5?node-id=698-2006',
    sections: [
      { title: '기획 단계', text: '타깃 사용자 감정선에 맞는 캐릭터 콘셉트와 사용 상황을 먼저 정의한 뒤, 세트 구성과 감정 표현 범위를 기획했습니다. 이후 플랫폼 규격에 맞춰 산출물 기준을 정하고 Figma/ImageFX를 조합해 제작 방향을 구체화했습니다.' },
    ],
  },
  {
    id: 'banner',
    label: '배너',
    title: '배너 디자인 모음',
    description: 'Figma로 제작한 프로모션·안내용 배너 이미지입니다.',
    period: '2026.01',
    contribution: '100%',
    tags: ['Figma'],
    image: banner1Img,
    galleryImages: [banner1Img, banner2Img, banner3Img],
    notionUrl:
      'https://dog-mandolin-7f7.notion.site/2fe4be4a7f1c809aae95feae87a58d01?source=copy_link',
    figmaUrl:
      'https://www.figma.com/design/4v52vD7YlFsaFocsoQ8WfT/%EC%98%88%EB%A6%BC_%EC%97%B0%EC%8A%B5?node-id=829-2864',
    sections: [
      { title: '기획 단계', text: '시리즈 배너의 목적별 역할을 먼저 분류하고, 공통 톤앤매너를 유지한 상태에서 각 배너의 메시지 우선순위를 다르게 설계했습니다. 규격 내에서 카피 가독성과 시선 흐름을 기준으로 레이아웃 변주를 주어 하나의 세트로 완성했습니다.' },
    ],
  },
];

function initialTabFromUrl(): string {
  if (typeof window === 'undefined') return tabs[0].id;
  const p = new URLSearchParams(window.location.search).get(TAB_QUERY);
  return p && tabs.some((t) => t.id === p) ? p : tabs[0].id;
}

export const DesignDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeId, setActiveId] = useState(initialTabFromUrl);
  const { projectTabs } = useOutletContext<ProjectDetailOutletContext>() ?? {};

  useEffect(() => {
    const p = searchParams.get(TAB_QUERY);
    if (p && tabs.some((t) => t.id === p)) {
      setActiveId(p);
    }
  }, [searchParams]);

  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];
  const isVideo = active.image.toLowerCase().endsWith('.mp4');

  const selectTab = (id: string) => {
    setActiveId(id);
    setSearchParams({ [TAB_QUERY]: id }, { replace: true });
  };

  const hasActions = active.siteUrl || active.notionUrl || active.figmaUrl;

  return (
    <main
      className={`${detailStyles.detailPage} ${projectTabs ? detailStyles.detailPageTabbed : ''}`}
    >
      <div className={detailStyles.detailInner}>
        <header className={detailStyles.pageHeader}>
          <Link to="/" className={detailStyles.backLink}>
            <span className={detailStyles.backLine} aria-hidden />
            메인으로 돌아가기
          </Link>
          <h1 className={detailStyles.title}>Design 작업물</h1>
          <p className={detailStyles.description}>
            Figma·ImageFX 등으로 진행한 디자인 작업을 탭으로 구분해 정리했습니다. 각 탭에서 설명,
            사용 도구, 노션·피그마 링크를 확인할 수 있습니다.
          </p>
        </header>

        <div className={tabStyles.tabBar} role="tablist" aria-label="디자인 작업 선택">
          <div className={tabStyles.tabScroll}>
            {tabs.map((tab) => {
              const selected = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`design-tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`design-panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={`${tabStyles.tab} ${selected ? tabStyles.tabActive : ''}`}
                  onClick={() => selectTab(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`design-panel-${active.id}`}
          aria-labelledby={`design-tab-${active.id}`}
          className={tabStyles.tabPanel}
        >
          <h2 className={tabStyles.panelTitle}>{active.title}</h2>
          <p className={tabStyles.panelDescription}>{active.description}</p>

          {!active.galleryImages && (
            <figure className={detailStyles.heroFigure}>
              {isVideo ? (
                <video
                  className={detailStyles.heroImage}
                  src={active.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  aria-label={`${active.title} 대표 영상`}
                />
              ) : (
                <img
                  className={detailStyles.heroImage}
                  src={active.image}
                  alt={`${active.title} 대표 이미지`}
                />
              )}
            </figure>
          )}

          {active.beforeImage && active.afterImage && (
            <section className={tabStyles.beforeAfterSection} aria-label="기존 사이트와 리뉴얼 비교">
              <h3 className={tabStyles.beforeAfterTitle}>기존 사이트 vs 리뉴얼 디자인</h3>
              <div className={tabStyles.beforeAfterGrid}>
                <figure className={tabStyles.compareCard}>
                  <figcaption className={tabStyles.compareLabel}>Before (기존 사이트)</figcaption>
                  <img src={active.beforeImage} alt={`${active.title} 기존 사이트 화면`} />
                </figure>
                <figure className={tabStyles.compareCard}>
                  <figcaption className={tabStyles.compareLabel}>After (리뉴얼 디자인)</figcaption>
                  <img src={active.afterImage} alt={`${active.title} 리뉴얼 디자인 화면`} />
                </figure>
              </div>
            </section>
          )}

          {active.galleryImages && active.galleryImages.length > 0 && (
            <section className={tabStyles.beforeAfterSection} aria-label="배너 디자인 모음">
              <h3 className={tabStyles.beforeAfterTitle}>배너 디자인 모음</h3>
              <div className={tabStyles.galleryGrid}>
                {active.galleryImages.map((img, index) => (
                  <figure key={`${img}-${index}`} className={tabStyles.compareCard}>
                    <figcaption className={tabStyles.compareLabel}>{`Banner ${index + 1}`}</figcaption>
                    <img src={img} alt={`${active.title} 배너 ${index + 1}`} />
                  </figure>
                ))}
              </div>
            </section>
          )}

          <div className={detailStyles.rule} role="presentation" />

          <section className={detailStyles.techSection} aria-labelledby={`design-tech-${active.id}`}>
            <div className={detailStyles.techHeadingRow}>
              <span className={detailStyles.techHeadingLine} aria-hidden />
              <h2 id={`design-tech-${active.id}`} className={detailStyles.techHeading}>
                프로젝트 요약
              </h2>
            </div>
            <ul className={detailStyles.summaryList}>
              <li className={detailStyles.summaryItem}>
                <strong>제작기간</strong>
                <span>{active.period}</span>
              </li>
              <li className={detailStyles.summaryItem}>
                <strong>기여도</strong>
                <span>{active.contribution}</span>
              </li>
              <li className={detailStyles.summaryItem}>
                <strong>사용기술</strong>
                <ul className={detailStyles.techList} role="list">
                  {active.tags.map((tag, index) => (
                    <li key={`${tag}-${index}`} className={detailStyles.techTag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </section>

          <div className={detailStyles.rule} role="presentation" />

          <div className={detailStyles.sections}>
            {active.sections.map((section) => (
              <article key={section.title} className={detailStyles.section}>
                <h2 className={detailStyles.sectionTitle}>{section.title}</h2>
                <p className={detailStyles.sectionText}>{section.text}</p>
              </article>
            ))}
          </div>

          {hasActions && (
            <div className={detailStyles.actionButtons}>
              {active.siteUrl && (
                <a
                  href={active.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={detailStyles.siteButton}
                >
                  {active.id === 'america-yoga' ? '기존 사이트 보러가기' : '사이트 보러가기'}
                </a>
              )}
              {active.notionUrl && (
                <a
                  href={active.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={detailStyles.notionButton}
                >
                  노션 보러가기
                </a>
              )}
              {active.figmaUrl && (
                <a
                  href={active.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={detailStyles.figmaButton}
                >
                  피그마 보러가기
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
