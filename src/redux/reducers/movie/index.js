import { Actiontypes } from "../../actions/actiontypes"

const initialState = {
    movies : [],
    movie  : {}
}

export const moviereducer = (state = initialState,{type,payload}) =>{

    switch (type) {
        case Actiontypes.Fetch :
            return {
                ...state,
                movies : payload
            }
        case Actiontypes.Selected :
            return {
                ...state,
                movie : payload
            }
            case Actiontypes.Remove :
                return {
                    ...state,
                    movie : {}
                }
    
        default: return state
    }
}