'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? "text-blue-600" : "text-gray-600 hover:text-blue-600";
  };

  return (
    <header className="px-8 py-6 border-b border-gray-100 bg-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          LOGO
        </Link>
        <nav className="space-x-8 hidden md:flex items-center">
          <Link
            href="/home"
            className={`text-sm font-medium ${isActive("/home")} transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className={`text-sm font-medium ${isActive("/aboutus")} transition-colors`}
          >
            About us
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium ${isActive("/services")} transition-colors`}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium ${isActive("/blog")} transition-colors`}
          >
            Blog
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Contact us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
