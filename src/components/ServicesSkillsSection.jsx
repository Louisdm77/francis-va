import { motion } from "framer-motion";

export default function ServicesSkillsSection() {
  const services = [
    "Administrative Support",
    "Customer Service",
    "Social Media Management",
    "Project Management",
    "Data Management",
    "Expense Tracking",
    "Meeting Agendas & Minutes",
    "Transcriptions (All Languages)",
    "Internet Research",
  ];

  const skills = [
    "Organization & Time Management",
    "Communication",
    "Adaptability & Fast Learning",
    "Attention to Detail",
    "Grit & Resilience",
    "Proactive Problem Solving",
  ];

  return (
    <section id="skills" className="bg-slate-900 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center text-white mb-16"
        >
          Services & Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-md"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Services
            </h3>
            <ul className="space-y-3 list-disc pl-5 text-slate-300 text-sm">
              {services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-md"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Skills
            </h3>
            <ul className="space-y-3 list-disc pl-5 text-slate-300 text-sm">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
