import React, {Component} from 'react';
import List from "./List";
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    setBadges = (level) => {
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
    };

    setTextByLevel = (level) => {
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
    };
    deleteItem = (task) =>{
        this.props.delete(task);
    };
    editItem = (task) =>{
        this.props.edit(task);
    };
    render() {
        let task = this.props.items.map((item, index) => {
            return (
                <List key={index} value={item} index={index} badges = {this.setBadges} textByLevel = { this.setTextByLevel} delete ={ this.deleteItem } edit ={ this.editItem }/>
            )
        });
        return (
            <tbody>
                {task}
            </tbody>
        );
    }
}

export default Item;
