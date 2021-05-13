import './App.css';
import FormularioCadastro from "./Componnetns/FormularioCadastro/FormularioCadastro";
import {Container} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import 'fontsource-roboto';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro/>
    </Container>

  );
}

export default App;
