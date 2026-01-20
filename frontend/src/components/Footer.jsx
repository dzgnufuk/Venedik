import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { contactData } from '../data/mock';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Venedik <span className="text-amber-400">Pastanesi</span>
            </h2>
            <p className="text-amber-200 mb-4">
              Yılların deneyimiyle tatlı, pasta ve kafe kültürünü buluşturan eşsiz lezzet durağı.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Lezzetlerimiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-400" />
                <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="text-amber-200 hover:text-white transition-colors">
                  {contactData.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-400" />
                <a href={`mailto:${contactData.email}`} className="text-amber-200 hover:text-white transition-colors">
                  {contactData.email}
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-amber-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-amber-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 pt-8 text-center">
          <p className="text-amber-300 text-sm">
            &copy; {new Date().getFullYear()} Venedik Pastanesi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;