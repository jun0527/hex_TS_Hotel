// import { useState } from "react";
import Footer from "@/components/Layout/Footer";
import clsx from "clsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import RoomList from "./views/RoomList";
import SignUp from "./views/SignUp";

const App = () => {
  const location = useLocation();

  return (
    <>
      <div className="overflow-x-hidden w-screen h-screen">
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign_up" element={<SignUp />}></Route>
          <Route path="/room_list" element={<RoomList />}></Route>
        </Routes>
        <Footer
          className={clsx(
            ["/login", "/sign_up"].includes(location.pathname)
              ? "hidden"
              : "block"
          )}
        />
      </div>
    </>
  );
};

export default App;
