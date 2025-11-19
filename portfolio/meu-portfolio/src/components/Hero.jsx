import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Olá, eu sou <span className="text-orange-500">Helen Yohanna</span>
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Desenvolvedora Full Stack | Criadora de Soluções Digitais
      </motion.p>

      <motion.a
        href="#projetos"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
        whileHover={{ scale: 1.05 }}
      >
        Ver Projetos
      </motion.a>
    </section>
  );
}
