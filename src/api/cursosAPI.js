import { client } from "./client.js";

export const cursosAPI = {
  get: async function () {
    const response = await client.request({
      url: `/api/perfil/cursos/`,
      method: "GET",
    });
    if (response) {
      return response.data;
    }
  },
};
