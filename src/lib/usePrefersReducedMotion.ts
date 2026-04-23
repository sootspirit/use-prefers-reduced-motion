import { useSyncExternalStore } from 'react';


export default function usePrefersReducedMotion(): boolean {
const MEDIA_QUERY_STRING = '(prefers-reduced-motion: reduce)';

const getSnapshot = () => window.matchMedia(MEDIA_QUERY_STRING).matches;
const getServerSnapshot = () => false; // Safe fallback for SSR

const subscribe = (callback: () => void) => {
  const mediaQueryList = window.matchMedia(MEDIA_QUERY_STRING);
  
  if (mediaQueryList.addEventListener) {
    mediaQueryList.addEventListener('change', callback);
    return () => mediaQueryList.removeEventListener('change', callback);
  } else {
    // Fallback for Safari < 14
    mediaQueryList.addListener(callback);
    return () => mediaQueryList.removeListener(callback);
  }
};

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}