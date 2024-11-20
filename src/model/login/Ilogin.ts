export interface Ilogin {
  user: string;
  password: string;
  code: number;
}

export interface IloginData {
  message: string;
  _token: string;
  data: IuserInfo;
}

export interface IuserInfo {
  user: {
    id: number;
    name: string;
    user: string;
    email: string;
    phone: string;
    created_at: string;
    updated_at: string;
    bases: Ibases[];
  };
}

export interface Ibases {
  id: number;
  code: number;
  name: string;
  name_db: string;
}
