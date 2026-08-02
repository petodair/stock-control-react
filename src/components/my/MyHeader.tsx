import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

function MyHeader() {
  return (
    <header className="p-1 flex justify-between items-center">
      <SidebarTrigger />
      <span className="font-semibold md:hidden mr-1">Stock-Control</span>
    </header>
  );
}

export default MyHeader;
