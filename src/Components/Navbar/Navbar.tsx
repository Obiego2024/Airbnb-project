import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  X,
  Filter,
  ChevronRight,
  Mountain,
  Home,
  Waves,
  MountainSnow,
  Music,
  Landmark,
  Gem,
  Ship,
  Trees,
  Search,
  User,
  Globe,
} from "lucide-react";
import log from "../../assets/airbnb logo.jpg";

function Navbar() {
  const categories = [
    { name: "Amazing views", icon: <Mountain /> },
    { name: "Cabins", icon: <Home /> },
    { name: "Beachfront", icon: <Waves /> },
    { name: "Skiing", icon: <MountainSnow /> },
    { name: "Grand pianos", icon: <Music /> },
    { name: "Mansions", icon: <Landmark /> },
    { name: "OMG!", icon: <Gem /> },
    { name: "Amazing pools", icon: <Waves /> },
    { name: "Luxe", icon: <Gem /> },
    { name: "Boats", icon: <Ship /> },
    { name: "Lakefront", icon: <Waves /> },
    { name: "Treehouses", icon: <Trees /> },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const myLocation = useLocation();
  return (
    <div>
{/* Navbar Section */}
<nav className="flex justify-between items-center p-4 shadow-xl relative bg-white rounded-2xl mt-2">
  {/* Logo */}
  <div className="text-red-500 font-bold text-xl flex">
    <img className="animate-pulse w-8 h-8 md:w-12 md:h-12" src={log} alt="Airbnb Logo" />
    <p className="animate-pulse hidden sm:block">airbnb</p>
  </div>

  {/* Search Bar */}
  <div className="hidden md:flex items-center border border-red-400 rounded-full shadow-md px-4 py-2 space-x-2 ml-0 md:ml-52">
    <button className="text-gray-700 font-medium">Anywhere</button>
    <span className="text-gray-400">|</span>
    <button className="text-gray-700 font-medium">Any week</button>
    <span className="text-gray-400">|</span>
    <button className="text-gray-400">Add guests</button>
    <button className="bg-red-500 text-white rounded-full p-2">
      <Search size={14} />
    </button>
  </div>

  {/* Globe Icon with Language Dropdown */}
  <div className="relative flex gap-3 ml-0 md:ml-28 lg:ml-48">
    <h1 className="hidden lg:block">Language</h1>
    <button
      className="text-gray-700 relative"
      onClick={toggleLanguageMenu} // Toggle dropdown on click
    >
      <Globe />
    </button>

    {/* Language Dropdown */}
    {isLanguageMenuOpen && (
      <div className="absolute right-0 mt-10 w-48 bg-white shadow-lg rounded-lg py-2 z-10 shadow-fuchsia-400">
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-2xl">
          English
        </button>
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-2xl">
          Spanish
        </button>
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-2xl">
          French
        </button>
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-2xl">
          German
        </button>
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-2xl">
          Chinese
        </button>
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-2xl">
          Igbo
        </button>
      </div>
    )}
  </div>

  {/* Dropdown Menu */}
  <div className="relative flex items-center border rounded-full border-red-400 px-4 py-2">
    <button
      className="text-gray-700 flex gap-2"
      onClick={handleToggle} // Toggle menu on click
    >
      {isMenuOpen ? <X /> : <Menu />}
      <User className="text-gray-500" size={20} />
    </button>

    {isMenuOpen && (
      <div className="absolute right-0 w-48 bg-white shadow-lg shadow-fuchsia-400 rounded-lg py-2 z-10 mt-72">
        <Link
          to="/"
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-2xl hover:animate-pulse"
        >
          Home
        </Link>
        <Link
          to="/signin"
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-2xl hover:animate-pulse"
        >
          SignIn
        </Link>
        <Link
          to="/Signup"
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-2xl hover:animate-pulse"
        >
          SignUp
        </Link>
        <Link
          to="/HelpCenter"
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-2xl hover:animate-pulse"
        >
          HelpCenter
        </Link>
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-2xl hover:animate-pulse">
          Airbnb your home
        </button>
      </div>
    )}
  </div>
</nav>

{/* Category Bar Section */}
<div className="hidden md:flex items-center space-x-6 overflow-x-auto px-6 mt-6 border-b text-gray-700 shadow-2xl bg-white rounded-2xl">
<button className="p-2 border rounded-full hidden sm:block sm:p-1 sm:text-xs md:p-2 md:text-base">
    <ChevronRight />
  </button>
  {categories.map((category, index) => (
    <div
      key={index}
      className="flex flex-col items-center cursor-pointer text-sm"
    >
      <div className="text-2xl">{category.icon}</div>
      <span className="mt-1">{category.name}</span>
    </div>
  ))}
  <button className="p-2 border rounded-full hidden sm:block sm:p-1 sm:text-xs md:p-2 md:text-base">
    <ChevronRight />
  </button>
  <button className="flex items-center px-4 py-2 border rounded-lg text-sm font-semibold ml-8">
    <Filter className="mr-2" /> Filters
  </button>
</div>
     
    </div>
  )
}

export default Navbar