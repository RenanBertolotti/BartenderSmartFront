import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import {ItemPedidoTable, ItemPedidoToolBar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ItemPedidoList = () => {
  const classes = useStyles();

  const [categorias] = useState();

  return (
    <div className={classes.root}>
      <ItemPedidoToolBar />
      <div className={classes.content}>
        <ItemPedidoTable mesas={categorias} />
      </div>
    </div>
  );
};

export default ItemPedidoList;
