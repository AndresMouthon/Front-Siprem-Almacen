import LeftLogin from "../../../components/public/auth/LeftLogin"
import RightFormLogin from "../../../components/public/auth/RightFormLogin"

function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <LeftLogin />
      <RightFormLogin />
    </div>
  )
}

export default LoginPage
