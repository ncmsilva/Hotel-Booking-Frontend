import axios from "axios";
import { useEffect, useState } from "react";

function UserTag(prop) {
  const [name, setName] = useState("");
  const [userexist, setuserexist] = useState(false);

  const token = localStorage.getItem("token");
  const Url = import.meta.env.VITE_DOMAIN + import.meta.env.VITE_GETUSER;
  console.log(token);

  useEffect(() => {
    if (token) {
      axios
        .get(Url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application.json",
          },
        })

        .then((rs) => {
          console.log("Request success");
          setName(`${rs.data.user.Fname} ${rs.data.user.Lname}`);
          setuserexist(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setName(" ")
    }
  }, [userexist]);

  return (
    <div className="absolute right-0 text-neutral-500 text-[20px] flex items-center p-[10px] cursor-pointer m-1">
      <img
        src={prop.img}
        alt="user"
        className="rounded-full w-[80px] H-[80px]"
      />
      <div className="flex flex-col justify-center">
        <span className="text-white ml-3 text-xl">{name}</span>
        <button 
        className="ml-2 text-white"
        onClick={()=>{
            localStorage.removeItem("token");
            setuserexist(false);
        }}
        >Logout</button>
      </div>
    </div>
  );
}
export default UserTag;
