import Image, { StaticImageData } from "next/image";
import { Download, Eye } from "lucide-react";
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { useSettingsStore } from "@/store/use-settings";

interface CertificationCardProps {
  name: string;
  image: string | StaticImageData;
  desc: string;
  download: string;
  onOpenPreview: () => void;
}

export function CertificationCard({ name, image, desc, download, onOpenPreview }: CertificationCardProps) {
    const { language } = useSettingsStore()
      
    const t = language === 'en' ?  en : id;


  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300">
      <div>
        <div className="relative w-full h-40 rounded-xl overflow-hidden bg-muted border border-border mb-4 group-hover:opacity-90 transition-opacity">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable="false"
          />
          <div className="absolute inset-0 z-10 w-full h-full bg-transparent" />
        </div>

        <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-5 leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          onClick={onOpenPreview}
          className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-muted border border-border transition-all"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{t.certifications.view}</span>
        </button>

        <a
          href={download}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{t.certifications.download}</span>
        </a>
      </div>
    </div>
  );
}