import { apiClient } from "../../../services/apiClient";
import type { Category } from "../../../Data/Models";

export const CategoryService = {
  create: async (category: Category) => {
    const { data } = await apiClient.post("/categories", category);
    return data;
  },

  getAll: async () => {
    const { data } = await apiClient.get("/categories");
    return data;
  },

  update: async (id: string, category: Partial<Category>) => {
    const { data } = await apiClient.put(`/categories/${id}`, category);
    return data;
  },

  delete: async (id: string) => {
    const { data } = await apiClient.delete(`/categories/${id}`);
    return data;
  },
};
