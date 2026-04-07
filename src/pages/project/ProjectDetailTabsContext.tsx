import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

type ProjectDetailTabsContextValue = {
  headerHovered: boolean;
  setHeaderHovered: (value: boolean) => void;
};

const ProjectDetailTabsContext = createContext<ProjectDetailTabsContextValue | null>(null);

export function ProjectDetailTabsProvider({ children }: { children: ReactNode }) {
  const [headerHovered, setHeaderHoveredState] = useState(false);

  const setHeaderHovered = useCallback((value: boolean) => {
    setHeaderHoveredState(value);
  }, []);

  const value = useMemo(
    () => ({
      headerHovered,
      setHeaderHovered,
    }),
    [headerHovered, setHeaderHovered]
  );

  return (
    <ProjectDetailTabsContext.Provider value={value}>{children}</ProjectDetailTabsContext.Provider>
  );
}

export function useProjectDetailTabsHover() {
  const ctx = useContext(ProjectDetailTabsContext);
  if (!ctx) {
    return null;
  }
  return ctx;
}
