import { Search, User, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <button className="hidden xl:flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
        <Search className="w-5 h-5" />
        <span className="text-sm font-medium sr-only">Search</span>
      </button>

      <button className="xl:hidden flex items-center text-gray-600 hover:text-black">
        <Search className="w-5 h-5" />
      </button>

      <Link href="/account" className="hidden lg:flex text-gray-600 hover:text-black transition-colors">
        <User className="w-5 h-5" />
      </Link>

      <button className="relative flex items-center text-gray-600 hover:text-black transition-colors">
        <ShoppingCart className="w-5 h-5" />
        <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
          0
        </span>
      </button>
    </div>
  );
}
