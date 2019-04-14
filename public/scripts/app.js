"use strict";

var app = {
    details: "Here are the details",
    showDetails: false
};

var onDetailsToggle = function onDetailsToggle() {
    app.showDetails = !app.showDetails;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { type: "button", onClick: onDetailsToggle },
            app.showDetails ? 'Hide Details' : 'Show Details'
        ),
        app.showDetails && React.createElement(
            "p",
            null,
            app.details
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
