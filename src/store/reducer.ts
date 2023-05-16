import { combineReducers } from 'redux';
import allUserReducer from './slices/allUser';

// ============================================================ //

const reducer = combineReducers({
    allUser: allUserReducer
});
export default reducer;
