import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
  LoginPageWrapper,
  FormWrapper,
  LoginTextField,
  LoginButton,
  LoginLogo,
  Warning,
} from "./style";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  LoginAction,
  setCurrentUser,
  setError,
} from "../../actions/usersActions";
import Typography from "@material-ui/core/Typography";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
const accountId = localStorage.getItem("accountId");

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        cpf: "",
        password: "",
        device: navigator.userAgent,
        role: "user",
      },
      showPassword: false,
    };
  }

  componentDidMount() {
    if (accessToken && refreshToken) {
      this.props.toSetCurrentUser({
        accessToken,
        refreshToken,
      });
      this.props.goToUserPage();
    }
  }

  componentWillUnmount() {
    this.props.toSetError();
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "cpf") {
      let newCPF = value;
      newCPF = newCPF.replace(/\D/g, "");
      newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2");
      newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2");
      newCPF = newCPF.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      if (newCPF.length < 15) {
        this.setState({
          ...this.state,
          login: { ...this.state.login, cpf: newCPF },
        });
      }
    } else {
      this.setState({
        login: { ...this.state.login, [name]: value },
      });
    }
  };

  handleSubmmit = (event) => {
    event.preventDefault();

    this.props.toLogin(this.state.login);
  };

  render() {
    const errorMessages = {
      password: "The password is invalid or the user does not have a password.",
      email:
        "There is no user record corresponding to this identifier. The user may have been deleted.",
    };

    function errorRender(error) {
      switch (error) {
        case errorMessages.password: {
          return <Warning>Email ou senha inválidos</Warning>;
        }
        case errorMessages.email: {
          return <Warning>Email ou senha inválidos</Warning>;
        }
        default:
          return <Warning>Ops, aconteceu algo inesperado</Warning>;
      }
    }

    const LoginFormStructure = [
      {
        name: "cpf",
        type: "text",
        label: "Insira seu CPF",
        required: true,
        title: "O CPF deve ser válido",
        pattern: ".{1,}",
      },
      {
        name: "password",
        type: this.state.showPassword ? "text" : "password",
        label: "Insira sua senha",
        required: true,
        pattern: ".{6,}",
        title: "A senha deve ter pelo menos 6 caracteres",
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={this.handleClickShowPassword}
              edge="end"
            >
              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      },
    ];

    const LoginRenderMap = LoginFormStructure.map((input) => (
      <LoginTextField
        key={input.name}
        variant="outlined"
        name={input.name}
        type={input.type}
        label={
          <Typography variant={"subtitle2"} display={"inline"}>
            {" "}
            {input.label}{" "}
          </Typography>
        }
        value={this.state.login[input.name] || ""}
        required={input.required}
        onChange={this.handleInputChange}
        inputProps={{
          pattern: input.pattern,
          title: input.title,
        }}
        InputProps={{
          endAdornment: input.endAdornment,
        }}
      />
    ));

    return (
      <LoginPageWrapper>
        <Header location="login" />
        <FormWrapper onSubmit={this.handleSubmmit}>
          <LoginLogo src={require("../../img/2Link-symbol.png")} />
          {this.props.error ? errorRender(this.props.error) : ""}

          {LoginRenderMap}

          <LoginButton type="submit">Entrar</LoginButton>
        </FormWrapper>
        <Footer />
      </LoginPageWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.users.error,
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toSetCurrentUser: (signUpInfo) => dispatch(setCurrentUser(signUpInfo)),
    goToLandingPage: () => dispatch(push(routes.root)),
    goToUserPage: () => dispatch(push(routes.user)),
    toLogin: (LoginInfo) => dispatch(LoginAction(LoginInfo)),
    toSetError: () => dispatch(setError(undefined)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
