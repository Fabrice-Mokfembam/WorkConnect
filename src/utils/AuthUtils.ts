// utils/authStorage.ts
import CryptoJS from "crypto-js";
import { SECRET_KEY, STORAGE_KEY } from "../constants";
import type { User } from "../Data/Models";


interface AuthPayload {
  token: string;
  user: User;
}

/**
 * Encrypts and stores auth data in localStorage.
 */
export const storeAuthData = (auth: AuthPayload): void => {
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(auth), SECRET_KEY).toString();
  localStorage.setItem(STORAGE_KEY, encrypted);
};

/**
 * Decrypts and retrieves auth data from localStorage.
 */
export const getAuthData = (): AuthPayload | null => {
  const encrypted = localStorage.getItem(STORAGE_KEY);
  if (!encrypted) return null;

  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  } catch (error) {
    console.error("Failed to decrypt auth data:", error);
    return null;
  }
};

/**
 * Retrieves only the token from localStorage.
 */
export const getToken = (): string | null => {
  const data = getAuthData();
  return data?.token || null;
};

/**
 * Retrieves only the user from localStorage.
 */
export const getUser = (): User | null => {
  const data = getAuthData();
  return data?.user || null;
};

/**
 * Clears auth data from localStorage.
 */
export const clearAuthData = (): void => {
  localStorage.removeItem(STORAGE_KEY);
 
};
