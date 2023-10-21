import Container from "react-bootstrap/Container";
import { Button, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useState } from "react";

let turn = 1;

export function Marco(params) {
  let [score1, setscore1] = useState(0);
  let [score2, setscore2] = useState(0);

  let x = "X";
  let o = "O";
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 6],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let initial_values = ["", "", "", "", "", "", "", "", ""];
  let [values, setcal] = useState(initial_values);
  async function check(vv) {
    /* if (vv[0] == x && vv[1] == x && vv[2] == x) {
      setscore1(++score1);
      await new Promise((r) => setTimeout(r, 500));
      setcal(initial_values);
      alert("Player 1 won " + vv[0]);
    }
    if (vv[0] == o && vv[1] == o && vv[2] == o) {
      setscore2(++score1);
      await new Promise((r) => setTimeout(r, 500));
      setcal(initial_values);
      alert("Player 1 won " + vv[0]);
    } */
    for (const winner of combos) {
      const [a, b, c] = winner;
      if (vv[a] != "" && vv[a] === vv[b] && vv[a] === vv[c]) {
        if (vv[a] === x) {
            setscore1(++score1);
          await new Promise((r) => setTimeout(r, 500));
          setcal(initial_values);
          alert("Player 1 won " + vv[0]);
        } else {
            setscore2(++score2);
          await new Promise((r) => setTimeout(r, 500));
          setcal(initial_values);
          alert("Player 1 won " + vv[0]);
        }
        alert("winner");
      }
    }
    for (let index = 0, cc = 0; index < vv.length; index++) {
      if (vv[index] != "") {
        cc++;
      }
      if (index == 7 && cc == 8) {
        await new Promise((r) => setTimeout(r, 500));

        setcal(initial_values);
      }
    }
  }
  function change_turn() {
    turn = turn === 1 ? 2 : 1;
  }
  function chamge(index, turn) {
    let next_values = values.map((c, i) => {
      if (i === index && c == "" && turn === 1) {
        change_turn();
        return (c = x);
      } else if (i === index && c == "" && turn === 2) {
        change_turn();
        return (c = o);
      } else return c;
    });
    setcal(next_values);
    check(next_values);
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>
            player 1 : {score1} -- player 2 : {score2}
          </h1>
        </Col>
      </Row>
      <Row className="Row">
        <Col className="Col">
          {" "}
          <Button
            className="butt"
            variant="primary"
            onClick={() => {
              chamge(0, turn);
            }}
          >
            {values[0]}
          </Button>
        </Col>

        <Col className="Col">
          {" "}
          <Button
            className="butt"
            variant="primary"
            onClick={() => {
              chamge(1, turn);
            }}
          >
            {values[1]}
          </Button>
        </Col>
        <Col className="Col">
          <Button
            className="butt"
            variant="primary"
            onClick={() => {
              chamge(2, turn);
            }}
          >
            {values[2]}{" "}
          </Button>{" "}
        </Col>
      </Row>

      <Row className="Row">
        <Col className="Col">
          {" "}
          <Button
            className="butt"
            variant="primary"
            onClick={() => {
              chamge(3, turn);
            }}
          >
            {values[3]}
          </Button>{" "}
        </Col>
        <Col className="Col">
          {" "}
          <Button
            className="butt"
            variant="primary"
            onClick={() => {
              chamge(4, turn);
            }}
          >
            {values[4]}
          </Button>{" "}
        </Col>
        <Col className="Col">
          {" "}
          <Button
            className="butt"
            variant="primary"
            onClick={() => {
              chamge(5, turn);
            }}
          >
            {values[5]}
          </Button>{" "}
        </Col>
      </Row>
      <Row className="Row">
        <Col className="Col">
          <Button
            className="butt"
            variant="primary"
            onClick={() => {
              chamge(6, turn);
            }}
          >
            {values[6]}
          </Button>{" "}
        </Col>
        <Col className="Col">
          <Button
            className="butt"
            variant="primary"
            onClick={() => {
              chamge(7, turn);
            }}
          >
            {values[7]}
          </Button>{" "}
        </Col>
        <Col className="Col">
          <Button
            className="butt"
            variant="primary"
            onClick={() => {
              chamge(8, turn);
            }}
          >
            {values[8]}
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}
