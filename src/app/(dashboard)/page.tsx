"use client"

import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { RotatingGreeting } from "@/components/ui/rotating-greeting"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { HighlightCard } from "@/components/ui/highlight-card"
import { SocialButton } from "@/components/ui/social-button"

import { ABOUT } from "@/data/about"

export default function HomePage() {
  const { language } = useSettingsStore()
  const t = language === 'en' ? en : id;

  return (
    <div className="space-y-16 pb-8 animate-in fade-in duration-500">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 md:pt-12">
        <div className="space-y-6 lg:col-span-7 order-2 lg:order-1">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            👋 Available for work & opportunities
          </div>
          
          <RotatingGreeting />
          <div className="space-y-4 max-w-[600px] text-lg text-muted-foreground leading-relaxed">
            <p>
              {ABOUT.desc}
            </p>
            <p>
              I'm also interested in learning how to make data into useful insights. I love turning ideas into working projects and I'm always curious about how to improve both the logic behind the system and the experience in front of the screen. I would like to learn new things to develop my skills.
            </p>
            {/* <p>
              Halo! Saya seorang mahasiswa BINUS University yang memiliki *passion* besar dalam membangun aplikasi web dan *mobile* yang modern, interaktif, dan efisien. 
            </p>
            <p>
              Saat ini, saya sedang mengembangkan kemampuan profesional saya sebagai App Developer Intern di PT Bintang Toedjoe (Kalbe Customer Health), di mana saya terlibat langsung dalam merancang solusi teknologi yang berdampak nyata.
            </p> */}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link href="/projects" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              {t.hero.viewMyWork} <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link href="/resume" className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium border border-border hover:bg-accent transition-colors cursor-pointer">
              <FileText className="w-4 h-4" /> {t.hero.viewResume}
            </Link>

            <Link href="/contact" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              {t.hero.contactMe}
            </Link>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
              <SocialButton href="https://github.com/PrivanzaWisnu">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </SocialButton>
              <SocialButton href="https://www.linkedin.com/in/privanza-wisnu/" hoverColorClass="hover:text-[#0a66c2]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </SocialButton>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-muted/50 shadow-2xl overflow-hidden bg-muted">
            <Image 
              src={ABOUT.image}
              alt="Privanza Wisnu" 
              fill 
              sizes="(max-width: 768px) 256px, (max-width: 1280px) 320px, 384px"
              className="object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

      </section>

      {/* --- Quick Highlights --- */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <HighlightCard title="Frontend" description="Membangun UI interaktif dengan React, Next.js, dan Tailwind CSS." />
        <HighlightCard title="Web App" description="Fokus pada pengalaman pengguna di berbagai perangkat layar."/>
        <HighlightCard title="Problem Solver" description="Menganalisis sistem dan merancang logika aplikasi yang efisien."/>
      </section>

    </div>
  )
}