import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";

export default function SkillsSection() {
  const categories = [
    {
      title: "Front-End",
      skills: [
        { icon: <FaHtml5 size={40} />, name: "HTML" },
        { icon: <FaCss3Alt size={40} />, name: "CSS" },
        { icon: <FaJs size={40} />, name: "JS" },
        { icon: <FaReact size={40} />, name: "React" },
        { icon: <FaBootstrap size={40} />, name: "Bootstrap" },
        { icon: <SiTailwindcss size={40} />, name: "Tailwind" },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { icon: <FaPython size={40} />, name: "Python" },
        { icon: <FaJava size={40} />, name: "Java" },
        { icon: <SiNodedotjs size={40} />, name: "Node" },
        { icon: <SiExpress size={40} />, name: "Express" },
      ],
    },
    {
      title: "Banco de Dados",
      skills: [
        { icon: <FaDatabase size={40} />, name: "SQL" },
        { icon: <SiMongodb size={40} />, name: "MongoDB" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">My Skills</h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {categories.map((category, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold text-gray-700 mb-6">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center border-2 border-orange-500 text-orange-600 rounded-xl w-28 py-4 hover:bg-orange-50 transition"
                >
                  {skill.icon}
                  <span className="mt-2 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
