import React from 'react'
import Header from "../_hoc/Header";
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../redux/action'
import Example from "../components/example";

class Home extends React.Component {




  render() {
    return (
      <React.Fragment>
        <Header title="home">

        </Header>

        <div className="container">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>

        <Example />
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = { startClock }
export default connect(
  null,
  mapDispatchToProps
)(Home)
