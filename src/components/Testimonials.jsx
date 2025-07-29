import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Francis has great communication skills and high-quality work. He’s helped me stay more organized and productive.",
      name: "Victoria Ayeni",
    },

    {
      quote:
        "Working with Francis was a game-changer. He handles every task with precision and reliability.",
      name: "Carla Mendez",
    },
    {
      quote:
        "From day one, Francis brought clarity and structure to our workflow. A true professional.",
      name: "Emeka Johnson",
    },
    {
      quote:
        "Francis exceeded expectations. His dedication, speed, and detail-oriented mindset are unmatched.",
      name: "Sandra Lee",
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-900 py-24 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-white"
        >
          Testimonials
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2  gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow hover:shadow-lg text-left"
            >
              <p className="text-slate-100 text-lg leading-relaxed mb-4">
                “{t.quote}”
              </p>
              <p className="text-slate-400 font-medium text-sm">– {t.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
