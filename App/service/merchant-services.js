import { Axios } from "./axios-config";


const query = new URLSearchParams(window.location.search);

const trxId = query.get("trxId");
const status = query.get("status");
const approved = query.get("approved");

export const ApiServiceMerchant = {
    GetUserQuery: async () => {
        const { data } = await Axios.get(`user`);
        localStorage.setItem("user_data", JSON.stringify(data?.data));

        return data;
    },
    ChangePasswordMutation: async (body) => {
        const { data } = await Axios.post(`user/change-password`, body);
        return data;
    },
    GetBusinessQuery: async () => {
        const { data } = await Axios.get(`merchant/business`);
        localStorage.setItem("businessList", JSON.stringify(data?.data?.map((item) => {
            return {
                ...item,
                label: item?.name,
                value: item?.name,
            };
        })));
        return data;
    },
    AddBusinessMutation: async (body) => {
        const { data } = await Axios.post(`merchant/business`, body);
        return data;
    },
    GetBusinessCategoryQuery: async (payload) => {
        const { data } = await Axios.get(`misc/business-category${payload ? `${payload}` : ''}`);
        return data;
    },
    GetBusinessIndustryQuery: async (payload) => {
        const { data } = await Axios.get(`misc/business-industry${payload ? `${payload}` : ''}`);
        return data;
    },
    /* TEAMS APIS */
    GetUsersQuery: async (payload) => {
        const { data } = await Axios.get(`merchant/team${payload ? `${payload}` : ''}`);
        return data;
    },
    AddUserMutation: async (body) => {
        const { data } = await Axios.post(`merchant/team`, body);
        return data;
    },
    UpdateUserStatusMutation: async (body) => {
        const { data } = await Axios.put(`merchant/team/${body}`);
        return data;
    },
    GetRolesQuery: async (payload) => {
        const { data } = await Axios.get(`merchant/role${payload ? `${payload}` : ''}`);
        return data;
    },
    AddRolesMutation: async (body) => {
        const { data } = await Axios.post(`merchant/role`, body);
        return data;
    },
    GetPermissionsQuery: async () => {
        const { data } = await Axios.get(`misc/permissions`);
        return data;
    },
    /* CUSTOMERS APIS */
    GetCustomersQuery: async (payload) => {
        const { data } = await Axios.get(`merchant/customer${payload ? `${payload}` : ''}`);
        return data;
    },
    AddCustomerMutation: async (body) => {
        const { data } = await Axios.post(`merchant/customer`, body);
        return data;
    },
    /* SUB ACCOUNTS APIS */
    AddSubAccountMutation: async (body) => {
        const { data } = await Axios.post(`merchant/customer`, {
            requestType: "inbound",
            data: body,
        });
        return data;
    },
    /* CUSTOMERS APIS */
    GetProductsQuery: async (payload) => {
        const { data } = await Axios.get(`merchant/product${payload ? `${payload}` : ''}`);
        return data;
    },
    AddProductMutation: async (body) => {
        const { data } = await Axios.post(`merchant/product`, body);
        return data;
    },
    DeleteProductMutation: async (body) => {
        const { data } = await Axios.delete(`merchant/product/${body}`);
        return data;
    },
    DuplicateProductMutation: async (body) => {
        const { data } = await Axios.post(`merchant/product/${body}/duplicate`);
        return data;
    },

    VerifyPaymentMutation: async () => {
        const { data } = await Axios.post(`confirm/transaction?trxId=${trxId}&status=${status}&approved=${approved}`);
        return data;
    },
};
