import React from 'react';
import { X, Check } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    "Você curte 100 perfis e não recebe nenhuma curtida de volta.",
    "As conversas morrem em poucas mensagens e nunca chegam a um encontro.",
    "Seu perfil não chama atenção e parece igual a todos os outros.",
    "Você se sente frustrado por não saber como engajar as pessoas certas.",
    "Os apps de namoro estão mais parecendo perda de tempo."
  ];

  return (
    <section className="py-16 md:py-24 relative">
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="https://reitinder.com/wp-content/uploads/2024/12/ads-_1_.webp" 
                alt="Antes e Depois - Prova Social" 
                className="relative rounded-xl shadow-xl w-full transform transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
              O HACK DO TINDER É PARA VOCÊ QUE:
            </h2>
            
            <div className="space-y-5">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-900/40 to-pink-900/30 rounded-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <X className="min-w-6 h-6 text-red-500 mt-0.5" />
                  <p className="text-lg">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;