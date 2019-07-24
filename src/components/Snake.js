import React, { Component } from 'react';
import '../styles/styles.css';
import style from '../styles/Style.js';
import { Container, Row } from 'react-bootstrap';
import * as d3 from 'd3';

const width = 500;
const height = 500;
const refreshRate = 110;
const directionVectors = {
    65: {x: -10, y: 0}, 37: {x: -10, y: 0},    // 'A' or Left Arrow
    87: {x: 0, y: -10}, 38: {x: 0, y: -10},    // 'W' or Up Arrow
    68: {x: 10, y: 0},  39: {x: 10, y: 0},     // 'D' or Right Arrow
    83: {x: 0, y: 10},  40: {x: 0, y: 10},     // 'S' or Down Arrow
};

function equalPoints(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

class Snake extends Component {
    constructor(props) {
        super(props);       
        this.state = {
            btnText: "Start Snake",
            interval: null,
            snake: [{x: width/2, y: height/2 - 10}, {x: width/2 - 10, y: height/2 - 10}],
            food: [],
            currentVector: {x: 10, y: 0},
        };
        this.onClickBtn = this.onClickBtn.bind(this);
        this.getFoodPosition = this.getFoodPosition.bind(this);
        this.startStop = this.startStop.bind(this);
        this.move = this.move.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(event) {
        event.preventDefault();
        let vector = directionVectors[event.keyCode];
        let currentVector = this.state.currentVector;

        if (!vector) return;

        if ((vector.x !== 0 && vector.x + currentVector.x === 0) || (vector.y !== 0 && vector.y + currentVector.y === 0)) {
            return;
        }

        this.setState({
            currentVector: vector,
        });
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
        this.setState({
            food: [this.getFoodPosition()],
        }, () => {
            this.update(this.state.snake, 'snake');
            this.update(this.state.food, 'food');
        });
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    getFoodPosition() {
        var p = null,
            valid = false;
        
        while (!valid) {
          p = {x: this.getRandomCoordinate(0, width-20), y: this.getRandomCoordinate(0, height-20)};
        
          valid = this.state.snake.every(function(point) {
            return !equalPoints(p, point);
          });
        }
        return p;
    }

    getRandomCoordinate(min, max) {
        var rand = Math.floor(Math.random() * (max - min + 1)) + min;
        return Math.round(rand/10) * 10;
    }

    update(data, classname) {
        var svg = d3.select(this.svg);
        var blocks = svg.selectAll('rect.'+classname)
            .data(data, function (d) {
                return JSON.stringify(d);
            });
        
        blocks.enter()
         .append('rect')
         .attr('class', classname)
         .attr('width', 10)
         .attr('height', 10)
         .attr('x', function(point) { return point.x; })
         .attr('y', function(point) { return point.y; });

         blocks.exit().remove();
    }

    startStop() {
        if (this.state.interval) {
            console.log('clearing interval');
            clearInterval(this.state.interval);
            this.setState({
                interval: null,
                btnText: "Start Snake",
                snake: [{x: width/2, y: height/2 - 10}, {x: width/2 - 10, y: height/2 - 10}],
                food: [this.getFoodPosition()],
                currentVector: {x: 10, y: 0},
            }, () => {
                this.update(this.state.snake, 'snake');
                this.update(this.state.food, 'food');
            });
        } else {
            console.log('starting interval');
            this.setState({
                interval: setInterval(this.move, refreshRate),
                btnText: "Restart",
            });
        }
    }

    move() {
        let head = this.addPoints(this.state.snake[0], this.state.currentVector);
        let foodArray = this.state.food;
        let snakeArray = this.state.snake;

        if (this.outOfBounds(head)) {
            this.startStop();
            return;
        }
        let collision = !this.state.snake.every(function(point) {
            return !equalPoints(head, point);
        });

        if (collision) {
            this.startStop();
            return;
        }

        if(equalPoints(head, this.state.food[0])) {        
            foodArray.pop();
            foodArray.push(this.getFoodPosition());
        } else {        
            snakeArray.pop();
        }

        snakeArray.unshift(head);
        this.setState({
            food: foodArray,
            snake: snakeArray,
        }, () => {
            this.update(this.state.snake, 'snake');
            this.update(this.state.food, 'food');
        });
    }

    addPoints(p1, p2) {
        return {x: p1.x + p2.x, y: p1.y + p2.y};
    }

    equalPoints(p1, p2) {
        return p1.x === p2.x && p1.y === p2.y;
    }

    outOfBounds(point) {
        return point.x < 0 || point.x >= width -10 || point.y < 0 || point.y >= height - 10;
    }

    onClickBtn() {
        this.startStop();
    }

    render() {
        return (
            <Container id="snake">
                <Container style={style.aboutMe.card}>
                    <Row className="justify-content-center">
                        <h3>Play Snake!</h3>
                    </Row> 
                    <Row className="justify-content-center">
                        <svg id="walls" height="500" width="500" ref={(svg) => this.svg = svg}></svg>
                    </Row>
                    <Row className="justify-content-center">
                        <button className="btn-profile" onClick={this.onClickBtn}>
                            {this.state.btnText}
                        </button> 
                    </Row>  
                </Container>
            </Container>
        );
    }
}

export default Snake;