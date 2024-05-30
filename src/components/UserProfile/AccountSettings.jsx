import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AccountSettings.css';

const AccountSettings = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: '',
    cep: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const chave = localStorage.getItem('id')
        const response = await fetch(`http://localhost:8080/getUserId/${chave}`); // --------------------------------- mudar para o ID do localstorage
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados do usuário');
        }
        const userDataFromBackend = await response.json();
        
        // Map the backend data to the userData state structure
        setUserData({
          nome: userDataFromBackend.nome || '',
          telefone: userDataFromBackend.telefone || '',
          email: userDataFromBackend.email || '',
          endereco: userDataFromBackend.endereco || '',
          cep: userDataFromBackend.cep || ''
        });
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const chave = localStorage.getItem('id')
      const response = await fetch(`http://localhost:8080/updateUser/${chave}`, { // --------------------------------- mudar para o ID do localstorage
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar os dados do usuário');
      }
      const data = await response.json();
      console.log(data);
      navigate('/user/accountsettings'); // Navigate or show a success message as needed
    } catch (error) {
      console.error('Erro ao atualizar os dados do usuário:', error);
    }
  };

  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Informações Pessoais</h1>

      <div className="form">
        <div className="form-group">
          <label htmlFor="nome">Seu nome <span>*</span></label>
          <input type="text" name="nome" id="nome" value={userData.nome} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Número <span>*</span></label>
          <input type="text" name="telefone" id="telefone" value={userData.telefone} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email <span>*</span></label>
          <input type="email" name="email" id="email" value={userData.email} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="endereco">Endereço</label>
          <input type="text" name="endereco" id="endereco" value={userData.endereco} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="cep">CEP</label>
          <input type="text" name="cep" id="cep" value={userData.cep} onChange={handleInputChange} />
        </div>
        
        {/* Add more fields as necessary */}
      </div>

      <button className="mainbutton1" onClick={handleSave}>Salvar alterações</button>
    </div>
  );
};
export default AccountSettings;