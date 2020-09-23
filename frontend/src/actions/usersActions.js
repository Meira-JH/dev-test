import { push } from "connected-react-router";
import { routes } from "../router";
import firebase from "firebase";
import axios from "axios";
import { setAccountId } from "./bankingActions";

const baseUrl = "http://localhost:3030";

export function setCurrentUser(currentUser) {
  console.log(currentUser)
  return {
    type: "SET_CURRENT_USER",
    payload: {
      currentUser,
    },
  };
}

export function setError(error) {
  return {
    type: "SET_ERROR",
    payload: {
      error,
    },
  };
}

export const logoutUser = () => async (dispatch) => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.error(error);
  }
  dispatch(setCurrentUser(undefined));
  dispatch(push(routes.root));
};

export const SignUpAction = (signUpInfo) => async (dispatch) => {
  try {
    const user = await axios.post(`${baseUrl}/user/signUp`, signUpInfo);
    console.log("access token sign up actino", user.accessToken)
    await axios.post(`${baseUrl}/banking/createAccount`, 
    {
      headers: {
        token: user.data.accessToken
      }
    })
    const account = await axios.get(`${baseUrl}/banking/getAccounts`, 
    {
      headers: {
        token: user.data.accessToken
      }
    })
    console.log("acc sign up actino", account.data.accountInfo.id)


    dispatch(setCurrentUser(user));
    console.log('currentUser setado')
    dispatch(setAccountId(account.data.accountInfo.id))
    console.log('acc setado')
    localStorage.setItem("accountId", account.data.accountId);
    localStorage.setItem("accessToken", user.data.accessToken);
    localStorage.setItem("refreshToken", user.data.refreshToken);
    dispatch(push(routes.user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const LoginAction = (loginInfo) => async (dispatch) => {
  try {
    const user = await axios.post(`${baseUrl}/user/login`, loginInfo);

    console.log(user);
    dispatch(setCurrentUser(user.data));
    localStorage.setItem("accessToken", user.data.accessToken);
    localStorage.setItem("refreshToken", user.data.refreshToken);
  } catch (error) {
    dispatch(setError(error.message));
  }
  try {
    const accessToken = localStorage.getItem('accessToken')
    const account = await axios.get(`${baseUrl}/banking/getAccounts`, 
    {
      headers: {
        token: accessToken
      }
    })

    console.log('conta', account.data, accessToken);
    dispatch(setAccountId(account.data.accountInfo.id))
    localStorage.setItem("accountId", account.data.accountInfo.id);
    dispatch(push(routes.user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
