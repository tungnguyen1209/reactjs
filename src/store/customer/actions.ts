import {
    CustomersActionTypes,
    LOAD_CUSTOMERS_REQUEST,
    LOAD_CUSTOMERS_SUCCESS,
    LOAD_CUSTOMERS_FAILURE,
} from './types';
import {customerService} from "../../service/customer.service";
import {Dispatch} from "react";

export const getCustomers = (curPage: number, pageSize: number) => {
    return async (dispatch: Dispatch<CustomersActionTypes>) => {
        dispatch({
            type: LOAD_CUSTOMERS_REQUEST
        });

        try {
            const response = await customerService.getCustomers(curPage, pageSize);
            console.log(response);
            dispatch({
                type: LOAD_CUSTOMERS_SUCCESS,
                payload: response,
            });
        } catch (error: any) {
            dispatch({
                type: LOAD_CUSTOMERS_FAILURE,
                payload: {error: error.toString()},
            });
        }
    }
};