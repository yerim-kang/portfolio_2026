/**
 * ProjectCard Component
 * 프로젝트 카드 컴포넌트
 */

import styles from './ProjectCard.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  /** 있으면 본문 아래 줄바꿈 후 배지 형태로 강조 표시 */
  descriptionHighlight?: string;
  tags: string[];
  image: string;
  siteUrl?: string;
  detailUrl: string;
  figmaUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const descriptionForAlt = project.descriptionHighlight
    ? `${project.description} ${project.descriptionHighlight}`
    : project.description;

  const handleSiteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    window.open(project.siteUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDetailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    // 외부 링크인 경우 새 탭에서 열기
    if (project.detailUrl.startsWith('http://') || project.detailUrl.startsWith('https://')) {
      window.open(project.detailUrl, '_blank', 'noopener,noreferrer');
    } else {
      // 내부 라우트인 경우 (추후 라우터 구현 시 수정)
      console.log('상세 페이지:', project.detailUrl);
      // window.location.href = project.detailUrl;
    }
  };

  const handleFigmaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    if (project.figmaUrl) {
      window.open(project.figmaUrl, '_blank', 'noopener,noreferrer');
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
            {project.figmaUrl && project.figmaUrl.trim() !== '' && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.figmaButton}
                onClick={handleFigmaClick}
              >
                피그마 보기
              </a>
            )}
            {project.siteUrl && project.siteUrl.trim() !== '' && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteButton}
                onClick={handleSiteClick}
              >
                사이트 이동
              </a>
            )}
            <a
              href={project.detailUrl}
              target={project.detailUrl.startsWith('http://') || project.detailUrl.startsWith('https://') ? '_blank' : undefined}
              rel={project.detailUrl.startsWith('http://') || project.detailUrl.startsWith('https://') ? 'noopener noreferrer' : undefined}
              className={styles.detailButton}
              onClick={handleDetailClick}
            >
              자세히 보기
            </a>
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
        <ul className={styles.cardTags}>
          {project.tags.map((tag, index) => (
            <li key={index} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
