let count = 0;

const addOne = () => {
    count++;
    rednerCounterApp();
   
};

const minusOne = () => {
    count--;
    rednerCounterApp();
};

const reset = () => {
    count = 0;
    rednerCounterApp();
};

const appRoot = document.getElementById('app');

const rednerCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

rednerCounterApp();