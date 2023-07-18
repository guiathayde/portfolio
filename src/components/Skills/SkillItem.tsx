interface SkillItemProps {
  rectangleColor: string;
  title: string;
  description: string;
}

export function SkillItem({
  rectangleColor,
  title,
  description,
}: SkillItemProps) {
  return (
    <div className="flex flex-row items-center gap-5 p-0">
      <div
        className="w-[8px] h-full rounded-[30px] bg-blue-500"
        style={{
          backgroundColor: rectangleColor,
        }}
      />

      <div className="flex flex-col items-start gap-2.5 p-0">
        <h4 className="not-italic font-bold text-base leading-6 text-white">
          {title}
        </h4>
        <p className="not-italic font-normal text-sm leading-6 text-white">
          {description}
        </p>
      </div>
    </div>
  );
}
