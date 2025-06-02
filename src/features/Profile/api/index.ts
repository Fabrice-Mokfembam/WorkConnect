import type { User } from "../../../Data/Models";
import { apiClient } from "../../../services/apiClient";


export const ProfileService = {
  // Get profile by name
  getByName: async (name: string) => {
    const { data } = await apiClient.get(`/users/profileUser/${name}`);
    return data;
  },

  // Update profile
  update: async (profile: Partial<User>) => {
    const { data } = await apiClient.patch('/users/profile', profile);
    return data;
  },
};