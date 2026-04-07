import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PROJECT_DETAIL_TAB_ITEMS } from './projectDetailTabsConfig';
import { useProjectDetailTabsHover } from './ProjectDetailTabsContext';
import styles from './ProjectDetailTabs.module.css';

function useFinePointerHover() {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setMatches(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);
  return matches;
}

type ProjectDetailTabsProps = {
  onTabsMouseEnter?: () => void;
  onTabsMouseLeave?: () => void;
};

export const ProjectDetailTabs = ({
  onTabsMouseEnter,
  onTabsMouseLeave,
}: ProjectDetailTabsProps) => {
  const location = useLocation();
  const ctx = useProjectDetailTabsHover();
  const fineHover = useFinePointerHover();
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const lastScrollY = useRef(0);
  const raf = useRef<number>(0);

  const headerHovered = ctx?.headerHovered ?? false;

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setHiddenByScroll(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!fineHover) {
      setHiddenByScroll(false);
      return;
    }

    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        const prev = lastScrollY.current;
        if (y > prev + 10 && y > 48) {
          setHiddenByScroll(true);
        }
        if (y < 32) {
          setHiddenByScroll(false);
        }
        lastScrollY.current = y;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [fineHover]);

  useEffect(() => {
    if (headerHovered) {
      setHiddenByScroll(false);
    }
  }, [headerHovered]);

  const reveal = headerHovered && !hiddenByScroll;

  return (
    <div
      className={`${styles.tabsRoot} ${reveal ? styles.tabsRootOpen : ''} ${
        fineHover ? styles.tabsRootHoverMode : styles.tabsRootTouchMode
      }`}
      aria-hidden={fineHover ? !reveal : false}
      onMouseEnter={onTabsMouseEnter}
      onMouseLeave={onTabsMouseLeave}
    >
      <nav className={styles.tabsBar} aria-label="프로젝트 상세 이동">
        <div className={styles.inner}>
          <ul className={styles.list}>
            {PROJECT_DETAIL_TAB_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  tabIndex={fineHover && !reveal ? -1 : undefined}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
