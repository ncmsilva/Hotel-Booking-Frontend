import { Route, Routes } from "react-router-dom";
import Header from "../../header/header";
import UserHome from "./clientHome";
import AboutUs from "./about";
import ContactUs from "./contactus";

export default function Home() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        </div>
    </div>
  );
}
