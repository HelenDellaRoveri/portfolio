import { motion } from "framer-motion";
import minhaFoto from "../assets/foto-portfolio.jpg";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10"
    >
      {/* Imagem com animação */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={minhaFoto}
          alt="Foto de Helen"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-orange-500"
        />
      </motion.div>

      {/* Texto */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-orange-500">Sobre Mim</h2>
        <p className="text-justify text-lg text-gray-700 leading-relaxed">
          Sou uma desenvolvedora apaixonada por tecnologia e pela criação de experiências digitais que unem funcionalidade e design.
          Atuo com <strong>HTML, CSS, JavaScript e React</strong>, transformando ideias em interfaces modernas, intuitivas e eficientes.
          <br /><br />
          No <strong>Back-end</strong>, trabalho principalmente com <strong>Node.js</strong> e <strong>Python</strong>, explorando seus principais frameworks para desenvolver soluções robustas e escaláveis. Tenho experiência em bancos de dados relacionais e não relacionais, como <strong>SQL Server, PostgreSQL, MySQL</strong> e <strong>MongoDB</strong>.
          <br /><br />
          Além do desenvolvimento, possuo conhecimentos em <strong>infraestrutura</strong>, <strong>arquitetura de sistemas</strong> e <strong>administração de redes</strong>, o que me permite ter uma visão ampla e integrada dos projetos.
          <br /><br /> 
          Sou movida pelo <strong>aprendizado contínuo</strong> e pela <strong>evolução constante</strong> — estou sempre em busca de aprimorar minhas habilidades e acompanhar as tendências do mercado de tecnologia.
        </p>
      </motion.div>
    </section>
  );
}
