import React from 'react';
import ReactDOM from 'react-dom';

class CalcForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value1: '', value1isValid: false, value2: '', value2isValid: false, res: 0 };
        this.onChange = this.onChange.bind(this);
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
        this.mul = this.mul.bind(this);
        this.div = this.div.bind(this);
    }
    value1isValid(value1) {
        if (!isNaN(value1)) {
            return true;
        }
        return false;
    }
    value2isValid(value2) {
        if (!isNaN(value2)) {
            return true;
        }
        return false;
    }
    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: Number(value) });
        if (name === 'value1') {
            this.setState({ value1isValid: this.value1isValid(Number(value)) });
        } else {
            this.setState({ value2isValid: this.value2isValid(Number(value)) });
        }
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
        return this.setState({ res: this.state.value1 / this.state.value2 });
    }
    render() {
        let val1Color = this.state.value1isValid ? 'blue' : 'red';
        let val2Color = this.state.value2isValid ? 'blue' : 'red';
        return (
            <form>
                <label htmlFor="value1">value1:</label>
                <input type="number" name="value1" value={this.state.value1} onChange={this.onChange} style={{ backgroundColor: val1Color }} />
                <br />
                <label htmlFor="value2">value2:</label>
                <input type="number" name="value2" value={this.state.value2} onChange={this.onChange} style={{ backgroundColor: val2Color }} />
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
