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
import { useClerk } from "@clerk/clerk-react"

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
  const { signOut } = useClerk()

  return (
    <Sidebar className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-center p-4">
          <Link to="/"><img className="h-10 w-10" src="/translate.png" alt="logo"/></Link>
          <Link to="/dashboard"><h1 className="text-center my-5 text-2xl">Dashboard</h1></Link>
        </div>
        <hr className="border-t border-gray-800"/>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
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
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        <SidebarFooter>
          <Button onClick={() => signOut()} className="bg-pink-700 text-white m-5 hover:bg-pink-800">Logout</Button>
        </SidebarFooter>
    </Sidebar>
  )
}
