import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authRegister } from "@/api/auth";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: authRegister,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["authRegister"]);
      navigate("/login");
    },
    onError: (error) => {
      alert("가입실패:", error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = {
        id,
        password,
        nickname: "익명",
      };

      mutate(newUser);
    } catch (error) {
      console.error("회원 가입 실패:", error);
      alert("회원 가입 실패");
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
