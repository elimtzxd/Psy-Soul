import React from 'react';
import { Users, Brain, Sprout, Heart } from 'lucide-react';

const services = [
  {
    title: 'Terapia Individual',
    description: 'Sesiones personalizadas que integran principios ecológicos y psicológicos.',
    icon: Brain
  },
  {
    title: 'Terapia Grupal',
    description: 'Experiencias compartidas de sanación en conexión con la naturaleza.',
    icon: Users
  },
  {
    title: 'Talleres en la Naturaleza',
    description: 'Actividades guiadas para reconectar con el entorno natural.',
    icon: Sprout
  },
  {
    title: 'Mindfulness Ecológico',
    description: 'Prácticas de atención plena en entornos naturales.',
    icon: Heart
  }
];

export function Services() {
  return (
    <div id="servicios" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Descubre cómo podemos ayudarte a reconectar con tu esencia natural
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-green-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                {React.createElement(service.icon, { className: "h-6 w-6" })}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
              <p className="mt-2 text-base text-gray-500 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}