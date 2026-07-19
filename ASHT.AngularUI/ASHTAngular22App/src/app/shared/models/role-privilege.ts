export interface RolePrivilege {

  id: number;
  rolePrivilegeName: string;
  description: string;
  roleId: number;
  isActive: boolean;
  isDeleted: boolean;
  createdDate: Date;
  modifiedDate: Date;

}
