import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";
import { Bin } from "./pages/Bin";
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/Archive" element={<Archive/>}></Route>
        <Route path="/Bin" element={<Bin/>}></Route>
      </Routes>
    </>
  );
}

export default App;
