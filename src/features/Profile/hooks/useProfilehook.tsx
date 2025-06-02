import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProfileService } from "../api";
import type { User } from "../../../Data/Models";

// Get profile by name
export const useGetProfileByName = (name: string) =>
  useQuery({
    queryKey: ["profile", name],
    queryFn: () => ProfileService.getByName(name),
    enabled: !!name, 
  });

// Update profile
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (profile: Partial<User>) => ProfileService.update(profile),
    onSuccess: (variables) => {
    
      queryClient.invalidateQueries({ 
        queryKey: ["profile", variables.name] 
      });
      queryClient.invalidateQueries({ 
        queryKey: ["profile", "current"] 
      });
      
    },
   
  });
};