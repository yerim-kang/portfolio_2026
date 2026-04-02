import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import detailStyles from './ProjectDetail.module.css';
import styles from './CursorAIDetail.module.css';
import type { ProjectDetailOutletContext } from './projectDetailOutletContext';

import washtowerImg from '../../assets/images/lgwashtower.mp4';
import openweatherImg from '../../assets/images/openweather.png';
import salarycalculatorImg from '../../assets/images/salarycalculator.png';
import imageeditorImg from '../../assets/images/imageeditor.png';
import lottoImg from '../../assets/images/lotto.png';
import meowTarotImg from '../../assets/images/meow-tarot.png';
import mykoreahubImg from '../../assets/images/mykorahub.png';

type CursorTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  period: string;
  contribution: string;
  tags: string[];
  image: string;
  siteUrl: string;
  figmaUrl?: string;
  sections: Array<{ title: string; text: string }>;
};

const tabs: CursorTab[] = [
  {
    id: 'washtower',
    label: '세탁기 랜딩',
    title: '세탁기 Landing Page',
    description: 'Cursor AI로 하루 만에 기획부터 반응형 랜딩 퍼블리싱까지 완료한 프로젝트입니다.',
    period: '2026.02',
    contribution: '100%',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cursor AI', 'ImageFX'],
    image: washtowerImg,
    siteUrl: 'https://twinwashtower.netlify.app/',
    sections: [
      { title: '기획 단계', text: '세탁기 제품 특성상 정보 신뢰도와 구매 전환을 동시에 확보하는 것을 목표로 랜딩 흐름을 먼저 설계했습니다. 핵심 메시지, 기능 강조 순서, CTA 배치를 우선 정한 뒤 Cursor AI를 활용해 빠르게 시안/구현을 반복하며 구조를 다듬었습니다.' },
    ],
  },
  {
    id: 'openweather',
    label: '날씨',
    title: '날씨 모바일용 Website',
    description: 'OpenWeather API를 활용한 모바일 중심 날씨 정보 웹사이트입니다.',
    period: '2026.02',
    contribution: '100%',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cursor AI', 'OpenWeather API'],
    image: openweatherImg,
    siteUrl: 'https://openweatherai.netlify.app/',
    sections: [
      { title: '기획 단계', text: '모바일에서 즉시 날씨 정보를 확인할 수 있도록 현재 날씨 → 추가 정보 → 예보 순으로 정보 우선순위를 정했습니다. API 응답 데이터를 사용자 언어로 쉽게 읽히게 매핑하는 흐름을 먼저 설계하고 구현했습니다.' },
    ],
  },
  {
    id: 'salary',
    label: '계산기',
    title: '직장인 계산기 Website',
    description: '급여·실수령 등 직장인에게 유용한 계산 기능을 제공하는 웹사이트입니다.',
    period: '2026.02',
    contribution: '100%',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cursor AI'],
    image: salarycalculatorImg,
    siteUrl: 'https://salary-calculator01.netlify.app/',
    sections: [
      { title: '기획 단계', text: '사용자가 가장 자주 찾는 계산 항목을 기준으로 입력 항목과 결과 표시 구조를 먼저 설계했습니다. 입력 실수 가능성을 줄이기 위해 폼 흐름을 단순화하고 즉시 결과를 확인할 수 있는 피드백 구조를 반영했습니다.' },
    ],
  },
  {
    id: 'imageeditor',
    label: '이미지변환',
    title: '이미지변환기 Website',
    description: '이미지 업로드 및 변환 워크플로우를 다루는 웹 프로젝트입니다.',
    period: '2026.02',
    contribution: '100%',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cursor AI'],
    image: imageeditorImg,
    siteUrl: 'https://picture-editor01.netlify.app/',
    sections: [
      { title: '기획 단계', text: '사용자 행동을 업로드 → 옵션 선택 → 미리보기 → 변환/저장 단계로 구분해 각 단계의 이탈 포인트를 줄이는 데 집중했습니다. 파일 처리 과정의 상태를 화면에서 즉시 인지할 수 있도록 인터랙션 구조를 먼저 설계했습니다.' },
    ],
  },
  {
    id: 'lotto',
    label: '로또',
    title: '로또 번호 추천 Website',
    description: '랜덤 번호 추천 등 가벼운 인터랙션을 포함한 웹사이트입니다.',
    period: '2026.02',
    contribution: '100%',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cursor AI'],
    image: lottoImg,
    siteUrl: 'https://lotto7777.netlify.app/',
    sections: [
      { title: '기획 단계', text: '단순한 기능이라도 반복 사용이 자연스럽도록 입력 부담 없는 인터랙션을 목표로 기획했습니다. 버튼 액션 이후 결과가 즉시 갱신되고 재시도가 쉬운 구조로 사용자 흐름을 단순화했습니다.' },
    ],
  },
  {
    id: 'tarot',
    label: '타로',
    title: '타로카드 Website',
    description: 'Cursor AI와 ImageFX를 활용해 타로 카드 테마의 웹 경험을 구성했습니다.',
    period: '2026.02',
    contribution: '100%',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cursor AI', 'ImageFX'],
    image: meowTarotImg,
    siteUrl: 'https://meow-tarot.netlify.app',
    sections: [
      { title: '기획 단계', text: '타로 체험의 몰입감을 높이기 위해 카드 선택 전후의 감정 흐름을 중심으로 화면 전환 구조를 설계했습니다. 테마 이미지와 카피가 자연스럽게 연결되도록 콘텐츠 배치와 인터랙션 톤을 먼저 정한 뒤 구현했습니다.' },
    ],
  },
  {
    id: 'mykoreahub',
    label: 'My Korea Hub',
    title: 'My Korea Hub Website',
    description: '외국인을 위한 한국어 학습·K-컬처 가이드 플랫폼 콘셉트의 웹사이트입니다.',
    period: '2026.02',
    contribution: '100%',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cursor AI'],
    image: mykoreahubImg,
    siteUrl: 'https://mykoreahub.netlify.app/',
    sections: [
      { title: '기획 단계', text: '해외 사용자 관점에서 한국어 학습과 K-컬처 정보를 빠르게 탐색할 수 있도록 카테고리 기반 정보 구조를 먼저 정리했습니다. 언어 장벽을 줄이기 위해 스캔 중심 레이아웃과 명확한 섹션 구분을 기획 단계에서 확정했습니다.' },
    ],
  },
];

