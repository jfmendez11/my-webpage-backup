import React, { Component } from 'react';
import '../styles/styles.css';
import style from '../styles/Style.js';
import { Row, Col, Image, Container, Table }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faMapMarkerAlt, faUniversity, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import profile from '../public/Captura de Pantalla 2019-07-15 a la(s) 11.03.21 a. m..png';
import cv from '../public/cv_mendez_juanfelipe.pdf';

class AboutMe extends Component {
    render() {
        return (
            <Container id="home">
                <Row className="justify-content-center">
                    <h1 style={style.aboutMe.header}>Juan Felipe Méndez Peralta</h1> 
                </Row>
                <Container style={style.aboutMe.card}>
                    <Row className="justify-content-center">
                        <h3>About Me</h3>
                    </Row> 
                    <Row>
                        <Col md={4}>
                            <Row>
                                <Col md={12}>
                                    <Image src={profile} style={style.aboutMe.profileImage}/>
                                </Col>
                                <Col md={{span: 11, offset: 1}} xs={{span: 11, offset: 1}}>
                                    <button className="btn-profile">
                                        <a className="a-projects" href={cv} target="_blank" rel="noopener noreferrer">
                                            View My CV
                                        </a>
                                    </button> 
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{span: 6, offset: 1}}>
                            <Table responsive >
                                <tbody>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faBirthdayCake} size="3x"/></td>
                                        <td><p style={style.aboutMe.info}>November 25th 1995</p></td>
                                    </tr>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faMapMarkerAlt} size="3x"/></td>
                                        <td><p style={style.aboutMe.info}>Bogotá, D.C., Colombia</p></td>
                                    </tr>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faUniversity} size="3x"/></td>
                                        <td><p style={style.aboutMe.info}>Universidad de Los Andes</p></td>
                                    </tr>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faLaptopCode} size="3x"/></td>
                                        <td>
                                            <ul>
                                                <li style={style.aboutMe.listIt}>Industrial Engineering</li>
                                                <li style={style.aboutMe.listIt}>Systems and Computing Engineering</li>
                                            </ul>
                                        </td>
                                    </tr>
                                  
                                </tbody>
                            </Table>
                        </Col>
                    </Row>  
                </Container>
            </Container>
        );
    }
}

export default AboutMe;