import { setDummyValue } from "redux/actions/dummyActions";
import React from "react";
import { connect } from "react-redux";
import Async from "components/shared/Async/Async";

import { fetchUser } from "redux/actions/dummyActions";

class Dummy extends React.Component(Props) {
  componentDidMount() {
    this.props.setDummyValue();
    this.props.fetchUser("5e51085724aa9a0007d9a7ec");
  }
  render() {
    const { uiState, error, user } = this.props.dummyReducer;
    return <Async uiState={uiState} error={error} onSuccess={() => <p>{"asd"}</p>} />;
  }
}
const mapStateToProps = state => {
  return {
    dummyReducer: state.dummyReducer,
  };
};

const mapDispatchToProps = {
  setDummyValue,
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dummy);
