import axios from "axios";
import { useEffect, useState } from "react";

export default function Room() {
  const [rooms, setRooms] = useState([]);
  const [Dataloaded, setDataloaded] = useState(false);

  useEffect(() => {
    if (!Dataloaded) {
      const url = `${import.meta.env.VITE_DOMAIN}${
        import.meta.env.VITE_GETROOMS
      }`;
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setRooms(response.data);
          setDataloaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [Dataloaded]);

  function DeleteRoom(id, name) {
    alert("Are you sure you want to delete room " + name + "?");
    const url = `${import.meta.env.VITE_DOMAIN}${
      import.meta.env.VITE_GETROOMS
    }/${id}`;
    axios.delete(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
      .then((response) => {
        alert("Deleted Room " + name);
        setDataloaded(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="w-full flex justify-center">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Rooms</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border bg-[#CCD6A6]">
            <thead>
              <tr className="bg-[#CCD6A6]">
                <th className="border bg-[#CCD6A6] px-4 py-2">Room ID</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Category</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">
                  Maximum Guests Allowed
                </th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Availablity</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Description</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">notes</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">photos</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-[#FFFBE9]">
              {rooms.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2">{item.roomId}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2">{item.maxGuests}</td>
                    <td className="px-4 py-2">{item.available}</td>
                    <td className="px-4 py-2">{item.specialDescription}</td>
                    <td className="px-4 py-2">{item.notes}</td>
                    <td className="px-4 py-2">{item.photos}</td>
                    <td className="px-4 py-2">
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => {
                          DeleteRoom(item._id, item.roomId);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
