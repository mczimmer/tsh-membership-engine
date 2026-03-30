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
    <aside className="fixed top-0 left-0 bottom-0 z-50 flex w-[272px] flex-col border-r border-border-subtle bg-tsh-white">
      <div className="border-b border-border-subtle px-7 pb-6 pt-7">
        <div className="mb-5 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="6" r="4" fill="white" />
              <circle cx="6" cy="16" r="4" fill="white" />
              <circle cx="18" cy="16" r="4" fill="white" />
              <circle cx="12" cy="12" r="3" fill="white" />
            </svg>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-secondary">
              The Social Hub
            </div>
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
              x Valtech
            </div>
          </div>
        </div>
        <div className="font-display text-xl font-extrabold leading-tight tracking-tight text-text-primary">
          Membership Engine
        </div>
        <div className="mt-1.5 text-xs font-medium text-text-tertiary">
          Engagement Plan
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-5">
        {NAVIGATION.map((section) => (
          <div key={section.group} className="mb-3">
            <div className="px-7 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted">
              {section.group}
            </div>
            {section.pages.map((page) => {
              const active = isActive(page.href);
              return (
                <Link
                  key={page.id}
                  href={page.href}
                  className={`
                    mr-3 block w-full rounded-r-lg border-l-[3px] px-7 py-2.5 text-left text-[13px] transition-all duration-150
                    ${active
                      ? "border-accent-primary bg-accent-primary/[0.06] font-semibold text-accent-primary"
                      : "border-transparent text-text-secondary hover:bg-tsh-cream/60 hover:text-text-primary"
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

      <div className="border-t border-border-subtle px-7 py-4">
        <div className="text-[10px] font-medium text-text-muted">Prepared Q2 2026</div>
      </div>
    </aside>
  );
}
