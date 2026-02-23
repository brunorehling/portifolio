import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaCss3Alt,
  FaHtml5 
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiJavascript, 
  SiExpress,
  SiPrisma,
  //SiNeon ,
  SiTailwindcss 
} from 'react-icons/si'

export const techIcons = {
  'React': FaReact,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Node.js': FaNodeJs,
  'Express': SiExpress,
  'Prisma': SiPrisma,
  //'Neon': SiNeon ,
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'Tailwind': SiTailwindcss,
  'Git': FaGitAlt,
}


const projetos = [
    {
    id: 1,
    titulo: "COOP",
    descricao: "Site voltado a área de programação, participe e chame pessoas para seus projetos!",
    tecnologias: ["React", "Node.js", "TypeScript"],
    repositorio: "https://github.com/brunorehling/COOP",
    link: "",
    imagem: "/logo coop.jpeg" 
  },
  {
    id: 2,
    titulo: "BOOKLOG - Site",
    descricao: "Site voltado a reviews e discussôes sobre livros, porojeto de escopo pequeno, criado em aula.",
    tecnologias: ["React", "Node.js", "Tailwind", "TypeScript"],
    repositorio: "https://github.com/brunorehling/BOOKLOG_-frontend/tree/master",
    link: "https://emerg-project-real.vercel.app/",
    imagem: "/book.png"
  },
  {
    id: 3,
    titulo: "BOOKLOG - API",
    descricao: "API rest utilizada no booklog, com salvamento de dados no neon",
    tecnologias: ["Express", "Node.js", "TypeScript", "Neon" ],
    repositorio: "https://github.com/brunorehling/API_Booklog",
    link: "",
    imagem: "/bookapi.png"
  }
]


export default projetos 