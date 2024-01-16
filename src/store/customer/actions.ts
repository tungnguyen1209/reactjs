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
            dispatch({
                type: LOAD_CUSTOMERS_SUCCESS,
                payload: {
                    total: response.data.total,
                    page: response.data.curPage,
                    pageSize: response.data.pageSize,
                    items: response.data.items
                },
            });
        } catch (error: any) {
            dispatch({
                type: LOAD_CUSTOMERS_FAILURE,
                payload: {error: error.toString()},
            });
        }
    }
};