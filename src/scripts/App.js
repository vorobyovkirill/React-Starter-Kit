import { Container, Grid, Header, Menu } from "semantic-ui-react";
import React, { Component } from "react";

import PropTypes from "prop-types";

import style from "./App.css";

import _ from "lodash";

const App = () => {
  return (
    <Container>
      <Menu>
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Item name="menu 1" />
        <Menu.Item name="menu 2" />
        <Menu.Item name="menu 3" />
      </Menu>
      <Header as="h1">Semantic UI React Fixed Template</Header>
	  <h2>TEST</h2>
    </Container>
  );
};

export default App;
