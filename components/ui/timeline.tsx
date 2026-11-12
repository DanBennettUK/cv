import type { ReactNode } from 'react';

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="relative ms-1 border-s border-border ps-6">
      {children}
    </div>
  );
}

export function TimelineItem({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <article id={id} className="relative pb-9 last:pb-0">
      <span
        className="absolute -start-[1.95rem] top-1.5 size-3 rounded-full border-2 border-accent bg-card"
        aria-hidden="true"
      />
      {children}
    </article>
  );
}
