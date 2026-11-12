import type { ReactNode } from 'react';

interface HeroProps {
  children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return (
    <div className="rounded-3xl border border-border bg-card px-5 py-6 shadow-panel md:px-10 md:py-9">
      {children}
    </div>
  );
}
