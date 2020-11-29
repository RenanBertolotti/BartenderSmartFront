import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import {MesasToolbar, MesasTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const MesaList = () => {
  const classes = useStyles();

  const [mesas] = useState();

  return (
    <div className={classes.root}>
      <MesasToolbar />
      <div className={classes.content}>
        <MesasTable mesas={mesas} />
      </div>
    </div>
  );
};

export default MesaList;
