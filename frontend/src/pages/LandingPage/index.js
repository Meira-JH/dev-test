import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
  LandingPageWrapper,
  FirstBlock,
  SecondBlock,
  CardsWrapper,
  BankingCard,
  CardHeader,
  IconCard,
  CardTitle,
  CardBody,
  CardItems,
  IconItem,
  ItemText,
  CardButton,
  Logo,
} from "./style";
import xIcon from "../../img/criss-cross.svg";
import vIcon from "../../img/tick.svg";
import Footer from "../../components/Footer";
import HeaderLanding from "../../components/HeaderLanding";
import logo from "../../img/2Link-logo.png";

class LandingPage extends Component {
  componentDidMount() {
    if (this.props.currentUser) {
      if (this.props.currentUser.role === "ouvinte") {
        this.props.goToUserPage();
      }
      if (this.props.currentUser.role === "banda") {
        this.props.goToBandPage();
      }
      if (this.props.currentUser.role === "admin") {
        this.props.goToAdminPage();
      }
    }
  }
  componentDidUpdate() {
    if (this.props.currentUser) {
      if (this.props.currentUser.role === "ouvinte") {
        this.props.goToUserPage();
      }
      if (this.props.currentUser.role === "banda") {
        this.props.goToBandPage();
      }
      if (this.props.currentUser.role === "admin") {
        this.props.goToAdminPage();
      }
    }
  }

  render() {
    const banking = [
      {
        type: "open",
        name: "Open",
        title: "Banco 2Link",
        icon: vIcon,
        button: "Quero ser open!",
        description: [
          "Mais dinâmico",
          "Mais seguro",
          "Mais fácil",
          "Mais tranquilo",
        ],
      },
    ];

    const renderBankingCards = banking.map((banking, index) => (
      <BankingCard key={index}>
        <CardHeader>
          <IconCard predatory={banking.type}>
            <span>{banking.name}</span>
          </IconCard>
          <CardTitle> {banking.title} </CardTitle>
        </CardHeader>
        <CardBody>
          {banking.description.map((item, index) => (
            <CardItems key={index}>
              <IconItem src={banking.icon} />
              <ItemText> {item} </ItemText>
            </CardItems>
          ))}
        </CardBody>
        {banking.type === "open" ? (
          <CardButton onClick={() => this.props.goToSignUpPage()}>
            {banking.button}
          </CardButton>
        ) : (
          <CardButton disabled>{banking.button}</CardButton>
        )}
      </BankingCard>
    ));

    return (
        <LandingPageWrapper>
          <FirstBlock>
            <Logo src={logo} />
          </FirstBlock>
          <SecondBlock>
            <HeaderLanding />
            <CardsWrapper>{renderBankingCards}</CardsWrapper>
            <Footer />
          </SecondBlock>
        </LandingPageWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    goToSignUpPage: () => dispatch(push(routes.signUp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
