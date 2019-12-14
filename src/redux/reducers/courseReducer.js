// All reducers accept the state and an action as arguments
export default function courseReducer(state = [], action) {

    switch(action.type){

        // Whatever is returned from the reducer becomes the new state
        case "CREATE_COURSE":
            return [...state, {...action.course}];
        default:
            return state;

    }

}