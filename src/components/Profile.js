import React, { Component } from 'react';
import '../styles/styles.css';
import style from '../styles/Style.js';
import { Container, Row, Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class Profile extends Component {
    render() {
        return (
            <Container id="profile">
                <Container style={style.aboutMe.card}>
                    <Row className="justify-content-center">
                        <h3>Professional Profile</h3>
                    </Row> 
                    <Row>
                        <Table borderless>
                            <thead>
                                <tr>
                                    <th  style={style.profile.tableHead}>
                                        <FontAwesomeIcon icon={faBriefcase} size="2x"/><span style={style.profile.theSpan}>Experience {'(Teacher Assistant)'}</span> 
                                    </th>
                                    <th>
                                        <FontAwesomeIcon icon={faThumbsUp} size="2x"/><span style={style.profile.theSpan}>Personal Interests</span> 
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={style.profile.tableCont}><ul><li>Java Algorithmic and Object Oriented Programming 1</li></ul></td>
                                    <td style={style.profile.tableCont}><ul><li>Software Development</li></ul></td>
                                </tr>
                                <tr>
                                    <td style={style.profile.tableCont}><ul><li>Enterprise Architecture</li></ul></td>
                                    <td style={style.profile.tableCont}><ul><li>Corporate Finance</li></ul></td>
                                </tr>
                                <tr>
                                    <td style={style.profile.tableCont}><ul><li>Industrial Engineering's Aid for Freshmen Students</li></ul></td>
                                    <td style={style.profile.tableCont}><ul><li>Applied Optimization and Statistics</li></ul></td>
                                </tr>
                                <tr>
                                    <td style={style.profile.tableCont}><ul><li>Java Workshop</li></ul></td>
                                    <td style={style.profile.tableCont}><ul><li>Technological Infraestructure Development</li></ul></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>  
                </Container>
            </Container>
        );
    }
}

export default Profile;