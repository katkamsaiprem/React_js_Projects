import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/Archive" element={<Archive/>}></Route>
        
      </Routes>
    </>
  );
}

export default App;
