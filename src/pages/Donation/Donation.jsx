import EcoNav from '../../components/Navbar/Navbar.jsx'
import './Donation.css'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

function Donation() {   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    return (
        <div>
            <EcoNav />
            <div className="Donation">
                <div className='headers'>
                    <h1 className="titles">Central de Doações</h1>
                    <p>Aqui você encontrará o que precisa</p>
                </div>
                <NavLink to="/ProductForm" className="newDonation"><i className="fab fa-plus"></i> Nova Doação</NavLink>
                <div className='product-container'>
                    <div className='product-card'>
                        <NavLink to="/Prod_Detalhes">
                            <div className="image-wrapper">
                                <img src="src/img/fonte.jpg" alt="Fonte PowerOne" />
                            </div>
                        </NavLink>
                        <h2>Fonte PowerOne</h2>
                        <p>Usado - em condições razoaveis</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                    <div className='product-card'>
                        <div className="image-wrapper">
                            <img src="src/img/fogao.jpg" alt="Fogão 4 bocas" />
                        </div>
                        <h2>Fogão 4 bocas</h2>
                        <p>Usado - em estado de novo</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                    <div className='product-card'>
                        <div className="image-wrapper">
                            <img src="src/img/madeira.jpg" alt="Madeira" />
                        </div>
                        <h2>Madeira</h2>
                        <p>Usado - em boas condições</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                    <div className='product-card'>
                        <div className="image-wrapper">
                            <img src="src/img/roupas.jpg" alt="Sacola de roupas diversas" />
                        </div>
                        <h2>Sacola de roupas diversas</h2>
                        <p>Usado - em boas condições</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                    <div className='product-card'>
                        <div className="image-wrapper">
                            <img src="src/img/jaqueta.jpg" alt="Jaqueta Jeans" />
                        </div>
                        <h2>Jaqueta Jeans</h2>
                        <p>Usado - em estado de novo</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                    <div className='product-card'>
                        <div className="image-wrapper">
                            <img src="src/img/chinelo.jpg" alt="Chinelo Havaianas" />
                        </div>
                        <h2>Chinelo Havaianas</h2>
                        <p>Novo</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                    <div className='product-card'>
                        <div className="image-wrapper">
                            <img src="src/img/armario.jpg" alt="Armário Solteiro" />
                        </div>
                        <h2>Armário Solteiro</h2>
                        <p>Usado - em estado de novo</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                    <div className='product-card'>
                        <div className="image-wrapper">
                            <img src="src/img/talheres.jpg" alt="Jogo de Talheres" />
                        </div>
                        <h2>Jogo de Talheres</h2>
                        <p>Novo</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                    <div className='product-card'>
                        <div className="image-wrapper">
                            <img src="src/img/monitor.jpg" alt="Monitor Queimado" />
                        </div>
                        <h2>Monitor Queimado</h2>
                        <p>Usado - em condições razoáveis</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                    <div className='product-card'>
                        <div className="image-wrapper">
                            <img src="src/img/impressora.jpg" alt="Impressora HP" />
                        </div>
                        <h2>Impressora HP</h2>
                        <p>Usado - em boas condições</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                    <div className='product-card'>
                        <div className="image-wrapper">
                            <img src="src/img/tenis.jpg" alt="Tênis All Star" />
                        </div>
                        <h2>Tênis All Star</h2>
                        <p>Novo</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                    <div className='product-card'>
                        <div className="image-wrapper">
                            <img src="src/img/coberta.jpg" alt="Cobertores diversos" />
                        </div>
                        <h2>Cobertores diversos</h2>
                        <p>Usado - em boas condições</p>
                        <NavLink to="/Prod_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation;
