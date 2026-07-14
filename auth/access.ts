import { Permissions } from "./permissions";
import { Roles } from "./roles";

export const RolePermissions = {
  [Roles.SUPERADMIN]: ["*"],

  [Roles.ADMIN]: [
    Permissions.GAMES_VIEW,
    Permissions.GAMES_CREATE,
    Permissions.GAMES_EDIT,

    Permissions.SERVERS_VIEW,
    Permissions.SERVERS_EDIT,
    Permissions.SERVERS_RESTART,

    Permissions.USERS_VIEW,
    Permissions.USERS_EDIT,

    Permissions.PRICING_VIEW,
    Permissions.PRICING_EDIT,

    Permissions.AUDIT_VIEW,
  ],

  [Roles.SUPPORT]: [
    Permissions.USERS_VIEW,

    Permissions.SERVERS_VIEW,
    Permissions.SERVERS_RESTART,
  ],

  [Roles.CLIENT]: [],
} as const;