import { BookFill, TelephoneFill } from "react-bootstrap-icons";
import { IconButton } from "../IconButton";
import { Navlink } from "../Navlink";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <div className="relative">
      {/* Main Navbar Container */}
      <div className="h-16 w-full flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-2xl">Teun Wolbert</h1>
          {/* Desktop Navigation: visible on medium screens and up */}
          <nav className="hidden md:block">
            <ul className="flex gap-4">
              <li>
                <Navlink href="/">Home</Navlink>
              </li>
              <li>
                <Navlink href="/about">About</Navlink>
              </li>
              <li>
                <Navlink href="/projects">Projects</Navlink>
              </li>
            </ul>
          </nav>
        </div>
        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <IconButton
            className="!bg-white/5 hover:!bg-white/10 !text-white"
            icon={<BookFill />}
          >
            E-mail me
          </IconButton>
          <IconButton icon={<TelephoneFill />}>Get in contact</IconButton>
        </div>
        {/* Mobile Navigation Component (client-side) */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
