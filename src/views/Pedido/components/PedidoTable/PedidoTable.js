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

const PedidosTable = props => {
  const { className, ...rest } = props;
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    api.get('/pedidos').then(response => {
      setPedidos(response.data);
    })
  }, [])

  const classes = useStyles();

  const handleConfirm = useCallback(async (id) => {
    const result = window.confirm('Deseja realmente Excluir a categiria?')
    if (result === true) {
      api.delete(`/pedidos/${id}`)
    }
    else {
      return
    }

  }, [])

  console.log(pedidos)
  
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
                  <TableCell>Data</TableCell>
                  <TableCell>Mesa</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pedidos.map(pedido => (
                  <TableRow key={pedido.id}>
                    <TableCell>{pedido.id}</TableCell>
                    <TableCell>{pedido.moment}</TableCell>
                    <TableCell>{pedido.mesa.id}</TableCell>
                    <TableCell>
                      <Button
                        className={classes.button}
                        color="secondary"
                        onClick={() => handleConfirm(pedido.id)}
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

PedidosTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default PedidosTable;
