import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Contact from './pages/Contact';
import Github from './pages/Github';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/github',
    element: <Github />,
  },
]);
