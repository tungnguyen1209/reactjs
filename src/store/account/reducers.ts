import {
    AccountActionTypes,
    AccountState,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOG_OUT
} from './types';

const initialState: AccountState = {
    user: null,
    loading: false,
    error: null,
    token: null,
    refreshToken: null,
};
const accountReducer = (
    state: AccountState = initialState,
    action: AccountActionTypes
): AccountState => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {...state, loading: true};
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                refreshToken: action.payload.refreshToken,
                token: action.payload.token,
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                loading: false,
                token: null,
                refreshToken: null,
                error: action.payload.error,
            };
        }
        case LOG_OUT: {
            return {
                ...state,
                loading: false,
                user: null,
                token: null,
                error: null,
            };
        }
        default:
            return state;
    }
};
export {accountReducer};