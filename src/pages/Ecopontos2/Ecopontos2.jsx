import EcoNav from '../../components/Navbar/Navbar.jsx'
import './Ecopontos2.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Ecopontos2() {
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
                        <NavLink  to="/Eco_Detalhes" className='NavLink' >Detalhes</NavLink>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Ecopontos2;