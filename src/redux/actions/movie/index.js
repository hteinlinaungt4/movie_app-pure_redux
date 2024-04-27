import { Actiontypes } from "../actiontypes"

export const fetchmovie = (movies) =>{
    return {
        type : Actiontypes.Fetch,
        payload : movies
    }
}

export const selectedmovie = (movie) => {
    return {
        type : Actiontypes.Selected,
        payload : movie
    }
}
export const removemovie = () => {
    return {
        type : Actiontypes.Remove,
        payload : null
    }
}