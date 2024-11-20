export interface IPermission {
  status?: string;
  message?: string;
  user?: string;
  data_permissions: IDataPermission[];
}

export interface IDataPermission {
  id: number;
  icon: string;
  name: string;
  option: string;
  action: string;
  path: string;
  permission: string;
  show_menu: number;
  active: number;
}
