import React from 'react';
import { Flame } from 'lucide-react';

export const TinderLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Flame className="text-red-500" size={32} />
      <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
        HACK DO TINDER
      </span>
    </div>
  );
};