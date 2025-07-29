import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Handshake, Clock } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function PricingSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-modern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-ash-dark mb-6 tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-xl md:text-2xl text-ash-gray max-w-4xl mx-auto leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Room Pricing */}
          <div className="bg-white rounded-3xl shadow-modern-lg p-10 border-2 border-transparent hover:border-ash-orange transition-all duration-300 card-hover">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-ash-dark mb-3 tracking-tight">{t.pricing.room.title}</h3>
              <p className="text-ash-gray text-lg">{t.pricing.room.subtitle}</p>
            </div>

            <div className="text-center mb-10">
              <div className="text-6xl font-bold text-ash-orange mb-3">€525</div>
              <div className="text-xl text-ash-gray">{t.pricing.room.perMonth}</div>
              <div className="text-4xl font-bold text-ash-dark mt-6">€6,300</div>
              <div className="text-xl text-ash-gray">{t.pricing.room.annually}</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="text-ash-orange w-5 h-5 mr-3" />
                <span className="text-ash-gray">{t.pricing.room.features.privateRoom}</span>
              </div>
              <div className="flex items-center">
                <Check className="text-ash-orange w-5 h-5 mr-3" />
                <span className="text-ash-gray">{t.pricing.room.features.sharedSpaces}</span>
              </div>
              <div className="flex items-center">
                <Check className="text-ash-orange w-5 h-5 mr-3" />
                <span className="text-ash-gray">{t.pricing.room.features.internet}</span>
              </div>
              <div className="flex items-center">
                <Check className="text-ash-orange w-5 h-5 mr-3" />
                <span className="text-ash-gray">{t.pricing.room.features.utilities}</span>
              </div>
              <div className="flex items-center">
                <Check className="text-ash-orange w-5 h-5 mr-3" />
                <span className="text-ash-gray">{t.pricing.room.features.taxes}</span>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              className="w-full bg-ash-orange text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              {t.pricing.room.apply}
            </Button>
          </div>

          {/* Studio Pricing */}
          <div className="bg-white rounded-3xl shadow-modern-lg p-10 border-2 border-ash-orange relative card-hover">
            {/* Popular badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-orange text-white px-8 py-3 text-lg font-bold shadow-orange">
                {t.pricing.studio.popular}
              </Badge>
            </div>

            <div className="text-center mb-10 mt-6">
              <h3 className="text-3xl font-bold text-ash-dark mb-3 tracking-tight">{t.pricing.studio.title}</h3>
              <p className="text-ash-gray text-lg">{t.pricing.studio.subtitle}</p>
            </div>

            <div className="text-center mb-10">
              <div className="text-6xl font-bold text-ash-orange mb-3">€1,250</div>
              <div className="text-xl text-ash-gray">{t.pricing.studio.perMonth}</div>
              <div className="text-4xl font-bold text-ash-dark mt-6">€15,000</div>
              <div className="text-xl text-ash-gray">{t.pricing.studio.annually}</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="text-ash-orange w-5 h-5 mr-3" />
                <span className="text-ash-gray">{t.pricing.studio.features.privateStudio}</span>
              </div>
              <div className="flex items-center">
                <Check className="text-ash-orange w-5 h-5 mr-3" />
                <span className="text-ash-gray">{t.pricing.studio.features.ownSpaces}</span>
              </div>
              <div className="flex items-center">
                <Check className="text-ash-orange w-5 h-5 mr-3" />
                <span className="text-ash-gray">{t.pricing.studio.features.internet}</span>
              </div>
              <div className="flex items-center">
                <Check className="text-ash-orange w-5 h-5 mr-3" />
                <span className="text-ash-gray">{t.pricing.studio.features.utilities}</span>
              </div>
              <div className="flex items-center">
                <Check className="text-ash-orange w-5 h-5 mr-3" />
                <span className="text-ash-gray">{t.pricing.studio.features.taxes}</span>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              className="w-full bg-ash-orange text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              {t.pricing.studio.apply}
            </Button>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">
              {t.pricing.whyAnnual.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-ash-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold text-black mb-2">{t.pricing.whyAnnual.noCredit.title}</h4>
                <p className="text-ash-gray text-sm">
                  {t.pricing.whyAnnual.noCredit.description}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-ash-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold text-black mb-2">{t.pricing.whyAnnual.fairAccess.title}</h4>
                <p className="text-ash-gray text-sm">
                  {t.pricing.whyAnnual.fairAccess.description}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-ash-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold text-black mb-2">{t.pricing.whyAnnual.peace.title}</h4>
                <p className="text-ash-gray text-sm">
                  {t.pricing.whyAnnual.peace.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
