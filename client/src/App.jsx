import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import ConnectionTest from "./components/ui/ConnectionTest.jsx";

const App = () => {
  return (
    <>
      <Toaster position="top-right"/>
      <RouterProvider router={router} />
      {/* Connection Test - only show in development */}
      {import.meta.env.DEV && <ConnectionTest />}
    </>
  );
};

export default App;
