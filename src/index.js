import React from 'react';
import ReactDOM from 'react-dom';

class CalcForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '', res: 0 };
        this.onChange = this.onChange.bind(this);
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
        this.mul = this.mul.bind(this);
        this.div = this.div.bind(this);
    }
    onChange(event) {
        const { name, value } = event.target;
        isNaN(value) ? alert([name] + ' is not a number') : this.setState({ [name]: Number(value) });
    }
    add() {
        return this.setState({ res: this.state.value1 + this.state.value2 });
    }
    sub() {
        return this.setState({ res: this.state.value1 - this.state.value2 });
    }
    mul() {
        return this.setState({ res: this.state.value1 * this.state.value2 });
    }
    div() {
        if (this.state.value2 !== 0) {
            this.setState({ res: this.state.value1 / this.state.value2 })
        } else {
            this.setState({ res: 'Error! Division by zero is not allowed!' });
            //alert('division by zero is not allowed');
        }
    }
    render() {
        return (
            <form>
                <label htmlFor="value1">value1:</label>
                <input name="value1" value={this.state.value1} onChange={this.onChange} />
                <br />
                <label htmlFor="value2">value2:</label>
                <input name="value2" value={this.state.value2} onChange={this.onChange} />
                <br />
                <button type="button" onClick={this.add}>+</button>
                <button type="button" onClick={this.sub}>-</button>
                <button type="button" onClick={this.mul}>*</button>
                <button type="button" onClick={this.div}>/</button>
                <br />
                Result: <b>{this.state.res}</b>
            </form>
        );
    }
}

ReactDOM.render(<CalcForm />, document.getElementById("div1"));
