interface PageWrapperProps {
  children: React.ReactNode;
  breadcrumb: string;
}

export function PageWrapper({ children, breadcrumb }: PageWrapperProps) {
  return (
    <div className="max-w-[920px] px-16 py-14">
      <div className="mb-10 text-[11px] font-medium tracking-wide text-text-muted">
        Membership Engine /{" "}
        <span className="text-text-tertiary">{breadcrumb}</span>
      </div>
      {children}
    </div>
  );
}
