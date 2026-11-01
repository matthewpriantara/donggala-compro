import { Globe, Cloud, Compass, Users, Code, type LucideIcon } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { ServiceItem } from "@/types"

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Cloud,
  Compass,
  Users,
}

interface ServiceCardProps {
  readonly service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Code

  return (
    <Card className="transition-all hover:shadow-md dark:border-neutral-800">
      <CardHeader>
        <div className="flex size-12 items-center justify-center rounded-xl bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
          <IconComponent className="size-6" />
        </div>
        <CardTitle className="pt-4 text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {service.description}
        </p>
      </CardContent>
    </Card>
  )
}
