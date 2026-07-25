export interface User {
  id: any;
  username: any;
  userTypeName?: string;
  userTypeId: number;
  isActive: boolean;
  isDeleted:boolean;
  createdDate: string;
  modifiedDate: string;
}