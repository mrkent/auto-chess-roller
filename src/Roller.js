import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Form, InputGroup, FormControl, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

class Roll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const imageUrl = this.props.imageUrl || 'https://via.placeholder.com/140x80';
    const chessPiece = this.props.chessPiece || 'Axe';
    const cost = this.props.cost || 1;
    const display = this.props.display || 'inherit';
    return (
      <Col style={{ margin: '10px 2px 10px 2px', paddingRight: '0px' }}>
        <div style={{ width: '140px' }}>
          <Card onClick={this.props.handlePick} className="text-center" style={{ width: '140px', display: display }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body style={{ padding: '5px' }}>
              <Card.Title as='h6'>{chessPiece}</Card.Title>
              <Card.Text>
                ${this.props.cost}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chancesPerLevel = {
      1: { 1: 1, 2: .00, 3: .00, 4: .00, 5: .00 },
      2: { 1: .70, 2: .30, 3: .00, 4: .00, 5: .00 },
      3: { 1: .60, 2: .35, 3: .05, 4: .00, 5: .00 },
      4: { 1: .50, 2: .35, 3: .15, 4: .00, 5: .00 },
      5: { 1: .40, 2: .35, 3: .23, 4: .02, 5: .00 },
      6: { 1: .33, 2: .30, 3: .30, 4: .07, 5: .00 },
      7: { 1: .30, 2: .30, 3: .30, 4: .10, 5: .00 },
      8: { 1: .24, 2: .30, 3: .30, 4: .15, 5: .01 },
      9: { 1: .22, 2: .30, 3: .25, 4: .20, 5: .03 },
      10: { 1: .19, 2: .25, 3: .25, 4: .25, 5: .06 }
    }

    this.state = {
      level: this.props.level || 1,
      excludedPieces: this.props.excludedPieces || [],
      lastRoll: [],
      currentRoll: [],
      bench: [],
      pieces: [
        { name: 'axe', count: 45, cost: 1 },
        { name: 'enchantress', count: 45, cost: 1 },
        { name: 'ogremagi', count: 45, cost: 1 },
        { name: 'crystalmaiden', count: 30, cost: 2 },
        { name: 'beastmaster', count: 30, cost: 2 },
        { name: 'juggernaut', count: 30, cost: 2 },
        { name: 'lycan', count: 25, cost: 3 },
        { name: 'venomancer', count: 25, cost: 3 },
        { name: 'omniknight', count: 25, cost: 3 },
        { name: 'doom', count: 15, cost: 4 },
        { name: 'kunkka', count: 15, cost: 4 },
        { name: 'trollwarlord', count: 15, cost: 4 },
        { name: 'gyrocopter', count: 10, cost: 5 },
        { name: 'tidehunter', count: 10, cost: 5 },
        { name: 'enigma', count: 10, cost: 5 },
      ]
    };

    this.changeLevel = this.changeLevel.bind(this);
    this.removePiece = this.removePieceFromPool.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  componentDidMount() {
    this.rollFive();
  }

  removePieceFromPool(name, amount = 1) {
    this.setState((state, props) => {
      const pieces = state.pieces;
      const pieceIndex = pieces.findIndex(unit => unit.name === name);
      if (pieceIndex !== -1) {
        if (amount < pieces[pieceIndex].count) {
          pieces[pieceIndex].count -= amount;
        } else {
          pieces[pieceIndex].count = 0;
        }
      }
      return { pieces };
    })
  }

  addPieceToBench(name, cost, amount = 1) {
    this.setState(prevState => {
      const bench = prevState.bench;
      const pieceIndex = bench.findIndex(unit => unit.name === name);
      if (pieceIndex !== -1) {
        bench[pieceIndex].count += amount;
      } else {
        bench.push({
          name,
          count: 1,
          cost
        })
      }
      return { bench };
    })
  }

  changeLevel(level = 1) {
    if (level >= 1 && level <= 10) {
      this.setState({ level });
    }
  }

  handlePick(name, cost, index) {
    this.addPieceToBench(name, cost);
    this.removePieceFromPool(name);
    this.disableCard(index);
  }

  rollOne() {
    const self = this;
    function getUnitCost() {
      let ranNum = Math.random();
      const chances = self.chancesPerLevel[self.state.level];

      for (let i = 1; i <= 5; i++) {
        if (ranNum <= chances[i]) {
          return i;
        }
        ranNum -= chances[i];
      }
    }

    const isIo = Math.random() <= 0.003;
    if (isIo) return { name: 'io', count: 0, cost: 5 };

    const unitCost = getUnitCost();
    let unitPoolPerCost = this.state.pieces.filter(piece => piece.cost === unitCost);
    unitPoolPerCost = unitPoolPerCost.filter(piece => !this.state.excludedPieces.includes(piece.name))

    const totalUnitsPerCost = unitPoolPerCost.reduce((acc, piece) => acc + piece.count, 0)

    let unitCounter = Math.floor(Math.random() * totalUnitsPerCost);

    for (let i = 0; i < unitPoolPerCost.length; i++) {
      if (unitCounter < unitPoolPerCost[i].count) {
        return {
          name: unitPoolPerCost[i].name,
          cost: unitPoolPerCost[i].cost
        };
      }
      unitCounter -= unitPoolPerCost[i].count
    }
  }

  rollFive() {
    const currentRoll = [0, 1, 2, 3, 4].map(el => this.rollOne())
    this.setState({ currentRoll });
  }

  renderUnitPool() {
    return this.state.pieces.map(unit => {
      return (
        <li onClick={() => this.removePieceFromPool()}>
          {unit.name}: {unit.count}
        </li>
      )
    })
  }

  renderBench() {
    return this.state.bench.map(unit => {
      return (
        <li>
          {unit.name}: {unit.count}
        </li>
      )
    })
  }

  renderRolls() {
    return this.state.currentRoll.map((el, index) => {
      return (
        <Roll handlePick={() => { this.handlePick(el.name, el.cost, index) }} chessPiece={el.name} cost={el.cost} display={el.display || 'inherit'}></Roll>
      )
    })
  }

  disableCard(index) {
    console.log(index, this.state);
    this.setState(prevState => {
      const currentRoll = prevState.currentRoll;
      currentRoll[index].display = 'none';
      console.log(index, currentRoll);
      return { currentRoll };
    })
  }

  renderLevelButtons() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => {
      if (el === this.state.level) {
        return (
          <Button active onClick={() => { this.changeLevel(el) }}>{el}</Button>
        )
      }
      return (
        <Button onClick={() => { this.changeLevel(el) }}>{el}</Button>
      )
    })
  }

  render() {
    return (
      <>
        <Row>
          <Col lg={8}>
            <Card style={{ margin: '2px' }}>
              <Card.Header className="justify-content-between">
                <ButtonToolbar className="justify-content-between">
                  <Button onClick={() => {this.rollFive()}}>Re-roll</Button>
                  <ButtonGroup className="mr-2" aria-label="First group">
                    {this.renderLevelButtons()}
                  </ButtonGroup>
                </ButtonToolbar>
              </Card.Header>
              <Row>
                {this.renderRolls()}
              </Row>
            </Card>
            <div>
              board+bench:
              <ul>
                {this.renderBench()}
              </ul>
            </div>
          </Col>
          <Col lg={4} style={{ backgroundColor: 'lightblue'}}>
            Will be able to modify unit pool here.
            <br></br>
            <ol>
              {this.renderUnitPool()}
            </ol>
          </Col>
        </Row>
      </>

    );
  }
}

export default App;
