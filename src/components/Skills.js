import React, { Component } from 'react';
import '../styles/styles.css';
import style from '../styles/Style.js';
import { Container, Row } from 'react-bootstrap';
import * as d3 from 'd3';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderSkills: false,
            width: 0,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll);
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
    listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        const scrolled = winScroll/height;

        if (scrolled >= 0.06 && !this.state.renderSkills) {
            this.renderSkillsGraph();
            this.setState({
                renderSkills: true,
            });
        } else if (scrolled < 0.05 || scrolled >= 0.35) {
            d3.select(this.svg).selectAll("*").remove();
            this.setState({
                renderSkills: false,
            });
        }
    }

    updateWindowDimensions() {
        if (this.state.width !== window.innerWidth) {
            d3.select(this.svg).selectAll("*").remove();
            this.setState({
                width: window.innerWidth,
                renderSkills: false,
            });
        }
    }

    renderSkillsGraph() {
        const data = [
            {name: "Java", value: 96},
            {name: "AWS", value: 58},
            {name: "JavaScript", value: 66},
            {name: "Python", value: 42},
            {name: "HTML", value: 87},
            {name: "CSS", value: 75},
            {name: "VisualBasic", value: 50},
        ];

        var svg = d3.select(this.svg),
            margin = {top: 20, right: 20, bottom: 30, left: 80},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom;
  
        var tooltip = d3.select("body").append("div").attr("class", "toolTip");

        var x = d3.scaleLinear().range([0, width]);
        var y = d3.scaleBand().range([0, height]);

        var g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");       
                
        x.domain([0, 100]);
        y.domain(data.map(function(d) { return d.name; })).padding(0.1);

        g.append("g")
        .attr("class", "x axis")
       	.attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x).ticks(10).tickFormat(function(d) { return parseInt(d); }).tickSizeInner([-height]));
          
        g.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y));
  
      g.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("height", y.bandwidth())
          .attr("y", function(d) { return y(d.name); })
          .attr("width", function(d) { return x(0); })
          .attr("x", 0)
          .on("mousemove", function(d){
              tooltip
                .style("left", d3.event.pageX - 50 + "px")
                .style("top", d3.event.pageY - 70 + "px")
                .style("display", "inline-block")
                .html((d.name) + ": " + (d.value) + "%");
          })
        .on("mouseout", function(d){ tooltip.style("display", "none");});

        svg.selectAll("rect")
        .transition()
        .duration(1200)
        .attr("x", function(d) { return 0; })
        .attr("width", function(d) { return x(d.value); })
        .delay(function(d,i){ return(i*100) });
    }

    render() {
        return (
            <Container id="skills">
                <Container style={style.aboutMe.card}>
                    <Row className="justify-content-center">
                        <h3>Skills</h3>
                    </Row> 
                    <Row>
                        <svg 
                            width={this.state.width*0.7}
                            height="300" 
                            ref={(svg) => this.svg = svg} 
                        ></svg>
                    </Row>  
                </Container>
            </Container>
        );
    }
}

export default Skills;