import React from 'react';
import { motion } from 'framer-motion';

interface InputFieldProps {
  [key: string]: unknown;
}

const Input: React.FC<InputFieldProps> = ({ ...rest }) => {
  const inputVariants = {
    initial: {
      width: '200px',
      boxShadow: 'none',
      transition: { duration: 0.3 }
    },
    focus: {
      width: '250px',
      boxShadow: '0px 5px 34px #233bff',
      transition: { duration: 0.3 }
    }
  };

  return (
    <main className="flex justify-center mt-24">
      <motion.input
        className="w-48 h-10 px-3 border-none text-lg placeholder:text-sm align-middle transition-all duration-300 ease-in-out rounded focus:outline-none"
        variants={inputVariants}
        initial="initial"
        whileFocus="focus"
        {...rest}
      />
    </main>
  );
};

export default Input;
