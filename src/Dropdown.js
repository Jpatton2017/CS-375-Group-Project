import React, { useState } from 'react';

function Dropdown({ title, items = [], multiSelect = false }) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    
    function handleOnClick(item) {}

    return (
        <div id="wrapper" className="dd-wrapper">
            <div id="status-actions"
                tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
                >
                    <div id="head-title" className="dd-header__title">
                        <p className="dd-header__title--bold">{title}</p>
                    </div>
                    <div id="header-action" className="dd-header__action">
                        <p>{open ? 'Close' : 'Open'}</p>
                    </div>
            </div>
            {open && (
                <ul className="dd-list">
                    {items.map(item => (
                        <li className="dd-list-item" key={item.id}>
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                                <span>Selected</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;