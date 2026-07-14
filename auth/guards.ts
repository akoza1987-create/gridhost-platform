import { Permission } from "./permissions";
import { RolePermissions } from "./access";
import { UserRole } from "./roles";

export function hasPermission(
  role: UserRole,
  permission: Permission
) {
  const permissions = RolePermissions[role];

  if (permissions.includes("*")) {
    return true;
  }

  return permissions.includes(permission);
}