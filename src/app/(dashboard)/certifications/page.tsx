"use client"

import { useState } from "react"
import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { CERTIFICATIONS_DATA, CertificationItem } from "@/data/certifications"
import { CertificationCard } from "@/components/ui/certification-card"
import { FolderCheck, X, Download, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function CertificationsPage() {
  const { language } = useSettingsStore()
  
  const t = language === 'en' ?  en : id;

  const [activePreview, setActivePreview] = useState<CertificationItem | null>(null)

  return (
    <div className="flex flex-col gap-10 p-1">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary flex items-center gap-3">
          <FolderCheck className="w-8 h-8" />
          {t.menu.certifications}
        </h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          {t.certifications.description}
        </p>
      </div>
      
      {/* Certifications Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS_DATA.map((cert) => (
          <CertificationCard
            key={cert.id}
            name={cert.name}
            image={cert.image}
            desc={cert.desc}
            download={cert.download}
            onOpenPreview={() => setActivePreview(cert)}
          />
        ))}
      </div>

      {/* Overlay */}
      {activePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all duration-300 ease-in-out animate-in fade-in"
          onClick={() => setActivePreview(null)}
        >
          <div 
            className="relative flex flex-col w-full max-w-3xl max-h-[85vh] rounded-2xl bg-card border border-border shadow-2xl overflow-hidden transition-all duration-300 ease-out animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border p-4 bg-muted/40">
              <div>
                <h2 className="text-sm md:text-base font-bold text-foreground line-clamp-1">{activePreview.name}</h2>
                <p className="text-[11px] text-muted-foreground">{t.certifications.credView}</p>
              </div>
              <button
                onClick={() => setActivePreview(null)}
                className="p-1.5 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto bg-muted/10 p-4 md:p-6 flex items-center justify-center min-h-[250px]">
              <div className="relative w-full h-[45vh] md:h-[55vh] rounded-xl overflow-hidden bg-card border border-border shadow-inner">
                <Image
                  src={activePreview.image}
                  alt={activePreview.name}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                  quality={95}
                  draggable="false"
                />
                <div className="absolute inset-0 z-10 w-full h-full bg-transparent" />
              </div>
            </div>

            {/* Footer Modal Action */}
            <div className="flex items-center justify-end gap-3 border-t border-border p-4 bg-muted/40">
              <a
                href={activePreview.download}
                download
                className="flex items-center gap-1.5 text-xs font-semibold py-2 px-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>{t.certifications.download}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}