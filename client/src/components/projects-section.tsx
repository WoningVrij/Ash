import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrainFront, ShoppingCart, Wifi, Train, Landmark, Bike } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t.projects.title}
          </h2>
          <p className="text-xl text-ash-gray max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Amsterdam Project */}
          <div className="bg-ash-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
              alt="Amsterdam cityscape with canals"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-black">{t.projects.amsterdam.title}</h3>
                <Badge className="bg-green-100 text-green-800">
                  {t.projects.amsterdam.status}
                </Badge>
              </div>

              <p className="text-ash-gray mb-6">
                {t.projects.amsterdam.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-lg font-bold text-ash-orange">12</div>
                  <div className="text-sm text-ash-gray">{t.projects.amsterdam.rooms}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-lg font-bold text-ash-orange">6</div>
                  <div className="text-sm text-ash-gray">{t.projects.amsterdam.studios}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-ash-gray">
                  <TrainFront className="w-5 h-5 text-ash-orange mr-3" />
                  <span>{t.projects.amsterdam.features.transport}</span>
                </div>
                <div className="flex items-center text-ash-gray">
                  <ShoppingCart className="w-5 h-5 text-ash-orange mr-3" />
                  <span>{t.projects.amsterdam.features.shopping}</span>
                </div>
                <div className="flex items-center text-ash-gray">
                  <Wifi className="w-5 h-5 text-ash-orange mr-3" />
                  <span>{t.projects.amsterdam.features.internet}</span>
                </div>
              </div>

              <Button className="w-full bg-ash-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                {t.projects.viewDetails}
              </Button>
            </div>
          </div>

          {/* Haarlem Project */}
          <div className="bg-ash-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
              alt="Haarlem historic city center"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-black">{t.projects.haarlem.title}</h3>
                <Badge className="bg-ash-orange text-white">
                  {t.projects.haarlem.status}
                </Badge>
              </div>

              <p className="text-ash-gray mb-6">
                {t.projects.haarlem.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-lg font-bold text-ash-orange">8</div>
                  <div className="text-sm text-ash-gray">{t.projects.haarlem.rooms}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-lg font-bold text-ash-orange">4</div>
                  <div className="text-sm text-ash-gray">{t.projects.haarlem.studios}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-ash-gray">
                  <Train className="w-5 h-5 text-ash-orange mr-3" />
                  <span>{t.projects.haarlem.features.train}</span>
                </div>
                <div className="flex items-center text-ash-gray">
                  <Landmark className="w-5 h-5 text-ash-orange mr-3" />
                  <span>{t.projects.haarlem.features.historic}</span>
                </div>
                <div className="flex items-center text-ash-gray">
                  <Bike className="w-5 h-5 text-ash-orange mr-3" />
                  <span>{t.projects.haarlem.features.bike}</span>
                </div>
              </div>

              <Button className="w-full bg-ash-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                {t.projects.viewDetails}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
