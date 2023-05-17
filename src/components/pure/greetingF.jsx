import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setage] = useState(24);

    const birtday = () => {
        setage(age+1)
    }

    return (
        <div>
                <h1>Aqui estoy dentro de render {props.name} desde function</h1>
                <h2>Aqui estoy con {age}</h2>
                <div>
                    <button onClick = {birtday}>
                        SUMA 1
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
   name: PropTypes.string
};


export default GreetingF;
