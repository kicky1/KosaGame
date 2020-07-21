import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Ashe from "../images/Ashe.jpg";
import Zoe from "../images/Zoe.jpg";

class UserInterface extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><div className="playerBox">Gracz</div></Col>
                    <Col><div className="playerBox">Przeciwknik</div></Col>
                </Row>
                <Row>
                    <Col><img className="champion" src={Zoe} alt="Zoe" /></Col>
                    <Col><img className="champion" src={Ashe} alt="Ashe" /></Col>
                </Row>
            </Container>
        );
    }
}

export default UserInterface;
