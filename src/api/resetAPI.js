import { client } from "./client.js";

export const resetAPI = {
  post: async function (payload) {
    const response = await client.request({
      url: `/api/auth/password/reset/`,
      method: "POST",
      data: payload
    });
    if (response) {
      return response.data;
    }
  },
};
