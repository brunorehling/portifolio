import '../styles/Footer.css'

function Footer(){
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <>
        <footer className="footer">
            <div className="footer-container">
                <div className='responsive-container'>
                <div className="footer-message">
                    <p>Transformando ideias em código</p>
                </div>

                <div className="footer-links">
                    <button onClick={() => scrollToSection('sobre')} className="footer-link">
                        Início
                    </button>
                    <button onClick={() => scrollToSection('projetos')} className="footer-link">
                        Projetos
                    </button>
                    <button onClick={() => scrollToSection('contato')} className="footer-link">
                        Contato
                    </button>
                </div>
                </div>

                <div className="footer-copyright">
                    <h2>Bruno Beiró Rehling {currentYear} &copy;</h2>
                    <p>Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer