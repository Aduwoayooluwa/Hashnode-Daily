import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

type AvatarProps = {
    size: 'small' | 'medium' | 'large';
    imageUrl: string;
    animate?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ size, imageUrl, animate = false }) => {
    const sizeClasses = {
        small: 'w-8 h-8',
        medium: 'w-12 h-12',
        large: 'w-[150px] h-[150px]',
    };

    const avatarClasses = classNames(
        'rounded-full',
        sizeClasses[size],
    );

    const motionVariants = {
        animate: { scale: 1.1 },
        initial: { scale: 1 },
    };

    return (
        <motion.div
            className={avatarClasses}
            animate={animate ? 'animate' : 'initial'}
            variants={motionVariants}
        >
            <img src={imageUrl} alt="Avatar" className="rounded-full object-cover object-center" />
        </motion.div>
    );
};

export default Avatar;
