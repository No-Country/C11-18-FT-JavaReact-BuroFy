import { logoutUser, setVerified } from "@/redux/features/userSlice";
import { useAppDispatch } from "./useApp";
import { useRouter } from "next/navigation";
import { logouUserApp } from "@/lib/services-burofy/logouUserApp";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    dispatch(setVerified("checking"));
    try {
      await logouUserApp();
      router.push("/registro");
      //close conection with firebase
      //delete all states of user
    } catch (error) {
      console.log((error as Error).message);
    }
    dispatch(logoutUser());
  };

  return { handleLogout };
};

export default useAuth;
