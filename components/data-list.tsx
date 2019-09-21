import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadExampleData } from '../redux/action'

interface Props {
  loadExampleData: () => {},
  exampleData: [],
  error: boolean,
  pending: boolean
}


class DataList extends Component<Props> {
  state = {
    isDataLoading: false
  }

  componentDidMount() {
    const { loadExampleData } = this.props
    const self = this

    this.setState({ isDataLoading: true })
    loadExampleData();
  }

  render() {
    const { exampleData, error, pending } = this.props


    return (
      <div>
        <h1>API DATA:</h1>
        {exampleData && !pending ? (
          <pre>
            <code>{JSON.stringify(exampleData, null, 2)}</code>
          </pre>
        ) : (
            <p style={{ color: 'blue' }}>Loading...</p>
          )}
        {error && <p style={{ color: 'red' }}>Error fetching data.</p>}
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  const { exampleData, error, pending } = state.clock
  return { exampleData, error, pending }
}

export default connect(
  mapStateToProps,
  { loadExampleData }
)(DataList)