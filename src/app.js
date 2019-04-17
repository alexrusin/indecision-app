class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        
        this.state = {
            options: []
        };
        
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid vaule to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } else {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions} 
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
            
        );
    }
}

class Header extends React.Component {
   render() {
       return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
       );
   }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button type="button" disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <button type="button" onClick={this.props.handleDeleteOptions}>Remove All</button>
            
                <ol>
                {
                    this.props.options.map((option,index) => <Option key={index} option={option} />)
                }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {

    render() {
        return (
            <li key={this.props.index}>{this.props.option}</li>
        );
    }
}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return { error }
        });

        if (!error) { 
            e.target.elements.option.value = '';
        }
    }
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));