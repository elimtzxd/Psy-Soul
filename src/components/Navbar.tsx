import React from 'react';
import { Leaf, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-semibold text-gray-800">Psy & Soul</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-green-600">Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-green-600">Servicios</a>
            <a href="#sobre-nosotros" className="text-gray-600 hover:text-green-600">Sobre Nosotros</a>
            <a href="#contacto" className="text-gray-600 hover:text-green-600">Contacto</a>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}