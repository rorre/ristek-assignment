import { useEffect, useState } from 'react';

const breakpoints = {
    0: "sm",
    768: "md",
    1024: "lg",
    1280: "xl",
    1536: "2xl",
}

interface WindowSize {
    width: number
    height: number
}

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState('');
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    let previousBreakpoint = "sm"
    for (const key in breakpoints) {
        const minWidth = Number(key)
        if (minWidth > windowSize.width) {
            break;
        }
        // @ts-ignore
        previousBreakpoint = breakpoints[minWidth];
    }
    setBreakPoint(previousBreakpoint)
    
    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;