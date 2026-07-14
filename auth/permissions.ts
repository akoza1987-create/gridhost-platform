export const Permissions = {
  // Games
  GAMES_VIEW: "games.view",
  GAMES_CREATE: "games.create",
  GAMES_EDIT: "games.edit",
  GAMES_DELETE: "games.delete",

  // Servers
  SERVERS_VIEW: "servers.view",
  SERVERS_CREATE: "servers.create",
  SERVERS_EDIT: "servers.edit",
  SERVERS_DELETE: "servers.delete",
  SERVERS_RESTART: "servers.restart",

  // Users
  USERS_VIEW: "users.view",
  USERS_CREATE: "users.create",
  USERS_EDIT: "users.edit",
  USERS_DELETE: "users.delete",

  // Admins
  ADMINS_VIEW: "admins.view",
  ADMINS_CREATE: "admins.create",
  ADMINS_EDIT: "admins.edit",
  ADMINS_DELETE: "admins.delete",

  // Pricing
  PRICING_VIEW: "pricing.view",
  PRICING_EDIT: "pricing.edit",

  // Settings
  SETTINGS_VIEW: "settings.view",
  SETTINGS_EDIT: "settings.edit",

  // Audit
  AUDIT_VIEW: "audit.view",

  // Nodes
  NODES_VIEW: "nodes.view",
  NODES_EDIT: "nodes.edit",
} as const;

export type Permission =
  (typeof Permissions)[keyof typeof Permissions];