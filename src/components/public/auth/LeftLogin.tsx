import { imagenes } from "../../../assets/img/imagenes"

function LeftLogin() {
    return (
        <div className="flex lg:flex-1 bg-gray-100 dark:bg-gray-950 shadow-lg shadow-black/20 items-center justify-center">
            <img
                src={imagenes.fondoLogin}
                alt="Fondo..."
                className="hidden lg:block lg:w-4/5 lg:h-1/4"
                style={{ aspectRatio: "1000 / 1000", objectFit: "fill" }}
            />
        </div>
    )
}

export default LeftLogin
