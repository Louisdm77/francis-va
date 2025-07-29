import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 01",
    subtitle: "Project 01",
    description:
      "Oversaw email/calendar for executives, coordinated travel, improved document retrieval by 40%, and delivered accurate reports.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8a44c3a3ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Project 02",
    subtitle: "Project 02",
    description:
      "Managed inbox, meetings, logistics, and cost optimization for training events. Reduced response time by 50%.",
    image:
      "https://images.unsplash.com/photo-1573164574230-0f3b84d1a448?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Project 03",
    subtitle: "Project 03",
    description:
      "Managed social media and sustainability campaigns. Boosted engagement by 30% and delivered high-quality reports.",
    image:
      "https://images.unsplash.com/photo-1532619187608-e5375cab36dc?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-400 text-center mb-12"
        >
          Projects
        </motion.h3>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-1">
                  {proj.title}
                </h4>
                <h5 className="text-sm font-medium text-slate-400 mb-4">
                  {proj.subtitle}
                </h5>
                <p className="text-sm text-slate-300">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
