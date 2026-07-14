export const Roles = {
  SUPERADMIN: "superadmin",
  ADMIN: "admin",
  SUPPORT: "support",
  CLIENT: "client",
} as const;

export type UserRole =
  (typeof Roles)[keyof typeof Roles];