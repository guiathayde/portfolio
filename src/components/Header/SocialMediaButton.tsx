import { AnchorHTMLAttributes } from 'react';
import Image from 'next/image';

interface SocialMediaButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: any;
  alt: string;
}

export function SocialMediaButton({
  icon,
  alt,
  ...props
}: SocialMediaButtonProps) {
  return (
    <a
      className="flex items-center justify-center w-5 h-5 bg-transparent m-1 border-none cursor-pointer"
      {...props}
    >
      <Image className="w-5 h-5" src={icon} width={20} height={20} alt={alt} />
    </a>
  );
}
