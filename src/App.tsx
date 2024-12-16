import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./routers/UserRouter";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
