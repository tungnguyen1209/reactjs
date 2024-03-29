import {api} from '../helpers';

const login = async (email: string, password: string) => {
    const body = {email, password};
    return await api.post('/admin/login', body).then((response: any) => {
        return response.data;
    });
};

const getCurrentLoginUser = async () => {
    return await api.get<any>('/admin/auth').then((response) => {
        return response.data;
    });
}

export const userService = {
    login,
    getCurrentLoginUser
};