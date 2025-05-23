import React from 'react';
import { MessageSquare, User, Camera, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <MessageSquare className="w-12 h-12 text-pink-400" />,
      title: "70 Mensagens Iniciais Prontas",
      description: "Para acabar com o \"Oi, tudo bem?\" e garantir que você inicie conversas que realmente engajem."
    },
    {
      icon: <User className="w-12 h-12 text-purple-400" />,
      title: "20 Modelos de Bios Otimizadas",
      description: "Para destacar sua personalidade e atrair mais matches com um perfil irresistível."
    },
    {
      icon: <Camera className="w-12 h-12 text-blue-400" />,
      title: "Guia de Fotos Perfeitas",
      description: "Ensina como escolher as melhores fotos e evitar erros comuns que afastam potenciais matches."
    },
    {
      icon: <Calendar className="w-12 h-12 text-green-400" />,
      title: "Guia para Transformar Matches em Encontros",
      description: "Um passo a passo prático para manter conversas envolventes e garantir encontros reais."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/3 -right-20 w-60 h-60 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Com o hack do Tinder você ganha:
            </h2>
            
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 group"
                >
                  <div className="mt-1 transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-pink-300">{benefit.title}</h3>
                    <p className="text-gray-200">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                QUERO O HACK DO TINDER
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="https://reitinder.com/wp-content/uploads/2024/12/50-MENSAGENS-1.webp" 
                alt="Mockup da Oferta - 50 Mensagens Prontas" 
                className="relative rounded-xl shadow-xl w-full transform transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;