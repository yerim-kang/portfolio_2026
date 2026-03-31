/**
 * Button Component
 * 재사용 가능한 버튼 컴포넌트
 * - variant, size, disabled 등 props로 유연하게 제어
 * - a 태그와 button 태그 모두 지원
 */

import type { ReactNode, MouseEvent } from 'react';
import styles from './Button.module.css';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: 'link';
  href: string;
  target?: string;
  rel?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  const variantClass = styles[`button--${variant}`];
  const sizeClass = styles[`button--${size}`];
  const fullWidthClass = fullWidth ? styles['button--fullWidth'] : '';
  const baseClassName = `${styles.button} ${variantClass} ${sizeClass} ${fullWidthClass} ${className}`;

  if (props.as === 'link') {
    const { href, target, rel, onClick } = props;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={baseClassName}
      >
        <span>{children}</span>
        {icon && <span className={styles.buttonIcon}>{icon}</span>}
      </a>
    );
  }

  const { type = 'button', onClick } = props as ButtonAsButton;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClassName}
    >
      <span>{children}</span>
      {icon && <span className={styles.buttonIcon}>{icon}</span>}
    </button>
  );
};

