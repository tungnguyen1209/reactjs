import { IPagination } from '../../helpers';
export const LOAD_CUSTOMERS_REQUEST = 'LOAD_CUSTOMERS_REQUEST';
export const LOAD_CUSTOMERS_SUCCESS = 'LOAD_CUSTOMERS_SUCCESS';
export const LOAD_CUSTOMERS_FAILURE = 'LOAD_CUSTOMERS_FAILURE';

export interface ICustomer {
    id: string;
    name: string;
    email: string;
    phone: string
}

export interface CustomersState {
    items: ICustomer[];
    total: number;
    loading: boolean;
    error: string | null;
    editUser: ICustomer | null;
}

interface LoadCustomerRequest {
    type: typeof LOAD_CUSTOMERS_REQUEST
}

interface LoadCustomerSuccess {
    type: typeof LOAD_CUSTOMERS_SUCCESS,
    payload: IPagination<ICustomer>
}

interface LoadCustomerFailure {
    type: typeof LOAD_CUSTOMERS_FAILURE
    payload: {
        error: string;
    };
}

export type CustomersActionTypes =
    LoadCustomerRequest
    | LoadCustomerSuccess
    | LoadCustomerFailure
