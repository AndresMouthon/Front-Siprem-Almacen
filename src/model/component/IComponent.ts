export interface IComponent {
  id: number;
  icon: string | null;
  name: string;
  option: string;
  action: string;
  path: string;
  permission: string;
  show_menu: number;
  active: number;
  module: number;
}

export interface IModule {
  id: number;
  icon: string | null;
  name: string;
}
