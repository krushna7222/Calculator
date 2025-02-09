import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./NewCalculator.css";

function NewCalculator() {
  const [input, setInput] = useState("");

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };
  const handleOnClick = (input) => {
    setInput((prev) => prev + input);
  };

  const showAnswer = () => {
    try {
      const ans = eval(input);
      setInput(ans.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const cutDigit = (prev) => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div className="cont">
      <div className="first-div">
        <h1 className="heading">CALCULATOR</h1>
        <hr />

        <input
          type="text"
          className="show"
          onChange={handleOnChange}
          readOnly
          value={input}
        />
      </div>
      <Container className="second-div">
        <Row>
          <Col>
            <Button className="sty" variant="info" onClick={() => setInput("")}>
              AC
            </Button>
          </Col>
          <Col>
            <Button className="sty" variant="info" onClick={cutDigit}>
              X
            </Button>
          </Col>
          <Col>
            <Button className="sty" variant="info">
              <sup>+</sup>/-
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="info"
              onClick={() => handleOnClick("/")}
            >
              /
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className="sty"
              variant="secondary"
              onClick={() => handleOnClick("7")}
            >
              7
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="secondary"
              onClick={() => handleOnClick("8")}
            >
              8
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="secondary"
              onClick={() => handleOnClick("9")}
            >
              9
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="info"
              onClick={() => handleOnClick("*")}
            ></Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className="sty"
              variant="secondary"
              onClick={() => handleOnClick("4")}
            >
              4
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="secondary"
              onClick={() => handleOnClick("5")}
            >
              5
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="secondary"
              onClick={() => handleOnClick("6")}
            >
              6
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="info"
              onClick={() => handleOnClick("-")}
            >
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className="sty"
              variant="secondary"
              onClick={() => handleOnClick("1")}
            >
              1
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="secondary"
              onClick={() => handleOnClick("2")}
            >
              2
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="secondary"
              onClick={() => handleOnClick("3")}
            >
              3
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="info"
              onClick={() => handleOnClick("+")}
            >
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="sty" variant="secondary">
              %
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="secondary"
              onClick={() => handleOnClick("0")}
            >
              0
            </Button>
          </Col>
          <Col>
            <Button
              className="sty"
              variant="secondary"
              onClick={() => handleOnClick(".")}
            >
              .
            </Button>
          </Col>
          <Col>
            <Button className="sty" variant="success" onClick={showAnswer}>
              =
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewCalculator;
