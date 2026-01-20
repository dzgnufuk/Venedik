import React from 'react';
import { Coffee, Cake, Award, Users } from 'lucide-react';
import { aboutData } from '../data/mock';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: "Taze Ürünler",
      description: "Her gün taptaze ürünler"
    },
    {
      icon: Cake,
      title: "Özel Tasarımlar",
      description: "Kişiye özel pasta tasarımları"
    },
    {
      icon: Award,
      title: "Yılların Deneyimi",
      description: "Kalite ve lezzet garantisi"
    },
    {
      icon: Users,
      title: "Misafirperverlik",
      description: "Güler yüzlü hizmet"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-800 mb-6">
            {aboutData.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {aboutData.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-amber-100"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;