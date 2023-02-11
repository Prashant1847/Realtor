import { apiCallBegan } from "./action";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
	}
};

const baseUrl = "https://bayut.p.rapidapi.com"
export const apiMiddleware = ({dispatch}) => (next) => async (action) =>{
    if(action.type !== apiCallBegan.type) return next(action)

    const {url, onSuccess, onError, onLoading} = action.payload

    dispatch({type: onError, payload: false})
    dispatch({type: onLoading, payload: true})

    try{
        const response = await fetch(baseUrl + url, options)
        if(!response.ok) throw new Error("Something went wrong");
        const data = await response.json()

        dispatch({type: onSuccess, payload: data})
    }catch(err){
        dispatch({type: onError, payload: true})
    }finally{
        dispatch({type: onLoading, payload: false})
    }
}