export const CursorAIDetail = () => {
  const { projectTabs } = useOutletContext<ProjectDetailOutletContext>() ?? {};
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];
  const isVideo = active.image.toLowerCase().endsWith('.mp4');

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
          <h1 className={detailStyles.title}>Cursor AI Projects</h1>
          <p className={detailStyles.description}>
            Cursor AI를 활용해 제작한 프로젝트를 탭으로 구분해 정리했습니다. 각 탭에서 사용 기술과
            사이트 링크를 확인할 수 있습니다.
          </p>
        </header>

        <div className={styles.tabBar} role="tablist" aria-label="Cursor AI 프로젝트 선택">
          <div className={styles.tabScroll}>
            {tabs.map((tab) => {
              const selected = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={`${styles.tab} ${selected ? styles.tabActive : ''}`}
                  onClick={() => setActiveId(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className={styles.tabPanel}
        >
          <h2 className={styles.panelTitle}>{active.title}</h2>
          <p className={styles.panelDescription}>{active.description}</p>

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

          <div className={detailStyles.rule} role="presentation" />

          <section className={detailStyles.techSection} aria-labelledby={`tech-${active.id}`}>
            <div className={detailStyles.techHeadingRow}>
              <span className={detailStyles.techHeadingLine} aria-hidden />
              <h2 id={`tech-${active.id}`} className={detailStyles.techHeading}>
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

          <div className={detailStyles.actionButtons}>
            <a
              href={active.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={detailStyles.siteButton}
            >
              사이트 보러가기
            </a>
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
        </div>
      </div>
    </main>
  );
};
