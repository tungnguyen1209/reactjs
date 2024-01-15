import {api} from '../helpers';

const getCustomers = async () => {
    return await api.get('/admin/customer').then((response: any) => {
        return response.data;
    });
};

export const customerService = {
    getCustomers
};