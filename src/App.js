import React, {Component} from 'react'
import {ListaDeNotas} from "./componnents/ListaDeNotas/ListaDeNotas";
import {FormularioCadastro} from "./componnents/FormularioCadastro/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
