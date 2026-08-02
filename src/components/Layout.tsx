import { SidebarProvider } from "@/components/ui/sidebar";
import MyHeader from "./my/MyHeader";
import MySiderbar from "./my/MySiderbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <MySiderbar />
      <main className="min-w-full">
        <MyHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}

export default Layout;
