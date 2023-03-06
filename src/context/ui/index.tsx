import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const UIContext = createContext({ isSidebarOpen: false, ...stateModifiers });

const UIContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => {
    setIsSidebarOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const config = useMemo(() => {
    return {
      isSidebarOpen,
      openSidebar,
      closeSidebar,
    };
  }, [isSidebarOpen]);

  return <UIContext.Provider value={config}>{children}</UIContext.Provider>;
};

export default UIContextProvider;

export const useUI = () => useContext(UIContext);
