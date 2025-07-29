import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-snug text-white">
            Meet Francis Inaku
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            As a seasoned{" "}
            <span className="text-blue-400 font-semibold">
              Virtual Assistant
            </span>
            , I specialize in helping entrepreneurs, executives, and business
            owners manage their time and tasks with ease.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            My mission is simple: free you up to focus on what matters most —{" "}
            <span className="italic text-blue-300">growth and success</span>. I
            bring a proactive mindset and detail-driven support that you can
            depend on.
          </p>
        </motion.div>

        {/* Right Column: Traits */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {[
            { label: "Proactive", icon: "⚡" },
            { label: "Organized", icon: "🗂️" },
            { label: "Reliable", icon: "🛡️" },
          ].map(({ label, icon }) => (
            <div
              key={label}
              className="bg-slate-800 hover:bg-slate-700 transition rounded-xl p-6 text-center shadow-lg border border-slate-700"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h4 className="text-lg font-semibold text-slate-100">{label}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
