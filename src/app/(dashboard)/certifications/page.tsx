"use client"

import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"


export default function CertificationsPage() {
    const { language } = useSettingsStore()
    const t = language === 'en' ? en : id;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          {t.menu.certifications}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {t.certifications.description}
        </p>
      </div>
      
      {/* Testing Box for Tailwind */}
      <div className="h-64 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-card-foreground">Area Konten</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Coba klik tombol ☰ di atas kiri, sidebar-nya harusnya mulus buka-tutup!
        </p>
      </div>
    </div>
  )
}