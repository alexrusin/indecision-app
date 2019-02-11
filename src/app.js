console.log("app.js is running");

var app = {
    title: 'Some Title',
    subTitle: 'This is subtitle'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);


var user = {
    name: 'Alex', 
    age: 37,
    location: 'Los Angeles'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);