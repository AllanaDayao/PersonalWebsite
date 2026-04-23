import { Link } from "react-router";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <div
        className="min-h-[70vh] flex flex-col justify-center items-center text-center rounded-2xl p-12 border-2 border-white"
        style={{ backgroundColor: "#003049" }}
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-gray-300">Hello, I'm</p>
            <h1 className="text-6xl font-bold text-white">
              Allana Dayao
            </h1>
            <h2 className="text-3xl text-gray-200">
              Software Engineer
            </h2>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I am interested in building exceptional digital
            experiences with modern web technologies. Passionate
            about learning the intersection of creative website
            design and frontend frameworks.
          </p>

          <div className="flex gap-4 pt-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
              style={{ backgroundColor: "#003049" }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 bg-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
              style={{
                borderColor: "#003049",
                color: "#003049",
              }}
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex gap-4 pt-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Skills Preview */}
      <div
        className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t-2"
        style={{ borderColor: "#003049" }}
      >
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">
            Frontend
          </h3>
          <p className="text-sm text-gray-700">
            React, HTML5, Next.js, Three.js, p5.js, CSS
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">
            Backend
          </h3>
          <p className="text-sm text-gray-700">
            Node.js, Python, Java
          </p>
        </div>
      </div>
    </div>
  );
}