import React, {Component} from 'react';
import {CardNota} from "../CarNota/CardNota";
import "./estilo.css";

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {
          Array.of("Trabalho", "Trabalho", "Estudos").map((item, index) => {
            return (
              <li className="lista-notas_item" key={index}>
                <CardNota/>
              </li>
            );
          })
        }
      </ul>
    );
  }
}