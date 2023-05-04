import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const role = localStorage.getItem("role");
const token = localStorage.getItem("token");
export const authAtom = atom({
  isAuthenticated: role && token ? true : false,
  role,
  token,
  loading: true,
});

export const useIsAuthenticated = () => {
  const [auth] = useAtom(authAtom);
  return auth.isAuthenticated;
};

export const useRole = () => {
  const [auth] = useAtom(authAtom);
  return auth.role;
};
