import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities,
          collaborations, or just having a friendly chat!.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#003049' }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-gray-900 hover:underline"
                  >
                    dayaoa07@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#003049' }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-gray-900">South Grafton, MA</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Connect With Me
            </h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/AllanaDayao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg flex items-center justify-center hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#003049' }}
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/allana-denise-dayao-5234a2343/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BCVa6eD6ySmGEP9RBz0XgvQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg flex items-center justify-center hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#003049' }}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ borderColor: '#003049', '--tw-ring-color': '#003049' } as React.CSSProperties}
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ borderColor: '#003049', '--tw-ring-color': '#003049' } as React.CSSProperties}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ borderColor: '#003049', '--tw-ring-color': '#003049' } as React.CSSProperties}
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                style={{ borderColor: '#003049', '--tw-ring-color': '#003049' } as React.CSSProperties}
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#003049' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}