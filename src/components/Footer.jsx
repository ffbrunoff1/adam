import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753760781383_0.png';

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-secondary text-primary"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="inline-block">
              <img
                src={logoUrl}
                alt="Adam Yasu Logo"
                className="h-12 w-auto filter invert"
              />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Adam Yasu. Todos os direitos
              reservados.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Uma jornada de palavras e transformação.
            </p>
          </div>

          <div className="hidden md:block absolute right-10 bottom-10">
            <a
              href="#hero"
              className="bg-accent p-3 rounded-full text-primary hover:bg-primary hover:text-secondary transition-colors duration-300"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
