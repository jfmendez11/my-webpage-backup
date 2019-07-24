import React, { Component } from 'react';
import '../styles/styles.css';
import style from '../styles/Style.js';
import { Container, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
    render() {
        return (
            <Container id="contact">
                <Container style={style.aboutMe.card}>
                    <Row className="justify-content-center">
                        <h3>Contact</h3>
                    </Row> 
                    <Row className="text-center">
                        <Table responsive borderless>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="https://github.com/jfmendez11" className="contact-icon" target="_blank" rel="noopener noreferrer">
                                           <FontAwesomeIcon icon={faGithubSquare} size="7x"/> 
                                        </a>
                                    </td>
                                    <td>
                                        <a href="mailto:jf.mendez11@uniandes.edu.co" className="contact-icon" target="_blank" rel="noopener noreferrer">
                                           <FontAwesomeIcon icon={faEnvelope} size="7x"/> 
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="https://www.facebook.com/mendez.mfc95" className="contact-icon" target="_blank" rel="noopener noreferrer">
                                           <FontAwesomeIcon className="contact-icon" icon={faFacebookSquare} size="7x"/> 
                                        </a>
                                    </td>
                                    <td>
                                        <a href="https://twitter.com/jfmendez11" className="contact-icon" target="_blank" rel="noopener noreferrer">
                                           <FontAwesomeIcon icon={faTwitterSquare} size="7x"/> 
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Contact;