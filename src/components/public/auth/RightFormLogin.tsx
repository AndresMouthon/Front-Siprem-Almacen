import { Label, TextInput } from "flowbite-react";
import { FaCode, FaLock, FaUser } from "react-icons/fa";
import { imagenes } from "../../../assets/img/imagenes";
import SpinerUtil from "../../../utils/spinner/SpinerUtil";

function RightFormLogin({ handleChange, loading, iniciarSesion }: any) {
    return (
        <div className="flex items-center justify-center w-full lg:w-[40%] bg-blue-100 dark:bg-gray-950 shadow-lg shadow-black/20 min-h-screen relative">
            <div className="mx-auto flex flex-col items-center justify-center bg-white p-10 shadow-lg dark:bg-gray-900 w-full h-full sm:shadow-none min-h-screen">
                <img src={imagenes.logo} alt="Fondo..." className="w-20" />
                <h1 className="text-3xl my-5">Inicio de sesión</h1>
                <section className="flex w-full flex-col items-start justify-center gap-4 h-full sm:h-auto">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="user" value="Usuario" />
                        </div>
                        <TextInput id="user" icon={FaUser} type="text" placeholder="Ingrese su usuario..." required
                            // value={usuario.cedula} 
                            onChange={handleChange} 
                            name="user" />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="pass" value="Contraseña" />
                        </div>
                        <TextInput id="pass" type="password" placeholder="••••••••••••••••" required name="password" icon={FaLock}
                        // value={usuario.password} 
                        onChange={handleChange} 
                        />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="code" value="Código" />
                        </div>
                        <TextInput id="code" type="number" placeholder="Ej. 123" required name="code" icon={FaCode}
                        // value={usuario.password} 
                        onChange={handleChange} 
                        />
                    </div>
                    <button
                        onClick={iniciarSesion}
                        className="inline-flex items-center bg-blue-800 hover:bg-blue-900 transition-all text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-5 mb-10">
                        {loading ? <SpinerUtil size={4} /> : "Ingresar"}
                    </button>
                </section>
            </div>
        </div>
    )
}

export default RightFormLogin
