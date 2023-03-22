import React from 'react';

function FruitCounter({classWrapperAttribute, counterValue, setCounterValue, classAttribute, valueAttribute}) {

    function addCounterValue() {
         return counterValue ++;
    }

    function minCounterValue() {
         return counterValue --;
    }

    return (
        <div className={classWrapperAttribute}>
            <h2 className={classAttribute}>{valueAttribute}</h2>
            <button
                className={classAttribute}
                onClick={() => counterValue >= 1 && setCounterValue(minCounterValue)}
            >-</button>
            <p className={classAttribute}>{counterValue}</p>
            <button
                className={classAttribute}
                onClick={() => setCounterValue(addCounterValue)}
            >+</button>
        </div>
    );
}

export default FruitCounter;