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
import {
  LayoutDashboard,
  List,
  ListPlus,
  LogOut,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router";

function MySiderbar() {
  const sidebarMenuTools: {
    name: string;
    icon: React.ReactNode;
    link: string;
  }[] = [
    { name: "Dashboard", icon: <LayoutDashboard />, link: "/" },
    { name: "Setores", icon: <UsersRound />, link: "/" },
    { name: "Lista", icon: <List />, link: "/product/list" },
    { name: "Adicionar", icon: <ListPlus />, link: "/product/form" },
  ];

  return (
    <Sidebar variant="inset">
      <SidebarHeader>Stock Control</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Ferramentas</SidebarGroupLabel>
          <SidebarMenu>
            {sidebarMenuTools.map((tool) => (
              <Link to={tool.link}>
                <SidebarMenuItem key={tool.name}>
                  <SidebarMenuButton>
                    {tool.icon}
                    <span>{tool.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <Link to="/login">
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default MySiderbar;
