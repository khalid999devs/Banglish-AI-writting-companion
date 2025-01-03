import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet, useLocation } from "react-router-dom"
import { Search, CircleX, MessageCircle, Send } from "lucide-react"
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react"
import { useState } from "react"

export default function DashboardLayout() {
  const { user } = useUser()
  const location = useLocation()
  const [chatOpen, setChatOpen] = useState(false)

  let pageTitle = ""
  if (location.pathname.split("/").length >= 3) {
    pageTitle = location.pathname.split("/")[2].toUpperCase()
  }

  const toggleChat = () => {
    setChatOpen(!chatOpen)
  }

  const messages = [
    { text: "Hello! How can I assist you today?", type: "received" },
    { text: "Can you help me with my project?", type: "sent" },
    { text: "Sure! What do you need help with?", type: "received" },
    { text: "I need some information on the latest updates.", type: "sent" },
    { text: "Here are the latest updates...", type: "received" },
  ]

  return (
    <div className="flex bg-slate-950">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <div className="bg-slate-900 py-5 px-4">
            <nav className="flex justify-between items-center text-white">
              <SidebarTrigger />
              <div className="flex-1 flex justify-center items-center relative">
                <Search className="text-gray-400 relative left-8" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-1/2 p-2 pl-10 rounded-full bg-gray-700 text-white"
                />
              </div>
              <div className="flex items-center">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </nav>
            <div className="text-white mt-8 mb-3">
              {pageTitle.length > 0 ? (
                <h1 className="text-3xl font-bold">{pageTitle}</h1>
              ) : (
                <>
                  <h1 className="text-3xl font-bold">Welcome, {user?.firstName}!</h1>
                  <p className="text-lg">We're glad to have you back. Here's what's happening today:</p>
                </>
              )}
            </div>
          </div>
          <div className="pt-5 px-5">
            <Outlet />
          </div>
            <button
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
            onClick={toggleChat}
          >
            <MessageCircle className="h-6 w-6" />
          </button>
          {chatOpen && (
            <div className="fixed bottom-8 overflow-hidden right-8 bg-slate-900 rounded-2xl shadow-lg w-96">
              <div className="flex justify-between items-center mb-4 p-4 bg-slate-800">
                <h2 className="text-xl font-bold">Chatbot</h2>
                <button onClick={toggleChat} className="text-red-600"><CircleX/></button>
              </div>
              <div className="flex flex-col space-y-2 px-2 py-8 overflow-y-auto h-96">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg max-w-60 ${
                      message.type === "received" ? "bg-blue-950 self-start" : "bg-blue-800 text-white self-end"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="flex items-center p-2 border-t border-slate-950">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 rounded-2xl border border-gray-900 bg-slate-700"
                />
                <button className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </main>
      </SidebarProvider>
    </div>
  )
}
