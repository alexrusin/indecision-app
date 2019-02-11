console.log("App.js is running");

const app = {
    title: 'Some Title',
    subTitle: 'This is subtitle'
};

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;

const addOne = () => {
    console.log('addOne');
}

const minusOne = () => {
    console.log('minusOne');
}

const reset = () => {
    console.log('reset');
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);