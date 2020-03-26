import React, {Component} from 'react';

class MyHome extends Component {
  componentDidMount() {
    this.props.store.subscribe(() => this.forceUpdate());
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div>{this.props.store.getState()}</div>
        <button onClick={() => this.props.store.dispatch({type: 'add'})}>+</button>
        {/* <button onClick={this.props.minus}>-</button>
        <button onClick={this.props.asyncAdd}>async +</button> */}
      </div>
    );
  }
}
export default MyHome;
