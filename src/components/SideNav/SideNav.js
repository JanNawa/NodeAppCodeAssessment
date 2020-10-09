import React from 'react';
import logo from '../../images/SideNav/nodeLogo.png';
import restaurantLogo from '../../images/SideNav/restaurantLogo.png';
import create from '../../images/SideNav/create.png';
import Button from './Button'
import { Divider, List, ListItem, ListItemIcon, ListItemText, Grid, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { SideNavItems } from './SideNavItems';
import './SideNav.css';
import { BusinessDetail } from '../../app/BusinessDetail';

const ListItemStyle = withStyles({
  root: {
    paddingLeft: '5vmin',
  }
})(ListItem);

const SideNav = () => (
  <nav className="SideNav">
    <header>
      <a href="https://node-app.com/">
        <img src={logo} className="Header-logo" alt="logo" />
      </a>
    </header>

    <Divider />

    <header className="SideNav-brand">
      <img src={restaurantLogo} className="SideNav-logo" alt="restaurant logo" />
      <Box>
        <Typography variant="h6" component="h3" fontWeight={500}>
          {BusinessDetail.businessName}
        </Typography>
        <Typography variant="body1" component="h6" fontWeight="fontWeightLight">
          {BusinessDetail.businessType}
        </Typography>
      </Box>
    </header>

    <Divider />

    <Grid container justify="center">
      <Button variant="outlined">
        <img src={create} className="SideNav-create" alt="create node" />
        create node
      </Button>
    </Grid>
    <List>
      {
        SideNavItems.map((item, index) => (
          <ListItemStyle button key={item.title} className="ListItem">
            <ListItemIcon><img src={item.image} alt={item.title} /></ListItemIcon>
            <ListItemText className="ListItemText" primary={item.title}/>
          </ListItemStyle>
        )
        )
      }
    </List>
  </nav>
);

SideNav.propTypes = {};

SideNav.defaultProps = {};

export default SideNav;
