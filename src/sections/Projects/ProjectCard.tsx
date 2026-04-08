/**
 * ProjectCard Component
 * 프로젝트 카드 컴포넌트
 */

import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

interface Project {
  id: number;
  title: string;
  /** 타이틀 우측 소형 배지 텍스트 */
  titleBadge?: string;
  description: string;
  /** 있으면 본문 아래 줄바꿈 후 배지 형태로 강조 표시 */
  descriptionHighlight?: string;
  /** 기술 스택 — 메인 카드에 뱃지로 표시 */
  tags?: string[];
  /** AI 도구 — 기술 스택 아래 별도 행 (라벨: AI) */
  aiTags?: string[];
  /** 이미지 생성 도구 — AI 행 아래 별도 행 (라벨: Image) */
  imageTags?: string[];
  image: string;
  detailUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const descriptionForAlt = project.descriptionHighlight
    ? `${project.description} ${project.descriptionHighlight}`
    : project.description;

  const isExternal =
    project.detailUrl.startsWith('http://') || project.detailUrl.startsWith('https://');
  const isInternalRoute = project.detailUrl.startsWith('/');

  const handleDetailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    if (isExternal) {
      window.open(project.detailUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.projectCard}>
      {/* 이미지 영역 */}
      <div className={styles.cardImage}>
        <img
          src={project.image}
          alt={`${project.title} 프로젝트 이미지 - ${descriptionForAlt}`}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className={styles.imagePlaceholder} style={{ zIndex: 0 }}>
          <span>{project.title.charAt(0)}</span>
        </div>
        {/* 호버 오버레이 */}
        <div className={styles.cardOverlay}>
          <nav className={styles.cardButtons}>
            {isInternalRoute ? (
              <Link
                to={project.detailUrl}
                className={styles.detailButton}
                onClick={(e) => e.stopPropagation()}
              >
                자세히 보기
              </Link>
            ) : (
              <a
                href={project.detailUrl}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={styles.detailButton}
                onClick={handleDetailClick}
              >
                자세히 보기
              </a>
            )}
          </nav>
        </div>
      </div>

      {/* 카드 정보 */}
      <div className={styles.cardInfo}>
        <div className={styles.cardTitleRow}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          {project.titleBadge && <span className={styles.titleBadge}>{project.titleBadge}</span>}
        </div>
        <p className={styles.cardDescription}>
          {project.description}
          {project.descriptionHighlight && (
            <>
              <br />
              <span className={styles.descriptionHighlightBadge}>{project.descriptionHighlight}</span>
            </>
          )}
        </p>
        {project.tags && project.tags.length > 0 && (
          <div className={styles.techStackBlock}>
            <ul className={styles.techStack} aria-label={`${project.title} 사용 기술`}>
              {project.tags.map((tag, idx) => (
                <li key={`${project.id}-${idx}-${tag}`} className={styles.techBadge}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
        {project.aiTags && project.aiTags.length > 0 && (
          <div className={styles.aiTagBlock}>
            <span className={styles.aiTagLabel}>Image</span>
            <ul className={styles.aiTagList} aria-label={`${project.title} AI 도구`}>
              {project.aiTags.map((tag, idx) => (
                <li key={`${project.id}-ai-${idx}-${tag}`} className={styles.aiTagBadge}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
        {project.imageTags && project.imageTags.length > 0 && (
          <div className={styles.aiTagBlock}>
            <span className={styles.aiTagLabel}>Image</span>
            <ul className={styles.aiTagList} aria-label={`${project.title} 이미지 도구`}>
              {project.imageTags.map((tag, idx) => (
                <li key={`${project.id}-img-${idx}-${tag}`} className={styles.aiTagBadge}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
