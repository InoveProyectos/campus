import { client } from "./client.js";

export const recursoAPI = {
  getByType: async function (courseCode, uidx, ltype) {
    const response = await client.request({
      url: `/api/perfil/cursos/${courseCode}/unidades/${uidx}/link/${ltype}/`,
      method: "GET",
    });
    if (response) {
      return response.data;
    }
  },
};
