import React from 'react'
import './styles/Reservas.css'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Unit from '../content/ReUse/Unit'

const Reservas = () => {
    return (
        <div>
            <Header/>
            <div id="MainContent">
                <div id="imgAndText"></div>
                <h1>Escolha a unidade que você deseja fazer a sua pré-reserva</h1>
                <div id="UnitDivs">
                    <Unit Nome="AsaNorte 702" />
                    <Unit Nome="AsaSul 504" />
                </div>
                <div id="FormPart">
                    <form id="MainForm">
                        <label className="InputField">
                            Nome Completo:
                             <input className="InputItself" type="text"/>
                        </label>
                        <label className="InputField">
                            E-mail:
                             <input className="InputItself" type="E-mail"/>
                        </label>
                        <label className="InputField">
                            Quantidade de pessoas:
                             <select className="InputItself">
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                                 <option value="6">6</option>
                                 <option value="7">7</option>
                                 <option value="8">8</option>
                                 <option value="9+">9+</option>
                             </select>
                        </label>
                        <label className="InputField">
                            Telefone para contato:
                             <input className="InputItself" type="tel"/>
                        </label>
                        <label className="InputField">
                            Data da Reserva:
                             <input className="InputItself" type="date" min="2021-03-01"/>
                        </label>
                        <button id="ReserveButton">FAÇA A SUA PRÉ-RESERVA</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Reservas