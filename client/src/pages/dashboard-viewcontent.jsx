import { Button } from "@/components/ui/button";
import { Heart, SquarePen } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DashboardViewContent() {
    const { id } = useParams();

    useEffect(() => {
        console.log("Content ID: ", id);
    }, [id]);

    const allContents = [
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
        {
          id: 7,
          title: "Project Theta",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          user: {
            name: "Emily Clark",
            photo: "https://via.placeholder.com/40",
          },
          reactions: 130,
        },
        {
          id: 8,
          title: "Project Iota",
          description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          user: {
            name: "James Miller",
            photo: "https://via.placeholder.com/40",
          },
          reactions: 105,
        },
        {
          id: 9,
          title: "Project Kappa",
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          user: {
            name: "Olivia Davis",
            photo: "https://via.placeholder.com/40",
          },
          reactions: 95,
        },
        {
          id: 10,
          title: "Project Lambda",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          user: {
            name: "Sophia Martinez",
            photo: "https://via.placeholder.com/40",
          },
          reactions: 140,
        },
        {
          id: 11,
          title: "Project Mu",
          description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          user: {
            name: "Liam Anderson",
            photo: "https://via.placeholder.com/40",
          },
          reactions: 115,
        },
        {
          id: 12,
          title: "Project Nu",
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          user: {
            name: "Isabella Thomas",
            photo: "https://via.placeholder.com/40",
          },
          reactions: 100,
        },
      ];

    const content = allContents.find(content => content.id === parseInt(id));

    if (!content) {
        return <div>Content not found</div>;
    }

    return (
        <div>
            <h1 className="text-white text-xl my-5">{content.title}</h1>
            <div className="flex items-center">
                <img className="h-10 w-10 round-full m-3 overflow-hidden" src={content.user.photo} alt="image" />
                <span>{content.user.name}</span>
            </div>
            <p className="mt-10">Description</p>
            <p className="my-3">{content.description}</p>
            <div className="flex justify-between w-40 my-10">
                <div className="flex items-center mr-5">
                  <Heart className="mr-1" />
                  <span>12</span>
                </div>             
                <button className="rounded-full bg-slate-800 px-5 py-2 flex items-center "><SquarePen/><p className="ml-2">Edit</p></button>
            </div>
        </div>
    );
}