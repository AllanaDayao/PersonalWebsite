import { Outlet, Link, useLocation } from "react-router";
import { Home, Briefcase, User, Mail } from "lucide-react";

export function Root() {
  const location = useLocation();

  const navItems = [
    { path: "/about", label: "About", icon: User },
    { path: "/", label: "Home", icon: Home },
    { path: "/projects", label: "Projects", icon: Briefcase },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdf0d5' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm border-b-2 border-white z-50" style={{ backgroundColor: '#669bbccc' }}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex gap-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 transition-colors ${
                      isActive(item.path)
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t-2 mt-20" style={{ borderColor: '#003049' }}>
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-600">
          © 2026 Allana Dayao. All rights reserved.
        </div>
      </footer>
    </div>
  );
}