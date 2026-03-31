/**
 * SectionTitle Component
 * 섹션 제목의 일관성을 유지하기 위한 재사용 컴포넌트
 * - 타이포그래피 규칙을 중앙 관리
 * - 반응형 폰트 크기 자동 적용
 */

import type { ReactNode } from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  size?: 'large' | 'medium' | 'small';
  align?: 'left' | 'center';
  accent?: boolean;
  className?: string;
}

export const SectionTitle = ({ 
  children,
  subtitle,
  size = 'large',
  align = 'left',
  accent = false,
  className = '' 
}: SectionTitleProps) => {
  const sizeClass = styles[`title--${size}`];
  const alignClass = align === 'center' ? styles['title--center'] : '';
  const accentClass = accent ? styles['title--accent'] : '';

  return (
    <div className={`${alignClass} ${className}`}>
      <h2 className={`${styles.title} ${sizeClass} ${accentClass}`}>
        {children}
      </h2>
      {subtitle && (
        <p className={styles.subtitle}>{subtitle}</p>
      )}
    </div>
  );
};

