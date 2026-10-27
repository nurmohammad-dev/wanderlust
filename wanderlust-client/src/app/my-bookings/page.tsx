import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import MyBookingCard from "@/components/booking/MyBookingCard";
import { IBooking } from "@/lib/types/booking";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  let bookings: IBooking[] = [];
  try {
    const res = await fetch(`http://localhost:8000/my-bookings/${user.email}`);
    if (!res.ok) throw new Error(`Failed to fetch bookings: ${res.status}`);
    if (!res.ok) throw new Error(`Failed to fetch bookings: ${res.status}`);
    bookings = await res.json();
  } catch (error) {
    console.error("Failed to load bookings", error);
  }

  return (
    <div className="container mx-auto max-w-5xl py-10 px-4 md:px-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-normal tracking-tight">My Bookings</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* Bookings List */}
      <div className="flex flex-col gap-6">
        {bookings.length === 0 ? (
          <p className="text-muted-foreground">No bookings found.</p>
        ) : (
          bookings.map((booking) => (
            <MyBookingCard booking={booking} key={booking._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;
