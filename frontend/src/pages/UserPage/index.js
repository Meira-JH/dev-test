import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import LoadingRing from "../../components/LoadingRing";
import {
  UserPageWrapper,
  FirstBlock,
  SecondBlock,
  CardsWrapper,
  Logo,
  BankingCard
} from "./style";
import logo from "../../img/2Link-logo.png";
import { setCurrentUser } from "../../actions/usersActions";
import CustomizedTimeline from "../../components/Timeline";
import SimpleAccordion from "../../components/BalanceAcordion";
import { getBalance, getStatement } from "../../actions/bankingActions";

const accessTokenStorage = localStorage.getItem("accessToken")
const refreshTokenStorage = localStorage.getItem("refreshToken")
const accountIdStorage = localStorage.getItem('accountId')



class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  componentDidMount() {
    const {accessToken, refreshToken} = this.props.currentUser
    const {accountId} = this.props.accountId
    if(accessToken){
      this.props.toGetBalance({accountId, accessToken})
      this.props.toGetStatement({accountId, accessToken})
      this.props.toSetCurrentUser({
        accessToken, refreshToken
      });
    }

    if (!accessToken || !refreshToken) {
      this.props.goToLoginPage();
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        {this.props.currentUser ? (
          <UserPageWrapper>
            <FirstBlock>
              <Logo src={logo} />
            </FirstBlock>
            <SecondBlock>
              <CardsWrapper>
                <BankingCard>
                  <CustomizedTimeline statement={this.props.statement} />
                </BankingCard>{" "}
              </CardsWrapper>
              <div></div>
              <SimpleAccordion balance={this.props.balance} />
            </SecondBlock>
          </UserPageWrapper>
        ) : (
          <LoadingRing />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  accountId: state.banking.accountId,
  balance: state.banking.balance,
  statement: state.banking.statement
});

const mapDispatchToProps = (dispatch) => {
  return {
    goToLoginPage: () => dispatch(push(routes.login)),
    toSetCurrentUser: (signUpInfo) => dispatch(setCurrentUser(signUpInfo)),
    toGetBalance: (accountInfo) => dispatch(getBalance(accountInfo)),
    toGetStatement: (accountInfo) => dispatch(getStatement(accountInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
