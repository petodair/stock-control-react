import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import MyHeader from "./my/MyHeader";
import MySiderbar from "./my/MySiderbar";
import { Sidebar } from "lucide-react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <MySiderbar />
      <main className="min-w-full">
        <SidebarTrigger/>
        {children}
      </main>
    </SidebarProvider>
  );
}

export default Layout;
