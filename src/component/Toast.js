import React from 'react';
import PropTypes from 'prop-types';

class Toast extends React.Component {
    constructor (props) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { message, color, icon, onDismissClick } = this.props;
        return(
            <li className={"toast" + (color?' bg-' +color:'')}>
                {
                    icon ? (
                        <div className="mr-3 d-flex align-items-center" style={{'height': '30px','maxWidth':'30px'}}>{icon}</div>
                    ) : ''
                }
                <p className="toast__content">
                    { message }
                </p>
                <button className="btn btn-link ml-auto align-self-center text-light toast__dismiss"
                        onClick={onDismissClick}
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </li>
        )
    }
}

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.element,

    onDismissClick: PropTypes.func.isRequired,
};

export default Toast;
