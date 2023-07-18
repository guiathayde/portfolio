'use client';

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';

interface WindowDimensionsContextData {
  width: number;
  height: number;
}

interface WindowDimensions {
  width: number;
  height: number;
}

const WindowDimensionsContext = createContext<WindowDimensionsContextData>(
  {} as WindowDimensionsContextData
);

interface WindowDimensionsProviderProps {
  children: ReactNode;
}
export function WindowDimensionsProvider({
  children,
}: WindowDimensionsProviderProps) {
  const getWindowDimensions = useCallback(() => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }, []);

  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <WindowDimensionsContext.Provider
      value={{
        width: windowDimensions ? windowDimensions.width : 0,
        height: windowDimensions ? windowDimensions.height : 0,
      }}
    >
      {children}
    </WindowDimensionsContext.Provider>
  );
}

export function useWindowDimensions(): WindowDimensionsContextData {
  const context = useContext(WindowDimensionsContext);

  return context;
}
