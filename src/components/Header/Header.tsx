/**
 * Header Component
 * 참고 사이트 스타일의 헤더 네비게이션
 */

import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProjectDetailTabs } from '../../pages/project/ProjectDetailTabs';
import { PROJECT_DETAIL_TAB_ITEMS } from '../../pages/project/projectDetailTabsConfig';
import { useProjectDetailTabsHover } from '../../pages/project/ProjectDetailTabsContext';
import styles from './Header.module.css';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectOpen, setIsMobileProjectOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const projectTabsCtx = useProjectDetailTabsHover();

  useEffect(() => {
    const updateHeaderState = () => {
      if (location.pathname !== '/') {
        setIsScrolled(true);
        return;
      }
      setIsScrolled(window.scrollY > 4);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState);
    window.addEventListener('resize', updateHeaderState);

    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', to: '#home' },
    { label: 'About', to: '/about' },
    { label: 'Project', to: '/project/zeroway' },
    { label: 'Contact', to: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();

    if (!to.startsWith('#')) {
      navigate(to);
      setIsMobileMenuOpen(false);
      setIsMobileProjectOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: to } });
      return;
    }

    const element = document.querySelector(to);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setIsMobileProjectOpen(false);
  };

  const handleMobileProjectToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMobileProjectOpen((prev) => !prev);
  };

  useEffect(() => {
    if (location.pathname !== '/') return;
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;

    const timer = setTimeout(() => {
      const element = document.querySelector(target);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      navigate(location.pathname, { replace: true, state: null });
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname, location.state, navigate]);

  useEffect(() => {
    const handleResizeCloseMobileNav = () => {
      if (!isMobileMenuOpen) return;
      setIsMobileMenuOpen(false);
      setIsMobileProjectOpen(false);
    };

    window.addEventListener('resize', handleResizeCloseMobileNav);
    return () => window.removeEventListener('resize', handleResizeCloseMobileNav);
  }, [isMobileMenuOpen]);

  const projectTabsCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openProjectTabsMenu = () => {
    if (projectTabsCloseTimer.current) {
      clearTimeout(projectTabsCloseTimer.current);
      projectTabsCloseTimer.current = null;
    }
    projectTabsCtx?.setHeaderHovered(true);
  };

  const scheduleCloseProjectTabsMenu = () => {
    if (projectTabsCloseTimer.current) clearTimeout(projectTabsCloseTimer.current);
    projectTabsCloseTimer.current = setTimeout(() => {
      projectTabsCtx?.setHeaderHovered(false);
      projectTabsCloseTimer.current = null;
    }, 160);
  };

  useEffect(() => {
    return () => {
      if (projectTabsCloseTimer.current) clearTimeout(projectTabsCloseTimer.current);
    };
  }, []);

  return (
    <div className={styles.headerDock}>
    <header 
      ref={headerRef}
      className={`${styles.header} ${isScrolled || isMobileMenuOpen ? styles.scrolled : ''}`}
    >
      <div className={styles.headerContainer}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
          yerim&apos;s<span className={styles.logoAccent}> portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isProjectNav = item.to === '/project/zeroway';
            return (
              <a
                key={item.to}
                href={item.to}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, item.to)}
                onMouseEnter={isProjectNav ? openProjectTabsMenu : undefined}
                onMouseLeave={isProjectNav ? scheduleCloseProjectTabsMenu : undefined}
              >
                {item.label}
              </a>
            );
          })}
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
          onClick={() => {
            setIsMobileMenuOpen((prev) => {
              const next = !prev;
              if (!next) setIsMobileProjectOpen(false);
              return next;
            });
          }}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <span className={styles.mobileToggleClose} aria-hidden>
              ×
            </span>
          ) : (
            <>
              <span className={styles.mobileToggleLine}></span>
              <span className={styles.mobileToggleLine}></span>
              <span className={styles.mobileToggleLine}></span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        {navItems.map((item) => {
          const isProjectNav = item.to === '/project/zeroway';
          return (
            <div key={item.to} className={styles.mobileNavGroup}>
              {isProjectNav ? (
                <button
                  type="button"
                  className={`${styles.mobileNavLink} ${styles.mobileProjectTrigger} ${isMobileProjectOpen ? styles.mobileProjectTriggerOpen : ''}`}
                  onClick={handleMobileProjectToggle}
                  aria-expanded={isMobileProjectOpen}
                  aria-controls="mobile-project-submenu"
                >
                  <span>{item.label}</span>
                  <span
                    className={`${styles.mobileProjectChevron} ${isMobileProjectOpen ? styles.mobileProjectChevronOpen : ''}`}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>
              ) : (
                <a
                  href={item.to}
                  className={`${styles.mobileNavLink} ${item.label === 'Contact' ? styles.mobileNavLinkWithDivider : ''}`}
                  onClick={(e) => handleNavClick(e, item.to)}
                >
                  {item.label}
                </a>
              )}
              {isProjectNav && isMobileProjectOpen && (
                <div
                  id="mobile-project-submenu"
                  className={styles.mobileSubmenu}
                  aria-label="Project 상세 메뉴"
                >
                  {PROJECT_DETAIL_TAB_ITEMS.map((tabItem) => (
                    <a
                      key={tabItem.to}
                      href={tabItem.to}
                      className={styles.mobileSubmenuLink}
                      onClick={(e) => handleNavClick(e, tabItem.to)}
                    >
                      {tabItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        <a
          href="#contact"
          className={styles.mobileCtaButton}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Available for Hire
        </a>
      </nav>
    </header>

    {!isMobileMenuOpen && (
      <ProjectDetailTabs
        onTabsMouseEnter={openProjectTabsMenu}
        onTabsMouseLeave={scheduleCloseProjectTabsMenu}
      />
    )}
    </div>
  );
};

