import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A minimalistic personal website built with React and Tailwind CSS, featuring routing with React Router, responsive design, and clean UI components for showcasing projects and professional information.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Adventure Text-Based Game",
    description:
      "An interactive adventure game implemented in Java featuring branching storylines, character progression, inventory management, and multiple endings based on player choices.",
    tech: ["Java", "Game Logic"],
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Interactive Nervous System Website",
    description:
      "A hard-coded website showcasing interactive models of the Central Nervous System and Peripheral Nervous system, utilizing the Three.js JavaScript Library.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "",
  }
  
];

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A selection of projects I've worked on, showcasing my
          skills in front-end development, UI/UX design, and
          problem-solving.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow border-2 border-white"
            style={{ borderColor: 'white' }}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-700">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-white text-sm rounded-full"
                    style={{ backgroundColor: '#003049' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}