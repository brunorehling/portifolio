import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sobre from './components/Sobre'
import CardProjetos from './components/CardProjetos'
import Footer from './components/Footer'
import Contato from './components/Contatos'

function App() {

  return (
    <>
      <Header/>
        <Sobre/>
      <section id='projetos'>
        <CardProjetos/>
      </section>
      <section id='contato'>
        <Contato/>
      </section>
      <Footer/>
    </>
  )
}

export default App
