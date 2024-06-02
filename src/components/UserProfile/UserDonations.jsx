import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./UserDonations.css";
import Loader from '../Loading/Loading';

const UserDonations = () => {
  const [doacoes, setDoacoes] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    const fetchDoacoes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getAllDoa");
        console.log(response.data);
        setDoacoes(response.data);
        setLoading(false); // Marca o carregamento como completo
      } catch (error) {
        console.error("Erro ao buscar as doações:", error);
      }
    };

    fetchDoacoes();
  }, []);

  return (
    <div className="edit-donation-container">
      <h1 className="text-center">Lista de Doações</h1>
      {loading ? ( 
        <Loader></Loader>
      ) : (
        <div className="edit-donation-row">
          {doacoes.map((doacao) => (
            <div key={doacao.id} className="col-md-4 mb-4">
              
              <div className="edit-donation-card">
                <div className="edit-donation-card-body">
                  <h5 className="edit-donation-card-title">{doacao.titulo}</h5>
                  <p className="edit-donation-card-text">
                    {doacao.imagensBase64.map((base64, index) => (
                      <img
                        key={index}
                        src={base64}
                        alt={`Nova Imagem ${index + 1}`}
                        className="edit-donation-img-thumbnail"
                      />
                    ))}
                  </p>
                  <p className="edit-donation-card-text">Quantidade: {doacao.quantidade}</p>
                  <p className="edit-donation-card-text">Categoria: {doacao.categoria}</p>
                  <Link
                    to={`/EditDonation/${doacao.id}`}
                    className="btn btn-primary edit-button"
                  >
                    Editar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDonations;
