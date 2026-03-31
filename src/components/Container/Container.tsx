/**
 * Container Component
 * 실무에서는 레이아웃의 최대폭과 여백을 일관되게 관리하기 위한 필수 컴포넌트
 * - maxWidth를 props로 받아 유연하게 활용
 */

import type { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  variant?: 'default' | 'fluid' | 'narrow' | 'wide';
  className?: string;
}

export const Container = ({ 
  children, 
  variant = 'default',
  className = '' 
}: ContainerProps) => {
  const variantClass = variant !== 'default' ? styles[`container--${variant}`] : '';
  
  return (
    <div className={`${styles.container} ${variantClass} ${className}`}>
      {children}
    </div>
  );
};

