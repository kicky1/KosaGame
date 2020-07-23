import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Ashe from "../images/Ashe.jpg";
import Zoe from "../images/Zoe.jpg";
import tlo from "../images/tlo.jpg";


class UserInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hp: 5,
            lvl:1,
            dmgOnClick:1,
            dmgPassive:0,
            gold:0,
            hpPotwora:4,
            goldPotwora:1,


        };
        // Poniższe wiązanie jest niezbędne do prawidłowego przekazania this przy wywołaniu funkcji
        this.dealDmg = this.dealDmg.bind(this);
        this.checkIfDead = this.checkIfDead.bind(this);
    }
    dmgOnClick = () => {                     /* ilość dmg na click */
        let { dmgOnClick, lvl} = this.state;
        dmgOnClick=lvl*21;
        this.setState({dmgOnClick});
    }
    dealDmg = () => {                       /*  zadaje obrażenia */
        let { hp , dmgOnClick} = this.state;
        hp = hp - dmgOnClick;
        this.setState({hp});
    }
    dealDmgPassive = () => {                /*  tu nie wiem jak zrobić dmg/s  */
        let { hp , dmgPassive} = this.state;
        hp = hp - setInterval(dmgPassive);
        this.setState({hp});
    }
    checkIfDead = () => {        /*  to nie działa nie wiem czemu */
        let { hp, gold, hpPotwora} = this.state;

        this.setState({hp, gold});
    }

    render() {
        return (

            <Container>
                <Row>
                    <Col><div className="goldbox">Gold:</div><div>{this.state.gold}</div></Col>
                    <Col><div className="dmgbox">Dmg/click:</div><div>{this.state.dmgOnClick}</div></Col>
                    <Col><div className="dmgbox">Dmg/s:</div><div>{this.state.dmgPassive} </div></Col>
                </Row>
                <Row>
                    <Col><img className="champion" src={Zoe} alt="Zoe" /><div>jakis kolo</div></Col>
                    <Col></Col>
                    <Col>
                        <div className="enemy">
                            <button className="attackbutton" onClick={this.dealDmg} onMouseLeave={this.state.hp<1 ? (this.state.gold=this.state.gold+1, this.state.hp=this.state.hpPotwora ): '' }>

                                    \* <img src={Ashe} alt="Ashe" />  */
                            </button>
                          <div >{this.state.hp} </div>
                        </div>
                        <div></div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UserInterface;
