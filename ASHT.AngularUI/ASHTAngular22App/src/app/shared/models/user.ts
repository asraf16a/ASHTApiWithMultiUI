export interface User {

  id: number;
  username: string;
  password: string;
  passwordSalt: string;
  userTypeId: number;
  isActive: boolean;
  isDeleted: boolean;
  createdDate: Date;
  modifiedDate: Date;

}