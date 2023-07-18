interface TechProps {
  text: string;
}

export function Tech({ text }: TechProps) {
  return (
    <div className="flex flex-row items-center not-italic font-normal text-sm leading-6 capitalize text-white">
      <div className="flex mr-2 items-center">
        <div className="w-3 h-3 bg-orange-300 rounded-full" />
        <div className="w-3 h-3 bg-orange-200 rounded-full ml-[-4px] mr-1" />
        {text}
      </div>
    </div>
  );
}
