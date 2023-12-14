import { client } from "./client.js";

export const cuotasAPI = {
  get: async function () {
    const response = await client.request({
      url: `/api/perfil/cuotas/`,
      method: "GET",
    });
    if (response) {
      return response.data;
    }
  },
};
