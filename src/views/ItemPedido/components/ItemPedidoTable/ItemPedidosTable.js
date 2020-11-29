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

const ItemPedidosTable = props => {
  const { className, ...rest } = props;
  const [itemPedidos, setItemPedidos] = useState([]);

  useEffect(() => {
    api.get('/itemPedidos').then(response => {
      setItemPedidos(response.data);
    })
  }, [])

  const classes = useStyles();

  const handleConfirm = useCallback(async (id) => {
    const result = window.confirm('Deseja realmente Excluir a categiria?')
    if (result === true) {
      api.delete(`/itemPedidos/${id}`)
    }
    else {
      return
    }

  }, [])

  console.log(itemPedidos);
  
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
                  <TableCell>Produto Id</TableCell>
                  <TableCell>Quantidade</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>SubTotal</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {itemPedidos.map(itemPedido => (
                  <TableRow key={itemPedido.id}>
                    <TableCell>{itemPedido.id}</TableCell>
                    <TableCell>{itemPedido.produto.name}</TableCell>
                    <TableCell>{itemPedido.quantity}</TableCell>
                    <TableCell>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(itemPedido.price)}</TableCell>
                    <TableCell>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(itemPedido.subTotal)}</TableCell>
                    <TableCell>
                      <Button
                        className={classes.button}
                        color="secondary"
                        onClick={() => handleConfirm(itemPedido.id)}
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

ItemPedidosTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default ItemPedidosTable;
