import React, { useEffect, useState } from 'react';
import { ArrData } from "../utils/Data";

const ArrBase = () => {
    const [ AllData, setAllData ] = useState([]);
    const [ subjects, setSubjects ] = useState();
    const [ score, setScore ] = useState();


    //* HandleName
    const handleNameChange = (e) => {
        const index = e.target.value;
        setSubjects(AllData[+index].subject);
        setScore(null);
    };

    //* HandleSubject
    const handleSubChange = (e) => {
        const sub = e.target.value;
        setScore(subjects[sub]);
    };

    useEffect(() => {
        setAllData(ArrData);
    }, []);
    return (
        <div >

            {/* Mapping Student Name */ }
            { AllData && <select style={ { margin: '20px', fontSize: '20px' } } onChange={ (e) => handleNameChange(e) }>
                { AllData.map((st, index) => {
                    return (
                        <option value={ index } key={ st.stName }>
                            { st.stName }
                        </option>
                    );
                }) }
            </select> }

            {/* Mapping Subject */ }
            { subjects && <select style={ { margin: '20px', fontSize: '20px' } } onChange={ (e) => handleSubChange(e) }>
                { Object.keys(subjects).map((key) => {
                    return (
                        <option key={ key }>
                            { key }
                        </option>
                    );
                }) }
            </select> }

            {/* Score according to subject */ }
            { score && <select style={ { margin: '20px', fontSize: '20px' } }>
                <option> { score }</option>
            </select> }

        </div>
    );
};

export default ArrBase;