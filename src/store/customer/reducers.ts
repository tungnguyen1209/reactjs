import {
    CustomersActionTypes,
    CustomersState,
    LOAD_CUSTOMERS_REQUEST,
    LOAD_CUSTOMERS_SUCCESS,
    LOAD_CUSTOMERS_FAILURE,
} from './types';

const initialState: CustomersState = {
    items: [],
    total: 0,
    loading: false,
    error: null,
    editUser: null
};

const customerReducer = (
    state: CustomersState = initialState,
    action: CustomersActionTypes
): CustomersState => {
    switch (action.type) {
        case LOAD_CUSTOMERS_REQUEST: {
            return {...state, loading: true};
        }
        case LOAD_CUSTOMERS_SUCCESS: {
            return {
                ...state,
                items: action.payload.items,
                total: action.payload.total,
                loading: false,
                error: null,
            };
        }
        case LOAD_CUSTOMERS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        }
        default:
            return state;
    }
}

export {customerReducer};