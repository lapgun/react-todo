import React, {Component} from 'react';

class FormAddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: '',
            level: 1

        }
    }
    handleEnterName = (event) => {
        this.setState({name: event.target.value});
    };
    handleChangeOptionState = (event) => {
        this.setState({level: event.target.value});
    };
    handleSaveData = () => {
        this.props.save(this.state.name, this.state.level);
        this.resetForm();
    };
    resetForm = () => {
        this.setState({id: null, name: '', level: 0});
    };
    render() {
        return (
            <div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title align-center" id="exampleModalLabel">Form Add User</h5>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Name: </label>
                            <input type="text" className="form-control" id="exampleInputPassword1"
                                   placeholder="Enter Name" value={this.state.name} onChange={this.handleEnterName}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Select Level: </label>
                            <select className="custom-select" id="inputGroupSelect01" value={this.state.level}
                                    onChange={this.handleChangeOptionState}>
                                <option value="0">Disable</option>
                                <option value="1">Approve</option>
                                <option value="2">Cancel</option>
                                <option value="3">Success</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.handleSaveData}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormAddItem;
