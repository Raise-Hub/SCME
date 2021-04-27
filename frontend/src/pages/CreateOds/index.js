import React from 'react';
import { Link } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import './styles.css';

export default function EditOds() {
    return (
        <div className = "crieods-container">
            <section className = "form">

                <form>
                    <h1>SCME</h1>
                    <h2>Crie uma ordem de serviço</h2>
                    <input placeholder="Equipamento"/>
                    <input placeholder="Tipo"/>
                    <input placeholder="Marca"/>
                    <input placeholder="Descrição"/>
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