import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-primary section-padding"
    >
      <div className="container mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-secondary leading-tight mb-6"
          >
            Descubra o poder transformador da escrita com Adam Yasu.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-accent max-w-2xl mx-auto mb-10"
          >
            Inspire-se e transforme sua vida com nossas leituras de autoajuda.
            Precisa de uma nova perspectiva? Deixe nossas palavras guiarem você.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="inline-block bg-secondary text-primary font-bold py-4 px-10 rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Inicie sua Jornada
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Rolar para a próxima seção">
            <ArrowDown className="text-secondary" size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
