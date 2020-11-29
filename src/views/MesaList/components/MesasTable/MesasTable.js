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

const MesasTable = props => {
  const { className, ...rest } = props;
  const [tables, setTables] = useState([]);

  useEffect(() => {
    api.get('/mesas').then(response => {
      setTables(response.data);
    })
  }, [])

  const classes = useStyles();

  const handleConfirm = useCallback(async (id) => {
    const result = window.confirm('Deseja realmente Excluir a mesa?')
    if (result === true) {
      api.delete(`/mesas/${id}`)
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
                {tables.map(table => (
                  <TableRow key={table.id}>
                    <TableCell>{table.id}</TableCell>
                    <TableCell>{table.name}</TableCell>
                    <TableCell>
                      <Button
                        className={classes.button}
                        color="secondary"
                        onClick={() => handleConfirm(table.id)}
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

MesasTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default MesasTable;
