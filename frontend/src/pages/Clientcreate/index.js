import React from 'react';
import { Link } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import './styles.css';

export default function ClientCreate() {
    return (
        <div className = "client-container">
            <section className = "form">

                <form>
                    <h1>SCME</h1>
                    <h2>Crie uma ficha</h2>
                    <input placeholder="Nome"/>
                    <input placeholder="Endereço"/>
                    <input placeholder="Telefone"/>
                    <input placeholder="E-mail"/>
                    <button className = "buttom" type="submit">Criar</button>

                    <Link to="/profile">
                        <FiLogOut />
                        Voltar
                    </Link>

                </form>                      
            </section>
        </div>
    );
}