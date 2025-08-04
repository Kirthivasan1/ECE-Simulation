// src/App.jsx
import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import CircuitPlayground from "./components/CircuitPlayground";
import ViewPlaygrounds from "./components/ViewPlaygrounds";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "/playground", element: <CircuitPlayground />},
    {path: "/viewPlaygrounds", element: <ViewPlaygrounds/>},
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
