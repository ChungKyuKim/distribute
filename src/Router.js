import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/distribute" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
