import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

interface WindowDimensionsContextData {
  width: number;
  height: number;
}

const WindowDimensionsContext = createContext<WindowDimensionsContextData>(
  {} as WindowDimensionsContextData,
);

interface WindowDimensionsProviderProps {
  children: ReactNode;
}
export function WindowDimensionsProvider({
  children,
}: WindowDimensionsProviderProps) {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
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
      value={{ width: windowDimensions.width, height: windowDimensions.height }}
    >
      {children}
    </WindowDimensionsContext.Provider>
  );
}

export function useWindowDimensions(): WindowDimensionsContextData {
  const context = useContext(WindowDimensionsContext);

  return context;
}
