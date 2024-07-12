import { RootState } from "@redux/config/configStore";
import { useAppSelector } from "@/hooks/rtkHooks";

const useAuth = () => {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  return isLoggedIn; //로그인 했는지
};

export default useAuth;
