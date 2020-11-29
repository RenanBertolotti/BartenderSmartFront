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

const ItemPedidosToolbar = props => {
  const { className, ...rest } = props;

  //id pedido
  //id produto
  // quantity
  // price
  const [idPedido, setIdPedido] = useState('')
  const [idProdudo, setIdProduto] = useState('')
  const [quantiti, setQuantity] = useState('')
  const [price, setPrice] = useState('')

  const classes = useStyles();

  const submit = (event) =>{
    event.preventDefault();

    const itemPedidoData = {    
      pedido: {
        id: idPedido
      },
      price,    
      produto: {
        id : idProdudo
      },    
      quantity: quantiti
    }
    
    api.post('/itemPedidos', itemPedidoData);
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
              label="Id Pedido:"
              onChange={e => setIdPedido(e.target.value)}
              placeholder="Id Pedido"
              value={idPedido}
            />
            <TextField
              className={classes.searchInput}
              label="Id produto:"
              onChange={e => setIdProduto(e.target.value)}
              placeholder="Id produto"
              value={idProdudo}
            />
            <TextField
              className={classes.searchInput}
              label="Quantidade:"
              onChange={e => setQuantity(e.target.value)}
              placeholder="Quantidade"
              value={quantiti}
            />
            <TextField
              className={classes.searchInput}
              label="Preço:"
              onChange={e => setPrice(e.target.value)}
              placeholder="Preço"
              value={price}
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

ItemPedidosToolbar.propTypes = {
  className: PropTypes.string
};

export default ItemPedidosToolbar;
