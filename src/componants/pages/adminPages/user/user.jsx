const sampleUsers = [
    {
      email: "john.doe@example.com",
      password: "password123",
      firstName: "John",
      lastName: "Doe",
      type: "customer",
      whatsApp: "+1234567890",
      phone: "+1234567890",
      disabled: false,
      emailVerified: true
    },
    {
      email: "jane.smith@example.com",
      password: "securePass!45",
      firstName: "Jane",
      lastName: "Smith",
      type: "customer",
      whatsApp: "+1987654321",
      phone: "+1987654321",
      disabled: false,
      emailVerified: false
    },
    {
      email: "admin.user@example.com",
      password: "adminSecretPass",
      firstName: "Admin",
      lastName: "User",
      type: "admin",
      whatsApp: "+1123456789",
      phone: "+1123456789",
      disabled: false,
      emailVerified: true
    },
    {
      email: "charles.brown@example.com",
      password: "CharlieBrown123",
      firstName: "Charles",
      lastName: "Brown",
      type: "customer",
      whatsApp: "+1098765432",
      phone: "+1098765432",
      disabled: false,
      emailVerified: false
    },
    {
      email: "lisa.jones@example.com",
      password: "LisaJ789",
      firstName: "Lisa",
      lastName: "Jones",
      type: "customer",
      whatsApp: "+1239876543",
      phone: "+1239876543",
      disabled: false,
      emailVerified: true
    },
    {
      email: "michael.white@example.com",
      password: "MikeW!2345",
      firstName: "Michael",
      lastName: "White",
      type: "manager",
      whatsApp: "+1543210987",
      phone: "+1543210987",
      disabled: true,
      emailVerified: false
    },
    {
      email: "nancy.green@example.com",
      password: "Nancy123Green",
      firstName: "Nancy",
      lastName: "Green",
      type: "customer",
      whatsApp: "+1678901234",
      phone: "+1678901234",
      disabled: false,
      emailVerified: false
    },
    {
      email: "samuel.adams@example.com",
      password: "Sam!Adams098",
      firstName: "Samuel",
      lastName: "Adams",
      type: "admin",
      whatsApp: "+1765432109",
      phone: "+1765432109",
      disabled: false,
      emailVerified: true
    },
    {
      email: "emma.wilson@example.com",
      password: "EmmaWilson456",
      firstName: "Emma",
      lastName: "Wilson",
      type: "customer",
      whatsApp: "+1654321098",
      phone: "+1654321098",
      disabled: false,
      emailVerified: true
    },
    {
      email: "george.martin@example.com",
      password: "GeorgeM!5678",
      firstName: "George",
      lastName: "Martin",
      type: "customer",
      whatsApp: "+1345678901",
      phone: "+1345678901",
      disabled: false,
      emailVerified: false
    }
  ];
  

export default function User()
{
    return(
        <div className="w-full flex justify-center">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Bookings Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border bg-[#CCD6A6]">
            <thead>
              <tr className="bg-[#CCD6A6]">
                <th className="border bg-[#CCD6A6] px-4 py-2"></th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Email</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Name</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Type</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">WhatsApp</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Phone</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Status</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">emailVerified</th>
              </tr>
            </thead>
            <tbody className="bg-[#FFFBE9]">
              {sampleUsers.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2">{index}</td>
                    <td className="px-4 py-2">{item.email}</td>
                    <td className="px-4 py-2">{item.firstName+ " " + item.firstName}</td>
                    <td className="px-4 py-2">{item.type}</td>
                    <td className="px-4 py-2">{item.whatsApp}</td>
                    <td className="px-4 py-2">{item.phone}</td>
                    <td className="px-4 py-2">{item.disabled}</td>
                    <td className="px-4 py-2">{item.emailVerified}</td>
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