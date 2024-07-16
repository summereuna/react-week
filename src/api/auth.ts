import authApi from "@axios/authApi";
import { User } from "@/types";

// POST register
export const authRegister = async (user: User) => {
  const response = await authApi.post(`/register`, user);
  return response.data;
};

// POST login
export const authLogin = async (user: User) => {
  const response = await authApi.post(`/login`, user);
  return response.data;
};

// // GET 유저
export const getUserByToken = async (token: string) => {
  const response = await authApi.get(`/user`, {
    headers: {
      Authorization: `Bearer ${token}`, //이건 나중에 고치도록 하자. 아직..쓸일이 없음
    },
  });
  return response.data;
};
