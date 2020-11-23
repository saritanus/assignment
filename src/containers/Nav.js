import React, { Component } from 'react';
import ApplianceForm from '../components/ApplianceForm'; 
import Button from 'react-bootstrap/Button';
import "../css/Appliance.css";

const url_delete = "http://ec2-18-188-252-232.us-east-2.compute.amazonaws.com:8080/api/appliances/all";

class Nav extends Component {
   state= { showForm: false}
   showForm = () =>{
       return (
            <ApplianceForm />
       );
   }

   handleDelete = ()  =>{
    fetch(url_delete,{
        method: 'DELETE'
    }).then(response =>
        response.json().then(json => {
          alert(json);
        })
      );
   }

    render(){
    return (
        <div className="button-margin">
            <br/>
            <span>
            <Button variant="info" onClick={() => this.setState({showForm: true}) } >
        Add an Appliance</Button>
            {this.state.showForm ? this.showForm() : null}
            </span>
            <span>
            &nbsp;
            &nbsp;
            <Button variant="danger" onClick={() => this.handleDelete()} >
        Delete old/unused/sold</Button>
            </span>
        </div>
    );
    }    
}
export default Nav;