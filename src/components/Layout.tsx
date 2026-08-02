import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import MyHeader from "./my/MyHeader";
import MySiderbar from "./my/MySiderbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <MySiderbar />
      <SidebarInset className="flex-1 md:bg-slate-900 overflow-x-hidden">
        <MyHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
