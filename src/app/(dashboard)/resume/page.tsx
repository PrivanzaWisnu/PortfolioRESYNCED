"use client"

import { Download } from "lucide-react";
import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"

export default function ResumePage() {
  const { language } = useSettingsStore()
  const t = language === 'en' ? en : id;

  const cvPath = "/documents/PrivanzaWisnuAqilanndra_CV .pdf";

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Resume / CV</h1>
          <p className="text-muted-foreground mt-2">
            {t.resume?.description || "My professional resume and detailed career journey."}
          </p>
        </div>
        
        {/* Tombol Download */}
        <a 
          href={cvPath} 
          download="PrivanzaWisnuAqilanndra_CV.pdf"
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20 self-start sm:self-auto focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <Download className="w-4 h-4" /> 
          <span>{t.resume?.download || "Download CV"}</span>
        </a>
      </div>

      {/* Native Document Viewer (iframe) */}
      <div className="w-full h-[75vh] md:h-[85vh] rounded-xl overflow-hidden border border-border shadow-sm bg-muted/20">
        <iframe 
          src={cvPath}
          className="w-full h-full border-none"
          title="Resume Privanza"
        />
      </div>
    </div>
  )
}