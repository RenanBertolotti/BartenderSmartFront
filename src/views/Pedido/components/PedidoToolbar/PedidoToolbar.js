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

const PedidoToolbar = props => {
  const { className, ...rest } = props;

  const [pedidoId, setPedido] = useState('')
  const [moment, setMoment] = useState('')

  const classes = useStyles();

  const submit = (event) =>{
    event.preventDefault();

    const pedidoData = {
      pedido: {
        id: pedidoId
      },
      moment,
    }
    api.post('/pedidos', pedidoData);
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
              onChange={e => setPedido(e.target.value)}
              placeholder="Nome"
              value={pedidoId}
            />
            <TextField
              className={classes.searchInput}
              label="Momento:"
              onChange={e => setMoment(e.target.value)}
              placeholder="Momento"
              value={moment}
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

PedidoToolbar.propTypes = {
  className: PropTypes.string
};

export default PedidoToolbar;
