import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ícones bonitos das setas

const projetos = [
  { titulo: "Projeto 1", desc: "O projeto denominado projeto‑react‑full implementa uma aplicação web de cadastro e login de usuários, construída com front-end em React e um backend simples, utilizando JSON Server, Express, autenticação via JWT, e criptografia com bcrypt. No front-end são usadas também Bootstrap, Font Awesome, Axios e roteamento via React Router. O banco de dados usado é PostgreSQL. O código está sob licença MIT e é destinado a fins educacionais.", link: "https://github.com/HelenDellaRoveri/projeto-react-full" },
  { titulo: "Projeto 2", desc: "Este projeto foi desenvolvido para aprender um pouco sobre 3D, usando HTML + CSS + JavaScript para criar animações e efeitos visuais, imitando o movimento de uma página. Apesar de incorporar interações 3D e boa parte estética moderna, não é responsivo no momento, ou seja, não se adapta bem a diferentes tamanhos de tela. Em breve pretendo ajustar os layouts fluídos, media queries e otimizando para mobile. As principais tecnologias empregadas são HTML5, CSS3, JavaScript puro e manipulação de elementos gráficos para efeito 3D.", link: "https://helendellaroveri.github.io/Desing-imita-livro/" },
  { titulo: "Projeto 3", desc: "Este projeto teve como objetivo explorar animações e transformações 3D diretamente no navegador, utilizando HTML, CSS e JavaScript. Durante o desenvolvimento, foram estudados conceitos de profundidade, rotação e perspectiva, aplicados para criar uma experiência visual interativa e dinâmica. O site demonstra como é possível combinar recursos de transformações espaciais e efeitos de movimento para compor uma página com aparência tridimensional.", link: "https://helendellaroveri.github.io/Projeto-3D-canvas-css/ " },
  { titulo: "Projeto 4", desc: "Aplicativo mobile desenvolvido em React Native e Expo para organizar tarefas e aumentar a produtividade utilizando a técnica Pomodoro. Permite adicionar, visualizar e gerenciar atividades, além de contar com um temporizador integrado para foco e controle do tempo. Possui design minimalista, navegação intuitiva e persistência local com AsyncStorage, aplicando conceitos de gerenciamento de estado e interfaces responsivas. O projeto proporcionou aprendizado prático em usabilidade e desenvolvimento mobile multiplataforma.", link: "https://github.com/HelenDellaRoveri/App-to-do-list-React-Native" },
  { titulo: "Projeto 5", desc: "Este projeto foi desenvolvido com o objetivo de criar um sistema de relatório de atividades integrado ao banco de dados MongoDB, explorando a comunicação entre o front-end e o back-end em uma aplicação web dinâmica. A aplicação permite que o usuário preencha um relatório de atividades, o qual é convertido automaticamente em um arquivo PDF, enviado e armazenado no banco de dados MongoDB, garantindo a persistência e organização das informações. Além disso, o sistema gera automaticamente um script em formato JSON para facilitar a cópia e reutilização dos dados.", link: "https://helendellaroveri.github.io/conexaoMongoBD/ " },
];

export default function Projects() {
  const carouselRef = useRef(null);

  // Funções para mover o carrossel
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="projetos" className="py-20 px-6 bg-gray-100 text-center relative">
      <h2 className="text-3xl font-bold text-orange-500 mb-10">Projetos</h2>

      {/* Botão Esquerda */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-500 hover:text-white transition z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Carrossel */}
      <div
        ref={carouselRef}
        className="flex min-h-[400px] gap-5 overflow-x-auto scrollbar-hide overflow-y-hidden px-8 scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {projetos.map((p, i) => (
          <motion.div
            key={i}
            className="min-w-[380px] max-w-[380px] bg-white shadow-lg rounded-2xl p-6 flex flex-col flex-shrink-0 cursor-default h-[480px]"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <h3 className="text-xl font-semibold mb-2">{p.titulo}</h3>
            <p className="text-gray-600 mb-4 flex-grow overflow-hidden">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline font-medium mt-auto"
            >
              Ver mais
            </a>
          </motion.div>

        ))}
      </div>

      {/* Botão Direita */}
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-500 hover:text-white transition z-10"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
