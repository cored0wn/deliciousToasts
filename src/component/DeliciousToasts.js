import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {deleteToast} from '../action/deliciousToasts';

import Toast from './Toast';

const DeliciousToasts = (props) => {
    const {deleteToast, toasts} = props;

    return (
        <ul className="toasts">
            {
                toasts.map(toast => {
                    const {id} = toast;

                    return (
                            <Toast key={id} onDismissClick={() => deleteToast(id)} {...toast} />
                    )
                })
            }
        </ul>
    )
};

DeliciousToasts.propTypes = {
    deleteToast: PropTypes.func.isRequired,

    toasts: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => (
    {
        toasts: state.deliciousToasts
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        deleteToast: (id) => {
            dispatch(deleteToast(id));
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(DeliciousToasts);
