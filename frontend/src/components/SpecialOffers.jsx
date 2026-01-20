import React from 'react';
import { specialOffersData } from '../data/mock';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

const SpecialOffers = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-cream-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={specialOffersData.image}
                alt="Özel Pastalar"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-amber-600 mr-3" />
              <span className="text-amber-600 font-semibold text-lg">Özel Tasarımlar</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-800 mb-6">
              {specialOffersData.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {specialOffersData.description}
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              Sipariş İçin İletişime Geçin
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;