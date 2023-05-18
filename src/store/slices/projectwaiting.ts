// third-party
import { createSlice } from '@reduxjs/toolkit';
// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// types
import { DefaultRootStateProps } from 'types';

// ----------------------------------------------------------------------

const initialState: DefaultRootStateProps['getlistprojectwaiting'] = {
    error: null,
    getlistprojectwaiting: null,   
};

const slice = createSlice({
    name: 'getlistprojectwaiting',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },
     // GET project waiting
        getListWaitingSuccess(state, action) {
            console.log('state',state);
            console.log('action',action);
            state.getlistprojectwaiting = action.payload;
        },
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getListProjectWaiting() {
    return async () => {
        try {
            const response = await axios.get('application/list-waiting-approve');
            console.log('response',response);
            dispatch(slice.actions.getListWaitingSuccess(response.data.data));
            return true;
        } catch (error) {
            console.log('error',error);
            dispatch(slice.actions.hasError(error));
            return false;
        }
    };
}

