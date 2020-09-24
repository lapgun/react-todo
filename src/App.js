import React, {Component} from 'react';
import './App.css';
import data from "./data";
import Item from './Item';
import FormAddItem from "./FormAddItem";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : data,
        }
    }
    addNewTask = (taskName, taskLevel) => {
        console.log(this.state.items.items);
        // this.state.items.items.push({'name' : taskName, 'level' : taskLevel });
    };
    render() {
        let items = this.state.items.items;
        let task = items.map((item, index) => {
            return (<Item key={index} index={index} value={item} />)
        });
        let formAdd =  <FormAddItem save = {this.addNewTask} />
        return (
            <div className="container">
                <div className="row py-5">
                    <div className="col-12">
                        {formAdd}
                        <table id="example" className="table table-hover responsive nowrap">
                            <thead>
                            <tr>
                                <th>Client Name</th>
                                <th>Phone Number</th>
                                <th>Profession</th>
                                <th>Date of Birth</th>
                                <th>App Access</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                {task}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
