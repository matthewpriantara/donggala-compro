import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CONTACT_INFO } from "@/constants/helper"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="kontak" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3">
            Hubungi Kami
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
            Mari Berkolaborasi Bersama
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-400">
            Diskusikan ide solusi perangkat lunak atau program pendampingan digital bersama tim profesional kami.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Info Card (SSR) */}
          <div className="space-y-6 lg:col-span-2">
            <Card className="border-neutral-200/80 dark:border-neutral-800">
              <CardHeader>
                <CardTitle className="text-lg">Saluran Komunikasi Resmi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-neutral-900 dark:text-neutral-100" />
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">Alamat Kantor</p>
                    <p className="text-xs">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-neutral-900 dark:text-neutral-100" />
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">Email Korespondensi</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-xs text-neutral-900 underline-offset-2 hover:underline dark:text-neutral-200"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-neutral-900 dark:text-neutral-100" />
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">WhatsApp / Telepon</p>
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-900 underline-offset-2 hover:underline dark:text-neutral-200"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-neutral-900 dark:text-neutral-100" />
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">Jam Pelayanan</p>
                    <p className="text-xs">{CONTACT_INFO.operatingHours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Wrapper (SSR Container hosting Leaf CSR Form) */}
          <div className="lg:col-span-3">
            <Card className="border-neutral-200/80 p-6 sm:p-8 dark:border-neutral-800">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                  Kirim Pesan Langsung
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Isi formulir di bawah ini dan kami akan membalas dalam waktu maksimal 1x24 jam kerja.
                </p>
              </div>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
