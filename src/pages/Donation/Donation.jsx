import EcoNav from '../../components/Navbar/Navbar.jsx'
import './Donation.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Donation() {
    return (
        <div>
            <EcoNav />
            <div className="Donation">
                <div className='headers'>
                    <h1 className="titles">Central de Doações</h1>
                    <p>Aqui você encontrará o que precisa</p>
                </div>
                <div className='product-container'>
                    <div className='product-card'>
                        <img src="src\img\fonte.jpg" alt="" />
                        <h2>Fonte PowerOne</h2>
                        <p>Usado</p>
                        <NavLink  to="/Prod_Detalhes" className='NavLink' >Detalhes</NavLink>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Donation;