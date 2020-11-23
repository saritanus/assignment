import React from 'react';
import Button from 'react-bootstrap/Button';
import "../css/Appliance.css";

const AddApplianceButton = props => {
    return (<Button variant="info" onClick={() => this.setState({showForm: true}) } >Add an Appliance</Button>);
}

export default AddApplianceButton;