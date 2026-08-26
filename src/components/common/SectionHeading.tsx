import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tagVariant?: 'primary' | 'emerald' | 'violet' | 'amber' | 'rose';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  align = 'left',
  tagVariant = 'primary',
  className = ''
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'} ${className}`}>
      {tag && (
        <div className={`mb-3 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <Badge variant={tagVariant} dot>
            {tag}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
