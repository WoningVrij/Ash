import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-modern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-ash-dark mb-8 tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-xl text-ash-gray mb-8 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-xl text-ash-gray mb-8 leading-relaxed">
              {t.about.description2}
            </p>
            <p className="text-2xl text-ash-orange font-bold mb-12 tracking-tight">
              {t.about.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-orange rounded-xl flex items-center justify-center mr-6 mt-1 shadow-orange">
                  <Check className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ash-dark mb-2">{t.about.flexible.title}</h4>
                  <p className="text-ash-gray text-lg leading-relaxed">{t.about.flexible.description}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-orange rounded-xl flex items-center justify-center mr-6 mt-1 shadow-orange">
                  <Check className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ash-dark mb-2">{t.about.legal.title}</h4>
                  <p className="text-ash-gray text-lg leading-relaxed">{t.about.legal.description}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-orange rounded-xl flex items-center justify-center mr-6 mt-1 shadow-orange">
                  <Check className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ash-dark mb-2">{t.about.purposeBuilt.title}</h4>
                  <p className="text-ash-gray text-lg leading-relaxed">{t.about.purposeBuilt.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=800"
              alt="International students collaborating"
              className="rounded-2xl shadow-xl w-full h-auto"
            />

            {/* Modern statistics overlay */}
            <div className="absolute bottom-8 left-8 right-8 glass-effect p-8 rounded-2xl shadow-modern">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-ash-orange">2</div>
                  <div className="text-sm text-ash-gray font-medium">Cities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-ash-orange">100%</div>
                  <div className="text-sm text-ash-gray font-medium">Furnished</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
