// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import RoomList from "./views/RoomList";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>TITLE</h1>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/roomlist" element={<RoomList />}></Route>
      </Routes>
    </>
  );
};

export default App;
