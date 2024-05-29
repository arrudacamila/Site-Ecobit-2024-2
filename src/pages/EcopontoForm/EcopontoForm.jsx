import React, { useState, useEffect } from 'react';
import EcoNav from "../../components/Navbar/Navbar.jsx";
import "./EcopontoForm.css";
import { FaCheckCircle } from 'react-icons/fa';

function EcopontoForm() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [nomePonto, setnomePonto] = useState('');
    const [materiaisPonto, setmateriaisPonto] = useState('');
    const [enderecoPonto, setenderecoPonto] = useState('');
    const [numeroPonto, setnumeroPonto] = useState('');
    const [abertoSabado, setAbertoSabado] = useState('');

    function handleNomeChange(event) {
        setnomePonto(event.target.value);
    }

    function handleMaterialChange(event) {
        setmateriaisPonto(event.target.value);
    }

    function handleEnderecoChange(event) {
        setenderecoPonto(event.target.value);
    }

    function handleNumeroChange(event) {
        setnumeroPonto(event.target.value);
    }

    function handleAbertoSabadoChange(event) {
        setAbertoSabado(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        setShowConfirmationModal(true);
        setTimeout(() => {
            setShowConfirmationModal(false);
            setnomePonto('');
            setmateriaisPonto('');
            setenderecoPonto('');
            setnumeroPonto('');
            setAbertoSabado('');
        }, 2000);
    }

    return (
        <div>
            <EcoNav />
            <div className="EcopontoForm-forms">
                <div className="EcopontoForm-forms-container">
                    <div className="EcopontoForm-forms-header">
                        <h1 className="EcopontoForm-forms-title">Novo Ecoponto</h1>
                    </div>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="EcopontoForm-forms-form-group">
                            <input type="text" id="nomePonto" className="EcopontoForm-forms-input-field" placeholder="Nome" value={nomePonto} onChange={handleNomeChange} required/>
                        </div>
                        <div className="EcopontoForm-forms-form-group">
                            <input type="text" id="materiaisPonto" className="EcopontoForm-forms-input-field" placeholder="Material" value={materiaisPonto} onChange={handleMaterialChange} required/>
                        </div>
                        <div className="EcopontoForm-forms-form-group">
                            <input type="text" id="enderecoPonto" className="EcopontoForm-forms-input-field" placeholder="Endereço" value={enderecoPonto} onChange={handleEnderecoChange} required/>
                        </div>
                        <div className="EcopontoForm-forms-form-group">
                            <input type="text" id="numeroPonto" className="EcopontoForm-forms-input-field" placeholder="Número" value={numeroPonto} onChange={handleNumeroChange} required/>
                        </div>
                        <div className="EcopontoForm-forms-form-group">
                            <select id="abertoSabado" className="EcopontoForm-forms-select-field" value={abertoSabado} onChange={handleAbertoSabadoChange} required>
                                <option value="" disabled>Abre aos sábados?</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <input type="submit" value="Enviar" className="EcopontoForm-forms-submit-btn" />
                    </form>
                </div>
            </div>
            {showConfirmationModal && (
                <div className="EcopontoForm-modal active">
                    <div className="EcopontoForm-modal-content">
                        <FaCheckCircle className="EcopontoForm-modal-icon" />
                        <p>Ecoponto Cadastrado com Sucesso!</p>
                        <p>Obrigado!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EcopontoForm;
