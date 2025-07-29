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
    <section className="bg-slate-900 py-20 px-4 sm:px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center text-white mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-700 hover:shadow-lg hover:border-blue-500 transition"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-1">
                {exp.title}
              </h3>
              <p className="text-slate-400 text-sm mb-2">{exp.company}</p>
              <span className="text-xs text-slate-500 block mb-4">
                {exp.duration}
              </span>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
