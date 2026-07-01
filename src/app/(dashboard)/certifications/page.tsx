"use client"

import { useState } from "react"
import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { CERTIFICATIONS_DATA, CertificationItem } from "@/data/certifications"
import { CertificationCard } from "@/components/ui/certification-card"
import { Button } from "@/components/ui/button"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"
import { FolderCheck, Download } from "lucide-react"
import Image from "next/image"

export default function CertificationsPage() {
  const { language } = useSettingsStore()
  const isEn = language === 'en' ? en : id;

  const [activePreview, setActivePreview] = useState<CertificationItem | null>(null)

  return (
    <div className="flex flex-col gap-10 p-1">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary flex items-center gap-3">
          <FolderCheck className="w-8 h-8" />
          {isEn.menu.certifications}
        </h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          {isEn.certifications.description}
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

      <Dialog open={!!activePreview} onOpenChange={(open) => !open && setActivePreview(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[85vh] p-0 overflow-hidden flex flex-col gap-0 rounded-2xl">
          
          {/* Modal Header */}
          <DialogHeader className="p-4 border-b border-border bg-muted/40 space-y-0.5 text-left">
            <DialogTitle className="text-sm md:text-base font-bold text-foreground line-clamp-1 pr-6">
              {activePreview?.name}
            </DialogTitle>
            <DialogDescription className="text-[11px] text-muted-foreground">
              {isEn.certifications.credView}
            </DialogDescription>
          </DialogHeader>

          {/* Modal Body / Image Preview */}
          {activePreview && (
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
          )}

          {/* Footer Modal Action */}
          <div className="flex items-center justify-end gap-3 border-isEn border-border p-4 bg-muted/40">
            <Button
              variant="default"
              size="sm"
              asChild
              className="group/down gap-1.5 rounded-xl font-semibold shadow-sm active:scale-[0.98] transition-all"
            >
              <a href={activePreview?.download} download>
                <Download className="w-3.5 h-3.5 group-hover/down:translate-y-0.5 transition-transform duration-200" />
                <span>{isEn.certifications.download}</span>
              </a>
            </Button>
          </div>
          
        </DialogContent>
      </Dialog>
    </div>
  )
}