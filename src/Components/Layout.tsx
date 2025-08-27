import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  
  // Close nav when route changes
  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programming', label: 'Programming' },
    { path: '/photography', label: 'Photography' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Mobile Nav Button */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-md shadow-lg border border-gray-200"
        aria-label="Toggle navigation"
      >
        {isNavOpen ? (
          <XMarkIcon className="h-6 w-6 text-primary" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-primary" />
        )}
      </button>

      {/* Navigation Sidebar */}
      <nav
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-primary text-secondary transform transition-transform duration-300 ease-in-out z-40
          ${isNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="p-6 pt-16 md:pt-6">
          <h1 className="text-2xl font-bold mb-8">Scott's Portfolio</h1>
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? 'bg-accent' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsNavOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default Layout;