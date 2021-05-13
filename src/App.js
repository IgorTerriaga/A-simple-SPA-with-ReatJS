import React, {Component} from 'react'
import {ListaDeNotas} from "./componnents/ListaDeNotas/ListaDeNotas";
import {FormularioCadastro} from "./componnents/FormularioCadastro/FormularioCadastro";
import './assets/app.css';

class App extends Component {
  criarNota(titulo, texto) {
    console.log(`Uma nova nota foi criada ${titulo} ${texto}`)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
