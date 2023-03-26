import React from 'react';

function FruitCounter({classWrapperAttribute, counterValue, setCounterValue, classAttribute, valueAttribute}) {

    return (
        <div className={classWrapperAttribute}>
            <h2 className={classAttribute}>{valueAttribute}</h2>
            <button
                className={classAttribute}
                onClick={() => setCounterValue(curr => curr - 1)}
                disabled={ counterValue <= 0 && true}
            >-</button>
            <p className={classAttribute}>{counterValue}</p>
            <button
                className={classAttribute}
                onClick={() => setCounterValue(curr => curr +1)}
            >+</button>
        </div>
    );
}

export default FruitCounter;