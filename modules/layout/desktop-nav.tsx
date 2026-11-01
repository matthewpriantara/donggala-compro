"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Landmark,
  Palmtree,
  Compass,
  Sparkles,
  UtensilsCrossed,
  ShoppingBag,
  BookOpen,
  Crown,
  Fish,
  Languages,
  HeartPulse,
  Activity,
  ShieldCheck,
  Stethoscope,
  ShieldAlert,
  PhoneCall,
  Ambulance,
  LifeBuoy,
  PhoneForwarded,
  Trees,
  Waves,
  Leaf,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import type { NavItem, SubNavItem } from "@/types";

// Icon registry for dynamic lookup
const ICON_MAP: Record<string, typeof Landmark> = {
  Landmark,
  Palmtree,
  Compass,
  Sparkles,
  UtensilsCrossed,
  ShoppingBag,
  BookOpen,
  Crown,
  Fish,
  Languages,
  HeartPulse,
  Activity,
  ShieldCheck,
  Stethoscope,
  ShieldAlert,
  PhoneCall,
  Ambulance,
  LifeBuoy,
  PhoneForwarded,
  Trees,
  Waves,
  Leaf,
  Phone,
};

function renderNavIcon(name?: string) {
  if (!name) return <Compass size={18} aria-hidden="true" />;
  const IconComponent = ICON_MAP[name] || Compass;
  return <IconComponent size={18} aria-hidden="true" />;
}

export function DesktopNav({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleMouseEnter(title: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(title);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  }

  function handleToggle(title: string) {
    setOpenDropdown((current) => (current === title ? null : title));
  }

  return (
    <nav
      ref={containerRef}
      className="desktop-nav"
      aria-label="Navigasi Utama Donggala"
    >
      <ul className="desktop-nav-list">
        {items.map((item) => {
          const hasChildren = item.items && item.items.length > 0;
          const isOpen = openDropdown === item.title;
          const isActive =
            pathname === item.href ||
            (hasChildren &&
              item.items?.some((sub) => pathname === sub.href.split("#")[0]));

          if (!hasChildren) {
            return (
              <li key={item.href} className="desktop-nav-item">
                <Link
                  href={item.href}
                  className="nav-link"
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.title}
                </Link>
              </li>
            );
          }

          return (
            <li
              key={item.title}
              className="desktop-nav-item with-dropdown"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`nav-link dropdown-trigger ${isActive ? "active" : ""}`}
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => handleToggle(item.title)}
              >
                <span>{item.title}</span>
                <ChevronDown
                  size={15}
                  className={`chevron-icon ${isOpen ? "rotated" : ""}`}
                  aria-hidden="true"
                />
              </button>

              {isOpen && (
                <div
                  className="dropdown-menu-wrapper"
                  role="region"
                  aria-label={`Sub-menu ${item.title}`}
                >
                  <div className="dropdown-menu-card">
                    <div className="dropdown-header">
                      <span className="dropdown-category">{item.title}</span>
                      <Link
                        href={item.href}
                        className="dropdown-all-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Buka Halaman Utama <ArrowUpRight size={13} />
                      </Link>
                    </div>

                    <div className="dropdown-items-grid">
                      {item.items?.map((sub) => {
                        const isTel = sub.href.startsWith("tel:");
                        const isExternal = sub.isExternal || isTel;

                        const content = (
                          <>
                            <span className="sub-icon-box">
                              {renderNavIcon(sub.iconName)}
                            </span>
                            <div className="sub-content">
                              <div className="sub-title-row">
                                <span className="sub-title">{sub.title}</span>
                                {sub.badge && (
                                  <span
                                    className={`sub-badge ${
                                      item.title === "Darurat"
                                        ? "badge-emergency"
                                        : item.title === "Kesehatan"
                                        ? "badge-health"
                                        : "badge-default"
                                    }`}
                                  >
                                    {sub.phone && <Phone size={10} />}
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              {sub.description && (
                                <p className="sub-description">
                                  {sub.description}
                                </p>
                              )}
                            </div>
                          </>
                        );

                        if (isExternal) {
                          return (
                            <a
                              key={sub.title}
                              href={sub.href}
                              className="dropdown-sub-item"
                              target={isTel ? undefined : "_blank"}
                              rel={isTel ? undefined : "noopener noreferrer"}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {content}
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className="dropdown-sub-item"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {content}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
