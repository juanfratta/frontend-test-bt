export interface ServiceResponse<DataType> {
  success: boolean;
  data?: DataType;
  error?: Error;
}
