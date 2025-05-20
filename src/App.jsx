import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUpPage from './Components/FrontPage/SignUpPage';
import LoginPage from './Components/FrontPage/LoginPage'; // 'Components' vs 'components' fix
import FirstPage from './Components/FrontPage/FirstPage';
import HomePage from './Components/MainPage/HomePage';
import Reset from './Components/FrontPage/Reset';

const router = createBrowserRouter([
  {path: "/", element: <FirstPage />},
  { path: "/signup", element: <SignUpPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/reset", element: <Reset /> },
  { path: "/home", element: <HomePage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
