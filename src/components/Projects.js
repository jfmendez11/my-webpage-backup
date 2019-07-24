import React, { Component } from 'react';
import '../styles/styles.css';
import style from '../styles/Style.js';
import { Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faReact, faAws, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';

class Projects extends Component {
    render() {
        return (
            <Container id="projects">
                <Container style={style.aboutMe.card}>
                    <Row className="justify-content-center">
                        <h3>Projects</h3>
                    </Row> 
                    <Row className="justify-content-center">
                        <Card style={style.projects.cardStyle}>
                          <Card.Body>
                            <Card.Title>Coltix Auctions</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Technologies: <FontAwesomeIcon icon={faNodeJs} size="1x" /> <FontAwesomeIcon icon={faReact} size="1x" /> <FontAwesomeIcon icon={faMeteor} size="1x" />
                            </Card.Subtitle>
                            <Card.Text className="text-justify">
                              Website where people can auction tickets for different events in Colombia.
                              The idea is that the seller, posts their remaining ticket and buyers bid until the 
                              deadline the seller specifies. However, a buy now price is included by the seller,
                              and the buyer can win the auction by bidding this price. A match between the seller
                              and the winner buyer is made.
                            </Card.Text>
                            <button className="btn-projects">
                                <a className="a-projects" href="https://github.com/jfmendez11/coltix-auctions" target="_blank" rel="noopener noreferrer">
                                    View Repo
                                </a>
                            </button>
                          </Card.Body>
                        </Card>
                        <Card style={style.projects.cardStyle}>
                          <Card.Body>
                            <Card.Title>SuperVoices</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                            Technologies: <FontAwesomeIcon icon={faNodeJs} size="1x" /> <FontAwesomeIcon icon={faReact} size="1x" /><FontAwesomeIcon icon={faPython} size="1x" /><FontAwesomeIcon icon={faAws} size="1x" />
                            </Card.Subtitle>
                            <Card.Text className="text-justify">
                              This project was made during the course Development Of Cloud Solutions. The idea is that 
                              companies can create contests for choosing an announcer for their ads. They send the an email
                              with a link to the contest, and participant can upload their voices. If the voice is in
                              a different format than MP3 a worker transforms it to MP3. An email is sent to the participant
                              when the voice has converted and also to the winner when the contest is over.
                            </Card.Text>
                            <button className="btn-projects">
                                <a className="a-projects" href="https://github.com/jfmendez11/Grupo10" target="_blank" rel="noopener noreferrer">
                                    View Repo
                                </a>
                            </button>
                          </Card.Body>
                        </Card>
                    </Row>  
                </Container>
            </Container>
        );
    }
}

export default Projects;