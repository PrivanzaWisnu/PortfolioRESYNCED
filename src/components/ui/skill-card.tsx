import Image, { StaticImageData } from "next/image";
import { Star } from "lucide-react";

interface SkillCardProps {
  name: string;
  image: string | StaticImageData;
  lou: number;
  priority?: boolean;
  labels: {
    beginner: string;
    basic: string;
    intermediate: string;
    advanced: string;
    expert: string;
  };
}

export function SkillCard({ name, image, lou, priority = false, labels }: SkillCardProps) {
  const getLouLabel = (level: number) => {
    switch (level) {
      case 1: return labels.beginner;
      case 2: return labels.basic;
      case 3: return labels.intermediate;
      case 4: return labels.advanced;
      case 5: return labels.expert;
      default: return "";
    }
  };

  return (
    <div 
      tabIndex={0} 
      className="group relative w-full aspect-square rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-default"
    >
      {/* 1. STATE NORMAL */}
      <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-6 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:scale-50">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={`Logo ${name}`}
            fill
            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
            loading={priority ? undefined : "lazy"}
            priority={priority}
            className="object-contain drop-shadow-sm"
          />
        </div>
      </div>

      {/* 2. STATE HOVER (Nama & LOU) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-3 bg-primary/5 transition-all duration-300 opacity-0 scale-125 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100">
        <span className="font-bold text-center text-sm sm:text-base text-foreground mb-2 sm:mb-3 px-1">
          {name}
        </span>

        <div className="flex gap-0.5 sm:gap-1 mb-1.5 sm:mb-2">
          {[1, 2, 3, 4, 5].map(starIndex => (
            <Star 
              key={starIndex} 
              className={`w-3 h-3 sm:w-4 sm:h-4 ${starIndex <= lou ? "fill-primary text-primary" : "fill-muted text-muted"}`} 
            />
          ))}
        </div>

        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary text-center">
          {getLouLabel(lou)}
        </span>
      </div>
    </div>
  );
}