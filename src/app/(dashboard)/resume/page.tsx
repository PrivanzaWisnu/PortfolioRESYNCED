"use client"

import { Download } from "lucide-react";
import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"

export default function ResumePage() {
    const { language } = useSettingsStore()
    const t = language === 'en' ? en : id;

    return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Resume / CV</h1>
          <p className="text-muted-foreground mt-2">{t.resume.description}</p>
        </div>
        
        <a 
            href="/PrivanzaWisnuAqilanndra_CV .pdf" 
            download="PrivanzaWisnuAqilanndra_CV .pdf" 
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            <Download className="w-4 h-4" /> {t.resume.download}
          </a>
      </div>

      {/* DOCUMENT VIEWER NATIVE */}
      <div className="w-full h-[75vh] md:h-[85vh] rounded-xl overflow-hidden border border-border shadow-sm bg-muted/20">
        <iframe 
          src="/PrivanzaWisnuAqilanndra_CV .pdf" 
          className="w-full h-full"
          title="Resume Privanza"
        />
        {/* if iframe blocks pdf viewer, fallback to object tag 
        <object data="/PrivanzaWisnuAqilanndra_CV .pdf" type="application/pdf" className="w-full h-full">
          <p>Browser kamu tidak mendukung PDF viewer. <a href="/CV_Privanza_Wisnu.pdf" className="text-primary">Download di sini</a></p>
        </object>
        */}
      </div>
    </div>
  )
}