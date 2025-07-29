import React from 'react';
import { motion } from 'framer-motion';
import { Feather } from 'lucide-react';

export default function About() {
  const authorImageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1753760774783_myoiaqxvr6i_Adam_Yasu.png';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: 'beforeChildren' },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          <motion.div variants={imageVariants} className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-secondary rounded-lg transform -rotate-3"></div>
            <img
              src={authorImageUrl}
              alt="Retrato de Adam Yasu"
              className="w-full h-auto object-cover rounded-lg shadow-2xl relative z-10"
              style={{ maxHeight: '600px' }}
            />
          </motion.div>

          <motion.div variants={textVariants}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
              Conheça Adam Yasu
            </h2>
            <div className="flex items-center text-accent mb-6">
              <Feather className="mr-3" size={20} />
              <span className="font-semibold">Autor & Guia Inspirador</span>
            </div>
            <p className="text-lg text-accent mb-4 leading-relaxed">
              Adam Yasu é um escritor dedicado a explorar as profundezas da
              experiência humana através da palavra escrita. Com uma paixão por
              desvendar os caminhos da autoajuda e do desenvolvimento pessoal,
              sua obra busca oferecer clareza, conforto e uma nova perspectiva
              para aqueles que buscam transformação.
            </p>
            <p className="text-lg text-accent mb-8 leading-relaxed">
              Sua jornada como autor é movida pela crença de que cada indivíduo
              possui um potencial inexplorado, e que a literatura pode ser a
              chave para desbloqueá-lo. As palavras de Adam são um convite para
              uma jornada interior, para iluminar seu próprio caminho e
              reescrever sua história.
            </p>
            <a
              href="#philosophy"
              className="inline-block bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Sua Filosofia
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
