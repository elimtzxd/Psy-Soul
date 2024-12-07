import React from 'react';
import { Heart } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80"
          alt="Persona haciendo rapel al atardecer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-orange-900/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <Heart className="h-12 w-12 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Conecta con tu
            <span className="text-orange-200"> naturaleza interior</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Descubre el poder sanador de la conexión con la naturaleza. 
            Encuentra equilibrio, paz y bienestar a través de la ecopsicología.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a 
                href="#contacto" 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-900 bg-white hover:bg-orange-50 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                Agenda tu consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}