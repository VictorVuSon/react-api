import React, { Component } from 'react';

class SuccessAlert extends Component {
    render() {
        const {message} = this.props;
        if (message) {
            const className = `alert alert-success`;
            return (
                <div className={className}>
                    <strong>{message}</strong>
                </div>
            );
        }
        return null;
    }
}

export default SuccessAlert;
