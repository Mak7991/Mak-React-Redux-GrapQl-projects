import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// components
import Async from "components/shared/Async/Async";

//actions
import { validateUser } from "redux/actions/loginActions";
import MoudleRouter from "modules/MoudleRouter";

class ProtectedRoutes extends React.Component {
  componentDidMount() {
    this.props.validateUser();
  }

  render() {
    const { uiState, error, user } = this.props.login;
    return (
      <Async
        uiState={uiState}
        error={error}
        onSuccess={() => <MoudleRouter role={user.role} />}
        onFailure={() => <Redirect to="/auth/login" />}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = {
  validateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes);
