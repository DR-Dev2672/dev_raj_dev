import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 shadow-md"
    >
      {/* Main Navbar */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex flex-row justify-end">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">
            Dev<span className="text-yellow-300">Raj Dev</span>
          </h1>

          {/* Desktop Nav (HORIZONTAL FLEX) */}
          <div className="hidden md:flex items-center gap-10 text-lg font-medium flex flex-row">
            
            <a href="#home" className="nav-link">Home</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition"
            >
              {dark ? "🌙" : "☀️"}
            </button>

            {/* Mobile Menu */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-indigo-700 text-white px-6 py-4 space-y-4"
        >
          <a href="#home" onClick={() => setOpen(false)} className="block">Home</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block">Contact</a>
        </motion.div>
      )}

      {/* Styles */}
      <style jsx>{`
        .nav-link {
          position: relative;
          transition: 0.3s;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0%;
          height: 2px;
          background: #facc15;
          transition: 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          color: #fde68a;
        }
      `}</style>
    </motion.header>
  );
}