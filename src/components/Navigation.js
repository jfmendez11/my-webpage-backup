import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../styles/styles.css';
import style from '../styles/Style.js';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'home',
            prevEvent: null,
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        const scrolled = winScroll/height;

        if (scrolled <= 0.1) this.setState({selected: 'home'});
        else if (scrolled > 0.1 && scrolled <= 0.2) this.setState({selected: 'profile'});
        else if (scrolled > 0.2 && scrolled <= 0.3) this.setState({selected: 'skills'});
        else if (scrolled > 0.3 && scrolled <= 0.5) this.setState({selected: 'projects'});
        else if (scrolled > 0.5 && scrolled <= 0.85) this.setState({selected: 'hobbies'});
        else if (scrolled > 0.85 && scrolled <= 0.95) this.setState({selected: 'contact'});
        else this.setState({selected: 'snake'});
    }

    handleSelect(key) {
        this.scrollTo(key);
        this.setState({
            selected: key,
        });
    }

    scrollTo(id, callback) {
        let timer = null;
        var settings = {
            duration: 1000,
            easing: {
                outQuint: function (x, t, b, c, d) {
                    return c*((t=t/d-1)*t*t*t*t + 1) + b;
                }
            }
        };
        var percentage;
        var startTime;
        var node = document.getElementById(id);
        var nodeTop = node.offsetTop;
        var nodeHeight = node.offsetHeight;
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        var windowHeight = window.innerHeight
        var offset = window.pageYOffset;
        var delta = nodeTop - offset;
        var bottomScrollableY = height - windowHeight;
        var targetY = (bottomScrollableY < delta) ?
            bottomScrollableY - (height - nodeTop - nodeHeight + offset):
            delta;
        startTime = Date.now();
        percentage = 0;
        if (timer) {
            clearInterval(timer);
        }
        function step () {
            var yScroll;
            var elapsed = Date.now() - startTime;
            if (elapsed > settings.duration) {
                clearTimeout(timer);
            }
            percentage = elapsed / settings.duration;
            if (percentage > 1) {
                clearTimeout(timer);
                if (callback) {
                    callback();
                }
            } else {
                yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                window.scrollTo(0, yScroll);
                timer = setTimeout(step, 10);     
            }
        }
        timer = setTimeout(step, 10);
    }

    render() {
        const trademark = '{JFM}';
        return (
            <Navbar collapseOnSelect expand="lg" sticky="top" style={style.navigation}>
              <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav onSelect={k => this.handleSelect(k)}>
                      <Nav.Link active={false} eventKey="home" href="#home" className={this.state.selected === 'home' ? 'activo' : ''}>About Me</Nav.Link>
                      <Nav.Link active={false} eventKey="profile" href="#profile" className={this.state.selected === 'profile' ? 'activo' : ''}>Professional Profile</Nav.Link>
                      <Nav.Link active={false} eventKey="skills" href="#skills" className={this.state.selected === 'skills' ? 'activo' : ''}>Skills</Nav.Link>
                      <Nav.Link active={false} eventKey="projects" href="#projects" className={this.state.selected === 'projects' ? 'activo' : ''}>Projects</Nav.Link>
                      <Nav.Link active={false} eventKey="hobbies" href="#hobbies" className={this.state.selected === 'hobbies' ? 'activo' : ''}>Hobbies</Nav.Link>
                      <Nav.Link active={false} eventKey="contact" href="#contact" className={this.state.selected === 'contact' ? 'activo' : ''}>Contact</Nav.Link>
                      <Nav.Link active={false} eventKey="snake" href="#snake" className={this.state.selected === 'snake' ? 'activo' : ''}>Play Snake!</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                  <Navbar.Brand href="#home" onClick={event => this.handleSelect("home")} className="navigation"><code>{trademark} JuanFelipeMéndez</code></Navbar.Brand>
              </Container>
            </Navbar>  
        );
    }
}

export default Navigation;