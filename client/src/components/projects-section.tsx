import { Button } from "@/components/ui/button";
import { TrainFront, ShoppingCart, Wifi, Train, Landmark, Bike } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { InteractiveImage } from "@/components/ui/interactive-image";
import { Slideshow } from '@/components/ui/slideshow';

export function ProjectsSection() {
  const { t } = useLanguage();

  const haarlemImages = [
    '/images/haarlem/1 2025-07-30 120122.png',
    '/images/haarlem/1Centrum-Haarlem-appartement-plattegrond.webp',
    '/images/haarlem/2025-07-30 115837.png',
    '/images/haarlem/2025-07-30 120025.png',
    '/images/haarlem/2Haarlem-kaart.webp',
    '/images/haarlem/3Haarlem-plattegrond.webp',
    '/images/haarlem/4 Haarlem-plattegrond-2.webp',
    '/images/haarlem/5Plattegrond-Haarlem.webp',
    '/images/haarlem/6 appartement-Haarlem.webp',
    '/images/haarlem/680231880.jpg',
    '/images/haarlem/680231920.jpg',
    '/images/haarlem/680231928.jpg',
    '/images/haarlem/680296224.jpg',
    '/images/haarlem/680296241.jpg',
    '/images/haarlem/680296248.jpg',
    '/images/haarlem/680764667.jpg',
    '/images/haarlem/680765668.jpg',
    '/images/haarlem/680766141.jpg',
    '/images/haarlem/682402791.jpg',
    '/images/haarlem/682402793.jpg',
    '/images/haarlem/682403157.jpg',
    '/images/haarlem/682956037.jpg',
    '/images/haarlem/684893614.jpg',
    '/images/haarlem/684893662.jpg',
    '/images/haarlem/684893664.jpg',
    '/images/haarlem/686442788.jpg',
    '/images/haarlem/686442813.jpg',
    '/images/haarlem/686442815.jpg',
    '/images/haarlem/686442841.jpg',
    '/images/haarlem/686444758.jpg',
    '/images/haarlem/686445743.jpg',
    '/images/haarlem/686455952.jpg',
    '/images/haarlem/687602737.jpg',
    '/images/haarlem/689474444.jpg',
    '/images/haarlem/693167051.jpg',
    '/images/haarlem/693167188.jpg',
    '/images/haarlem/702473448.jpg',
    '/images/haarlem/702473597.jpg',
    '/images/haarlem/702473977.jpg',
    '/images/haarlem/702474327.jpg',
    '/images/haarlem/708166559.jpg',
    '/images/haarlem/708167524.jpg',
    '/images/haarlem/Centrum-Haarlem-appartement-huiskamer.jpg',
    '/images/haarlem/Haarlem-badkamer.jpg',
    '/images/haarlem/Haarlem-dakterras.webp',
    '/images/haarlem/Haarlem-huiskamer.jpg',
    '/images/haarlem/Haarlem-studio.jpg',
    '/images/haarlem/Haarlem-zolder-appartement.jpg',
  ];

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
            <InteractiveImage
              imageUrl="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
              alt="Amsterdam cityscape with canals"
              iframeSrc="https://planner5d.onelink.me/stDT/xqi6o5mn"
            />

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-black">{t.projects.amsterdam.title}</h3>

              </div>

              <p className="text-ash-gray mb-6">
                {t.projects.amsterdam.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-lg font-bold text-ash-orange">4</div>
                  <div className="text-sm text-ash-gray">{t.projects.amsterdam.rooms}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-lg font-bold text-ash-orange">3</div>
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

              <Button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full bg-ash-orange text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm sm:text-base"
              >
                {t.projects.viewDetails}
              </Button>
            </div>
          </div>

          {/* Haarlem Project */}
          <div className="bg-ash-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Slideshow images={haarlemImages} className="rounded-t-2xl" />

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-black">{t.projects.haarlem.title}</h3>

              </div>

              <p className="text-ash-gray mb-6">
                {t.projects.haarlem.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-lg font-bold text-ash-orange">6</div>
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

              <Button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full bg-ash-orange text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm sm:text-base"
              >
                {t.projects.viewDetails}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
