import { ADD_CARD, DELETE_CARD, EDIT_CARD, SET_DATA, SET_MOVIE, SET_PHOTO } from "./actionType"




let initialState={
    photo:[]}
let init={
    movie:[]
}



export const reducerphoto=(state=initialState,{type,payload})=>{
switch (type) {
    case SET_PHOTO:
        return{
            ...state,photo:payload
        }
        case DELETE_CARD:
            return{
                ...state,photo:state.photo.filter(el=>el.name!==payload)
            }
            case EDIT_CARD:
                return{
                    ...state,photo:state.photo.map((el)=>el.name===payload.name?({...el,...payload}):el)
                }
       case ADD_CARD:
           return{
               ...state,photo:[...state.photo,payload]
           }

    default:
        return state
}
}

export const reducerMovie =(state=init, {type,payload} )=>
{
    switch (type) {
        case SET_MOVIE:  
    return{
        ...state,movie:payload
    }
        default:
            return state;
    }}

