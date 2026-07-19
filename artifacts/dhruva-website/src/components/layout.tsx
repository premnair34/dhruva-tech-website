import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoLight from '@assets/dhruva-logo-light.png';
import logoDark from '@assets/dhruva-logo-dark.png';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkNav = location === '/' || location === '/about' || location === '/services' || location === '/contact'; 
  // Let's make the nav styling adaptive. We'll use a solid white nav when scrolled, transparent when top.
  // Actually, a sleek consulting firm often has a unified dark or glass nav.
  // Let's go with a sticky nav that becomes solid white or dark navy.
  
  const navBgClass = isScrolled 
    ? 'bg-white shadow-sm border-b border-border/40 py-4' 
    : 'bg-transparent py-6';
    
  const textClass = isScrolled 
    ? 'text-foreground' 
    : (location === '/' || location === '/about' || location === '/services' || location === '/contact' ? 'text-white' : 'text-foreground');

  const logoSrc = isScrolled 
    ? logoDark 
    : (location === '/' || location === '/about' || location === '/services' || location === '/contact' ? logoLight : logoDark);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <img src={logoSrc} alt="Dhruva Technologies" className="h-8 transition-all duration-300" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`text-sm font-medium tracking-wide transition-colors hover:text-accent cursor-pointer ${
                  location === link.href ? 'text-accent' : textClass
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="ml-4 bg-accent hover:bg-accent/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300">
                Let's Talk
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden z-50 p-2 ${mobileMenuOpen ? 'text-foreground' : textClass}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 h-screen bg-white flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`text-2xl font-bold tracking-tight transition-colors hover:text-accent cursor-pointer ${
                    location === link.href ? 'text-accent' : 'text-foreground'
                  }`}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="bg-[#0f1222] text-slate-300 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img src={logoLight} alt="Dhruva Technologies" className="h-8 mb-6 opacity-90" />
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Guiding enterprises through complex technical challenges with precision, reliable engineering, and quiet confidence.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services"><span className="hover:text-white transition-colors cursor-pointer">Software Development</span></Link></li>
              <li><Link href="/services"><span className="hover:text-white transition-colors cursor-pointer">Cloud & Infrastructure</span></Link></li>
              <li><Link href="/services"><span className="hover:text-white transition-colors cursor-pointer">Digital Transformation</span></Link></li>
              <li><Link href="/services"><span className="hover:text-white transition-colors cursor-pointer">Product Strategy</span></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about"><span className="hover:text-white transition-colors cursor-pointer">About Us</span></Link></li>
              <li><Link href="/team"><span className="hover:text-white transition-colors cursor-pointer">Our Team</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-white transition-colors cursor-pointer">Insights</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-white transition-colors cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Dhruva Technologies. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-slate-500">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
