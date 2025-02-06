import RequireAuth from "./components/require-auth";
import UrlProvider from "./context";
import AppLayout from "./layouts/app-layout";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landing";
import LinkPage from "./pages/link";
import RedirectLink from "./pages/redirect-link";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth> 
            <LinkPage />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
}

export default App;