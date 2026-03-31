/**
 * Header Component
 * 참고 사이트 스타일의 헤더 네비게이션
 */

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Header.module.css';

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero 섹션을 벗어날 때 헤더 스타일 변경
  useEffect(() => {
    const heroSection = document.querySelector('#home');
    if (!heroSection || !headerRef.current) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: heroSection,
      start: 'bottom top',
      end: 'bottom top',
      onEnter: () => {
        setIsInHero(false);
      },
      onLeaveBack: () => {
        setIsInHero(true);
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isInHero ? styles.darkHeader : ''}`}
    >
      <div className={styles.headerContainer}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
          Publisher<span className={styles.logoSlash}>/</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className={styles.ctaButton}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Available for Hire
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.mobileCtaButton}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Available for Hire
        </a>
      </nav>
    </header>
  );
};

