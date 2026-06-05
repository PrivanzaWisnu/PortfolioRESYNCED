"use client"

import { useState } from "react"
import { useSettingsStore } from "@/store/use-settings"
import { en } from "@/locales/en"
import { id } from "@/locales/id"
import { Mail, Send, Loader2, SendToBack } from "lucide-react"

export default function ContactPage() {
  const { language } = useSettingsStore()
  const t = language === 'en' ? en : id

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xqejkykk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", message: "" })
        
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        alert("Yah, pesannya gagal dikirim. Coba lagi nanti ya!")
      }
    } catch (error) {
      alert("Terjadi kesalahan jaringan. Cek koneksi internetmu.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-primary flex items-center gap-3">
          <SendToBack className="w-8 h-8" />{t.contact?.title || "Contact Me"}
        </h1>
        <p className="text-muted-foreground">
          {t.contact?.description || "Ada project atau penawaran kerja? Hubungi saya kapan saja."}
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5 space-y-4">
          <a 
            href="mailto:emailkamu@gmail.com" 
            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors group"
          >
            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground">Email</h3>
              <p className="text-sm font-medium truncate">vanenja@gmail.com</p>
            </div>
          </a>
          <a 
            href="https://www.linkedin.com/in/privanza-wisnu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors group"
          >
            <div className="p-3 rounded-lg bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground">LinkedIn</h3>
              <p className="text-sm font-medium">Privanza Wisnu Aqilanndra</p>
            </div>
          </a>

          <a 
            href="https://wa.me/6281285552004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors group"
          >
            <div className="p-3 rounded-lg bg-green-600/10 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground">WhatsApp</h3>
              <p className="text-sm font-medium">Fast Response</p>
            </div>
          </a>

        </div>

        <form 
          onSubmit={handleSubmit}
          className="md:col-span-7 bg-card border border-border rounded-2xl p-6 space-y-4 shadow-sm"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t.contact?.nameLabel || "Nama Lengkap"}
            </label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
              placeholder="Jhon Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t.contact?.emailLabel || "Email Anda"}
            </label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
              placeholder="jhondoe@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t.contact?.messageLabel || "Pesan"}
            </label>
            <textarea 
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-all shadow-md disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {t.contact?.sending || "Mengirim..."}
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {t.contact?.sendButton || "Kirim Pesan"}
              </>
            )}
          </button>

          {isSuccess && (
            <div className="p-3 text-sm rounded-xl bg-green-500/10 text-green-500 border border-green-500/20 text-center animate-in fade-in duration-300">
              🎉 {t.contact?.successMessage || "Pesan berhasil dikirim! Terima kasih."}
            </div>
          )}
        </form>

      </div>
    </div>
  )
}