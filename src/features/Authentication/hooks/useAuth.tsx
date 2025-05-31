import { useMutation } from "@tanstack/react-query";
import type { User } from "../../../Data/Models";
import { AuthService } from "../api/api";




export const useRegister = () => {   
    return useMutation({
      mutationFn: (user: User) => AuthService.register(user),
    
    });
  };
export const useLogin = () => {   
    return useMutation({
      mutationFn: (user: User) => AuthService.login(user),
    
    });
  };