import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import FaultDetail from './pages/FaultDetail.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/fault/:id', element: <FaultDetail/> },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
