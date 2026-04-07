import { Outlet } from 'react-router-dom';
import type { ProjectDetailOutletContext } from './projectDetailOutletContext';
import styles from './ProjectDetailShell.module.css';

const OUTLET_CONTEXT: ProjectDetailOutletContext = { projectTabs: true };

export const ProjectDetailShell = () => {
  return (
    <>
      <div className={styles.shellTopPad} aria-hidden />
      <Outlet context={OUTLET_CONTEXT} />
    </>
  );
};
