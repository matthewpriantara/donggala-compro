import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PORTFOLIO_ITEMS } from "@/constants/helper"

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {PORTFOLIO_ITEMS.map((item) => (
        <Card
          key={item.id}
          className="flex flex-col justify-between overflow-hidden transition-all hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-700"
        >
          <CardHeader>
            <div className="mb-2">
              <Badge variant="secondary" className="text-[11px] font-semibold">
                {item.category}
              </Badge>
            </div>
            <CardTitle className="text-xl leading-snug">{item.title}</CardTitle>
            <CardDescription className="pt-2 text-sm leading-relaxed">
              {item.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4 dark:border-neutral-900">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
