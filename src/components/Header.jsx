import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Users,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinkStyle =
    "relative font-medium text-gray-800 transition-all duration-300 hover:text-lime-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="https://placehold.co/48x48"
              alt="logo"
              className="w-10 h-10 rounded-lg"
            />

            <span className="text-2xl font-bold text-black">
              Clevision
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">

            <Link
              to="/"
              className={navLinkStyle}
            >
              Home
            </Link>

            <Link
              to="/task2"
              className={navLinkStyle}
            >
              Task 2
            </Link>

            {/* About Dropdown */}
            <div className="relative group">

              <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-lime-500 transition-all duration-300">

                About

                <ChevronDown
                  size={18}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </button>

              <div className="absolute left-0 top-full mt-4 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">

                <a
                  href="#"
                  className="block px-5 py-3 rounded-t-2xl hover:bg-lime-50 hover:text-lime-600"
                >
                  About Clevision
                </a>

                <a
                  href="#"
                  className="block px-5 py-3 hover:bg-lime-50 hover:text-lime-600"
                >
                  Careers
                </a>

                <a
                  href="#"
                  className="block px-5 py-3 rounded-b-2xl hover:bg-lime-50 hover:text-lime-600"
                >
                  Gallery
                </a>

              </div>
            </div>

            <a
              href="#contact"
              className={navLinkStyle}
            >
              Contact
            </a>

          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">

            <button className="bg-lime-500 hover:bg-lime-600 text-white rounded-full px-7 py-3 font-medium flex items-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Join Us
              <Users size={18} />
            </button>

            <button className="bg-black hover:bg-gray-900 text-white rounded-full px-7 py-3 font-medium flex items-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Explore Products
              <ArrowUpRight size={18} />
            </button>

          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden border-t py-5">

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/task2"
                onClick={() => setOpen(false)}
              >
                Task 2
              </Link>

              <a href="#">
                About Clevision
              </a>

              <a href="#">
                Careers
              </a>

              <a href="#">
                Gallery
              </a>

              <a href="#contact">
                Contact
              </a>

              <button className="bg-lime-500 text-white rounded-full py-3 mt-2">
                Join Us
              </button>

              <button className="bg-black text-white rounded-full py-3">
                Explore Products
              </button>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}