export interface NavItem {
  readonly title: string
  readonly href: string
}

export interface ServiceItem {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly iconName: string
}

export interface PortfolioItem {
  readonly id: string
  readonly title: string
  readonly category: string
  readonly description: string
  readonly tags: readonly string[]
}

export interface StatItem {
  readonly label: string
  readonly value: string
  readonly description?: string
}

export interface ValueItem {
  readonly title: string
  readonly description: string
}

export interface SocialLink {
  readonly platform: string
  readonly url: string
  readonly iconName: string
}
