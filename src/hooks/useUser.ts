import { RootState } from "@redux/config/configStore";
import { useAppSelector } from "@/hooks/rtkHooks";

const useUser = () => {
  const { id, nickname, avatar } = useAppSelector(
    (state: RootState) => state.auth.user
  );

  return { id, nickname, avatar };
};

export default useUser;
