import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

const races = ['Beast', 'Demon', 'Dragon', 'Dwarf', 'Elemental', 'Elf', 'Goblin', 'Satyr', 'Human', 'Ogre', 'Orc', 'Naga', 'Troll', 'Undead', 'God'];
const classes = ['Assassin', 'Demon Hunter', 'Druid', 'Knight', 'Hunter', 'Priest', 'Mage', 'Mech', 'Shaman', 'Warlock', 'Warrior'];

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeaderRow() {
    let headerRow = races.map((el) => <Col className="cell">{el}</Col>)
    
    return headerRow;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="cell"></Col>
          {this.renderHeaderRow()}
        </Row>
        <Row>
          <Col className="cell">1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
