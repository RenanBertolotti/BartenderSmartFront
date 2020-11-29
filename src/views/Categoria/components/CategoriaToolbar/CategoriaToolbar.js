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

const CategoriasToolbar = props => {
  const { className, ...rest } = props;

  const [categoria, setCategoria] = useState('')

  const classes = useStyles();

  const submit = (event) =>{
    event.preventDefault();
    const categoriaData = {
      name: categoria
    }
    api.post('/categorias', categoriaData);
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
        <Grid container>
          <Grid
            item
            md={4}
          >
            <TextField
              className={classes.searchInput}
              fullWidth
              label="Categoria:"
              onChange={e => setCategoria(e.target.value)}
              placeholder="Categoria"
              value={categoria}
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

CategoriasToolbar.propTypes = {
  className: PropTypes.string
};

export default CategoriasToolbar;
