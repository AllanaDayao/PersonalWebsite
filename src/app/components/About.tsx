import { Briefcase, GraduationCap, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          About Me
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Let me introduce myself!
        </p>
        <ImageWithFallback
          src="/src/imports/solo_edited.JPG"
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover mx-auto border-[6px]"
          style={{
            borderColor: "#003049",
            objectPosition: "center 10%",
          }}
        />
      </div>

      {/* Bio */}
      <div className="mb-16 max-w-3xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4 text-center">
            I am an undergraduate at Tufts University studying
            Computer Science.
          </p>
          <p className="text-gray-700 leading-relaxed text-center">
            I'm constantly learning the best practices to stay
            at the forefront of the industry.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6 text-gray-900" />
          <h2 className="text-2xl font-semibold text-gray-900">
            Experience
          </h2>
        </div>
        <div className="space-y-8">
          <div
            className="pl-6"
            style={{ borderLeft: "2px solid #003049" }}
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900">
                  {" "}
                  Computer Science Honors Society Vice President
                </h3>
                <span className="text-sm text-gray-600"> </span>
              </div>
              <p className="text-gray-700"> </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Led initiatives to promote computer science education wihtin the student body</li>
                <li>Collaborated with the executive board to streamline club operations and events. </li>
              
              </ul>
            </div>
          </div>

          <div
            className="pl-6"
            style={{ borderLeft: "2px solid #003049" }}
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900">
                  Girls Who Code | Summer Immersion Program
                  Participant
                </h3>
                <span className="text-sm text-gray-600"> </span>
              </div>
              <p className="text-gray-700"> </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Completed a specialized virtual game design track. </li>
                <li>Built games using p5.js, a creative JavaScript library. </li>
                <li>Attended workshops and career panels with industry professionals </li>
              </ul>
            </div>
          </div>

          <div
            className="pl-6"
            style={{ borderLeft: "2px solid #003049" }}
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900">
                  Robotics | Parametric CAD Designs{" "}
                </h3>
                <span className="text-sm text-gray-600"> </span>
              </div>
              <p className="text-gray-700"> </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Learned how to make parametric designs in Fusion </li>
                <li>CAD and 3D printing fundamentals.</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6 text-gray-900" />
          <h2 className="text-2xl font-semibold text-gray-900">
            Education
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600">Tufts University</p>
            </div>
            <span className="text-sm text-gray-500">
              2025 - 2029
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">
                Grafton High School
              </h3>
              <p className="text-gray-600"></p>
            </div>
            <span className="text-sm text-gray-500">
              2021 - 2025
            </span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-gray-900" />
          <h2 className="text-2xl font-semibold text-gray-900">
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "CSS",
                "Python",
                "Java",
                "C++",
                "HTML",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-white text-sm rounded-full"
                  style={{ backgroundColor: "#003049" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Three.js", "Node.js"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-white text-sm rounded-full"
                  style={{ backgroundColor: "#003049" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Linux"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-white text-sm rounded-full"
                  style={{ backgroundColor: "#003049" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}