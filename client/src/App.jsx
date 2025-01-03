import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/landing-page";
import DashboardPage from "./pages/dashboard-page";
import DocsPage from "./pages/docs-page";
import FedbackPage from "./pages/fedback-page";
import ErrorPage from "./pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "/dashboard",
        element: <DashboardPage />
      },
      {
        path: "/docs",
        element: <DocsPage />
      },
      {
        path: "/fedback",
        element: <FedbackPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
