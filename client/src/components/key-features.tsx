import { FileText, Home, Users } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function KeyFeatures() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-ash-dark mb-6 tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-xl md:text-2xl text-ash-gray max-w-4xl mx-auto leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-10 bg-gradient-modern rounded-3xl card-hover shadow-modern">
            <div className="w-20 h-20 bg-gradient-orange rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-orange">
              <FileText className="text-white w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-ash-dark mb-6 tracking-tight">
              {t.features.noBureaucracy.title}
            </h3>
            <p className="text-ash-gray text-lg leading-relaxed">
              {t.features.noBureaucracy.description}
            </p>
          </div>

          <div className="text-center p-10 bg-gradient-modern rounded-3xl card-hover shadow-modern">
            <div className="w-20 h-20 bg-gradient-orange rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-orange">
              <Home className="text-white w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-ash-dark mb-6 tracking-tight">
              {t.features.allInclusive.title}
            </h3>
            <p className="text-ash-gray text-lg leading-relaxed">
              {t.features.allInclusive.description}
            </p>
          </div>

          <div className="text-center p-10 bg-gradient-modern rounded-3xl card-hover shadow-modern">
            <div className="w-20 h-20 bg-gradient-orange rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-orange">
              <Users className="text-white w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-ash-dark mb-6 tracking-tight">
              {t.features.international.title}
            </h3>
            <p className="text-ash-gray text-lg leading-relaxed">
              {t.features.international.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
