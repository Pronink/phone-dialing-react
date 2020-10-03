import React, {useState} from 'react';
import './App.scss';
import PulseDialingGenerator from "./DialingGenerator/PulseDialingGenerator";
import MultiToneDialingGenerator from "./DialingGenerator/MultiToneDialingGenerator";

function App() {
    let [dialingType, setDialingType] = useState('pulseDialing');
    let [numberArray, setNumberArray] = useState();

    const pulseDialingGenerator = new PulseDialingGenerator();
    const multiToneDialingGenerator = new MultiToneDialingGenerator();

    const reproduceNumber = (number: number | '*' | '#') => {
        if (dialingType === 'pulseDialing') {
            pulseDialingGenerator.reproduceNumber(number);
        } else if (dialingType === 'multiToneDialing') {
            multiToneDialingGenerator.reproduceNumber(number);
        }
    }

    const reproduceNumberArray = (fullNumber: string) => {
        if (dialingType === 'pulseDialing') {
            pulseDialingGenerator.reproduceNumberArray(fullNumber);
        } else if (dialingType === 'multiToneDialing') {
            multiToneDialingGenerator.reproduceNumberArray(fullNumber);
        }
    }

    return (
        <div className="App">
            <div>
                <input name="dialingType"
                       type="radio"
                       value="pulseDialing"
                       id="pulseDialing"
                       checked={dialingType === 'pulseDialing'}
                       onChange={() => setDialingType('pulseDialing')}/>
                <label htmlFor="pulseDialing">Pulse dialing</label>
            </div>
            <div>
                <input name="dialingType"
                       type="radio"
                       value="multiToneDialing"
                       id="multiToneDialing"
                       checked={dialingType === 'multiToneDialing'}
                       onChange={() => setDialingType('multiToneDialing')}/>
                <label htmlFor="multiToneDialing">Multi-tone dialing</label>
            </div>
            <table>
                <tr>
                    <td onClick={() => reproduceNumber(1)}><div>1</div></td>
                    <td onClick={() => reproduceNumber(2)}><div>2</div></td>
                    <td onClick={() => reproduceNumber(3)}><div>3</div></td>
                </tr>
                <tr>
                    <td onClick={() => reproduceNumber(4)}><div>4</div></td>
                    <td onClick={() => reproduceNumber(5)}><div>5</div></td>
                    <td onClick={() => reproduceNumber(6)}><div>6</div></td>
                </tr>
                <tr>
                    <td onClick={() => reproduceNumber(7)}><div>7</div></td>
                    <td onClick={() => reproduceNumber(8)}><div>8</div></td>
                    <td onClick={() => reproduceNumber(9)}><div>9</div></td>
                </tr>
                <tr>
                    <td onClick={() => reproduceNumber('*')}><div>*</div></td>
                    <td onClick={() => reproduceNumber(0)}><div>0</div></td>
                    <td onClick={() => reproduceNumber('#')}><div>#</div></td>
                </tr>
            </table>
            <input type="text" onChange={e => setNumberArray(e.target.value)} placeholder="Phone number"/>
            <button onClick={() => reproduceNumberArray(numberArray)}>Reproduces phone number</button>
        </div>
    );
}

export default App;
