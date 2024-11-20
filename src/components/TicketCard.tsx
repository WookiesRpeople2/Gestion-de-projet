import { Ticket as TicketType } from "../types";
import { Ticket } from "lucide-react";
import toast from "react-hot-toast";

interface Props {
  ticket: TicketType;
}

export default function TicketCard({ ticket }: Props) {
  const handlePurchase = () => {
    toast.success(`Added ${ticket.name} ticket to cart!`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Ticket className="h-6 w-6 text-amber-600" />
            <h3 className="ml-2 text-xl font-semibold text-gray-900">
              {ticket.name}
            </h3>
          </div>
          <span className="text-2xl font-bold text-amber-600">
            ${ticket.price}
          </span>
        </div>
        <p className="mt-2 text-gray-600">{ticket.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {ticket.available} available
          </span>
          <button
            onClick={handlePurchase}
            className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}
