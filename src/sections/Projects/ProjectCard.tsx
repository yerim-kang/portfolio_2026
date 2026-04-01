/**
 * ProjectCard Component
 * 프로젝트 카드 컴포넌트
 */

import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  /** 있으면 본문 아래 줄바꿈 후 배지 형태로 강조 표시 */
  descriptionHighlight?: string;
  /** 상세페이지용 — 메인 카드에는 표시하지 않음 */
  tags?: string[];
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
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>
          {project.description}
          {project.descriptionHighlight && (
            <>
              <br />
              <span className={styles.descriptionHighlightBadge}>{project.descriptionHighlight}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};
