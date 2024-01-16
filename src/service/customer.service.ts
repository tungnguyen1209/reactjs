import {api, IPagination} from '../helpers';
import {ICustomer} from "../store/customer/types";

const getCustomers = async (curPage: number, pageSize: number) => {
    return await api.get<IPagination<ICustomer>>(
        `/admin/customer?pageSize=${pageSize}&curPage=${curPage}`
    ).then((response: any) => {
        return response.data;
    });
};

export const customerService = {
    getCustomers
};