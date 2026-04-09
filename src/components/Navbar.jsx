import { useState, useEffect } from "react";
import { CircleUser, X, Menu } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.getElementById("mainContainer");

    const handleScroll = () => {
      if (container.scrollTop > 100) setScrolled(true);
      else setScrolled(false);
    };

    if (container) container.addEventListener("scroll", handleScroll);
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16 transition-all duration-700">

        {/* LOGO (we keep its space even when faded out) */}
        <motion.div
          className="flex items-center gap-2 text-xl text-white w-[150px]" // fixed width keeps layout stable
          animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -10 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <CircleUser size={26} />
          <span className="font-semibold">Harleen</span>
        </motion.div>

        {/* MENU TRAY */}
        <motion.ul
          animate={{
            // backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
            padding: scrolled ? "0.5rem 1.5rem" : "0rem",
            borderRadius: scrolled ? "9999px" : "0px",
            scale: scrolled ? 0.95 : 1.1,
            x: scrolled ? 0 : 0, // stable positioning
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`hidden md:flex gap-8 text-sm text-zinc-400 items-center transition-all duration-700 ${scrolled ? "shadow-md shadow-black/40" : ""
            }`}
        >
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                containerId="mainContainer"
                offset={-70}
                className="hover:text-white cursor-pointer transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="text-zinc-400 max-w-[150px]"
          animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -10 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* <span className="font-semibold">Harleen</span> */}
          <button
            onClick={() => window.open('/web_resume.pdf', '_blank')}
            className="bg-zinc-800 px-3 py-1 rounded-sm hover:bg-transparent hover:border hover:border-zinc-500 transition-all duration-500">Resume</button>
        </motion.div>

        {/* MOBILE MENU BUTTON (visible only when not scrolled) */}
        {!scrolled && (
          <div className="md:hidden text-zinc-400 absolute right-6 top-4">
            {isOpen ? (
              <X className="hover:text-white hover:scale-105" size={24} onClick={() => setIsOpen(false)} />
            ) : (
              <Menu className="hover:text-white hover:scale-105" size={24} onClick={() => setIsOpen(true)} />
            )}
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && !scrolled && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center bg-black text-zinc-400 py-4 md:hidden"
        >
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item} className="py-2">
              <Link
                to={item}
                smooth={true}
                duration={500}
                containerId="mainContainer"
                offset={-70}
                className="hover:text-white cursor-pointer transition"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
