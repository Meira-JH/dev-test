import React, { Fragment, useEffect } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import PageError from "../pages/PageError";
import UserPage from "../pages/UserPage";
import { connect } from "react-redux";
import { setCurrentUser } from "../actions/usersActions";

export const routes = {
  root: "/",
  signUp: "/signUp",
  login: "/login",
  user: "/user",
  error: "/error",
};

function Router(props) {


  return (
    <Fragment>
      <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={routes.user} component={UserPage} />
          <Route exact path={routes.signUp} component={SignUpPage} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.root} component={LandingPage} />
          <Route path={routes.error} component={PageError} />
        </Switch>
      </ConnectedRouter>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toSetCurrentUser: (signUpInfo) => dispatch(setCurrentUser(signUpInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
