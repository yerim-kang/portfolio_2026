import { Outlet } from 'react-router-dom';
import type { ProjectDetailOutletContext } from './projectDetailOutletContext';
import { ProjectDetailTabs } from './ProjectDetailTabs';

const OUTLET_CONTEXT: ProjectDetailOutletContext = { projectTabs: true };

export const ProjectDetailShell = () => {
  return (
    <>
      <ProjectDetailTabs />
      <Outlet context={OUTLET_CONTEXT} />
    </>
  );
};
