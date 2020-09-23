const initialState = {
    currentUser: null,
    error: undefined,
}

const users = (state = initialState, action) => {
    console.log("users reducer", action.payload)
    switch (action.type){
        case 'SET_CURRENT_USER' : {
            return{
                ...state, currentUser: action.payload.currentUser
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

export default users