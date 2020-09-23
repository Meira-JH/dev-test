import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
  HeaderWrapper,
  OpenBanking,
  Login,
  ButtonWrapper,
  MenuContainer,
  Separation,
} from "./style";
import firebase from "firebase";
import CustomizedMenus from "../HiddenMenu";

const OBManifesto =
  "https://www.openbanking.org.uk/wp-content/uploads/Consumer-Manifesto-for-open-banking.pdf";

class HeaderLanding extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      uid: undefined,
    };
  }

  goTo = (route) => {
    switch (route) {
      case "/":
        return this.props.goToHome(route);
      case "/login":
        return this.props.goToLoginPage(route);
      default:
        return null;
    }
  };

  handleOnClick() {
    window.open(OBManifesto);
  }

  render() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return this.setState({
          uid: user.uid,
        });
      }
    });

    return (
      <HeaderWrapper size={this.props.size}>
        <ButtonWrapper>
          <MenuContainer>
            <CustomizedMenus />
          </MenuContainer>
          <OpenBanking onClick={this.handleOnClick}>
            <span>Open Banking?</span>
          </OpenBanking>
          <Separation />
          <Login onClick={() => this.props.goToSignUpPage()}>
            {" "}
            <span>SignUp</span>
          </Login>
          <Separation />
          <Login onClick={() => this.props.goToLoginPage()}>
            {" "}
            <span>Login</span>
          </Login>
        </ButtonWrapper>
      </HeaderWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLoginPage: () => dispatch(push(routes.login)),
    goToHome: () => dispatch(push(routes.root)),
    goToSignUpPage: () => dispatch(push(routes.signUp)),
  };
};

export default connect(null, mapDispatchToProps)(HeaderLanding);
