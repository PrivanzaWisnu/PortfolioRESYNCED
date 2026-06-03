"use client"

import Link from "next/link"
import { useEffect } from "react"
import { useSidebar } from "@/store/use-sidebar"
import { cn } from "@/lib/utils"
import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"

import { Logo } from "@/components/ui/logo"
import Image from "next/image"

// Import data navigasi yang baru kita edit
import { navigationConfig } from "@/config/navigation" // Pastikan path folder-nya sesuai ya!

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebar()
  const { language } = useSettingsStore()
  const t = language === 'en' ? en : id;

  useEffect(() => {
    const tabletQuery = window.matchMedia("(max-width: 1024px)")
    
    // Auto-collapse jika layar tablet ke bawah saat load
    if (tabletQuery.matches) setIsOpen(false)

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false) // Collapse saat masuk tablet
      else setIsOpen(true) // Expand saat masuk desktop
    }

    tabletQuery.addEventListener("change", handler)
    return () => tabletQuery.removeEventListener("change", handler)
  }, [setIsOpen])

  const handleLinkClick = () => {
    // Cek apakah layar saat ini ukurannya HP/Tablet (< 1024px)
    if (window.innerWidth < 1024) {
      setIsOpen(false) // Kalau iya, otomatis tutup sidebarnya!
    }
  }  

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-20",
        "md:translate-x-0", 
        isOpen ? "translate-x-0" : "max-md:-translate-x-full"
      )}
    >
      <div 
        className={cn(
          "flex h-16 items-center border-b border-sidebar-border transition-all duration-300",
          isOpen ? "justify-start px-4 gap-3" : "justify-center"
        )}
      >
        {/* LOGO: Akan selalu muncul baik saat buka maupun tutup */}
        <div className="relative w-8 h-8 shrink-0 overflow-hidden rounded-md">
          <Logo />
        </div>

        {/* TEKS: Hanya muncul saat sidebar terbuka */}
        {isOpen && (
          <span className="font-bold truncate text-sm tracking-wider">
            PRIVANZA'S PORTFOLIO
          </span>
        )}
      </div>
      
      <nav className="p-4 space-y-2">
        {navigationConfig.map((item) => {
          const IconComponent = item.icon; 
          
          return (
            <Link 
              key={item.href}
              href={item.href} 
              onClick={handleLinkClick} 
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
            >
              <IconComponent className="w-5 h-5 min-w-[20px]" />
              {isOpen && <span>{t.menu[item.langKey as keyof typeof t.menu]}</span>}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}