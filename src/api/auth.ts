import authApi from "@axios/authApi";
import { User } from "@/types";

// POST login
export const authLogin = async (user: User) => {
  const response = await authApi.post(`/login`, user);
  // console.log(response);
  return response.data;
};

// POST login
export const authRegister = async (user: User) => {
  const response = await authApi.post(`/register`, user);
  // console.log(response);
  return response.data;
};

// // GET 유저
// export const getUserByToken = async (token: string) => {
//   const response = await authApi.get(`/user`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   console.log(response);
//   return response.data;
// };
