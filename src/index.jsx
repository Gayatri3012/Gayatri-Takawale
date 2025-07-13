import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Spotify from './components/Spotify.jsx';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/spotify',
      element: <Spotify />,
    },
  ]);
  

import './index.css';
import NavigationBar from './components/NavigationBar.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';


ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router} /> );
