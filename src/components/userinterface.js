import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Ashe from "../images/Ashe.jpg";
import Zoe from "../images/Zoe.jpg";


class UserInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hp: 10,
            lvl:1,
            dmgOnClick:1,

        };
        // Poniższe wiązanie jest niezbędne do prawidłowego przekazania this przy wywołaniu funkcji
        this.dealDmg = this.dealDmg.bind(this);
    }
    dmgOnClick = () => {
        let { dmgOnClick, lvl} = this.state;
        dmgOnClick=lvl*21;
        this.setState({dmgOnClick});
    }
    dealDmg = () => {
        let { hp , dmgOnClick, lvl} = this.state;
        hp = hp - lvl*2;
        this.setState({dmgOnClick, hp});
    }



    render() {
        return (
            <Container>
                <Row>
                    <Col><div className="goldbox">Gold:</div><div>wartocs nwm jak </div></Col>
                    <Col><div className="dmgbox">Dmg/click:</div><div>{this.state.dmgOnClick}</div></Col>
                    <Col><div className="dmgbox">Dmg/s:</div><div>wartocs nwm jak </div></Col>
                </Row>
                <Row>
                    <Col><img className="champion" src={Zoe} alt="Zoe" /></Col>
                    <Col></Col>
                    <Col>
                        <div className="enemy">
                            <button className="attackbutton" onClick={this.dealDmg}>
                                \* <img src={Ashe} alt="Ashe" />  */
                            </button>
                           <div>{this.state.hp}</div>
                        </div>
                        <div>

                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UserInterface;
