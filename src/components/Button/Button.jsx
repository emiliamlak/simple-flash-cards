import React from 'react';

import './Button.css';

const Button = ({ children, type, onClick }) => {

    const getButtonClasses = () => {
        switch (type) {
            case 'primary':
                return 'btn btn-primary';
            case 'secondary':
                return 'btn btn-secondary';
            default:
                return 'btn btn-primary';
        }
    };

    return (
        <button
            className={getButtonClasses()}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: 'primary',
};

export default Button;