import { motion } from 'framer-motion';
import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

 const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { type: "spring", damping: 20, stiffness: 300 } },
    exit: { y: "100vh", opacity: 0 }
};
  
const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const modalRoot = document.getElementById('modal') as HTMLElement;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
     <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="bg-black p-6  rounded shadow-lg min-w-[350px]"
        variants={modalVariants}
      >
        {children}
        <button
          onClick={onClose}
          className="mt-4 text-red-600 text-lg font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </motion.div>
    </motion.div>,
    modalRoot
  );
};

export default Modal;
