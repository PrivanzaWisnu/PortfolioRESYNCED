"use client"

import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { SkillCard } from "@/components/ui/skill-card"
import { 
  PROGRAMMING_LANGUAGES, 
  FRAMEWORK_LIBRARIES, 
  TOOLS, 
  LANGUAGES 
} from "@/data/skills"

export default function SkillsPage() {
  const { language } = useSettingsStore()
  const t = language === 'en' ? en : id

  // 🎯 Registrasi Data menggunakan Objek Literal (Super Clean, Bebas Switch-Case)
  const skillRegistry = {
    progLang: PROGRAMMING_LANGUAGES,
    frLib: FRAMEWORK_LIBRARIES,
    tlSft: TOOLS,
    lang: LANGUAGES,
  } as const

  const categories = Object.keys(skillRegistry) as Array<keyof typeof skillRegistry>

  return (
    <div className="flex flex-col gap-10 p-1">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          {t.menu.skills}
        </h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          {t.skills.description}
        </p>
      </div>

      {/* Main Grid Categories */}
      <div className="flex flex-col gap-12">
        {categories.map((key) => (
          <div key={key} className="flex flex-col gap-4">
            {/* Judul Kategori Otomatis Bilingual */}
            <h2 className="text-xl font-semibold tracking-tight border-b pb-2 border-border text-foreground">
              {t.skills[key]}
            </h2>

            {/* Grid Items - Diubah ke 3 kolom pada layar terkecil agar aspect-square card pas dimensinya */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {skillRegistry[key].map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  image={skill.image}
                  lou={skill.lou}
                  priority={key === "progLang"} // 🎯 Baris pertama akan di-load instan oleh Next.js (LCP Aman)
                  labels={t.skills.levels}     // 🎯 Mengirim objek translasi level (pastikan key ini terdaftar di en.ts & id.ts kamu)
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}