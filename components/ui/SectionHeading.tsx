import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  align?: 'left' | 'between';
};

/** Index number + mono label + serif title — the recurring spec-sheet header. */
export default function SectionHeading({
  index,
  label,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-6',
        align === 'between' && 'md:flex-row md:items-end md:justify-between',
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-paper-dim">
          <span className="label-mono text-signal">{index}</span>
          <span className="h-px w-8 bg-line-strong" />
          <span className="label-mono">{label}</span>
        </div>
        <h2 className="max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-pretty font-sans text-base leading-relaxed text-paper-dim md:text-right">
          {description}
        </p>
      )}
    </Reveal>
  );
}
