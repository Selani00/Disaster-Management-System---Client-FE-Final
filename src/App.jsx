import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/MainPages/Home";
import Emargancy from "./Pages/Others/Emargancy";
import Contacts from "./Pages/MainPages/Contacts";
import Plan from "./Pages/MainPages/Plan";
import News from "./Pages/MainPages/News";
import Donations from "./Pages/MainPages/Donations";
import UserLogin from "./Pages/AuthPages/NormalSignIn";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Emargancy" element={<Emargancy />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Plan" element={<Plan />} />
        <Route path="/News" element={<News />} />
        <Route path="/Donations" element={<Donations />} />

        <Route path="/Login" element={<UserLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
