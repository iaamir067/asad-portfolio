import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  as?: keyof JSX.IntrinsicElements;
  fullWidth?: boolean;
};

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, as = 'section', fullWidth = false, className, children, ...rest }, ref) => {
    const Tag = as as React.ElementType;
    return (
      <Tag
        ref={ref}
        id={id}
        className={cn(
          'relative section-padding overflow-hidden',
          fullWidth ? '' : '',
          className,
        )}
        {...rest}
      >
        {children}
      </Tag>
    );
  },
);
Section.displayName = 'Section';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export const Container = ({ size = 'lg', className, children, ...rest }: ContainerProps) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  };
  return (
    <div className={cn('relative z-10 mx-auto px-6', sizes[size], className)} {...rest}>
      {children}
    </div>
  );
};

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) => (
  <div
    className={cn(
      'mb-16',
      align === 'center' && 'text-center mx-auto',
      className,
    )}
  >
    <div className="mb-4">
      <span className="text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-medium">
        {eyebrow}
      </span>
    </div>
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
      {title}
    </h2>
    {description && (
      <p className={cn('mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl', align === 'center' && 'mx-auto')}>
        {description}
      </p>
    )}
  </div>
);

export default Section;
