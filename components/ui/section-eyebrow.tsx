import React from 'react';
import { cn } from '@/lib/utils';

type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export const SectionEyebrow = ({ children, className }: SectionEyebrowProps) => (
  <span
    className={cn(
      'text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-medium',
      className,
    )}
  >
    {children}
  </span>
);
