import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore (initialState){

    // Add support for Redux dev tools on Chrome
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
            rootReducer,
            initialState,
            composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())), // we need to add the () because reduxImmutableStateInvariant is a function
    );

}