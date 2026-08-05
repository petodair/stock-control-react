import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import MyHeader from "./my/MyHeader";
import MySiderbar from "./my/MySiderbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <SidebarProvider>
      <MySiderbar />
      <SidebarInset className="flex-1 md:bg-slate-900 overflow-x-hidden">
        <MyHeader />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
