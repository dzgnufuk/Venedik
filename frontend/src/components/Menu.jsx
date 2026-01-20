import React from 'react';
import { Card, CardContent } from './ui/card';
import { menuCategories } from '../data/content';

const Menu = () => {
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
            <Card
              key={category.id}
              className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-amber-100 group"
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
                <ul className="space-y-2">
                  {category.items.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;