import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { TableOfContents, Heart, User, BadgePlus, Users, Settings } from "lucide-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

const items = [
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Contents",
    url: "/dashboard/contents",
    icon: TableOfContents,
  },
  {
    title: "New Content",
    url: "/dashboard/newcontent",
    icon: BadgePlus,
  },
  {
    title: "Favourites",
    url: "/dashboard/favourites",
    icon: Heart,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Collaborate",
    url: "/dashboard/collaborate",
    icon: Users,
  },
]

export function AppSidebar() {
  return (
    <div className="bg-slate-950">
    <Sidebar>
      <Link to="/dashboard"><h1 className="text-center my-5 text-2xl">Dashboard</h1></Link>
      <SidebarContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center space-x-2">
                      <item.icon/>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Button className="bg-pink-700 text-white">Logout</Button>
      </SidebarFooter>
    </Sidebar>
    </div>
  )
}
