import { motion } from "framer-motion";

export default function Contact() {
  const sendWhatsApp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `Olá! Meu nome é ${name} (Email: ${email})%0A${message}`;
    const phone = "5541995157895";
    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contato"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100 text-center"
    >
      <motion.h2
        className="text-3xl font-bold text-orange-500 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contato
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-start gap-12 text-left">
        {/* --- LADO ESQUERDO --- */}
        <motion.div
          className="flex-1 rounded-2xl p-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 mb-4">
            Entre em contato comigo pelas redes abaixo:
          </p>
          <ul className="space-y-3">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hydr.estudante@gmail.com"
                className="text-orange-500 hover:underline"
              >
                hydr.estudante@gmail.com
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/helen-yohanna-ventura-della-roveri-6a1aa3219/"
                className="text-orange-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/helen-yohanna-ventura-della-roveri
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/HelenDellaRoveri"
                className="text-orange-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/HelenDellaRoveri
              </a>
            </li>
          </ul>
        </motion.div>

        {/* --- LADO DIREITO: FORMULÁRIO WHATSAPP --- */}
        <motion.div
          className="flex-1 bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Envie uma Mensagem
          </h3>

          <form onSubmit={sendWhatsApp} className="space-y-4" id="contact-form">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Seu Nome"
              required
              className="w-full border-2 border-orange-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Seu Email"
              required
              className="w-full border-2 border-orange-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Sua Mensagem"
              required
              rows="4"
              className="w-full border-2 border-orange-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Enviar pelo WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
