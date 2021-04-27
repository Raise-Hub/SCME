import React from 'react';
import {Link} from 'react-router-dom';
import { FiTrash, FiEdit } from 'react-icons/fi'

import './styles.css';

export default function Ods() {
    return (
        <div className = "ods-container">
            <header>
                <span>Ordens de Serviço</span>

                <Link className = "back" to="/profile">Voltar</Link>
                
            </header>

            <ul>
                <li>
                   <p> <Link className= "ods" to = "/process">ACOMPANHAR PROCESSO</Link></p>

                    <strong>Equipamento:</strong>
                    <p>Equipamento teste</p>

                    <strong>Tipo:</strong>
                    <p>Tipo teste</p>

                    <strong>Marca:</strong>
                    <p>Marca teste</p>

                    <strong>E-Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Nome Client</strong>
                    <p>Nome Teste</p>

                    <h1><Link to="/editods"><FiEdit /></Link></h1>

                    <button type="button"><FiTrash /></button>
                </li>
                
                
            </ul>
        </div>
    );
}