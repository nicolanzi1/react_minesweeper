import React from 'react';
import ReactDOM from 'react-dom';

function Game() {
    return (
        <div>
            <h1>This is working!</h1>
        </div>
    )
}

document.addEventListener("DOMContentLoaded",() => {
    ReactDOM.render(<Game />, document.getElementById('main'));
})