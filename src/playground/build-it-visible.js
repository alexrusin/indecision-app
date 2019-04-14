const app = {
    details: "Here are the details",
    showDetails: false
};

const onDetailsToggle = () => {
    app.showDetails = !app.showDetails
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button type="button" onClick={onDetailsToggle}>
            {app.showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {app.showDetails && <p>{app.details}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();