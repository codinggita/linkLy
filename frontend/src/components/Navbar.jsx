import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
    { label: 'Enterprise', href: '#enterprise' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-250 ${scrolled ? 'bg-white/92 backdrop-blur-xl border-b border-gray-200 py-3 shadow-sm' : 'bg-transparent'}`} id="navbar">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-8 md:px-4">
        <Link to="/" className="flex items-center gap-2.5 text-[1.2rem] font-bold text-black tracking-[-0.02em] no-underline shrink-0 group" id="navbar-logo">
          <svg className="transition-transform duration-250 group-hover:scale-105" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="8" fill="#0a0a0a"/>
            <path d="M12 16C12 16 10 18 8 18C5.79086 18 4 16.2091 4 14C4 11.7909 5.79086 10 8 10C10 10 12 12 12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12C16 12 18 10 20 10C22.2091 10 24 11.7909 24 14C24 16.2091 22.2091 18 20 18C18 18 16 16 16 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 14H18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>LinkLy</span>
        </Link>

        <ul className={`flex items-center gap-1 md:fixed md:inset-0 md:bg-white md:flex-col md:justify-center md:gap-2 transition-transform duration-350 md:z-[999] ${mobileOpen ? 'md:translate-x-0' : 'md:translate-x-full'} lg:static lg:flex-row lg:bg-transparent lg:translate-x-0`} id="navbar-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="block px-4 py-2 text-sm font-medium text-gray-600 rounded-full transition-all duration-150 whitespace-nowrap hover:text-black hover:bg-gray-100 md:text-lg md:px-6 md:py-3 lg:px-4 lg:py-2 lg:text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="hidden md:flex flex-col gap-3 mt-6 w-full max-w-[200px] lg:hidden">
            <Link to="/login" className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-full transition-all duration-150 whitespace-nowrap no-underline text-gray-600 hover:text-black hover:bg-gray-100 w-full">Log In</Link>
            <Link to="/signup" className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-full transition-all duration-150 whitespace-nowrap no-underline bg-black text-white hover:bg-gray-800 hover:-translate-y-px hover:shadow-md w-full">Sign Up</Link>
          </li>
        </ul>

        <div className="flex items-center gap-2 shrink-0 md:hidden lg:flex" id="navbar-actions">
          <Link to="/login" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-150 whitespace-nowrap no-underline text-gray-600 hover:text-black hover:bg-gray-100">Log In</Link>
          <Link to="/signup" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-150 whitespace-nowrap no-underline bg-black text-white hover:bg-gray-800 hover:-translate-y-px hover:shadow-md">Sign Up</Link>
        </div>

        <button
          className="hidden md:flex text-black p-2 rounded-md z-[1001] lg:hidden"
          id="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
