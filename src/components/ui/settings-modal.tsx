"use client"

import { useEffect, useState } from "react"
import { useSettingsStore } from "@/store/use-settings"
import { useTheme } from "next-themes"
import { X, Monitor, Moon, Sun, Check } from "lucide-react"
import { fonts, DEFAULT_FONT_ID, FONT_SIZES } from "@/config/fonts"
import { cn } from "@/lib/utils"
import { en } from "@/locales/en"
import { id } from "@/locales/id"

export function SettingsModal() {
  const settings = useSettingsStore()
  const { theme, setTheme } = useTheme()
  const [backup, setBackup] = useState<any>(null)

  const t = settings.language === 'id' ? id : en

  useEffect(() => {
    if (settings.isSettingsOpen) {
      setBackup({
        fontId: settings.fontId,
        fontSize: settings.fontSize,
        customColors: { ...settings.customColors },
        reduceMotion: settings.reduceMotion,
        theme: theme
      })
    }
  }, [settings.isSettingsOpen])

  if (!settings.isSettingsOpen) return null

  const handleCancel = () => {
    if (backup) {
      settings.setFontId(backup.fontId)
      settings.setFontSize(backup.fontSize)
      settings.setCustomColors(backup.customColors)
      settings.setReduceMotion(backup.reduceMotion)
      setTheme(backup.theme || 'system')
    }
    settings.setSettingsOpen(false)
  }

  const handleReset = () => {
    settings.setFontId(DEFAULT_FONT_ID)
    settings.setFontSize('default')
    settings.setCustomColors({})
    settings.setReduceMotion(false)
    setTheme('system')
  }

  const activeClass = "bg-primary text-primary-foreground border-primary font-bold shadow-sm"
  const inactiveClass = "hover:bg-accent border-border"

  return (
    <>
      {/* Dynamic Font Loader */}
      <style dangerouslySetInnerHTML={{
        __html: Object.values(fonts).map(f => f.load?.url ? `@import url('${f.load.url}');` : '').join('\n')
      }} />

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
        <div className="bg-background border border-border w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
          
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-border bg-muted/20">
            <h2 className="text-xl font-bold tracking-tight">{t.settings.preferences}</h2>
            <button onClick={handleCancel} className="p-2 hover:bg-accent rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-8">
            
            {/* 1. Appearance / Theme */}
            <section className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t.settings.appearance}</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'light', icon: Sun, label: t.settings.light },
                  { id: 'dark', icon: Moon, label: t.settings.dark },
                  { id: 'system', icon: Monitor, label: t.settings.system }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTheme(item.id)}
                    className={cn(
                      "flex flex-col items-center gap-2 border p-3 rounded-xl transition-all",
                      theme === item.id ? activeClass : inactiveClass
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Font Family */}
            <section className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t.settings.fontFamily}</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.values(fonts).map((font) => (
                  <button
                    key={font.id}
                    onClick={() => settings.setFontId(font.id)}
                    style={{ fontFamily: font.fontFamily }}
                    className={cn(
                      "border p-3 rounded-xl text-left transition-all relative overflow-hidden",
                      settings.fontId === font.id ? activeClass : inactiveClass
                    )}
                  >
                    <span className="block truncate pr-6">{font.name}</span>
                    {settings.fontId === font.id && <Check className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4" />}
                  </button>
                ))}
              </div>
            </section>

            {/* Font Size */}
            <section className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t.settings.fontSize}</label>
              <div className="flex bg-muted/50 p-1 rounded-xl border border-border">
                {FONT_SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => settings.setFontSize(size)}
                    className={cn(
                      "flex-1 py-2 text-xs font-medium rounded-lg transition-all",
                      settings.fontSize === size ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {t.settings.sizes[size]}
                  </button>
                ))}
              </div>
            </section>

            {/* 4. Brand Color */}
            <section className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t.settings.themeColor}</label>
              <div className="flex items-center gap-4 bg-accent/30 p-4 rounded-xl border border-border">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-inner">
                  <input
                    type="color"
                    value={settings.customColors.primary || "#2563eb"}
                    onChange={(e) => settings.setCustomColors({ primary: e.target.value })}
                    className="absolute inset-0 w-[150%] h-[150%] -translate-x-[15%] -translate-y-[15%] cursor-pointer"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.settings.pickThemeColor}</p>
                  <p className="text-xs text-muted-foreground">Hex: {settings.customColors.primary || "#2563eb"}</p>
                </div>
              </div>
            </section>

            {/* 5. Reduce Motion */}
            <section className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-border">
              <div className="space-y-0.5">
                <label className="text-sm font-bold">{t.settings.reduceMotion}</label>
                <p className="text-xs text-muted-foreground">{t.settings.reduceMotionDesc}</p>
              </div>
              <button 
                onClick={() => settings.setReduceMotion(!settings.reduceMotion)}
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative",
                  settings.reduceMotion ? "bg-primary" : "bg-muted-foreground/30"
                )}
              >
                <div className={cn(
                  "w-4 h-4 rounded-full bg-white absolute top-1 transition-all",
                  settings.reduceMotion ? "left-7" : "left-1"
                )} />
              </button>
            </section>

          </div>

          {/* Footer */}
          <div className="p-5 border-t border-border bg-muted/10 flex items-center justify-between">
            <button onClick={handleReset} className="text-sm font-bold text-destructive hover:underline">
              {t.settings.resetDefault}
            </button>
            <div className="flex gap-3">
              <button onClick={handleCancel} className="px-5 py-2.5 text-sm font-bold border border-border rounded-xl hover:bg-accent transition-all">
                {t.settings.cancel}
              </button>
              <button onClick={() => settings.setSettingsOpen(false)} className="px-5 py-2.5 text-sm font-bold bg-primary text-primary-foreground rounded-xl hover:opacity-90 shadow-lg transition-all">
                {t.settings.saveChanges}
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}