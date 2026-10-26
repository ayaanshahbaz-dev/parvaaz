import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'nav';
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  target,
  rel,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const heightClass = size === 'nav' ? 'h-10 text-[15px]' : 'h-12 text-[15px]';
  const baseStyles = `${heightClass} px-6 rounded-[2px] font-medium transition-colors duration-150 inline-flex items-center justify-center cursor-pointer select-none border`;

  const variantStyles =
    variant === 'primary'
      ? 'bg-[#1565E8] border-[#1565E8] text-white hover:bg-[#0f52c4] hover:border-[#0f52c4]'
      : 'bg-transparent border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white';

  const combinedClass = `${baseStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || (href.startsWith('http') ? '_blank' : undefined)}
          rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
          className={combinedClass}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
    >
      {children}
    </button>
  );
}
