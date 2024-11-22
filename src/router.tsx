import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Projects } from './pages/projects'
import { Articles } from './pages/articles'
import { Contact } from './pages/contact'
import NotFound from './pages/404'
import ServerError from './pages/500'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '500',
        element: <ServerError />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]) 