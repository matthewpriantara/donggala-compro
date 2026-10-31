"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PORTAL } from "@/constants/helper";
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);
  function handleToggleMenu() {
    setIsOpen((value) => !value);
  }
  function handleCloseMenu() {
    setIsOpen(false);
  }
  return (
    <div className="mobile-nav">
      <button
        ref={buttonRef}
        type="button"
        onClick={handleToggleMenu}
        aria-label={isOpen ? PORTAL.closeMenu : PORTAL.openMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      {isOpen && (
        <nav id="mobile-navigation" aria-label={PORTAL.navigation}>
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href} onClick={handleCloseMenu}>
              {item.title}
            </a>
          ))}
          <a
            href={PORTAL.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCloseMenu}
          >
            {PORTAL.platform} ↗
          </a>
        </nav>
      )}
    </div>
  );
}
