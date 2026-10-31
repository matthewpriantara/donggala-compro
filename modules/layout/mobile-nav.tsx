"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, COMPANY_NAME } from "@/constants/helper"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleToggleMenu}
        aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-x-0 top-16 z-50 border-b border-neutral-200 bg-white/95 p-6 backdrop-blur-md shadow-lg dark:border-neutral-800 dark:bg-neutral-950/95 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {COMPANY_NAME}
            </span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleCloseMenu}
                className="text-base font-medium text-neutral-800 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white"
              >
                {link.title}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <Button asChild className="w-full" onClick={handleCloseMenu}>
                <Link href="#kontak">Hubungi Kami</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
