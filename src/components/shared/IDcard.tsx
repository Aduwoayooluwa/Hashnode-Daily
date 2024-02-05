import React from 'react';
import { motion } from 'framer-motion';
import { getLevelStyles } from '../../utils/level-color';


interface IDCardProps {
  username: string;
  numberOfReads: number;
  level: 'Starter' | 'Novice' | 'Professional' | 'Boss' | 'Chief' | 'Mentor';
}

const IDCard: React.FC<IDCardProps> = ({ username, numberOfReads, level }) => {
  const hoverEffect = {
    scale: 1.1,
    rotate: 5,
    transition: {
      yoyo: Infinity,
      duration: 0.3
    }
  };
    const cardStyle = getLevelStyles(level);
    
  return (
    <motion.div 
      className={`${cardStyle} bg-gradient-to-r from-gray-900 to-blue-500`}
      whileHover={hoverEffect}
    >
      <img src={"/logo.png"} alt="Logo" className="h-12 w-12" />
      <h2 className="text-lg font-bold">{username}</h2>
      <p>Reads: {numberOfReads}</p>
      <p>Level: {level}</p>
    </motion.div>
  );
};

export default IDCard;
