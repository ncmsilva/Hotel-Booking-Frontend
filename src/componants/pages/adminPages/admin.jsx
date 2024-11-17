import { Link, Route, Routes } from "react-router-dom";
import Header from "../../header/header";
import {
  MdLibraryBooks,
  MdPeopleOutline,
  MdFeedback,
  MdPhotoLibrary,
  MdHotel,
} from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import Booking from "./booking/booking";
import Category from "./category/category";
import Room from "./room/room";
import User from "./user/user";
import Feedback from "./feedback/feedback";
import GallaryItem from "./gallaryItem/gallaryItem";

export default function Admin() {
  return (
    <div className="w-full max-h-[100vh] overflow-hidden overflow-y-hidden flex flex-col">
      <Header />
      <div className="flex">
        <div className="w-[20%] h-[100vh] bg-[#CCD6A6] flex flex-col">
          <div className="text-white text-[30px] hover:text-black hover:font-bold ml-5 flex items-center">
            <MdLibraryBooks className="mr-2" />
            <Link to="/admin/booking">Booking</Link>
          </div>
          <div className="text-white text-[30px] hover:text-black hover:font-bold ml-5 flex items-center">
            <TbCategoryPlus className="mr-2" />
            <Link to="/admin/category">Categories</Link>
          </div>
          <div className="text-white text-[30px] hover:text-black hover:font-bold ml-5 flex items-center">
          <MdHotel className="mr-2" />
            <Link to="/admin/room">Rooms</Link>
          </div>
          <div className="text-white text-[30px] hover:text-black hover:font-bold ml-5 flex items-center">
            <MdPeopleOutline className="mr-2" />
            <Link to="/admin/user">Users</Link>
          </div>
          <div className="text-white text-[30px] hover:text-black hover:font-bold ml-5 flex items-center">
            <MdFeedback className="mr-2" />
            <Link to="/admin/feedback">Feedbacks</Link>
          </div>
          <div className="text-white text-[30px] hover:text-black hover:font-bold ml-5 flex items-center">
            <MdPhotoLibrary className="mr-2" />
            <Link to="/admin/gallaryitem">Gallery Items</Link>
          </div>
        </div>
        <div className="w-[80%] h-[100vh] bg-[#F4EAD5] overflow-y-scroll">
        <Routes>
          <Route path="/*" element={<Booking />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/category" element={<Category />} />
          <Route path="/room" element={<Room />} />
          <Route path="/user" element={<User />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/gallaryitem" element={<GallaryItem />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}
