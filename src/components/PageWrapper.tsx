interface PageWrapperProps {
  children: React.ReactNode;
  breadcrumb: string;
}

export function PageWrapper({ children, breadcrumb }: PageWrapperProps) {
  return (
    <div className="px-14 py-12 max-w-[900px]">
      <div className="text-[11px] text-text-muted mb-8 tracking-wide">
        Membership Engine /{" "}
        <span className="text-text-tertiary">{breadcrumb}</span>
      </div>
      {children}
    </div>
  );
}
