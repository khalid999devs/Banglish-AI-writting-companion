import { useUser,useAuth } from "@clerk/clerk-react"
import { Edit } from "lucide-react"
import { useEffect } from "react";


export default function DashboardProfile() {
  const { user } = useUser()

  console.log(user);

  const {getToken, userId} = useAuth();

  const fun = async()=>{
    const token = await getToken();
    console.log(token);
    
      if (!token) {
        console.error("No token found!");
        return;
      }
  }

  useEffect(()=>{
    fun();
  },[])


  return (
    <div className="p-8 rounded-lg shadow-lg text-white">
      <h1 className="text-xl mb-6">Personal Informations</h1>
      <div className="space-y-4">
        <p>Name: {user?.firstName} {user?.lastName}</p>
        <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
      </div>
    </div>
  )
}
