import { ChartComponent } from "@/components/chart";
import { Heart } from "lucide-react";

export default function DashboardPage() {
  const recentWorks = [
    {
      title: "Project Alpha",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: {
        name: "John Doe",
        photo: "https://via.placeholder.com/40",
      },
      reactions: 120,
    },
    {
      title: "Project Beta",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      user: {
        name: "Jane Smith",
        photo: "https://via.placeholder.com/40",
      },
      reactions: 98,
    },
    {
      title: "Project Gamma",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      user: {
        name: "Alice Johnson",
        photo: "https://via.placeholder.com/40",
      },
      reactions: 76,
    },
  ];

  return (
    <div>
      <ChartComponent />
      <section className="my-10">
        <h2 className="text-2xl font-bold text-white mb-4">Recent Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentWorks.map((work, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
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
          ))}
        </div>
      </section>
    </div>
  );
}