"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/config/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <aside className="fixed top-0 left-0 bottom-0 w-[260px] bg-bg-secondary border-r border-border-subtle flex flex-col z-50">
      <div className="px-6 pt-6 pb-5 border-b border-border-subtle">
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-text-tertiary">
          The Social Hub <span className="text-accent-indigo">×</span>
        </div>
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-accent-indigo">
          Valtech
        </div>
        <div className="text-lg font-extrabold text-text-primary mt-4 leading-tight tracking-tight">
          Membership Engine
        </div>
        <div className="text-[11px] text-text-muted mt-1.5">
          Engagement Plan
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        {NAVIGATION.map((section) => (
          <div key={section.group} className="mb-2">
            <div className="px-6 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted">
              {section.group}
            </div>
            {section.pages.map((page) => {
              const active = isActive(page.href);
              return (
                <Link
                  key={page.id}
                  href={page.href}
                  className={`
                    block w-full text-left px-6 py-2 text-[13px] transition-all duration-150
                    border-l-2
                    ${active
                      ? "border-accent-indigo bg-accent-indigo/[0.08] text-[#a5b4fc] font-semibold"
                      : "border-transparent text-text-secondary hover:text-text-primary hover:bg-white/[0.02]"
                    }
                  `}
                >
                  {page.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-border-subtle text-[10px] text-text-muted">
        Prepared Q2 2026
      </div>
    </aside>
  );
}
