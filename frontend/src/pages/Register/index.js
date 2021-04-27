import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import api from '../../services/api';


import './styles.css';

export default function Register() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            login, 
            password,
        };

        try {
            const response = await api.post('/scme/cadastro', data);

            alert(`Cadastro realizado com sucesso: ${response.data.id_scme}`);  

            history.push('/')
        } catch (err) {
            alert('Erro no cadastro, tente novamente')
        }

        
    }

    return (
        <div className = "register-container">
            <div className = "content">
                <form onSubmit={handleRegister}>
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
                <button className = "buttom" type="submit">Criar</button>

                <Link to="/">
                        <FiLogOut />
                        Voltar
                    </Link>
                </form>
            </div>

        </div>
    );
}