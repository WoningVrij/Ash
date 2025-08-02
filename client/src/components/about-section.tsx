import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-modern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-ash-dark tracking-tight leading-tight">
                {t.about.title}
              </h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-ash-gray leading-relaxed">
                  {t.about.description1}
                </p>
                <p className="text-lg md:text-xl text-ash-gray leading-relaxed">
                  {t.about.description2}
                </p>
              </div>
              <p className="text-xl md:text-2xl text-ash-orange font-bold tracking-tight bg-orange-50 px-6 py-4 rounded-xl border-l-4 border-ash-orange">
                {t.about.subtitle}
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="group flex items-start p-4 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-md">
                <div className="w-10 h-10 bg-gradient-orange rounded-xl flex-shrink-0 flex items-center justify-center mr-5 mt-0.5 shadow-orange group-hover:scale-110 transition-transform duration-300">
                  <Check className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ash-dark mb-2 group-hover:text-ash-orange transition-colors duration-300">{t.about.flexible.title}</h4>
                  <p className="text-ash-gray text-base md:text-lg leading-relaxed">{t.about.flexible.description}</p>
                </div>
              </div>
              
              <div className="group flex items-start p-4 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-md">
                <div className="w-10 h-10 bg-gradient-orange rounded-xl flex-shrink-0 flex items-center justify-center mr-5 mt-0.5 shadow-orange group-hover:scale-110 transition-transform duration-300">
                  <Check className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ash-dark mb-2 group-hover:text-ash-orange transition-colors duration-300">{t.about.legal.title}</h4>
                  <p className="text-ash-gray text-base md:text-lg leading-relaxed">{t.about.legal.description}</p>
                </div>
              </div>
              
              <div className="group flex items-start p-4 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-md">
                <div className="w-10 h-10 bg-gradient-orange rounded-xl flex-shrink-0 flex items-center justify-center mr-5 mt-0.5 shadow-orange group-hover:scale-110 transition-transform duration-300">
                  <Check className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ash-dark mb-2 group-hover:text-ash-orange transition-colors duration-300">{t.about.purposeBuilt.title}</h4>
                  <p className="text-ash-gray text-base md:text-lg leading-relaxed">{t.about.purposeBuilt.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-xl transform group-hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=800"
                alt="International students collaborating"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Modern statistics overlay */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-5/6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform transition-all duration-500 group-hover:scale-105">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-lg bg-white/80">
                  <div className="text-3xl font-bold text-ash-orange">2</div>
                  <div className="text-sm text-ash-gray font-medium mt-1">Cities</div>
                </div>
                <div className="p-3 rounded-lg bg-white/80">
                  <div className="text-3xl font-bold text-ash-orange">100%</div>
                  <div className="text-sm text-ash-gray font-medium mt-1">Furnished</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
