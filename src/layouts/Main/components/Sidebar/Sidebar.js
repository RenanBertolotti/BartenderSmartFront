import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PostAddIcon from '@material-ui/icons/PostAdd';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Cardápio',
      href: '/cardapio',
      icon: <ListAltIcon />
    },
    {
      title: 'Mesas',
      href: '/mesas',
      icon: <EventSeatIcon />
    },
    {
      title: 'Pedido',
      href: '/pedidos',
      icon: <PostAddIcon  />
    },
    {
      title: 'ItemPedido',
      href: '/itemPedido',
      icon: <ShoppingCartIcon  />
    },
    {
      title: 'Produtos',
      href: '/produtos',
      icon: <CardTravelIcon  />
    },
    {
      title: 'Categoria',
      href: '/categoria',
      icon: <FormatListNumberedIcon  />
    },
    {
      title: 'Sair',
      href: '/Login',
      icon: <ExitToAppIcon />
    },   
  ];

  

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />        
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
