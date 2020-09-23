import axios from "axios";

const baseUrl = "http://localhost:3030";

export function setBalance(balance) {
  return {
    type: "SET_BALANCE",
    payload: {
      balance,
    },
  };
}

export function setStatement(statement) {
  return {
    type: "SET_STATEMENT",
    payload: {
      statement,
    },
  };
}

export function setAccountId(accountId) {
  console.log('set accountId', accountId)
  return {
    type: "SET_ACCOUNT_ID",
    payload: {
      accountId,
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

export const getBalance = (userInfo) => async (dispatch) => {
  console.log('na balance action', userInfo)
  try {
    const balance = await axios.get(
      `${baseUrl}/banking/getBalance/${userInfo.accountId}`,
      {
        headers: {
          token: userInfo.accessToken,
        },
      }
    );

    console.log('balance action', balance)

    dispatch(setBalance(balance.data.balance));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const getStatement = (userInfo) => async (dispatch) => {
  try {
    const statement = await axios.get(
      `${baseUrl}/banking/getStatement/${userInfo.accountId}`,
      {
        headers: {
          token: userInfo.accessToken,
        },
      }
    );

    console.log('statement action', statement)

    dispatch(setStatement(statement.data.statement));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
