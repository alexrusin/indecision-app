class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
            details: 'These are details'
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
    }

    render() {
        return (
            <div>
               <h1>Visibility Toggle</h1>
               <button type="button" onClick={this.handleToggleVisibility}>
               {this.state.visibility ? 'Hide Details' : 'Show Details'}
               </button>
               {this.state.visibility && <p>{this.state.details}</p>}
           </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//     details: "Here are the details",
//     showDetails: false
// };

// const onDetailsToggle = () => {
//     app.showDetails = !app.showDetails
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button type="button" onClick={onDetailsToggle}>
//             {app.showDetails ? 'Hide Details' : 'Show Details'}
//             </button>
//             {app.showDetails && <p>{app.details}</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();