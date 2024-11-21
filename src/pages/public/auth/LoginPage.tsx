import LeftLogin from "../../../components/public/auth/LeftLogin";
import RightFormLogin from "../../../components/public/auth/RightFormLogin";
import useAuth from "../../../features/hooks/useAuth";

// import { Button, Label, TextInput } from "flowbite-react";
// import { FaLock, FaUser } from "react-icons/fa";
// import { imagenes } from "../../../assets/img/imagenes";

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

// function LoginPage() {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center p-4 bg-white">
//       <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
//         <div className="w-full max-w-sm mx-auto">
//           <div className="space-y-4">
//             <div className="space-y-2 text-center">
//               <h1 className="text-2xl font-semibold tracking-tight text-gray-700">Iniciar sesión</h1>
//             </div>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="user">Usuario</Label>
//                 <TextInput id="user" placeholder="Ingrese su usuario..." type="text" icon={FaUser} />
//               </div>
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <Label htmlFor="password">Contraseña</Label>
//                 </div>
//                 <TextInput id="password" placeholder="•••••••" type="password" icon={FaLock} />
//               </div>
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <Label htmlFor="code">Código</Label>
//                 </div>
//                 <TextInput id="code" placeholder="Ej. 123" type="number" icon={FaLock} />
//               </div>
//               <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
//                 Login
//               </Button>
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-white px-2 text-muted-foreground">
//                     <img src={imagenes.logo} className="w-10" alt="Logo..." />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="hidden lg:block relative h-full min-h-[400px]">
//           <img
//             src={imagenes.fondoLogin}
//             alt="Login illustration"
//             width={400}
//             height={400}
//             className="absolute inset-0 w-5/6 h-full object-contain mx-auto"
//           />
//           <div className="absolute top-1/4 -left-1 w-8 h-8 bg-yellow-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
//           <div className="absolute top-1/4 -right-1 w-8 h-8 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.2s]" />
//           <div className="absolute bottom-1/4 -left-1 w-8 h-8 bg-red-300 rounded-full animate-bounce [animation-delay:-0.1s]" />
//           <div className="absolute bottom-1/4 -right-1 w-8 h-8 bg-gray-300 rounded-full animate-bounce" />
//         </div>
//       </div>
//     </div>
//   )
// }
// export default LoginPage
