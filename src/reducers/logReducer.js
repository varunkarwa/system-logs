const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) =>{
    switch(action.type){
        case 'GET_LOGS':
            return{
                ...state,
                loading: false,
                logs: action.payload
            };
        case 'ADD_LOG':
            return{
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            };
        case 'DELETE_LOG':
            return{
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false
            };
        case 'UPDATE_LOG':
            return{
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading: true
            };
        case 'SET_CURRENT':
            return{
                ...state,
                current: action.payload
            };
        case 'CLEAR_CURRENT':
            return{
                ...state,
                current: null
            };
        case 'LOGS_ERROR':
            return {
                ...state,
                loading:false,
                error: action.payload
            };
        case 'SEARCH_LOGS':
            return{
                ...state,
                logs: action.payload
            };
        default:
            return state;
    }
}  