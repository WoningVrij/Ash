import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-ash-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-ash-gray mb-6">
              {t.about.description1}
            </p>
            <p className="text-lg text-ash-gray mb-6">
              {t.about.description2}
            </p>
            <p className="text-lg text-ash-orange font-semibold mb-8">
              {t.about.subtitle}
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-ash-orange rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="text-white w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">{t.about.flexible.title}</h4>
                  <p className="text-ash-gray">{t.about.flexible.description}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-ash-orange rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="text-white w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">{t.about.legal.title}</h4>
                  <p className="text-ash-gray">{t.about.legal.description}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-ash-orange rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="text-white w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">{t.about.purposeBuilt.title}</h4>
                  <p className="text-ash-gray">{t.about.purposeBuilt.description}</p>
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

            {/* Statistics overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-ash-orange">2</div>
                  <div className="text-sm text-ash-gray">Cities</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ash-orange">100%</div>
                  <div className="text-sm text-ash-gray">Furnished</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
