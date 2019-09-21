import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementCount, decrementCount, resetCount } from '../redux/action'

interface Props {
  incrementCount: () => {},
  decrementCount: () => {},
  resetCount: () => {},
  count: number
}

class Counter extends Component<Props> {
  increment = () => {
    const { incrementCount } = this.props
    incrementCount()
  }

  decrement = () => {
    const { decrementCount } = this.props
    decrementCount()
  }

  reset = () => {
    const { resetCount } = this.props
    resetCount()
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { count } = state.clock
  return { count }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCount, decrementCount, resetCount }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)