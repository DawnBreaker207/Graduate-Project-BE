import { PermissionList, RolePermissions } from '../interfaces/Permissions';

export const permissions: RolePermissions = {
  admin: [
    PermissionList.CREATE_PRODUCT,
    PermissionList.UPDATE_PRODUCT,
    PermissionList.DELETE_PRODUCT,
    PermissionList.VIEW_PRODUCT,
    PermissionList.LIST_PRODUCTS,
    PermissionList.CREATE_CATEGORY,
    PermissionList.UPDATE_CATEGORY,
    PermissionList.DELETE_CATEGORY,
    PermissionList.VIEW_CATEGORY,
    PermissionList.LIST_CATEGORIES,
    PermissionList.CREATE_ORDER,
    PermissionList.VIEW_ORDER,
    PermissionList.LIST_ORDERS,
    PermissionList.UPDATE_ORDER_STATUS,
    PermissionList.CREATE_USER,
    PermissionList.UPDATE_USER,
    PermissionList.DELETE_USER,
    PermissionList.LIST_USERS,
    PermissionList.VIEW_CART,
    PermissionList.DELETE_CART,
  ],
  manager: [
    PermissionList.CREATE_PRODUCT,
    PermissionList.UPDATE_PRODUCT,
    PermissionList.VIEW_PRODUCT,
    PermissionList.LIST_PRODUCTS,
    PermissionList.CREATE_ORDER,
    PermissionList.VIEW_ORDER,
    PermissionList.LIST_ORDERS,
    PermissionList.VIEW_CART,
  ],
  user: [
    PermissionList.VIEW_PRODUCT,
    PermissionList.LIST_PRODUCTS,
    PermissionList.VIEW_CATEGORY,
    PermissionList.LIST_CATEGORIES,
    PermissionList.CREATE_ORDER,
    PermissionList.VIEW_ORDER,
    PermissionList.CREATE_CART,
    PermissionList.UPDATE_CART,
    PermissionList.DELETE_CART,
    PermissionList.VIEW_CART,
  ],
};
export const roles = {
  admin: [
    ...permissions.user,
    ...permissions.manager,
    permissions.admin,
  ] as PermissionList[],
  manager: [...permissions.user, ...permissions.manager] as PermissionList[],
  user: [...permissions.user] as PermissionList[],
};
export const rolePermission: RolePermissions = {
  admin: roles.admin,
  manager: roles.manager,
  user: roles.user,
};