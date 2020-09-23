const initialState = {
    balance: 0,
    statement: [],
    accountId: null,
    error: undefined,
}

const banking = (state = initialState, action) => {
    console.log("banking reducer", action.payload)
    switch (action.type){
        case 'SET_BALANCE' : {
            return{
                ...state, balance: action.payload.balance
            }
        }
        case 'SET_STATEMENT' : {
            return{
                ...state, statement: action.payload.statement
            }
        }
        case 'SET_ACCOUNT_ID' : {
            return{
                ...state, accountId: action.payload.accountId
            }
        }
        case 'SET_ERROR' : {
            return{
                ...state, error: action.payload.error
            }
        }
        default:
            return state;
    }
}

export default banking