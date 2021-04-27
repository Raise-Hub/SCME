import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';


export default function Login() {
    const [ login, setLogin] = useState('');
    const [ password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('scme/login', { login });

            console.log(response.data.login);
        } catch (err) {
            alert('Falha no login, tente novamente')
        }

    }

    return (
        <div className = "logon-container">
            <section className = "form">

                <form onSubmit={handleLogin}>
                    <h1>SCME</h1>
                    <h2>Faça seu Login</h2>
                    <input 
                        placeholder="Login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className = "buttom" type="submit">Enter</button>

                    <Link to="/register">
                        <FiLogIn />
                        Cadastrar um acesso
                    </Link>

                </form>                      
            </section>
        </div>
    );
}