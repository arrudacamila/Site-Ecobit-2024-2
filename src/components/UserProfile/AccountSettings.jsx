import React, { useState, useEffect } from 'react';
import './AccountSettings.css';
import axios from 'axios';

const AccountSettings = () => {
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    zipCode: '',
    // Adicione mais campos conforme necessário
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/');
        const userDataFromBackend = response.data;
        setUserData(userDataFromBackend);
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put('http://localhost:8080/', userData);
      console.log('Dados do usuário atualizados com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar os dados do usuário:', error);
    }
  };

  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Informações Pessoais</h1>

      <div className="form">
        <div className="form-group">
          <label htmlFor="name">Seu nome <span>*</span></label>
          <input type="text" name="name" id="name" value={userData.name} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Número <span>*</span></label>
          <input type="text" name="phone" id="phone" value={userData.phone} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email <span>*</span></label>
          <input type="email" name="email" id="email" value={userData.email} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="address">Endereço</label>
          <input type="text" name="address" id="address" value={userData.address} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="zipCode">CEP</label>
          <input type="text" name="zipCode" id="zipCode" value={userData.zipCode} onChange={handleInputChange} />
        </div>
        
        {/* Adicione mais campos conforme necessário */}
      </div>

      <button className="mainbutton1" onClick={handleSave}>Salvar alterações</button>
    </div>
  );
};

export default AccountSettings;
