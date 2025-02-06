import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Home from './Components/Home/Home';
import Educational from './Pages/Educational';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Projects from './Pages/Projects';
import View from './Pages/View';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/edu',
        element: <Educational></Educational>
      },
      {
        path: '/project',
        element: <Projects></Projects>
      },
      {
        path: '/view/:id',
        element: <View></View>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
