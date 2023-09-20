export interface ApiResponse<T> {
  data?: T;
  loading?: boolean;
  error?: ApiError;
}


export interface ApiError {
  code?: number;
  message?: string;
}
