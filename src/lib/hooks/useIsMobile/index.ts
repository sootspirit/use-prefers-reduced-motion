import { useState, useLayoutEffect } from 'react';

const DEFAULT_MOBILE_RESOLUTION = 992;

export const useIsMobile = (mobileResolution: number = DEFAULT_MOBILE_RESOLUTION): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(`(width < ${mobileResolution}px)`);

    // We only update state if it's actually different
    const updateState = () => {
      setIsMobile((prevState) => {
        if (prevState !== mediaQueryList.matches) {
          return mediaQueryList.matches;
        }
        return prevState;
      });
    };

    // Initial check (synchronous but before paint)
    updateState();

    mediaQueryList.addEventListener('change', updateState);

    return () => mediaQueryList.removeEventListener('change', updateState);
  }, [mobileResolution]);

  return isMobile;
};
