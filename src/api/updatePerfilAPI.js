import { client } from "./client.js";

export const updatePerfilAPI = {
  update: async function (username, data) {
    console.log("Enviando actualizaciones:", data);
    try {
      const response = await client.request({
        url: `/api/perfil/${username}/`,
        method: "PATCH",
        data: data, // Enviar los datos de actualización
      });

      if (response) {
        return response.data; // Devuelve los datos actualizados si la respuesta es exitosa
      }
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      throw error; // Lanza el error para manejarlo en la llamada
    }
  },
};
