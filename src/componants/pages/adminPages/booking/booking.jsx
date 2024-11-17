const bookings = [
  {
    bookingId: "BOK-123e4560",
    roomId: 101,
    email: "user1@example.com",
    status: "pending",
    reason: "Business meeting",
    start: "2024-01-10T09:00:00Z",
    end: "2024-01-10T12:00:00Z",
    notes: "Please arrange for a projector.",
    timestamp: "2024-01-01T08:30:00Z",
  },
  {
    bookingId: "BOK-123e4561",
    roomId: 102,
    email: "user2@example.com",
    status: "confirmed",
    reason: "Workshop",
    start: "2024-01-15T10:00:00Z",
    end: "2024-01-15T16:00:00Z",
    notes: "Need coffee and snacks.",
    timestamp: "2024-01-05T10:00:00Z",
  },
  {
    bookingId: "BOK-123e4562",
    roomId: 103,
    email: "user3@example.com",
    status: "cancelled",
    reason: "Training session",
    start: "2024-01-20T14:00:00Z",
    end: "2024-01-20T18:00:00Z",
    notes: "Rescheduled to next week.",
    timestamp: "2024-01-10T12:45:00Z",
  },
  {
    bookingId: "BOK-123e4563",
    roomId: 104,
    email: "user4@example.com",
    status: "pending",
    reason: "Team meeting",
    start: "2024-01-25T09:30:00Z",
    end: "2024-01-25T11:00:00Z",
    notes: "Bring printed agendas.",
    timestamp: "2024-01-12T11:15:00Z",
  },
  {
    bookingId: "BOK-123e4564",
    roomId: 105,
    email: "user5@example.com",
    status: "confirmed",
    reason: "Client presentation",
    start: "2024-01-18T15:00:00Z",
    end: "2024-01-18T17:00:00Z",
    notes: "Set up refreshments.",
    timestamp: "2024-01-08T14:20:00Z",
  },
  {
    bookingId: "BOK-123e4565",
    roomId: 106,
    email: "user6@example.com",
    status: "pending",
    reason: "Product demo",
    start: "2024-01-22T11:00:00Z",
    end: "2024-01-22T13:00:00Z",
    notes: "Ensure WiFi is working.",
    timestamp: "2024-01-11T09:50:00Z",
  },
  {
    bookingId: "BOK-123e4566",
    roomId: 107,
    email: "user7@example.com",
    status: "confirmed",
    reason: "Board meeting",
    start: "2024-01-30T08:00:00Z",
    end: "2024-01-30T12:00:00Z",
    notes: "Prepare the boardroom.",
    timestamp: "2024-01-15T10:30:00Z",
  },
  {
    bookingId: "BOK-123e4567",
    roomId: 108,
    email: "user8@example.com",
    status: "cancelled",
    reason: "Strategy meeting",
    start: "2024-02-05T13:00:00Z",
    end: "2024-02-05T15:00:00Z",
    notes: "Will reschedule soon.",
    timestamp: "2024-01-20T16:00:00Z",
  },
  {
    bookingId: "BOK-123e4568",
    roomId: 109,
    email: "user9@example.com",
    status: "pending",
    reason: "HR training",
    start: "2024-02-10T09:00:00Z",
    end: "2024-02-10T12:00:00Z",
    notes: "Trainer will bring materials.",
    timestamp: "2024-01-25T09:10:00Z",
  },
  {
    bookingId: "BOK-123e4569",
    roomId: 110,
    email: "user10@example.com",
    status: "confirmed",
    reason: "Project review",
    start: "2024-02-15T14:00:00Z",
    end: "2024-02-15T16:30:00Z",
    notes: "Bring project documentation.",
    timestamp: "2024-01-28T11:45:00Z",
  },
];

export default function Booking() {
  return (
    <div className="w-full flex justify-center">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Bookings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border bg-[#CCD6A6]">
            <thead>
              <tr className="bg-[#CCD6A6]">
                <th className="border bg-[#CCD6A6] px-4 py-2">Booking ID</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Room ID</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Email</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Status</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Reason</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Start</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">End</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Notes</th>
                <th className="border bg-[#CCD6A6] px-4 py-2">Created Date</th>
              </tr>
            </thead>
            <tbody className="bg-[#FFFBE9]">
              {bookings.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2">{item.bookingId}</td>
                    <td className="px-4 py-2">{item.roomId}</td>
                    <td className="px-4 py-2">{item.email}</td>
                    <td className="px-4 py-2">{item.status}</td>
                    <td className="px-4 py-2">{item.reason}</td>
                    <td className="px-4 py-2">{item.start}</td>
                    <td className="px-4 py-2">{item.end}</td>
                    <td className="px-4 py-2">{item.notes}</td>
                    <td className="px-4 py-2">{item.timestamp}</td>
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
