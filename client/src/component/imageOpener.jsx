// components/ImageOpener.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageOpener = ({ selectedImage, setSelectedImage }) => {
  return (
    <AnimatePresence>
      {selectedImage !== null && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-white bg-opacity-60 backdrop-blur-lg flex justify-center items-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Opened"
            className="max-w-[90%] max-h-[90%] object-contain "
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // prevent closing on image click
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageOpener;
