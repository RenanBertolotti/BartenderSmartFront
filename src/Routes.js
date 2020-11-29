import { Typography } from '@material-ui/core';
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Login from 'views/Login';
import Cardapio from 'views/Cardapio/Cardapio'

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  MesaList,
  MesaList as TarefaListView,
  Categoria as CategoriaList,
  Produto as ProdutoList,
  Pedido as PedidoList,
  ItemPedido as ItemPedidoList
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/mesas"
      />
      <RouteWithLayout
        component={MesaList}
        exact
        layout={MainLayout}
        path="/mesas"
      />
      <RouteWithLayout
        component={Login}
        exact
        layout={MinimalLayout}
        path="/login"
      />
      <RouteWithLayout
        component={CategoriaList}
        exact
        layout={MainLayout}
        path="/categoria"
      />
      <RouteWithLayout
        component={ProdutoList}
        exact
        layout={MainLayout}
        path="/produtos"
      />
      <RouteWithLayout
        component={PedidoList}
        exact
        layout={MainLayout}
        path="/pedidos"
      />
      <RouteWithLayout
        component={ItemPedidoList}
        exact
        layout={MainLayout}
        path="/itemPedido"
      />
      <RouteWithLayout
        component={Cardapio}
        exact
        layout={MainLayout}
        path="/Cardapio"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
