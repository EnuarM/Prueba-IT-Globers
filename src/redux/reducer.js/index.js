import { SAVE_EMAILS } from "../actions";

const initialState ={
    emails: []
}

export default function rootReducer(state = initialState, action) {

    switch(action.type){
        case SAVE_EMAILS: 
            let newEmail = action.payload;
        return {...state, emails:[...state.emails, newEmail]}

        default: return {...state}
    }
}