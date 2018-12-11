import { createStore, combineReducers, Middleware, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { dishes } from './dishes';
import { comments } from './comments';
import { promotions } from './promotions';
import { leaders } from './leaders';

export const ConfigureStore = () =>{
    const store = createStore( 
        combineReducers({
        dishes,
        comments,
        leaders,
        promotions
    }),
        applyMiddleware(thunk, logger)
    )
    return store;
}