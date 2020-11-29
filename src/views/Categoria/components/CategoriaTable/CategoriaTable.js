import React, { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import api from '../../../../services/api';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const CategoriasTable = props => {
  const { className, categorias, ...rest } = props;
  const [categories, setCategorias] = useState([]);

  useEffect(() => {
    api.get('/categorias').then(response => {
      setCategorias(response.data);
    })
  }, [])

  const classes = useStyles();

  const handleConfirm = useCallback(async (id) => {
    const result = window.confirm('Deseja realmente Excluir a categiria?')
    if (result === true) {
      api.delete(`/categorias/${id}`)
    }
    else {
      return
    }

  }, [])
  
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Mesa</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map(categoria => (
                  <TableRow key={categoria.id}>
                    <TableCell>{categoria.id}</TableCell>
                    <TableCell>{categoria.name}</TableCell>
                    <TableCell>
                      <Button
                        className={classes.button}
                        color="secondary"
                        onClick={() => handleConfirm(categoria.id)}
                        variant="contained"                        
                      >Excluir</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      
    </Card>
  );
};

CategoriasTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default CategoriasTable;
