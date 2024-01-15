import {UrlConstants} from '../constants';
import axios from 'axios';
import env from 'react-dotenv';
import {history} from './history';
import {logout} from "../store/account/actions";
import {store} from "../store";

const api = axios.create({
    baseURL: `${env.API_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});


api.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response.status === 401) {
            store.dispatch(logout());
            history.push(UrlConstants.LOGIN);
        }
        return Promise.reject(err);
    }
);

export { api };
