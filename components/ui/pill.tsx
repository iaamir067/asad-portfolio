import React from 'react';
import { cn } from '@/lib/utils';

type PillVariant = 'cyan' | 'zinc' | 'outline' | 'live' | 'subtle';
type PillSize = 'sm' | 'md';

type PillProps = {
  variant?: PillVariant;
  size?: PillSize;
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const variantStyles: Record<PillVariant, string> = {
  cyan: 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-300',
  zinc: 'bg-zinc-800/50 border border-zinc-700/50 text-zinc-300',
  outline: 'border border-zinc-700/60 text-zinc-400 bg-transparent',
  live: 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300',
  subtle: 'bg-zinc-900/60 border border-zinc-800 text-zinc-400',
};

const sizeStyles: Record<PillSize, string> = {
  sm: 'text-[10px] px-2.5 py-1',
  md: 'text-xs px-3 py-1.5',
};

export const Pill = ({
  variant = 'cyan',
  size = 'md',
  icon,
  className,
  children,
}: PillProps) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 rounded-full font-medium tracking-wide',
      variantStyles[variant],
      sizeStyles[size],
      className,
    )}
  >
    {icon}
    {children}
  </span>
);

export const LivePing = ({ color = 'emerald' }: { color?: 'emerald' | 'cyan' }) => {
  const colorClass = color === 'cyan' ? 'bg-cyan-400' : 'bg-emerald-400';
  return (
    <span className="relative flex h-2 w-2">
      <span className={cn('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', colorClass)} />
      <span className={cn('relative inline-flex rounded-full h-2 w-2', colorClass)} />
    </span>
  );
};
