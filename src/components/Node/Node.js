import React from 'react';
import { Header } from './Header/Header';
import CardList from "./CardList";
import { Typography } from '@material-ui/core';
import './Node.css';

const Node = () => (
  <div className="Node">
    <Header />
    <div>
      <header className="Node-title">
        <Typography variant="h4" component="h2">
          Influencers
        </Typography>
      </header>
      <main className="Node-content">
          <CardList/>
      </main>
    </div>
  </div>
);

Node.propTypes = {};

Node.defaultProps = {};

export default Node;
