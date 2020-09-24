import React, {Component} from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    setBadges(level) {
        // eslint-disable-next-line default-case
        switch (level) {
            case 0 :
                return 'badge badge-secondary';
            case 1 :
                return 'badge badge-primary';
            case 2 :
                return 'badge badge-danger';
            case 3 :
                return 'badge badge-success';
        }
    }

    setTextByLevel(level) {
        // eslint-disable-next-line default-case
        switch (level) {
            case 0 :
                return 'Disable';
            case 1 :
                return 'Approve';
            case 2 :
                return 'Cancel';
            case 3 :
                return 'Success';
        }
    }

    render() {
        let value = this.props.value;
        let index = this.props.index + 1;
        return (
            <tr>
                <td>
                    <a href="#">
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
                    <div className={this.setBadges(value.level)}>{this.setTextByLevel(value.level)}</div>
                </td>
                <td >
                    <a href=""><i className="fas fa-edit"/></a>
                    <a href="" className="margin"><i className="fas fa-trash-alt"/></a>
                </td>
            </tr>
        );
    }
}

export default Item;
