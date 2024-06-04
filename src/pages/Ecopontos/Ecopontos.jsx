import EcoNav from '../../components/Navbar/Navbar.jsx'
import './Ecopontos.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import FloatingButton from '../../components/FloatingButton/FloatingButton.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { useEffect , useState } from 'react'

function Ecopontos() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem("id");
        setIsLoggedIn(!!id);
        if (id === "665e70e53e667940bafdec8d") {
          setIsAdmin(true);
        }
      }, []);
      
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <EcoNav />
            <div className="Donation">
                <div className='headers'>
                    <h1 className="titles">Ecopontos</h1>
                    <p>Descartes corretos próximos de você</p>
                </div>
                <div className='product-container'>
                    <div className='product-card'>
                        <h2>Ecoponto Arco-Íris</h2>
                        <p>Jardim Arco-Íris</p>
                        <p>Diadema</p>
                        <p>* Aberto aos Sábados</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto Arraia</h2>
                        <p>Eldorado</p>
                        <p>Diadema</p>
                        <p>* Aberto aos Sábados</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto Marginal “Z”</h2>
                        <p>Parque Real</p>
                        <p>Diadema</p>
                        <p>* Aberto aos Sábados</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto Nações</h2>
                        <p>Taboão</p>
                        <p>Diadema</p>
                        <p>* Aberto aos Sábados</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto Naval</h2>
                        <p>Vila São José</p>
                        <p>Diadema</p>
                        <p>* Aberto aos Sábados</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto Rufino</h2>
                        <p>Serraria</p>
                        <p>Diadema</p>
                        <p>* Aberto aos Sábados</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto Yamagata</h2>
                        <p>Jardim Canhema</p>
                        <p>Diadema</p>
                        <p>* Aberto aos Sábados</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto João Batista (Vila Nogueira)</h2>
                        <p>Vila Nogueira</p>
                        <p>Diadema</p>
                        <p>* Aberto aos Sábados</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto DLU</h2>
                        <p>Jardim Inamar</p>
                        <p>Diadema</p>
                        <p>* Aberto aos Sábados</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto Caracas</h2>
                        <p>Vila Mulford</p>
                        <p>Diadema</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto Nova Conquista</h2>
                        <p>Piraporinha</p>
                        <p>Diadema</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto Okavango – Casa Grande</h2>
                        <p>Jardim Casa Grande</p>
                        <p>Diadema</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                    <div className='product-card'>
                        <h2>Ecoponto Maria Leonor – Parque Reid / Campanário</h2>
                        <p>Campanário</p>
                        <p>Diadema</p>
                        <NavLink to="/Eco_Detalhes" className='NavLink'>Detalhes</NavLink>
                    </div>

                </div>
                {isLoggedIn ? <FloatingButton /> : ''}
            </div>
            <Footer />
        </div>
    )
}

export default Ecopontos;