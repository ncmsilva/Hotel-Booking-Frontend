const sampleGalleryItems = [
    {
      name: "Sunset Over the Mountains",
      image: [
        "sunset-mountain-1.jpg",
        "sunset-mountain-2.jpg"
      ],
      description: "A breathtaking view of the sun setting behind majestic mountain peaks."
    },
    {
      name: "Ocean Waves",
      image: [
        "ocean-waves-1.jpg",
        "ocean-waves-2.jpg",
        "ocean-waves-3.jpg"
      ],
      description: "The beauty and power of ocean waves crashing onto the shore."
    },
    {
      name: "City Skyline at Night",
      image: [
        "city-skyline-night-1.jpg"
      ],
      description: "A vibrant city skyline illuminated by thousands of lights under the night sky."
    },
    {
      name: "Autumn Forest",
      image: [
        "autumn-forest-1.jpg",
        "autumn-forest-2.jpg"
      ],
      description: "A serene forest painted in shades of red, orange, and yellow during the fall season."
    },
    {
      name: "Desert Dunes",
      image: [
        "desert-dunes-1.jpg",
        "desert-dunes-2.jpg"
      ],
      description: "Golden sand dunes stretching as far as the eye can see, under a bright blue sky."
    },
    {
      name: "Wildlife Safari",
      image: [
        "wildlife-safari-1.jpg",
        "wildlife-safari-2.jpg",
        "wildlife-safari-3.jpg"
      ],
      description: "A thrilling safari adventure showcasing diverse wildlife in their natural habitat."
    },
    {
      name: "Cherry Blossom Garden",
      image: [
        "cherry-blossom-1.jpg",
        "cherry-blossom-2.jpg"
      ],
      description: "A peaceful garden filled with cherry blossom trees in full bloom, creating a pink paradise."
    },
    {
      name: "Mountain Lake",
      image: [
        "mountain-lake-1.jpg",
        "mountain-lake-2.jpg"
      ],
      description: "A tranquil lake surrounded by towering mountains, reflecting the scenery like a mirror."
    },
    {
      name: "Historic Castle",
      image: [
        "historic-castle-1.jpg",
        "historic-castle-2.jpg"
      ],
      description: "An ancient castle standing proudly atop a hill, with stunning architecture and rich history."
    },
    {
      name: "Winter Wonderland",
      image: [
        "winter-wonderland-1.jpg",
        "winter-wonderland-2.jpg"
      ],
      description: "A magical winter scene with snow-covered trees and a frozen lake, perfect for a holiday postcard."
    }
  ];
  

export default function GallaryItem()
{
    return(
        <div className="w-full flex justify-center">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Bookings Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border bg-[#CCD6A6]">
            <thead>
              <tr className="bg-[#CCD6A6]">
                <th className="border bg-[#CCD6A6] px-4 py-2">Name</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Description</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Image</th>
              </tr>
            </thead>
            <tbody className="bg-[#FFFBE9]">
              {sampleGalleryItems.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.description}</td>
                    <td className="px-4 py-2">{item.image}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}