"use client"

import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { Sparkles, Video, Hammer, Music, ArrowUpRight, Play } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BeyondTheCodesPage() {
  const { language } = useSettingsStore()
  const isEn = language === 'en'

  const content = {
    title: isEn ? "Beyond the Codes" : "Di Balik Kode",
    desc: isEn 
      ? "A glimpse into my creative universe, hobbies, and logical passions outside of programming."
      : "Sekilas tentang dunia kreatif, hobi, dan passion saya di luar dunia pemrograman.",
    sections: {
      creator: {
        title: isEn ? "Aspiring Content Creator" : "Content Creator Pemula",
        desc: isEn
          ? "Exploring the world of content creation. Sharing my journey, gaming experiences, and creative processes through short-form and engaging videos."
          : "Menjelajahi dunia content creation. Membagikan perjalanan, pengalaman gaming, serta proses kreatif melalui video pendek yang menarik.",
      },
      craft: {
        title: isEn ? "Cosplay & Prop Making" : "Cosplay & Pembuatan Replika",
        desc: isEn
          ? "Bringing virtual items into reality. Experiencing hands-on crafting with EVA foam, texturing, and custom detailed paint jobs."
          : "Membawa item virtual ke dunia nyata. Mengalami langsung proses crafting dengan EVA foam, pemberian tekstur, dan pengecatan detail.",
      },
      music: {
        title: isEn ? "J-Rock & Guitar Riffs Enthusiast" : "Penyuka J-Rock & Melodi Gitar",
        desc: isEn
          ? "Deeply analytical about music structures, specifically powerful guitar build-ups right before the song's chorus hits."
          : "Sangat analitis terhadap struktur musik, khususnya build-up melodi gitar yang kuat tepat sebelum lagu memasuki bagian chorus.",
      }
    }
  }

  return (
    <div className="flex flex-col gap-10 p-1 animate-in fade-in duration-500">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          {content.title}
        </h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          {content.desc}
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
              <CardTitle className="text-xl font-bold">{content.sections.creator.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-2 space-y-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {content.sections.creator.desc}
            </p>

            {/* Social Media Links Layout inside Content Creator */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                {isEn ? "Connect via My Content Channels" : "Hubungkan via Channel Kontenku"}
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* TikTok Button */}
                <a 
                  href="https://www.tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-muted/20 hover:bg-accent/50 transition-colors group/link"
                >
                  <div className="flex items-center gap-3">
                    {/* TikTok Custom SVG */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.6 4.17 1.12 1.22 2.7 1.95 4.3 2.12v3.74c-1.39-.07-2.77-.51-3.93-1.32-.4-.28-.77-.61-1.1-.97v6.51c-.02 2.11-.73 4.16-2.03 5.71-1.61 1.92-4.07 3.03-6.58 3.03-1.84-.02-3.66-.59-5.17-1.66C1.94 20.25.7 18.06.41 15.74c-.39-3.12.91-6.28 3.39-8.17 1.76-1.34 3.97-1.95 6.18-1.72v3.83c-.85-.12-1.73.04-2.48.49-1.01.59-1.63 1.67-1.63 2.84-.02 1.48.91 2.83 2.3 3.34.82.3 1.7.3 2.5-.02 1.05-.43 1.75-1.46 1.77-2.6V0h.08z"/></svg>
                    <span className="text-sm font-semibold">TikTok</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground transition-colors" />
                </a>

                {/* YouTube Button */}
                <a 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-muted/20 hover:bg-accent/50 transition-colors group/link"
                >
                  <div className="flex items-center gap-3">
                    <Play className="w-5 h-5 text-red-600 group-hover/link:text-red-500 transition-colors" />
                    <span className="text-sm font-semibold">YouTube</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground transition-colors" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. Cosplay & Craft Card - Medium */}
        <Card className="lg:col-span-5 border-border bg-card shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="p-6 pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                <Hammer className="w-5 h-5" />
              </div>
              <CardTitle className="text-xl font-bold">{content.sections.craft.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-2 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {content.sections.craft.desc}
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="p-3 rounded-xl border border-border bg-muted/20 text-center">
                <span className="text-xs font-bold block text-primary">EVA Foam</span>
                <span className="text-[11px] text-muted-foreground">Armor Crafting</span>
              </div>
              <div className="p-3 rounded-xl border border-border bg-muted/20 text-center">
                <span className="text-xs font-bold block text-primary">Waterproof</span>
                <span className="text-[11px] text-muted-foreground">Coatings & Details</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. J-Rock / Music Component - Full Width Bottom */}
        <Card className="lg:col-span-12 border-border bg-card shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="p-6 pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500">
                <Music className="w-5 h-5" />
              </div>
              <CardTitle className="text-xl font-bold">{content.sections.music.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
                {content.sections.music.desc}
              </p>
              {/* Fake Audio Player / Playlist Link */}
              <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-xl border border-border shrink-0 w-full md:w-auto md:min-w-[300px]">
                <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center text-white font-bold animate-pulse">
                  ▶
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Now Energizing</p>
                  <p className="text-sm font-bold truncate">Pre-Chorus Guitar Riffs</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}