import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../features/hooks";

export function AuthGuard() {
  const token: string = useAppSelector((state) => state.token.value);
  return !token ? (
    <>
      <Navigate replace to={"/login"} />
    </>
  ) : (
    <>
      <Outlet />
    </>
  );
}
