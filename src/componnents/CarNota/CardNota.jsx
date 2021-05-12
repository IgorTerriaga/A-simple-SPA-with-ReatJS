import React, {Component} from 'react';
import "./estilo.css";

export class CardNota extends Component {
  render() {
    return (
      <section className="card-notas">
        <header className="card-nota_cabecalho">
          <h3 className="card-notas_titulo">Título</h3>
        </header>
        <p className="card-nota_texto">Escreva sua nota</p>
      </section>
    );
  }
}