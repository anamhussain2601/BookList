
//state here is the state for which this reducer is responsible for 
export default function(state =  null, action){  // state= null : means when undefined.. set it to null.    

    switch(action.type)
    {
        case 'BOOK_SELECTED':
        return action.payload 
    }
 
    return state
}