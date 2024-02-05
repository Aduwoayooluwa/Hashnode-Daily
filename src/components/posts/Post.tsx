import React from 'react';
import { motion } from 'framer-motion';

type PostProps = {
  title: string;
  imageUrl?: string;
};

const Post: React.FC<PostProps> = ({ title, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 cursor-pointer shadow-lg rounded-lg p-4 m-4 max-w-xs"
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt="Post" 
          className="rounded-t-lg w-full object-cover h-48"
        />
      )}
      <div className="p-4">
        <h2 className="font-bold text-gray-200 text-lg mb-2">{title}</h2>
        {/* <p className="text-gray-200">{content}</p> */}
      </div>
    </motion.div>
  );
};

export default Post;
