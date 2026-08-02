import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, UsersRound } from "lucide-react";

function MySiderbar() {
  const sidebarMenuTools = [
    { name: "Dashboard", icon: <LayoutDashboard /> },
    { name: "Setores", icon: <UsersRound /> },
  ];

  return (
    <Sidebar>
      <SidebarHeader>Stock Control</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Ferramentas</SidebarGroupLabel>
          <SidebarMenu>
            {sidebarMenuTools.map((tool) => (
              <SidebarMenuItem key={tool.name}>
                <SidebarMenuButton>
                  {tool.icon}
                  <span>{tool.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}

export default MySiderbar;
