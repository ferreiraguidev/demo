import React from 'react';
import { TinderLogo } from './TinderLogo';
import { ArrowRight, Flame, Heart } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 -right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10">
        <div className="flex justify-center mb-8">
          <TinderLogo />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span className="block mb-2">50 curtidas por dia</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
            no seu perfil do Tinder 😈
          </span>
        </h1>
        
        <div className="max-w-3xl mx-auto mb-8 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
          {/* Video placeholder - would be replaced with actual video embed */}
          <div className="aspect-video bg-gray-800 flex items-center justify-center">
            <div className="text-center p-4">
              <Flame className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
              <p className="text-lg">Vídeo de apresentação</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-10">
          <p className="text-xl md:text-2xl mb-2">
            "Tenha acesso a 70 mensagens prontas, 20 bios personalizadas e dicas de fotos chamativas."
          </p>
          <p className="text-lg md:text-xl text-pink-300">
            "Resultados rápidos para transformar matches em encontros reais!"
          </p>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-2xl md:text-3xl mb-2">
            Por apenas <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">R$10</span>
          </p>
        </div>
        
        <div className="flex justify-center">
          <button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <Heart className="w-6 h-6" />
            QUERO O HACK DO TINDER
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;