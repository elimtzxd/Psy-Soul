import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div id="contacto" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contáctanos</h2>
          <p className="mt-4 text-lg text-gray-500">
            Estamos aquí para acompañarte en tu camino hacia el bienestar
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg">
            <Phone className="h-8 w-8 text-green-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Teléfono</h3>
            <p className="mt-2 text-base text-gray-500">+52 449 225 8727</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg">
            <Mail className="h-8 w-8 text-green-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-base text-gray-500">psyandsoulcom@gmail.com</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg">
            <MapPin className="h-8 w-8 text-green-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Ubicación</h3>
            <p className="mt-2 text-base text-gray-500">Aguascalientes, Ags.</p>
          </div>
        </div>
      </div>
    </div>
  );
}