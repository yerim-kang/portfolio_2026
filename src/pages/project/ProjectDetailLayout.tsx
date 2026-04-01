import { Link } from 'react-router-dom';
import styles from './ProjectDetail.module.css';

interface ProjectDetailLayoutProps {
  title: string;
  description: string;
  tags: string[];
  period: string;
  contribution: string;
  image: string;
  planningImage?: string;
  siteUrl?: string;
  figmaUrl?: string;
  sections: Array<{ title: string; text: string }>;
}

export const ProjectDetailLayout = ({
  title,
  description,
  tags,
  period,
  contribution,
  image,
  planningImage,
  siteUrl,
  figmaUrl,
  sections,
}: ProjectDetailLayoutProps) => {
  const isVideo = image.toLowerCase().endsWith('.mp4');

  return (
    <main className={styles.detailPage}>
      <div className={styles.detailInner}>
        <Link to="/" className={styles.backLink}>← 메인으로 돌아가기</Link>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {isVideo ? (
          <video
            className={styles.heroImage}
            src={image}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            aria-label={`${title} 대표 영상`}
          />
        ) : (
          <img className={styles.heroImage} src={image} alt={`${title} 대표 이미지`} />
        )}

        {planningImage && (
          <section className={styles.planSection} aria-labelledby="project-plan-image-heading">
            <h2 id="project-plan-image-heading" className={styles.techHeading}>
              기획서
            </h2>
            <img className={styles.planImage} src={planningImage} alt={`${title} 기획서 이미지`} />
          </section>
        )}

        <section className={styles.techSection} aria-labelledby="project-summary-heading">
          <h2 id="project-summary-heading" className={styles.techHeading}>
            프로젝트 요약
          </h2>
          <ul className={styles.summaryList}>
            <li className={styles.summaryItem}>
              <strong>제작기간</strong>
              <span>{period}</span>
            </li>
            <li className={styles.summaryItem}>
              <strong>기여도</strong>
              <span>{contribution}</span>
            </li>
            <li className={styles.summaryItem}>
              <strong>사용기술</strong>
              <ul className={styles.techList} role="list">
                {tags.map((tag, index) => (
                  <li key={`${tag}-${index}`} className={styles.techTag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>

        {sections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <p className={styles.sectionText}>{section.text}</p>
          </section>
        ))}

        {(siteUrl || figmaUrl) && (
          <div className={styles.actionButtons}>
            {siteUrl && (
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteButton}
              >
                사이트 보러가기
              </a>
            )}
            {figmaUrl && (
              <a
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.figmaButton}
              >
                피그마 보러가기
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
};
