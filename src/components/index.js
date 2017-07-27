import React from 'react';
import PropTypes from 'prop-types';

export default class Checkout extends React.Component {
    static propTypes = {
        marketPlace: PropTypes.bool.isRequired
    };

    static defaultProps = {
        marketPlace: false
    };

    render() {
        return false;
    }
}