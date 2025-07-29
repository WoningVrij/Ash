import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { AshLogo } from "@/assets/logo";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <AshLogo className="h-8 w-8 text-ash-orange" />
            <span className="ml-3 text-xl font-bold text-black">ASH</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-ash-dark hover:text-ash-orange transition-colors"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-ash-dark hover:text-ash-orange transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-ash-dark hover:text-ash-orange transition-colors"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-ash-dark hover:text-ash-orange transition-colors"
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-ash-dark hover:text-ash-orange transition-colors"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-ash-dark hover:text-ash-orange transition-colors"
            >
              {t.nav.contact}
            </button>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 ml-4">
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'bg-ash-orange text-white' : 'text-ash-gray hover:text-ash-orange'}
              >
                EN
              </Button>
              <Button
                variant={language === 'nl' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('nl')}
                className={language === 'nl' ? 'bg-ash-orange text-white' : 'text-ash-gray hover:text-ash-orange'}
              >
                NL
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-ash-dark hover:text-ash-orange"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-ash-dark hover:text-ash-orange w-full text-left"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-ash-dark hover:text-ash-orange w-full text-left"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block px-3 py-2 text-ash-dark hover:text-ash-orange w-full text-left"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block px-3 py-2 text-ash-dark hover:text-ash-orange w-full text-left"
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block px-3 py-2 text-ash-dark hover:text-ash-orange w-full text-left"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-ash-dark hover:text-ash-orange w-full text-left"
            >
              {t.nav.contact}
            </button>
            <div className="flex space-x-2 px-3 py-2">
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'bg-ash-orange text-white' : 'text-ash-gray'}
              >
                EN
              </Button>
              <Button
                variant={language === 'nl' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('nl')}
                className={language === 'nl' ? 'bg-ash-orange text-white' : 'text-ash-gray'}
              >
                NL
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
