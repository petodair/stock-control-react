import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

function MyHeader() {
  return (
    <header className="bg-[#165b79] p-1 flex justify-between items-center">
      <SidebarTrigger />
      <span className="font-semibold md:hidden">Stock-Control</span>
    </header>
  );
}

export default MyHeader;
