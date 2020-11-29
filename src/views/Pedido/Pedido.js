import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import {PedidoTable, PedidoToolBar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Pedido = () => {
  const classes = useStyles();

  const [categorias] = useState();

  return (
    <div className={classes.root}>
      <PedidoToolBar />
      <div className={classes.content}>
        <PedidoTable mesas={categorias} />
      </div>
    </div>
  );
};

export default Pedido;
