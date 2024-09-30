import { useState } from 'react';
import Title from './Title';

function Esignature() {
    const [date, setDate] = useState('');
    const [text, setText] = useState('');

    function handleDateInput(params) {
        setDate(params.target.value);
    }

    function handleTextInput(params) {
        setText(params.target.value);
    }

    return (
        <div className='eSignatureContainer'>
            <Title text={text} />
            <Title text={date} />
            <p>
                Type in your signature and select date
            </p>
            <div>
                <input type="date" value={date} onChange={handleDateInput} />
                <input type="text" value={text} onChange={handleTextInput} />
            </div>
        </div>
    );
}

export default Esignature;
