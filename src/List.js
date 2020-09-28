import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    handleDeleteItem = () => {
        this.props.delete(this.props.index);
    };
    handleEditItem = () => {
        this.props.edit(this.props.index);
    };
    render() {
        let index = this.props.index;
        let value = this.props.value;
        let setBadges = this.props.badges;
        let setTextByLevel = this.props.textByLevel;
        return (
            <tr>
                <td>
                    <a href="/#">
                        <div className="d-flex align-items-center">
                            <div className="avatar avatar-blue mr-3">EB{index}</div>

                            <div className="">
                                <p className="font-weight-bold mb-0">{value.name}</p>
                                <p className="text-muted mb-0">{value.name}@example.com</p>
                            </div>
                        </div>
                    </a>
                </td>
                <td>(784) 667 8768</td>
                <td>Designer</td>
                <td>09/04/1996</td>
                <td>
                    <div className={setBadges(value.level)}>{setTextByLevel(value.level)}</div>
                </td>
                <td>
                    <a href="/#" onClick={this.handleEditItem}><i className="fas fa-edit"/></a>
                    <a href="/#" className="margin" onClick={this.handleDeleteItem}><i className="fas fa-trash-alt"/></a>
                </td>
            </tr>
        );
    }
}

export default List;
