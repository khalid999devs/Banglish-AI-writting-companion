import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/app-layout';
import LandingPage from './pages/landing-page';
import DashboardPage from './pages/dashboard-page';
import DocsPage from './pages/docs-page';
import FedbackPage from './pages/fedback-page';
import ErrorPage from './pages/error-page';
import DashboardLayout from './layout/dashboard-layout';
import { ThemeProvider } from './components/theme-provider';
import DashboardProfile from './pages/dashboard-profile';
import DashboardContent from './pages/dashboard-contents';
import DashboardNewContent from './pages/dashboard-newcontent';
import DashboardFavourite from './pages/dashboard-favourite';
import DashboardSettings from './pages/dashboard-settings';
import DashboardCollaborate from './pages/dashboard-collaborate';
import DashboardViewContent from './pages/dashboard-viewcontent';
import { createContext, useContext, useState } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import axios from 'axios';
import { reqs } from './axios/requests';

const AppContext = createContext({});

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      // {
      //   path: "/dashboard",
      //   element: <DashboardPage />
      // },
      {
        path: '/docs',
        element: <DocsPage />,
      },
      {
        path: '/fedback',
        element: <FedbackPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/dashboard/profile',
        element: <DashboardProfile />,
      },
      {
        path: '/dashboard/contents',
        element: <DashboardContent />,
      },
      {
        path: '/dashboard/content/:id',
        element: <DashboardViewContent />,
      },
      {
        path: '/dashboard/newcontent',
        element: <DashboardNewContent />,
      },
      {
        path: '/dashboard/favourites',
        element: <DashboardFavourite />,
      },
      {
        path: '/dashboard/settings',
        element: <DashboardSettings />,
      },
      {
        path: '/dashboard/collaborate',
        element: <DashboardCollaborate />,
      },
    ],
  },
]);

function App() {
  const { getToken, userId } = useAuth();
  const { user } = useUser();
  const [appUser, setAppUser] = useState({});

  const fetchToken = async () => {
    try {
      const token = await getToken();
      setAppUser((appUser) => ({ ...appUser, token }));
    } catch (error) {
      console.error('Failed to get token:', error);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  useEffect(() => {
    if (user?.fullName) {
      const email = user.emailAddresses[0].emailAddress;
      if (email) {
        axios
          .post(reqs.USER_LOGIN, { email })
          .then((res) => {
            setAppUser((appUser) => ({
              ...appUser,
              ...res.data.user,
              chatbot: res.data.chatbot,
              fullname: user.fullName,
              email: email,
              avatar: user.imageUrl,
            }));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        appUser,
        setAppUser,
      }}
    >
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;

export const useAppContext = () => {
  return useContext(AppContext);
};
