import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserDonations = () => {
  const [doacoes, setDoacoes] = useState([]);

  useEffect(() => {
    const fetchDoacoes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/');
        console.log(response.data);
        setDoacoes(response.data);
      } catch (error) {
        console.error('Erro ao buscar as doações:', error);
      }
    };

    fetchDoacoes();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Lista de Doações</h1>
      <div className="row">
        {doacoes.map(doacao => (
          <div key={doacao.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{doacao.nome}</h5>
                <p className="card-text">Descrição: {doacao.descricao}</p>
                <p className="card-text">Quantidade: {doacao.quantidade}</p>
                <p className="card-text">Categoria: {doacao.categoria}</p>
                <Link to={`/EditDonation/${doacao.id}`} className="btn btn-primary">Editar produto</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDonations;
