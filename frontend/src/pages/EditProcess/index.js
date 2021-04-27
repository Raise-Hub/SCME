import React from 'react';
import { Link } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import './styles.css';

export default function EditProcess() {
    return (
        <div className = "edit-container">
            <section className = "form">

                <form>
                    <h1>SCME</h1>
                    <h2>Edite um processo</h2>
                    <input placeholder="Equipamento"/>
                    <input placeholder="Tipo"/>
                    <input placeholder="Marca"/>
                    <input placeholder="Descrição"/>
                    <button className = "buttom" type="submit">Editar</button>

                    <Link to="/process">
                        <FiLogOut />
                        Voltar
                    </Link>

                </form>                      
            </section>
        </div>
    );
}