import { NavLink } from 'react-router-dom';
import { PROJECT_DETAIL_TAB_ITEMS } from './projectDetailTabsConfig';
import styles from './ProjectDetailTabs.module.css';

export const ProjectDetailTabs = () => {
  return (
    <div className={styles.tabsSpacer}>
      <nav className={styles.tabsBar} aria-label="프로젝트 상세 이동">
        <div className={styles.inner}>
          <ul className={styles.list}>
            {PROJECT_DETAIL_TAB_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
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
