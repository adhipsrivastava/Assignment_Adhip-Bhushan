import React, { Component } from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const techCompanies = [
{ label: "Apple", value: 1 },
{ label: "Facebook", value: 2 },
{ label: "Netflix", value: 3 },
{ label: "Tesla", value: 4 },
{ label: "Amazon", value: 5 },
{ label: "Alphabet", value: 6 },
];

class Inputs extends Component {
constructor(){
super();

this.state = {
black: true
}
this.state = {
color: 'black',
};
this.state = {value: ''};
this.onChange = this.onChange.bind(this)
}
changeColor(){
this.setState({black: !this.state.black})
}
onChange(e){
const reString = /^[a-z]+$/i;
const reNumber = /^-?[0-9]*\.?[0-9]*$/;
const reNegative = /^-.*$/;
if (e.target.value === '' || reString.test(e.target.value) || reNumber.test(e.target.value)) {
this.setState({value: e.target.value})
}
if (reNegative.test(e.target.value)) {
this.setState({
color: 'red'
});
}
if (!reNegative.test(e.target.value)) {
this.setState({
color: 'black'
});
}
}
render() {
let btn_class = this.state.black ? "redButton" : "defaultButton";
const styles = {
containerStyle: {
color: this.state.color,
}
};
const { containerStyle } = styles;
return (
<div className="container">
<div className="row">
<div className="col-md-3 col-sm-6 col-xs-12">
<Select options={techCompanies}
isMulti />
</div>
<div className="col-md-3 col-sm-6 col-xs-12 text-center">
<Form>
{['checkbox'].map(type => (
<div key={`default-${type}`} className="mb-3">
<Form.Check
type={type}
id={`default-${type}`}
label={`default ${type}`}
/>
</div>
))}
</Form>
</div>
<div className="col-md-3 col-sm-6 col-xs-12 literal-box">
<input style={containerStyle} value={this.state.value} onChange={this.onChange} placeholder="String or numeric literals only"/>
</div>
<div className="col-md-3 col-sm-6 col-xs-12">
<button className={btn_class} onClick={this.changeColor.bind(this)}>
Button
</button>
</div>
<div className="col-md-12 col-sm-12 col-xs-12">
<Accordion>
<Card>
<Card.Header>
<Accordion.Toggle as={Button} variant="link" eventKey="0">
I Expand
</Accordion.Toggle>
</Card.Header>
<Accordion.Collapse eventKey="0">
<Card.Body>Hello! I'm Accordion</Card.Body>
</Accordion.Collapse>
</Card>
</Accordion>
</div>
</div>
</div>
);
}
}

export default Inputs;