import { useUser, useAuth } from "@clerk/clerk-react"
import { Heart } from "lucide-react"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function ViewProfile() {
  const { userId } = useParams()
  const { user } = useUser()
  const [profileUser, setProfileUser] = useState(null)
  const [contents, setContents] = useState([])
  const { isSignedIn } = useAuth()

  useEffect(() => {
    // Fetch user profile based on userId
    // For now, we assume the current user is the profile user
    setProfileUser(user)
  }, [userId, user])

  useEffect(() => {
    // Fetch user contents from an API or define them here
    setContents([
      { id: 1, title: "My First Post", description: "This is the description of my first post." },
      { id: 2, title: "Another Post", description: "This is the description of another post." },
      { id: 3, title: "Yet Another Post", description: "This is the description of yet another post." },
    ])
  }, [])

  const myWorks = [
    {
      id: 1,
      title: "Project Alpha",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: {
        name: "John Doe",
        photo: "https://via.placeholder.com/40",
      },
      reactions: 120,
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      user: {
        name: "Jane Smith",
        photo: "https://via.placeholder.com/40",
      },
      reactions: 98,
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      user: {
        name: "Alice Johnson",
        photo: "https://via.placeholder.com/40",
      },
      reactions: 76,
    },
    {
      id: 4,
      title: "Project Delta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: {
        name: "Michael Brown",
        photo: "https://via.placeholder.com/40",
      },
      reactions: 150,
    },
    {
      id: 5,
      title: "Project Epsilon",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      user: {
        name: "Sarah Wilson",
        photo: "https://via.placeholder.com/40",
      },
      reactions: 110,
    },
    {
      id: 6,
      title: "Project Zeta",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      user: {
        name: "David Lee",
        photo: "https://via.placeholder.com/40",
      },
      reactions: 90,
    },
  ]


  return (
    <div className="p-8 bg-slate-950 text-white w-full">
      <div className="w-3/4 mx-auto bg-slate-900 rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-4">
          <img src={profileUser?.imageUrl} alt="User" className="w-24 h-24 rounded-full border-2 border-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">{profileUser?.firstName} {profileUser?.lastName}</h1>
          </div>
        </div>
        <section className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {myWorks.map((work) => (
              <Link key={work.id} to={isSignedIn ? `/dashboard/content/${work.id}` : `/post/${work.id}`}>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white cursor-pointer">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="mb-4">{work.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={work.user.photo} alt={work.user.name} className="w-10 h-10 rounded-full mr-2" />
                      <span>{work.user.name}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="mr-1" />
                      <span>{work.reactions}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}