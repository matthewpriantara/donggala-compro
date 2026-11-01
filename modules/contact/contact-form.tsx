"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChangeField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    // Simulasi pengiriman pesan (client-side leaf)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setHasSubmitted(true)
    } catch {
      setErrorMessage("Gagal mengirim pesan. Silakan coba beberapa saat lagi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" })
    setHasSubmitted(false)
    setErrorMessage(null)
  }

  if (hasSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50/50 p-8 text-center dark:border-emerald-900/50 dark:bg-emerald-950/20">
        <CheckCircle2 className="size-12 text-emerald-600 dark:text-emerald-400" />
        <h4 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Pesan Berhasil Terkirim!
        </h4>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Terima kasih telah menghubungi kami. Tim kami akan segera menanggapi melalui email yang Anda cantumkan.
        </p>
        <Button variant="outline" size="sm" onClick={handleResetForm} className="mt-6">
          Kirim Pesan Lain
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmitContact} className="space-y-4">
      {errorMessage && (
        <div className="rounded-lg bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/30 dark:text-red-400">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChangeField}
            placeholder="Matthew Priantara"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
            Email Bisnis <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChangeField}
            placeholder="matthew@example.com"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
          Subjek / Topik Kebutuhan
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChangeField}
          placeholder="Konsultasi Pengembangan Aplikasi Web"
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
          Detail Pesan <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChangeField}
          placeholder="Ceritakan rencana proyek, estimasi linimasa, dan ekspektasi Anda..."
          rows={4}
          required
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          "Mengirimkan Pesan..."
        ) : (
          <>
            <Send className="mr-2 size-4" /> Kirim Pesan
          </>
        )}
      </Button>
    </form>
  )
}
