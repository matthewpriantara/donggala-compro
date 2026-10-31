import { Target, ShieldCheck, HeartHandshake } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  COMPANY_NAME,
  COMPANY_DESCRIPTION,
  VISION_TEXT,
  MISSION_ITEMS,
  CORE_VALUES,
} from "@/constants/helper"

export function AboutSection() {
  return (
    <section id="tentang" className="bg-neutral-50/50 py-20 sm:py-28 dark:bg-neutral-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="mb-3">
            Profil & Visi Misi
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
            Mengenal {COMPANY_NAME}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-400">
            {COMPANY_DESCRIPTION}
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Visi */}
          <Card className="flex flex-col justify-between border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-neutral-950">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
                  <Target className="size-5" />
                </div>
                <CardTitle className="text-xl">Visi Kami</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                &ldquo;{VISION_TEXT}&rdquo;
              </p>
            </CardContent>
          </Card>

          {/* Misi */}
          <Card className="border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-neutral-950">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
                  <ShieldCheck className="size-5" />
                </div>
                <CardTitle className="text-xl">Misi Strategis</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                {MISSION_ITEMS.map((mission, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white dark:bg-neutral-100 dark:text-neutral-900 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mt-12">
          <h3 className="text-center font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-6">
            Nilai Inti (Core Values)
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {CORE_VALUES.map((val) => (
              <Card key={val.title} className="border-neutral-200/60 dark:border-neutral-800">
                <CardHeader className="pb-3">
                  <div className="mb-2 flex size-8 items-center justify-center rounded-md bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                    <HeartHandshake className="size-4" />
                  </div>
                  <CardTitle className="text-base">{val.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {val.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
