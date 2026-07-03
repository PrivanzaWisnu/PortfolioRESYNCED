"use client"

import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { Sparkles, Video, Hammer, Music, ArrowUpRight, Play, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function BeyondTheCodesPage() {
  const { language } = useSettingsStore()
  const t = language === 'en' ? en : id

  return (
    <div className="flex flex-col gap-10 p-1 animate-in fade-in duration-500">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          {t.beyond.title}
        </h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          {t.beyond.desc}
        </p>
      </div>

      {/* Grid Layout Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* 1. Content Creator Card - Large */}
        <Card className="lg:col-span-7 border-border bg-card shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="p-6 pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Video className="w-5 h-5" />
              </div>
              <CardTitle className="text-xl font-bold">{t.beyond.creator.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-2 space-y-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.beyond.creator.desc}
            </p>

            {/* Social Media Links Layout - Menggunakan Shadcn Button */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                {t.beyond.connectChannels}
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* YouTube Button */}
                <Button 
                  variant="outline" 
                  className="w-full justify-between p-3.5 h-auto rounded-xl border border-border bg-muted/20 hover:bg-accent/50 transition-colors group/link"
                  title="Check my Youtube Channel!"
                  asChild
                >
                  <a href="https://www.youtube.com/@VanZ2K4" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-3 text-foreground">
                      <Play className="w-5 h-5 text-red-600 group-hover/link:text-red-500 transition-colors" />
                      <span className="text-sm font-semibold">YouTube</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground transition-colors" />
                  </a>
                </Button>

                {/* TikTok Button */}
                <Button 
                  variant="outline" 
                  className="w-full justify-between p-3.5 h-auto rounded-xl border border-border bg-muted/20 hover:bg-accent/50 transition-colors group/link"
                  title="Check my Tiktok Account!"
                  asChild
                >
                  <a href="https://www.tiktok.com/@justvanzeey" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-3 text-foreground">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.6 4.17 1.12 1.22 2.7 1.95 4.3 2.12v3.74c-1.39-.07-2.77-.51-3.93-1.32-.4-.28-.77-.61-1.1-.97v6.51c-.02 2.11-.73 4.16-2.03 5.71-1.61 1.92-4.07 3.03-6.58 3.03-1.84-.02-3.66-.59-5.17-1.66C1.94 20.25.7 18.06.41 15.74c-.39-3.12.91-6.28 3.39-8.17 1.76-1.34 3.97-1.95 6.18-1.72v3.83c-.85-.12-1.73.04-2.48.49-1.01.59-1.63 1.67-1.63 2.84-.02 1.48.91 2.83 2.3 3.34.82.3 1.7.3 2.5-.02 1.05-.43 1.75-1.46 1.77-2.6V0h.08z"/></svg>
                      <span className="text-sm font-semibold">TikTok</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground transition-colors" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. Cosplay & Craft Card - Medium */}
        <Card className="lg:col-span-5 border-border bg-card shadow-sm hover:shadow-md flex flex-col justify-between transition-all duration-300">
          <div>
            <CardHeader className="p-6 pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                  <Hammer className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl font-bold">{t.beyond.craft.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-2 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.beyond.craft.desc}
              </p>
              
              {/* Info Project Aktif (Comifuro Build) */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-600 dark:text-amber-400 font-medium">
                <Wrench className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{t.beyond.craft.currentProject}</span>
              </div>

              {/* Aspek Teknik & Alat Kerja Tambahan */}
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <div className="p-2 rounded-lg border border-border bg-muted/20 text-center">
                  <span className="text-[11px] font-bold block text-primary truncate">EVA Foam</span>
                  <span className="text-[9px] text-muted-foreground truncate block">Armor Base</span>
                </div>
                <div className="p-2 rounded-lg border border-border bg-muted/20 text-center">
                  <span className="text-[11px] font-bold block text-primary truncate">No Drop</span>
                  <span className="text-[9px] text-muted-foreground truncate block">Coatings</span>
                </div>
                <div className="p-2 rounded-lg border border-border bg-muted/20 text-center">
                  <span className="text-[11px] font-bold block text-primary truncate">Grinder</span>
                  <span className="text-[9px] text-muted-foreground truncate block">Detailing</span>
                </div>
              </div>
            </CardContent>
          </div>

          {/* Bagian Metrik / Statistik Kerja Kreatif */}
          <div className="px-2 pb-5 pt-2 flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/50 mx-6 bg-transparent">
            <div className="text-center">
              <span>{t.beyond.craft.statsTime}</span>
            </div>
            <div className="text-center">
              <span>{t.beyond.craft.statsScale}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}