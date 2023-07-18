'use client';

import { AnchorHTMLAttributes, useEffect, useState } from 'react';

import { useLanguage } from '../../hooks/language';

interface ButtonGetInTouchProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  backgroundColor: 'orange' | 'white';
}

export function ButtonGetInTouch({
  backgroundColor,
  ...rest
}: ButtonGetInTouchProps) {
  const { language, strings } = useLanguage();

  const [link, setLink] = useState('');

  useEffect(() => {
    let text =
      'Hello,%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20work';

    if (language === 'ptBr')
      text =
        'Olá,%20acessei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho';

    setLink(`https://wa.me/5516991635766?text=${text}`);
  }, [language]);

  return (
    <a
      className={`flex justify-center items-center py-5 px-8 gap-2 border-none rounded-[60px] ${
        backgroundColor === 'orange' ? 'bg-orange-500' : 'bg-white'
      }`}
      href={link}
      target="_blank"
      {...rest}
    >
      <p className="not-italic font-bold text-base leading-5 text-black-500">
        {strings.Home.getInTouch}
      </p>
    </a>
  );
}
