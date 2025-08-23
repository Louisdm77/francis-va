import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const linkVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-lg"
      initial={{ y: -80, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Sliding Title with mask */}
        <div className="overflow-hidden max-w-[220px] sm:max-w-xs md:max-w-sm lg:max-w-md">
          <motion.h1
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap"
            animate={{
              x: ["100%", "0%", "-100%"], // right → center → left
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            Executive Virtual Assistant & Personal Support
          </motion.h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative text-slate-300 hover:text-white transition-colors group"
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              custom={i}
            >
              {link.name}
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-slate-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiX />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden w-full bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 shadow-lg px-6 py-6 space-y-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-blue-400 text-lg font-medium transition-colors"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
