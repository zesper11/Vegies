import { useState } from "react";
import { assets } from "../assets/assets";
import { Search, Groceries, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between">
      <img src={assets.primaryLogo} className="h-12" alt="Vegies Logo" />
      <ul
        className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full z-10 mt-3 flex-col gap-4 rounded-lg bg-white p-4 shadow-md md:static md:mt-0 md:flex md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0 md:shadow-none`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Menu</Link>
        </li>

        <li className="flex items-center gap-4 border-t border-gray-200 pt-4 md:hidden">
          <Link to="/cart" className="cursor-pointer">
            <Groceries className="icon " aria-label="Groceries" />
          </Link>
          <Search className="icon" aria-label="Search" />
          <button>Sign in</button>
        </li>
      </ul>
      <div className="hidden items-center gap-4 md:flex">
        <Link to="/cart" className="cursor-pointer">
          <Groceries className="icon" />
        </Link>
        <Search className="icon" />
        <button>Sign in</button>
      </div>
      <button
        type="button"
        className="md:hidden"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </nav>
  );
};

export default Navbar;
