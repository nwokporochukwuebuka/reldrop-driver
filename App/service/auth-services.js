import { Axios } from "./axios-config";

export const ApiServiceAuth = {
    /* AUTH APIS */

    LoginMutation: async (/** @type {any} */ body) => {
        const { data } = await Axios.post(`user/login/`, body);
        return data;
    },
    LogoutMutation: async (object) => {
        const { data } = await Axios.post(`user/logout/`, {}, {
            headers: {
                Authorization: `Bearer ${object.token}`,
            },
        });
        return data;
    },
    GetUserMutation: async (object) => {
        const { data } = await Axios.post(`user/get_current_user/`, {}, {
            headers: {
                Authorization: `Bearer ${object.token}`,
            },
        });
        return data;
    },
    RegisterMutation: async (/** @type {any} */ body) => {
        const { data } = await Axios.post(`user/register/`, body);
        return data;
    },
    VerifyMutation: async (/** @type {any} */ body) => {
        const { data } = await Axios.post(`user/verify-otp/`, body);
        return data;
    },
    CompleteCreationMutation: async (/** @type {any} */ body) => {
        const { data } = await Axios.post(`user/complete-signup/`, body);
        return data;
    },

};

