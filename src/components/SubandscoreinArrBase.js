import React, { useEffect, useState } from 'react';
import { subAndScoreInArray } from "../utils/Data";

const SubandscoreinArrBase = () => {
    const [ AllData, setAllData ] = useState([]);
    const [ subjects, setSubjects ] = useState([]);
    const [ score, setScore ] = useState([]);
    const [ scoreIndex, setScoreIndex ] = useState(null);


    //* HandleName
    const handleNameChange = (e) => {
        const index = e.target.value;
        setSubjects(AllData[ +index ].subject);
        setScore(AllData[ +index ].scores);
    };

    //* HandleSubject
    const handleSubChange = (e) => {
        const scIndex = e.target.value;
        setScoreIndex(+scIndex);
        console.log(scIndex, score);
    };


    useEffect(() => {
        setAllData(subAndScoreInArray);
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
            { subjects.length > 0 && <select style={ { margin: '20px', fontSize: '20px' } } onChange={ (e) => handleSubChange(e) }>
                { subjects.map((sub, index) => {
                    return (
                        <option key={ index } value={ index }>
                            { sub }
                        </option>
                    );
                }) }
            </select> }

            {/* Score according to subject */ }
            { scoreIndex  && <select style={ { margin: '20px', fontSize: '20px' } }>
                <option> { score[ scoreIndex ] }</option>
            </select> }

        </div>
    );
};

export default SubandscoreinArrBase;



