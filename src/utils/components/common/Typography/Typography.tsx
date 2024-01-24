import React from 'react';

type Tag = 'h1' | 'h2' | 'h3' | 'p' | "span"
type Size = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl'

interface TypographyProps {
  size: Size
  tag: Tag
  children: string
  className?: string
}

export const Typography: React.FC<TypographyProps> = ({tag, children,size, className}) => {
  const Component = tag
  return (
    <Component className={`${size} ${className}`} >
      {children}
    </Component>
  );
};
