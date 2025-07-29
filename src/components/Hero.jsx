import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-24 md:py-32"
      id="hero"
    >
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80" // Replace this with your actual image path
            alt="Francis Inaku"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-slate-600 shadow-xl"
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Hi, I’m Francis Inaku
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-slate-300"
        >
          Your go-to virtual assistant for handling tasks, schedules, and
          support — so you can focus on growing your business with clarity and
          peace of mind.
        </motion.p>
      </div>
    </section>
  );
}
