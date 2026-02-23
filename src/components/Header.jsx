import { useState } from "react";
import '../styles/Header.css'

function Header(){
    return(
    <section id="sobre" className="header-container">
        <div className="foto-container">
            <img src="/foto.jpeg" alt="" className="foto"/>
        </div>
        <div className="info-container">
            <div className="info-pessoais-container">
                <ul className="info-pessoais">
                    <li><h2>Bruno Beiró Rehling</h2></li>
                    <li><h2>21 anos</h2></li>
                </ul>
                <ul className="info-pessoais">
                    <li>Desenvolvedor em Formação |</li> 
                    <li>Análise e Desenvolvimento de Sistemas</li>
                </ul>
            </div>
        </div>
    </section>
    )
}


export default Header