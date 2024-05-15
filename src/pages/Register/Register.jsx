import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed and imported
import EcoNav from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom'
import './Register.css';

function Register() {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    isLogin: true,
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Toggle between Login and Registration
  const toggleLogin = () => {
    setFormState({ ...formState, isLogin: !formState.isLogin });
    setMessage('');
    setError('');
  };

  // Handle input change
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { isLogin, name, email, password, confirmPassword } = formState;

    if (!isLogin) {
      if (password !== confirmPassword) {
        setError("Passwords don't match.");
        return;
      }

      try {
        const response = await axios.post('http://localhost:8080/save', {
          nome: name,
          email: email,
          senha: password
        });
        if (response.status === 201) {
          setMessage('Registration successful!');
          setError('');
        }
      } catch (error) {
        console.error('Registration failed:', error);
        setError('Registration failed. Please try again.');
        setMessage('');
      }
    } else {
      try {
        const response = await axios.post('http://localhost:8080/login', {
          email: email,
          password: password
        });
        if (response.status === 200) {
        navigate('/UserProfile')  
          setMessage('Login successful!');
          setError('');
        }
      } catch (error) {
        console.error('Login failed:', error);
        setError('Login failed. Please check your credentials.');
        setMessage('');
      }
    }
  };

  return (
    <div className="Register">
      <EcoNav />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="header">
            <div className="text">{formState.isLogin ? 'Login' : 'Cadastrar'}</div>
            <div className="underline"></div>
          </div>
          <div className="submit-container">
            <button type="button" className={!formState.isLogin ? "submit gray" : "submit"} onClick={toggleLogin}>Login</button>
            <button type="button" className={formState.isLogin ? "submit gray" : "submit"} onClick={toggleLogin}>Cadastrar</button>
          </div>
          <div className="inputs">
            {!formState.isLogin && (
              <div className="input">
                <i className="fa fa-user"></i>
                <input type="text" placeholder="Nome" name="name" value={formState.name} onChange={handleChange} required />
              </div>
            )}
            <div className="input">
              <i className="fa fa-at"></i>
              <input type="email" placeholder="e-Mail" name="email" value={formState.email} onChange={handleChange} required />
            </div>
            <div className="input">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Senha" name="password" value={formState.password} onChange={handleChange} required />
            </div>
            {!formState.isLogin && (
              <div className="input">
                <i></i>
                <input type="password" placeholder="Confirmar Senha" name="confirmPassword" value={formState.confirmPassword} onChange={handleChange} required />
              </div>
            )}
            {formState.isLogin && (
              <div className="forgot-password">Esqueceu sua senha? <span>Clique Aqui!</span></div>
            )}
            <div className="submit-container">
              <button className="submit" type="submit">{formState.isLogin ? 'Login' : 'Cadastrar'}</button>
            </div>
            {message && <div className="message">{message}</div>}
            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;

