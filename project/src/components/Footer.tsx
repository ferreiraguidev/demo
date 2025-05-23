import React from 'react';
import { TinderLogo } from './TinderLogo';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <TinderLogo />
        </div>
        
        <div className="mb-10">
          <button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            <Heart className="w-6 h-6" />
            QUERO O HACK DO TINDER POR APENAS R$10
          </button>
        </div>
        
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Hack do Tinder. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;