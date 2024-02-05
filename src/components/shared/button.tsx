import { motion } from "framer-motion";

interface ButtonProps {
    children: React.ReactNode;
    variant?: string;
    [key: string]: unknown; 
}
const styleVariants = {
    normal: "btn bg-gradient-to-r from-blue-600 to-blue-500 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 text-white duration-300 ease-in-out",
    secondary: "btn-secondary px-4 font-semibold rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 text-white duration-300 ease-in-out"
}

const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => {
    const buttonVariants = {
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    };

    return (
        <motion.button 
            className={variant === "secondary" ? styleVariants.secondary : styleVariants.normal}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            {...rest}
        >
            {children}
        </motion.button>
    );
}

export default Button;
