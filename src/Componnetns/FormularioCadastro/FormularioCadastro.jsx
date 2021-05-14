<<<<<<< HEAD
import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function FormularioCadastro({onSubmit}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
=======
import React from 'react';
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function FormularioCadastro() {
  let nome = "";
>>>>>>> main

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
<<<<<<< HEAD
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
=======
      console.log(nome);
    }}>
      <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth

                 onChange={(event) => {
                   nome = event.target.value;
                 }}/>

      <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth/>

      <TextField id="CPF" label="CPF" variant="outlined" margin="normal" fullWidth/>
      <FormControlLabel label="Promoções"
                        control={<Switch
                          name="Promocoes"
                          dafaultChecked color="primary"
>>>>>>> main
                        />}/>

      <FormControlLabel label="Novidades"
                        control={<Switch
<<<<<<< HEAD
                          checked={novidades}
                          onChange={(event) => {
                            setNovidades(event.target.checked);
                          }}
                          name="Novidades"
                          color="primary"
=======
                          name="Novidades"
                          dafaultChecked color="primary"
>>>>>>> main
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