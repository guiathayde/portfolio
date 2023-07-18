'use client';

import { useWindowDimensions } from '../../../hooks/windowDimensions';

interface ContentProps {
  title: string;
  description: string;
  duration: string;
}

export function Content({ title, description, duration }: ContentProps) {
  const { width } = useWindowDimensions();

  return (
    <div className="flex flex-col pb-6 mt-8 border-b-2 border-b-white border-opacity-5">
      <h4 className="flex items-center not-italic font-bold text-3xl leading-8 text-white mb-2 max-sm:overflow-hidden max-sm:break-words">
        {title}
      </h4>
      <div
        className={`flex flex-${width > 640 ? 'row' : 'col'} justify-between`}
      >
        <p className="not-italic font-normal text-sm leading-6 text-white overflow-hidden max-w-[70%] break-words max-sm:max-w-sm">
          {description}
        </p>
        <p className="not-italic font-normal text-sm leading-6 text-white mr-6">
          {duration}
        </p>
      </div>
    </div>
  );
}
