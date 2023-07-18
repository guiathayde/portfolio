import { AnchorHTMLAttributes } from 'react';
import Image from 'next/image';

interface SocialMediaButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  iconSrc: any;
  alt: string;
}

export function SocialMediaButton({
  iconSrc,
  alt,
  ...props
}: SocialMediaButtonProps) {
  return (
    <a
      className="flex items-center justify-center w-4 h-4 bg-transparent m-1 border-none"
      {...props}
    >
      <Image
        className="w-[1.125rem] h-[1.125rem]"
        src={iconSrc}
        width={18}
        height={18}
        alt={alt}
      />
    </a>
  );
}
