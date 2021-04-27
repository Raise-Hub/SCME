import React from 'react';
import {Link} from 'react-router-dom';
import { FiTrash, FiEdit } from 'react-icons/fi'

import './styles.css';

export default function Odsprocess() {
    return (
        <div className = "ods-container">
            <header>
                <span>Processo</span>

                <Link className = "back" to="/ods">Voltar</Link>

            </header>

            <ul>
                <li>
                    <strong>Responsável:</strong>
                    <p>Responsável teste</p>

                    <strong>Data de inicio:</strong>
                    <p>Start teste</p>

                    <strong>Data de conclusão:</strong>
                    <p>Finish teste</p>

                    <strong>Número ODS:</strong>
                    <p>Numero teste</p>

                    <strong>ID USUARIO:</strong>
                    <p>ID teste</p>

                    <strong>Cliente:</strong>
                    <p>Nome Teste</p>

                    <h1><Link to="/editprocess"><FiEdit /></Link></h1>

                    <button type="button"><FiTrash /></button>
                </li>
                
                
            </ul>
        </div>
    );
}