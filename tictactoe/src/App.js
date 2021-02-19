import React, { useState } from "react";
import {
    Row,
    Col,
    Div,
    DropdownButton,
    Dropdown,
    ButtonGroup,
    Container,
} from "react-bootstrap";
import "./App.css";
import Grid from "./Components/grid/Grid";
import RestartButton from "./Components/Buttons/RestartButton";
import Score from "./Components/score/Score";
import RestartScoreButton from "./Components/Buttons/RestartScoreButton";

const App = () => {
    const [grid, setGrid] = useState({
        //0 is nothing, 1 cross and 2 circle
        A1: 0,
        A2: 0,
        A3: 0,

        B1: 0,
        B2: 0,
        B3: 0,

        C1: 0,
        C2: 0,
        C3: 0,
    });
    const [currentPlayer, setCurrentPlayer] = useState(true); //true is the player, false is the machine
    const [line, setLine] = useState([false]);
    const [score, setScore] = useState([0, 0, 0]);
    const [draw, setDraw] = useState(false);
    const [mode, setMode] = useState("Medium");
    return (
        <div className="App">
            <header className="App-header">
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col lg={4}></Col>
                        <Col lg={4} xs={9} fluid="md">
                            <Row className="App-header-stuff justify-content-center">
                                <Col>
                                    <p className="h1">Tic-tac-toe</p>
                                </Col>
                                <Col>
                                    <RestartButton
                                        setGrid={setGrid}
                                        setLine={setLine}
                                        setCurrentPlayer={setCurrentPlayer}
                                        setDraw={setDraw}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Grid
                                    grid={grid}
                                    click={setGrid}
                                    currentPlayer={currentPlayer}
                                    setCurrentPlayer={setCurrentPlayer}
                                    line={line}
                                    setLine={setLine}
                                    score={score}
                                    setScore={setScore}
                                    draw={draw}
                                    setDraw={setDraw}
                                    mode={mode}
                                />
                            </Row>
                            <Row>
                                <Score score={score} />
                            </Row>
                            <Row>
                                <Col>
                                    <div className="mb-2">
                                        <DropdownButton
                                            as={ButtonGroup}
                                            key={"up"}
                                            id={"dropdown-button-drop-up"}
                                            drop={"up"}
                                            variant="outline-primary"
                                            title={mode}
                                            size="lg"
                                        >
                                            <Dropdown.Item
                                                eventKey="1"
                                                onClick={() => setMode("Easy")}
                                            >
                                                Easy
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                eventKey="2"
                                                onClick={() =>
                                                    setMode("Medium")
                                                }
                                            >
                                                Medium
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                eventKey="3"
                                                onClick={() =>
                                                    setMode("Impossible")
                                                }
                                            >
                                                Impossible
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </Col>
                                <Col>
                                    <RestartScoreButton setScore={setScore} />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4}></Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
};
export default App;
