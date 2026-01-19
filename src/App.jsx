import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Chat from "./pages/Chat/Chat.jsx";
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/chat" element={<Chat></Chat>}></Route>
        <Route
          path="/profile"
          element={<ProfileUpdate></ProfileUpdate>}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
