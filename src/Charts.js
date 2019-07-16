import React, { Component } from "react";
import * as d3 from 'd3';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

class Charts extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

    axios.get(url).then(res => {
      const data = res.data;

      const height = 500,
        width = 700,
        margins = { top: 20, right: 100, bottom: 50, left: 50 };

      const chart = d3.select('.chart')
        .attr('width', width + margins.left + margins.right)
        .attr('height', height + margins.top + margins.bottom)
        .append('g')
        .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

      const fastestTime = d3.min(data, d => { return d.Seconds; });

      const xScale = d3.scaleLinear()
        .range([width, 0])
        .domain([0, d3.max(data, d => { return d.Seconds - fastestTime; }) + 5]);

      const yScale = d3.scaleLinear()
        .range([0, height])
        .domain([1, data.length + 1]);

      const dots = chart.selectAll('dot')
        .data(data)
        .enter().append('circle')
        .attr('r', 5)
        .attr('cx', d => { return xScale(d.Seconds - fastestTime); })
        .attr('cy', d => { return yScale(d.Place) })
        .style('fill', d => {
          if (d.Doping) {
            return 'indianred';
          } else {
            return 'lightgrey';
          }
        });

      const details = d3.select('.container').append('div')
        .attr('class', 'details')
        .html('Details');

      dots.on('mouseover', d => {
        details.html(
          d.Name + ' (' + d.Nationality + ')<br/>Time: ' +
          d.Time + ' Year: ' + d.Year + '<br/><br/>' + d.Doping)
          .style('opacity', 1);
      }).on('mouseout', () => {
        details.style('opacity', 0);
      });

      chart.selectAll('text')
        .data(data)
        .enter().append('text')
        .text(d => { return d.Name; })
        .attr('x', d => { return xScale(d.Seconds - fastestTime); })
        .attr('y', d => { return yScale(d.Place); })
        .attr('transform', 'translate(10,5)');

      chart.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(xScale));

      chart.append('g')
        .call(d3.axisLeft(yScale));

      chart.append('text')
        .style('font-size', '14px')
        .style('text-anchor', 'middle')
        .attr('x', width / 2)
        .attr('y', height + 50)
        .text('Seconds Behind Fastest Time')

      chart.append('text')
        .style('font-size', '14px')
        .style('text-anchor', 'middle')
        .attr('x', height / -2)
        .attr('y', -30)
        .attr('transform', 'rotate(-90)')
        .text('Ranking')
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Scatter Chart
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body><svg className='chart'></svg></Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            {/* <h2>Scatter Chart</h2>
            <svg className='chart'></svg> */}
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            {/* <h2>Line Chart</h2> */}
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Line Chart
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body><LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
              />
            </LineChart></Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>            
          </div>
        </div>
      </div>
    );
  }
}
export default Charts;