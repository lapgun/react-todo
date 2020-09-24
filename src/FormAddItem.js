import React, {Component} from 'react';

class FormAddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            level : 1

        }
    }
    componentDidMount = () => {
      this.handleSaveData();
    };
    handleEnterName = (event) => {
        this.setState({name : event.target.value});
    };
    handleChangeOptionState = (event) =>{
        this.setState({optionState : event.target.value });
    };
    handleSaveData = (event) => {
        this.props.save(this.state.name,  this.state.level);
        this.resetForm();
        // eslint-disable-next-line no-undef
        $('#exampleModal').modal('toggle');
    };
    resetForm = () => {
        this.setState({ Id: null, name: '', level: 0 });
    };
    render() {
        return (
            <div>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                    <i className="far fa-plus-square">
                        <span>Add User</span>
                    </i>
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Form Add User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Name: </label>
                                    <input type="text" className="form-control" id="exampleInputPassword1"
                                           placeholder="Enter Name"  value={this.state.name} onChange={this.handleEnterName}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Select Level: </label>
                                    <select className="custom-select" id="inputGroupSelect01" value={ this.state.level } onChange={this.handleChangeOptionState}>
                                        <option value="0">Disable</option>
                                        <option value="1">Approve</option>
                                        <option value="2">Cancel</option>
                                        <option value="3">Success</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.handleSaveData}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormAddItem;
