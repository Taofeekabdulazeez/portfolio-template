import { motion } from "framer-motion";

const skills = [
  { name: "React", description: "Building dynamic UIs" },
  { name: "Next.js", description: "Full-stack React framework" },
  { name: "Node.js", description: "JavaScript everywhere" },
  { name: "Express", description: "Fast, minimal backend" },
  { name: "MongoDB", description: "Flexible document storage" },
  { name: "PostgreSQL", description: "Reliable relational data" },
  { name: "JWT", description: "Stateless authentication" },
  { name: "TypeScript", description: "Type-safe JavaScript" },
  { name: "Tailwind CSS", description: "Utility-first styling" },
  { name: "REST API", description: "Standardized communication" },
  { name: "GraphQL", description: "Query what you need" },
  { name: "Prisma", description: "Type-safe database client" },
  { name: "OAuth", description: "Secure delegated access" },
  { name: "Redux", description: "Predictable state management" },
  { name: "Git", description: "Version control mastery" },
  { name: "WebSockets", description: "Real-time communication" },
  { name: "Redis", description: "Lightning-fast caching" },
];

const Skills = () => {
  return (
    <section
      data-section
      className="min-h-screen py-24 px-6 relative overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 opacity-5 bg-film-grain" />
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl font-serif text-center mb-20">
          Skills & Philosophy
        </h2>

        {/* Adaptive, minimalist grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group text-center cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="text-xl font-serif text-[#8B7355] mb-2 transition-colors duration-300 group-hover:text-[#F5F3EF]">
                  {skill.name}
                </div>
                <p className="text-sm text-[#F5F3EF]/60 italic group-hover:text-[#8B7355]/80 transition-colors duration-300">
                  {skill.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center text-[#F5F3EF]/60 italic">
          Growth isn’t a checklist, it’s a conversation between tools and ideas.
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Skills;
