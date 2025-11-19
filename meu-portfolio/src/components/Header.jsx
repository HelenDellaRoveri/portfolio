import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-orange-500">Helen Yohanna</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#sobre" className="hover:text-orange-500">Sobre</a></li>
            <li><a href="#projetos" className="hover:text-orange-500">Projetos</a></li>
            <li><a href="#contato" className="hover:text-orange-500">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
