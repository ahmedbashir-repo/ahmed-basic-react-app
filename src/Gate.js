import React from 'react';

const Gate = ({isOpen}) => (
    <div>
        The value of <strong>isOpen is: </strong> {isOpen ? "true" : "false"} <br/>
        <img src = {isOpen ? "./open.jpg" : "./close.jpg"} alt = {isOpen ? "Opened Gate" : "Closed Gate"}/>
    </div>
);

export default Gate;