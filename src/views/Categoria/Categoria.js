import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import {CategoriaTable, CategoriaToolBar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const CategoriaList = () => {
  const classes = useStyles();

  const [categorias] = useState();

  return (
    <div className={classes.root}>
      <CategoriaToolBar />
      <div className={classes.content}>
        <CategoriaTable mesas={categorias} />
      </div>
    </div>
  );
};

export default CategoriaList;
