import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

export default function ViewPost() {
  const { postId } = useParams();
  console.log(postId)

  const posts = [
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

  var post = null;
  for (var i = 0; i < posts.length; i++) {
    console.log(posts[i].id, postId)
    if (posts[i].id == parseInt(postId)) {
      post = posts[i];
      break;
    }
  }

  return (
    post === null ? <div>Post not found</div> :
    <div className="p-8 bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg mb-4">{post.description}</p>
        <div className="flex items-center space-x-4">
          <img src={post.user.photo} alt={post.user.name} className="w-10 h-10 rounded-full" />
          <span>{post.user.name}</span>
        </div>
        <div className="mt-4 flex items-center">
          <Heart className="mr-2" />
          <span>{post.reactions}</span>
        </div>
      </div>
    </div>
  )
}