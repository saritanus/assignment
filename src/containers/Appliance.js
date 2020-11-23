import React from 'react';
import '../css/Appliance.css';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "../css/Appliance.css";

const url = "http://ec2-18-188-252-232.us-east-2.compute.amazonaws.com:8080/api/appliances";

class ApplianceList extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.state ={
            loading: false,
            data: [],
            isOpen: false
        }
    }

    componentDidMount() {
		this.setState({loading: true})
		fetch(url)
			.then(data => data.json())
			.then(data => this.setState({data, loading: false}))
	}

	componentDidUpdate() {
		console.log("The component just updated")
    }
    
    handleDelete = (id)  =>{
        console.log("Appliance id is", id)
        fetch(url + '/' + id ,{
            method: 'DELETE'
        }).then(response =>
            response.json().then(json => {
              alert(json);
            })
          );
     }
    
    render() {
       
        return (
           
            <div>
                 <br/>
                <br/>
                {this.state.loading 
					? "loading..."
					: <div>
                        <Table id="appliances" size="sm">
                        <thead>
                            <tr>
                            <th>Serial No.</th>
                            <th>Model</th>
                            <th>Brand</th>
                            <th>Purchase Date</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        
						{this.state.data.map(appliance => {
                            return (
                                <tr>
                                <td>{appliance.serialNo}</td>
                                <td>{appliance.model}</td>
                                <td>{appliance.brand}</td>
                                <td>{appliance.purchaseDate}</td>
                                <td>{appliance.status}</td>
                                <td><Button variant="primary" >Edit</Button></td>
                                {this.state.showForm ? this.showForm() : null}
                                <td hidden> key = {appliance.id}</td>
                                <td><Button variant="danger" 
                                 onClick={() => this.handleDelete(appliance.id)} >Delete</Button></td>
                                
                               </tr>
							)
						})}
						</tbody>
                        </Table>
                        
					</div>
                    
				}
                
            </div>
        )
    }

}   

export default ApplianceList;