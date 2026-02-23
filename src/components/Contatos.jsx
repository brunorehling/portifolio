import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import '../styles/Contato.css'
function Contato(){
    return(
        <>
            <section className="contato-container">
                <h2 className='titulo'>Entre em contato comigo</h2>

                <div className="contato-links">
                    <a href="mailto:brunorehling@91@gmail.com" className='contato-item'>
                        <MdEmail size={24} />
                        <span>brunorehling@91@gmail.com</span>
                    </a>
                    <a href="tel:+5553999434201" className='contato-item'>
                        <MdPhone size={24} />
                        <span>(53) 99943-4201</span>
                    </a>
                    <a href="https://github.com/brunorehling" className='contato-item'>
                        <FaGithub size={24} />
                        <span>brunorehling</span>
                    </a>
                    <a href="https://www.linkedin.com/in/bruno-rehling-723061371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='contato-item'>
                        <FaLinkedin size={24} />
                        <span>Bruno Rehling</span>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Contato