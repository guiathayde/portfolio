import { InputHTMLAttributes, ReactNode } from 'react';

interface HeadingProps extends InputHTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return (
    <span className="not-italic font-extrabold text-5xl leading-extra-loose mr-3">
      {children}
    </span>
  );
}
