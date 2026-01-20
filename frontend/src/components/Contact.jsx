import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { contactData } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-800 mb-6">
            {contactData.title}
          </h2>
          <p className="text-lg text-gray-700">
            Sorularınız veya siparişleriniz için bize ulaşın
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Adres</h3>
                  <p className="text-gray-600">{contactData.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Telefon</h3>
                  <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="text-amber-600 hover:text-amber-700 font-medium">
                    {contactData.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">E-posta</h3>
                  <a href={`mailto:${contactData.email}`} className="text-amber-600 hover:text-amber-700 font-medium">
                    {contactData.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Çalışma Saatleri</h3>
                  <p className="text-gray-600">Her Gün: {contactData.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100">
            <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-amber-800 mb-2">Çukurova, Adana</h3>
                <p className="text-gray-700 mb-4">Harita yakında eklenecektir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;