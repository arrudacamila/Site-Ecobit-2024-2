import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditDonation = () => {
  const { Id } = useParams();
  const navigate = useNavigate();

  const [doacao, setDoacao] = useState({
    nome: '',
    descricao: ''
  });

  useEffect(() => {
    const fetchDoacaoDetails = async () => {
      const doacaoData = await fetch(`http://localhost:8080/teste/${Id}`);
      const doacaoDetails = await doacaoData.json();
      setDoacao(doacaoDetails);
    };

    fetchDoacaoDetails();
  }, [Id]);

  const handleInputChange = (e) => {
    setDoacao({ ...doacao, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await fetch(`http://localhost:8080/teste/${Id}`, {
      method: 'PUT',
      body: JSON.stringify(doacao),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    navigate('/user/doacao');
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Editar Doação</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Nome:</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={doacao.nome}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descrição:</label>
          <textarea
            className="form-control"
            name="descricao"
            value={doacao.descricao}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSave}>Salvar</button>
      </form>
    </div>
  );
};

export default EditDonation;
