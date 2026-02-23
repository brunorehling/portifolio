import { useState } from "react"
import '../styles/CardProjetos.css'

import projetos from "./Projetos"
import { techIcons } from "./Projetos"

function CardProjetos(){

    const [expandidos, setExpandidos] = useState([])

    const toggleExpandido = (id) => {
        setExpandidos(prev => 
            prev.includes(id) 
                ? prev.filter(item => item !== id) // remove se já existe
                : [...prev, id] // adiciona se não existe
        )}

    return(
        <section className="projetos-section">
        <h2 className="titulo"> Meus Projetos</h2>
        
        <div className="projetos-grid">
            {projetos.map(projeto => (
            <div key={projeto.id} className="card">
                <div className="card-content">
                {projeto.imagem && (
                <img src={projeto.imagem} alt={projeto.titulo} className="card-img" />
                )}
                
                <h3 className="titulo-projeto">{projeto.titulo}</h3>
                <p className="descricao-projeto">{projeto.descricao}</p>
                <button onClick={() => toggleExpandido(projeto.id)}>
                    {expandidos.includes(projeto.id) ? 'ver menos' : 'ver mais'}
                </button>



                {expandidos.includes(projeto.id) && (
                    <>
                    <div className="card-expandido">
                        <div className="tecnologias">
                            {projeto.tecnologias.map((tech, index) => {
                                const IconComponent = techIcons[tech]
                                return (
                                    <span key={index} className="tech-tag">
                                        {IconComponent && <IconComponent size={16} style={{ marginRight: '4px' }} />}
                                        {tech}
                                    </span>
                                )
                            })}
                        </div>
                        <div className="links-container">
                        <a href={projeto.repositorio} /*target="_blank"*/ /*rel="noopener noreferrer"*/ className="card-link">
                            Ver repositório →
                        </a>
                        {projeto.link !== "" && (
                        <a href={projeto.link} /*target="_blank"*/ /*rel="noopener noreferrer"*/ className="card-link">
                            Ver Site →
                        </a>
                        )}
                        </div>
                    </div>
                    </>)}
                </div>
            </div>
            )
            )}
        </div>
        </section>
  )
}

export default CardProjetos