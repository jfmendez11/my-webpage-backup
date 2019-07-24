import React, { Component } from 'react';
import '../styles/styles.css';
import style from '../styles/Style.js';
import { Container, Row, Image, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faGuitar, faFutbol, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import soad from '../public/system-of-a-down1.jpg';
import tallica from '../public/metallicaheavymontreal2017.jpg';
import deth from '../public/megadethmast-1.jpg';
import crime from '../public/04-A-Crime-On-Your-Hands.m4a';
import millos from '../public/millos.png';
import united from '../public/united.png';
import sele from '../public/seleccion.png';

class Hobbies extends Component {
    render() {
        return (
            <Container id="hobbies">
                <Container style={style.aboutMe.card}>
                    <Row className="justify-content-center">
                        <h3>Hobbies</h3>
                    </Row> 
                    <Row className="justify-content-center">
                        <h5>Besides software development, my two greatest passions in life are music and football.</h5>
                    </Row>
                    <hr/>
                    <Row className="justify-content-center">
                        <FontAwesomeIcon icon={faMusic} size="3x"/><span style={style.profile.tableHead} ><h4>Music</h4></span>
                    </Row>
                    <Row className="justify-content-center">
                        <h5>My favourite bands</h5>
                    </Row>   
                    <Row className="justify-content-center">
                        <Carousel>
                            <Carousel.Item>
                                <Image src={soad} style={style.hobbies.imagen} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={tallica} style={style.hobbies.imagen} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={deth} style={style.hobbies.imagen} />
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                        <FontAwesomeIcon icon={faGuitar} size="3x"/><span style={style.profile.tableHead} ><h5>I'm also the bass player in a band called Nightrise</h5></span>
                    </Row>
                    <Row className="justify-content-center">
                        <audio controls preload="none">
                            <source src={crime} type="audio/mp4" />
                            <p>Your browser does not support HTML5 audio.</p>
                        </audio>
                    </Row>
                    <hr/>
                    <Row className="justify-content-center">
                        <FontAwesomeIcon icon={faFutbol} size="3x"/><span style={style.profile.tableHead} ><h4>Football</h4></span>
                    </Row>
                    <Row className="justify-content-center">
                        <h5>My favourite teams</h5>
                    </Row>
                    <Row className="justify-content-center">
                        <Carousel>
                            <Carousel.Item>
                                <Image src={millos} style={style.hobbies.imagen2} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={united} style={style.hobbies.imagen2} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={sele} style={style.hobbies.imagen2} />
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                        <FontAwesomeIcon icon={faQuoteLeft} size="3x"/><span style={style.profile.tableHead} ><h5>Why I Love Football</h5></span>
                    </Row>
                    <Row className="justify-content-center">
                        <p className="text-justify" style={style.hobbies.text}>
                            Game after game after game, I realize now what is most important in my life: Football. 
                            Show me something more thrilling than a perfect volley. 
                            Tell me you’ve never dreamed the immaculate strike; that passionate moment when an entire nation holds its breath. 
                            Tell me that football is not our one common language when the whole planet stops for ninety minutes to be witness to that one thing we all understand. 
                            Yeah. You can tell me I’m wrong; some may say its just a game. But this is about heroes and tribes, loyalty and devotion. 
                            It's our commitment and our passion, our battle and our belief. 
                            This is our faith. Now, feel the fever of the crowd, hear the roar of the faithful. 
                            This is the beautiful game.
                        </p>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Hobbies;