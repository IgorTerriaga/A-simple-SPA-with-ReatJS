import React from 'react';
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function FormularioCadastro() {
  let nome = "";

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
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
                        />}/>

      <FormControlLabel label="Novidades"
                        control={<Switch
                          name="Novidades"
                          dafaultChecked color="primary"
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