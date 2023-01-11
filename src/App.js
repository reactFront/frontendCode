import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddVenu from "./pages/AddVenu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/add-venu" element = {<AddVenu/>} />
      </Routes>
    </BrowserRouter>
  );
}

