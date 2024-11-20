import { Ticket, UtensilsCrossed } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Ticket className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">EventTix</span>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition">
              <UtensilsCrossed className="h-4 w-4 mr-2" />
              Menu
            </button>
            <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition">
              <Ticket className="h-4 w-4 mr-2" />
              Tickets
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
