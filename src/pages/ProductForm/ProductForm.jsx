import React, { useState } from 'react';
import EcoNav from "../../components/Navbar/Navbar.jsx";
import "./ProductForm.css";
import { FaCheckCircle } from 'react-icons/fa';

function ProductForm() {
    const [images, setImages] = useState([]);
    const [quantidade, setQuantidade] = useState('');
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [titulo, setTitulo] = useState(''); // Adicionando estado para o título
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [condicao, setCondicao] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');

    function handleImageChange(event) {
        const fileList = event.target.files;
        for (let i = 0; i < fileList.length && images.length < 5; i++) {
            const file = fileList[i];
            const reader = new FileReader();
            reader.onload = function (event) {
                const imageData = {
                    id: Date.now() + i, // ID único usando a data atual e o índice
                    src: event.target.result,
                    file: file
                };
                setImages(prevImages => [...prevImages, imageData]);
            };
            reader.readAsDataURL(file);
        }
    }

    function removeImage(id) {
        setImages(prevImages => prevImages.filter(image => image.id !== id));
    }

    const handleButtonDisabled = images.length >= 5;

    function handleQuantidadeChange(event) {
        const value = event.target.value;
        // Se o valor for menor que 1, definir como 1
        if (value < 1) {
            setQuantidade(1);
        } else {
            setQuantidade(value);
        }
    }

    function handleTituloChange(event) { // Função para lidar com alterações no título
        setTitulo(event.target.value);
    }

    function handleDescricaoChange(event) { // Função para lidar com alterações na descrição
        setDescricao(event.target.value);
    }

    function handleCategoriaChange(event) {
        setCategoria(event.target.value);
    }

    function handleCondicaoChange(event) {
        setCondicao(event.target.value);
    }

    function handleDisponibilidadeChange(event) {
        setDisponibilidade(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setShowConfirmationModal(true);
        setTimeout(() => {
            setShowConfirmationModal(false);
            setImages([]);
            setQuantidade('');
            setTitulo('');
            setDescricao('');
            setCategoria('');
            setCondicao('');
            setDisponibilidade('');
        }, 2600);
    }

    return (
        <div>
            <EcoNav />
            <div className="ProductForm-forms">
                <div className="ProductForm-forms-container">
                    <div className="ProductForm-forms-header">
                        <h1 className="ProductForm-forms-title">Novo Produto</h1>
                    </div>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="ProductForm-forms-form">
                            <h2>Selecione até 5 fotos</h2>
                            <label className={`ProductForm-forms-input-file-button ${handleButtonDisabled ? 'disabled' : ''}`}>
                                <span>Escolher Imagens</span>
                                <input type="file" accept="image/*" id="images" multiple onChange={handleImageChange} className="ProductForm-forms-input-file" disabled={handleButtonDisabled} />
                            </label>
                            <br />
                            {images.map(image => (
                                <div key={image.id} className="ProductForm-forms-image-preview">
                                    <img src={image.src} alt="Imagem" className="ProductForm-forms-preview-image" />
                                    <button type="button" onClick={() => removeImage(image.id)} className="ProductForm-forms-remove-button">X</button>
                                </div>
                            ))}
                        </div>
                        <br />
                        <div className="ProductForm-forms-form-group">
                            <input type="text" id="titulo" className="ProductForm-forms-input-field" placeholder="Título" value={titulo} onChange={handleTituloChange} required/>
                        </div>
                        <div className="ProductForm-forms-form-group">
                            <div className="ProductForm-forms-input-field-container">
                                <input type="number" id="quantidade" className="ProductForm-forms-input-field" placeholder="Quantidade" required min="1" value={quantidade} onInput={handleQuantidadeChange} />
                            </div>
                            <div className="ProductForm-forms-input-field-container">
                                <select name="categoria" id="categoria" className="ProductForm-forms-input-field" required value={categoria} onChange={handleCategoriaChange}>
                                    <option value="" disabled>Categoria</option>
                                    <option value="0">Móvel</option>
                                    <option value="1">Roupa</option>
                                    <option value="2">Eletrônico</option>
                                    <option value="3">Eletrodoméstico</option>
                                </select>
                            </div>
                        </div>
                        <div className="ProductForm-forms-form-group">
                            <select name="condicao" id="condicao" className="ProductForm-forms-input-field" required value={condicao} onChange={handleCondicaoChange}>
                                <option value="" disabled>Condição</option>
                                <option value="0">Novo</option>
                                <option value="1">Usado - estado de novo</option>
                                <option value="2">Usado - em boas condições</option>
                                <option value="3">Usado - em condições razoáveis</option>
                            </select>
                        </div>
                        <div className="ProductForm-forms-form-group">
                            <label htmlFor="disponibilidade">Tem disponibilidade para levar até o interessado?</label>
                            <select name="disponibilidade" id="disponibilidade" className="ProductForm-forms-input-field" required value={disponibilidade} onChange={handleDisponibilidadeChange}>
                                <option value="">Selecione</option>
                                <option value="0">Sim</option>
                                <option value="1">Não</option>
                            </select>
                        </div>
                        <div className="ProductForm-forms-form-group">
                            <textarea type="text" id="descricao" className="ProductForm-forms-input-field" placeholder="Descricao" value={descricao} onChange={handleDescricaoChange} />
                        </div>
                        <input type="submit" value="Enviar" className="ProductForm-forms-submit-btn" />
                    </form>
                </div>
            </div>
            {/* Modal de confirmação */}
            {showConfirmationModal && (
                <div className="modal active">
                    <div className="modal-content">
                        <FaCheckCircle className="modal-icon" />
                        <p>Produto cadastrado com sucesso!</p>
                        <p>Muito Obrigado por ajudar</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductForm;

