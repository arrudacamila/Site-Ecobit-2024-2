import React, { useState, useEffect } from 'react';
import EcoNav from "../../components/Navbar/Navbar.jsx";
import "./EcopontoForm.css";
import { FaCheckCircle } from 'react-icons/fa';

function ProductForm() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [nomePonto, setnomePonto] = useState('');
    const [materiaisPonto, setmateriaisPonto] = useState('');
    const [enderecoPonto, setenderecoPonto] = useState('');
    const [numeroPonto, setnumeroPonto] = useState('');

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

    function handleSubmit(event) {
        event.preventDefault();
        
        setShowConfirmationModal(true);
        setTimeout(() => {
            setShowConfirmationModal(false);
            setnomePonto('');
            setmateriaisPonto('');
            setenderecoPonto('');
            setnumeroPonto('');
        }, 2000);
    }

    return (
        <div>
            <EcoNav />
            <div className="ProductForm-forms">
                <div className="ProductForm-forms-container">
                    <div className="ProductForm-forms-header">
                        <h1 className="ProductForm-forms-title">Novo Ecoponto</h1>
                    </div>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="ProductForm-forms-form-group">
                            <input type="text" id="nomePonto" className="ProductForm-forms-input-field" placeholder="Nome" value={nomePonto} onChange={handleNomeChange} required/>
                        </div>
                        <div className="ProductForm-forms-form-group">
                            <input type="text" id="enderecoPonto" className="ProductForm-forms-input-field" placeholder="Material" value={materiaisPonto} onChange={handleMaterialChange} required/>
                        </div>
                        <div className="ProductForm-forms-form-group">
                            <input type="text" id="numeroPonto" className="ProductForm-forms-input-field" placeholder="Endereço" value={enderecoPonto} onChange={handleEnderecoChange} required/>
                        </div>
                        <div className="ProductForm-forms-form-group">
                            <input type="text" id="materiaisPonto" className="ProductForm-forms-input-field" placeholder="Número" value={numeroPonto} onChange={handleNumeroChange} required/>
                        </div>

                        <input type="submit" value="Enviar" className="ProductForm-forms-submit-btn" />
                    </form>
                </div>
            </div>
            {showConfirmationModal && (
                <div className="modal active">
                    <div className="modal-content">
                        <FaCheckCircle className="modal-icon" />
                        <p>Ecoponto Cadastrado com Sucesso!</p>
                        <p>Obrigado!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductForm;
