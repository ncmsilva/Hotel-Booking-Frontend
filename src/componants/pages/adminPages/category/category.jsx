import axios from "axios";
import { useEffect, useState } from "react";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [IsLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!IsLoaded) {
      const url = `${import.meta.env.VITE_DOMAIN}${
        import.meta.env.VITE_GETCATEGORY
      }`;
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);
          setCategories(res.data);
          setIsLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [IsLoaded]);

  function deleteCAT(id, name) {
    alert(`Deleting Category ${name}`);
    const url = `${import.meta.env.VITE_DOMAIN}${
      import.meta.env.VITE_GETCATEGORY
    }/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        alert(`Deleting Category ${name} done.`);
        setIsLoaded(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="w-full flex justify-center">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Bookings Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border bg-[#CCD6A6]">
            <thead>
              <tr className="bg-[#CCD6A6]">
                <th className="border bg-[#CCD6A6] px-4 py-2">Name</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Description</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Price</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Features</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Capacity</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Image</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-[#FFFBE9]">
              {categories.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.description}</td>
                    <td className="px-4 py-2">{item.price}</td>
                    <td className="px-4 py-2">{item.features}</td>
                    <td className="px-4 py-2">{item.numOfGuests}</td>
                    <td className="px-4 py-2">{item.image}</td>
                    <td className="px-4 py-2">
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => {
                          deleteCAT(item._id, item.name);
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
