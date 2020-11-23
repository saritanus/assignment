import React from  'react';
import Button from 'react-bootstrap/Button';
import "../css/Appliance.css";
import 'react-calendar/dist/Calendar.css';

class ApplianceForm extends React.Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state ={
            "isDeleted":false,
            "status":"NEW"
        }
    }

    serialNo = e => this.setState({serialNo:e.target.value})
    model = e => this.setState({model:e.target.value})
    brand = e => this.setState({brand:e.target.value})
    status = e => this.setState({status:e.target.value})
    purchaseDate = e => this.setState({purchaseDate:e.target.value})
 
    handleSubmit = (event) => {
        fetch('http://ec2-18-188-252-232.us-east-2.compute.amazonaws.com:8080/api/appliances', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
          }).then(function(response) {
            console.log(response)
          });
          event.preventDefault();
    }
    
    
    render(){
        return (
            <div>
                <br/>
                
                <form id="add-appliance" onSubmit={this.handleSubmit}>
                    <label>Serial No:&nbsp; </label> 
                    <input id="slNo"  type="text"  required onChange={this.serialNo}></input>&nbsp;&nbsp;
                  
                    <label>Brand:  </label>&nbsp;
                    <input id="brand"  type="text" required onChange={this.brand}></input>&nbsp;&nbsp;

                    <label>Model:  </label>&nbsp;
                    <input id="model"  type="text" required onChange={this.model}></input>&nbsp;&nbsp;

                    <label>Purchase Date:  </label>&nbsp;
                    <input id="purchaseDate"  type="date" required onChange={this.purchaseDate}></input>&nbsp;&nbsp;

                    <label>Select Status: </label>&nbsp;
                    <select id="status" name="status" value={this.state.status} 
                     required onChange={this.status}>
                        <option value="NEW">NEW</option>
                        <option value="OLD">OLD</option>
                        <option value="UNUSED">UNUSED</option>
                        <option value="SOLD">SOLD</option>
                    </select>&nbsp;&nbsp;&nbsp;


                    <Button variant="secondary" type="submit">Add</Button>
                </form>
            </div>
); }
}

export default ApplianceForm;