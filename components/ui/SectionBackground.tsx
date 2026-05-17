import { cn } from '@/lib/utils';

type SectionBackgroundProps = {
  variant?: 'flat' | 'gradient' | 'grid' | 'dots' | 'lines';
  glow?: 'cyan' | 'blue' | 'none';
  glowPosition?: 'top' | 'bottom' | 'center' | 'right' | 'left';
};

const baseLayer = 'absolute inset-0 pointer-events-none';

export const SectionBackground = ({
  variant = 'flat',
  glow = 'none',
  glowPosition = 'top',
}: SectionBackgroundProps) => {
  const patternMap = {
    flat: 'bg-[hsl(240,10%,4%)]',
    gradient:
      'bg-gradient-to-b from-[hsl(240,10%,4%)] via-[hsl(240,10%,5%)] to-[hsl(240,10%,4%)]',
    grid: 'bg-[hsl(240,10%,4%)]',
    dots: 'bg-[hsl(240,10%,4%)]',
    lines: 'bg-[hsl(240,10%,4%)]',
  };

  const overlayMap = {
    flat: null,
    gradient: null,
    grid: 'grid-pattern mask-radial opacity-30',
    dots: 'dot-pattern mask-fade-b opacity-40',
    lines: 'line-pattern mask-radial opacity-40',
  };

  const glowColor =
    glow === 'cyan'
      ? 'bg-cyan-500/5'
      : glow === 'blue'
        ? 'bg-blue-500/5'
        : '';

  const glowPositionClass =
    glowPosition === 'top'
      ? 'top-0 left-1/2 -translate-x-1/2'
      : glowPosition === 'bottom'
        ? 'bottom-0 left-1/2 -translate-x-1/2'
        : glowPosition === 'center'
          ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          : glowPosition === 'right'
            ? 'top-1/2 right-0 -translate-y-1/2'
            : 'top-1/2 left-0 -translate-y-1/2';

  return (
    <>
      <div className={cn(baseLayer, patternMap[variant])} />
      {overlayMap[variant] && (
        <div className={cn(baseLayer, overlayMap[variant]!)} />
      )}
      <div className={cn(baseLayer, 'noise-overlay')} />
      {glow !== 'none' && (
        <div
          className={cn(
            'absolute w-[700px] h-[500px] rounded-full blur-[150px] pointer-events-none',
            glowColor,
            glowPositionClass,
          )}
        />
      )}
    </>
  );
};
