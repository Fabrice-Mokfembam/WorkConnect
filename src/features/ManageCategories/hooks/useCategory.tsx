import { useMutation, useQuery,  } from "@tanstack/react-query";
import type { Category } from "../../../Data/Models";
import { CategoryService } from "../api";


// Create category
export const useCreateCategory = () =>
  useMutation({
    mutationFn: (category: Category) => CategoryService.create(category),
  });

// Get all categories
export const useGetCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: () => CategoryService.getAll(),
  });


