import React from 'react';
import { Link } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import './styles.css';

export default function EditClient() {
    return (
        <div className = "edit-container">
            <section className = "form">

                <form>
                    <h1>SCME</h1>
                    <h2>Edite uma ficha</h2>
                    <input placeholder="Nome"/>
                    <input placeholder="Endereço"/>
                    <input placeholder="Telefone"/>
                    <input placeholder="E-mail"/>
                    <button className = "buttom" type="submit">Editar</button>

                    <Link to="/profile">
                        <FiLogOut />
                        Voltar
                    </Link>

                </form>                      
            </section>
        </div>
    );
}