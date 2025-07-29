import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, HeartHandshake } from 'lucide-react';

export default function Services() {
  const philosophyItems = [
    {
      icon: BookOpen,
      title: 'Escrita como Ferramenta',
      description:
        'Acreditamos que a escrita não é apenas uma forma de arte, mas uma poderosa ferramenta para o autoconhecimento e a reflexão. Nossos textos são criados para provocar pensamentos e inspirar a introspecção.',
    },
    {
      icon: Target,
      title: 'Clareza de Propósito',
      description:
        'A busca por um propósito é central em nossa filosofia. Guiamos os leitores a encontrarem clareza em seus objetivos de vida, fortalecendo sua determinação e foco para alcançar um futuro mais significativo.',
    },
    {
      icon: HeartHandshake,
      title: 'Conexão e Empatia',
      description:
        'Cada história e cada ensinamento são um convite à conexão. Promovemos a empatia como um pilar para o crescimento pessoal e para a construção de relacionamentos mais saudáveis e profundos.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="philosophy" className="section-padding bg-primary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">A Filosofia por Trás da Escrita</h2>
          <p className="text-center text-lg text-accent max-w-3xl mx-auto -mt-6 mb-16">
            Nossa missão é iluminar caminhos através de palavras que inspiram,
            desafiam e transformam. Estes são os pilares que sustentam cada
            obra.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {philosophyItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col text-center p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
              variants={itemVariants}
            >
              <div className="mx-auto mb-6 bg-secondary text-primary rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold font-serif text-secondary mb-4">
                {item.title}
              </h3>
              <p className="text-accent leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
