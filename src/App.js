import React, {Component} from 'react';
import './App.css';
import data from "./data";
import Item from './Item';
import FormAddItem from "./FormAddItem";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTask : data.items,
            items : []
        }
    }
    addNewTask = (taskName, taskLevel) => {
        let listTask = this.state.listTask;
        let itemId = listTask.length + 1;
        let data = { "id":itemId,
            "name" : taskName,
            "level" : taskLevel
        };
        listTask.push(data);
        this.setState({items : listTask })
    };
    render() {
        let items = this.state.items;
        let formAdd =  <FormAddItem save = {this.addNewTask} />;
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
                            <Item items = {items} />
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
