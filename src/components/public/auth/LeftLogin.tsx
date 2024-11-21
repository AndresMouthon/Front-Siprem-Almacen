import { imagenes } from "../../../assets/img/imagenes"

function LeftLogin() {
    return (
        <div className="flex lg:flex-1 bg-gray-100 dark:bg-gray-950 shadow-lg shadow-black/20 items-center justify-center">
            <img
                src={imagenes.fondoLogin}
                alt="Fondo..."
                className="hidden lg:block lg:w-4/6 lg:h-1/5"
                style={{ aspectRatio: "1000 / 1000", objectFit: "fill" }}
            />
            <div style={{ left: "10%", top: "32%" }} className="absolute w-8 h-8 bg-yellow-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div style={{ right: "48%", top: "32%" }} className="absolute top-1/4 w-8 h-8 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.2s]" />
            <div style={{ left: "10%", bottom: "25%" }} className="absolute w-8 h-8 bg-red-300 rounded-full animate-bounce [animation-delay:-0.1s]" />
            <div style={{ right: "48%", bottom: "25%" }} className="absolute right-20 w-8 h-8 bg-gray-300 rounded-full animate-bounce" />
        </div>
    )
}

export default LeftLogin
