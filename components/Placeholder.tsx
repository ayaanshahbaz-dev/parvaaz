import React from 'react';

export interface PlaceholderProps {
  aspectRatio?: '4/3' | '16/9' | 'full' | string;
  text?: string;
  className?: string;
}

export default function Placeholder({
  aspectRatio = '4/3',
  text = 'Replace media',
  className = '',
}: PlaceholderProps) {
  let aspectClass = '';
  if (aspectRatio === '4/3') {
    aspectClass = 'aspect-[4/3] w-full';
  } else if (aspectRatio === '16/9') {
    aspectClass = 'aspect-[16/9] w-full';
  } else if (aspectRatio === 'full') {
    aspectClass = 'w-full h-full';
  }

  return (
    <div
      className={`bg-[#E4E4E0] rounded-[2px] flex items-center justify-center text-[#6B6B6B] text-[13px] leading-[1.4] select-none ${aspectClass} ${className}`}
      aria-label={text}
    >
      <span>{text}</span>
    </div>
  );
}
