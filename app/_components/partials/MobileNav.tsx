"use client";

import { useState } from "react";
import { BookFill, TelephoneFill, List, X } from "react-bootstrap-icons";
import { IconButton } from "../IconButton";
import { Navlink } from "../Navlink";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <>
      {/* Hamburger Icon Button */}
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X size={24} /> : <List size={24} />}
      </button>

      {/* Mobile Fold-Out Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-[#0a0a0a] text-white px-4 py-2 z-10 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <Navlink href="/" onClick={toggleMenu}>
                    Home
                  </Navlink>
                </li>
                <li>
                  <Navlink href="/about" onClick={toggleMenu}>
                    About
                  </Navlink>
                </li>
                <li>
                  <Navlink href="/contact" onClick={toggleMenu}>
                    Projects
                  </Navlink>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-2 mt-2">
              <IconButton
                onClick={toggleMenu}
                className="!bg-white/5 hover:!bg-white/10 !text-white"
                icon={<BookFill />}
              >
                Call me
              </IconButton>
              <IconButton onClick={toggleMenu} icon={<TelephoneFill />}>
                Get in contact
              </IconButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
