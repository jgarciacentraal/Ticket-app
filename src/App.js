import * as React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Login from "./pages/Login/Login";

import ErrorPage from "pages/error-page";
import Dashboard from "pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

const store = {
  name: "Julio",
};

const action = { type: "UPDATE_STATE" };

function reducer(state, action) {
  if (action.type === UPDATE_STATE) {
    return { ...store, name: "Toño" };
  }
}


