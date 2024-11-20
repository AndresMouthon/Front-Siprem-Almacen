export interface BaseResponse<T> {
  status?: number;
  message?: string;
  data?: T | T[];
}

export interface BaseError {
  status?: number;
  data?: {
    message?: string | string[];
    status?: number;
  };
}
