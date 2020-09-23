import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
  SignUpPageWrapper,
  FormWrapper,
  SignUpTextField,
  SignUpButton,
  SignUpLogo,
  Warning,
} from "./style";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import { SignUpAction } from "../../actions/usersActions";
import { Typography } from "@material-ui/core";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { routes } from "../../router";

const accessTokenStorage = localStorage.getItem("accessToken");
const refreshTokenStorage = localStorage.getItem("refreshToken");

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: {
        name: "",
        password: "",
        cpf: "",
        birthdate: "",
        device: navigator.userAgent,
        role: "user",
      },
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
      passwordCompare: true,
    };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      const { accessToken, refreshToken } = this.props.currentUser;
      if (accessToken && refreshToken) {
        this.props.toSetCurrentUser({
          accessToken,
          refreshToken,
        });
        return this.props.goToUserPage();
      } else if (accessTokenStorage && refreshTokenStorage) {
        this.props.toSetCurrentUser({
          accessToken,
          refreshToken,
        });
        return this.props.goToUserPage();
      }
    }
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleClickShowConfirmPassword = () => {
    this.setState({ showConfirmPassword: !this.state.showConfirmPassword });
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
          signUp: { ...this.state.signUp, cpf: newCPF },
        });
      }
    } else if (name === "confirmPassword") {
      this.setState({
        ...this.state,
        [name]: value,
      });
    } else {
      this.setState({
        ...this.state,
        signUp: { ...this.state.signUp, [name]: value },
      });
    }
  };

  handleSubmmit = (event) => {
    event.preventDefault();

    if (this.state.signUp.password === this.state.confirmPassword) {
      console.log(this.state.signUp);
      this.props.toSignUp(this.state.signUp);
    } else {
      this.setState({ passwordCompare: false });
    }
  };

  render() {
    const signUpFormStructure = [
      {
        name: "name",
        type: "text",
        label: "Insira seu nome completo",
        required: true,
        pattern: ".{1,}",
        title: "O nome deve conter no mínimo 1 letra",
      },
      {
        name: "cpf",
        type: "text",
        label: "Insira seu CPF",
        required: true,
        title: "Insira um CPF válido",
        pattern: ".{1,}",
      },
      {
        name: "birthdate",
        type: "date",
        label: "",
        required: true,
        pattern: ".{1,}",
        title: "",
        labelProps: false,
      },
      {
        name: "password",
        type: this.state.showPassword ? "text" : "password",
        label: "Insira uma senha",
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
      {
        name: "confirmPassword",
        type: this.state.showConfirmPassword ? "text" : "password",
        label: "Repita sua senha",
        required: true,
        pattern: ".{6,}",
        title: "A senha deve ter pelo menos 6 caracteres",
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={this.handleClickShowConfirmPassword}
              edge="end"
            >
              {this.state.showConfirmPassword ? (
                <Visibility />
              ) : (
                <VisibilityOff />
              )}
            </IconButton>
          </InputAdornment>
        ),
      },
    ];

    const signUpRenderMap = signUpFormStructure.map((input) => (
      <SignUpTextField
        variant="outlined"
        key={input.name}
        name={input.name}
        type={input.type}
        label={
          <Typography variant={"subtitle2"} display={"inline"}>
            {" "}
            {input.label}{" "}
          </Typography>
        }
        value={
          (input.name === "confirmPassword"
            ? this.state[input.name]
            : this.state.signUp[input.name]) || ""
        }
        required={input.required}
        onChange={this.handleInputChange}
        inputProps={{
          pattern: input.pattern,
          title: input.title,
        }}
        InputProps={{
          endAdornment: input.endAdornment,
        }}
        InputLabelProps={{
          required: input.labelProps,
        }}
      />
    ));

    return (
      <SignUpPageWrapper>
        <Header />
        <FormWrapper onSubmit={this.handleSubmmit}>
          <SignUpLogo src={require("../../img/2Link-symbol.png")} />
          {this.props.error ? (
            <Warning>Houve um problema ao cadastrar</Warning>
          ) : (
            ""
          )}
          {this.state.passwordCompare ? (
            ""
          ) : (
            <Warning>As senhas não são iguais</Warning>
          )}

          {signUpRenderMap}

          <SignUpButton type="submit">Cadastrar</SignUpButton>
        </FormWrapper>
        <Footer />
      </SignUpPageWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.users.error,
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toSignUp: (signUpInfo) => dispatch(SignUpAction(signUpInfo)),
    goToUserPage: () => dispatch(push(routes.user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
