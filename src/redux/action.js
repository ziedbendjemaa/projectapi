import { ADD_CARD, DELETE_CARD, EDIT_CARD, SET_MOVIE, SET_PHOTO } from "./actionType"




export const handelset=(payload)=>{
    return{
        type:SET_PHOTO,
        payload:payload
    }
}
export const handeldelte=(name)=>{
    return{
        type:DELETE_CARD,
        payload:name
    }
}
export const handeledit=(newone)=>{
    return{
        type:EDIT_CARD,
        payload:newone 

    }
}
export const handeladd=(newunivers)=>{
    return{
        type:ADD_CARD,
        payload:newunivers
    }
}


export  const handelSetMovie=(payload)=>{
    return{ type: SET_MOVIE,
        payload:payload}
   
}