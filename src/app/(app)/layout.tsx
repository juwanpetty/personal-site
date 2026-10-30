// import { AppSidebar } from "@/components/app-sidebar";

import { Footer } from "@/components/footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* <AppSidebar /> */}
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
