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

const ProdutosTable = props => {
  const { className, ...rest } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/produtos').then(response => {
      setProducts(response.data);
    })
  }, [])

  const classes = useStyles();

  const handleConfirm = useCallback(async (id) => {
    const result = window.confirm('Deseja realmente Excluir a categiria?')
    if (result === true) {
      api.delete(`/produtos/${id}`)
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
                  <TableCell>Nome</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Preço</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map(product => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.descricao}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>
                      <Button
                        className={classes.button}
                        color="secondary"
                        onClick={() => handleConfirm(product.id)}
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

ProdutosTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default ProdutosTable;
