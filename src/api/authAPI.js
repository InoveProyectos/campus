import { client } from "./client"
import jwt_decode from "jwt-decode";

const tokenName = "codenove";
const tokenType = "Bearer"

const getToken = () => {
  const token = localStorage.getItem(tokenName);
  return token ?? ""; // If token is null, return empty string
}

const setToken = (token) => {
  localStorage.setItem(tokenName, token);
}

const removeToken = () => {
  localStorage.removeItem(tokenName);
}

const decodeToken = (token) => {
  let data = null;
  try {
    if(token !== "") {
      // Token decode
      const decodedToken = jwt_decode(token);
      if(decodedToken) {
        data = {
          username: decodedToken.username,
          name: decodedToken.name,
        }
      }
    }
  }
  catch {
    console.log("Error decoding token");
  }
  return data;
}

export const getAuthHeader = () => {
  return `${tokenType} ${getToken()}`
}

export const getSessionInfo = () => {
  return decodeToken(getToken());
}

export const authAPI = {
  login: async function (username, password) {
    const response = await client.request({
      url: `/api/auth/login/`,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      data: {
        username: username,
        password, password
      }
    })
    if(response) {
      setToken(response.data.token);
      return decodeToken(response.data.token)
    }
  },

  logout: async function () {
    const response = await client.request({
      url: `/api/auth/logout/`,
      headers: {
        "Authorization": getAuthHeader(),
      },
      method: "GET",
    })
    if(response) {
      removeToken()
      return response.data
    }
  },

  refresh: async function () {
    const response = await client.request({
      url: `/api/auth/refresh/`,
      method: "GET",
    })
    if(response) {
      setToken(response.data.token);
      return response.data.token
    }
  },


}

// Request interceptor for API calls
client.interceptors.request.use(
  async config => {
    // Things before request is sent
    // Add to every request the auth header
    config.headers = { 
      "Authorization": getAuthHeader(),
    }
    return config;
  },
  error => {
    // Things with request error
    return Promise.reject(error)
});


// Response interceptor for API calls
client.interceptors.response.use((response) => {
  // Do something with response data
  return response
}, async function (error) {
  // Do something with response error
  const originalRequest = error.config;

  if (!originalRequest._retry && 
      (error.response.status === 403 || error.response.status === 401) &&
      !window.location.pathname.includes('login') && !window.location.pathname.includes('logout')
    ) {
    // Check if it's the refresh endpoint
    if (originalRequest.url.endsWith('/refresh/')) {
      const sourcePath = window.location.pathname; // Obtener la ubicación de origen
      window.location.href = `/logout?next=${sourcePath}`;
      return Promise.reject(error);  // Exclude interceptor for refresh endpoint
    }
    // Set request retry true
    originalRequest._retry = true;

    // Try logging with refresh token (get session)
    await authAPI.refresh();

    // Try again the original request
    return client(originalRequest);
  }
  // Return error
  return Promise.reject(error);
});