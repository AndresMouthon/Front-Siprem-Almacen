import { IComponent, IModule } from "../../model";

export interface IMenuResponse {
  user: string;
  status: string;
  message: string;
  data_module: IModule[];
  data_components: IComponent[];
}
