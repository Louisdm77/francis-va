import { motion } from "framer-motion";
import { FaTasks, FaUsers, FaCalendarAlt, FaHeadset, FaClipboardList, FaGlobe } from "react-icons/fa";
import { MdTravelExplore, MdSupportAgent } from "react-icons/md";

export default function ServicesSkillsSection() {
  const services = [
    { name: "Executive Virtual Assistance", icon: <FaTasks /> },
    { name: "Administrative Support", icon: <FaClipboardList /> },
    { name: "Customer Service Support", icon: <FaHeadset /> },
    { name: "Social Media Management", icon: <FaUsers /> },
    { name: "Email and Calendar Management", icon: <FaCalendarAlt /> },
    { name: "HR Support", icon: <MdSupportAgent /> },
    { name: "Executive Support", icon: <FaTasks /> },
    { name: "Team Management", icon: <FaUsers /> },
    { name: "Project Management", icon: <FaClipboardList /> },
    { name: "Data Management", icon: <FaTasks /> },
    { name: "Expense Tracking", icon: <FaClipboardList /> },
    { name: "Meeting Agendas & Minutes", icon: <FaClipboardList /> },
    { name: "Transcriptions & Translation", icon: <FaGlobe /> },
    { name: "Internet Research", icon: <FaGlobe /> },
    { name: "Travel Planning & Coordination", icon: <MdTravelExplore /> },
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
    <section id="skills" className="bg-slate-900 py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Services & Skills
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-8">
              Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow hover:shadow-lg hover:border-blue-500 transition"
                >
                  <div className="text-blue-400 text-xl">{service.icon}</div>
                  <p className="text-slate-300 text-sm">{service.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-8">
              Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-sm font-medium shadow hover:shadow-md hover:border-blue-500 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
