import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-modern min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ash-dark leading-tight mb-8 tracking-tight">
              {t.hero.title}
              <br />
              <span className="bg-gradient-orange bg-clip-text text-transparent">{t.hero.subtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl text-ash-gray mb-10 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-orange text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-ash-orange-dark transition-all duration-300 shadow-orange hover:shadow-lg transform hover:scale-105"
              >
                {t.hero.viewRooms}
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="border-2 border-ash-orange text-ash-orange px-10 py-5 rounded-xl font-semibold text-lg hover:bg-ash-orange hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=800"
              alt="Modern student housing building"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            {/* Modern floating stats cards */}
            <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl shadow-modern card-hover">
              <div className="text-3xl font-bold text-ash-orange">€525</div>
              <div className="text-sm text-ash-gray font-medium">Room/month</div>
            </div>
            <div className="absolute -top-6 -right-6 glass-effect p-6 rounded-2xl shadow-modern card-hover">
              <div className="text-3xl font-bold text-ash-orange">18-35</div>
              <div className="text-sm text-ash-gray font-medium">Years old</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
