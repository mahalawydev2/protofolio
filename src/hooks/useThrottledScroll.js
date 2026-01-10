import { useState, useEffect, useCallback } from 'react';
import { throttle } from '../utils/performance';

export const useThrottledScroll = (threshold = 50, delay = 100) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      setScrolled(window.scrollY > threshold);
    }, delay),
    [threshold, delay]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrolled;
};

export default useThrottledScroll;