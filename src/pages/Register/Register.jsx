import React, { useState } from 'react';
import EcoNav from '../../components/LoginNavbar/LoginNavbar.jsx';
import axios from 'axios';
import Footer from '../../components/Footer/Footer.jsx';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [isActive, setActive] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const toggleActive = () => {
        setActive(!isActive);
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSignUp = async () => {
        const { name, email, password, confirmPassword } = formState;

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
    };

    const handleSignIn = async () => {
        const { email, password } = formState;

        try {
            const response = await axios.post('http://localhost:8080/login', {
                email: email,
                senha: password
            });
            if (response.status === 200) {
                const id = response.data.id; // Supondo que o servidor envie o ID do usuário após o login
                setMessage('Login bem-sucedido!');
                setError('');
                localStorage.setItem('id', id); // Armazenando o e-mail no localStorage
                navigate(`/user/accountsettings`);
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials.');
            setMessage('');
        }
    };

    return (
        <div>
            <EcoNav />
            <div id="body">
                <div className={`container ${isActive ? 'active' : ''}`} id="container">
                    <div className="form-container sign-up">
                        <form>
                            <h1>Crie uma Conta</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i className="fab fa-github"></i></a>
                                <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>ou cadastre email e senha</span>
                            <input type="text" placeholder="Nome Completo" id="name" onChange={handleChange} />
                            <input type="email" placeholder="Email" id="email" onChange={handleChange} />
                            <input type="password" placeholder="Senha" id="password" onChange={handleChange} />
                            <input type="password" placeholder="Confirmar Senha" id="confirmPassword" onChange={handleChange} />
                            <button type='button' onClick={handleSignUp}>Cadastrar</button>
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form>
                            <h1>Login</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i className="fab fa-github"></i></a>
                                <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>ou use seu e-mail e senha</span>
                            <input type="email" placeholder="Email" id="email" onChange={handleChange} />
                            <input type="password" placeholder="Password" id="password" onChange={handleChange} />
                            <a href="#">Esqueceu sua senha?</a>
                            <button type='button' onClick={handleSignIn}>Entrar</button>
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className={`toggle-panel toggle-left ${isActive ? '' : 'active'}`}>
                                <h1>Bem Vindo(a) de volta!</h1>
                                <p>Insira seus dados para acessar todo conteúdo do nosso site</p>
                                <button className="hidden" id="toggle-login" type='button' onClick={toggleActive}>Entrar</button>
                            </div>
                            <div className={`toggle-panel toggle-right ${isActive ? 'active' : ''}`}>
                                <h1>Não possui uma conta?</h1>
                                <p> Cadastre seus dados para ter acesso a todo nosso conteúdo</p>
                                <button className="hidden" id="toggle-register" type='button' onClick={toggleActive}>Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {message && <div className="message">{message}</div>}
            {error && <div className="error">{error}</div>}
            <Footer />
        </div>
    );
}

export default Register;
