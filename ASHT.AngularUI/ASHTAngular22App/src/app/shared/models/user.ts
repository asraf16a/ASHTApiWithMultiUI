export interface User {
  id: any;
  username: any;
  userTypeName?: string;
  userTypeId: number;
  password?:string;
  passwordSalt?:string;
  isActive: boolean;
  isDeleted:boolean;
  createdDate: string;
  modifiedDate: string;
}