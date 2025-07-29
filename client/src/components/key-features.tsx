import { FileText, Home, Users } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function KeyFeatures() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-ash-gray max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-ash-light rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-ash-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4">
              {t.features.noBureaucracy.title}
            </h3>
            <p className="text-ash-gray">
              {t.features.noBureaucracy.description}
            </p>
          </div>

          <div className="text-center p-8 bg-ash-light rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-ash-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4">
              {t.features.allInclusive.title}
            </h3>
            <p className="text-ash-gray">
              {t.features.allInclusive.description}
            </p>
          </div>

          <div className="text-center p-8 bg-ash-light rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-ash-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4">
              {t.features.international.title}
            </h3>
            <p className="text-ash-gray">
              {t.features.international.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
