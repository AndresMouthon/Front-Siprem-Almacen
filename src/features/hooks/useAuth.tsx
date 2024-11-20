import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../api/auth/authApi";
import { Ilogin, IloginData } from "../../model/login/Ilogin";
import { BaseError } from "../../utils/baseResponse";
import { add_Bases, add_Token, add_Usuarios } from "../redux";
import { useAppDispatch } from "./storeHooks";

function useAuth() {

    const [usuario, setUsuario] = useState<Ilogin>({
        user: "",
        password: "",
        code: 0,
    });
    const [loading, setLoading] = useState<boolean>(false);
    const navigate: NavigateFunction = useNavigate();
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();

    const handleChange = (e: any) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
        if (e.target.name === "code") {
            setUsuario({ ...usuario, [e.target.name]: parseInt(e.target.value) });
        }
    };

    const iniciarSesion = async () => {
        if (!usuario.user || !usuario.password || !usuario.code) {
            toast.warning("Por favor rellene todos los campos");
        } else {
            await postLogin();
            navigate("/app", { replace: true, preventScrollReset: true });
        };
    };

    const postLogin = async () => {
        setLoading(true);
        try {
            const response: IloginData = await login(usuario).unwrap();
            dispatch(add_Token(response._token));
            dispatch(add_Bases(response.data.user.bases));
            dispatch(
                add_Usuarios({ codeEmpresa: usuario.code, username: response.data.user.name })
            );
        } catch (error) {
            if (error && (error as BaseError).data) {
                const baseError = error as BaseError;
                toast.error(baseError.data?.message as string);
            }
        }
        setLoading(false);
    };

    return {
        loading,
        handleChange,
        iniciarSesion,
    };
}

export default useAuth;
