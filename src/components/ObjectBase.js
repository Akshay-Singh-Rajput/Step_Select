import React, { useState } from 'react';
import { objData } from "../utils/Data";

const ObjectBase = () => {
    const [ subState, setSubState ] = useState();
    const [ subScore, setSubScore ] = useState();


    //* HandleName
    const handleNameChange = (e) => {
        const name = e.target.value;
        setSubState(objData[ name ].subject);
        setSubScore(null);
    };

    //* HandleSubject
    const handleSubChange = (e) => {
        const sub = e.target.value;
        setSubScore(subState[ sub ]);
    };
    return (
        <div >

            {/* Mapping Student Name */ }
            { objData && <select style={ { margin: '20px', fontSize: '20px' } } onChange={ (e) => handleNameChange(e) }>
                { Object.keys(objData).map((key) => {
                    return (
                        <option key={ key }>
                            { objData[ key ].stName }
                        </option>
                    );
                }) }
            </select> }

            {/* Mapping Subject */ }
            { subState && <select style={ { margin: '20px', fontSize: '20px' } } onChange={ (e) => handleSubChange(e) }>
                { Object.keys(subState).map((key) => {
                    return (
                        <option key={ key }>
                            { key }
                        </option>
                    );
                }) }
            </select> }

            {/* Score according to subject */ }
            { subScore && <select style={ { margin: '20px', fontSize: '20px' } }>
                <option> { subScore }</option>
            </select> }

        </div>
    );
};

export default ObjectBase;