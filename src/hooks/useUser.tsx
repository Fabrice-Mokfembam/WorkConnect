import { useCallback } from "react";
import { clearAuthData, getToken, getUser, storeAuthData } from "../utils/AuthUtils";
import type { User } from "../Data/Models";


interface AuthPayload {
  token: string;
  user: User;
}

export const useUser = () => {
  const user = getUser();
  const token = getToken();

  const storeUser = useCallback((auth: AuthPayload) => {
    storeAuthData(auth);
  }, []);

  return {
    user,
    token,
    storeUser,
    clearUser: clearAuthData,
  };
};
