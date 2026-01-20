import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { menuCategories } from '../data/content';
import { ChevronRight } from 'lucide-react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-800 mb-6">
            Lezzetlerimiz
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Zengin ürün yelpazemiz, hem tatlı severlerin hem de lezzet tutkunlarının kalbini fetheder.
          </p>
        </div>

        {/* Menu Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <Dialog key={category.id}>
              <DialogTrigger asChild>
                <Card
                  className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-amber-100 group cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700">
                      <span>Detayları Gör</span>
                      <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-amber-800 mb-2">
                    {category.title}
                  </DialogTitle>
                  <p className="text-gray-600">{category.description}</p>
                </DialogHeader>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-amber-100"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.name}
                        </h4>
                        <p className="text-amber-600 font-bold text-xl">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;