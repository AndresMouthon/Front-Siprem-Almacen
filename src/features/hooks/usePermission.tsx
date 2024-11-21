import { useGetMenuQuery } from "../../api/permission/permissionApi";

function usePermission() {
    const { data, isLoading, isError, error } = useGetMenuQuery();
    // const [components, setComponents] = useState<IMenuResponse[] | null>(null);

    /*=========================== OBTENER MENU =========================== */

    // const getListadoMenu = () => {
    //     if (isSuccess) {
    //         setComponents(data);
    //     }
    // };
    // useEffect(() => {
    //     getListadoMenu();
    // }, []);

    return { isLoading, isError, error, data };
}

export default usePermission;
