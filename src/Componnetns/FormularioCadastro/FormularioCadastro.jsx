import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function FormularioCadastro({onSubmit}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      props.onSubmit({nome, sobrenome, cpf, novidades, promocoes});
    }}>
      <TextField
        value={nome}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal" fullWidth

        onChange={(event) => {
          setNome(event.target.value);
        }}/>

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth

      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel label="Promoções"
                        control={<Switch checked={promocoes} onChange={(event) => {
                          setPromocoes(event.target.checked);
                        }}
                                         name="Promocoes"
                                         color="primary"
                        />}/>

      <FormControlLabel label="Novidades"
                        control={<Switch
                          checked={novidades}
                          onChange={(event) => {
                            setNovidades(event.target.checked);
                          }}
                          name="Novidades"
                          color="primary"
                        />}/>


      <Button variant="contained"
              color="primary"
              type="submit">
        Cadastrar
      </Button>
    </form>
  )
}

export default FormularioCadastro;