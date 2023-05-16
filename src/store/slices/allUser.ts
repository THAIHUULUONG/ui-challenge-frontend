import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../index';
import { DefaultRootStateProps } from '../types';
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState: DefaultRootStateProps['allUser'] = {
    error: null,
    dataAllUser: [],
};

const slice = createSlice({
    name: 'allUser',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET ALL
        getUsersListSuccess(state, action) {
            state.dataAllUser = action.payload;
        },
    }
});

export default slice.reducer;

// ----------------------------------------------------------------------

export function getUsersList() {
    return async () => {
        try {
            const response = await axios.get('/users');
            dispatch(slice.actions.getUsersListSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

