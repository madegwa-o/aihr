import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BaseLayout from './BaseLayout.tsx'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Docs from "./pages/docs/docs.tsx";
import Homepage from "./pages/homepage/Homepage.tsx";
import ThemeContextProvider from "./hooks/themeProvider.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/docs",
                element: <Docs />
            },
        ]
    },

    {
        path: "*",
        element: <Navigate to={'/'}/>
    },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeContextProvider>
          <RouterProvider router={router}/>
      </ThemeContextProvider>
  </StrictMode>,
)
