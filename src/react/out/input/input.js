import React, {
    Component
} from 'react';

class input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value ? props.value : ''
        };
        this.handleingChange = this.handleingChange.bind(this);
    }
    render() {
        return (
            <input value={this.state.value} onChange={this.handleingChange} />
        );
    }

    handleingChange(change) {
        this.setState({
            value: change.target.value
        })
    }
}

export default input;
