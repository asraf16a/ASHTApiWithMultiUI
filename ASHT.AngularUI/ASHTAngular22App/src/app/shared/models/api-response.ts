export interface ApiResponse<T = any> {
  status: boolean;
  statusCode: number;
  data: T;
  errors: string[];
}