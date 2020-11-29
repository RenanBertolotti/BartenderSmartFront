import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { 
  Button,
  TextField,
  Grid,
  
} from '@material-ui/core';
import api from 'services/api';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const ProdutosToolbar = props => {
  const { className, ...rest } = props;

  const [produto, setProduto] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('')

  const classes = useStyles();

  const submit = (event) =>{
    event.preventDefault();
    const precoForm = preco.replace(/[^\d]+/g, '') / 100;

    console.log(precoForm)

    const produtoData = {
      name: produto,
      descricao,
      price: precoForm
    }
    api.post('/produtos', produtoData);
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />        
      </div>
      <div className={classes.row}>
        <Grid
          container
          md={12}
        >
          <Grid >
            <TextField
              className={classes.searchInput}
              label="Nome:"
              onChange={e => setProduto(e.target.value)}
              placeholder="Nome"
              value={produto}
            />
            <TextField
              className={classes.searchInput}
              label="Descrição:"
              onChange={e => setDescricao(e.target.value)}
              placeholder="Descrição"
              value={descricao}
            />
            <TextField
              className={classes.searchInput}
              label="Preço:"
              onChange={e => setPreco(e.target.value)}
              placeholder="Preço"
              value={preco}
            />
          </Grid>
          
          <Grid
            item
            md={2}
          >
            <Button
              color="secondary"
              onClick={submit}
              variant="contained"
            >Adicionar</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

ProdutosToolbar.propTypes = {
  className: PropTypes.string
};

export default ProdutosToolbar;
