export const XY_BASE_PATH = "/x-y";

export const xyRoutes = {
  home: XY_BASE_PATH,
  browse: `${XY_BASE_PATH}/browse`,
  assistant: `${XY_BASE_PATH}/assistant`,
  booking: `${XY_BASE_PATH}/booking`,
  providerSetup: `${XY_BASE_PATH}/provider-setup`,
} as const;

export function isXyAppPath(pathname: string): boolean {
  return pathname === XY_BASE_PATH || pathname.startsWith(`${XY_BASE_PATH}/`);
}
