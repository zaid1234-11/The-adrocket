import React, { useState, useEffect, useRef, ReactNode, Suspense } from 'react';
import { SectionSkeleton } from './Skeletons';

export const LazyLoad = ({ children, fallback = <SectionSkeleton />, height = 'h-[400px]' }: { children: ReactNode; fallback?: ReactNode, height?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="content-visibility-auto contain-intrinsic-size-1000">
      {isVisible ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        <div className={`w-full ${height} opacity-0`} aria-hidden="true" />
      )}
    </div>
  );
};
