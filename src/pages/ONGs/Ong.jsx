import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Doacao.css';

const Doacao = () => {
  return (
    <div className="doacao-container">
      {/* Adicionando a Navbar */}
      <Navbar />

      {/* Seção principal com as imagens */}
      <section className="main-section">
        <img src="img1.png" alt="Imagem 1" className="main-image" />
        <img src="img2.png" alt="Imagem 2" className="main-image" />
      </section>

      {/* Dropdown */}
      <div className="dropdown-container">
        <select className="dropdown">
          <option value="1">Opção 1</option>
          <option value="2">Opção 2</option>
        </select>
      </div>

      {/* Grid de Ícones */}
      <section className="grid-section">
        {[...Array(9)].map((_, index) => (
          <div className="grid-item" key={index}>
            <img src="icon.png" alt={`Ícone ${index + 1}`} className="icon" />
            <p>Item {index + 1}</p>
          </div>
        ))}
      </section>

      {/* Adicionando o Footer */}
      <Footer />
    </div>
  );
};

export default Doacao;
