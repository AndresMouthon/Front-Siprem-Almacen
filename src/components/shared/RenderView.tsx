import { lazy, Suspense } from "react";
// import { Loading } from "@/components/layout/loadings";
import { IComponent } from "../../model";

interface IProps {
  loading: boolean;
  component: IComponent;
}

const privates = {
  default: lazy(() => import("../../pages/private/aliados/AliadosPage")),
  aliados: lazy(() => import("../../pages/private/aliados/AliadosPage")),
  articulos: lazy(() => import("../../pages/private/artculos/ArticulosPage")),
  almacen: lazy(() => import("../../pages/private/almacen/AlmacenPage")),
};

type ObjectKey = keyof typeof privates;

function RenderView({ loading, component }: IProps) {
  const nameComponent = component.name as ObjectKey;
  let DynamicComponent;
  if (privates[nameComponent] === undefined) {
    DynamicComponent = privates["default"];
  } else {
    DynamicComponent = privates[nameComponent];
  }
  return (
    <Suspense fallback={
      // <Loading isLoading={loading} onClose={() => { }} />
      <div>
        <h1>Loading...</h1>
      </div>
    }>
      <DynamicComponent />
    </Suspense>
  );
}

export default RenderView;
