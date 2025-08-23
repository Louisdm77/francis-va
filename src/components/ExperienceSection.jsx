import { motion } from "framer-motion";

const experiences = [
  {
    title: "Virtual Assistant/Admin Intern",
    company: "YourBookTeam (Remote)",
    duration: "Jan 2025 – Jun 2025",
    responsibilities: [
      "Email & calendar management for executives",
      "Coordinated travel & itineraries",
      "Improved document retrieval by 40%",
      "Created presentations & reports",
    ],
  },
  {
    title: "Communication Officer Assistant Intern",
    company: "IITA",
    duration: "Jul 2024 – Jan 2025",
    responsibilities: [
      "Managed inbox & meetings",
      "Arranged travel logistics",
      "Compiled expense reports",
      "Maintained project documentation",
    ],
  },
  {
    title: "Administrative Assistant Intern",
    company: "IITA",
    duration: "Aug 2024 – Present",
    responsibilities: [
      "Managed daily schedules & correspondence",
      "Social media content creation",
      "Produced educational reports",
      "Supported sustainability campaigns",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-white mb-20"
        >
          Work Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-slate-700">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6 relative"
            >
              {/* Dot */}
              <span className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg" />

              {/* Card */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-slate-700 hover:border-blue-400 hover:shadow-blue-500/20 transition">
                <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                <p className="text-slate-400 text-sm">{exp.company}</p>
                <span className="text-xs text-slate-500 block mb-4">{exp.duration}</span>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                  {exp.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
