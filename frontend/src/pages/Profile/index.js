import React from 'react';
import {Link} from 'react-router-dom';
import { FiPower, FiTrash, FiEdit } from 'react-icons/fi'

import './styles.css';

export default function Profile() {
    return (
        <div className = "profile-container">
            <header>
                <span>Fichas de Clientes</span>

                <Link className = "bottom" to="/clientcreate">Cadastrar nova ficha</Link>
                <Link className = "bottom" to="/ods">Ordens de serviço</Link>

                <button type="button">
                    <Link to ="/"><FiPower /></Link>
                </button>
            </header>

            <h1>Clientes cadastrados</h1>

            <ul>
                <li>
                   <p> <Link className= "ods" to = "/createods">criar ordem de serviço</Link></p>

                    <strong>Nome:</strong>
                    <p>nome teste</p>

                    <strong>Endereço:</strong>
                    <p>Endereço teste</p>

                    <strong>Phone:</strong>
                    <p>Phone teste</p>

                    <strong>E-mail:</strong>
                    <p>E-mail teste</p>

                    <h1><Link to="/editclient"><FiEdit /></Link></h1>

                    <button type="button"><FiTrash /></button>
                </li>
                <li>
                   <p> <Link className= "ods" to = "/createods">criar ordem de serviço</Link></p>

                    <strong>Nome:</strong>
                    <p>nome teste</p>

                    <strong>Endereço:</strong>
                    <p>Endereço teste</p>

                    <strong>Phone:</strong>
                    <p>Phone teste</p>

                    <strong>E-mail:</strong>
                    <p>E-mail teste</p>

                    <h1><Link to="/editclient"><FiEdit /></Link></h1>

                    <button type="button"><FiTrash /></button>
                </li><li>
                   <p> <Link className= "ods" to = "/createods">criar ordem de serviço</Link></p>

                    <strong>Nome:</strong>
                    <p>nome teste</p>

                    <strong>Endereço:</strong>
                    <p>Endereço teste</p>

                    <strong>Phone:</strong>
                    <p>Phone teste</p>

                    <strong>E-mail:</strong>
                    <p>E-mail teste</p>

                    <h1><Link to="/editclient"><FiEdit /></Link></h1>

                    <button type="button"><FiTrash /></button>
                </li><li>
                   <p> <Link className= "ods" to = "/createods">criar ordem de serviço</Link></p>

                    <strong>Nome:</strong>
                    <p>nome teste</p>

                    <strong>Endereço:</strong>
                    <p>Endereço teste</p>

                    <strong>Phone:</strong>
                    <p>Phone teste</p>

                    <strong>E-mail:</strong>
                    <p>E-mail teste</p>

                    <h1><Link to="/editclient"><FiEdit /></Link></h1>

                    <button type="button"><FiTrash /></button>
                </li><li>
                   <p> <Link className= "ods" to = "/createods">criar ordem de serviço</Link></p>

                    <strong>Nome:</strong>
                    <p>nome teste</p>

                    <strong>Endereço:</strong>
                    <p>Endereço teste</p>

                    <strong>Phone:</strong>
                    <p>Phone teste</p>

                    <strong>E-mail:</strong>
                    <p>E-mail teste</p>

                    <h1><Link to="/editclient"><FiEdit /></Link></h1>

                    <button type="button"><FiTrash /></button>
                </li><li>
                   <p> <Link className= "ods" to = "/createods">criar ordem de serviço</Link></p>

                    <strong>Nome:</strong>
                    <p>nome teste</p>

                    <strong>Endereço:</strong>
                    <p>Endereço teste</p>

                    <strong>Phone:</strong>
                    <p>Phone teste</p>

                    <strong>E-mail:</strong>
                    <p>E-mail teste</p>

                    <h1><Link to="/editclient"><FiEdit /></Link></h1>

                    <button type="button"><FiTrash /></button>
                </li>
                
            </ul>
        </div>
    );
}