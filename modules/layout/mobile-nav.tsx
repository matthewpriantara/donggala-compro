"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
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
import { NAV_LINKS, PORTAL } from "@/constants/helper";
import type { NavItem } from "@/types";

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
  if (!name) return <Compass size={16} aria-hidden="true" />;
  const IconComponent = ICON_MAP[name] || Compass;
  return <IconComponent size={16} aria-hidden="true" />;
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleToggleMenu() {
    setIsOpen((value) => !value);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  function toggleSection(title: string) {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
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
        className="mobile-nav-toggle-btn"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label={PORTAL.navigation}
          className="mobile-nav-panel"
        >
          <div className="mobile-nav-scroll-area">
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((item: NavItem) => {
                const hasChildren = item.items && item.items.length > 0;
                const isExpanded = !!expandedSections[item.title];

                if (!hasChildren) {
                  return (
                    <li key={item.href} className="mobile-nav-item">
                      <Link
                        href={item.href}
                        onClick={handleCloseMenu}
                        className="mobile-nav-link"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.title} className="mobile-nav-item with-accordion">
                    <div className="mobile-accordion-header">
                      <Link
                        href={item.href}
                        onClick={handleCloseMenu}
                        className="mobile-accordion-title"
                      >
                        {item.title}
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleSection(item.title)}
                        className={`mobile-accordion-toggle ${
                          isExpanded ? "rotated" : ""
                        }`}
                        aria-label={`Buka sub-menu ${item.title}`}
                        aria-expanded={isExpanded}
                      >
                        <ChevronDown size={18} />
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="mobile-sub-list">
                        {item.items?.map((sub) => {
                          const isTel = sub.href.startsWith("tel:");
                          const isExternal = sub.isExternal || isTel;

                          const subContent = (
                            <>
                              <span className="mobile-sub-icon">
                                {renderNavIcon(sub.iconName)}
                              </span>
                              <div className="mobile-sub-details">
                                <div className="mobile-sub-title-row">
                                  <span className="mobile-sub-name">{sub.title}</span>
                                  {sub.badge && (
                                    <span
                                      className={`mobile-sub-badge ${
                                        item.title === "Darurat"
                                          ? "badge-emergency"
                                          : item.title === "Kesehatan"
                                          ? "badge-health"
                                          : "badge-default"
                                      }`}
                                    >
                                      {sub.phone && <Phone size={9} />}
                                      {sub.badge}
                                    </span>
                                  )}
                                </div>
                                {sub.description && (
                                  <p className="mobile-sub-desc">
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
                                className="mobile-sub-link"
                                target={isTel ? undefined : "_blank"}
                                rel={isTel ? undefined : "noopener noreferrer"}
                                onClick={handleCloseMenu}
                              >
                                {subContent}
                              </a>
                            );
                          }

                          return (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="mobile-sub-link"
                              onClick={handleCloseMenu}
                            >
                              {subContent}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mobile-nav-cta-box">
              <a
                href={PORTAL.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCloseMenu}
                className="mobile-platform-btn button"
              >
                <span>{PORTAL.platform}</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
