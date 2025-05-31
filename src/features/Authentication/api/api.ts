import type { User } from "../../../Data/Models";
import { apiClient } from "../../../services/apiClient";


export const AuthService = {
  login: async (user: User) => {
    const { data } = await apiClient.post("/auth/login", user);
    return data;
  },

  register: async (user: User) => {
    const { data } = await apiClient.post("/auth/register", user);
    return data;
  },
  
};