interface TechMarqueeProps {
  techName: string;
}

export function TechMarquee({ techName }: TechMarqueeProps) {
  return (
    <>
      <span
        className="
          not-italic 
          font-extrabold 
          text-sm
          leading-6
          text-center 
          tracking-[0.06em] 
          uppercase 
          text-black-500
          mx-4"
      >
        {techName}
      </span>
      <span
        className="
          not-italic 
          font-extrabold 
          text-[35px] 
          h-8 
          text-center 
          align-middle 
          text-orange-500
        "
      >
        *
      </span>
    </>
  );
}
