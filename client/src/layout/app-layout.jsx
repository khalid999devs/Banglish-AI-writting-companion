import { Outlet } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton,useAuth
 } from "@clerk/clerk-react";
import GradientObjects from "@/components/gradient_objects";
import NavBar from "@/components/nav_bar";
import { useContext, useEffect } from "react";

// const AppContext = createContext({});

export default function AppLayout() {
  // const [user,setUser] = useState({});
  // const [authUser,authUserLoading] = useAuth();

  // useEffect(()=>{
  //   setUser(user=>({...user,toke:}));
  // },[])

  return (
    // <AppContext.Provider value={{
    //   setUser,
    //   user
    // }}>
    <div className="min-h-screen bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      <GradientObjects/>
      <NavBar/>
        <Outlet />
    </div>
    // </AppContext.Provider>
  );
}

// export const useAppContext = () => useContext(AppContext);