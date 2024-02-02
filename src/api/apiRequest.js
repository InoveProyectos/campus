import axios from 'axios'
import { client } from "./client.js";
import { getAuthHeader } from "./authAPI.js";
import { React } from 'react';

export const requestAPI = {
  
  get: async function (cuota_id) {
    try {
      const response = await client.request({
        url: `/api/perfil/cuotas/${cuota_id}/comprobante/`,
        headers: {
          "Authorization": getAuthHeader(),
        },
        method: "GET",
        responseType: "blob", // Mantener responseType
      });

      if (response.status !== 200) {
        throw new Error("Error al descargar el comprobante.");
      }

      const disposition = response.headers["content-disposition"];
      const fileNameMatch = disposition && disposition.match(/filename="(.+)"/);
      const fileName =
        fileNameMatch && fileNameMatch[1]
          ? fileNameMatch[1]
          : "comprobante.png";

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const file = new File([blob], fileName, { type: blob.type });

      const url = window.URL.createObjectURL(file);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;

      link.click();

      window.URL.revokeObjectURL(url);

      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
  post: async function (archivo, cuota_id) {
    try {
      if (archivo) {
        const formData = new FormData();
        formData.append("file", archivo);

        const response = await client.post(
          `/api/perfil/cuotas/${cuota_id}/comprobante/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": getAuthHeader(),
            },
            // No es necesario incluir 'method' en este caso
          }
        );
      } 
    } catch (error) {
      console.error("Error:", error);
    }
  },
};
