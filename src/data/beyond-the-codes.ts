import { Video, Hammer, Music, Play } from "lucide-react"
import { en } from "@/locales/en"
import { id } from "@/locales/id"

export interface BeyondSection {
  id: string
  icon: any
  iconColorClass: string
  bgIconClass: string
  title: {
    en: string
    id: string
  }
  desc: {
    en: string
    id: string
  }
  badges?: {
    en: string[]
    id: string[]
  }
}

export const BEYOND_DATA: BeyondSection[] = [
  {
    id: "creator",
    icon: Video,
    iconColorClass: "text-primary",
    bgIconClass: "bg-primary/10",
    title: {
      en: "Aspiring Content Creator",
      id: "Content Creator Pemula"
    },
    desc: {
      en: "Exploring the world of content creation. Sharing my journey, gaming experiences, and creative processes through short-form and engaging videos.",
      id: "Menjelajahi dunia content creation. Membagikan perjalanan, pengalaman gaming, serta proses kreatif melalui video pendek yang menarik."
    }
  },
  {
    id: "craft",
    icon: Hammer,
    iconColorClass: "text-amber-500",
    bgIconClass: "bg-amber-500/10",
    title: {
      en: "Cosplay & Prop Making",
      id: "Cosplay & Pembuatan Replika"
    },
    desc: {
      en: "Bringing virtual items into reality. Experiencing hands-on crafting with EVA foam, texturing, and custom detailed paint jobs.",
      id: "Membawa item virtual ke dunia nyata. Mengalami langsung proses crafting dengan EVA foam, pemberian tekstur, dan pengecatan detail."
    },
    badges: {
      en: ["EVA Foam (Armor Crafting)", "Waterproof (Coatings & Details)"],
      id: ["EVA Foam (Armor Crafting)", "Waterproof (Coatings & Details)"]
    }
  },
  {
    id: "music",
    icon: Music,
    iconColorClass: "text-rose-500",
    bgIconClass: "bg-rose-500/10",
    title: {
      en: "J-Rock & Guitar Riffs Enthusiast",
      id: "Penyuka J-Rock & Melodi Gitar"
    },
    desc: {
      en: "Deeply analytical about music structures, specifically powerful guitar build-ups right before the song's chorus hits.",
      id: "Sangat analitis terhadap struktur musik, khususnya build-up melodi gitar yang kuat tepat sebelum lagu memasuki bagian chorus."
    }
  }
]