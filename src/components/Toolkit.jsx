import { motion } from "framer-motion";

export default function Toolkit() {
  const tools = [
    "Project Management",
    "Email Management",
    "Calendar Management",
    "Research & Data Entry",
    "Testimonials",
  ];

  return (
    <section id="toolkit" className="bg-slate-900 py-24 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-white"
        >
          My Toolkit
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition text-lg font-medium"
            >
              {tool}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
