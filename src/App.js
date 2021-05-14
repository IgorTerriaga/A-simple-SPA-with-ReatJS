import './App.css';
import FormularioCadastro from "./Componnetns/FormularioCadastro/FormularioCadastro";
import {Container} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import 'fontsource-roboto';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center">Formulário de Cadastro</Typography>
<<<<<<< HEAD
      <FormularioCadastro onSubmit={onSubmitForm}/>
    </Container>

  );
}

function onSubmitForm(dados) {

=======
      <FormularioCadastro/>
    </Container>

  );
>>>>>>> main
}

export default App;
