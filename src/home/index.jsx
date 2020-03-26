import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, minus, asyncAdd} from '../store/counter';

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>{this.props.num}</div>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
        <button onClick={this.props.asyncAdd}>async +</button>
      </div>
    );
  }
}
export default connect((state) => ({num: state.counter}), {
  add,
  minus,
  asyncAdd
})(Home);
