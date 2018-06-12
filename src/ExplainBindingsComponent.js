import React, { Component } from 'react';
class ExplainBindingsComponent extends Component {
    constructor() {
        super();
        this.onClickMe = this.onClickMe.bind(this);
    }
    onClickMe() {
        console.log(this);
    }
    //Last but not least, it is worth to mention that class methods can be autobound automatically without
    //binding them explicitly by using JavaScript ES6 arrow functions.
    onClickYou = () => {
        console.log(this);
    }
    render() {
        return (
            <div>
            <button
                onClick={this.onClickMe}
                type="button"
            >
                Click Me
            </button>

            <button
                onClick={this.onClickYou}
                type="button"
            >
                Click you
            </button>
            </div>
        );
    }
}

export default ExplainBindingsComponent;