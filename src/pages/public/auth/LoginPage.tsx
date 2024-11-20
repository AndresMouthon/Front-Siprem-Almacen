import LeftLogin from "../../../components/public/auth/LeftLogin";
import RightFormLogin from "../../../components/public/auth/RightFormLogin";
import useAuth from "../../../features/hooks/useAuth";

function LoginPage() {
  const {
    loading,
    handleChange, iniciarSesion
  } = useAuth();
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <LeftLogin />
      <RightFormLogin
        loading={loading}
        handleChange={handleChange} iniciarSesion={iniciarSesion}
      />
    </div>
  )
}

export default LoginPage
