import React, {
    Component
} from 'react';
class Cover extends Component {

    mainstyle = {
        height: "100%"
    }

    render() {
        return (
            <div style={this.mainstyle}>
                {this.props.children}
            </div>
        );
    }
}

export default Cover;
