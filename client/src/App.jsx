import {createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/landing-page";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/about",
        element: <div>About</div>
      }
    ]
  }
]);

function App(){
  return <RouterProvider router={router}/>;
}

export default App
