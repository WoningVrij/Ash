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
    <section id="home" className="pt-16 bg-gradient-to-br from-ash-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              {t.hero.title}
              <br />
              <span className="text-ash-orange">{t.hero.subtitle}</span>
            </h1>
            <p className="text-xl text-ash-gray mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-ash-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg"
              >
                {t.hero.viewRooms}
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="border-2 border-ash-orange text-ash-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-ash-orange hover:text-white transition-colors"
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
            {/* Floating stats cards */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-ash-orange">€525</div>
              <div className="text-sm text-ash-gray">Room/month</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-ash-orange">18-35</div>
              <div className="text-sm text-ash-gray">Years old</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
