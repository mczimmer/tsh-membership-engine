import { Sidebar } from "@/components/Sidebar";

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-bg-primary">
      <Sidebar />
      <main className="ml-[272px] flex-1 min-h-screen">{children}</main>
    </div>
  );
}
