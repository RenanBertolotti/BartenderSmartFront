import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import {ProdutoToolBar, ProdutoTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ProdutoList = () => {
  const classes = useStyles();

  const [categorias] = useState();

  return (
    <div className={classes.root}>
      <ProdutoToolBar />
      <div className={classes.content}>
        <ProdutoTable mesas={categorias} />
      </div>
    </div>
  );
};

export default ProdutoList;
